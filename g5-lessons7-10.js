/* 英検5級 準備 Lesson 7〜10：14フレーズずつ。会話・場面・ミッションでマンネリ防止 */
(function(){
  const lessons=[
    {
      n:7,title:'動詞フレーズ⑦',icon:'🗣️',summary:'know / like / mean / need / show / speak / think / dance / leave / snow / understand / change / walk / learn を会話で使う。',
      lectureTitle:'「先生に聞く・聞き返す」に変えてみよう',
      lectureHtml:`<b class='g5Verb'>What do you mean?</b> = どういう意味？<br><b class='g5Verb'>Do you like dogs?</b> = 犬は好き？<br><b class='g5Verb'>Can you speak English?</b> = 英語を話せる？`,
      lectureNote:`🌟 クラウティで使える一言：<b>“What do you mean?”</b> は分からない時にそのまま先生へ言えるよ。`,
      phrases:[
        ['know your name','あなたの名前を知っている','know','🪪'],['like dogs','犬が好きだ','like','🐶'],['What do you mean?','どういう意味？','mean','❓'],['need a new book','新しい本を必要とする','need','📘'],['show you a picture','あなたに絵を見せる','show','🖼️'],['speak English','英語を話す','speak','🗣️'],['think about an offer','申し出について考える','think','🤔'],
        ['dance at a party','パーティーでおどる','dance','💃'],['leave the city','町を去る','leave','🏙️'],['start to snow','雪が降り始める','snow','❄️'],['understand perfectly','完璧に理解する','understand','💡'],['change color','色を変える','change','🎨'],['walk around a lake','湖の周りを歩く','walk','🚶'],['learn French','フランス語を習う','learn','🇫🇷']
      ],
      mode:'teacher',
      prompts:[
        ['Do you know my name?','Yes, I do.'],['Do you like dogs?','Yes, I do.'],['What can you say when you do not understand?','What do you mean?'],['What do you need for class?','I need a new book.'],['Can you show me a picture?','Yes, I can.'],['Can you speak English?','Yes, I can.'],['What do you think about this offer?','I will think about it.'],
        ['Do you dance at parties?','Sometimes.'],['Do you want to leave the city?','No, I do not.'],['What happens in winter?','It starts to snow.'],['Do you understand?','Yes, perfectly.'],['Can leaves change color?','Yes, they can.'],['Where do you like to walk?','Around a lake.'],['What language do you want to learn?','French.']
      ]
    },
    {
      n:8,title:'動詞フレーズ⑧',icon:'🎭',summary:'hope / sleep / fly / cry / pay / cut / visit / put / thank / grow / fall / end / invite / order を場面で判断する。',
      lectureTitle:'「どんな場面で使う？」で覚えよう',
      lectureHtml:`🏆 <b>I hope she'll win.</b><br>😴 <b>I sleep very well.</b><br>🍽️ <b>I order a salad.</b>`,
      lectureNote:'同じ穴埋めだけでなく、場面を見て「この時はどのフレーズ？」と考えるレッスン。',
      phrases:[
        ["hope she'll win",'彼女が勝つことを願う','hope','🏆'],['sleep very well','よく眠る','sleep','😴'],['fly away','飛び去る','fly','🕊️'],['cry for joy','嬉し泣きをする','cry','🥹'],['pay my taxes','税金を支払う','pay','💴'],['cut my hair','髪の毛を切る','cut','✂️'],['visit my family','家族を訪ねる','visit','👨‍👩‍👧'],
        ['put my bag on a table','鞄をテーブルの上に置く','put','👜'],['thank him for his help','彼の助けに感謝する','thank','🙏'],['grow so quickly','とても早く成長する','grow','🌱'],['fall from the top of the tree','木の上から落ちる','fall','🌳'],['end my speech','スピーチを終える','end','🎤'],['invite me to dinner','私を夕食に招待する','invite','🍽️'],['order a salad','サラダを注文する','order','🥗']
      ],
      mode:'scene',
      prompts:[
        ['友達の試合を応援している','hope she\'ll win'],['朝「よく寝た！」と言いたい','sleep very well'],['鳥が空へ飛んでいった','fly away'],['うれしくて涙が出た','cry for joy'],['税金を支払う','pay my taxes'],['髪を切る','cut my hair'],['家族に会いに行く','visit my family'],
        ['かばんを机に置く','put my bag on a table'],['助けてもらってお礼を言う','thank him for his help'],['植物がすぐ大きくなる','grow so quickly'],['木の上から落ちる','fall from the top of the tree'],['スピーチを終える','end my speech'],['夕食に誘われる','invite me to dinner'],['レストランでサラダを頼む','order a salad']
      ]
    },
    {
      n:9,title:'動詞フレーズ⑨',icon:'🎯',summary:'practice / choose / drop / worry / jump / pass / plan / smile / turn / decide / believe / hold / discover / throw をミッション形式で練習。',
      lectureTitle:'英語ミッションをクリアしよう',
      lectureHtml:`⚽ <b>practice soccer</b><br>📚 <b>choose three books</b><br>➡️ <b>turn right</b><br>⚾ <b>throw a baseball</b>`,
      lectureNote:'先生の指示や場面を見て、一番合うフレーズを選ぶ「ミッション」形式。',
      phrases:[
        ['practice soccer','サッカーを練習する','practice','⚽'],['choose three books','本を3冊選ぶ','choose','📚'],['drop my keys','鍵を落とす','drop','🔑'],['worry about you','あなたを心配する','worry','😟'],['jump a fence','フェンスを飛び越える','jump','🚧'],['pass a math test','算数のテストに合格する','pass','✅'],['plan a holiday','休暇の予定を立てる','plan','🗓️'],
        ['smile at a camera','カメラに微笑む','smile','📷'],['turn right','右に曲がる','turn','➡️'],['decide to stay','とどまると決める','decide','🏠'],['believe his crazy story','彼のおかしな話を信じる','believe','🤯'],['hold a meeting','会議を開催する','hold','🧑‍💼'],['discover the truth','真実を発見する','discover','🔎'],['throw a baseball','野球ボールを投げる','throw','⚾']
      ],
      mode:'mission',
      prompts:[
        ['放課後、サッカーの練習をする','practice soccer'],['図書館で3冊選ぶ','choose three books'],['ポケットから鍵が落ちた','drop my keys'],['友達のことが心配','worry about you'],['フェンスを飛び越える','jump a fence'],['算数テストに合格した','pass a math test'],['休みの予定を立てる','plan a holiday'],
        ['写真を撮る時に笑う','smile at a camera'],['道案内で右へ曲がる','turn right'],['帰らずここにいると決める','decide to stay'],['変な話だけど信じる','believe his crazy story'],['みんなで会議を開く','hold a meeting'],['本当のことを見つける','discover the truth'],['ボールを投げる','throw a baseball']
      ]
    },
    {
      n:10,title:'動詞フレーズ⑩',icon:'🌟',summary:'keep / surprise / seem / hear / wish / shout / dress / name / rain / add / carry / return / copy / realize を会話と使い分けで総仕上げ。',
      lectureTitle:'先生との会話で使える形にしよう',
      lectureHtml:`🌊 <b>I can hear the ocean.</b><br>☔ <b>It starts to rain.</b><br>🎒 <b>I carry my bag.</b><br>💡 <b>I realize my mistake.</b>`,
      lectureNote:'Lesson10は「聞く→選ぶ→会話で返す」を多めにして、1〜9の総仕上げ。',
      phrases:[
        ['keep the door closed','ドアを閉めておく','keep','🚪'],['surprise Alex with flowers','花でアレックスを驚かす','surprise','💐'],['seem like a nice man','いい男のように見える','seem','🙂'],['hear the ocean','海の音が聞こえる','hear','🌊'],['wish to discuss','話し合いを望む','wish','💬'],['shout to my friends','友だちにむかって叫ぶ','shout','📣'],['dress in a suit','スーツを着る','dress','👔'],
        ['name my dog Pochi','犬をポチと名付ける','name','🐕'],['start to rain','雨が降り始める','rain','🌧️'],['add salt to water','水に塩を加える','add','🧂'],['carry my bag','鞄を運ぶ','carry','🎒'],['return home','家に帰る','return','🏠'],['copy a letter','手紙をコピーする','copy','📄'],['realize my mistake','間違いを悟る','realize','💡']
      ],
      mode:'conversation',
      prompts:[
        ['Should I open the door?','Please keep the door closed.'],['How can I surprise Alex?','Surprise Alex with flowers.'],['What does he seem like?','He seems like a nice man.'],['What can you hear at the beach?','I can hear the ocean.'],['What do you wish to do?','I wish to discuss it.'],['How do you call friends far away?','I shout to my friends.'],['What do you wear to a formal meeting?','I dress in a suit.'],
        ['What do you name your dog?','I name my dog Pochi.'],['What happens when clouds get dark?','It starts to rain.'],['What do you add to the water?','I add salt to water.'],['What do you carry to school?','I carry my bag.'],['Where do you go after school?','I return home.'],['What do you do with this letter?','I copy a letter.'],['What happens after you notice an error?','I realize my mistake.']
      ]
    }
  ];

  lessons.forEach(l=>{
    if(!G5_LESSONS.some(x=>x.n===l.n))G5_LESSONS.push(l);
    const k='lesson'+l.n;if(!g5Store[k])g5Store[k]={best:0,cleared:false,lectureSeen:false};
  });
  G5_LESSONS.sort((a,b)=>a.n-b.n);g5Save();

  if(typeof G5_VARIETY!=='undefined'){
    G5_VARIETY[7]={labels:['① 意味4択','② リスニング','③ 動詞を選ぶ','④ 間違い復習','⑤ 先生に聞く','⑥ 日本語→英語','⑦ 並び替え','⑧ 会話で返す'],tag:'先生と会話'};
    G5_VARIETY[8]={labels:['① 意味4択','② リスニング','③ 動詞を選ぶ','④ 間違い復習','⑤ 場面を当てる','⑥ 日本語→英語','⑦ 並び替え','⑧ 場面チャレンジ'],tag:'場面クイズ'};
    G5_VARIETY[9]={labels:['① 意味4択','② リスニング','③ 動詞を選ぶ','④ 間違い復習','⑤ ミッション','⑥ 日本語→英語','⑦ 並び替え','⑧ 3秒ミッション'],tag:'英語ミッション'};
    G5_VARIETY[10]={labels:['① 意味4択','② リスニング','③ 動詞を選ぶ','④ 間違い復習','⑤ 会話で使う','⑥ 日本語→英語','⑦ 並び替え','⑧ 先生と会話'],tag:'会話総仕上げ'};
  }

  const courseTag=document.querySelector('.courseCard.grade5 .courseTag');if(courseTag)courseTag.textContent='Lesson 1〜10';
  try{renderG5Home();}catch(e){}

  const oldComplete=renderG5Complete;
  renderG5Complete=function(){
    if(g5State.lessonN<7||g5State.lessonN>10)return oldComplete();
    g5SetBest(5);
    if(g5State.idx>=g5State.queue.length){g5State.stage=6;g5State.idx=0;return renderG5();}
    const idx=g5State.queue[g5State.idx],p=G5_DATA.phrases[idx],item=G5_DATA.prompts[idx];
    if(G5_DATA.mode==='teacher'||G5_DATA.mode==='conversation'){
      const q=item[0],correct=item[1],pool=G5_DATA.prompts.map(x=>x[1]).filter(x=>x!==correct);
      g5State.choices=g5Shuffle([correct,...g5Shuffle(pool).slice(0,3)]);g5Header(g5State.queue.length);
      document.getElementById('g5Body').innerHTML=`<div class='sub'>⑤ ${G5_DATA.mode==='teacher'?'先生に聞かれたら？':'会話で使ってみよう'}</div><div style='max-width:650px;margin:0 auto 16px;padding:16px;border-radius:20px;background:#eef8ff;border:1px solid #d9eaf7'><div style='font-weight:900;color:#668'>👩‍🏫 Teacher</div><div class='g5Phrase' style='margin:5px 0'>${q}</div><button class='ghost' onclick="speak(${JSON.stringify(q)})">🔊 聞く</button></div><div class='choiceGrid'>${g5State.choices.map((c,i)=>`<button class='choice' onclick='g5L710Answer(${i},${JSON.stringify(correct)},${idx})'>${c}</button>`).join('')}</div><div class='feedback' id='g5Fb'></div>`;
      return;
    }
    const scene=item[0],correct=item[1],pool=G5_DATA.phrases.map(x=>x[0]).filter(x=>x!==correct);
    g5State.choices=g5Shuffle([correct,...g5Shuffle(pool).slice(0,3)]);g5Header(g5State.queue.length);
    document.getElementById('g5Body').innerHTML=`<div class='sub'>⑤ ${G5_DATA.mode==='scene'?'この場面ならどれ？':'🎯 英語ミッション'}</div><div style='max-width:650px;margin:0 auto 16px;padding:18px;border-radius:20px;background:#fff9e9;border:1px solid #f2dfad'><div style='font-size:13px;font-weight:900;color:#9a7a31'>${G5_DATA.mode==='scene'?'🎭 SCENE':'MISSION'}</div><div class='g5Phrase' style='margin:7px 0'>${scene}</div><div style='font-size:52px'>${p[3]}</div></div><div class='choiceGrid'>${g5State.choices.map((c,i)=>`<button class='choice' onclick='g5L710Answer(${i},${JSON.stringify(correct)},${idx})'>${c}</button>`).join('')}</div><div class='feedback' id='g5Fb'></div>`;
  };
  window.g5L710Answer=function(i,correct,idx){g5Feedback(i,correct,()=>g5State.wrong.add(idx));};

  const oldChallenge=renderG5Challenge;
  renderG5Challenge=function(){
    if(g5State.lessonN<7||g5State.lessonN>10)return oldChallenge();
    g5SetBest(8);if(g5State.idx>=5)return finishG5();
    const idx=g5State.challenge[g5State.idx],item=G5_DATA.prompts[idx],p=G5_DATA.phrases[idx];g5Header(5);
    let prompt,correct,pool;
    if(G5_DATA.mode==='teacher'||G5_DATA.mode==='conversation'){
      prompt=item[0];correct=item[1];pool=G5_DATA.prompts.map(x=>x[1]).filter(x=>x!==correct);
    }else{
      prompt=item[0];correct=item[1];pool=G5_DATA.phrases.map(x=>x[0]).filter(x=>x!==correct);
    }
    g5State.choices=g5Shuffle([correct,...g5Shuffle(pool).slice(0,3)]);
    document.getElementById('g5Body').innerHTML=`<div class='g5ChallengeLabel'>⑧ ${G5_DATA.mode==='mission'?'3秒ミッション':G5_DATA.mode==='scene'?'場面チャレンジ':'先生と会話'} ${g5State.idx+1}/5</div><div style='max-width:650px;margin:8px auto 18px;padding:18px;border-radius:20px;background:#f7fbff;border:1px solid #d9eaf7'><div class='g5Phrase' style='margin:0'>${prompt}</div>${(G5_DATA.mode==='teacher'||G5_DATA.mode==='conversation')?`<button class='ghost' style='margin-top:10px' onclick="speak(${JSON.stringify(prompt)})">🔊 聞く</button>`:`<div style='font-size:56px;margin-top:10px'>${p[3]}</div>`}</div><div class='choiceGrid'>${g5State.choices.map((c,i)=>`<button class='choice' onclick='g5L710Challenge(${i},${JSON.stringify(correct)})'>${c}</button>`).join('')}</div><div class='feedback' id='g5Fb'></div>`;
    if(G5_DATA.mode==='teacher'||G5_DATA.mode==='conversation')requestAnimationFrame(()=>setTimeout(()=>speak(prompt),120));
  };
  window.g5L710Challenge=function(i,correct){if(g5State.choices[i]===correct)g5State.challengeScore++;g5Feedback(i,correct);};
})();