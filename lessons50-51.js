LESSONS.push(
{
  n:50,
  title:'Greetings & Daily Conversation',
  emoji:'👋',
  words:[
    ['rice','ごはん','🍚'],['bread','パン','🍞'],['noodles','めん','🍜'],['hamburger','ハンバーガー','🍔'],['sandwich','サンドイッチ','🥪'],['spaghetti','スパゲッティ','🍝'],
    ['chocolate','チョコレート','🍫'],['potato chips','ポテトチップス','🍟'],['ice cream','アイスクリーム','🍨'],['jelly','ゼリー','🍮'],['cake','ケーキ','🎂'],['doughnut','ドーナツ','🍩']
  ],
  sentences:[
    ['Good morning!','おはよう！'],
    ['Good morning, Miho!','おはよう、ミホ！'],
    ['Bye Mom, bye Dad!','お母さん、お父さん、行ってきます！'],
    ['Have a good day!','よい一日を！'],
    ['Nice to meet you.','はじめまして。'],
    ['Nice to meet you, too.','こちらこそ、はじめまして。'],
    ['They are going home together.','彼らは一緒に家へ帰っています。']
  ],
  grammar:[
    ['Good ___!',['morning','home','meet','day'],'morning','おはよう！'],
    ['Have a good ___.',['day','morning','home','meet'],'day','よい一日を！'],
    ['Nice to ___ you.',['meet','morning','go','have'],'meet','はじめまして。'],
    ['They ___ going home together.',['are','is','am','be'],'are','彼らは一緒に家へ帰っています。']
  ],
  qa:[
    {q:'👋 Good morning!',choices:['Good morning!','Good night!','Thank you.','See you yesterday.'],a:'Good morning!'},
    {q:'🤝 Nice to meet you.',choices:['Nice to meet you, too.','Have a good day!','Good night!','I am rice.'],a:'Nice to meet you, too.'},
    {q:'🎒 Bye Mom, bye Dad!',choices:['Have a good day!','Nice to meet you.','Good morning, Miho!','This is bread.'],a:'Have a good day!'}
  ]
},
{
  n:51,
  title:'Afternoon & Helpful Replies',
  emoji:'🥕',
  words:[
    ['carrot','ニンジン','🥕'],['cucumber','キュウリ','🥒'],['potato','ジャガイモ','🥔'],['pumpkin','カボチャ','🎃'],['onion','タマネギ','🧅'],['cabbage','キャベツ','🥬'],
    ['tomato','トマト','🍅'],['eggplant','ナス','🍆'],['broccoli','ブロッコリー','🥦'],['spinach','ホウレンソウ','🥬'],['green pepper','ピーマン','🫑'],['lettuce','レタス','🥬']
  ],
  sentences:[
    ['Your lunch is here.','お昼ごはん、ここにあるよ。'],
    ['Thanks a lot.','どうもありがとう。'],
    ['Good afternoon, John!','こんにちは、ジョン！'],
    ['Hi!','やあ！'],
    ['Go to the next page.','次のページに進んで。'],
    ['Sure!','いいよ！'],
    ['Hello, Miho!','こんにちは、ミホ！'],
    ['Good afternoon! Please come in.','こんにちは！どうぞ入って。']
  ],
  grammar:[
    ['Your lunch ___ here.',['is','are','am','be'],'is','お昼ごはん、ここにあるよ。'],
    ['Thanks a ___.',['lot','page','lunch','hello'],'lot','どうもありがとう。'],
    ['Good ___, John!',['afternoon','morning','night','page'],'afternoon','こんにちは、ジョン！'],
    ['Please ___ in.',['come','comes','coming','came'],'come','どうぞ入って。']
  ],
  qa:[
    {q:'🍱 Your lunch is here.',choices:['Thanks a lot.','Good night.','No, it isn’t.','Nice to meet you.'],a:'Thanks a lot.'},
    {q:'👋 Good afternoon, John!',choices:['Hi!','Good night!','No, thank you.','There are two.'],a:'Hi!'},
    {q:'📖 Go to the next page.',choices:['Sure!','Thanks a lot.','Good morning!','This is a carrot.'],a:'Sure!'},
    {q:'🏠 Hello, Miho!',choices:['Good afternoon! Please come in.','No, there aren’t.','I have a potato.','Bye Mom!'],a:'Good afternoon! Please come in.'}
  ]
}
);

BADGE_LABELS[49]='👋 Greeting Star';
BADGE_LABELS[50]='🥕 Conversation Helper';
