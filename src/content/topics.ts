import type { Locale } from '../i18n';

export interface TopicBlock {
  h2: string;
  body: string;
}
export interface Topic {
  kicker: string;
  h1: string;
  desc: string;
  intro: string;
  blocks: TopicBlock[];
}
export const topics: Record<string, Record<Locale, Topic>> = {
  'marrakech-transport': {
    ar: {
      kicker: 'الوصول',
      h1: 'الوصول إلى شلالات أوزود من مراكش',
      desc: 'طرق عملية للوصول إلى شلالات أوزود من مراكش: المسافة، مدة القيادة، رحلة اليوم المنظّمة، حافلة + تاكسي كبير، ونصائح المواقف.',
      intro: 'تبعد شلالات أوزود نحو 180 كم عن مراكش. يأتي معظم الزوّار في رحلة يوم واحد، ولديك ثلاثة خيارات واقعية: القيادة الذاتية، رحلة منظّمة، أو النقل العام مع تاكسي مشترك للمرحلة الأخيرة.',
      blocks: [
        { h2: 'بالسيارة (الأكثر مرونة)', body: 'اتبع الطريق A7 نحو بني ملال، ثم R208 إلى أزيلال واتبع اللافتات إلى أوزود. المقطع الأخير جبلي — خفّف السرعة بعد الغروب أو المطر. الرحلة عادة 2.5–3.5 ساعات. مواقف قرب مداخل المسارات مدفوعة؛ احمل نقوداً مغربية صغيرة.' },
        { h2: 'رحلة يوم منظّمة', body: 'تعرُض وكالات مراكش جولات يومية كاملة إلى أوزود، غالباً مع التقاط من الفندق ومرشد وتوقفات في الطريق. هذا الخيار الأسهل إن أردت تجربة من الباب للباب دون قيادة.' },
        { h2: 'حافلة + تاكسي كبير (الأرخص)', body: 'اركب حافلة بين المدن من مراكش إلى أزيلال أو بني ملال، ثم «تاكسي كبير» مشترك إلى قرية أوزود. هو الأرخص لكن الأطول؛ أكّد مواعيد العودة مسبقاً حتى لا تعلق.' },
        { h2: 'التوقيت ونصائح', body: 'غادِر مراكش باكراً (قبل الثامنة صباحاً) للاستمتاع بالشلال قبل زحام وحدّة ظهيرة الصيف. الدخول مجاني؛ تدفع فقط للمواقف والقارب والمرشد والطعام. احتفظ بماء وواقٍ شمسي في السيارة.' }
      ]
    },
    en: {
      kicker: 'Transport',
      h1: 'How to Get to Ouzoud Waterfalls from Marrakech',
      desc: 'Practical ways to reach Ouzoud Waterfalls from Marrakech: distance, drive time, organized day trips, bus + grand taxi, and parking tips for a smooth day trip.',
      intro: 'Ouzoud Waterfalls sit about 180 km from Marrakech. Most visitors come as a day trip, and you have three realistic options: self-drive, an organized excursion, or public transport with a shared taxi for the final leg.',
      blocks: [
        { h2: 'By car (most flexible)', body: 'Follow the A7 toward Beni Mellal, then the R208 to Azilal and the signs to Ouzoud. The final stretch is mountainous — slow down after sunset or rain. The drive is usually 2.5–3.5 hours. Parking near the trail entrances is paid; bring small Moroccan cash.' },
        { h2: 'Organized day trip', body: 'Many Marrakech agencies sell full-day tours to Ouzoud, often including hotel pickup, a guide and stops along the way. This is the easiest option if you want a door-to-door experience without driving.' },
        { h2: 'Bus + grand taxi (cheapest)', body: 'Take an intercity bus from Marrakech to Azilal or Beni Mellal, then a shared "grand taxi" to Ouzoud village. It is the cheapest route but the longest; confirm the return times in advance so you are not stranded.' },
        { h2: 'Timing & tips', body: 'Leave Marrakech early (before 8 am) to enjoy the falls before the midday crowds and heat. The site entry is free; you only pay for parking, boat ride, guide and food. Keep water and sun protection in the car.' }
      ]
    },
    fr: {
      kicker: 'Transport',
      h1: "Accès aux cascades d’Ouzoud depuis Marrakech",
      desc: "Comment rejoindre les cascades d’Ouzoud depuis Marrakech : distance, durée, excursion organisée, bus + grand taxi et conseils de stationnement.",
      intro: "Les cascades d’Ouzoud se trouvent à environ 180 km de Marrakech. La plupart des visiteurs y viennent en excursion d’une journée, avec trois options : voiture, excursion organisée ou transport public avec taxi partagé pour le dernier tronçon.",
      blocks: [
        { h2: 'En voiture (le plus flexible)', body: "Suivez l’A7 vers Béni Mellal, puis la R208 vers Azilal et les panneaux Ouzoud. Le dernier tronçon est montagneux — réduisez la vitesse après le coucher du soleil ou la pluie. Le trajet dure généralement 2,5 à 3,5 h. Le parking près des entrées est payant ; prévoyez de la petite monnaie." },
        { h2: 'Excursion organisée', body: "Beaucoup d’agences à Marrakech proposent des circuits d’une journée vers Ouzoud, souvent avec prise en charge à l’hôtel, guide et arrêts en cours de route. C’est l’option la plus simple sans conduire." },
        { h2: 'Bus + grand taxi (le moins cher)', body: "Prenez un car interurbain de Marrakech à Azilal ou Béni Mellal, puis un « grand taxi » partagé vers le village d’Ouzoud. C’est le moins cher mais le plus long ; confirmez les horaires de retour à l’avance." },
        { h2: 'Horaires & conseils', body: "Partez de Marrakech tôt (avant 8 h) pour profiter des chutes avant la chaleur et la foule de midi. L’entrée est gratuite ; vous ne payez que parking, barque, guide et repas. Gardez de l’eau et de la protection solaire." }
      ]
    },
    zh: {
      kicker: '交通',
      h1: '从马拉喀什前往橄榄树瀑布（奥祖德）',
      desc: '从马拉喀什到橄榄树瀑布的实用交通方式：距离、车程、一日游、大巴+拼车出租，以及停车贴士。',
      intro: '橄榄树瀑布距马拉喀什约 180 公里。多数游客以一日游方式前往，主要有三种选择：自驾、参加组织的一日游，或公共交通加拼车出租走完最后一段。',
      blocks: [
        { h2: '自驾（最灵活）', body: '沿 A7 往贝尼迈拉勒方向，转 R208 至阿齐拉勒，再按路牌前往奥祖德。最后一段为山路，日落后或雨后请减速。车程通常 2.5–3.5 小时。步道入口附近停车收费，备好摩洛哥小额现金。' },
        { h2: '组织一日游', body: '马拉喀什许多旅行社出售奥祖德全天行程，常含酒店接送、向导及沿途停靠。不想开车、想要一站式体验，这是最省心的选择。' },
        { h2: '大巴 + 大出租车（最省钱）', body: '从马拉喀什乘城际大巴到阿齐拉勒或贝尼迈拉勒，再换乘拼车“大出租车”到奥祖德村。最省钱但最久；提前确认返程时间以免滞留。' },
        { h2: '时间与贴士', body: '清晨（早 8 点前）从马拉喀什出发，可在正午人流与高温前畅游瀑布。景区免费进入；只需为停车、乘船、向导与餐饮付费。车内备好饮水与防晒。' }
      ]
    }
  },
  'best-season': {
    ar: {
      kicker: 'أفضل وقت',
      h1: 'أفضل وقت لزيارة شلالات أوزود',
      desc: 'متى تزور شلالات أوزود: الجريان حسب الموسم، الطقس، الازدحام وإضاءة التصوير، إضافة إلى ذوبان ثلوج الأطلس في الربيع.',
      intro: 'أوزود مناخه جبلي متوسطي. باختصار: الربيع (مارس–مايو) يمنح أقوى جريان بعد ذوبان ثلوج الأطلس، بينما الخريف الأكثر راحة والأقل ازدحاماً.',
      blocks: [
        { h2: 'الربيع (مارس–مايو) — أقوى جريان', body: 'ذوبان ثلوج الأطلس يغذّي النهر، فتصل الشلالات إلى أقصى قوتها. الخضرة والزهور البرّية في ذروتها، والحرارة لطيفة (15–25°م). تكتظ عطلة نهاية الأسبوع.' },
        { h2: 'الصيف (يونيو–أغسطس) — الأكثر حرارة وازدحاماً', body: 'ترتفع الحرارة إلى 30–38°م ويخفّ الجريان لكنه لا يتوقف. الصباحات الأهدأ؛ عواصف رعدية محتملة بعد الظهيرة. هذا موسم الذروة، لذا احرص على الوصول مبكّراً.' },
        { h2: 'الخريف (سبتمبر–نوفمبر) — الأكثر توازناً', body: 'أيام دافئة ومريحة بإضاءة ممتازة للتصوير. يعود منسوب المياه تدريجياً ويقلّ الزحام مقارنة بالصيف.' },
        { h2: 'الشتاء (ديسمبر–فبراير) — هادئ وضبابي', body: 'أبرد الشهور، ربما ضبابي، لكن الشلالات قوية بعد المطر. المسارات قد تكون زلقة — ارتدِ حذاءً مناسباً وتمهّل.' },
        { h2: 'نصيحة تصوير', body: 'للقبض على قوس قزح داخل الرذاذ، استهدف منتصف النهار بيوم صيف صافٍ؛ ولإضاءة ناعمة ونقاط مشاهدة فارغة، اختر شروق أو غروب الشمس عند الحافة العليا.' }
      ]
    },
    en: {
      kicker: 'When to visit',
      h1: 'Best Time to Visit Ouzoud Waterfalls',
      desc: 'When to visit Ouzoud Waterfalls: season-by-season flow, weather, crowds and photography light, plus the spring snowmelt that makes the falls fullest.',
      intro: 'Ouzoud has a mountain Mediterranean climate. The short answer: spring (March–May) gives the fullest water after Atlas snowmelt, while autumn is the most comfortable and least crowded.',
      blocks: [
        { h2: 'Spring (March–May) — fullest water', body: 'Snowmelt from the Atlas feeds the river, so the falls run at their strongest. Greenery and wildflowers peak, and temperatures are mild (15–25°C). Weekends get busy.' },
        { h2: 'Summer (June–August) — hottest, busiest', body: 'Heat climbs to 30–38°C and the flow eases, but it never stops. Mornings are calmest; afternoon thunderstorms are possible. This is peak tourist season, so arrive early.' },
        { h2: 'Autumn (September–November) — most balanced', body: 'Warm, comfortable days with excellent photographic light. Water levels recover gradually and crowds thin out compared with summer.' },
        { h2: 'Winter (December–February) — quiet & moody', body: 'The coldest months, sometimes foggy, but the falls are powerful after rain. Trails can be slippery — wear proper shoes and take your time.' },
        { h2: 'Photography tip', body: 'For rainbows in the spray, aim for midday on clear summer days; for soft light and empty viewpoints, choose sunrise or sunset at the upper rim.' }
      ]
    },
    fr: {
      kicker: 'Quand visiter',
      h1: 'Meilleure saison pour visiter les cascades d’Ouzoud',
      desc: 'Quand visiter les cascades d’Ouzoud : débit par saison, météo, affluence et lumière pour la photo, plus la fonte des neiges au printemps.',
      intro: 'Ouzoud a un climat montagnard méditerranéen. En bref : le printemps (mars–mai) offre la plus forte chute après la fonte des neiges de l’Atlas, tandis que l’automne est le plus confortable et le moins fréquenté.',
      blocks: [
        { h2: 'Printemps (mars–mai) — chute maximale', body: "La fonte des neiges de l’Atlas alimente la rivière, la chute est à son plus fort. La végétation et les fleurs sauvages culminent, et il fait doux (15–25 °C). Les week-ends sont chargés." },
        { h2: 'Été (juin–août) — chaud et fréquenté', body: "La chaleur atteint 30–38 °C et le débit diminue, mais ne s’arrête jamais. Les matins sont les plus calmes ; des orages en après-midi sont possibles. C’est la haute saison, partez tôt." },
        { h2: 'Automne (septembre–novembre) — le plus équilibré', body: "Jours chauds et confortables avec une lumière excellente pour la photo. Le niveau d’eau remonte progressivement et l’affluence diminue par rapport à l’été." },
        { h2: 'Hiver (décembre–février) — calme et brumeux', body: "Les mois les plus froids, parfois brumeux, mais la chute est puissante après la pluie. Les sentiers peuvent être glissants — portez de bonnes chaussures et prenez votre temps." },
        { h2: 'Conseil photo', body: "Pour un arc-en-ciel dans le voile, visez midi par jour clair en été ; pour une lumière douce et des points de vue vides, choisissez le lever ou le coucher du soleil sur le bord supérieur." }
      ]
    },
    zh: {
      kicker: '何时前往',
      h1: '橄榄树瀑布最佳游览季节',
      desc: '橄榄树瀑布何时去最好：按季节的水量、天气、人流与摄影光线，以及让瀑布最丰沛的春季融雪。',
      intro: '奥祖德属山地地中海气候。一句话：春季（3–5 月）阿特拉斯山融雪后水量最丰；秋季最舒适、人最少。',
      blocks: [
        { h2: '春季（3–5 月）— 水量最丰', body: '阿特拉斯山融雪补给河流，瀑布最为壮观。绿意与野花正盛，气温温和（15–25°C）。周末人气较旺。' },
        { h2: '夏季（6–8 月）— 最热最旺', body: '气温升至 30–38°C，水量减少但不断流。清晨最安静；午后可能有雷阵雨。游客高峰季，请早到。' },
        { h2: '秋季（9–11 月）— 最均衡', body: '温暖舒适，摄影光线极佳。水量逐渐回升，相比夏季人流减少。' },
        { h2: '冬季（12–2 月）— 清静有雾', body: '最冷月份，有时有雾，但雨后瀑布气势十足。步道可能湿滑——穿合适的鞋、放慢脚步。' },
        { h2: '摄影贴士', body: '想拍水雾中的彩虹，选晴朗夏日的正午；想拍柔和光线与空旷观景台，选顶部边缘的日出或日落。' }
      ]
    }
  },
  'tickets': {
    ar: {
      kicker: 'التكاليف',
      h1: 'تذاكر شلالات أوزود ورسوم الدخول والقارب',
      desc: 'هل دخول شلالات أوزود مدفوع؟ الدخول، القارب، المواقف، المرشد وما قد تدفعه — تفصيل واضح للتكاليف.',
      intro: 'الخبر الجيد: لا توجد تذكرة لدخول الموقع الطبيعي نفسه. تدفع فقط للخدمات الاختيارية. إليك ما تتوقعه.',
      blocks: [
        { h2: 'دخول الموقع — مجاني', body: 'المشي على المسارات ومشاهدة الشلال من الحافة أو الوادي مجاني. لا يوجد بوّابة أو تذكرة دخول للمنطقة الطبيعية.' },
        { h2: 'القارب (اختياري)', body: 'رحلة قارب قصيرة عند قاعدة الشلال اختيارية ومدفوعة محلياً. تحدّد الأسعار جهات تشغيل محلية وقد تتغير حسب الموسم، لذا أكّد الأجرة قبل الركوب.' },
        { h2: 'المواقف', body: 'مواقف صغيرة مدفوعة قرب المداخل. اتفق على السعر قبل ترك السيارة؛ احتفظ بنقود مغربية صغيرة.' },
        { h2: 'المرشد (اختياري)', body: 'غير مطلوب للمسار الرئيسي، لكن مرشداً محلياً مفيد إن أردت شرحاً أو معرفة منبع الشلال أو مسارات أطول نحو إيمي نفري.' },
        { h2: 'الطعام والإضافات', body: 'المطاعم والمقاهي والتذكارات وزيت الزيتون مدفوعة بشكل منفصل. ضع ميزانية متواضعة لوجبة محلية وماء.' }
      ]
    },
    en: {
      kicker: 'Costs',
      h1: 'Ouzoud Waterfalls Tickets, Entry Fee & Boat Ride',
      desc: 'Is Ouzoud Waterfalls free? Entry, boat ride, parking, guide and what you might pay — a clear breakdown of costs at Ouzoud.',
      intro: 'Good news: there is no ticket to enter the natural site itself. You only pay for optional services. Here is what to expect.',
      blocks: [
        { h2: 'Entry to the site — free', body: 'Walking the trails and viewing the falls from the rim or the valley is free. There is no official gate or entry ticket for the natural area.' },
        { h2: 'Boat ride (optional)', body: 'A short boat trip at the base of the falls is optional and paid locally. Prices are set by local operators and can change by season, so confirm the fare before boarding.' },
        { h2: 'Parking', body: 'Small paid lots sit near the entrances. Agree the price before leaving your car; keep small Moroccan cash handy.' },
        { h2: 'Guide (optional)', body: 'Not required for the main path, but a local guide is useful if you want context, the source of the falls, or longer routes toward Imi Nfri.' },
        { h2: 'Food & extras', body: 'Restaurants, cafés, souvenirs and olive oil are paid separately. Budget a modest amount for a local meal and water.' }
      ]
    },
    fr: {
      kicker: 'Coûts',
      h1: 'Billets, entrée et barque aux cascades d’Ouzoud',
      desc: 'L’entrée aux cascades d’Ouzoud est-elle payante ? Entrée, barque, parking, guide et ce que vous pourriez payer — une explication claire.',
      intro: 'Bonne nouvelle : il n’y a pas de billet pour entrer dans le site naturel lui-même. Vous ne payez que les services optionnels. Voici à quoi vous attendre.',
      blocks: [
        { h2: 'Entrée du site — gratuite', body: "Marcher sur les sentiers et voir la chute depuis le bord ou la vallée est gratuit. Il n’y a pas de guichet ni de billet d’entrée pour la zone naturelle." },
        { h2: 'Barque (optionnelle)', body: "Une courte balade en barque au pied de la chute est optionnelle et payante localement. Les prix sont fixés par les opérateurs locaux et peuvent changer selon la saison ; confirmez le tarif avant d’embarquer." },
        { h2: 'Parking', body: "De petits parkings payants se trouvent près des entrées. Fixez le prix avant de laisser la voiture ; gardez de la petite monnaie." },
        { h2: 'Guide (optionnel)', body: "Non requis pour le sentier principal, mais un guide local est utile pour le contexte, la source de la chute ou des sentiers plus longs vers Imi Nfri." },
        { h2: 'Repas & extras', body: "Restaurants, cafés, souvenirs et huile d’olive se paient séparément. Prévoyez un budget modeste pour un repas local et de l’eau." }
      ]
    },
    zh: {
      kicker: '花费',
      h1: '橄榄树瀑布门票、入园费与乘船',
      desc: '橄榄树瀑布要门票吗？入园、乘船、停车、向导，以及你可能支付的费用——一份清晰的花费说明。',
      intro: '好消息：自然景区本身无需门票，只需为可选服务付费。以下是预期开销。',
      blocks: [
        { h2: '景区入园 — 免费', body: '沿步道行走、从边缘或谷底观赏瀑布均免费。自然区域没有门票闸口或入园票。' },
        { h2: '乘船（可选）', body: '瀑布底部的短途乘船为可选、当地付费项目。价格由当地运营方制定，可能随季节变动，登船前先确认价钱。' },
        { h2: '停车', body: '入口附近有小型收费停车场。离车前先讲好价；备好摩洛哥小额现金。' },
        { h2: '向导（可选）', body: '主步道非必需，但想要讲解、了解瀑布源头或前往伊米恩弗里的更长路线时，当地向导很有用。' },
        { h2: '餐饮与额外', body: '餐厅、咖啡馆、纪念品与橄榄油需另行付费。为当地餐食与饮水预留少量预算。' }
      ]
    }
  }
};

export const topicSlugs = Object.keys(topics);
