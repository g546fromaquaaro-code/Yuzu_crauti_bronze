/* 英検5級：完走済み / 全問ノーミスを一覧で色分け */
(function(){
  const style=document.createElement('style');
  style.textContent=`
    /* 青基調の画面でも一目で判別できるよう、補色寄りの暖色を使用 */
    .g5LessonCard.g5-cleared{background:linear-gradient(180deg,#fff8e8,#ffefc7);border-color:#f0b44c;box-shadow:0 8px 22px rgba(210,139,27,.14)}
    .g5LessonCard.g5-perfect{background:linear-gradient(180deg,#fff1ec,#ffd8cc);border-color:#ef7f63;box-shadow:0 9px 24px rgba(220,92,57,.17)}
    .g5LessonCard .g5StatusMark{display:inline-flex;align-items:center;gap:4px;margin-top:8px;padding:5px 9px;border-radius:999px;font-size:12px;font-weight:900;letter-spacing:.02em}
    .g5LessonCard .g5StatusMark.clear{background:#ffe1a6;color:#8a5200;border:1px solid #f1bd58}
    .g5LessonCard .g5StatusMark.perfect{background:#ffb9a8;color:#8f2f1c;border:1px solid #ef8b72}
    .g5LessonCard.g5-cleared .g5Progress i{background:linear-gradient(90deg,#f4bb4a,#e99620)!important}
    .g5LessonCard.g5-perfect .g5Progress i{background:linear-gradient(90deg,#f08b6f,#e85f43)!important}
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
