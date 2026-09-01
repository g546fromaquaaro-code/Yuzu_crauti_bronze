/* 英検5級 準備 Lesson 6：同じ型が続かないよう、絵・聞き取り・先生への質問・会話で練習 */
(function(){
  const lesson6={
    n:6,title:'動詞フレーズ⑥',icon:'💬',summary:'rest / love / shop / cross / fill / share / lie を、絵・リスニング・先生への質問で使える形にする。',
    lectureTitle:'覚えたフレーズを「先生との会話」に使おう',
    lectureHtml:`<b class='g5Verb'>rest</b> on a sofa = ソファで休む<br><b class='g5Verb'>love</b> chocolate = チョコレートが大好き<br><b class='g5Verb'>shop</b> for groceries = 食料品の買い物をする<br><b class='g5Verb'>cross</b> a street = 道を横切る<br><b class='g5Verb'>fill</b> in the blank = 空欄を埋める<br><b class='g5Verb'>share</b> a salad = サラダを分け合う<br><b class='g5Verb'>lie</b> in bed = ベッドに横たわる`,
    lectureNote:`🌟 <b>英会話の先生にそのまま使える！</b><br><span style='display:inline-block;margin-top:7px'>“Do you love chocolate?”</span><br><span>“Where do you shop for groceries?”</span><br><span>“What food do you share with your family?”</span><br><span style='display:inline-block;margin-top:7px;color:#668'>単語を覚えるだけでなく、実際の質問にして使ってみよう。</span>`,
    phrases:[
      ['rest on a sofa','ソファで休む','rest','🛋️'],
      ['love chocolate','チョコレートが大好き','love','🍫'],
      ['shop for groceries','食料品の買い物をする','shop','🛒'],
      ['cross a street','道を横切る','cross','🚦'],
      ['fill in the blank','空欄を埋める','fill','✏️'],
      ['share a salad','サラダを分け合う','share','🥗'],
      ['lie in bed','ベッドに横たわる','lie','🛏️']
    ],
    teacherQuestions:[
      ['Where do you rest at home?','家ではどこで休みますか？','On a sofa.'],
      ['Do you love chocolate?','チョコレートは大好きですか？','Yes, I do.'],
      ['Where do you shop for groceries?','どこで食料品を買いますか？','At a supermarket.'],
      ['Where do you cross the street?','どこで道を渡りますか？','At the crosswalk.'],
      ['Can you fill in the blank?','空欄を埋められますか？','Yes, I can.'],
      ['What food do you share with your family?','家族とどんな食べ物を分け合いますか？','I share a salad.'],
      ['What do you do when you are tired?','疲れたとき何をしますか？','I lie in bed.']
    ]
  };

  if(!G5_LESSONS.some(l=>l.n===6))G5_LESSONS.push(lesson6);
  if(!g5Store.lesson6)g5Store.lesson6={best:0,cleared:false,lectureSeen:false};
  g5Save();

  if(typeof G5_VARIETY!=='undefined'){
    G5_VARIETY[6]={
      labels:['① 絵→フレーズ','② 耳でキャッチ','③ 動詞を入れる','④ 間違い復習','⑤ 先生に質問！','⑥ 日本語→英語','⑦ 並び替え','⑧ 会話チャレンジ'],
      tag:'先生に質問！'
    };
  }

  const courseTag=document.querySelector('.courseCard.grade5 .courseTag');
  if(courseTag)courseTag.textContent='Lesson 1〜6';
  try{renderG5Home();}catch(e){}

  const oldMeaning=renderG5Meaning;
  renderG5Meaning=function(){
    if(g5State.lessonN!==6)return oldMeaning();
    g5SetBest(1);
    if(g5State.idx>=g5State.queue.length){g5State.stage=2;g5State.idx=0;return renderG5();}
    const idx=g5State.queue[g5State.idx],p=G5_DATA.phrases[idx];
    const others=g5Shuffle([...Array(G5_DATA.phrases.length).keys()].filter(x=>x!==idx)).slice(0,3);
    g5State.choices=g5Shuffle([idx,...others]);
    g5Header(g5State.queue.length);
    document.getElementById('g5Body').innerHTML=`<div class='sub'>① 絵を見てフレーズを選ぼう</div><div class='bigEmoji center' style='font-size:72px'>${p[3]}</div><div class='g5Meaning'>${p[1]}</div><div class='choiceGrid'>${g5State.choices.map((x,i)=>`<button class='choice' onclick='g5L6AnswerPicture(${i},${idx})'>${G5_DATA.phrases[x][0]}</button>`).join('')}</div><div class='feedback' id='g5Fb'></div>`;
  };
  window.g5L6AnswerPicture=function(i,correctIdx){
    g5State.choices=g5State.choices.map(x=>G5_DATA.phrases[x][0]);
    g5Feedback(i,G5_DATA.phrases[correctIdx][0],()=>g5State.wrong.add(correctIdx));
  };

  const oldListening=renderG5Listening;
  renderG5Listening=function(){
    if(g5State.lessonN!==6)return oldListening();
    g5SetBest(2);
    if(g5State.idx>=g5State.queue.length){g5State.stage=3;g5State.idx=0;return renderG5();}
    const idx=g5State.queue[g5State.idx],p=G5_DATA.phrases[idx];
    g5State.choices=g5Shuffle([p[1],...g5PickOther(1,p[1])]);
    g5Header(g5State.queue.length);
    document.getElementById('g5Body').innerHTML=`<div class='sub'>② 耳でキャッチ！</div><div class='center'><button class='speakerBtn' onclick="speak(${JSON.stringify(p[0])})"><img src='speaker.svg'><span>もう一度聞く</span></button><div style='margin:8px 0 4px;color:#789;font-size:13px'>🔊 問題が出たら自動で1回流れます</div></div><div class='choiceGrid'>${g5State.choices.map((c,i)=>`<button class='choice jp' onclick='g5AnswerListen(${i})'>${c}</button>`).join('')}</div><div class='feedback' id='g5Fb'></div>`;
    requestAnimationFrame(()=>setTimeout(()=>speak(p[0]),120));
  };

  const oldComplete=renderG5Complete;
  renderG5Complete=function(){
    if(g5State.lessonN!==6)return oldComplete();
    g5SetBest(5);
    if(g5State.idx>=g5State.queue.length){g5State.stage=6;g5State.idx=0;return renderG5();}
    const idx=g5State.queue[g5State.idx],p=G5_DATA.phrases[idx],q=G5_DATA.teacherQuestions[idx];
    const pool=G5_DATA.teacherQuestions.map(x=>x[0]).filter(x=>x!==q[0]);
    g5State.choices=g5Shuffle([q[0],...g5Shuffle(pool).slice(0,3)]);
    g5Header(g5State.queue.length);
    document.getElementById('g5Body').innerHTML=`<div class='sub'>⑤ 英会話の先生に聞いてみよう</div><div style='max-width:650px;margin:0 auto 14px;padding:14px 16px;border-radius:18px;background:#eef8ff;border:1px solid #d6ebfb;text-align:left'><b>💡 今日使うフレーズ</b><div style='font-size:24px;font-weight:900;margin:6px 0'>${p[0]}</div><div class='g5Meaning' style='margin:0'>${p[1]}</div></div><div class='g5Meaning'>このフレーズを使って先生に聞ける質問はどれ？</div><div class='choiceGrid'>${g5State.choices.map((c,i)=>`<button class='choice' onclick='g5L6AnswerTeacher(${i},${JSON.stringify(q[0])})'>${c}</button>`).join('')}</div><div class='feedback' id='g5Fb'></div>`;
  };
  window.g5L6AnswerTeacher=function(i,correct){
    const chosen=g5State.choices[i];
    [...document.querySelectorAll('#g5Body .choice')].forEach(b=>b.disabled=true);
    const btns=[...document.querySelectorAll('#g5Body .choice')];
    if(chosen===correct){btns[i].classList.add('good');document.getElementById('g5Fb').innerHTML=`正解！<br><button class='ghost' style='margin-top:8px' onclick="speak(${JSON.stringify(correct)})">🔊 この質問を聞く</button>`;playGood();}
    else{btns[i].classList.add('bad');btns.find(b=>b.textContent===correct)?.classList.add('good');document.getElementById('g5Fb').textContent=`先生には「${correct}」と聞けるよ`;playBad();}
    g5State.idx++;setTimeout(renderG5,1150);
  };

  const oldChallenge=renderG5Challenge;
  renderG5Challenge=function(){
    if(g5State.lessonN!==6)return oldChallenge();
    g5SetBest(8);
    if(g5State.idx>=5)return finishG5();
    const idx=g5State.challenge[g5State.idx],q=G5_DATA.teacherQuestions[idx];
    const answerPool=G5_DATA.teacherQuestions.map(x=>x[2]).filter(x=>x!==q[2]);
    g5State.choices=g5Shuffle([q[2],...g5Shuffle(answerPool).slice(0,3)]);
    g5Header(5);
    document.getElementById('g5Body').innerHTML=`<div class='g5ChallengeLabel'>⑧ 会話チャレンジ ${g5State.idx+1}/5</div><div style='max-width:650px;margin:8px auto 18px;padding:18px;border-radius:20px;background:#f7fbff;border:1px solid #d9eaf7'><div style='font-size:14px;font-weight:900;color:#6c8bab;margin-bottom:6px'>👩‍🏫 Teacher</div><div class='g5Phrase' style='margin:0'>${q[0]}</div><button class='ghost' style='margin-top:10px' onclick="speak(${JSON.stringify(q[0])})">🔊 先生の質問を聞く</button></div><div class='g5Meaning'>あなたなら、どう答える？</div><div class='choiceGrid'>${g5State.choices.map((c,i)=>`<button class='choice' onclick='g5L6AnswerRoleplay(${i},${JSON.stringify(q[2])})'>${c}</button>`).join('')}</div><div class='feedback' id='g5Fb'></div>`;
    requestAnimationFrame(()=>setTimeout(()=>speak(q[0]),120));
  };
  window.g5L6AnswerRoleplay=function(i,correct){
    if(g5State.choices[i]===correct)g5State.challengeScore++;
    g5Feedback(i,correct);
  };
})();