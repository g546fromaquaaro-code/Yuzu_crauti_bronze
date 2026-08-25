// Lessonごとに問題の趣向を少し変える追加レイヤー
const G5_VARIETY={
  1:{labels:['① 意味4択','② リスニング','③ 動詞を選ぶ','④ 間違い復習','⑤ 英文完成','⑥ 日本語→英語','⑦ 並び替え','⑧ 基本チャレンジ'],tag:'基礎フレーズ'},
  2:{labels:['① 絵→フレーズ','② 音→場面','③ 動詞パズル','④ 間違い復習','⑤ だれが何する？','⑥ 日本語→英語','⑦ 並び替え','⑧ 場面チャレンジ'],tag:'場面クイズ'},
  3:{labels:['① 意味4択','② リスニング','③ 行動を選ぶ','④ 間違い復習','⑤ 場所つき英文','⑥ 日本語→英語','⑦ 並び替え','⑧ 移動チャレンジ'],tag:'行動・移動'},
  4:{labels:['① 意味4択','② リスニング','③ 前置詞クイズ','④ 間違い復習','⑤ フレーズ完成','⑥ 日本語→英語','⑦ 並び替え','⑧ 前置詞チャレンジ'],tag:'前置詞ゲーム'},
  5:{labels:['① 意味4択','② リスニング','③ 動詞を選ぶ','④ 間違い復習','⑤ 短文穴埋め','⑥ 日本語→英語','⑦ 並び替え','⑧ 5級ミニテスト'],tag:'本番風ミニテスト'}
};

const g5OldHeader=g5Header;
g5Header=function(total=1){
  const cfg=G5_VARIETY[g5State.lessonN]||G5_VARIETY[1];
  const row=document.getElementById('g5StageRow');
  if(row)row.innerHTML=cfg.labels.map((s,i)=>`<div class='stageChip ${g5State.stage===i+1?'on':g5State.stage>i+1?'done':''}'>${s}</div>`).join('');
  const score=document.getElementById('g5Score');
  const bar=document.getElementById('g5Bar');
  if(score)score.textContent=g5State.stage===0?'LESSON':`${Math.min(g5State.idx,total)} / ${total}`;
  if(bar)bar.style.width=g5State.stage===0?'0%':`${Math.min(100,(g5State.idx/Math.max(total,1))*100)}%`;
};

const g5OldHome=renderG5Home;
renderG5Home=function(){
  const el=document.getElementById('g5LessonList');
  if(!el)return;
  el.innerHTML=G5_LESSONS.map(l=>{const p=g5Store['lesson'+l.n],cfg=G5_VARIETY[l.n]||G5_VARIETY[1];return `<button class='g5LessonCard' onclick='startG5Lesson(${l.n})'><div class='g5LessonTop'><div class='g5LessonIcon'>${l.icon}</div><div style='text-align:right'><div class='count'>${p.cleared?'CLEAR':'STEP'} ${p.best||0}/8</div><div class='smallTag'>Lesson ${l.n}</div></div></div><h3>${l.title}</h3><div style='display:inline-block;margin:2px 0 8px;padding:5px 9px;border-radius:999px;background:#eef7ff;color:#5d85ad;font-size:12px;font-weight:900'>${cfg.tag}</div><p>${l.summary}</p><div class='g5Progress'><i style='width:${Math.round((p.best||0)/8*100)}%'></i></div></button>`}).join('');
};

function g5SceneChoices(correctIndex){
  const pool=g5Shuffle([...Array(G5_DATA.phrases.length).keys()].filter(x=>x!==correctIndex)).slice(0,3);
  return g5Shuffle([correctIndex,...pool]);
}

const g5OldMeaning=renderG5Meaning;
renderG5Meaning=function(){
  if(g5State.lessonN!==2)return g5OldMeaning();
  g5SetBest(1);
  if(g5State.idx>=g5State.queue.length){g5State.stage=2;g5State.idx=0;return renderG5();}
  const idx=g5State.queue[g5State.idx],p=G5_DATA.phrases[idx];
  g5State.choices=g5SceneChoices(idx);
  g5Header(g5State.queue.length);
  document.getElementById('g5Body').innerHTML=`<div class='sub'>① 絵を見て英語を選ぼう</div><div class='bigEmoji center'>${p[3]}</div><div class='g5Meaning'>${p[1]}</div><div class='choiceGrid'>${g5State.choices.map((x,i)=>`<button class='choice' onclick='g5AnswerScenePhrase(${i},${idx})'>${G5_DATA.phrases[x][0]}</button>`).join('')}</div><div class='feedback' id='g5Fb'></div>`;
};
function g5AnswerScenePhrase(i,correctIndex){const correct=G5_DATA.phrases[correctIndex][0];g5State.choices=g5State.choices.map(x=>G5_DATA.phrases[x][0]);g5Feedback(i,correct,()=>g5State.wrong.add(correctIndex));}

