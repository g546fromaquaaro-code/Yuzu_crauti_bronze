/* Safari/iPad audio compatibility patch */
(function(){
  function safariSpeak(text){
    if(!('speechSynthesis' in window)) return false;
    const value=String(text||'').trim();
    if(!value) return false;
    const synth=window.speechSynthesis;
    try{synth.cancel();}catch(e){}
    try{synth.resume();}catch(e){}
    const u=new SpeechSynthesisUtterance(value);
    u.lang='en-US';
    u.rate=.80;
    u.pitch=1;
    u.volume=1;
    try{synth.speak(u);return true;}catch(e){return false;}
  }
  window.speak=safariSpeak;
  try{ speak=safariSpeak; }catch(e){}

  /* Grade 5 listening:
     - auto-play once when each question appears
     - keep a replay button as a Safari fallback / repeat control
  */
  if(typeof window.renderG5Listening==='function' || typeof renderG5Listening==='function'){
    const fixedRender=function(){
      g5SetBest(2);
      if(g5State.idx>=g5State.queue.length){
        g5State.stage=3;g5State.idx=0;return renderG5();
      }
      const p=G5_DATA.phrases[g5State.queue[g5State.idx]];
      g5State.choices=g5Shuffle([p[1],...g5PickOther(1,p[1])]);
      g5Header(g5State.queue.length);
      document.getElementById('g5Body').innerHTML=`<div class='sub'>② リスニング4択</div><div class='center'><button class='speakerBtn' id='g5SpeakNow'><img src='speaker.svg'><span>もう一度聞く</span></button><div id='g5AudioHint' style='margin-top:8px;font-size:13px;color:#789'>🔊 問題が出たら自動で1回流れます</div></div><div class='choiceGrid'>${g5State.choices.map((c,i)=>`<button class='choice jp' onclick='g5AnswerListen(${i})'>${c}</button>`).join('')}</div><div class='feedback' id='g5Fb'></div>`;

      const btn=document.getElementById('g5SpeakNow');
      if(btn){
        btn.addEventListener('click',function(ev){
          ev.preventDefault();ev.stopPropagation();
          safariSpeak(p[0]);
          const hint=document.getElementById('g5AudioHint');
          if(hint)hint.textContent='🔊 もう一度再生しました';
        },{passive:false});
      }

      /* Run after the new question is painted.  The page has already been
         user-activated by entering the lesson / answering prior questions,
         so current iPad Safari allows speechSynthesis here. */
      requestAnimationFrame(function(){
        setTimeout(function(){
          const ok=safariSpeak(p[0]);
          const hint=document.getElementById('g5AudioHint');
          if(hint)hint.textContent=ok?'🔊 自動再生中。聞き逃したら「もう一度聞く」':'「もう一度聞く」を押してください';
        },80);
      });
    };
    window.renderG5Listening=fixedRender;
    try{ renderG5Listening=fixedRender; }catch(e){}
  }
})();