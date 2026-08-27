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

  /* Grade 5: Safari requires speech to start directly from the user's tap.
     Do not auto-play after render/setTimeout. */
  if(typeof window.renderG5Listening==='function' || typeof renderG5Listening==='function'){
    const fixedRender=function(){
      g5SetBest(2);
      if(g5State.idx>=g5State.queue.length){
        g5State.stage=3;g5State.idx=0;return renderG5();
      }
      const p=G5_DATA.phrases[g5State.queue[g5State.idx]];
      g5State.choices=g5Shuffle([p[1],...g5PickOther(1,p[1])]);
      g5Header(g5State.queue.length);
      document.getElementById('g5Body').innerHTML=`<div class='sub'>② リスニング4択</div><div class='center'><button class='speakerBtn' id='g5SpeakNow'><img src='speaker.svg'><span>英語を聞く</span></button><div id='g5AudioHint' style='margin-top:8px;font-size:13px;color:#789'>ボタンを押すと英語が流れます</div></div><div class='choiceGrid'>${g5State.choices.map((c,i)=>`<button class='choice jp' onclick='g5AnswerListen(${i})'>${c}</button>`).join('')}</div><div class='feedback' id='g5Fb'></div>`;
      const btn=document.getElementById('g5SpeakNow');
      if(btn){
        btn.addEventListener('click',function(ev){
          ev.preventDefault();ev.stopPropagation();
          safariSpeak(p[0]);
          const hint=document.getElementById('g5AudioHint');
          if(hint)hint.textContent='🔊 再生中: 英語を聞いて答えよう';
        },{passive:false});
      }
    };
    window.renderG5Listening=fixedRender;
    try{ renderG5Listening=fixedRender; }catch(e){}
  }
})();