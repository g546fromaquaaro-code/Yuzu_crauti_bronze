const EXTRA_STEP_COUNT=8;

function chooseSentenceJapOptions(correct){
  const pool=uniq(LESSONS.flatMap(l=>l.sentences.map(s=>s[1]))).filter(x=>x!==correct);
  return shuffle([correct,...shuffle(pool).slice(0,3)]);
}

renderCards=function(){
  const cards=LESSONS.map((l,idx)=>{
    const p=lessonProgress(l.n);
    const percent=Math.round((Math.min(p.bestStage||0,EXTRA_STEP_COUNT)/EXTRA_STEP_COUNT)*100);
    const colors=[['#8ec5ff','#7de2ff'],['#ffd6f0','#ffc6e5'],['#d8d1ff','#bad8ff'],['#b9f1df','#92d8ff'],['#ffe7b3','#ffd9a6'],['#ffd2cd','#ffc1bd'],['#d8e5ff','#c5d7ff'],['#d4f3ff','#c4eeff'],['#dcd7ff','#cdd3ff'],['#d7f1ff','#c7e7ff']][idx%10];
    return `<button class='lessonCard' onclick='startLesson(${l.n})'>
      <div class='top'><div class='roundIcon'>${l.emoji}</div><div style='text-align:right'><div class='count'>${p.cleared?'CLEAR':'STEP'} ${p.bestStage||0}/${EXTRA_STEP_COUNT}</div><div class='smallTag'>Lesson ${l.n}</div></div></div>
      <h3>${l.title}</h3>
      <div class='progress'><i style='width:${percent}%;background:linear-gradient(90deg,${colors[0]},${colors[1]})'></i></div>
      <div class='lessonMeta'><span>${p.clears||0}回クリア</span><span>${percent}%</span></div>
    </button>`;
  }).join('');
  byId('cards').innerHTML=cards;
  renderBadges();
  updateHomeHeader();
};

startLesson=function(n){
  playTap();
  const lesson=LESSONS.find(x=>x.n===n);
  state.lesson=lesson;
  state.stage=1;
  state.idx=0;
  state.picked=[];
  state.showJP=false;
  state.reviewSet=new Set();
  state.sentenceListenQueue=shuffle([...Array(lesson.sentences.length).keys()]);
  state.challengeQueue=shuffle(['word','listen','sentenceListen','qa','grammar']);
  state.extraAwarded=false;
  state.words=state.wordsQueue=shuffle([...Array(lesson.words.length).keys()]);
  state.listenQueue=shuffle([...Array(lesson.words.length).keys()]);
  state.reviewQueue=[];
  state.qa=state.qaQueue=shuffle([...Array(lesson.qa.length).keys()]);
  state.grammar=state.grammarQueue=shuffle([...Array(lesson.grammar.length).keys()]);
  state.sentences=state.sentenceQueue=shuffle([...Array(lesson.sentences.length).keys()]);
  state.currentTrack=store.trackOrder[(lesson.n-1)%BGM_TRACKS.length];
  store.lessonTrack[lesson.n]=state.currentTrack;
  saveStore();
  startBgmTrack(state.currentTrack);
  byId('playNav').textContent=`Lesson ${lesson.n} ・ ${lesson.title} ・ BGM: ${BGM_TRACKS[state.currentTrack].name}`;
  byId('playTitle').textContent=`Lesson ${lesson.n} · ${lesson.title}`;
  byId('home').classList.add('hidden');
  byId('play').classList.remove('hidden');
  render();
};

currentTotal=function(){
  if(state.stage===1)return state.wordsQueue.length;
  if(state.stage===2)return state.listenQueue.length;
  if(state.stage===3)return state.sentenceListenQueue.length;
  if(state.stage===4)return Math.max(state.reviewQueue.length,1);
  if(state.stage===5)return Math.max(state.qaQueue.length,1);
  if(state.stage===6)return state.grammarQueue.length;
  if(state.stage===7)return state.sentenceQueue.length;
  if(state.stage===8)return 5;
  return 1;
};

updatePlayHeader=function(){
  ['chip1','chip2','chip3','chip4','chip5','chip6','chip7','chip8'].forEach(id=>byId(id).className='stageChip');
  for(let i=1;i<=8;i++){
    const chip=byId('chip'+i);
    if(state.stage===i)chip.classList.add('on');
    else if(state.stage>i)chip.classList.add('done');
  }
  const total=currentTotal();
  byId('scorePill').textContent=`${Math.min(state.idx,total)} / ${total}`;
  byId('barFill').style.width=`${Math.min(100,(Math.min(state.idx,total)/Math.max(1,total))*100)}%`;
};

