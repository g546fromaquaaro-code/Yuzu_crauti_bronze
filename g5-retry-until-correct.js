// 英検5級：すべての選択問題は正解するまで同じ問題をやり直す
(function(){
  if(typeof window.g5Feedback !== 'function') return;

  window.g5Feedback=function(i,correct,onWrong){
    const btns=[...document.querySelectorAll('#g5Body .choice')];
    btns.forEach(b=>b.disabled=true);

    const ans=g5State.choices[i];
    const fb=document.getElementById('g5Fb');
    const ok=ans===correct;

    if(ok){
      if(btns[i]) btns[i].classList.add('good');
      if(fb) fb.textContent='正解！';
      playGood();
      g5State.idx++;
      setTimeout(renderG5,650);
      return;
    }

    if(btns[i]) btns[i].classList.add('bad');
    // 通常の文字選択肢では正解を緑表示。絵・場面問題など見つからない場合は表示だけにする。
    const goodBtn=btns.find(b=>b.textContent.trim()===String(correct).trim());
    if(goodBtn) goodBtn.classList.add('good');
    if(fb) fb.innerHTML=`ちがうよ。<br><b>もう一度やってみよう！</b>`;
    if(onWrong) onWrong();
    playBad();

    // idxは進めない。同じ問題を再描画して、正解するまで再挑戦。
    setTimeout(()=>{
      renderG5();
    },700);
  };
})();
