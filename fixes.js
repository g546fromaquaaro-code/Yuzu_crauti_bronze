renderQaStep8=function(){
  setProgress(5);
  if(!state.qaQueue.length||state.idx>=state.qaQueue.length){state.stage=6;state.idx=0;return render();}
  const q=state.lesson.qa[state.qaQueue[state.idx]];
  const spoken=q.q.replace(/^[^A-Za-z]+/,'');
  state.choices=state.currentChoices=shuffle([...(q.choices||q.c)]);
  byId('panelBody').innerHTML=`<div class='sub'>⑤ 英語で答える ${state.idx+1} / ${state.qaQueue.length}</div>
    <p class='note center'>英語の質問を聞いて、4つの英文から答えを選ぼう。</p>
    <div class='qText'>${q.q}</div>
    <div class='center'><button class='speakerBtn' onclick='playTap();speak(${JSON.stringify(spoken)})'><img src='speaker.svg' alt='speaker'><span>質問を聞く</span></button></div>
    ${q.hint?`<div class='hint'>${q.hint}</div>`:''}
    <div class='choiceGrid'>${state.currentChoices.map((c,i)=>`<button class='choice' onclick='answerQa8(${i})'>${c}</button>`).join('')}</div><div class='feedback' id='fb'></div>`;
  setTimeout(()=>speak(spoken),350);
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
  byId('panelBody').innerHTML=`<div class='finish'><div class='badge'>🏅 ${BADGE_LABELS[state.lesson.n-1]}</div><h3>CLEAR!</h3><p class='note'>単語・2種類のリスニング・英語Q&A・文法・並び替え・5問チャレンジまで完了！</p><div class='actionRow'><button class='ghost' onclick='startLesson(${state.lesson.n})'>もう一度</button><button class='main' onclick='goHome()'>Lesson一覧へ</button></div></div>`;
  renderCards();
};
