const test=require('node:test'),assert=require('node:assert/strict');
const B=require('../g5-extension.js')(require('../g5-bank.js'));
test('31–50 preserve 280 phrases and valid answer sets in all four modes',()=>{
 assert.equal(B.lessons.length,50);assert.equal(new Set(B.lessons.map(l=>l.id)).size,50);
 for(const l of B.lessons.slice(30)){
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
 assert.equal(new Set(Object.values(B.teacherPhrases).map(t=>t.en)).size,50);
 for(const l of B.lessons){assert.ok(l.teacher.en);assert.equal(l.ids.filter(x=>x.endsWith('-teacher')).length,1);}
 require('../g5-extension.js')(B);assert.equal(B.lessons.length,50);
});
