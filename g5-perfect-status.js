/* 英検5級：完走済み / 全問ノーミスを一覧で色分け */
(function(){
  const style=document.createElement('style');
  style.textContent=`
    .g5LessonCard.g5-cleared{background:linear-gradient(180deg,#f5fbff,#eaf6ff);border-color:#b9daf4;box-shadow:0 8px 22px rgba(74,140,195,.10)}
    .g5LessonCard.g5-perfect{background:linear-gradient(180deg,#f2fff7,#e2f9ea);border-color:#83d6a4;box-shadow:0 9px 24px rgba(56,154,96,.14)}
    .g5LessonCard .g5StatusMark{display:inline-flex;align-items:center;gap:4px;margin-top:8px;padding:5px 9px;border-radius:999px;font-size:12px;font-weight:900;letter-spacing:.02em}
    .g5LessonCard .g5StatusMark.clear{background:#dff1ff;color:#3d7aa8}
    .g5LessonCard .g5StatusMark.perfect{background:#cff3dc;color:#237543;border:1px solid #a9e3bd}
    .g5LessonCard.g5-perfect .g5Progress i{background:linear-gradient(90deg,#71d59a,#49bc78)!important}
  `;
  document.head.appendChild(style);

  function lessonStore(n){return g5Store['lesson'+n]||{};}
  function markHome(){
    const cards=[...document.querySelectorAll('#g5LessonList .g5LessonCard')];
    cards.forEach((card,i)=>{
      const lesson=G5_LESSONS[i]; if(!lesson)return;
      const p=lessonStore(lesson.n);
      card.classList.remove('g5-cleared','g5-perfect');
      card.querySelector('.g5StatusMark')?.remove();
      if(p.perfect){
        card.classList.add('g5-perfect');
        card.insertAdjacentHTML('beforeend',`<span class='g5StatusMark perfect'>🏆 PERFECT</span>`);
      }else if(p.cleared){
        card.classList.add('g5-cleared');
        card.insertAdjacentHTML('beforeend',`<span class='g5StatusMark clear'>✓ CLEAR</span>`);
      }
    });
  }

  const oldStart=startG5Lesson;
  startG5Lesson=function(n=1){
    g5State.runMistakes=0;
    g5State.runTracking=true;
    return oldStart(n);
  };

  const oldFeedback=g5Feedback;
  g5Feedback=function(i,correct,onWrong){
    if(g5State.runTracking && g5State.choices[i]!==correct)g5State.runMistakes=(g5State.runMistakes||0)+1;
    return oldFeedback(i,correct,onWrong);
  };

  if(typeof g5CheckOrder==='function'){
    const oldCheck=g5CheckOrder;
    g5CheckOrder=function(correct){
      const ans=g5State.picked.map(x=>g5State.choices[x]).join(' ');
      if(g5State.runTracking && ans!==correct)g5State.runMistakes=(g5State.runMistakes||0)+1;
      return oldCheck(correct);
    };
  }

  if(typeof window.g5L6AnswerTeacher==='function'){
    const oldTeacher=window.g5L6AnswerTeacher;
    window.g5L6AnswerTeacher=function(i,correct){
      if(g5State.runTracking && g5State.choices[i]!==correct)g5State.runMistakes=(g5State.runMistakes||0)+1;
      return oldTeacher(i,correct);
    };
  }

  const oldFinish=finishG5;
  finishG5=function(){
    const p=lessonStore(g5State.lessonN);
    p.attempted=true;
    p.lastPerfect=(g5State.runMistakes||0)===0;
    if(p.lastPerfect)p.perfect=true;
    g5Store['lesson'+g5State.lessonN]=p;
    g5Save();
    g5State.runTracking=false;
    const result=oldFinish();
    setTimeout(markHome,0);
    return result;
  };

  const oldHome=renderG5Home;
  renderG5Home=function(){
    const result=oldHome();
    markHome();
    return result;
  };

  markHome();
})();
