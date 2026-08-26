// 英検5級 ⑦並び替え：iPad/Safariでも確実に次へ進むための修正
(function(){
  if(typeof renderG5Order!=='function') return;

  window.renderG5Order=function(){
    g5SetBest(7);
    if(g5State.idx>=g5State.queue.length){
      g5State.stage=8;
      g5State.idx=0;
      g5State.challenge=g5Shuffle([...Array(G5_DATA.phrases.length).keys()]).slice(0,5);
      return renderG5();
    }

    const phraseIndex=g5State.queue[g5State.idx];
    const p=G5_DATA.phrases[phraseIndex];
    const correct='I '+p[0];
    const tokens=g5Shuffle(correct.split(/\s+/));
    g5State.choices=tokens;
    g5State.picked=[];
    g5State._orderCorrect=correct;
    g5Header(g5State.queue.length);

    document.getElementById('g5Body').innerHTML=`
      <div class='sub'>⑦ 並び替え</div>
      <div class='g5Meaning'>私は${p[1]}</div>
      <div class='answerBox' id='g5AnswerBox'></div>
      <div class='tokens'>${tokens.map((t,i)=>`<button class='token' id='g5tok${i}' onclick='g5PickToken(${i})'>${t}</button>`).join('')}</div>
      <div class='actionRow'>
        <button class='ghost' id='g5UndoBtn' onclick='g5Undo()'>1つ戻す</button>
        <button class='main' id='g5OrderAnswerBtn' onclick='g5CheckOrderSafe()'>答える</button>
      </div>
      <div class='feedback' id='g5Fb'></div>`;
  };

  window.g5CheckOrderSafe=function(){
    const fb=document.getElementById('g5Fb');
    if(!g5State.picked.length){
      if(fb) fb.textContent='単語を並べてから「答える」を押してね。';
      return;
    }
    if(g5State.picked.length<g5State.choices.length){
      if(fb) fb.textContent='まだ使っていない単語があるよ。';
      return;
    }

    const correct=g5State._orderCorrect||'';
    const ans=g5State.picked.map(x=>g5State.choices[x]).join(' ');
    const ok=ans===correct;
    if(fb) fb.textContent=ok?'正解！':`正解は ${correct}.`;
    ok?playGood():playBad();

    document.querySelectorAll('#g5Body .token').forEach(b=>b.disabled=true);
    const undo=document.getElementById('g5UndoBtn');
    const answer=document.getElementById('g5OrderAnswerBtn');
    if(undo) undo.disabled=true;
    if(answer){
      answer.disabled=true;
      answer.textContent='次へ進みます…';
    }

    g5State.idx++;
    setTimeout(()=>{
      if(g5State.idx>=g5State.queue.length){
        g5State.stage=8;
        g5State.idx=0;
        g5State.challenge=g5Shuffle([...Array(G5_DATA.phrases.length).keys()]).slice(0,5);
      }
      renderG5();
    },650);
  };
})();
