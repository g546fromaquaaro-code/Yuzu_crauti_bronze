(()=>{
  const css=document.createElement('style');
  css.textContent=`
  .g5Town{margin:16px 0 22px;padding:16px;border-radius:26px;background:linear-gradient(145deg,#fffaf0,#eef8ff);border:1px solid #cfe5f8;box-shadow:0 12px 30px rgba(74,132,184,.14)}
  .g5TownTop{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:12px}.g5TownTitle{font-size:24px;font-weight:1000;color:#2f251f}.g5TownCount{padding:8px 13px;border-radius:999px;background:#fff;font-weight:1000;color:#f06f24;border:1px solid #ffd2ad}
  .g5TownVisual{background:#fff;border-radius:22px;overflow:hidden;border:1px solid #e3ebf1;box-shadow:0 8px 20px rgba(52,92,126,.08)}.g5TownVisual img{display:block;width:100%;height:auto;aspect-ratio:900/420;object-fit:cover}
  .g5TownInfo{padding:14px 16px 16px;background:linear-gradient(180deg,#ffffff,#fbfdff)}.g5TownName{font-size:21px;font-weight:1000;color:#173b61}.g5TownNext{margin-top:4px;font-weight:900;color:#52677b}.g5TownNext strong{font-size:22px;color:#f06f24}.g5TownBar{height:14px;background:#e8eef4;border-radius:999px;overflow:hidden;margin-top:10px}.g5TownBar i{display:block;height:100%;border-radius:999px;background:linear-gradient(90deg,#7ac943,#f59e24,#f25d5d)}
  .g5TownSteps{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:12px}.g5TownStep{position:relative;background:#fff;border:2px solid #e2e8ee;border-radius:18px;padding:11px;text-align:center;font-weight:900;color:#6b7884}.g5TownStep b{display:block;font-size:19px;color:#243a4e;margin-bottom:3px}.g5TownStep.done{background:#f3fff0;border-color:#94d66d;color:#4f783b}.g5TownStep.on{background:#fff3dd;border-color:#f4a340;color:#8d5a0b;box-shadow:0 6px 16px rgba(242,150,46,.16)}.g5TownStep.locked{filter:saturate(.6);opacity:.72}.g5TownStep .mark{position:absolute;right:8px;top:6px;font-size:15px}
  .g5TownCheer{text-align:center;font-weight:1000;color:#2878bd;margin-top:12px;font-size:15px}.g5TownBeyond{font-size:12px;text-align:center;color:#718398;margin-top:6px;font-weight:800}
  @media(max-width:700px){.g5Town{padding:12px}.g5TownTitle{font-size:20px}.g5TownSteps{grid-template-columns:1fr}.g5TownStep{text-align:left;padding-right:40px}.g5TownVisual img{aspect-ratio:16/9}.g5TownName{font-size:18px}}
  `;
  document.head.appendChild(css);

  function clearedCount(){
    if(typeof g5Store==='undefined') return 0;
    return Object.keys(g5Store).filter(k=>/^lesson\d+$/.test(k)&&g5Store[k]?.cleared).length;
  }
  function townInfo(n){
    if(n>=101){const level=Math.floor((n-101)/25)+2;return {img:'assets/basket-town-3.svg',name:`YUZU ARENA LEVEL ${level}`,next:126+(level-2)*25,from:101+(level-2)*25,to:126+(level-2)*25,msg:'100クリア突破！ アリーナはこの先もレベルアップ！'};}
    if(n>=71)return {img:'assets/basket-town-3.svg',name:'YUZU ARENA',next:100,from:71,to:100,msg:'大きなアリーナが見えてきた！ 100クリアで完成！'};
    if(n>=31)return {img:'assets/basket-town-2.svg',name:'YUZU HOOPS TOWN',next:70,from:31,to:70,msg:'お店と応援フラッグが登場。街がにぎやかになってきた！'};
    return {img:'assets/basket-town-1.svg',name:'バスケットコート & YUZU HOOPS',next:30,from:0,to:30,msg:'まずはコートと小さなお店から。クリアするほど街が育つよ！'};
  }
  function stepClass(n,min,max){if(n>max)return'done';if(n>=min)return'on';return'locked';}
  function rewardHtml(){
    const n=clearedCount(),t=townInfo(n),remain=Math.max(0,t.next-n),range=Math.max(1,t.to-t.from),pct=Math.max(0,Math.min(100,(n-t.from)/range*100));
    return `<div class="g5Town" id="g5TownReward">
      <div class="g5TownTop"><div class="g5TownTitle">🏀 レッスンをクリアして、バスケタウンを育てよう！</div><div class="g5TownCount">${n} Lesson CLEAR</div></div>
      <div class="g5TownVisual"><img src="${t.img}" alt="${t.name}"><div class="g5TownInfo"><div class="g5TownName">${t.name}</div><div class="g5TownNext">次の成長まで あと <strong>${remain}</strong> クリア！</div><div class="g5TownBar"><i style="width:${pct}%"></i></div></div></div>
      <div class="g5TownSteps">
        <div class="g5TownStep ${stepClass(n,0,30)}"><span class="mark">${n>30?'✅':n>=0?'🏀':'🔒'}</span><b>STEP 1</b>1〜30 CLEAR<br>コート＆ショップ</div>
        <div class="g5TownStep ${stepClass(n,31,70)}"><span class="mark">${n>70?'✅':n>=31?'🏪':'🔒'}</span><b>STEP 2</b>31〜70 CLEAR<br>YUZU HOOPS TOWN</div>
        <div class="g5TownStep ${stepClass(n,71,100)}"><span class="mark">${n>100?'✅':n>=71?'🏟️':'🔒'}</span><b>STEP 3</b>71〜100 CLEAR<br>YUZU ARENA</div>
      </div>
      <div class="g5TownCheer">${t.msg}</div><div class="g5TownBeyond">✨ 100クリア後も ARENA LEVEL 2・3… と成長が続きます</div>
    </div>`;
  }
  function decorate(){const list=document.getElementById('g5LessonList');if(!list)return;document.getElementById('g5TownReward')?.remove();list.insertAdjacentHTML('beforebegin',rewardHtml());}
  if(typeof renderG5Home==='function'){const base=renderG5Home;window.renderG5Home=function(){base();decorate();};}
  setTimeout(decorate,0);
})();
