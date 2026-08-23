const REVIEW_STAGE_LABELS={1:'① 単語4択',2:'② 単語リスニング',3:'③ 文章リスニング',4:'④ 間違い復習',5:'⑤ 英語で答える',6:'⑥ 文法穴埋め',7:'⑦ 並び替え',8:'⑧ 5問チャレンジ'};

(function addReviewMenuStyle(){
  if(document.getElementById('reviewMenuStyle'))return;
  const s=document.createElement('style');
  s.id='reviewMenuStyle';
  s.textContent=`
  .reviewOverlay{position:fixed;inset:0;background:rgba(54,89,120,.32);backdrop-filter:blur(7px);z-index:100;display:flex;align-items:center;justify-content:center;padding:18px}
  .reviewSheet{width:min(720px,100%);max-height:min(82vh,760px);overflow:auto;background:#fff;border:1px solid #dcebf8;border-radius:28px;box-shadow:0 24px 60px rgba(65,115,160,.24);padding:18px}
  .reviewHead{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:14px}
  .reviewHeadText{font-weight:900;color:#557796}
  .reviewClose{border:none;background:#f3f9ff;color:#698aa8;border:1px solid #dceaf7;border-radius:999px;padding:10px 13px;font-weight:900}
  .reviewHero{display:flex;align-items:center;gap:12px;padding:14px;border-radius:22px;background:linear-gradient(135deg,#eef8ff,#f9fcff);border:1px solid #dfedf8;margin-bottom:14px}
  .reviewHero .roundIcon{flex:0 0 auto}
  .reviewHero strong{display:block;color:#536f91;margin-bottom:3px}
  .reviewHero span{color:#87a0b9}
  .reviewStartAll{width:100%;border:none;border-radius:20px;padding:14px 16px;background:linear-gradient(180deg,#83bfff,#78d6ff);color:#fff;font-weight:900;box-shadow:0 9px 20px rgba(104,181,235,.2);margin-bottom:12px}
  .reviewGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}
  .reviewStageBtn{border:none;background:#fbfdff;border:2px solid #e0edf8;border-radius:20px;padding:14px;text-align:left;color:#587898;font-weight:900;box-shadow:0 6px 14px rgba(99,147,190,.07)}
  .reviewStageBtn:active{transform:scale(.99)}
  .reviewStageBtn span{display:block;margin-top:4px;color:#8aa3ba;font-weight:700}
  .reviewDone{text-align:center;padding:18px 6px}
  .reviewDone h3{margin:6px 0 8px;color:#536f91}
  @media(max-width:560px){.reviewGrid{grid-template-columns:1fr}.reviewSheet{padding:14px}}
  `;
  document.head.appendChild(s);
})();

function openLesson(n){
  const p=lessonProgress(n);
  if(p.cleared)return openReviewMenu(n);
  startLesson(n);
}

function openReviewMenu(n){
  playTap();
  closeReviewMenu();
  const l=LESSONS.find(x=>x.n===n);
  const overlay=document.createElement('div');
  overlay.className='reviewOverlay';
  overlay.id='reviewOverlay';
  overlay.onclick=e=>{if(e.target===overlay)closeReviewMenu();};
  overlay.innerHTML=`<div class='reviewSheet'>
    <div class='reviewHead'><div class='reviewHeadText'>復習するところをえらぼう</div><button class='reviewClose' onclick='closeReviewMenu()'>✕</button></div>
    <div class='reviewHero'><div class='roundIcon'>${l.emoji}</div><div><strong>Lesson ${l.n} · ${l.title}</strong><span>1回クリアしたので、好きなところだけ復習できます。</span></div></div>
    <button class='reviewStartAll' onclick='closeReviewMenu();startLesson(${n})'>▶ 最初から全部やる</button>
    <div class='reviewGrid'>${Object.entries(REVIEW_STAGE_LABELS).map(([stage,label])=>`<button class='reviewStageBtn' onclick='startReviewStage(${n},${stage})'>${label}<span>ここだけ復習</span></button>`).join('')}</div>
  </div>`;
  document.body.appendChild(overlay);
}

function closeReviewMenu(){
  document.getElementById('reviewOverlay')?.remove();
}

function startReviewStage(n,stage){
  closeReviewMenu();
  startLesson(n);
  state.reviewOnly=true;
  state.reviewStage=stage;
  state.extraAwarded=true;
  state.stage=stage;
  state.idx=0;
  state.picked=[];
  state.showJP=false;
  if(stage===4)state.reviewQueue=shuffle([...Array(state.lesson.words.length).keys()]);
  if(stage===8)state.challengeQueue=shuffle(['word','listen','sentenceListen','qa','grammar']);
  byId('playNav').textContent=`Lesson ${state.lesson.n} ・ ${REVIEW_STAGE_LABELS[stage]} ・ 復習`;
  render();
}