render=function(){
  updatePlayHeader();
  if(state.stage===1)return renderWordStep();
  if(state.stage===2)return renderListenStep();
  if(state.stage===3)return renderSentenceListenStep();
  if(state.stage===4)return renderReviewStep8();
  if(state.stage===5)return renderQaStep8();
  if(state.stage===6)return renderGrammarStep8();
  if(state.stage===7)return renderSentenceStep8();
  if(state.stage===8)return renderChallengeStep();
  return renderFinish8();
};

function renderSentenceListenStep(){
  setProgress(3);
  if(state.idx>=state.sentenceListenQueue.length){
    state.reviewQueue=shuffle([...state.reviewSet]);
    state.stage=4;state.idx=0;return render();
  }
  const item=state.lesson.sentences[state.sentenceListenQueue[state.idx]];
  state.choices=state.currentChoices=chooseSentenceJapOptions(item[1]);
  byId('panelBody').innerHTML=`<div class='sub'>③ 文章リスニング ${state.idx+1} / ${state.sentenceListenQueue.length}</div>
    <div class='center'><button class='speakerBtn' onclick='playTap();speak(${JSON.stringify(item[0])})'><img src='speaker.svg' alt='speaker'><span>英文を聞く</span></button>
    <p class='note' style='margin-top:10px'>聞こえた英文の意味を、日本語4択から選ぼう。</p></div>
    <div class='choiceGrid'>${state.currentChoices.map((c,i)=>`<button class='choice jp' onclick='answerSentenceListen(${i})'>${c}</button>`).join('')}</div><div class='feedback' id='fb'></div>`;
  setTimeout(()=>speak(item[0]),350);
}
function answerSentenceListen(i){
  const item=state.lesson.sentences[state.sentenceListenQueue[state.idx]],correct=item[1],ans=state.currentChoices[i],btns=[...document.querySelectorAll('.choice')];
  btns.forEach(b=>b.disabled=true);
  if(ans===correct){btns[i].classList.add('good');byId('fb').textContent='正解！';playGood();}
  else{btns[i].classList.add('bad');btns.find(b=>b.textContent===correct)?.classList.add('good');byId('fb').textContent=`正解は「${correct}」`;playBad();}
  state.idx++;setTimeout(render,800);
}

function renderReviewStep8(){
  setProgress(4);
  if(!state.reviewQueue.length||state.idx>=state.reviewQueue.length){state.stage=5;state.idx=0;return render();}
  const wi=state.reviewQueue[state.idx],w=state.lesson.words[wi];
  state.choices=state.currentChoices=chooseEngOptions(w[0]);
  byId('panelBody').innerHTML=`<div class='sub'>④ 間違い復習 ${state.idx+1} / ${state.reviewQueue.length}</div><div class='center'><div class='bigEmoji'>${w[2]}</div><button class='speakerBtn' onclick='playTap();speak(${JSON.stringify(w[0])})'><img src='speaker.svg'><span>発音を聞く</span></button><p class='note' style='margin-top:10px'>単語4択・リスニングで間違えた単語をもう一度。</p></div><div class='choiceGrid'>${state.currentChoices.map((c,i)=>`<button class='choice' onclick='answerReview8(${i})'>${c}</button>`).join('')}</div><div class='feedback' id='fb'></div>`;
}
function answerReview8(i){
  const wi=state.reviewQueue[state.idx],correct=state.lesson.words[wi][0],ans=state.currentChoices[i],btns=[...document.querySelectorAll('.choice')];
  btns.forEach(b=>b.disabled=true);
  if(ans===correct){btns[i].classList.add('good');byId('fb').textContent='よくできた！';playGood();}
  else{btns[i].classList.add('bad');btns.find(b=>b.textContent===correct)?.classList.add('good');byId('fb').textContent=`正解は ${correct}`;playBad();}
  state.idx++;setTimeout(render,700);
}