const g5OldListening=renderG5Listening;
renderG5Listening=function(){
  if(g5State.lessonN!==2)return g5OldListening();
  g5SetBest(2);
  if(g5State.idx>=g5State.queue.length){g5State.stage=3;g5State.idx=0;return renderG5();}
  const idx=g5State.queue[g5State.idx],p=G5_DATA.phrases[idx];
  g5State.choices=g5SceneChoices(idx);
  g5Header(g5State.queue.length);
  document.getElementById('g5Body').innerHTML=`<div class='sub'>② 音を聞いて場面を選ぼう</div><div class='center'><button class='speakerBtn' onclick="speak(${JSON.stringify(p[0])})"><img src='speaker.svg'><span>もう一度聞く</span></button></div><div class='choiceGrid'>${g5State.choices.map((x,i)=>`<button class='choice' style='font-size:42px' onclick='g5AnswerSceneListen(${i},${idx})'><span aria-hidden='true'>${G5_DATA.phrases[x][3]}</span><div style='font-size:13px;margin-top:6px'>場面 ${i+1}</div></button>`).join('')}</div><div class='feedback' id='g5Fb'></div>`;
  setTimeout(()=>speak(p[0]),250);
};
function g5AnswerSceneListen(i,correctIndex){const correct=String(correctIndex);g5State.choices=g5State.choices.map(String);g5Feedback(i,correct,()=>g5State.wrong.add(correctIndex));}

const g5OldVerb=renderG5Verb;
renderG5Verb=function(){
  if(g5State.lessonN!==4)return g5OldVerb();
  g5SetBest(3);
  if(g5State.idx>=g5State.queue.length){g5State.stage=4;g5State.idx=0;g5State.queue=g5Shuffle([...g5State.wrong]);return renderG5();}
  const idx=g5State.queue[g5State.idx],p=G5_DATA.phrases[idx];
  const match=p[0].match(/\b(on|in|at|to)\b/);
  if(!match)return g5OldVerb();
  const prep=match[1],blank=p[0].replace(new RegExp(`\\b${prep}\\b`),'_____');
  g5State.choices=g5Shuffle([prep,...['on','in','at','to'].filter(x=>x!==prep).slice(0,3)]);
  g5Header(g5State.queue.length);
  document.getElementById('g5Body').innerHTML=`<div class='sub'>③ 前置詞クイズ</div><div class='g5Phrase'>${blank}</div><div class='g5Meaning'>${p[1]}</div><div class='choiceGrid'>${g5State.choices.map((c,i)=>`<button class='choice' onclick='g5AnswerPrep(${i},${JSON.stringify(prep)},${idx})'>${c}</button>`).join('')}</div><div class='feedback' id='g5Fb'></div>`;
};
function g5AnswerPrep(i,correct,idx){g5Feedback(i,correct,()=>g5State.wrong.add(idx));}

