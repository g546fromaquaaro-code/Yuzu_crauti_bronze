const GRAMMAR_LECTURES={
  1:{title:'This is / These are',jp:'1つなら This is、2つ以上なら These are を使うよ。',examples:['This is bread.','These are noodles.'],tip:'「これは〜です」は This is。「これらは〜です」は These are。'},
  2:{title:'Do you like ...?',jp:'「〜が好き？」と聞くときは Do you like ...? を使うよ。',examples:['Do you like potato chips?','Yes, I do. / No, I don’t.'],tip:'答えは Yes, I do. / No, I don’t. でセットで覚えよう。'},
  3:{title:'What am I? / I’m ...',jp:'自分が何かを当ててもらうときは What am I?。特徴は I’m ... で言えるよ。',examples:['What am I?','I’m long. I’m green.'],tip:'I am は会話では I’m と短くすることが多いよ。'},
  5:{title:'Do you want ...?',jp:'「〜はいかが？」「〜がほしい？」は Do you want ...? が使えるよ。',examples:['Do you want some apples?','Yes, please. / No, thank you.'],tip:'ほしい時は Yes, please. 断る時は No, thank you. が自然。'},
  7:{title:'I have ...',jp:'「私は〜を持っています・飼っています」は I have ...。',examples:['I have a dog.','I have a hamster.'],tip:'a / an も一緒にチェックしよう。ant の前は an。'},
  8:{title:'Is it ...?',jp:'「それは〜ですか？」は Is it ...?。',examples:['Is it a bee?','Yes, it is. / No, it isn’t.'],tip:'質問が Is it ...? なら、答えも it を使うよ。'},
  13:{title:'過去のことを言う',jp:'終わった出来事は過去形で表すことがあるよ。put は「置いた」で、形が変わらない特別な動詞。',examples:['My mother put the chopsticks on the table.'],tip:'put は現在形も過去形も put。ちょっとずるい単語。'},
  16:{title:'I’m wearing ...',jp:'「私は〜を着ています」は I’m wearing ...。',examples:['I’m wearing a shirt.'],tip:'wearing は「身につけている」という意味。'},
  21:{title:'There is / There are',jp:'「〜があります・います」は、1つなら There is、2つ以上なら There are。',examples:['There’s one cat.','There are two oranges.'],tip:'Are there ...? と聞かれたら Yes, there are. / No, there aren’t.。'},
  22:{title:'have と has',jp:'I / you / we / they なら have。he / she なら has を使うよ。',examples:['I have seven cookies.','He has eight pencils.'],tip:'主語が he / she のときだけ has に変わる、と覚えると楽。'},
  24:{title:'Does ... have?',jp:'he / she / it について「〜を持っている？」と聞くときは Does ... have?。',examples:['Does this puzzle have forty pieces?','Yes, it does. / No, it doesn’t.'],tip:'Does を使ったら、後ろは has ではなく have に戻るよ。'},
  25:{title:'can と過去形',jp:'can は「〜できる」。walked / printed は「〜した」という過去の言い方。',examples:['I can carry eighty kilograms.','I walked seventy steps.','We printed ninety copies.'],tip:'can の後ろは動詞をそのまま使うよ。'},
  50:{title:'あいさつの返し方',jp:'あいさつは、相手の言葉に合う返事をセットで覚えると会話が速くなるよ。',examples:['Good morning! → Good morning!','Nice to meet you. → Nice to meet you, too.'],tip:'文法というより「会話のかたまり」で覚えるLesson。'},
  51:{title:'命令文と Please',jp:'相手にしてほしいことは動詞から始めるよ。Please をつけるとやわらかくなる。',examples:['Go to the next page.','Please come in.'],tip:'Go / Come の前に主語の you は置かなくてOK。'},
  52:{title:'決まり文句をそのまま覚える',jp:'日常会話は短い決まり文句を丸ごと覚えると強い。',examples:['I’m home! → Welcome back!','I’m so sorry. → No worries.'],tip:'一語ずつ訳すより、返事までセットで覚えよう。'},
  53:{title:'not と Is that ...?',jp:'「〜ではありません」は not。「あれはあなたの〜？」は Is that your ...?。',examples:['This is not my umbrella.','Is that your ruler? → Yes, it is.'],tip:'this は近く、that は少し離れたものに使うよ。'},
  54:{title:'like / likes と -ing',jp:'I なら like、she / he なら likes。「今〜している」は be動詞 + ing。',examples:['I like chocolate.','She likes strawberries.','I’m eating grapes.'],tip:'he / she の一般動詞には s がつく。今している動作は am/is/are + ing。'},
  55:{title:'have と現在進行形',jp:'「持っている」は have。「今〜している」は am/is/are + ing。',examples:['We have scissors.','He is playing baseball.'],tip:'He is playing ... の is を落とさないようにしよう。'},
  56:{title:'There is / are と三単現',jp:'There is / are の復習に加えて、Miho comes のように he / she / 人の名前では動詞に s がつくことがあるよ。',examples:['There is a police station.','There are many cars.','Miho comes to the community center.'],tip:'1つなら is、複数なら are。人の名前1人なら comes。'},
  57:{title:'時刻・those・want to',jp:'時刻は o’clock。「あれら」は those。「〜したい？」は Do you want to ...?。',examples:['Is it eight o’clock?','Are those your cats?','Do you want to go to the zoo?'],tip:'those は複数。Do you want to ...? の後ろは動詞をそのまま使うよ。'}
};