function renderQaStep8(){
  setProgress(5);
  if(!state.qaQueue.length||state.idx>=state.qaQueue.length){state.stage=6;state.idx=0;return render();}
  const q=state.lesson.qa[state.qaQueue[state.idx]];
  state.choices=state.currentChoices=shuffle([...(q.choices||q.c)]);
  byId('panelBody').innerHTML=`<div class='sub'>⑤ 英語で答える ${state.idx+1} / ${state.qaQueue.length}</div><p class='note center'>英語の質問を読んで、4つの英文から答えを選ぼう。</p><div class='qText'>${q.q}</div>${q.hint?`<div class='hint'>${q.hint}</div>`:''}<div class='choiceGrid'>${state.currentChoices.map((c,i)=>`<button class='choice' onclick='answerQa8(${i})'>${c}</button>`).join('')}</div><div class='feedback' id='fb'></div>`;
}
function answerQa8(i){
  const q=state.lesson.qa[state.qaQueue[state.idx]],ans=state.currentChoices[i],btns=[...document.querySelectorAll('.choice')];
  btns.forEach(b=>b.disabled=true);
  if(ans===q.a){btns[i].classList.add('good');byId('fb').textContent='会話ばっちり！';playGood();}
  else{btns[i].classList.add('bad');btns.find(b=>b.textContent===q.a)?.classList.add('good');byId('fb').textContent=`正解は ${q.a}`;playBad();}
  state.idx++;setTimeout(render,750);
}

function renderGrammarStep8(){
  setProgress(6);
  if(state.idx>=state.grammarQueue.length){state.stage=7;state.idx=0;return render();}
  const g=state.lesson.grammar[state.grammarQueue[state.idx]];
  state.choices=state.currentChoices=shuffle([...g[1]]);
  byId('panelBody').innerHTML=`<div class='sub'>⑥ 文法穴埋め ${state.idx+1} / ${state.grammarQueue.length}</div><div class='qText'>${g[0]}</div><p class='note center'>${g[3]}</p><div class='choiceGrid'>${state.currentChoices.map((c,i)=>`<button class='choice' onclick='answerGrammar8(${i})'>${c}</button>`).join('')}</div><div class='feedback' id='fb'></div>`;
}
function answerGrammar8(i){
  const g=state.lesson.grammar[state.grammarQueue[state.idx]],ans=state.currentChoices[i],btns=[...document.querySelectorAll('.choice')];
  btns.forEach(b=>b.disabled=true);
  if(ans===g[2]){btns[i].classList.add('good');byId('fb').textContent='文法ばっちり！';playGood();}
  else{btns[i].classList.add('bad');btns.find(b=>b.textContent===g[2])?.classList.add('good');byId('fb').textContent=`正解は ${g[2]}`;playBad();}
  state.idx++;setTimeout(render,700);
}

function renderSentenceStep8(){
  setProgress(7);
  if(state.idx>=state.sentenceQueue.length){state.stage=8;state.idx=0;return render();}
  const item=state.lesson.sentences[state.sentenceQueue[state.idx]],tokens=shuffle(item[0].replace(/[?.]/g,'').split(/\s+/));
  state.choices=state.currentChoices=tokens;state.picked=[];
  byId('panelBody').innerHTML=`<div class='sub'>⑦ 並び替え ${state.idx+1} / ${state.sentenceQueue.length}</div><div style='display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:8px'><div class='note' style='margin:0;font-weight:900'>正しい順番に並べよう</div><button class='jpToggle' onclick='toggleJP(event)'>日本語 ${state.showJP?'ON':'OFF'}</button></div><div class='jpBox' id='jpBox' style='display:${state.showJP?'block':'none'}'>${item[1]}</div><div class='answerBox' id='answerBox'></div><div class='tokens'>${tokens.map((t,i)=>`<button class='token' data-i='${i}' onclick='pickToken(${i})'>${t}</button>`).join('')}</div><div class='actionRow'><button class='ghost' onclick='undoToken()'>1つ戻す</button><button class='main' onclick='checkSentence8()'>答える</button></div><div class='feedback' id='fb'></div>`;
}
function checkSentence8(){
  const item=state.lesson.sentences[state.sentenceQueue[state.idx]],target=item[0].replace(/[?.]/g,''),mine=state.picked.map(x=>x.word||x.w).join(' ');
  if(mine===target){byId('fb').textContent='正解！';playGood();state.idx++;setTimeout(render,700);}
  else{byId('fb').textContent='もう一度！';playBad();}
}

