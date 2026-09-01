/* 英検5級 準備 Lesson 21〜22：be動詞（I / you） */
(function(){
const lessons=[
{
 n:21,title:'be動詞の文（主語が I）',icon:'🙋',summary:'I am / I am not / I am a / I am from を使って、自分のことを表す。',
 lectureTitle:'I のあとは am',
 lectureHtml:`<b class='g5Verb'>I am</b> Kyosuke Sugano. = 私は菅野恭介です。<br><b class='g5Verb'>I am not</b> Maho Sugano. = 私は菅野真帆ではありません。<br><b class='g5Verb'>I am a</b> soccer player. = 私はサッカー選手です。<br><b class='g5Verb'>I am from</b> Chiba. = 私は千葉出身です。`,
 lectureNote:'主語が <b>I</b> のとき、be動詞は <b>am</b>。否定文は <b>am not</b>。職業などは <b>I am a ～</b>、出身地は <b>I am from ～</b> の形で覚えよう。',
 phrases:[
 ['I am Kyosuke Sugano.','私は菅野恭介です','am','🙋'],
 ['I am not Maho Sugano.','私は菅野真帆ではありません','not','🙅'],
 ['I am a student.','私は学生です','a','🎒'],
 ['I am a soccer player.','私はサッカー選手です','a','⚽'],
 ['I am from Japan.','私は日本出身です','from','🇯🇵'],
 ['I am from Chiba.','私は千葉出身です','from','📍'],
 ['I am not a teacher.','私は先生ではありません','not','👩‍🏫'],
 ['I am not from Tokyo.','私は東京出身ではありません','not','🗼'],
 ['I am a junior high school student.','私は中学生です','a','🏫'],
 ['I am happy.','私はうれしいです','am','😊'],
 ['I am not busy.','私は忙しくありません','not','🙂'],
 ['I am from Osaka.','私は大阪出身です','from','🏯'],
 ['I am a basketball player.','私はバスケットボール選手です','a','🏀'],
 ['I am not a soccer player.','私はサッカー選手ではありません','not','⚽']
 ]
},
{
 n:22,title:'be動詞の文（主語が you）',icon:'👉',summary:'You are / You are not / Are you ～? を使って、相手について言ったり質問したりする。',
 lectureTitle:'you のあとは are',
 lectureHtml:`<b class='g5Verb'>You are</b> Maho Sugano. = あなたは菅野真帆です。<br><b class='g5Verb'>You are not</b> a junior high school student. = あなたは中学生ではありません。<br><b class='g5Verb'>Are you</b> from Tokyo? = あなたは東京出身ですか。<br><b>Yes, I am. / No, I am not.</b>`,
 lectureNote:'主語が <b>you</b> のときは <b>are</b>。疑問文は <b>Are you ～?</b> と are を前に出す。答えるときは <b>Yes, I am. / No, I am not.</b>。',
 phrases:[
 ['You are Maho Sugano.','あなたは菅野真帆です','are','👉'],
 ['You are a high school student.','あなたは高校生です','are','🏫'],
 ['You are not Keiichi Sugano.','あなたは菅野恵一ではありません','not','🙅'],
 ['You are not from Tokyo.','あなたは東京出身ではありません','not','🗼'],
 ['Are you a teacher?','あなたは先生ですか','Are','👩‍🏫'],
 ['Are you from America?','あなたはアメリカ出身ですか','Are','🇺🇸'],
 ['Are you a tennis player?','あなたはテニス選手ですか','you','🎾'],
 ['Are you Kyosuke Sugano?','あなたは菅野恭介ですか','Are','❓'],
 ['Are you a soccer fan?','あなたはサッカーのファンですか','Are','⚽'],
 ['Are you from Japan?','あなたは日本出身ですか','Are','🇯🇵'],
 ['Yes, I am.','はい、そうです','am','⭕'],
 ['No, I am not.','いいえ、違います','not','❌'],
 ['You are my teacher.','あなたは私の先生です','are','👨‍🏫'],
 ['You are not a student.','あなたは学生ではありません','not','🎒']
 ]
}
];
for(const l of lessons){
 if(!G5_LESSONS.some(x=>x.n===l.n))G5_LESSONS.push(l);
 const sk='lesson'+l.n;
 if(!g5Store[sk])g5Store[sk]={best:0,cleared:false,lectureSeen:false};
}
G5_LESSONS.sort((a,b)=>a.n-b.n);g5Save();
const tag=document.querySelector('.courseCard.grade5 .courseTag');if(tag)tag.textContent='Lesson 1〜22';
try{renderG5Home();}catch(e){}
})();
