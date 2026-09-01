(()=>{
  const css=document.createElement('style');
  css.textContent=`
  .g5Town{margin:14px 0 20px;padding:18px;border-radius:24px;background:linear-gradient(145deg,#eef8ff,#fff8e9);border:1px solid #cfe5f8;box-shadow:0 10px 28px rgba(74,132,184,.12)}
  .g5TownTop{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}.g5TownTitle{font-size:22px;font-weight:1000;color:#173b61}.g5TownCount{padding:8px 13px;border-radius:999px;background:#fff;font-weight:1000;color:#ff7518;border:1px solid #ffd6ad}
  .g5TownScene{margin-top:13px;display:grid;grid-template-columns:110px 1fr;gap:14px;align-items:center;background:#fff;border-radius:20px;padding:14px}.g5TownEmoji{font-size:72px;text-align:center}.g5TownName{font-size:20px;font-weight:1000;color:#173b61}.g5TownNext{margin-top:5px;font-weight:900;color:#52677b}.g5TownBar{height:13px;background:#e8eef4;border-radius:999px;overflow:hidden;margin-top:10px}.g5TownBar i{display:block;height:100%;border-radius:999px;background:linear-gradient(90deg,#65b9ff,#ffb34d)}
  .g5TownSteps{display:grid;grid-template-columns:repeat(3,1fr);gap:9px;margin-top:12px}.g5TownStep{background:rgba(255,255,255,.8);border:1px solid #dbe8f3;border-radius:16px;padding:10px;text-align:center;font-weight:900;color:#53697d}.g5TownStep.on{background:#fff3d5;border-color:#ffc85c;color:#8c5b00}.g5TownStep b{display:block;font-size:22px;color:#173b61;margin-bottom:2px}
  .g5TownCheer{text-align:center;font-weight:1000;color:#2878bd;margin-top:12px}.g5TownBeyond{font-size:12px;text-align:center;color:#718398;margin-top:7px;font-weight:800}
  @media(max-width:700px){.g5TownScene{grid-template-columns:76px 1fr}.g5TownEmoji{font-size:54px}.g5TownSteps{grid-template-columns:1fr}.g5TownStep{display:flex;align-items:center;justify-content:space-between}.g5TownStep b{display:inline;font-size:17px}}
  `;
  document.head.appendChild(css);

  function clearedCount(){
    if(typeof g5Store==='undefined') return 0;
    return Object.keys(g5Store).filter(k=>/^lesson\d+$/.test(k)&&g5Store[k]?.cleared).length;
  }
  function townInfo(n){
    if(n>=101) return {emoji:'🏆🏟️',name:'YUZU ARENA LEVEL '+(Math.floor((n-101)/25)+2),next:n+25,from:101,to:n+25,msg:'100クリア突破！ バスケタウンはまだまだ成長するよ！'};
    if(n>=71) return {emoji:'🏟️🏀',name:'YUZU ARENA 建設中',next:100,from:71,to:100,msg:'アリーナ完成まであと少し！'};
    if(n>=31) return {emoji:'🏪🏀',name:'YUZU HOOPS TOWN',next:70,from:31,to:70,msg:'街がどんどんにぎやかになってきた！'};
    return {emoji:'⛹️‍♀️🏀',name:'バスケットコート',next:30,from:0,to:30,msg:'クリアするたび、バスケタウンが育つよ！'};
  }
  function rewardHtml(){
    const n=clearedCount(),t=townInfo(n),remain=Math.max(0,t.next-n),range=Math.max(1,t.to-t.from),pct=Math.max(0,Math.min(100,(n-t.from)/range*100));
    const s1=n<=30?' on':'',s2=n>=31&&n<=70?' on':'',s3=n>=71?' on':'';
    return `<div class="g5Town" id="g5TownReward"><div class="g5TownTop"><div class="g5TownTitle">🏀 ゆづのバスケタウン</div><div class="g5TownCount">${n} Lesson CLEAR</div></div><div class="g5TownScene"><div class="g5TownEmoji">${t.emoji}</div><div><div class="g5TownName">${t.name}</div><div class="g5TownNext">次の成長まで あと <strong>${remain}</strong> クリア！</div><div class="g5TownBar"><i style="width:${pct}%"></i></div></div></div><div class="g5TownSteps"><div class="g5TownStep${s1}"><b>STEP 1</b>1〜30 🏀 コート</div><div class="g5TownStep${s2}"><b>STEP 2</b>31〜70 🏪 街</div><div class="g5TownStep${s3}"><b>STEP 3</b>71〜100 🏟️ アリーナ</div></div><div class="g5TownCheer">${t.msg}</div><div class="g5TownBeyond">✨ 100クリア後も ARENA LEVEL UP が続きます</div></div>`;
  }
  function decorate(){
    const list=document.getElementById('g5LessonList'); if(!list)return;
    document.getElementById('g5TownReward')?.remove();
    list.insertAdjacentHTML('beforebegin',rewardHtml());
  }
  if(typeof renderG5Home==='function'){
    const base=renderG5Home;
    window.renderG5Home=function(){base();decorate();};
  }
  setTimeout(decorate,0);
})();