function finishStageReview(){
  const label=REVIEW_STAGE_LABELS[state.reviewStage]||'復習';
  playClear();
  byId('barFill').style.width='100%';
  byId('scorePill').textContent='✓';
  byId('panelBody').innerHTML=`<div class='reviewDone'><div class='badge'>✨ REVIEW CLEAR</div><h3>${label} おわり！</h3><p class='note'>選んだところだけ復習できました。</p><div class='actionRow'><button class='ghost' onclick='startReviewStage(${state.lesson.n},${state.reviewStage})'>もう一度</button><button class='main' onclick='goHome();setTimeout(()=>openReviewMenu(${state.lesson.n}),80)'>ほかを復習</button></div></div>`;
}

const _reviewWord=renderWordStep;
renderWordStep=function(){
  if(state.reviewOnly&&state.stage===1&&state.idx>=state.wordsQueue.length)return finishStageReview();
  return _reviewWord();
};
const _reviewListen=renderListenStep;
renderListenStep=function(){
  if(state.reviewOnly&&state.stage===2&&state.idx>=state.listenQueue.length)return finishStageReview();
  return _reviewListen();
};
const _reviewSentenceListen=renderSentenceListenStep;
renderSentenceListenStep=function(){
  if(state.reviewOnly&&state.stage===3&&state.idx>=state.sentenceListenQueue.length)return finishStageReview();
  return _reviewSentenceListen();
};
const _reviewWrong=renderReviewStep8;
renderReviewStep8=function(){
  if(state.reviewOnly&&state.stage===4&&state.idx>=state.reviewQueue.length)return finishStageReview();
  return _reviewWrong();
};
const _reviewQa=renderQaStep8;
renderQaStep8=function(){
  if(state.reviewOnly&&state.stage===5&&state.idx>=state.qaQueue.length)return finishStageReview();
  return _reviewQa();
};
const _reviewGrammar=renderGrammarStep8;
renderGrammarStep8=function(){
  if(state.reviewOnly&&state.stage===6&&state.idx>=state.grammarQueue.length)return finishStageReview();
  return _reviewGrammar();
};
const _reviewSentence=renderSentenceStep8;
renderSentenceStep8=function(){
  if(state.reviewOnly&&state.stage===7&&state.idx>=state.sentenceQueue.length)return finishStageReview();
  return _reviewSentence();
};
const _reviewChallenge=renderChallengeStep;
renderChallengeStep=function(){
  if(state.reviewOnly&&state.stage===8&&state.idx>=5)return finishStageReview();
  return _reviewChallenge();
};

const _fullStartLesson=startLesson;
startLesson=function(n){
  state.reviewOnly=false;
  state.reviewStage=0;
  return _fullStartLesson(n);
};

renderCards=function(){
  const cards=LESSONS.map((l,idx)=>{
    const p=lessonProgress(l.n);
    const percent=Math.round((Math.min(p.bestStage||0,EXTRA_STEP_COUNT)/EXTRA_STEP_COUNT)*100);
    const colors=[['#8ec5ff','#7de2ff'],['#ffd6f0','#ffc6e5'],['#d8d1ff','#bad8ff'],['#b9f1df','#92d8ff'],['#ffe7b3','#ffd9a6'],['#ffd2cd','#ffc1bd'],['#d8e5ff','#c5d7ff'],['#d4f3ff','#c4eeff'],['#dcd7ff','#cdd3ff'],['#d7f1ff','#c7e7ff']][idx%10];
    return `<button class='lessonCard' onclick='openLesson(${l.n})'>
      <div class='top'><div class='roundIcon'>${l.emoji}</div><div style='text-align:right'><div class='count'>${p.cleared?'CLEAR':'STEP'} ${p.bestStage||0}/${EXTRA_STEP_COUNT}</div><div class='smallTag'>Lesson ${l.n}</div></div></div>
      <h3>${l.title}</h3>
      <div class='progress'><i style='width:${percent}%;background:linear-gradient(90deg,${colors[0]},${colors[1]})'></i></div>
      <div class='lessonMeta'><span>${p.cleared?'↻ 復習を選べる':(p.clears||0)+'回クリア'}</span><span>${percent}%</span></div>
    </button>`;
  }).join('');
  byId('cards').innerHTML=cards;
  renderBadges();
  updateHomeHeader();
};

renderFinish8=function(){
  if(!state.extraAwarded){
    state.extraAwarded=true;
    const p=lessonProgress(state.lesson.n);
    p.cleared=true;
    p.clears=(p.clears||0)+1;
    p.bestStage=EXTRA_STEP_COUNT;
    store.progress[state.lesson.n]=p;
    saveStore();
    burstConfetti();
    playClear();
  }
  updatePlayHeader();
  byId('panelBody').innerHTML=`<div class='finish'><div class='badge'>🏅 ${BADGE_LABELS[state.lesson.n-1]}</div><h3>CLEAR!</h3><p class='note'>1回クリアしたので、次からは好きなところだけ選んで復習できます。</p><div class='actionRow'><button class='ghost' onclick='goHome();setTimeout(()=>openReviewMenu(${state.lesson.n}),80)'>復習するところを選ぶ</button><button class='main' onclick='goHome()'>Lesson一覧へ</button></div></div>`;
  renderCards();
};

renderCards();