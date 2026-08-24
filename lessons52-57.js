LESSONS.push(
{
  n:52,
  title:'Home, Sorry & Good Night',
  emoji:'🏠',
  words:[
    ['apple','リンゴ','🍎'],['banana','バナナ','🍌'],['grapes','ブドウ','🍇'],['orange','オレンジ','🍊'],['lemon','レモン','🍋'],['strawberry','イチゴ','🍓'],
    ['beef','ぎゅうにく','🥩'],['pork','ぶたにく','🥓'],['chicken','とりにく','🍗'],['ham','ハム','🍖'],['sausage','ソーセージ','🌭'],['shrimp','エビ','🍤']
  ],
  sentences:[
    ["I'm home, Mom!",'ただいま、お母さん！'],
    ['Welcome back!','おかえり！'],
    ["I'm so sorry.",'本当にごめんなさい。'],
    ['No worries.','大丈夫だよ。'],
    ['She is cleaning the window.','彼女は窓を掃除しています。'],
    ['Good night, Dad.','おやすみ、お父さん。'],
    ['Good night, Miho.','おやすみ、ミホ。']
  ],
  grammar:[
    ["I'm ___, Mom!",['home','back','night','sorry'],'home','ただいま、お母さん！'],
    ['Welcome ___.',['back','home','night','sorry'],'back','おかえり！'],
    ["I'm so ___.",['sorry','home','good','clean'],'sorry','本当にごめんなさい。'],
    ['She is ___ the window.',['cleaning','clean','cleans','cleaned'],'cleaning','彼女は窓を掃除しています。'],
    ['Good ___, Dad.',['night','home','back','sorry'],'night','おやすみ、お父さん。']
  ],
  qa:[
    {q:"🏠 I'm home, Mom!",choices:['Welcome back!','Good night!','No worries.','Thanks a lot.'],a:'Welcome back!'},
    {q:"😣 I'm so sorry.",choices:['No worries.','Welcome back!','Good morning!','Nice to meet you.'],a:'No worries.'},
    {q:'🌙 Good night, Dad.',choices:['Good night, Miho.','Welcome back!','Hi!','Thanks a lot.'],a:'Good night, Miho.'}
  ]
},
{
  n:53,
  title:'Rain, Pets & Asking About Things',
  emoji:'☔',
  words:[
    ['cat','ネコ','🐱'],['dog','イヌ','🐶'],['rabbit','ウサギ','🐰'],['goldfish','きんぎょ','🐠'],['hamster','ハムスター','🐹'],['ant','アリ','🐜'],
    ['bee','ハチ','🐝'],['butterfly','チョウ','🦋'],['dragonfly','トンボ','🪰'],['bear','クマ','🐻'],['deer','シカ','🦌'],['squirrel','リス','🐿️']
  ],
  sentences:[
    ["It's raining outside.",'外は雨が降っています。'],
    ['This is not my umbrella.','これは私の傘ではありません。'],
    ['Is that your ruler?','あれはあなたの定規ですか？'],
    ['Yes, it is.','はい、そうです。']
  ],
  grammar:[
    ["It ___ raining outside.",['is','are','am','be'],'is','外は雨が降っています。'],
    ['This is ___ my umbrella.',['not','no','is','are'],'not','これは私の傘ではありません。'],
    ['___ that your ruler?',['Is','Are','Do','Does'],'Is','あれはあなたの定規ですか？'],
    ['Yes, it ___.',['is','are','does','do'],'is','はい、そうです。']
  ],
  qa:[
    {q:'📏 Is that your ruler?',choices:['Yes, it is.','Yes, they are.','No, I do.','Welcome back!'],a:'Yes, it is.'},
    {q:'☔ What is the weather like?',choices:["It's raining.","It's a ruler.",'Yes, it is.','Good night.'],a:"It's raining."}
  ]
},
{
  n:54,
  title:'Likes, Eating & Wants',
  emoji:'🍓',
  words:[
    ['zebra','シマウマ','🦓'],['elephant','ゾウ','🐘'],['giraffe','キリン','🦒'],['tiger','トラ','🐯'],['lion','ライオン','🦁'],['cow','ウシ','🐄'],
    ['goat','ヤギ','🐐'],['pig','ブタ','🐷'],['horse','ウマ','🐴'],['sheep','ヒツジ','🐑'],['snake','ヘビ','🐍']
  ],
  sentences:[
    ['I like chocolate and ice cream.','私はチョコレートとアイスクリームが好きです。'],
    ["I'm eating grapes.",'私はブドウを食べています。'],
    ['She likes strawberries.','彼女はイチゴが好きです。'],
    ['I want strawberries, too.','私もイチゴが欲しいです。']
  ],
  grammar:[
    ['I ___ chocolate and ice cream.',['like','likes','am','want'],'like','私はチョコレートとアイスクリームが好きです。'],
    ["I'm ___ grapes.",['eating','eat','eats','like'],'eating','私はブドウを食べています。'],
    ['She ___ strawberries.',['likes','like','want','eating'],'likes','彼女はイチゴが好きです。'],
    ['I ___ strawberries, too.',['want','wants','likes','am'],'want','私もイチゴが欲しいです。']
  ],
  qa:[
    {q:'🍫🍨 What do you like?',choices:['I like chocolate and ice cream.',"I'm eating grapes.",'I want a ruler.','Good night.'],a:'I like chocolate and ice cream.'},
    {q:'🍇 What are you eating?',choices:["I'm eating grapes.",'She likes strawberries.','I want strawberries, too.','There are grapes.'],a:"I'm eating grapes."},
    {q:'🍓 What does she like?',choices:['She likes strawberries.','I like chocolate.','She is eating a ruler.','No worries.'],a:'She likes strawberries.'}
  ]
},
{
  n:55,
  title:'Have, Playing & Subjects',
  emoji:'✏️',
  words:[
    ['bedroom','しんしつ','🛏️'],['living room','リビングルーム','🛋️'],['kitchen','キッチン','🍳'],['bathroom','おふろ・トイレ','🛁'],['table','テーブル','🪑'],['chair','いす','🪑'],
    ['television','テレビ','📺'],['sofa','ソファー','🛋️'],['cushion','クッション','🛋️'],['bed','ベッド','🛏️']
  ],
  sentences:[
    ['I have a colored pencil.','私は色鉛筆を持っています。'],
    ['We have scissors.','私たちはハサミを持っています。'],
    ['He is playing baseball.','彼は野球をしています。'],
    ['I like Japanese.','私は国語が好きです。']
  ],
  grammar:[
    ['I ___ a colored pencil.',['have','has','am','is'],'have','私は色鉛筆を持っています。'],
    ['We ___ scissors.',['have','has','are','is'],'have','私たちはハサミを持っています。'],
    ['He is ___ baseball.',['playing','play','plays','played'],'playing','彼は野球をしています。'],
    ['I ___ Japanese.',['like','likes','am','play'],'like','私は国語が好きです。']
  ],
  qa:[
    {q:'⚾ What is he doing?',choices:['He is playing baseball.','He plays a ruler.','I like Japanese.','We have scissors.'],a:'He is playing baseball.'},
    {q:'📚 What subject do you like?',choices:['I like Japanese.','I have a pencil.','He is playing baseball.','There is a room.'],a:'I like Japanese.'}
  ]
},
{
  n:56,
  title:'There is / are & Community',
  emoji:'🏢',
  words:[
    ['chopsticks','はし','🥢'],['fork','フォーク','🍴'],['spoon','スプーン','🥄'],['glass','コップ','🥛'],['plate','さら','🍽️'],['toothbrush','はぶらし','🪥'],
    ['family','家族','👨‍👩‍👧‍👦'],['father','お父さん','👨'],['mother','お母さん','👩'],['brother','お兄さん','👦'],['sister','妹','👧'],['grandfather','おじいさん','👴']
  ],
  sentences:[
    ['There is a police station.','警察署があります。'],
    ['There are many cars.','車がたくさんあります。'],
    ['She is looking at the moon.','彼女は月を見ています。'],
    ['Miho comes to the community center.','ミホはコミュニティセンターに来ます。']
  ],
  grammar:[
    ['There ___ a police station.',['is','are','am','be'],'is','警察署があります。'],
    ['There ___ many cars.',['are','is','am','be'],'are','車がたくさんあります。'],
    ['She is ___ at the moon.',['looking','look','looks','looked'],'looking','彼女は月を見ています。'],
    ['Miho ___ to the community center.',['comes','come','coming','came'],'comes','ミホはコミュニティセンターに来ます。']
  ],
  qa:[
    {q:'🌙 What is she looking at?',choices:['She is looking at the moon.','She is looking at a car.','There is a police station.','Miho comes home.'],a:'She is looking at the moon.'},
    {q:'🏢 Where does Miho come?',choices:['Miho comes to the community center.','Miho comes to the moon.','There are many cars.','She has a plate.'],a:'Miho comes to the community center.'}
  ]
},
{
  n:57,
  title:'Time, Those & Want to',
  emoji:'🕙',
  words:[
    ['grandmother','おばあさん','👵'],['aunt','おばさん','👩'],['uncle','おじさん','👨'],['cousin','いとこ','🧒'],['woman','女性','👩'],['man','男性','👨'],
    ['shirt','シャツ','👔'],['T-shirt','Tシャツ','👕'],['polo shirt','ポロシャツ','👕']
  ],
  sentences:[
    ["Is it eight o'clock?",'8時ですか？'],
    ["No, it's ten o'clock.",'いいえ、10時です。'],
    ['Are those your cats?','あれらはあなたのネコですか？'],
    ["No, they're not.",'いいえ、違います。'],
    ["I'm sorry, Grandpa.",'ごめんなさい、おじいちゃん。'],
    ["That's OK.",'大丈夫だよ。'],
    ['Do you want to go to the zoo?','動物園に行きたいですか？'],
    ['Yes, I do.','はい、行きたいです。']
  ],
  grammar:[
    ["Is it eight ___?",["o'clock",'cats','zoo','time'],"o'clock",'8時ですか？'],
    ['Are ___ your cats?',['those','that','this','it'],'those','あれらはあなたのネコですか？'],
    ["No, they're ___.",['not','no','yes','do'],'not','いいえ、違います。'],
    ['Do you ___ to go to the zoo?',['want','wants','like','have'],'want','動物園に行きたいですか？']
  ],
  qa:[
    {q:"🕙 Is it eight o'clock?",choices:["No, it's ten o'clock.","Yes, they're cats.",'No worries.','Welcome back!'],a:"No, it's ten o'clock."},
    {q:'🐱🐱 Are those your cats?',choices:["No, they're not.",'Yes, I do.','No, it is not ten.','Good night.'],a:"No, they're not."},
    {q:"😢 I'm sorry, Grandpa.",choices:["That's OK.",'Yes, I do.','No, they are not.','Good morning!'],a:"That's OK."},
    {q:'🦁 Do you want to go to the zoo?',choices:['Yes, I do.',"No, they're not.",'Yes, it is.','Thanks a lot.'],a:'Yes, I do.'}
  ]
}
);

BADGE_LABELS[51]='🏠 Home Talk';
BADGE_LABELS[52]='☔ Rainy Day';
BADGE_LABELS[53]='🍓 Likes & Wants';
BADGE_LABELS[54]='✏️ Activity Star';
BADGE_LABELS[55]='🏢 Community Explorer';
BADGE_LABELS[56]='🕙 Conversation Time';
