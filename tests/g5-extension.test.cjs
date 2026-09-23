const test=require('node:test'),assert=require('node:assert/strict');
const B=require('../g5-extension.js')(require('../g5-bank.js'));
test('31–50 preserve 280 phrases and valid answer sets in all four modes',()=>{
 assert.equal(B.lessons.length,60);assert.equal(new Set(B.lessons.map(l=>l.id)).size,60);
 for(const l of B.lessons.slice(30,50)){
  assert.equal(l.phrases.length,14);assert.equal(l.ids.length,29);
  for(const [mode,ids] of Object.entries(l.modes)){
   assert.equal(ids.length,14);
   ids.forEach((id,i)=>{const q=B.questions[id],p=l.phrases[i];assert.equal(q.examEligible,false);
    if(mode==='order'){assert.equal(q.tokens.join(' '),q.answer);assert.equal(q.answer,p.en.replace(/[.!?]$/,''));}
    else{assert.equal(new Set(q.options).size,4);assert.equal(q.options.filter(x=>x===q.answer).length,1);}
    if(mode==='cloze'){assert.ok(q.prompt.includes('_____'),id);assert.ok(p.en.includes(p.key),id);}
    if(mode==='wordAudio')assert.deepEqual(q.audio,[p.en]);
   });
  }
 }
});
test('one unique teacher phrase per lesson and idempotent extension',()=>{
 assert.equal(new Set(Object.values(B.teacherPhrases).map(t=>t.en)).size,60);
 for(const l of B.lessons){assert.ok(l.teacher.en);assert.equal(l.ids.filter(x=>x.endsWith('-teacher')).length,1);}
 require('../g5-extension.js')(B);assert.equal(B.lessons.length,60);
});

test('51–60 cover the supplied themes with priorities and valid distractors',()=>{
 const lessons=B.lessons.slice(50);assert.equal(lessons.length,10);
 for(const l of lessons){assert.ok(['S','A','B'].includes(l.priority));assert.equal(l.ids.length,l.phrases.length*2+1);assert.ok(l.teacher);assert.equal(new Set(l.phrases.map(p=>p.en)).size,l.phrases.length);
  for(const p of l.phrases)assert.ok(['S','A','B'].includes(p.priority));
  for(const [mode,ids]of Object.entries(l.modes)){assert.equal(ids.length,l.phrases.length);ids.forEach((id,i)=>{const q=B.questions[id];assert.equal(q.priority,l.phrases[i].priority);assert.equal(q.examEligible,false);if(mode==='order'){assert.equal(q.tokens.join(' '),q.answer);}else{assert.equal(q.options.length,4);assert.equal(new Set(q.options).size,4);assert.equal(q.options.filter(x=>x===q.answer).length,1);}if(mode==='cloze')assert.ok(q.prompt.includes('_____'),id);});}
 }
 assert.equal(B.lessons[53].priority,'A');assert.equal(B.lessons[54].priority,'A');
 assert.equal(B.lessons[55].phrases.find(p=>p.en==='ride a unicycle').priority,'B');
});
