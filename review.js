const REVIEW_STAGES=[
  ['①','単語4択','絵を見て英単語を選ぶ'],
  ['②','単語リスニング','英単語を聞いて日本語を選ぶ'],
  ['③','文章リスニング','英文を聞いて日本語の意味を選ぶ'],
  ['④','単語復習','Lessonの単語をまとめて復習'],
  ['⑤','英語で答える','英語の質問に英文4択で答える'],
  ['⑥','文法穴埋め','Lessonの文法だけ練習'],
  ['⑦','並び替え','英文を正しい順番に並べる'],
  ['⑧','5問チャレンジ','5種類を1問ずつミックス']
];

const reviewBaseStartLesson=startLesson;
const reviewBaseRender=render;
const reviewBaseFinish=renderFinish8;

function ensureReviewUi(){
  if(!document.getElementById('historyResetBtn')){
    const host=document.querySelector('.topActions');
    if(host){
      const b=document.createElement('button');
      b.id='historyResetBtn';
      b.className='resetBtn';
      b.textContent='↺ 学習履歴リセット';
      b.onclick=resetLearningHistory;
      host.appendChild(b);
    }
  }
  if(!document.getElementById('stageModal')){
    const modal=document.createElement('div');
    modal.id='stageModal';
    modal.className='stageModal hidden';
    modal.addEventListener('click',e=>{if(e.target===modal)closeLessonStageMenu();});
    document.body.appendChild(modal);
  }
}

function resetLearningHistory(){
  const ok=confirm('CLEAR・進捗・バッジ・クリア回数を全部リセットします。\nBGM/SEの設定は残します。');
  if(!ok)return;
  store.progress={};
  saveStore();
  state.reviewOnly=false;
  state.selectedStage=null;
  closeLessonStageMenu();
  if(byId('play')&&!byId('play').classList.contains('hidden')){
    speechSynthesis.cancel();
    byId('play').classList.add('hidden');
    byId('home').classList.remove('hidden');
  }
  renderCards();
  playTap();
}

function openLessonStageMenu(n){
  ensureReviewUi();
  const lesson=LESSONS.find(x=>x.n===n);
  if(!lesson)return;
  const modal=byId('stageModal');
  modal.dataset.lesson=n;
  modal.innerHTML=`<div class='stageSheet'>
    <div class='stageSheetHead'><h3>Lesson ${lesson.n} · ${lesson.title}</h3><button class='stageClose' onclick='closeLessonStageMenu()'>×</button></div>
    <p class='stageIntro'>クリア済みなので、好きなところだけ復習できます。</p>
    <div class='stageMenuGrid'>
      <button class='stageMenuBtn full' onclick='closeLessonStageMenu();startLesson(${n})'><strong>▶ 最初から全部</strong><span>①〜⑧を順番に学習</span></button>
      ${REVIEW_STAGES.map((s,i)=>`<button class='stageMenuBtn' onclick='startLessonAtStage(${n},${i+1})'><strong>${s[0]} ${s[1]}</strong><span>${s[2]}</span></button>`).join('')}
    </div>
  </div>`;
  modal.classList.remove('hidden');
  playTap();
}

function closeLessonStageMenu(){
  const modal=byId('stageModal');
  if(modal)modal.classList.add('hidden');
}

function prepareLessonStateForReview(n,stage){
  const lesson=LESSONS.find(x=>x.n===n);
  if(!lesson)return false;
  state.lesson=lesson;
  state.stage=stage;
  state.idx=0;
  state.picked=[];
  state.showJP=false;
  state.reviewSet=new Set();
  state.reviewOnly=true;
  state.selectedStage=stage;
  state.extraAwarded=false;
  state.words=state.wordsQueue=shuffle([...Array(lesson.words.length).keys()]);
  state.listenQueue=shuffle([...Array(lesson.words.length).keys()]);
  state.sentenceListenQueue=shuffle([...Array(lesson.sentences.length).keys()]);
  state.reviewQueue=shuffle([...Array(lesson.words.length).keys()]);
  state.qa=state.qaQueue=shuffle([...Array(lesson.qa.length).keys()]);
  state.grammar=state.grammarQueue=shuffle([...Array(lesson.grammar.length).keys()]);
  state.sentences=state.sentenceQueue=shuffle([...Array(lesson.sentences.length).keys()]);
  state.challengeQueue=shuffle(['word','listen','sentenceListen','qa','grammar']);
  state.currentTrack=store.trackOrder[(lesson.n-1)%BGM_TRACKS.length];
  store.lessonTrack[lesson.n]=state.currentTrack;
  saveStore();
  startBgmTrack(state.currentTrack);
  byId('playNav').textContent=`Lesson ${lesson.n} ・ ${REVIEW_STAGES[stage-1][1]} ・ BGM: ${BGM_TRACKS[state.currentTrack].name}`;
  byId('playTitle').textContent=`Lesson ${lesson.n} · ${lesson.title}`;
  byId('home').classList.add('hidden');
  byId('play').classList.remove('hidden');
  return true;
}

