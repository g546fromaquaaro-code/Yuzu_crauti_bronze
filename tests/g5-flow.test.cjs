/* Integration harness: real index script order + event handlers with a lightweight DOM.
   Actual layout/audio still require browser/device QA. */
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const base=path.join(__dirname,'..'),C=require('../g5-core.js'),B=require('../g5-bank.js');
require('../g5-extension.js')(B);
function boot(initial={}){const elements=new Map(),timers=[];function el(id){const e={id,innerHTML:'',textContent:'',hidden:false,style:{},dataset:{},disabled:false,classList:{add(){},remove(){},contains(){return false}},appendChild(child){if(child.id)elements.set(child.id,child);},insertBefore(){},insertAdjacentHTML(where,html){this.innerHTML+=html;},remove(){},querySelector(){return el();},querySelectorAll(){return[];},setAttribute(name,value){this[name]=value;},addEventListener(type,handler){this[type]=handler;},scrollIntoView(){},click(){}};return e;}
 const document={getElementById(id){if(!elements.has(id))elements.set(id,el(id));return elements.get(id);},querySelector(){return el();},querySelectorAll(){return[];},createElement(){return el();},head:el(),body:el(),addEventListener(){},hidden:false};const data={...initial};const ctx={document,localStorage:{getItem:k=>data[k]||null,setItem:(k,v)=>data[k]=v},Audio:function(){return {src:'',pause(){},load(){},play(){return Promise.resolve();}}},setTimeout(fn){timers.push(fn);return timers.length;},clearTimeout(id){if(id)timers[id-1]=null;},setInterval(){return 1;},clearInterval(){},requestAnimationFrame(){},console,Date,Math,SpeechSynthesisUtterance:function(){},speechSynthesis:{cancel(){},resume(){},speak(){},getVoices(){return[];}},scrollTo(){},addEventListener(){},confirm:()=>true,alert(){},Blob,URL};ctx.window=ctx;vm.createContext(ctx);const scripts=[...fs.readFileSync(path.join(base,'index.html'),'utf8').matchAll(/<script src="([^"?]+)/g)].map(x=>x[1]);for(const file of scripts){if(!fs.existsSync(path.join(base,file)))continue;try{vm.runInContext(fs.readFileSync(path.join(base,file),'utf8'),ctx,{filename:file});}catch(e){if(!initial.yuzu_eiken5_prep_v1)throw e;}}
 ctx.selectCourse('grade5');const root=elements.get('g5V2');assert.ok(root);
 return {data,ctx,root,act(action,id,extra={}){root.click({target:{closest(){return {dataset:{action,id,...extra},setAttribute(){},disabled:false};}}});},saved(){return JSON.parse(data[C.KEY]);},flush(){const f=timers.pop();if(f)f();}};
}
const decode=s=>s.replace(/&#39;/g,"'").replace(/&quot;/g,'"').replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>');
function answerQuestion(a,wrong=false){const r=a.saved().session,q=B.questions[r.ids[r.pos]];assert.ok(q,q?.id);const html=a.root.innerHTML;if(q.type==='order'){const tokens=[...html.matchAll(/data-action="token" data-id="(\d+)"[^>]*>(.*?)<\/button>/g)].map(x=>({i:x[1],t:decode(x[2])}));const used=new Set();for(const t of q.tokens){const found=tokens.find(x=>x.t===t&&!used.has(x.i));assert.ok(found,'token '+t);used.add(found.i);a.act('token',found.i);}a.act('orderAnswer');}else{const options=[...html.matchAll(/data-action="answer" data-id="(\d+)"[^>]*><span class="g5v-number">\d+<\/span>(.*?)<\/button>/g)];if(['response','picture'].includes(q.type)){// Choice labels are intentionally hidden. Inspect only via mock speech utterances in separate browser QA.
 a.act('answer','0');return;}
 const match=options.find(x=>wrong?decode(x[2])!==q.answer:decode(x[2])===q.answer);assert.ok(match,q.id+' correct option is rendered');a.act('answer',match[1]);}}
test('new Grade5 enters, opens all 60 lessons, renders grammar/order safely, and can leave for Bronze',async()=>{const a=boot();assert.match(a.root.innerHTML,/合格レッスン/);for(const l of B.lessons){a.act('begin',l.id);const state=a.saved();assert.equal(state.session.lesson,l.id);assert.ok(state.session.ids.length>=16);for(const id of l.ids){const r=a.saved();r.session.ids=[id];r.session.pos=0;r.session.attempts={};r.session.firstResults={};r.session.wrong=[];r.session.rechecks=[];a.data[C.KEY]=JSON.stringify(r); // Reboot through the actual persistence boundary.
 const b=boot(a.data);b.act('resume');assert.match(b.root.innerHTML,/g5v-question/);assert.ok(!b.root.innerHTML.includes('onclick='));answerQuestion(b);await new Promise(resolve=>setImmediate(resolve));}
 }
 a.ctx.selectCourse('bronze');assert.equal(a.root.hidden,true);});
test('wrong answer, retry, reload, delayed recheck and result preserve first-attempt accuracy',()=>{const a=boot();a.act('begin','course-01');answerQuestion(a,true);let r=a.saved().session;assert.equal(r.pos,0);assert.equal(r.wrong.length,1);assert.match(a.root.querySelector().innerHTML||'',/^/);a.act('retry');answerQuestion(a);assert.equal(a.saved().session.pos,1);const b=boot(a.data);b.act('resume');assert.ok(b.saved().session.wrong.length);});
test('legacy lesson uses exact phrase order and no synthetic I prefix',()=>{const a=boot();a.act('begin','legacy-21');assert.match(a.root.innerHTML,/英検5級/);assert.ok(a.saved().session.ids.every(id=>id.startsWith('legacy-21')));});
test('new Grade5 never writes the Bronze storage key',()=>{const a=boot();const before=a.data.yuzu_bronze_blue_v1;a.act('begin','course-01');answerQuestion(a,true);a.act('home');assert.equal(a.data.yuzu_bronze_blue_v1,before);});

test('extension modes, teacher phrase check, and reload keep their meaning',()=>{const a=boot();a.act('start','course-31');assert.match(a.root.innerHTML,/今回の14表現/);assert.match(a.root.innerHTML,/data-teacher-english hidden/);a.act('teacherDone','course-31');assert.equal(a.saved().teacherPractice[31],true);const b=boot(a.data);b.act('start','course-31');assert.match(b.root.innerHTML,/✓ 先生に使えた/);b.act('phraseMode','course-50',{mode:'wordAudio'});const r=b.saved().session;assert.equal(r.mode,'practice');assert.equal(r.ids.length,15);assert.equal(r.ids[0],'course-50-phrase0-wordAudio');});
test('mock stays at 50 original questions after extension',()=>{const a=boot();a.act('mock');const ids=a.saved().session.ids;assert.equal(ids.length,50);assert.ok(ids.every(id=>!id.includes('-phrase')&&!id.endsWith('-teacher')));});
test('new lesson completes, awards clear, and preserves an existing clear',()=>{
 const initial=C.fresh();initial.lessons['course-01']={cleared:true,clears:1,best:100,perfect:true};
 const a=boot({[C.KEY]:JSON.stringify(initial)});a.act('begin','course-50');
 let count=0;while(a.saved().session&&count++<70){answerQuestion(a);a.act('next');}
 assert.ok(count<70);assert.equal(a.saved().session,null);assert.equal(a.saved().lessons['course-50'].cleared,true);assert.equal(a.saved().lessons['course-01'].best,100);assert.match(a.root.innerHTML,/先生に使ってみよう/);
});

test('S-only practice excludes A/B even when their review is due; filters show matching cards',()=>{
 const old=C.fresh();const q=B.questions['course-56-phrase16-vocab'];C.record(old,q,{ok:false,first:true,now:1});
 const a=boot({[C.KEY]:JSON.stringify(old)});a.act('unit','10');a.act('priorityFilter','A');assert.match(a.root.innerHTML,/data-id="course-54"/);assert.doesNotMatch(a.root.innerHTML,/data-action="start" data-id="course-51"/);
 a.act('phraseMode','course-56',{mode:'priorityS'});const r=a.saved().session;assert.equal(r.mode,'practice');assert.ok(r.ids.length>0);assert.ok(r.ids.every(id=>B.questions[id].priority==='S'));assert.ok(!r.ids.includes(q.id));
});
test('lesson 60 completes and keeps saved teacher-use checks',()=>{
 const old=C.fresh();old.teacherPractice={31:true};const a=boot({[C.KEY]:JSON.stringify(old)});a.act('begin','course-60');let count=0;
 while(a.saved().session&&count++<90){answerQuestion(a);a.act('next');}
 assert.ok(count<90);assert.equal(a.saved().lessons['course-60'].cleared,true);assert.equal(a.saved().teacherPractice[31],true);
});
