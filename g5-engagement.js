/* 英検5級：毎回少し違うレッスン、前回復習、間違いノート、BGMローテーション */
(function(){
  const THEMES=[
    {id:'court',icon:'🏀',name:'バスケコート'},
    {id:'space',icon:'🚀',name:'宇宙ステーション'},
    {id:'carnival',icon:'🎪',name:'カーニバル'},
    {id:'treasure',icon:'🗺️',name:'宝さがし'},
    {id:'rhythm',icon:'🎧',name:'リズムパーク'}
  ];
  const STAGE_NAMES={
    '-1':'前のLesson復習',1:'ミックス4択',2:'リスニング',3:'ことばパーツ',4:'まちがい復習',
    5:'使ってみよう',6:'日本語→英語',7:'並び替え',8:'チャレンジ'
  };
  const ENGAGEMENT_KEY='yuzu_g5_engagement_v1';
  const TRACK_SOURCES=[
    'assets/bgm/hoops-bounce.wav','assets/bgm/moon-orbit.wav','assets/bgm/candy-parade.wav',
    'assets/bgm/treasure-steps.wav','assets/bgm/aqua-groove.wav'
  ];
  let engagement={};
  try{engagement=JSON.parse(localStorage.getItem(ENGAGEMENT_KEY)||'{}');}catch(e){engagement={};}

  function saveEngagement(){
    try{localStorage.setItem(ENGAGEMENT_KEY,JSON.stringify(engagement));}catch(e){}
  }
  function localDayNumber(){
    const d=new Date();
    return Math.floor(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())/86400000);
  }
  const trackNames=['Hoops Bounce','Moon Orbit','Candy Parade','Treasure Steps','Aqua Groove','Sunset Hoops','Star Rocket','Confetti March','Golden Quest','Bubble Rhythm'];
  BGM_TRACKS.forEach((track,i)=>{track.name=trackNames[i];track.rate=i<5?1:(i%2?.94:1.06);});
  const baseStartBgm=startBgmTrack;
  window.startBgmTrack=function(trackIdx){
    const index=(Number(trackIdx)||0)%BGM_TRACKS.length;
    const source=TRACK_SOURCES[index%TRACK_SOURCES.length];
    if(!bgmAudio.src.endsWith(source)){
      try{bgmAudio.pause();bgmAudio.src=source;bgmAudio.load();}catch(e){}
    }
    return baseStartBgm(index);
  };
  function dailyTrack(){return Math.abs(localDayNumber())%BGM_TRACKS.length;}
  function currentTrack(){
    if(typeof state!=='undefined' && Number.isInteger(state.currentTrack))return state.currentTrack;
    return Number.isInteger(currentBgm)?currentBgm:dailyTrack();
  }
  function differentTrack(){
    const avoid=currentTrack();
    const pool=[...Array(BGM_TRACKS.length).keys()].filter(i=>i!==avoid && i%TRACK_SOURCES.length!==avoid%TRACK_SOURCES.length);
    return pool[Math.floor(Math.random()*pool.length)] ?? dailyTrack();
  }
  function playTrack(track,reset=false){
    if(typeof state!=='undefined')state.currentTrack=track;
    if(reset){try{bgmAudio.currentTime=0;}catch(e){}}
    startBgmTrack(track);
  }
  function restoreDailyBgm(){playTrack(dailyTrack(),true);}

  /* 速度だけでなく音程も変わるようにし、10種類のBGMに表情をつける。 */
  try{bgmAudio.preservesPitch=false;bgmAudio.webkitPreservesPitch=false;}catch(e){}

  /* ブロンズ対策も、Lessonに入るたびに直前とは違う曲にする。 */
  if(typeof startLesson==='function'){
    const baseBronzeStart=startLesson;
    window.startLesson=function(n){
      const track=differentTrack();
      const lesson=LESSONS.find(x=>x.n===n);
      if(lesson)store.trackOrder[(lesson.n-1)%BGM_TRACKS.length]=track;
      const result=baseBronzeStart(n);
      try{bgmAudio.currentTime=0;}catch(e){}
      return result;
    };
  }
  if(typeof goHome==='function'){
    const baseBronzeHome=goHome;
    window.goHome=function(){const result=baseBronzeHome();restoreDailyBgm();return result;};
  }

  function phraseAtCurrentQuestion(){
    if(!G5_DATA||!G5_DATA.phrases)return null;
    let phraseIndex;
    if(g5State.stage===8)phraseIndex=g5State.challenge[g5State.idx];
    else phraseIndex=g5State.queue[g5State.idx];
    const phrase=G5_DATA.phrases[phraseIndex];
    return phrase?{phrase,index:phraseIndex}:null;
  }
  function addMistake(phrase,index,stage,chosen,lessonN=g5State.lessonN){
    if(!phrase)return;
    if(!Array.isArray(g5State.mistakeDetails))g5State.mistakeDetails=[];
    const english=phrase[0],japanese=phrase[1];
    const key=`${lessonN}|${english}|${stage}`;
    const found=g5State.mistakeDetails.find(x=>x.key===key);
    if(found){found.count++;found.chosen=chosen||found.chosen;return;}
    g5State.mistakeDetails.push({key,lessonN,index,english,japanese,emoji:phrase[3],stage,chosen,count:1});
  }

  /* 通常の4択で間違えた内容を、結果画面用に記録する。 */
  const baseFeedback=g5Feedback;
  window.g5Feedback=function(i,correct,onWrong){
    const current=phraseAtCurrentQuestion();
    const chosen=g5State.choices[i];
    if(chosen!==correct && current)addMistake(current.phrase,current.index,STAGE_NAMES[g5State.stage]||'練習',chosen);
    return baseFeedback(i,correct,onWrong);
  };

  /* 並び替えは同じ問題を再挑戦できるため、誤答した瞬間だけ記録する。 */
  if(typeof window.g5CheckOrderSafe==='function'){
    const baseOrderCheck=window.g5CheckOrderSafe;
    window.g5CheckOrderSafe=function(){
      const complete=g5State.picked.length===g5State.choices.length && g5State.picked.length>0;
      const answer=g5State.picked.map(x=>g5State.choices[x]).join(' ');
      if(complete && answer!==(g5State._orderCorrect||'')){
        const current=phraseAtCurrentQuestion();
        if(current)addMistake(current.phrase,current.index,'並び替え',answer);
        if(g5State.runTracking)g5State.runMistakes=(g5State.runMistakes||0)+1;
      }
      return baseOrderCheck();
    };
  }
  if(typeof window.g5L6AnswerTeacher==='function'){
    const baseTeacherAnswer=window.g5L6AnswerTeacher;
    window.g5L6AnswerTeacher=function(i,correct){
      if(g5State.choices[i]!==correct){
        const current=phraseAtCurrentQuestion();
        if(current)addMistake(current.phrase,current.index,'先生に質問',g5State.choices[i]);
      }
      return baseTeacherAnswer(i,correct);
    };
  }

  function previousReviewItems(lessonN){
    const previous=G5_LESSONS.find(x=>x.n===lessonN-1);
    if(!previous)return [];
    const saved=g5Store['lesson'+(lessonN-1)]?.lastMistakes||[];
    const preferred=saved.map(x=>Number(x.index)).filter(i=>Number.isInteger(i)&&previous.phrases[i]);
    const rest=g5Shuffle([...Array(previous.phrases.length).keys()].filter(i=>!preferred.includes(i)));
    return [...new Set([...preferred,...rest])].slice(0,3).map(index=>({index,phrase:previous.phrases[index]}));
  }
  function buildSessionDeck(lessonN){
    const count=G5_DATA.phrases.length,limit=Math.min(8,count);
    const saved=(g5Store['lesson'+lessonN]?.lastMistakes||[]).map(x=>Number(x.index)).filter(i=>Number.isInteger(i)&&G5_DATA.phrases[i]);
    const offset=Math.abs((g5State.entrySeed||0)*5)%count;
    const rotating=[...Array(count).keys()].map((_,i)=>(offset+i)%count).filter(i=>!saved.includes(i));
    return [...new Set([...saved,...rotating])].slice(0,limit);
  }
  function prepareStageDeck(){
    if(![1,2,3,5,6,7].includes(g5State.stage)||g5State.idx!==0||g5State._deckStage===g5State.stage)return;
    g5State.queue=g5Shuffle(g5State.sessionDeck||[...Array(G5_DATA.phrases.length).keys()]);
    g5State._deckStage=g5State.stage;
  }
  function setupWarmup(lessonN,afterStage){
    const items=previousReviewItems(lessonN);
    g5State.warmup={lessonN:lessonN-1,idx:0,items,afterStage};
    if(items.length)g5State.stage=-1;
  }
  function renderWarmup(){
    const warm=g5State.warmup;
    if(!warm||warm.idx>=warm.items.length){
      g5State.stage=warm?.afterStage ?? 1;
      g5State.idx=0;
      return renderG5();
    }
    const item=warm.items[warm.idx],p=item.phrase;
    const previous=G5_LESSONS.find(x=>x.n===warm.lessonN);
    const pool=g5Shuffle(previous.phrases.map(x=>x[0]).filter(x=>x!==p[0])).slice(0,3);
    g5State.choices=g5Shuffle([p[0],...pool]);
    g5State._warmupCorrect=p[0];
    g5Header(warm.items.length);
    document.getElementById('g5Score').textContent=`${warm.idx+1} / ${warm.items.length}`;
    document.getElementById('g5Bar').style.width=`${(warm.idx/warm.items.length)*100}%`;
    document.getElementById('g5Body').innerHTML=`<div class="g5Warmup"><div class="g5WarmupFlag">↩ 3問だけウォームアップ</div><div class="g5WarmupLesson">Lesson ${warm.lessonN} を思い出そう</div><div class="g5WarmupEmoji">${p[3]}</div><div class="g5Phrase">${p[1]}</div><div class="choiceGrid">${g5State.choices.map((c,i)=>`<button class="choice" onclick="g5AnswerWarmup(${i})">${c}</button>`).join('')}</div><div class="feedback" id="g5Fb"></div></div>`;
    decorateQuestion();
  }
  window.g5AnswerWarmup=function(i){
    const warm=g5State.warmup,item=warm.items[warm.idx],chosen=g5State.choices[i],correct=g5State._warmupCorrect;
    const buttons=[...document.querySelectorAll('#g5Body .choice')];
    buttons.forEach(b=>b.disabled=true);
    if(chosen===correct){buttons[i]?.classList.add('good');document.getElementById('g5Fb').textContent='ナイス！ 前のLessonも覚えているね';playGood();}
    else{
      buttons[i]?.classList.add('bad');buttons.find(b=>b.textContent===correct)?.classList.add('good');
      document.getElementById('g5Fb').textContent=`思い出せたね！ 正解は ${correct}`;playBad();
      addMistake(item.phrase,item.index,'前のLesson復習',chosen,warm.lessonN);
      if(g5State.runTracking)g5State.runMistakes=(g5State.runMistakes||0)+1;
    }
    warm.idx++;
    setTimeout(renderG5,850);
  };

  /* 1ステージ目は問題ごとに形式を変え、入り口の単調さをなくす。 */
  window.renderG5Meaning=function(){
    g5SetBest(1);
    if(g5State.idx>=g5State.queue.length){g5State.stage=2;g5State.idx=0;return renderG5();}
    const phraseIndex=g5State.queue[g5State.idx],p=G5_DATA.phrases[phraseIndex];
    const mode=((g5State.entrySeed||0)+g5State.idx)%3;
    let prompt,correct,field,label,hint;
    if(mode===0){prompt=`<div class="g5Phrase">${p[0]}</div><div class="g5ModeEmoji">${p[3]}</div>`;correct=p[1];field=1;label='💡 意味をキャッチ';hint='英語に合う意味はどれ？';}
    else if(mode===1){prompt=`<div class="g5ModeEmoji large">${p[3]}</div><div class="g5Phrase">${p[1]}</div>`;correct=p[0];field=0;label='🖼️ ピクチャークイズ';hint='この場面に合う英語はどれ？';}
    else{prompt=`<div class="g5SpeedBadge">3・2・1…</div><div class="g5Phrase">${p[1]}</div><div class="g5ModeEmoji">${p[3]}</div>`;correct=p[0];field=0;label='⚡ スピード翻訳';hint='パッと英語に変えてみよう！';}
    g5State.choices=g5Shuffle([correct,...g5PickOther(field,correct)]);
    g5State._mixedCorrect=correct;
    g5State._mixedPhraseIndex=phraseIndex;
    g5Header(g5State.queue.length);
    document.getElementById('g5Body').innerHTML=`<div class="sub g5ModeLabel">${label}</div><div class="g5ModeHint">${hint}</div>${prompt}<div class="choiceGrid">${g5State.choices.map((c,i)=>`<button class="choice ${field===1?'jp':''}" onclick="g5AnswerMixed(${i})">${c}</button>`).join('')}</div><div class="feedback" id="g5Fb"></div>`;
  };
  window.g5AnswerMixed=function(i){
    const correct=g5State._mixedCorrect,phraseIndex=g5State._mixedPhraseIndex;
    g5Feedback(i,correct,()=>g5State.wrong.add(phraseIndex));
  };

  const baseHeader=g5Header;
  window.g5Header=function(total=1){
    if(g5State.stage===-1){
      document.getElementById('g5StageRow').innerHTML='<div class="stageChip on g5ReviewChip">↩ 前回復習</div>';
      return;
    }
    baseHeader(total);
    const labels=['① ミックス4択','② 耳でキャッチ','③ ことばパーツ','④ リベンジ','⑤ 使ってみよう','⑥ 逆向きクイズ','⑦ パズル','⑧ ボスチャレンジ'];
    [...document.querySelectorAll('#g5StageRow .stageChip')].forEach((chip,i)=>{if(labels[i])chip.textContent=labels[i];});
  };

  function themeForRun(n){
    const index=Math.abs((g5State.entrySeed||0)+n)%THEMES.length;
    return THEMES[index];
  }
  function decorateQuestion(){
    const body=document.getElementById('g5Body'),play=document.getElementById('g5Play');
    if(!body||!play||body.querySelector('.finish'))return;
    const theme=g5State.currentTheme||themeForRun(g5State.lessonN);
    play.dataset.theme=theme.id;
    body.querySelector('.g5MissionBanner')?.remove();
    const track=BGM_TRACKS[currentTrack()]||BGM_TRACKS[0];
    body.insertAdjacentHTML('afterbegin',`<div class="g5MissionBanner"><span class="g5MissionWorld">${theme.icon} ${theme.name}</span><span class="g5MissionText">今日のミッション</span><span class="g5MissionBgm">🎵 ${track.name}</span></div>`);
  }

  let startingG5=false;
  const baseRender=renderG5;
  window.renderG5=function(){
    if(startingG5)return;
    if(g5State.stage===-1)return renderWarmup();
    prepareStageDeck();
    const result=baseRender();
    decorateQuestion();
    return result;
  };

  const baseStart=startG5Lesson;
  window.startG5Lesson=function(n=1){
    const attempts=(engagement['lesson'+n]||0)+1;
    engagement['lesson'+n]=attempts;saveEngagement();
    const track=differentTrack();
    startingG5=true;
    const result=baseStart(n);
    startingG5=false;
    g5State.entrySeed=localDayNumber()+n+attempts;
    g5State.currentTheme=themeForRun(n);
    g5State.mistakeDetails=[];
    g5State.sessionDeck=buildSessionDeck(n);
    g5State._deckStage=null;
    const afterStage=g5State.stage;
    setupWarmup(n,afterStage);
    playTrack(track,true);
    document.getElementById('g5Title').textContent=`Lesson ${n} · ${G5_DATA.title} · 🎵 ${BGM_TRACKS[track].name}`;
    renderG5();
    return result;
  };

  const baseBackHome=g5BackHome;
  window.g5BackHome=function(){const result=baseBackHome();restoreDailyBgm();return result;};

  function resultHtml(items){
    if(!items.length)return `<div class="g5PerfectResult"><div class="g5ResultIcon">🏆✨</div><h4>ノーミスクリア！</h4><p>今日のことば、全部ばっちり。すごい！</p></div>`;
    return `<div class="g5MistakeResult"><div class="g5ResultHead"><div><span>📝 今日のまちがいノート</span><strong>${items.length}問</strong></div><p>ここだけ見直せば、次はもっと強くなるよ！</p></div><div class="g5MistakeList">${items.map((x,i)=>`<div class="g5MistakeItem"><div class="g5MistakeEmoji">${x.emoji||'💡'}</div><div class="g5MistakeWords"><b>${x.english}</b><span>${x.japanese}</span><small>📍 ${x.stage}${x.count>1?` · ${x.count}回チャレンジ`:''}</small></div><button class="g5MistakeSpeak" onclick="g5SpeakMistake(${i})" aria-label="英語を聞く">🔊</button></div>`).join('')}</div></div>`;
  }
  window.g5SpeakMistake=function(i){const item=g5State.mistakeDetails?.[i];if(item)speak(item.english);};
  const baseFinish=finishG5;
  window.finishG5=function(){
    const items=Array.isArray(g5State.mistakeDetails)?g5State.mistakeDetails:[];
    const p=g5LessonStore();
    p.lastMistakes=items.filter(x=>x.lessonN===g5State.lessonN).map(x=>({index:x.index,english:x.english,japanese:x.japanese,count:x.count}));
    g5Save();
    const result=baseFinish();
    const finish=document.querySelector('#g5Body .finish'),actions=finish?.querySelector('.actionRow');
    if(actions)actions.insertAdjacentHTML('beforebegin',resultHtml(items));
    else finish?.insertAdjacentHTML('beforeend',resultHtml(items));
    return result;
  };

  function decorateHome(){
    const hero=document.querySelector('#g5Home .g5Hero');
    if(hero && !hero.querySelector('.g5DailyQuest')){
      const tr=BGM_TRACKS[dailyTrack()];
      hero.insertAdjacentHTML('beforeend',`<div class="g5DailyQuest"><span>🎲 毎回ちがうミッション</span><span>↩ 前Lessonを3問復習</span><span>🎵 今日のBGM：${tr.name}</span></div>`);
    }
    [...document.querySelectorAll('#g5LessonList .g5LessonCard')].forEach((card,i)=>card.dataset.zone=THEMES[i%THEMES.length].id);
  }
  const baseHome=renderG5Home;
  window.renderG5Home=function(){const result=baseHome();decorateHome();return result;};

  restoreDailyBgm();
  decorateHome();
})();
