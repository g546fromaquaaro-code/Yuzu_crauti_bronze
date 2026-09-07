/* 英検5級：本番形式の途中チェック + 明らかに優先度の低い語句を整理 */
(function(){
  if(typeof G5_LESSONS==='undefined') return;

  // 小学生の5級準備として優先度が低く、実戦で使いにくい表現だけを控えめに削除。
  const DROP=new Set([
    'pay my taxes','stop smoking','hire a lawyer','act like a child',
    'wish to discuss','hold a meeting','accept your apology','realize my mistake',
    'believe his crazy story','discover the truth','a perfect gentleman',
    'a sheep farmer','a science laboratory','the American tradition','run a farm'
  ]);
  for(const l of G5_LESSONS){
    if(Array.isArray(l.phrases)) l.phrases=l.phrases.filter(p=>!DROP.has(String(p[0]).replace(/[.!?]$/,'')));
  }

  // 2026年度第1回5級の出題構成（語句4択／会話応答／語順整序）を参考にした完全オリジナル問題。
  const Q={
    1:[
      {t:'大問1風・語句4択',s:'A: What do you do after school?<br>B: I _____ a book at home.',c:['read','drink','open','come'],a:0,h:'動詞と後ろの名詞の組み合わせに注目。'},
      {t:'大問1風・語句4択',s:'Please _____ the door before you leave.',c:['close','sing','teach','ride'],a:0,h:'「ドアを閉める」の自然な組み合わせ。'}
    ],
    2:[
      {t:'大問1風・語句4択',s:'A: What are you listening to?<br>B: I am listening _____ music.',c:['to','at','on','for'],a:0,h:'listen と一緒に使う前置詞を思い出そう。'},
      {t:'大問2風・会話',s:'A: Can you take a picture of us?<br>B: _____',c:['Sure.','I am a picture.','No, it is.','At school.'],a:0,h:'お願いへの自然な返事を選ぼう。'}
    ],
    3:[
      {t:'大問1風・語句4択',s:'We will _____ at the station at nine.',c:['arrive','build','feel','write'],a:0,h:'station と相性のよい動詞。'},
      {t:'大問1風・語句4択',s:'My family will travel _____ America next year.',c:['to','at','on','from'],a:0,h:'travel と行き先の前置詞。'}
    ],
    4:[
      {t:'大問1風・語句4択',s:'My sister can _____ in the pool very well.',c:['swim','bring','tell','lose'],a:0,h:'pool で行う動作を選ぼう。'},
      {t:'大問1風・語句4択',s:'We stayed _____ a hotel last night.',c:['at','on','to','with'],a:0,h:'stay と場所の前置詞。'}
    ],
    5:[
      {t:'大問2風・会話',s:'A: I missed the train.<br>B: Oh, _____.',c:['I see','Good morning','You are a train','Open it'],a:0,h:'相手の話を受ける自然な表現。'},
      {t:'大問1風・語句4択',s:'I have a question. Can I _____ you?',c:['ask','climb','sell','pick'],a:0,h:'question と一緒に使う動詞。'}
    ],
    6:[
      {t:'大問1風・語句4択',s:'A: Do you _____ English?<br>B: Yes, a little.',c:['speak','show','mean','need'],a:0,h:'English を目的語に取る自然な動詞。'}
    ],
    7:[
      {t:'大問1風・語句4択',s:'It is cold today. I hope it will _____ tomorrow.',c:['snow','dance','leave','learn'],a:0,h:'天気に合う動詞を選ぼう。'}
    ],
    8:[
      {t:'大問1風・語句4択',s:'My father _____ his bag on the table.',c:['puts','invites','grows','orders'],a:0,h:'bag と table の場面を考えよう。'}
    ],
    9:[
      {t:'大問1風・語句4択',s:'I _____ soccer every Saturday.',c:['practice','drop','jump','worry'],a:0,h:'soccer と一緒に使う動詞。'}
    ],
    10:[
      {t:'大問1風・語句4択',s:'Please _____ right at the next corner.',c:['turn','smile','throw','decide'],a:0,h:'道案内でよく使う表現。'}
    ],
    11:[
      {t:'大問1風・語句4択',s:'I can play the _____ very well.',c:['piano','school','window','job'],a:0,h:'play the ～ になる楽器。'}
    ],
    12:[
      {t:'大問1風・語句4択',s:'My math _____ is very kind.',c:['teacher','rain','cup','sky'],a:0,h:'人を表す名詞を選ぼう。'}
    ],
    13:[
      {t:'大問1風・語句4択',s:'I like to play _____ after school.',c:['basketball','breakfast','home','letter'],a:0,h:'play と一緒に使えるスポーツ。'}
    ],
    14:[
      {t:'大問1風・語句4択',s:'There is a _____ of Tokyo on the wall.',c:['map','milk','team','ice'],a:0,h:'Tokyo の場所を示すもの。'}
    ],
    15:[
      {t:'大問1風・語句4択',s:'Orange _____ is my favorite drink.',c:['juice','history','chair','body'],a:0,h:'drink に関係する語。'}
    ],
    16:[
      {t:'大問1風・語句4択',s:'I cannot find my _____. I need it to open the door.',c:['key','fruit','camera','guide'],a:0,h:'ドアを開けるのに必要なもの。'}
    ],
    17:[
      {t:'大問2風・会話',s:'A: Would you like some tea?<br>B: Yes, _____.',c:['please','doctor','trip','nose'],a:0,h:'申し出を受ける自然な返事。'}
    ],
    18:[
      {t:'大問1風・語句4択',s:'I read a _____ before bed.',c:['book','pet','dinner','soccer'],a:0,h:'read と一緒に使う名詞。'}
    ],
    19:[
      {t:'大問1風・語句4択',s:'My father is a taxi _____.',c:['driver','bear','sugar','kitchen'],a:0,h:'職業を表す語を選ぼう。'}
    ],
    20:[
      {t:'大問2風・会話',s:'A: Let’s watch a movie.<br>B: _____.',c:['Good idea','A birthday','A question','Music'],a:0,h:'誘いへの自然な返事。'}
    ],
    21:[
      {t:'大問1風・文法4択',s:'I _____ from Osaka.',c:['am','is','are','be'],a:0,h:'主語が I のときの be動詞。'}
    ],
    22:[
      {t:'大問2風・会話',s:'A: Are you a basketball fan?<br>B: Yes, _____.',c:['I am','you are','I do','it is'],a:0,h:'Are you ～? への答え方。'}
    ],
    23:[
      {t:'大問1風・文法4択',s:'A: Is this your notebook?<br>B: Yes, this is _____ notebook.',c:['my','me','I','mine'],a:0,h:'名詞 notebook の前に置く「私の」。'},
      {t:'大問1風・文法4択',s:'_____ is my bag over there.',c:['That','This','These','I'],a:0,h:'離れた1つのものを指す語。'}
    ],
    24:[
      {t:'大問1風・文法4択',s:'I _____ soccer after school.',c:['play','plays','playing','am play'],a:0,h:'主語が I の一般動詞。'},
      {t:'大問1風・文法4択',s:'I do not _____ tennis on Mondays.',c:['play','plays','playing','played'],a:0,h:'do not の後ろは動詞の原形。'}
    ],
    25:[
      {t:'大問2風・会話',s:'A: Do you like basketball?<br>B: Yes, _____.',c:['I do','I am','you do','it does'],a:0,h:'Do you ～? への答え方。'},
      {t:'大問1風・文法4択',s:'_____ do you want for lunch?',c:['What','Who','Where','How'],a:0,h:'「何が欲しい？」の疑問詞。'}
    ],
    26:[
      {t:'大問1風・語句4択',s:'My sister is very _____. She is 170 cm.',c:['tall','fast','cold','young'],a:0,h:'身長を表す形容詞。'},
      {t:'大問1風・文法4択',s:'Ken plays the piano very _____.',c:['well','tall','popular','small'],a:0,h:'動作の様子を表す副詞。'}
    ],
    27:[
      {t:'大問2風・会話',s:'A: Let’s practice basketball after school.<br>B: _____.',c:['Good idea','No, I am','It is a ball','At five'],a:0,h:'誘いへの自然な返事。'},
      {t:'大問1風・文法4択',s:'Please _____ your book.',c:['open','opens','opening','to open'],a:0,h:'命令文は動詞の原形で始める。'}
    ],
    28:[
      {t:'大問1風・文法4択',s:'My brother _____ English every day.',c:['studies','study','studying','is study'],a:0,h:'he / she と同じ三人称単数。'},
      {t:'大問1風・文法4択',s:'Does Miki _____ tennis?',c:['play','plays','playing','played'],a:0,h:'does の後ろは動詞の原形。'}
    ],
    29:[
      {t:'大問1風・文法4択',s:'Look! The boys _____ basketball now.',c:['are playing','play','is playing','playing'],a:0,h:'複数主語 + 現在進行形。'},
      {t:'大問1風・文法4択',s:'Mina is not _____ TV now.',c:['watching','watch','watches','watched'],a:0,h:'is not + 動詞-ing。'}
    ],
    30:[
      {t:'大問3風・語順感覚',s:'「あなたは今、何をしていますか。」に最も近い文は？',c:['What are you doing now?','What you are doing now?','Are what you doing now?','What do you doing now?'],a:0,h:'疑問詞 + be動詞 + 主語 + -ing。'},
      {t:'大問2風・会話',s:'A: Is Ken studying now?<br>B: No, _____.',c:["he isn't",'he doesn’t','I am not','he not'],a:0,h:'Is he ～? への否定の答え方。'}
    ]
  };

  function poolFor(n){ return Q[n]||Q[((n-1)%30)+1]||Q[1]; }
  function resetCheckpoint(){g5State._eikenCheckpointDone=false;g5State._eikenCheckpointQ=null;}

  const oldStart=window.startG5Lesson;
  if(typeof oldStart==='function'){
    window.startG5Lesson=function(n=1){ resetCheckpoint(); return oldStart(n); };
  }

  const oldRender=window.renderG5;
  if(typeof oldRender!=='function') return;

  function renderCheckpoint(){
    const list=poolFor(g5State.lessonN);
    if(!g5State._eikenCheckpointQ) g5State._eikenCheckpointQ=list[Math.floor(Math.random()*list.length)];
    const q=g5State._eikenCheckpointQ;
    try{g5Header(1);}catch(e){}
    const body=document.getElementById('g5Body');
    if(!body) return;
    body.innerHTML=`<div style="max-width:760px;margin:8px auto 0">
      <div style="display:inline-flex;align-items:center;gap:8px;padding:7px 12px;border-radius:999px;background:#fff1d8;color:#a45b00;font-weight:1000;border:1px solid #ffd38c">🔥 本番ミニ問題　<span style="font-size:12px">${q.t}</span></div>
      <div class="g5Phrase" style="margin-top:18px;line-height:1.65">${q.s}</div>
      <div class="choiceGrid" id="g5ExamChoices">${q.c.map((x,i)=>`<button class='choice' onclick='g5AnswerEikenCheckpoint(${i})'><b>${i+1}</b>　${x}</button>`).join('')}</div>
      <div class="feedback" id="g5ExamFb"></div>
      <div style="margin-top:10px;font-size:12px;color:#73859a;font-weight:800">※ 英検5級の出題形式を参考にしたオリジナル問題</div>
    </div>`;
  }

  window.g5AnswerEikenCheckpoint=function(i){
    const q=g5State._eikenCheckpointQ; if(!q) return;
    const fb=document.getElementById('g5ExamFb');
    const btns=[...document.querySelectorAll('#g5ExamChoices .choice')];
    if(i===q.a){
      btns.forEach(b=>b.disabled=true); btns[i]?.classList.add('good');
      if(fb) fb.innerHTML=`正解！ <span style="font-size:13px">${q.h}</span>`;
      try{playGood();}catch(e){}
      g5State._eikenCheckpointDone=true;
      setTimeout(()=>oldRender(),700);
    }else{
      btns[i]?.classList.add('bad'); btns[i].disabled=true;
      if(fb) fb.innerHTML=`ちがうよ。<b>同じ問題でもう一度！</b><br><span style="font-size:13px">ヒント：${q.h}</span>`;
      try{playBad();}catch(e){}
    }
  };

  window.renderG5=function(){
    // ①〜③の基礎練習を終えたところで、本番形式を1問はさむ。
    if(g5State.stage===4 && !g5State._eikenCheckpointDone) return renderCheckpoint();
    return oldRender();
  };

  // コース表記を更新
  const tag=document.querySelector('.courseCard.grade5 .courseTag');
  if(tag) tag.textContent='Lesson 1〜30 + 本番ミニ問題';
  try{renderG5Home();}catch(e){}
})();