(function(){
  const style=document.createElement('style');
  style.textContent=`
  .grammarIntroModal{position:fixed;inset:0;z-index:120;background:rgba(66,96,128,.28);backdrop-filter:blur(9px);display:flex;align-items:center;justify-content:center;padding:18px}
  .grammarIntroCard{width:min(620px,100%);background:#fff;border:1px solid #dcebf7;border-radius:28px;padding:20px;box-shadow:0 26px 70px rgba(75,119,160,.24)}
  .grammarIntroTop{display:flex;align-items:center;gap:12px;margin-bottom:12px}.grammarBook{width:54px;height:54px;border-radius:18px;background:linear-gradient(180deg,#e8f5ff,#f8fcff);display:flex;align-items:center;justify-content:center;font-size:29px;border:1px solid #d8eafa}.grammarIntroTop h3{margin:0;color:#527596;font-size:24px}.grammarIntroTop small{display:block;color:#91a8bc;margin-top:3px;font-weight:800}
  .grammarExplain{background:#f5faff;border:1px solid #dfedf8;border-radius:20px;padding:14px 16px;color:#607f9d;line-height:1.7;font-weight:800;margin-bottom:12px}.grammarExamples{display:grid;gap:9px;margin-bottom:12px}.grammarExample{border-radius:18px;background:#fff;border:1px solid #dcebf7;padding:12px 14px;color:#496985;font-weight:900;font-family:'Trebuchet MS','Avenir Next Rounded',sans-serif}.grammarTip{border-radius:18px;background:#fff9e9;border:1px solid #f4e7bd;padding:12px 14px;color:#8a7750;line-height:1.6;font-weight:800}.grammarIntroActions{display:flex;gap:10px;justify-content:flex-end;flex-wrap:wrap;margin-top:15px}.grammarIntroActions button{border:none;border-radius:18px;padding:12px 17px;font-weight:900}.grammarSkip{background:#f3f7fb;color:#7892a9}.grammarStart{background:linear-gradient(180deg,#87c0ff,#79dcff);color:#fff}.grammarSpeak{background:#eef8ff;color:#5f88aa}
  `;
  document.head.appendChild(style);

  const seen=JSON.parse(localStorage.getItem('yuzuGrammarSeen')||'{}');
  const baseStart=window.startLesson;

  function markSeen(n){seen[n]=true;localStorage.setItem('yuzuGrammarSeen',JSON.stringify(seen));}
  function closeIntro(){document.getElementById('grammarIntroModal')?.remove();}

  window.showGrammarLecture=function(n,onDone){
    const info=GRAMMAR_LECTURES[n];
    if(!info){if(onDone)onDone();return;}
    closeIntro();
    const modal=document.createElement('div');
    modal.id='grammarIntroModal';modal.className='grammarIntroModal';
    modal.innerHTML=`<div class="grammarIntroCard">
      <div class="grammarIntroTop"><div class="grammarBook">📘</div><div><h3>${info.title}</h3><small>Lesson ${n} かんたん文法レクチャー</small></div></div>
      <div class="grammarExplain">${info.jp}</div>
      <div class="grammarExamples">${info.examples.map(x=>`<div class="grammarExample">${x}</div>`).join('')}</div>
      <div class="grammarTip">💡 ${info.tip}</div>
      <div class="grammarIntroActions"><button class="grammarSpeak">🔊 例文を聞く</button><button class="grammarSkip">あとで</button><button class="grammarStart">わかった！スタート</button></div>
    </div>`;
    document.body.appendChild(modal);
    modal.querySelector('.grammarSpeak').onclick=()=>{if(typeof speak==='function')speak(info.examples.join(' '));};
    modal.querySelector('.grammarSkip').onclick=()=>{markSeen(n);closeIntro();if(onDone)onDone();};
    modal.querySelector('.grammarStart').onclick=()=>{markSeen(n);closeIntro();if(onDone)onDone();};
  };

  window.startLesson=function(n){
    if(GRAMMAR_LECTURES[n]&&!seen[n]) return showGrammarLecture(n,()=>baseStart(n));
    return baseStart(n);
  };

  const baseMenu=window.openLessonStageMenu;
  if(typeof baseMenu==='function'){
    window.openLessonStageMenu=function(n){
      baseMenu(n);
      if(!GRAMMAR_LECTURES[n])return;
      setTimeout(()=>{
        const grid=document.querySelector('#stageModal .stageMenuGrid');
        if(!grid||grid.querySelector('.grammarReplayBtn'))return;
        const b=document.createElement('button');
        b.className='stageMenuBtn grammarReplayBtn';
        b.innerHTML='<strong>📘 文法レクチャー</strong><span>このLessonのポイントをもう一度見る</span>';
        b.onclick=()=>showGrammarLecture(n,()=>{});
        grid.insertBefore(b,grid.children[1]||null);
      },0);
    };
  }
})();
