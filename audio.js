const BGM_TRACKS=[
{name:'Sky Pop',rate:.88},{name:'Soda Step',rate:.92},{name:'Bubble Walk',rate:.96},{name:'Mint Parade',rate:1.00},{name:'Candy Rail',rate:1.04},{name:'Cloud Picnic',rate:1.08},{name:'Jelly Hop',rate:.90},{name:'Aqua Park',rate:.98},{name:'Star Cookie',rate:1.06},{name:'Blue Marshmallow',rate:1.12}
];

let bgmAudio=null,bgmUrl=null,seUrl=null,mediaUnlocked=false,pendingBgm=0,bgmDuck=1;

function b64ToObjectUrl(text){
  const raw=atob(String(text||'').trim());
  const bytes=new Uint8Array(raw.length);
  for(let i=0;i<raw.length;i++)bytes[i]=raw.charCodeAt(i);
  return URL.createObjectURL(new Blob([bytes],{type:'audio/mpeg'}));
}

const mediaReady=Promise.all([
  fetch('audio/bgm-base64.txt',{cache:'force-cache'}).then(r=>{if(!r.ok)throw new Error('BGM load '+r.status);return r.text()}),
  fetch('audio/se-base64.txt',{cache:'force-cache'}).then(r=>{if(!r.ok)throw new Error('SE load '+r.status);return r.text()})
]).then(([b,s])=>{
  bgmUrl=b64ToObjectUrl(b);
  seUrl=b64ToObjectUrl(s);
  bgmAudio=new Audio(bgmUrl);
  bgmAudio.loop=true;
  bgmAudio.preload='auto';
  bgmAudio.volume=.12;
  return true;
}).catch(e=>{console.warn('audio assets',e);return false});

function playMediaSe(rate=1,vol=.35){
  if(typeof store!=='undefined'&&store.settings&&!store.settings.se)return;
  mediaReady.then(ok=>{
    if(!ok||!seUrl)return;
    const a=new Audio(seUrl);
    a.preload='auto';
    a.volume=vol;
    a.playbackRate=rate;
    a.play().catch(()=>{});
  });
}
function playTap(){playMediaSe(1,.28)}
function playGood(){playMediaSe(1.22,.38)}
function playBad(){playMediaSe(.72,.34)}
function playClear(){playMediaSe(1.42,.42)}

function getVoice(){
  if(!('speechSynthesis' in window))return null;
  const voices=window.speechSynthesis.getVoices();
  return voices.find(v=>/^en-US/i.test(v.lang))||voices.find(v=>/^en/i.test(v.lang))||null;
}
function duckBgm(on){
  bgmDuck=on?.2:1;
  if(bgmAudio)bgmAudio.volume=.12*bgmDuck;
}
function speak(text){
  if(!('speechSynthesis' in window))return false;
  const synth=window.speechSynthesis,value=String(text||'').trim();
  if(!value)return false;
  duckBgm(true);
  try{synth.cancel();synth.resume()}catch(e){}
  const u=new SpeechSynthesisUtterance(value);
  const voice=getVoice();if(voice)u.voice=voice;
  u.lang='en-US';u.rate=.82;u.pitch=1;u.volume=1;
  u.onend=()=>duckBgm(false);u.onerror=()=>duckBgm(false);
  try{synth.speak(u);return true}catch(e){duckBgm(false);return false}
}
window.speak=speak;

function stopBgm(){
  if(!bgmAudio)return;
  try{bgmAudio.pause();bgmAudio.currentTime=0}catch(e){}
}
function startBgmTrack(trackIdx){
  pendingBgm=Number(trackIdx)||0;
  const tr=BGM_TRACKS[pendingBgm%BGM_TRACKS.length];
  const trackName=document.getElementById('trackName');
  if(trackName)trackName.textContent='BGM: '+tr.name;
  if(typeof store!=='undefined'&&store.settings&&!store.settings.bgm){stopBgm();return}
  mediaReady.then(ok=>{
    if(!ok||!bgmAudio)return;
    bgmAudio.playbackRate=tr.rate;
    bgmAudio.volume=.12*bgmDuck;
    if(!mediaUnlocked)return;
    if(bgmAudio.paused){
      try{bgmAudio.currentTime=0}catch(e){}
      bgmAudio.play().catch(()=>{});
    }
  });
}
function toggleBgm(){
  store.settings.bgm=!store.settings.bgm;saveStore();updateToggles();
  if(store.settings.bgm){mediaUnlocked=true;startBgmTrack(state.currentTrack||0)}else stopBgm();
  playTap();
}
function toggleSe(){
  store.settings.se=!store.settings.se;saveStore();updateToggles();
  mediaUnlocked=true;
  if(store.settings.se)playTap();
}
function updateToggles(){
  const bgm=document.getElementById('bgmToggle'),se=document.getElementById('seToggle');
  if(bgm)bgm.textContent=store.settings.bgm?'🎵 BGM ON':'🎵 BGM OFF';
  if(se)se.textContent=store.settings.se?'🔔 SE ON':'🔔 SE OFF';
}

function unlockMedia(){
  mediaUnlocked=true;
  mediaReady.then(ok=>{
    if(!ok)return;
    if(seUrl){
      const a=new Audio(seUrl);a.volume=.001;
      a.play().then(()=>{a.pause()}).catch(()=>{});
    }
    if(typeof store!=='undefined'&&store.settings&&store.settings.bgm)startBgmTrack(typeof state!=='undefined'?(state.currentTrack||pendingBgm):pendingBgm);
  });
  if('speechSynthesis' in window){try{speechSynthesis.resume()}catch(e){}}
}
window.addEventListener('pointerdown',unlockMedia,{passive:true,once:true});
window.addEventListener('touchend',unlockMedia,{passive:true,once:true});