function renderChallengeStep(){
  setProgress(8);
  if(state.idx>=5){state.stage=9;return render();}
  const type=state.challengeQueue[state.idx];
  if(type==='word')return challengeWord();
  if(type==='listen')return challengeListen();
  if(type==='sentenceListen')return challengeSentenceListen();
  if(type==='qa')return challengeQa();
  return challengeGrammar();
}
function challengeBase(body,choices,autoSpeak=''){
  state.choices=state.currentChoices=choices;
  byId('panelBody').innerHTML=`<div class='sub'>⑧ Lessonチャレンジ ${state.idx+1} / 5</div><div class='badge' style='margin-bottom:12px'>⭐ MIX CHALLENGE</div>${body}<div class='choiceGrid'>${choices.map((c,i)=>`<button class='choice${/[ぁ-んァ-ヶ一-龠]/.test(c)?' jp':''}' onclick='answerChallenge(${i})'>${c}</button>`).join('')}</div><div class='feedback' id='fb'></div>`;
  if(autoSpeak)setTimeout(()=>speak(autoSpeak),350);
}
function challengeWord(){const w=state.lesson.words[Math.floor(Math.random()*state.lesson.words.length)];state.challengeCorrect=w[0];challengeBase(`<div class='center'><div class='bigEmoji'>${w[2]}</div></div>`,chooseEngOptions(w[0]));}
function challengeListen(){const w=state.lesson.words[Math.floor(Math.random()*state.lesson.words.length)];state.challengeCorrect=w[1];challengeBase(`<div class='center'><button class='speakerBtn' onclick='speak(${JSON.stringify(w[0])})'><img src='speaker.svg'><span>もう一度聞く</span></button><p class='note' style='margin-top:10px'>聞こえた単語の意味は？</p></div>`,chooseJapOptions(w[1]),w[0]);}
function challengeSentenceListen(){const item=state.lesson.sentences[Math.floor(Math.random()*state.lesson.sentences.length)];state.challengeCorrect=item[1];challengeBase(`<div class='center'><button class='speakerBtn' onclick='speak(${JSON.stringify(item[0])})'><img src='speaker.svg'><span>もう一度聞く</span></button><p class='note' style='margin-top:10px'>聞こえた英文の意味は？</p></div>`,chooseSentenceJapOptions(item[1]),item[0]);}
function challengeQa(){const q=state.lesson.qa[Math.floor(Math.random()*state.lesson.qa.length)];state.challengeCorrect=q.a;challengeBase(`<div class='qText'>${q.q}</div>${q.hint?`<div class='hint'>${q.hint}</div>`:''}`,shuffle([...(q.choices||q.c)]));}
function challengeGrammar(){const g=state.lesson.grammar[Math.floor(Math.random()*state.lesson.grammar.length)];state.challengeCorrect=g[2];challengeBase(`<div class='qText'>${g[0]}</div><p class='note center'>${g[3]}</p>`,shuffle([...g[1]]));}
function answerChallenge(i){
  const ans=state.currentChoices[i],correct=state.challengeCorrect,btns=[...document.querySelectorAll('.choice')];
  btns.forEach(b=>b.disabled=true);
  if(ans===correct){btns[i].classList.add('good');byId('fb').textContent='チャレンジ正解！';playGood();}
  else{btns[i].classList.add('bad');btns.find(b=>b.textContent===correct)?.classList.add('good');byId('fb').textContent=`正解は ${correct}`;playBad();}
  state.idx++;setTimeout(render,850);
}

function renderFinish8(){
  if(!state.extraAwarded){
    state.extraAwarded=true;
    const p=lessonProgress(state.lesson.n);
    p.cleared=true;p.clears=(p.clears||0)+1;p.bestStage=EXTRA_STEP_COUNT;
    store.progress[state.lesson.n]=p;saveStore();confetti();playClear();
  }
  updatePlayHeader();
  byId('panelBody').innerHTML=`<div class='finish'><div class='badge'>🏅 ${BADGE_LABELS[state.lesson.n-1]}</div><h3>CLEAR!</h3><p class='note'>単語・2種類のリスニング・英語Q&A・文法・並び替え・5問チャレンジまで完了！</p><div class='actionRow'><button class='ghost' onclick='startLesson(${state.lesson.n})'>もう一度</button><button class='main' onclick='goHome()'>Lesson一覧へ</button></div></div>`;
  renderCards();
}

renderCards();
