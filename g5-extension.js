/* Priority ratings are editorial study-order guidance, not official item classifications.
 * General level reference: https://www.eiken.or.jp/eiken/exam/grade_5/solutions.html
 * Source phrases from the supplied lesson sheets. Extra course material is kept out of exam pools. */
(function(root,factory){
 if(typeof module==='object'&&module.exports)module.exports=factory;
 else factory(root.YuzuG5Bank);
})(typeof window==='object'?window:this,function(B){
'use strict';
if(!B||B.extensionVersion)return B;
B.extensionVersion=2;
const source=[
  {
    "n": 31,
    "title": "形容詞① 大きさ・気持ち",
    "phrases": [
      [
        "big",
        "a big box",
        "大きな箱",
        "S"
      ],
      [
        "cool",
        "cool weather",
        "涼しい天気",
        "S"
      ],
      [
        "great",
        "a great man",
        "すばらしい男性",
        "A"
      ],
      [
        "new",
        "a new car",
        "新しい車",
        "S"
      ],
      [
        "small",
        "a small house",
        "小さい家",
        "S"
      ],
      [
        "long",
        "a long dress",
        "長いドレス",
        "S"
      ],
      [
        "happy",
        "a happy marriage",
        "幸せな結婚",
        "B"
      ],
      [
        "kind",
        "a kind offer",
        "親切な申し出",
        "A"
      ],
      [
        "bad",
        "a bad dream",
        "悪い夢",
        "S"
      ],
      [
        "easy",
        "an easy exam",
        "簡単な試験",
        "A"
      ],
      [
        "angry",
        "make me angry",
        "私を怒らせる",
        "A"
      ],
      [
        "famous",
        "a famous building",
        "有名な建物",
        "A"
      ],
      [
        "strong",
        "a strong man",
        "強い男性",
        "S"
      ],
      [
        "young",
        "a young woman",
        "若い女性",
        "S"
      ]
    ],
    "priority": "S"
  },
  {
    "n": 32,
    "title": "形容詞② 身近なもの",
    "phrases": [
      [
        "good",
        "a good movie",
        "よい映画",
        "S"
      ],
      [
        "busy",
        "a busy day",
        "忙しい一日",
        "S"
      ],
      [
        "sad",
        "a sad voice",
        "悲しい声",
        "S"
      ],
      [
        "old",
        "an old man",
        "年を取った男性",
        "S"
      ],
      [
        "hot",
        "a hot drink",
        "熱い飲み物",
        "S"
      ],
      [
        "beautiful",
        "a beautiful woman",
        "美しい女性",
        "S"
      ],
      [
        "popular",
        "a popular book",
        "人気のある本",
        "S"
      ],
      [
        "next",
        "next week",
        "次の週",
        "S"
      ],
      [
        "hungry",
        "hungry people",
        "空腹の人々",
        "S"
      ],
      [
        "clean",
        "a clean dish",
        "きれいなお皿",
        "S"
      ],
      [
        "different",
        "a different book",
        "違う本",
        "S"
      ],
      [
        "large",
        "a large pizza",
        "大きなピザ",
        "S"
      ],
      [
        "important",
        "an important decision",
        "大切な決断",
        "B"
      ],
      [
        "natural",
        "a natural disaster",
        "自然災害",
        "B"
      ]
    ],
    "priority": "S"
  },
  {
    "n": 33,
    "title": "形容詞③ 様子・状態",
    "phrases": [
      [
        "difficult",
        "a difficult problem",
        "難しい問題",
        "A"
      ],
      [
        "cold",
        "cold water",
        "冷たい水",
        "S"
      ],
      [
        "fine",
        "a fine day",
        "すばらしい一日",
        "S"
      ],
      [
        "glad",
        "be glad to help him",
        "彼の役に立ててうれしく思う",
        "A"
      ],
      [
        "tall",
        "a tall person",
        "背の高い人",
        "S"
      ],
      [
        "special",
        "a special restaurant",
        "特別なレストラン",
        "A"
      ],
      [
        "wonderful",
        "a wonderful party",
        "すばらしいパーティー",
        "A"
      ],
      [
        "simple",
        "simple English",
        "簡単な英語",
        "A"
      ],
      [
        "useful",
        "a useful book",
        "役に立つ本",
        "S"
      ],
      [
        "late",
        "be late for my flight",
        "自分のフライトに遅れる",
        "A"
      ],
      [
        "many",
        "many cars",
        "たくさんの車",
        "S"
      ],
      [
        "warm",
        "a warm coat",
        "暖かいコート",
        "S"
      ],
      [
        "real",
        "a real diamond",
        "本物のダイヤモンド",
        "B"
      ],
      [
        "ill",
        "feel ill",
        "気分が悪い",
        "A"
      ]
    ],
    "priority": "A"
  },
  {
    "n": 34,
    "title": "形容詞④ 色・速さ",
    "phrases": [
      [
        "nice",
        "a nice trip",
        "すてきな旅",
        "S"
      ],
      [
        "red",
        "a red car",
        "赤い車",
        "S"
      ],
      [
        "sweet",
        "sweet chocolate",
        "甘いチョコレート",
        "S"
      ],
      [
        "interesting",
        "an interesting book",
        "おもしろい本",
        "A"
      ],
      [
        "ready",
        "be ready to eat",
        "食べる準備ができている",
        "S"
      ],
      [
        "hard",
        "a hard chair",
        "かたい椅子",
        "A"
      ],
      [
        "possible",
        "as soon as possible",
        "できる限り早く",
        "A"
      ],
      [
        "blue",
        "a blue uniform",
        "青い制服",
        "S"
      ],
      [
        "all",
        "all animals",
        "すべての動物",
        "S"
      ],
      [
        "fast",
        "a fast swimmer",
        "速い水泳選手",
        "S"
      ],
      [
        "every",
        "every night",
        "毎晩",
        "S"
      ],
      [
        "high",
        "a high building",
        "高い建物",
        "S"
      ],
      [
        "past",
        "past experience",
        "過去の経験",
        "B"
      ],
      [
        "best",
        "the best way",
        "最もよい方法",
        "S"
      ]
    ],
    "priority": "S"
  },
  {
    "n": 35,
    "title": "形容詞⑤ 色・暮らし",
    "phrases": [
      [
        "soft",
        "a soft bed",
        "やわらかいベッド",
        "S"
      ],
      [
        "white",
        "a white T-shirt",
        "白いTシャツ",
        "S"
      ],
      [
        "yellow",
        "a yellow flower",
        "黄色い花",
        "S"
      ],
      [
        "black",
        "black ink",
        "黒いインク",
        "S"
      ],
      [
        "purple",
        "a purple dress",
        "紫色のドレス",
        "S"
      ],
      [
        "green",
        "a green frog",
        "緑色のカエル",
        "S"
      ],
      [
        "secret",
        "a secret talk",
        "秘密の話",
        "B"
      ],
      [
        "another",
        "another piece of news",
        "もう一つのニュース",
        "A"
      ],
      [
        "wide",
        "a wide river",
        "幅が広い川",
        "A"
      ],
      [
        "serious",
        "a serious illness",
        "深刻な病気",
        "B"
      ],
      [
        "brown",
        "a brown suit",
        "茶色のスーツ",
        "A"
      ],
      [
        "daily",
        "my daily routine",
        "私の日課",
        "A"
      ],
      [
        "foreign",
        "a foreign language",
        "外国語",
        "A"
      ],
      [
        "cheap",
        "a cheap hotel",
        "安いホテル",
        "A"
      ]
    ],
    "priority": "A"
  },
  {
    "n": 36,
    "title": "形容詞⑥ 判断・様子",
    "phrases": [
      [
        "short",
        "a short skirt",
        "短いスカート",
        "S"
      ],
      [
        "heavy",
        "a heavy suitcase",
        "重いスーツケース",
        "A"
      ],
      [
        "wise",
        "a wise choice",
        "かしこい選択",
        "B"
      ],
      [
        "quiet",
        "a quiet baby",
        "静かな赤ちゃん",
        "S"
      ],
      [
        "right",
        "the right decision",
        "正しい決断",
        "A"
      ],
      [
        "main",
        "the main reason",
        "主な理由",
        "A"
      ],
      [
        "national",
        "a national holiday",
        "国民の祝日",
        "B"
      ],
      [
        "wrong",
        "the wrong answer",
        "間違った答え",
        "S"
      ],
      [
        "full",
        "a full car park",
        "満車の駐車場",
        "A"
      ],
      [
        "clear",
        "a clear blue sky",
        "晴れた青空",
        "A"
      ],
      [
        "official",
        "an official announcement",
        "公式発表",
        "B"
      ],
      [
        "local",
        "a local newspaper",
        "地方新聞",
        "A"
      ],
      [
        "dirty",
        "dirty water",
        "汚れた水",
        "S"
      ],
      [
        "strange",
        "a strange picture",
        "奇妙な絵",
        "A"
      ]
    ],
    "priority": "A"
  },
  {
    "n": 37,
    "title": "副詞① いつ・どこで",
    "phrases": [
      [
        "now",
        "eat something now",
        "今何かを食べる",
        "S"
      ],
      [
        "always",
        "always play tennis",
        "いつもテニスをする",
        "S"
      ],
      [
        "later",
        "go shopping later",
        "あとで買い物に行く",
        "S"
      ],
      [
        "today",
        "finish my homework today",
        "今日自分の宿題を終える",
        "S"
      ],
      [
        "inside",
        "come inside",
        "中に入る",
        "S"
      ],
      [
        "again",
        "say that again",
        "もう一度それを言う",
        "S"
      ],
      [
        "yesterday",
        "saw her yesterday",
        "昨日彼女を見た",
        "A"
      ],
      [
        "here",
        "come here",
        "ここに来る",
        "S"
      ],
      [
        "too",
        "too late",
        "遅すぎる",
        "S"
      ],
      [
        "ago",
        "an hour ago",
        "一時間前に",
        "A"
      ],
      [
        "early",
        "get up early",
        "早く起きる",
        "S"
      ],
      [
        "together",
        "do yoga together",
        "一緒にヨガをする",
        "A"
      ],
      [
        "often",
        "often go swimming",
        "よく泳ぎに行く",
        "S"
      ],
      [
        "tomorrow",
        "call tomorrow",
        "明日電話する",
        "S"
      ]
    ],
    "priority": "S"
  },
  {
    "n": 38,
    "title": "副詞② 程度・動き",
    "phrases": [
      [
        "also",
        "They also like it.",
        "彼らもそれが好きです",
        "S"
      ],
      [
        "very",
        "very cold",
        "とても寒い",
        "S"
      ],
      [
        "just",
        "just at the moment",
        "ちょうどその瞬間に",
        "A"
      ],
      [
        "once",
        "once a month",
        "一か月に一度",
        "A"
      ],
      [
        "still",
        "still live with my parents",
        "今も両親と住んでいる",
        "S"
      ],
      [
        "ever",
        "Have you ever been to Tokyo?",
        "今まで東京に行ったことがありますか",
        "B"
      ],
      [
        "not",
        "do not like her",
        "彼女が好きではない",
        "S"
      ],
      [
        "then",
        "I was eating then.",
        "私はそのとき食事中でした",
        "A"
      ],
      [
        "already",
        "already told him",
        "すでに彼に話した",
        "A"
      ],
      [
        "far",
        "live far from here",
        "ここから遠くに住んでいる",
        "S"
      ],
      [
        "away",
        "walk away",
        "立ち去る",
        "A"
      ],
      [
        "instead",
        "instead of by car",
        "車で行く代わりに",
        "B"
      ],
      [
        "forward",
        "run forward",
        "前方へ走る",
        "A"
      ],
      [
        "alone",
        "work alone",
        "一人で働く",
        "A"
      ]
    ],
    "priority": "A"
  },
  {
    "n": 39,
    "title": "形容詞⑦ 天気・生活",
    "phrases": [
      [
        "snowy",
        "a snowy day",
        "雪の降る日",
        "S"
      ],
      [
        "any",
        "don't have any cash",
        "現金を少しも持っていない",
        "A"
      ],
      [
        "cloudy",
        "a cloudy sky",
        "曇った空",
        "S"
      ],
      [
        "well",
        "get well soon",
        "早く元気になる",
        "S"
      ],
      [
        "last",
        "last night",
        "昨夜",
        "S"
      ],
      [
        "usual",
        "my usual time",
        "私のいつもの時間",
        "A"
      ],
      [
        "tired",
        "a tired voice",
        "疲れた声",
        "A"
      ],
      [
        "lucky",
        "a lucky man",
        "幸運な男性",
        "A"
      ],
      [
        "quick",
        "a quick response",
        "素早い返答",
        "A"
      ],
      [
        "favorite",
        "my favorite song",
        "私のお気に入りの歌",
        "S"
      ],
      [
        "normal",
        "a normal life",
        "ふつうの生活",
        "A"
      ],
      [
        "personal",
        "my personal opinion",
        "私個人の意見",
        "B"
      ],
      [
        "delicious",
        "a delicious cake",
        "おいしいケーキ",
        "S"
      ],
      [
        "rich",
        "a rich man",
        "お金持ちの男性",
        "A"
      ]
    ],
    "priority": "A"
  },
  {
    "n": 40,
    "title": "形容詞⑧ 人・ものの特徴",
    "phrases": [
      [
        "fresh",
        "a fresh tomato",
        "新鮮なトマト",
        "A"
      ],
      [
        "active",
        "a very active day",
        "とても活動的な一日",
        "A"
      ],
      [
        "perfect",
        "a perfect gift",
        "完璧な贈り物",
        "A"
      ],
      [
        "dark",
        "dark clouds",
        "暗い雲",
        "A"
      ],
      [
        "necessary",
        "the necessary skills",
        "必要な技術",
        "B"
      ],
      [
        "deep",
        "a deep river",
        "深い川",
        "A"
      ],
      [
        "careful",
        "a careful driver",
        "注意深い運転手",
        "A"
      ],
      [
        "friendly",
        "a friendly face",
        "人なつこい顔",
        "A"
      ],
      [
        "much",
        "use much fuel",
        "燃料をたくさん使う",
        "B"
      ],
      [
        "expensive",
        "expensive clothes",
        "高価な洋服",
        "A"
      ],
      [
        "public",
        "a public library",
        "公共の図書館",
        "A"
      ],
      [
        "thirsty",
        "get thirsty",
        "のどが渇く",
        "S"
      ],
      [
        "healthy",
        "a healthy baby",
        "健康な赤ちゃん",
        "A"
      ],
      [
        "loud",
        "a loud voice",
        "大きい声",
        "A"
      ]
    ],
    "priority": "A"
  },
  {
    "n": 41,
    "title": "熟語① 毎日の行動",
    "phrases": [
      [
        "sit down",
        "sit down on a chair",
        "椅子に座る",
        "S"
      ],
      [
        "be from",
        "be from Japan",
        "日本出身である",
        "S"
      ],
      [
        "look at",
        "look at your watch",
        "あなたの腕時計を見る",
        "S"
      ],
      [
        "talk to",
        "talk to my mother",
        "私の母に話しかける",
        "S"
      ],
      [
        "wait for",
        "wait for you",
        "あなたを待つ",
        "S"
      ],
      [
        "arrive at",
        "arrive at the station",
        "駅に到着する",
        "S"
      ],
      [
        "wake up",
        "wake up at 6",
        "6時に目を覚ます",
        "S"
      ],
      [
        "go home",
        "go home now",
        "今帰宅する",
        "S"
      ],
      [
        "run away",
        "run away from the police",
        "警察から逃げる",
        "A"
      ],
      [
        "be kind to",
        "be kind to everyone",
        "みんなに親切にする",
        "S"
      ],
      [
        "listen to",
        "listen to the music",
        "その音楽を聴く",
        "S"
      ],
      [
        "get up",
        "get up early",
        "早く起きる",
        "S"
      ],
      [
        "take a picture",
        "take a picture of my dog",
        "私の犬の写真を撮る",
        "S"
      ],
      [
        "go to school",
        "go to school every day",
        "毎日学校に行く",
        "S"
      ]
    ],
    "priority": "S"
  },
  {
    "n": 42,
    "title": "熟語② 会話・移動",
    "phrases": [
      [
        "go to bed",
        "go to bed at 10",
        "10時に寝る",
        "S"
      ],
      [
        "speak to",
        "speak to you",
        "あなたに話しかける",
        "S"
      ],
      [
        "talk about",
        "talk about my dream",
        "私の夢について話す",
        "S"
      ],
      [
        "look for",
        "look for a book",
        "本を探す",
        "S"
      ],
      [
        "take a walk",
        "take a walk with him",
        "彼と散歩する",
        "S"
      ],
      [
        "grow up",
        "grow up strong",
        "丈夫に育つ",
        "A"
      ],
      [
        "laugh at",
        "laugh at his jokes",
        "彼の冗談を笑う",
        "A"
      ],
      [
        "go back",
        "go back to the school",
        "その学校に戻る",
        "S"
      ],
      [
        "want to",
        "want to buy a book",
        "本を買いたい",
        "S"
      ],
      [
        "leave for",
        "leave for Japan",
        "日本に向けて出発する",
        "A"
      ],
      [
        "write down",
        "write down his phone number",
        "彼の電話番号を書き留める",
        "S"
      ],
      [
        "run after",
        "run after you",
        "あなたを追いかけて走る",
        "A"
      ],
      [
        "be happy to",
        "be happy to help him",
        "喜んで彼を手伝う",
        "A"
      ],
      [
        "get on",
        "get on a bus",
        "バスに乗る",
        "S"
      ]
    ],
    "priority": "S"
  },
  {
    "n": 43,
    "title": "熟語③ 服・家電・予定",
    "phrases": [
      [
        "worry about",
        "worry about him",
        "彼のことを心配する",
        "A"
      ],
      [
        "try on",
        "try on a dress",
        "ドレスを試着する",
        "A"
      ],
      [
        "turn on",
        "turn on the TV",
        "テレビをつける",
        "S"
      ],
      [
        "turn off",
        "turn off the radio",
        "ラジオを消す",
        "S"
      ],
      [
        "look forward to",
        "look forward to seeing him",
        "彼に会うのを楽しみにする",
        "A"
      ],
      [
        "get off",
        "get off my bicycle",
        "自分の自転車から降りる",
        "S"
      ],
      [
        "go abroad",
        "go abroad on Sunday",
        "日曜日に海外へ行く",
        "A"
      ],
      [
        "pick up",
        "pick up a stone",
        "石を拾い上げる",
        "A"
      ],
      [
        "feel sick",
        "feel sick in the morning",
        "朝に気分が悪くなる",
        "S"
      ],
      [
        "put on",
        "put on a hat",
        "帽子をかぶる",
        "S"
      ],
      [
        "take off",
        "take off a hat",
        "帽子を脱ぐ",
        "S"
      ],
      [
        "think about",
        "think about my future",
        "自分の将来について考える",
        "A"
      ],
      [
        "stay up late",
        "stay up late tonight",
        "今夜は夜更かしをする",
        "A"
      ],
      [
        "get married",
        "get married next year",
        "来年結婚する",
        "B"
      ]
    ],
    "priority": "A"
  },
  {
    "n": 44,
    "title": "熟語④ 挑戦・得意なこと",
    "phrases": [
      [
        "try to",
        "try to run",
        "走ろうとする",
        "A"
      ],
      [
        "stop",
        "stop talking",
        "話すのをやめる",
        "A"
      ],
      [
        "take care of",
        "take care of his dog",
        "彼の犬の世話をする",
        "A"
      ],
      [
        "get angry with",
        "get angry with my sister",
        "私の姉妹に腹を立てる",
        "A"
      ],
      [
        "give up",
        "give up easily",
        "簡単にあきらめる",
        "A"
      ],
      [
        "be surprised at",
        "be surprised at the news",
        "そのニュースに驚く",
        "B"
      ],
      [
        "make a mistake",
        "make a mistake again",
        "また間違える",
        "A"
      ],
      [
        "look around",
        "look around the town",
        "町を見回す",
        "S"
      ],
      [
        "take a rest",
        "take a rest for a while",
        "しばらく休む",
        "A"
      ],
      [
        "be good at",
        "be good at playing tennis",
        "テニスが得意である",
        "A"
      ],
      [
        "make a speech",
        "make a speech in English",
        "英語でスピーチをする",
        "B"
      ],
      [
        "walk around",
        "walk around a garden",
        "庭を歩き回る",
        "A"
      ],
      [
        "sound like",
        "sound like French",
        "フランス語のように聞こえる",
        "A"
      ],
      [
        "go up",
        "go up Mt. Fuji",
        "富士山を登る",
        "A"
      ]
    ],
    "priority": "A"
  },
  {
    "n": 45,
    "title": "熟語⑤ 気持ち・助け合い",
    "phrases": [
      [
        "look into",
        "look into the accident",
        "その事故を調べる",
        "B"
      ],
      [
        "communicate with",
        "communicate with her",
        "彼女と意思を通わせる",
        "B"
      ],
      [
        "get ready for",
        "get ready for dinner",
        "夕食の準備をする",
        "A"
      ],
      [
        "suffer from",
        "suffer from a disease",
        "病気に苦しむ",
        "B"
      ],
      [
        "call for",
        "call for help",
        "助けを求める",
        "A"
      ],
      [
        "believe in",
        "believe in ghosts",
        "幽霊の存在を信じる",
        "B"
      ],
      [
        "begin with",
        "begin with a speech",
        "スピーチで始める",
        "A"
      ],
      [
        "agree with",
        "agree with you",
        "あなたに賛成する",
        "A"
      ],
      [
        "look after",
        "look after my brother",
        "私の兄弟の世話をする",
        "A"
      ],
      [
        "come true",
        "My dream will come true.",
        "私の夢は実現するでしょう",
        "B"
      ],
      [
        "learn about",
        "learn about animals",
        "動物について学ぶ",
        "S"
      ],
      [
        "go out",
        "go out with him",
        "彼と一緒に外出する",
        "S"
      ],
      [
        "care about",
        "care about my health",
        "自分の健康に気を配る",
        "A"
      ],
      [
        "clean up",
        "clean up stairs",
        "階段をきれいにする",
        "A"
      ]
    ],
    "priority": "B"
  },
  {
    "n": 46,
    "title": "熟語⑥ 調べる・考える",
    "phrases": [
      [
        "look up",
        "look up the meaning",
        "意味を調べる",
        "S"
      ],
      [
        "go for a walk",
        "Let's go for a walk.",
        "散歩に行きましょう",
        "S"
      ],
      [
        "write to",
        "write to my friend",
        "私の友達に手紙を書く",
        "S"
      ],
      [
        "take a bath",
        "take a bath every day",
        "毎日お風呂に入る",
        "S"
      ],
      [
        "come back",
        "come back home",
        "家に戻る",
        "S"
      ],
      [
        "be interested in",
        "be interested in history",
        "歴史に興味がある",
        "A"
      ],
      [
        "be able to",
        "be able to speak English",
        "英語を話すことができる",
        "A"
      ],
      [
        "look like",
        "look like a nice man",
        "いい人に見える",
        "A"
      ],
      [
        "think of",
        "think of a good idea",
        "よい考えを思いつく",
        "A"
      ],
      [
        "decide to",
        "decide to buy a book",
        "本を買うと決める",
        "A"
      ],
      [
        "go on",
        "go on increasing",
        "増え続ける",
        "B"
      ],
      [
        "write back",
        "write back to you",
        "あなたに手紙の返事を書く",
        "A"
      ],
      [
        "find out",
        "find out what happened",
        "何が起きたかを突き止める",
        "A"
      ],
      [
        "leave home",
        "leave home at 7",
        "7時に家を出る",
        "S"
      ]
    ],
    "priority": "A"
  },
  {
    "n": 47,
    "title": "熟語⑦ 人との交流",
    "phrases": [
      [
        "shake hands with",
        "shake hands with him",
        "彼と握手する",
        "A"
      ],
      [
        "smile at",
        "smile at you",
        "あなたにほほえむ",
        "S"
      ],
      [
        "stay at",
        "stay at the hotel",
        "そのホテルに泊まる",
        "A"
      ],
      [
        "take part in",
        "take part in a meeting",
        "会議に参加する",
        "B"
      ],
      [
        "throw away",
        "throw away toys",
        "おもちゃを捨てる",
        "A"
      ],
      [
        "be similar to",
        "be similar to my brother",
        "私の兄弟に似ている",
        "B"
      ],
      [
        "thanks to",
        "thanks to you",
        "あなたのおかげで",
        "B"
      ],
      [
        "be glad to",
        "be glad to meet you",
        "あなたに会えてうれしく思う",
        "A"
      ],
      [
        "call on",
        "call on my friend",
        "私の友達を訪ねる",
        "B"
      ],
      [
        "come out",
        "come out of a room",
        "部屋から出てくる",
        "A"
      ],
      [
        "take out",
        "take out my phone",
        "自分の電話を取り出す",
        "A"
      ],
      [
        "do my best",
        "do my best on the test",
        "テストで最善を尽くす",
        "A"
      ],
      [
        "go away",
        "go away immediately",
        "すぐに立ち去る",
        "A"
      ],
      [
        "take away",
        "take away the dishes",
        "食器を片付ける",
        "A"
      ]
    ],
    "priority": "A"
  },
  {
    "n": 48,
    "title": "熟語⑧ 留学・健康・準備",
    "phrases": [
      [
        "study abroad",
        "study abroad for a year",
        "一年間留学する",
        "A"
      ],
      [
        "graduate from",
        "graduate from high school",
        "高校を卒業する",
        "B"
      ],
      [
        "leave a message",
        "leave a message for Alex",
        "アレックスに伝言を残す",
        "A"
      ],
      [
        "see a doctor",
        "You should see a doctor.",
        "医者に診てもらったほうがよい",
        "A"
      ],
      [
        "be famous for",
        "be famous for pandas",
        "パンダで有名である",
        "A"
      ],
      [
        "be used to",
        "be used to cooking",
        "料理をすることに慣れている",
        "B"
      ],
      [
        "take medicine",
        "take medicine regularly",
        "定期的に薬を飲む",
        "A"
      ],
      [
        "pass away",
        "pass away at the age of 80",
        "80歳で亡くなる",
        "B"
      ],
      [
        "be going to",
        "be going to read a book",
        "本を読むつもりである",
        "A"
      ],
      [
        "be afraid of",
        "be afraid of spiders",
        "クモを怖がる",
        "A"
      ],
      [
        "have no idea",
        "have no idea what he said",
        "彼が何を言ったのか全くわからない",
        "A"
      ],
      [
        "depend on",
        "depend on you",
        "あなたに頼る",
        "A"
      ],
      [
        "prepare for",
        "prepare for a game",
        "試合の準備をする",
        "A"
      ],
      [
        "stay home",
        "stay home alone",
        "一人で家にいる",
        "S"
      ]
    ],
    "priority": "B"
  },
  {
    "n": 49,
    "title": "熟語⑨ 連絡・物の扱い",
    "phrases": [
      [
        "point to",
        "point to a screen",
        "画面を指さす",
        "A"
      ],
      [
        "be proud of",
        "be proud of you",
        "あなたを誇りに思う",
        "B"
      ],
      [
        "get to",
        "get to New York",
        "ニューヨークに着く",
        "A"
      ],
      [
        "go into",
        "go into a garden",
        "庭に入る",
        "S"
      ],
      [
        "put",
        "put a book in a box",
        "本を箱に入れる",
        "S"
      ],
      [
        "hear from",
        "hear from my uncle",
        "私のおじから便りをもらう",
        "A"
      ],
      [
        "help",
        "help her with her homework",
        "彼女の宿題を手伝う",
        "S"
      ],
      [
        "back",
        "call you back",
        "あなたに折り返し電話する",
        "A"
      ],
      [
        "get away",
        "get away from my brother",
        "私の兄弟から逃げる",
        "B"
      ],
      [
        "hear of",
        "hear of his illness",
        "彼の病気について聞く",
        "A"
      ],
      [
        "get in",
        "get in a car",
        "車に乗る",
        "S"
      ],
      [
        "be made of",
        "be made of wood",
        "木でできている",
        "B"
      ],
      [
        "fight for",
        "fight for justice",
        "正義のために戦う",
        "B"
      ],
      [
        "spend",
        "spend the bonus on books",
        "ボーナスを本に使う",
        "B"
      ]
    ],
    "priority": "A"
  },
  {
    "n": 50,
    "title": "熟語⑩ 先生との会話にも",
    "phrases": [
      [
        "came up",
        "A cat came up to me.",
        "猫が私に近づいてきた",
        "A"
      ],
      [
        "be sorry for",
        "be sorry for being late",
        "遅れたことを申し訳なく思う",
        "A"
      ],
      [
        "stay with",
        "stay with my cousin",
        "いとこの家に泊まる",
        "S"
      ],
      [
        "get better",
        "get better soon",
        "すぐによくなる",
        "S"
      ],
      [
        "be out",
        "be out now",
        "今外出している",
        "S"
      ],
      [
        "work for",
        "work for a bus company",
        "バス会社で働いている",
        "A"
      ],
      [
        "seem to",
        "seem to be happy",
        "幸せそうだ",
        "B"
      ],
      [
        "work on",
        "work on a report",
        "レポートに取り組む",
        "B"
      ],
      [
        "hand in",
        "hand in my homework",
        "自分の宿題を提出する",
        "A"
      ],
      [
        "begin to",
        "begin to speak",
        "話し始める",
        "S"
      ],
      [
        "bring back",
        "bring back my suitcase",
        "自分のスーツケースを持ち帰る",
        "A"
      ],
      [
        "take a message",
        "Shall I take a message?",
        "伝言を承りましょうか",
        "A"
      ],
      [
        "be ready to",
        "be ready to start",
        "始める準備ができている",
        "S"
      ],
      [
        "have a good time",
        "have a good time at the party",
        "パーティーで楽しい時間を過ごす",
        "A"
      ]
    ],
    "priority": "A"
  },
  {
    "n": 51,
    "title": "can・できることとお願い",
    "priority": "S",
    "tip": "canの後は動詞の原形。疑問文はCanで始め、Yes, I can. / No, I can't.で答える。Can I ～?は許可、Can you ～?はお願いにも使えるよ。",
    "phrases": [
      [
        "can",
        "I can swim fast.",
        "私は速く泳げます。",
        "S"
      ],
      [
        "can't",
        "He can't play the piano.",
        "彼はピアノを弾けません。",
        "S"
      ],
      [
        "can speak",
        "Yuka can speak Spanish.",
        "由香はスペイン語を話せます。",
        "A"
      ],
      [
        "can run",
        "I can run very fast.",
        "私はとても速く走れます。",
        "S"
      ],
      [
        "can't ride",
        "I can't ride a bicycle.",
        "私は自転車に乗れません。",
        "S"
      ],
      [
        "can't come",
        "They can't come to the party.",
        "彼らはパーティーに来られません。",
        "S"
      ],
      [
        "Can",
        "Can he drive a car?",
        "彼は車を運転できますか？",
        "S"
      ],
      [
        "can",
        "Yes, he can.",
        "はい、彼はできます。",
        "S"
      ],
      [
        "Can",
        "Can I use your pen?",
        "あなたのペンを使ってもいいですか？",
        "S"
      ],
      [
        "Sure",
        "Sure.",
        "もちろんです。",
        "S"
      ],
      [
        "Can",
        "Can you play the piano?",
        "あなたはピアノを弾けますか？",
        "S"
      ],
      [
        "can't",
        "No, I can't.",
        "いいえ、私はできません。",
        "S"
      ],
      [
        "Can",
        "Can I open the window?",
        "窓を開けてもいいですか？",
        "S"
      ],
      [
        "can't",
        "No, you can't.",
        "いいえ、いけません。",
        "S"
      ],
      [
        "help",
        "Can you help me?",
        "手伝ってもらえますか？",
        "S"
      ],
      [
        "can drive",
        "He can drive a car.",
        "彼は車を運転できます。",
        "S"
      ],
      [
        "can do",
        "I can do karate.",
        "私は空手ができます。",
        "A"
      ],
      [
        "can't ride",
        "I can't ride a unicycle.",
        "私は一輪車に乗れません。",
        "B"
      ],
      [
        "can sing",
        "Ann can sing songs well.",
        "アンは上手に歌えます。",
        "S"
      ]
    ]
  },
  {
    "n": 52,
    "title": "where・場所をたずねる",
    "priority": "S",
    "tip": "Where is ～?は「～はどこ？」。一般動詞の文はWhere do / does ～?を使う。in・on・under・nearで場所を伝えよう。",
    "phrases": [
      [
        "Where",
        "Where is my doll?",
        "私の人形はどこですか？",
        "S"
      ],
      [
        "on",
        "It's on the bed.",
        "それはベッドの上です。",
        "S"
      ],
      [
        "Where",
        "Where does Kyosuke live?",
        "恭介はどこに住んでいますか？",
        "S"
      ],
      [
        "in",
        "He lives in Chiba.",
        "彼は千葉に住んでいます。",
        "S"
      ],
      [
        "Where",
        "Where is your home?",
        "あなたの家はどこですか？",
        "S"
      ],
      [
        "near",
        "It's near the station.",
        "駅の近くです。",
        "S"
      ],
      [
        "does",
        "Where does Yuka live?",
        "由香はどこに住んでいますか？",
        "S"
      ],
      [
        "lives",
        "She lives in Chiba.",
        "彼女は千葉に住んでいます。",
        "S"
      ],
      [
        "from",
        "Where is Dean from?",
        "ディーンはどこの出身ですか？",
        "S"
      ],
      [
        "from",
        "He is from Canada.",
        "彼はカナダ出身です。",
        "S"
      ],
      [
        "Where",
        "Where is your cat?",
        "あなたの猫はどこですか？",
        "S"
      ],
      [
        "under",
        "It's under the desk.",
        "それは机の下です。",
        "S"
      ],
      [
        "Where",
        "Where is your dog?",
        "あなたの犬はどこですか？",
        "S"
      ]
    ]
  },
  {
    "n": 53,
    "title": "who・whose・誰のもの？",
    "priority": "S",
    "tip": "Whoは「誰」、whoseは「誰の」。mineは「私のもの」。Who plays ～?のように誰がするのかを聞く形も練習しよう。",
    "phrases": [
      [
        "Who",
        "Who is that girl?",
        "あの女の子は誰ですか？",
        "S"
      ],
      [
        "is",
        "She is Maho.",
        "彼女は真帆です。",
        "S"
      ],
      [
        "Who",
        "Who rides that bike?",
        "誰があの自転車に乗りますか？",
        "A"
      ],
      [
        "does",
        "Kyosuke does.",
        "恭介です。",
        "A"
      ],
      [
        "Whose",
        "Whose bag is this?",
        "これは誰のかばんですか？",
        "S"
      ],
      [
        "mine",
        "It's mine.",
        "それは私のものです。",
        "S"
      ],
      [
        "Who",
        "Who is that woman?",
        "あの女性は誰ですか？",
        "S"
      ],
      [
        "is",
        "She is Ms. Sugano.",
        "彼女は菅野さんです。",
        "S"
      ],
      [
        "plays",
        "Who plays soccer?",
        "誰がサッカーをしますか？",
        "A"
      ],
      [
        "does",
        "Daisuke does.",
        "大輔です。",
        "A"
      ],
      [
        "Whose",
        "Whose notebook is this?",
        "これは誰のノートですか？",
        "S"
      ],
      [
        "speaks",
        "Who speaks French?",
        "誰がフランス語を話しますか？",
        "A"
      ],
      [
        "does",
        "Dean does.",
        "ディーンです。",
        "A"
      ],
      [
        "Whose",
        "Whose hats are these?",
        "これらは誰の帽子ですか？",
        "S"
      ],
      [
        "mine",
        "These are mine.",
        "これらは私のものです。",
        "S"
      ]
    ]
  },
  {
    "n": 54,
    "title": "規則動詞の過去形",
    "priority": "A",
    "tip": "過去の行動は動詞に-edなどを付ける。did / didn'tを使うと、その後の動詞は原形に戻る。まず現在形を固めてから挑戦しよう。",
    "phrases": [
      [
        "watched",
        "I watched TV yesterday.",
        "私は昨日テレビを見ました。",
        "A"
      ],
      [
        "didn't",
        "He didn't study last night.",
        "彼は昨夜勉強しませんでした。",
        "A"
      ],
      [
        "visited",
        "I visited Ana's house.",
        "私はアナの家を訪ねました。",
        "A"
      ],
      [
        "lived",
        "Yuka lived in Kanagawa.",
        "由香は神奈川に住んでいました。",
        "A"
      ],
      [
        "didn't help",
        "Maho didn't help her mother.",
        "真帆は母親を手伝いませんでした。",
        "A"
      ],
      [
        "didn't go",
        "They didn't go to the party yesterday.",
        "彼らは昨日パーティーに行きませんでした。",
        "A"
      ],
      [
        "Did",
        "Did you clean your room?",
        "あなたは部屋を掃除しましたか？",
        "A"
      ],
      [
        "did",
        "Yes, I did.",
        "はい、しました。",
        "A"
      ],
      [
        "didn't",
        "No, I didn't.",
        "いいえ、しませんでした。",
        "A"
      ],
      [
        "What",
        "What did you do last Sunday?",
        "先週の日曜日に何をしましたか？",
        "A"
      ],
      [
        "played",
        "I played soccer.",
        "私はサッカーをしました。",
        "A"
      ],
      [
        "wash",
        "Did you wash your hands?",
        "あなたは手を洗いましたか？",
        "A"
      ],
      [
        "watch",
        "What did he watch?",
        "彼は何を見ましたか？",
        "A"
      ],
      [
        "watched",
        "He watched an action movie.",
        "彼はアクション映画を見ました。",
        "A"
      ],
      [
        "close",
        "Did you close the door?",
        "あなたはドアを閉めましたか？",
        "A"
      ],
      [
        "play",
        "What did she play?",
        "彼女は何を演奏しましたか？",
        "A"
      ],
      [
        "played",
        "She played the flute.",
        "彼女はフルートを演奏しました。",
        "B"
      ],
      [
        "washed",
        "I washed my dishes yesterday.",
        "私は昨日自分の食器を洗いました。",
        "A"
      ],
      [
        "played",
        "I played baseball last Sunday.",
        "私は先週の日曜日に野球をしました。",
        "A"
      ]
    ]
  },
  {
    "n": 55,
    "title": "不規則動詞の過去形",
    "priority": "A",
    "tip": "go→went、buy→bought、eat→ateのように形が変わる動詞がある。did / didn'tの後ろはgo・buy・eatなどの原形に戻そう。",
    "phrases": [
      [
        "went",
        "I went to the zoo yesterday.",
        "私は昨日動物園に行きました。",
        "A"
      ],
      [
        "bought",
        "She bought a new bag.",
        "彼女は新しいかばんを買いました。",
        "A"
      ],
      [
        "wrote",
        "I wrote a letter to Ana yesterday.",
        "私は昨日アナに手紙を書きました。",
        "A"
      ],
      [
        "took",
        "I took a lot of pictures last Sunday.",
        "私は先週の日曜日にたくさん写真を撮りました。",
        "A"
      ],
      [
        "made",
        "I made a cake last night.",
        "私は昨夜ケーキを作りました。",
        "A"
      ],
      [
        "went",
        "I went to the zoo last week.",
        "私は先週動物園に行きました。",
        "A"
      ],
      [
        "go",
        "Where did you go last weekend?",
        "先週末はどこへ行きましたか？",
        "A"
      ],
      [
        "went",
        "I went to the beach last weekend.",
        "私は先週末に海辺へ行きました。",
        "A"
      ],
      [
        "didn't go",
        "I didn't go to the park.",
        "私は公園に行きませんでした。",
        "A"
      ],
      [
        "eat",
        "Did you eat my cake?",
        "あなたは私のケーキを食べましたか？",
        "A"
      ],
      [
        "did",
        "Yes, I did.",
        "はい、食べました。",
        "A"
      ],
      [
        "didn't",
        "No, I didn't.",
        "いいえ、食べませんでした。",
        "A"
      ],
      [
        "have",
        "What did you have for lunch?",
        "昼食に何を食べましたか？",
        "A"
      ],
      [
        "had",
        "I had ramen for lunch.",
        "私は昼食にラーメンを食べました。",
        "A"
      ],
      [
        "buy",
        "What did you buy for her birthday present?",
        "彼女の誕生日プレゼントに何を買いましたか？",
        "A"
      ],
      [
        "bought",
        "I bought a hat.",
        "私は帽子を買いました。",
        "A"
      ],
      [
        "didn't meet",
        "I didn't meet Dean yesterday.",
        "私は昨日ディーンに会いませんでした。",
        "A"
      ],
      [
        "have",
        "What did they have for lunch?",
        "彼らは昼食に何を食べましたか？",
        "A"
      ],
      [
        "had",
        "They had sandwiches.",
        "彼らはサンドイッチを食べました。",
        "A"
      ],
      [
        "breakfast",
        "What did you have for breakfast?",
        "朝食に何を食べましたか？",
        "A"
      ],
      [
        "had",
        "I had a burger for breakfast.",
        "私は朝食にハンバーガーを食べました。",
        "A"
      ]
    ]
  },
  {
    "n": 56,
    "title": "can・運動や趣味を話そう",
    "priority": "S",
    "tip": "I can ～.は「私は～できます」。できないときはI can't ～.。動詞を入れ替えて自分の得意なことを話そう。",
    "phrases": [
      [
        "can",
        "I can ride a bicycle.",
        "私は自転車に乗れます。",
        "S"
      ],
      [
        "can't",
        "I can't ride a bicycle.",
        "私は自転車に乗れません。",
        "S"
      ],
      [
        "swim",
        "swim",
        "泳ぐ",
        "S"
      ],
      [
        "dance",
        "dance",
        "踊る",
        "S"
      ],
      [
        "draw",
        "draw pictures",
        "絵を描く",
        "S"
      ],
      [
        "snowboard",
        "snowboard",
        "スノーボードをする",
        "B"
      ],
      [
        "play",
        "play the piano",
        "ピアノを弾く",
        "S"
      ],
      [
        "play",
        "play basketball",
        "バスケットボールをする",
        "S"
      ],
      [
        "can",
        "I can dance.",
        "私は踊れます。",
        "S"
      ],
      [
        "can",
        "I can play the piano.",
        "私はピアノを弾けます。",
        "S"
      ],
      [
        "can",
        "I can swim.",
        "私は泳げます。",
        "S"
      ],
      [
        "can",
        "I can run fast.",
        "私は速く走れます。",
        "S"
      ],
      [
        "Can",
        "Can you cook well?",
        "あなたは上手に料理できますか？",
        "S"
      ],
      [
        "can",
        "Yes, I can.",
        "はい、できます。",
        "S"
      ],
      [
        "can't",
        "No, I can't.",
        "いいえ、できません。",
        "S"
      ],
      [
        "run",
        "run fast",
        "速く走る",
        "S"
      ],
      [
        "ride",
        "ride a unicycle",
        "一輪車に乗る",
        "B"
      ]
    ]
  },
  {
    "n": 57,
    "title": "How much・買い物の会話",
    "priority": "S",
    "tip": "値段はHow much is ～?で聞く。答えはIt's ～ yen.。服の名前と数字を一緒に練習しよう。",
    "phrases": [
      [
        "How much",
        "How much is this dress?",
        "このドレスはいくらですか？",
        "S"
      ],
      [
        "yen",
        "It's 2,000 yen.",
        "2,000円です。",
        "S"
      ],
      [
        "T-shirt",
        "T-shirt",
        "Tシャツ",
        "S"
      ],
      [
        "skirt",
        "skirt",
        "スカート",
        "S"
      ],
      [
        "coat",
        "coat",
        "コート",
        "S"
      ],
      [
        "hat",
        "hat",
        "帽子",
        "S"
      ],
      [
        "jacket",
        "jacket",
        "ジャケット",
        "S"
      ],
      [
        "How much",
        "How much is this T-shirt?",
        "このTシャツはいくらですか？",
        "S"
      ],
      [
        "yen",
        "It's 1,000 yen.",
        "1,000円です。",
        "S"
      ],
      [
        "How much",
        "How much is this hat?",
        "この帽子はいくらですか？",
        "S"
      ],
      [
        "yen",
        "It's 1,500 yen.",
        "1,500円です。",
        "S"
      ],
      [
        "How much",
        "How much is this jacket?",
        "このジャケットはいくらですか？",
        "S"
      ],
      [
        "yen",
        "It's 3,000 yen.",
        "3,000円です。",
        "S"
      ],
      [
        "How much",
        "How much is this coat?",
        "このコートはいくらですか？",
        "S"
      ]
    ]
  },
  {
    "n": 58,
    "title": "Let's・Don't・誘いとルール",
    "priority": "S",
    "tip": "Let's + 動詞で「～しよう」。Don't + 動詞で「～しないで」。返事や謝る言葉も一緒に覚えよう。",
    "phrases": [
      [
        "Let's",
        "Let's play baseball.",
        "野球をしましょう。",
        "S"
      ],
      [
        "let's",
        "Yes, let's.",
        "はい、そうしましょう。",
        "S"
      ],
      [
        "not",
        "No, let's not.",
        "いいえ、よしましょう。",
        "A"
      ],
      [
        "play",
        "play tag",
        "鬼ごっこをする",
        "A"
      ],
      [
        "play",
        "play cards",
        "トランプをする",
        "S"
      ],
      [
        "Don't",
        "Don't play the piano at night.",
        "夜にピアノを弾かないでください。",
        "S"
      ],
      [
        "sorry",
        "I'm sorry.",
        "ごめんなさい。",
        "S"
      ],
      [
        "feed",
        "feed the animals",
        "動物にえさをあげる",
        "A"
      ],
      [
        "play",
        "play video games",
        "ビデオゲームをする",
        "S"
      ],
      [
        "eat",
        "eat snacks",
        "おやつを食べる",
        "S"
      ],
      [
        "Don't",
        "Don't swim here.",
        "ここで泳がないでください。",
        "S"
      ],
      [
        "Don't",
        "Don't run in the room.",
        "部屋の中で走らないでください。",
        "S"
      ],
      [
        "midnight",
        "Don't play music at midnight.",
        "真夜中に音楽をかけないでください。",
        "B"
      ],
      [
        "Don't",
        "Don't eat snacks here.",
        "ここでおやつを食べないでください。",
        "S"
      ],
      [
        "Don't",
        "Don't feed the animals.",
        "動物にえさをあげないでください。",
        "A"
      ],
      [
        "Don't",
        "Don't swim in the sea.",
        "海で泳がないでください。",
        "S"
      ]
    ]
  },
  {
    "n": 59,
    "title": "he・she・できることと得意なこと",
    "priority": "S",
    "tip": "男性はhe、女性はshe。Can you ～?への返事は人数に合わせてI / weを使う。be good at + 動詞ingは「～するのが得意」。",
    "phrases": [
      [
        "Look at",
        "Look at the man.",
        "その男性を見てください。",
        "S"
      ],
      [
        "He",
        "He is a famous soccer player.",
        "彼は有名なサッカー選手です。",
        "A"
      ],
      [
        "wash",
        "wash the dishes",
        "食器を洗う",
        "S"
      ],
      [
        "clean",
        "clean the room",
        "部屋を掃除する",
        "S"
      ],
      [
        "Can",
        "Can you swim in the sea?",
        "あなたたちは海で泳げますか？",
        "S"
      ],
      [
        "we",
        "Yes, we can.",
        "はい、私たちはできます。",
        "S"
      ],
      [
        "can't",
        "No, we can't.",
        "いいえ、私たちはできません。",
        "S"
      ],
      [
        "visit",
        "visit a hot spring",
        "温泉を訪れる",
        "B"
      ],
      [
        "skate",
        "skate in the park",
        "公園でスケートをする",
        "A"
      ],
      [
        "cherry blossoms",
        "see the cherry blossoms",
        "桜の花を見る",
        "B"
      ],
      [
        "climb",
        "climb Mt. Fuji",
        "富士山に登る",
        "A"
      ],
      [
        "pictures",
        "take pictures in the museum",
        "博物館で写真を撮る",
        "A"
      ],
      [
        "visit",
        "Can you visit a hot spring?",
        "あなたは温泉を訪れることができますか？",
        "B"
      ],
      [
        "climb",
        "Can you climb Mt. Fuji?",
        "あなたは富士山に登れますか？",
        "A"
      ],
      [
        "skate",
        "Can I skate in the park?",
        "公園でスケートをしてもいいですか？",
        "A"
      ],
      [
        "good at",
        "She is good at skating.",
        "彼女はスケートが得意です。",
        "A"
      ],
      [
        "isn't",
        "She isn't good at skating.",
        "彼女はスケートが得意ではありません。",
        "A"
      ],
      [
        "playing",
        "playing tennis",
        "テニスをすること",
        "S"
      ],
      [
        "speaking",
        "speaking English",
        "英語を話すこと",
        "S"
      ]
    ]
  },
  {
    "n": 60,
    "title": "Can I・Can you・許可とお願い",
    "priority": "S",
    "tip": "Can I ～?は「～してもいいですか」。Can you ～?は「～してくれますか」にも使う。Sure. / Of course.で快く答えよう。",
    "phrases": [
      [
        "Can",
        "Can I use your eraser?",
        "あなたの消しゴムを使ってもいいですか？",
        "S"
      ],
      [
        "Sure",
        "Sure.",
        "もちろんです。",
        "S"
      ],
      [
        "can't",
        "Sorry, you can't.",
        "ごめんなさい、だめです。",
        "S"
      ],
      [
        "open",
        "open the window",
        "窓を開ける",
        "S"
      ],
      [
        "eat",
        "eat here",
        "ここで食べる",
        "S"
      ],
      [
        "have",
        "have some juice",
        "ジュースを飲む",
        "S"
      ],
      [
        "ask",
        "ask a question",
        "質問をする",
        "S"
      ],
      [
        "take",
        "take a picture here",
        "ここで写真を撮る",
        "S"
      ],
      [
        "ride",
        "ride your bicycle",
        "あなたの自転車に乗る",
        "S"
      ],
      [
        "Can",
        "Can I eat here?",
        "ここで食べてもいいですか？",
        "S"
      ],
      [
        "Can",
        "Can I open the window?",
        "窓を開けてもいいですか？",
        "S"
      ],
      [
        "Can",
        "Can I ask a question?",
        "質問をしてもいいですか？",
        "S"
      ],
      [
        "Can",
        "Can I have some juice?",
        "ジュースを飲んでもいいですか？",
        "S"
      ],
      [
        "Can",
        "Can I take a picture here?",
        "ここで写真を撮ってもいいですか？",
        "S"
      ],
      [
        "Can",
        "Can I ride your bicycle?",
        "あなたの自転車に乗ってもいいですか？",
        "S"
      ],
      [
        "Can",
        "Can you help me?",
        "手伝ってもらえますか？",
        "S"
      ],
      [
        "Of course",
        "Of course.",
        "もちろんですとも。",
        "S"
      ],
      [
        "close",
        "close the door",
        "ドアを閉める",
        "S"
      ],
      [
        "set",
        "set the table",
        "食卓の準備をする",
        "A"
      ]
    ]
  }
];
const teachers=[
  {
    "en": "Hello!",
    "ja": "こんにちは！",
    "scene": "レッスンが始まったら、先生にあいさつしよう。"
  },
  {
    "en": "How are you?",
    "ja": "お元気ですか？",
    "scene": "先生の調子を聞いてみよう。"
  },
  {
    "en": "I'm good, thank you.",
    "ja": "元気です、ありがとう。",
    "scene": "調子を聞かれたら答えてみよう。"
  },
  {
    "en": "My name is Yuzu.",
    "ja": "私の名前はゆづです。",
    "scene": "初めての先生に名前を伝えよう。名前は自分の名前に変えてね。"
  },
  {
    "en": "Nice to meet you.",
    "ja": "はじめまして。",
    "scene": "初めて会う先生に使ってみよう。"
  },
  {
    "en": "One more time, please.",
    "ja": "もう一度お願いします。",
    "scene": "聞き取れなかったときにお願いしよう。"
  },
  {
    "en": "Slowly, please.",
    "ja": "ゆっくりお願いします。",
    "scene": "先生の話す速さが速いときに使おう。"
  },
  {
    "en": "I don't understand.",
    "ja": "わかりません。",
    "scene": "意味がわからないときは伝えて大丈夫。"
  },
  {
    "en": "I have a question.",
    "ja": "質問があります。",
    "scene": "質問したいときに声をかけよう。"
  },
  {
    "en": "What does this mean?",
    "ja": "これはどういう意味ですか？",
    "scene": "わからない言葉を指して聞いてみよう。"
  },
  {
    "en": "How do you say this in English?",
    "ja": "これは英語で何と言いますか？",
    "scene": "絵やものを指して英語を教えてもらおう。"
  },
  {
    "en": "How do you spell it?",
    "ja": "つづりはどう書きますか？",
    "scene": "聞いた単語のつづりを教えてもらおう。"
  },
  {
    "en": "Is this right?",
    "ja": "これで合っていますか？",
    "scene": "自分の答えを確かめよう。"
  },
  {
    "en": "Can you help me?",
    "ja": "手伝ってもらえますか？",
    "scene": "困ったときに助けをお願いしよう。"
  },
  {
    "en": "Please wait a moment.",
    "ja": "少し待ってください。",
    "scene": "答えを考える時間が欲しいときに使おう。"
  },
  {
    "en": "Let me think.",
    "ja": "ちょっと考えさせてください。",
    "scene": "すぐ答えが出なくても、こう伝えて考えよう。"
  },
  {
    "en": "I don't know yet.",
    "ja": "まだわかりません。",
    "scene": "答えがまだわからないときに使おう。"
  },
  {
    "en": "Can I try again?",
    "ja": "もう一度やってもいいですか？",
    "scene": "間違えたあとにもう一回挑戦しよう。"
  },
  {
    "en": "I did it!",
    "ja": "できました！",
    "scene": "問題ができたら先生に伝えよう。"
  },
  {
    "en": "Thank you for your help.",
    "ja": "手伝ってくれてありがとうございます。",
    "scene": "教えてもらったあとにお礼を言おう。"
  },
  {
    "en": "Can you hear me?",
    "ja": "私の声が聞こえますか？",
    "scene": "オンライン英会話の最初に音を確認しよう。"
  },
  {
    "en": "I can hear you.",
    "ja": "先生の声が聞こえます。",
    "scene": "先生に音を確認されたら答えよう。"
  },
  {
    "en": "I can't hear you.",
    "ja": "先生の声が聞こえません。",
    "scene": "音が聞こえないときは伝えよう。"
  },
  {
    "en": "Can you see me?",
    "ja": "私の姿が見えますか？",
    "scene": "オンラインでカメラを確認しよう。"
  },
  {
    "en": "I can't see the picture.",
    "ja": "画像が見えません。",
    "scene": "教材の絵が見えないときに伝えよう。"
  },
  {
    "en": "Which page?",
    "ja": "何ページですか？",
    "scene": "開くページがわからないときに聞こう。"
  },
  {
    "en": "Can you write it down?",
    "ja": "書いてもらえますか？",
    "scene": "言葉を文字でも確かめたいときに使おう。"
  },
  {
    "en": "Please show me.",
    "ja": "見せてください。",
    "scene": "やり方や見本を見せてほしいときに使おう。"
  },
  {
    "en": "Can you give me a hint?",
    "ja": "ヒントをもらえますか？",
    "scene": "あと少しで答えられそうなときにお願いしよう。"
  },
  {
    "en": "I'm ready.",
    "ja": "準備ができました。",
    "scene": "準備ができたら自分から先生に伝えよう。"
  },
  {
    "en": "It's a big box.",
    "ja": "大きな箱です。",
    "scene": "身近な箱を見せて、大きさを説明してみよう。"
  },
  {
    "en": "What's your favorite movie?",
    "ja": "好きな映画は何ですか？",
    "scene": "先生の好きな映画を聞いてみよう。"
  },
  {
    "en": "This is difficult for me.",
    "ja": "これは私には難しいです。",
    "scene": "難しい問題で困ったら先生に伝えよう。"
  },
  {
    "en": "That sounds interesting.",
    "ja": "おもしろそうですね。",
    "scene": "先生の話に反応して会話を続けよう。"
  },
  {
    "en": "What color do you like?",
    "ja": "何色が好きですか？",
    "scene": "先生の好きな色を聞いてみよう。"
  },
  {
    "en": "Is this the right answer?",
    "ja": "これが正しい答えですか？",
    "scene": "答えに自信がないときに確かめよう。"
  },
  {
    "en": "What do you usually do on Sundays?",
    "ja": "日曜日は普段何をしますか？",
    "scene": "先生の休日の過ごし方を聞いてみよう。"
  },
  {
    "en": "I think so, too.",
    "ja": "私もそう思います。",
    "scene": "先生と同じ気持ちだったら伝えよう。"
  },
  {
    "en": "It's cloudy today.",
    "ja": "今日は曇っています。",
    "scene": "曇りの日に今日の天気を伝えよう。"
  },
  {
    "en": "I'm thirsty.",
    "ja": "のどが渇きました。",
    "scene": "自分の状態を英語で伝えてみよう。"
  },
  {
    "en": "Please look at my picture.",
    "ja": "私の絵を見てください。",
    "scene": "描いた絵を先生に見せよう。"
  },
  {
    "en": "I want to talk about basketball.",
    "ja": "バスケットボールについて話したいです。",
    "scene": "好きな話題で会話してみよう。"
  },
  {
    "en": "I'm looking forward to our next lesson.",
    "ja": "次のレッスンを楽しみにしています。",
    "scene": "レッスンの最後に楽しみな気持ちを伝えよう。"
  },
  {
    "en": "I'll try my best.",
    "ja": "精一杯がんばります。",
    "scene": "新しい問題に挑戦する前に言ってみよう。"
  },
  {
    "en": "I agree with you.",
    "ja": "先生に賛成です。",
    "scene": "先生の意見に賛成するときに使おう。"
  },
  {
    "en": "I'm interested in animals.",
    "ja": "動物に興味があります。",
    "scene": "興味のあることを先生に話そう。"
  },
  {
    "en": "Thank you for today's lesson.",
    "ja": "今日のレッスンをありがとうございました。",
    "scene": "レッスンの終わりにお礼を言おう。"
  },
  {
    "en": "Please take care.",
    "ja": "どうぞお元気で。",
    "scene": "先生との別れ際に声をかけよう。"
  },
  {
    "en": "Can you say that again?",
    "ja": "もう一度言ってもらえますか？",
    "scene": "聞き直す表現を文で言ってみよう。"
  },
  {
    "en": "I had a good time.",
    "ja": "楽しかったです。",
    "scene": "レッスンの感想を先生に伝えよう。"
  },
  {
    "en": "Can I use my notebook?",
    "ja": "ノートを使ってもいいですか？",
    "scene": "ノートを使いたいときに先生に聞こう。"
  },
  {
    "en": "Where are you from?",
    "ja": "どちらの出身ですか？",
    "scene": "先生の出身地を聞いてみよう。"
  },
  {
    "en": "Whose turn is it?",
    "ja": "誰の番ですか？",
    "scene": "ゲームや会話で次に話す人を確認しよう。"
  },
  {
    "en": "I practiced English yesterday.",
    "ja": "昨日英語を練習しました。",
    "scene": "昨日がんばったことを先生に伝えよう。"
  },
  {
    "en": "I went to the park yesterday.",
    "ja": "昨日公園に行きました。",
    "scene": "公園に行った翌日に、昨日のことを話そう。"
  },
  {
    "en": "I can play basketball.",
    "ja": "バスケットボールができます。",
    "scene": "自分のできることを先生に話そう。"
  },
  {
    "en": "How much is this?",
    "ja": "これはいくらですか？",
    "scene": "買い物のロールプレイで値段を聞こう。"
  },
  {
    "en": "Let's play a game.",
    "ja": "ゲームをしましょう。",
    "scene": "先生を英語のゲームに誘ってみよう。"
  },
  {
    "en": "What are you good at?",
    "ja": "何が得意ですか？",
    "scene": "先生の得意なことを聞いてみよう。"
  },
  {
    "en": "Can I ask another question?",
    "ja": "もう一つ質問してもいいですか？",
    "scene": "もう少し知りたいときに使ってみよう。"
  }
];
B.units.push('ことばを広げる 31〜35','ことばを広げる 36〜40','熟語に挑戦 41〜45','熟語に挑戦 46〜50','文法と会話 51〜55','身近な会話 56〜60');
for(const l of source){
 const id='course-'+l.n, ids=[],modes={vocab:[],wordAudio:[],cloze:[],order:[]};
 const phrases=l.phrases.map(([key,en,ja,priority])=>({key,en,ja,priority}));
 for(const [i,p] of phrases.entries()){
  const other=phrases.filter(x=>x.en!==p.en);
  for(const type of ['vocab','wordAudio','cloze','order']){
   const qid=id+'-phrase'+i+'-'+type,answer=type==='order'?p.en.replace(/[.!?]$/,''):type==='cloze'?p.key:p.ja;
   const q={id:qid,lesson:id,type:type==='cloze'?'grammar':type,skill:type==='order'?'語順':type==='cloze'?'熟語・穴埋め':type==='wordAudio'?'聞き取り基礎':'語彙',prompt:type==='vocab'?p.en:type==='cloze'?p.ja+'\n'+p.en.replace(p.key,'_____'):p.ja,answer,explanation:p.en+' = '+p.ja,audio:type==='wordAudio'?[p.en]:[],examEligible:false,priority:p.priority};
   if(type==='order')q.tokens=answer.split(/\s+/);
   else { const fallback=type==='cloze'?['is','do','are','have','the','not']:['学校に行く','本を読む','朝ごはんを食べる','友達と遊ぶ'];q.options=[answer,...[...new Set([...other.map(x=>type==='cloze'?x.key:x.ja),...fallback])].filter(x=>x!==answer).slice(0,3)]; }
   B.questions[qid]=q;modes[type].push(qid);
  }
  // Every phrase appears twice; alternate comprehension and production.
  ids.push(modes[i%2?'wordAudio':'vocab'][i],modes[i%2?'order':'cloze'][i]);
 }
 B.lessons.push({id,n:l.n,title:l.title,unit:6+Math.floor((l.n-31)/5),priority:l.priority,tip:l.tip||'教材の'+phrases.length+'表現を、意味・音・穴埋め・語順で練習しよう。短い表現は主語を足さず、そのまま覚えよう。'+(l.n>=38?' 教材に合わせた発展表現も含みます。':''),example:phrases[0].en,ids,modes,phrases});
}
B.priorityLabels={S:'最優先',A:'次に覚える',B:'余裕があれば'};
B.priorityNote='英検5級に向けた学習順の目安です。公式の級別指定ではありません。S：基本文法・身近な表現、A：基礎を広げる表現、B：発展・使う場面が限られる表現。';
B.teacherPhrases={};
for(const l of B.lessons){
 const t=teachers[l.n-1];if(!t)continue;
 B.teacherPhrases[l.n]=t;l.teacher=t;l.priority||='S';
 const id=l.id+'-teacher';
 const others=teachers.filter(x=>x.en!==t.en).map(x=>x.en);
 B.questions[id]={id,lesson:l.id,type:'conversation',skill:'先生に使ってみよう',priority:[54,55,59].includes(l.n)?'A':'S',prompt:'先生に「'+t.ja+'」と伝えるには？',options:[t.en,...others.slice(0,3)],answer:t.en,explanation:t.en+' = '+t.ja,audio:[t.en],examEligible:false};
 l.ids.push(id);
}
return B;
});