const g5OldComplete=renderG5Complete;
renderG5Complete=function(){
  if(g5State.lessonN===2){
    g5SetBest(5);if(g5State.idx>=g5State.queue.length){g5State.stage=6;g5State.idx=0;return renderG5();}
    const p=G5_DATA.phrases[g5State.queue[g5State.idx]];
    const subjects=['I','He','She','We']; const sub=subjects[g5State.idx%subjects.length];
    const verb=sub==='He'||sub==='She'?p[2]+(p[2].endsWith('s')?'':'s'):p[2];
    const rest=p[0].replace(new RegExp('^'+p[2]+'\\s*'),'');
    g5State.choices=g5Shuffle([verb,p[2],p[2]+'ed',p[2]+'ing']);g5Header(g5State.queue.length);
    document.getElementById('g5Body').innerHTML=`<div class='sub'>⑤ だれが何する？</div><div class='g5Phrase'>${sub} _____ ${rest}.</div><div class='g5Meaning'>${p[1]}</div><div class='choiceGrid'>${g5State.choices.map((c,i)=>`<button class='choice' onclick='g5AnswerComplete(${i})'>${c}</button>`).join('')}</div><div class='feedback' id='g5Fb'></div>`;
    g5State._completeCorrect=verb;return;
  }
  if(g5State.lessonN===3){
    g5SetBest(5);if(g5State.idx>=g5State.queue.length){g5State.stage=6;g5State.idx=0;return renderG5();}
    const p=G5_DATA.phrases[g5State.queue[g5State.idx]],parts=p[0].split(' '),verb=parts[0],rest=parts.slice(1).join(' ');
    g5State.choices=g5Shuffle([verb,...g5PickOther(2,verb)]);g5Header(g5State.queue.length);
    document.getElementById('g5Body').innerHTML=`<div class='sub'>⑤ 場所つき英文</div><div class='g5Phrase'>I _____ ${rest}.</div><div class='g5Meaning'>${p[1]}</div><div class='choiceGrid'>${g5State.choices.map((c,i)=>`<button class='choice' onclick='g5AnswerComplete(${i})'>${c}</button>`).join('')}</div><div class='feedback' id='g5Fb'></div>`;g5State._completeCorrect=verb;return;
  }
  if(g5State.lessonN===5){
    g5SetBest(5);if(g5State.idx>=g5State.queue.length){g5State.stage=6;g5State.idx=0;return renderG5();}
    const p=G5_DATA.phrases[g5State.queue[g5State.idx]],rest=p[0].replace(new RegExp('^'+p[2]+'\\s*'),'');
    const frames=[`I _____ ${rest}.`,`Please _____ ${rest}.`,`We _____ ${rest}.`];
    g5State.choices=g5Shuffle([p[2],...g5PickOther(2,p[2])]);g5Header(g5State.queue.length);
    document.getElementById('g5Body').innerHTML=`<div class='sub'>⑤ 5級風・短文穴埋め</div><div class='g5Phrase'>${frames[g5State.idx%frames.length]}</div><div class='g5Meaning'>ヒント：${p[1]}</div><div class='choiceGrid'>${g5State.choices.map((c,i)=>`<button class='choice' onclick='g5AnswerComplete(${i})'>${c}</button>`).join('')}</div><div class='feedback' id='g5Fb'></div>`;g5State._completeCorrect=p[2];return;
  }
  return g5OldComplete();
};
const g5OldAnswerComplete=g5AnswerComplete;
g5AnswerComplete=function(i){if([2,3,5].includes(g5State.lessonN)&&g5State._completeCorrect){const c=g5State._completeCorrect;g5State._completeCorrect=null;return g5Feedback(i,c);}return g5OldAnswerComplete(i);};

const g5OldChallenge=renderG5Challenge;
renderG5Challenge=function(){
  if(g5State.lessonN===1)return g5OldChallenge();
  g5SetBest(8);if(g5State.idx>=5)return finishG5();
  const idx=g5State.challenge[g5State.idx],p=G5_DATA.phrases[idx];g5Header(5);
  if(g5State.lessonN===2){
    const opts=g5SceneChoices(idx);g5State.choices=opts.map(x=>G5_DATA.phrases[x][0]);
    document.getElementById('g5Body').innerHTML=`<div class='g5ChallengeLabel'>⑧ 場面チャレンジ ${g5State.idx+1}/5</div><div class='bigEmoji center'>${p[3]}</div><div class='g5Meaning'>${p[1]}</div><div class='choiceGrid'>${g5State.choices.map((c,i)=>`<button class='choice' onclick='g5AnswerChallenge(${i})'>${c}</button>`).join('')}</div><div class='feedback' id='g5Fb'></div>`;return;
  }
  if(g5State.lessonN===4){
    const m=p[0].match(/\b(on|in|at|to)\b/);if(m){const prep=m[1];g5State.choices=g5Shuffle([prep,...['on','in','at','to'].filter(x=>x!==prep).slice(0,3)]);g5State._challengeCorrect=prep;document.getElementById('g5Body').innerHTML=`<div class='g5ChallengeLabel'>⑧ 前置詞チャレンジ ${g5State.idx+1}/5</div><div class='g5Phrase'>${p[0].replace(new RegExp(`\\b${prep}\\b`),'_____')}</div><div class='choiceGrid'>${g5State.choices.map((c,i)=>`<button class='choice' onclick='g5AnswerVarietyChallenge(${i})'>${c}</button>`).join('')}</div><div class='feedback' id='g5Fb'></div>`;return;}
  }
  if(g5State.lessonN===5){
    const rest=p[0].replace(new RegExp('^'+p[2]+'\\s*'),'');g5State.choices=g5Shuffle([p[2],...g5PickOther(2,p[2])]);g5State._challengeCorrect=p[2];document.getElementById('g5Body').innerHTML=`<div class='g5ChallengeLabel'>⑧ 5級ミニテスト ${g5State.idx+1}/5</div><div class='g5Phrase'>Please _____ ${rest}.</div><div class='choiceGrid'>${g5State.choices.map((c,i)=>`<button class='choice' onclick='g5AnswerVarietyChallenge(${i})'>${c}</button>`).join('')}</div><div class='feedback' id='g5Fb'></div>`;return;
  }
  return g5OldChallenge();
};
function g5AnswerVarietyChallenge(i){const c=g5State._challengeCorrect;g5State._challengeCorrect=null;if(g5State.choices[i]===c)g5State.challengeScore++;g5Feedback(i,c);}

// 読み込み済みのホームを新表示に更新
try{renderG5Home();}catch(e){}
