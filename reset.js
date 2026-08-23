(function(){
  const host=document.querySelector('.topActions');
  if(!host||document.getElementById('historyResetBtn'))return;

  const style=document.createElement('style');
  style.textContent=`.historyResetBtn{border:none;border-radius:999px;padding:11px 14px;background:#fff7f7;border:1px solid #ffd9d9;color:#ad7178;box-shadow:var(--shadow);font-weight:900}@media(max-width:640px){.historyResetBtn{padding:10px 12px}}`;
  document.head.appendChild(style);

  const btn=document.createElement('button');
  btn.id='historyResetBtn';
  btn.className='historyResetBtn';
  btn.textContent='↺ 学習履歴リセット';
  btn.onclick=()=>{
    const ok=confirm('CLEAR・進捗・バッジ・クリア回数をすべてリセットします。\nBGM・SEの設定は残します。');
    if(!ok)return;
    store.progress={};
    saveStore();
    localStorage.removeItem('yuzuBronzeProgress');
    if(typeof closeReviewMenu==='function')closeReviewMenu();
    state.reviewOnly=false;
    state.reviewStage=0;
    speechSynthesis.cancel();
    const play=byId('play'),home=byId('home');
    if(play)play.classList.add('hidden');
    if(home)home.classList.remove('hidden');
    renderCards();
    playTap();
  };
  host.appendChild(btn);
})();