function startLessonAtStage(n,stage){
  closeLessonStageMenu();
  playTap();
  if(!prepareLessonStateForReview(n,stage))return;
  render();
}

function selectedStageDone(){
  if(!state.reviewOnly)return false;
  if(state.stage!==state.selectedStage)return true;
  if(state.stage===1)return state.idx>=state.wordsQueue.length;
  if(state.stage===2)return state.idx>=state.listenQueue.length;
  if(state.stage===3)return state.idx>=state.sentenceListenQueue.length;
  if(state.stage===4)return state.idx>=state.reviewQueue.length;
  if(state.stage===5)return state.idx>=state.qaQueue.length;
  if(state.stage===6)return state.idx>=state.grammarQueue.length;
  if(state.stage===7)return state.idx>=state.sentenceQueue.length;
  if(state.stage===8)return state.idx>=5;
  return false;
}

function renderReviewOnlyFinish(){
  updatePlayHeader();
  byId('barFill').style.width='100%';
  const stage=state.selectedStage;
  byId('scorePill').textContent='DONE';
  byId('panelBody').innerHTML=`<div class='reviewFinish'>
    <div class='reviewStar'>⭐</div>
    <h3>${REVIEW_STAGES[stage-1][0]} ${REVIEW_STAGES[stage-1][1]} 完了！</h3>
    <p class='note'>この復習ではCLEAR回数やバッジは増やしません。気になるところだけ何回でも練習できます。</p>
    <div class='actionRow'>
      <button class='ghost' onclick='startLessonAtStage(${state.lesson.n},${stage})'>同じところをもう一度</button>
      <button class='ghost' onclick='openLessonStageMenu(${state.lesson.n})'>別のステップ</button>
      <button class='main' onclick='goHome()'>Lesson一覧へ</button>
    </div>
  </div>`;
  playClear();
}

startLesson=function(n){
  state.reviewOnly=false;
  state.selectedStage=null;
  return reviewBaseStartLesson(n);
};

render=function(){
  if(selectedStageDone())return renderReviewOnlyFinish();
  return reviewBaseRender();
};

renderFinish8=function(){
  reviewBaseFinish();
  if(state.reviewOnly)return;
  const row=byId('panelBody')?.querySelector('.actionRow');
  if(row&&!row.querySelector('.stageSelectAfterClear')){
    const b=document.createElement('button');
    b.className='ghost stageSelectAfterClear';
    b.textContent='好きなステップを復習';
    b.onclick=()=>openLessonStageMenu(state.lesson.n);
    row.insertBefore(b,row.lastElementChild);
  }
};

renderCards=function(){
  const cards=LESSONS.map((l,idx)=>{
    const p=lessonProgress(l.n);
    const percent=Math.round((Math.min(p.bestStage||0,EXTRA_STEP_COUNT)/EXTRA_STEP_COUNT)*100);
    const colors=[['#8ec5ff','#7de2ff'],['#ffd6f0','#ffc6e5'],['#d8d1ff','#bad8ff'],['#b9f1df','#92d8ff'],['#ffe7b3','#ffd9a6'],['#ffd2cd','#ffc1bd'],['#d8e5ff','#c5d7ff'],['#d4f3ff','#c4eeff'],['#dcd7ff','#cdd3ff'],['#d7f1ff','#c7e7ff']][idx%10];
    const action=p.cleared?`openLessonStageMenu(${l.n})`:`startLesson(${l.n})`;
    return `<button class='lessonCard' onclick='${action}'>
      <div class='top'><div class='roundIcon'>${l.emoji}</div><div style='text-align:right'><div class='count'>${p.cleared?'CLEAR':'STEP'} ${p.bestStage||0}/${EXTRA_STEP_COUNT}</div><div class='smallTag'>Lesson ${l.n}</div></div></div>
      <h3>${l.title}</h3>
      <div class='progress'><i style='width:${percent}%;background:linear-gradient(90deg,${colors[0]},${colors[1]})'></i></div>
      <div class='lessonMeta'><span>${p.cleared?'好きなステップを復習':'最初から学習'}</span><span>${percent}%</span></div>
    </button>`;
  }).join('');
  byId('cards').innerHTML=cards;
  renderBadges();
  updateHomeHeader();
};

ensureReviewUi();
renderCards();
