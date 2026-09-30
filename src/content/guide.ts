import type { Locale } from '../i18n';
import { frGuide } from './guide.fr';
import { zhGuide } from './guide.zh';

export interface Card {
  icon?: string;
  title: string;
  text: string;
}
export interface NamedCard {
  title: string;
  text: string;
}
export interface SeasonCard {
  title: string;
  month: string;
  items: string[];
}
export interface PairCard {
  items: { h: string; p: string }[];
}
export interface SourceBlock {
  title: string;
  text: string;
}

export interface Guide {
  nav: { href: string; label: string }[];
  hero: {
    kicker: string;
    title: [string, string];
    desc: string;
    badgeHeight: string;
    badgeFree: string;
    ratingNote: string;
  };
  about: {
    kicker: string;
    h2: string;
    p1: string;
    hierarchy: string;
    cards: Card[];
  };
  visit: { kicker: string; h2: string; p: string };
  transport: {
    kicker: string;
    h2: string;
    cards: Card[];
    mapTitle: string;
    cards2: Card[];
  };
  food: { kicker: string; h2: string; restaurants: NamedCard[] };
  nearby: { kicker: string; h2: string; p: string; cards: NamedCard[] };
  reviews: { kicker: string; h2: string; basedOn: string; syncNote: string; button: string };
  weather: { kicker: string; h2: string; note: string };
  history: { kicker: string; h2: string; paragraphs: string[]; cards: Card[] };
  seasons: {
    kicker: string;
    h2: string;
    intro: string;
    cards: SeasonCard[];
    analysisTitle: string;
    analysis: SourceBlock[];
  };
  services: { kicker: string; h2: string; intro: string; cards: Card[] };
  itineraries: {
    kicker: string;
    h2: string;
    audiences: { title: string; items: string[] }[];
    trips: NamedCard[];
  };
  responsibility: { kicker: string; h2: string; intro: string; cards: Card[] };
  costs: { kicker: string; h2: string; cards: PairCard[] };
  faq: { kicker: string; h2: string; items: [string, string][] };
  sources: { heading: string; paragraphs: string[] };
  footer: string;
  weatherI18n: {
    wmo: Record<number, { t: string; i: string }>;
    wday: string[];
    today: string;
    labels: {
      highLow: string;
      precip: string;
      wind: string;
      uv: string;
      forecast: string;
      loading: string;
      error: string;
      riskTitle: string;
      noRisk: string;
      outfit: string;
      play: string;
      items: string;
    };
    advice: {
      precipHighOutfit: string;
      precipHighPlay: string;
      precipHighItems: string;
      lightRainOutfit: string;
      lightRainItems: string;
      modRainRisk: string;
      modRainItems: string;
      heavyRainRisk: string;
      heavyRainItems: string;
      thunderRisk: string;
      rainPlay: string;
      hotOutfit: string;
      hotPlay: string;
      hotItems: string;
      uvOutfit: string;
      uvItems: string;
      tempDiffOutfit: string;
      coldOutfit: string;
      coldItems: string;
      windActiveOutfit: string;
      windActivePlay: string;
      windStrongRisk: string;
      clearOutfit: string;
      clearPlay: string;
      clearItems: string;
      cloudyOutfit: string;
      cloudyPlay: string;
      fogRisk: string;
      fogItems: string;
    };
  };
}

export const guides: Record<Locale, Guide> = {
  ar: {
    nav: [
      { href: '#about', label: 'عن أوزود' },
      { href: '#visit', label: 'الزيارة' },
      { href: '#transport', label: 'الوصول' },
      { href: '#food', label: 'الطعام' },
      { href: '#nearby', label: 'حول أوزود' },
      { href: '#reviews', label: 'التقييمات' },
      { href: '#weather', label: 'الطقس' },
      { href: '#faq', label: 'الأسئلة' }
    ],
    hero: {
      kicker: 'إقليم أزيلال · بني ملال خنيفرة',
      title: ['شلالات', 'أوزود'],
      desc: 'مياه تهبط عبر صخور حمراء ووادٍ مغطى بالزيتون؛ رحلة تتبدّل فيها المشاهد مع كل منعطف، من الحافة العليا إلى ضفة النهر.',
      badgeHeight: 'ارتفاع يقارب 110 م',
      badgeFree: 'الدخول للموقع الطبيعي مجاني',
      ratingNote: 'التقييم وعدد التقييمات مُزامَنان من تقييمات مستخدمي خرائط Google (Google Maps) · {sync} · اطّلع على جميع تقييمات خرائط Google ↗'
    },
    about: {
      kicker: 'عن الوجهة',
      h2: 'حول {name}',
      p1: 'أهلاً بك في <strong>{name}</strong>، المعروفة على نطاق واسع باسم <strong>{short}</strong>. تقع في قلب <strong>{city}</strong> بإقليم <strong>{province}</strong> في <strong>{country}</strong>، وتُعد وجهةً رئيسية للمسافرين إلى المنطقة.',
      hierarchy: '{name} ← {city} ← {province} ← {country}',
      cards: [
        { icon: '⏱', title: 'المدة المقترحة', text: '3–5 ساعات لزيارة مريحة تشمل النزول والعودة ووجبة.' },
        { icon: '☀', title: 'أفضل وقت', text: 'الصباح للهدوء، ومنتصف النهار لرؤية الضوء داخل رذاذ الشلال.' },
        { icon: '🎟', title: 'الدخول', text: 'الوصول إلى الموقع الطبيعي بلا تذكرة دخول؛ الخدمات الاختيارية مدفوعة.' },
        { icon: '🥾', title: 'المسار', text: 'درجة سهلة إلى متوسطة، لكن الانحدار والسطح المبتل يحتاجان انتباهاً.' }
      ]
    },
    visit: {
      kicker: 'الماء والواحة',
      h2: 'صخر أحمر، زيتون وماء أبيض',
      p: 'المشهد المميز هنا ليس الشلال وحده؛ اللون الطيني للجروف، النباتات على ضفتي الوادي، وصوت الماء يخلقون هوية بصرية مختلفة عن المدن المغربية.'
    },
    transport: {
      kicker: 'التنقل',
      h2: 'الموقع والوصول إلى {short} في {city}',
      cards: [
        { title: 'من مراكش', text: 'المسافة البرية تقارب 180 كم. تستغرق الرحلة عادةً نحو 2.5–3.5 ساعات بحسب الطريق والتوقفات. تتوفر رحلات يومية منظمة، وسيارات خاصة، ونقل مشترك.' },
        { title: 'بالسيارة', text: 'استخدم اتجاه Ouzoud / Azilal ثم اتبع اللافتات إلى منطقة الشلالات. الطرق الأخيرة جبلية نسبياً، فخفف السرعة خصوصاً بعد الغروب أو المطر.' },
        { title: 'مواقف السيارات', text: 'توجد مواقف خاصة قرب مداخل المسارات. رسوم المواقف تختلف حسب الموقع والموسم؛ اسأل عن السعر قبل ترك السيارة واحتفظ بنقود مغربية صغيرة.' }
      ],
      mapTitle: 'خريطة شلالات أوزود',
      cards2: [
        { title: '✈️ من مطار مراكش المنارة (RAK)', text: 'تبعد أوزود نحو 180 كم عن المطار. الخيارات: استئجار سيارة (الأكثر مرونة)، أو سيارة خاصة/تاكسي متفاوض عليه (~2.5–3.5 ساعة)، أو رحلة يومية منظّمة. الطريق يمر عبر أزيلال ثم ينعطف نحو القرية.' },
        { title: '🚌 النقل العام', text: 'حافلات بين المدن من مراكش إلى أزيلال أو بني ملال، ثم «تاكسي كبير» مشترك إلى أوزود. أوفر لكنه أطول وقتاً؛ تأكّد من مواعيد العودة مسبقاً.' },
        { title: '🚕 التاكسي', text: 'التاكسيات الكبيرة من أزيلال/بني ملال تقلّ الزوّار إلى بداية المسار. اتفق على السعر قبل الانطلاق، ويفضّل المشاركة مع ركاب آخرين لتقليل التكلفة.' },
        { title: '🚗 القيادة الذاتية', text: 'اتبّع اتجاه Ouzoud / Azilal. الطرق الأخيرة جبلية فخفّف السرعة، خصوصاً بعد الغروب أو المطر. مواقف المداخل مدفوعة.' }
      ]
    },
    food: {
      kicker: 'حول المائدة',
      h2: 'أكل محلي بعد المشي',
      restaurants: [
        { title: 'Chez Mounir', text: 'من الخيارات المعروفة قرب الشلال، ويقدم أطباقاً مغربية مناسبة لوجبة بعد النزول.' },
        { title: 'Restaurant Chez Rachid', text: 'مطعم قريب بخيارات مغربية ومتوسطية، مناسب لمن يريد وجبة سريعة قبل العودة.' },
        { title: 'La Table Berbere', text: 'خيار بطابع أمازيغي ومغربي، مع أجواء محلية قريبة من مسار الزيارة.' }
      ]
    },
    nearby: {
      kicker: 'قريب من الشلال',
      h2: 'معالم وأماكن حول {short}',
      p: 'عند زيارة <strong>{name}</strong>، يمكن للزوّار استكشاف المعالم التاريخية ونقاط الاهتمام المحيطة بسهولة، بما في ذلك <strong>{lm1}</strong> و<strong>{lm2}</strong>.',
      cards: [
        { title: 'مسارات الوادي والينابيع', text: 'بعد النقطة الرئيسية توجد ممرات أصغر ومشاهد للوادي والينابيع. اختر المسار وفق الوقت وحالة الأرض، ولا تدخل المقاطع الزلقة بعد المطر دون تجهيز مناسب.' },
        { title: 'إيمي نفري', text: 'الجسر الطبيعي قرب دمنات محطة منطقية لمن يملك سيارة ويخطط ليوم أطول في المنطقة، ويمكن دمجه مع أوزود قبل العودة نحو مراكش.' }
      ]
    },
    reviews: {
      kicker: 'التقييمات',
      h2: 'ماذا يقول زوّار {name}؟',
      basedOn: 'بناءً على {n} تقييماً',
      syncNote: 'مُزامَنة من تقييمات مستخدمي خرائط Google، وقت المزامنة {sync}؛ الحقوق تعود للكتّاب الأصليين وخرائط Google.',
      button: 'عرض جميع التقييمات على خرائط Google ↗'
    },
    weather: {
      kicker: 'الطقس الآن',
      h2: 'الطقس وتوقّعات 7 أيام في {short}',
      note: 'توقّعات الطقس لنقطة الشلال تُحدَّث تلقائياً عند فتح الصفحة. النصائح مبنية على حالة الطقس ولا تغني عن متابعة التنبيهات الرسمية.'
    },
    history: {
      kicker: 'أصل المكان',
      h2: 'تاريخ وحكايات شلالات أوزود',
      paragraphs: [
        'يُعدّ اسم «أوزود» مرتبطاً في اللغة الأمازيغية (البربرية) بالزيتون؛ فالوادي المُحيط بالشلالات تكسوه غابات الزيتون البرّي والتنوب، ما منح المكان اسمه وأعطاه طابعاً هادئاً مغايراً لضجيج المدن.',
        'تسقط المياه من ارتفاع يقارب 110 أمتار عبر صخور جيرية حمراء تعود لعصور جيولوجية قديمة، لتصبّ في وادي العابد (وادي أوزود) وتشكّل واحدةً من أشهر وأعلى شلالات المغرب وشمال إفريقيا.',
        'ينبع نهر أوزود (<strong>منبع شلالات أوزود</strong>) من ينابيع جبلية قرب دمنات، فيتجمّع الماء ويتدفّق عبر الوادي قبل الهبوط على الجرف الأحمر؛ وهو ما يفسّر غزارة الجريان خاصة في الربيع بعد ذوبان ثلوج الأطلس.',
        'حوّلت القبائل الأمازيغية في منطقة أزيلال الوادي عبر القرون إلى أرض زراعية مدرّجة حيث الزيتون والحبوب، وسط تقاليد ضيافة مغربية أصيلة ما زالت حيّة في القرية حتى اليوم.',
        'من الحكايات المحلية أن رذاذ الشلال يُطلق قوس قزح عند منتصف النهار في أيام الصيف الصافية، وأن المكان كان ولا يزال محطة استراحة باردة للقوافل والمسافرين قبل صعود الهضاب المجاورة.'
      ],
      cards: [
        { icon: '🏞', title: 'ارتفاع يقارب 110 م', text: 'ثلاثة مستويات متتالية من السقوط تجعل المشهد متعدد الطبقات.' },
        { icon: '🌿', title: 'محمية طبيعية', text: 'الوادي موطن لقرود المكاك البربري وأشجار الزيتون البرّي والطيور.' },
        { icon: '🪨', title: 'صخور حمراء', text: 'الجروف الطينية الملوّنة جزء من هوية المكان البصرية.' }
      ]
    },
    seasons: {
      kicker: 'متى تزور',
      h2: 'استراتيجية الزيارة حسب الفصول',
      intro: 'مناخ أوزود جبلي متوسطي: صيف حار وجاف نسبياً، شتاء بارد ورطب، وربيع يشهد ذروة جريان المياه بعد ذوبان ثلوج الأطلس. فيما يلي مقارنة مبسّطة تجمع الطقس والمياه والحياة البرية.',
      cards: [
        { title: 'الربيع', month: 'مارس – مايو', items: ['أقوى جريان للمياه بعد ذوبان الثلوج.', 'خضرة كثيفة وأزهار برّية.', 'حرارة لطيفة 15–25°م.', 'ازدحام معتدل في عطلة نهاية الأسبوع.'] },
        { title: 'الصيف', month: 'يونيو – أغسطس', items: ['حرارة مرتفعة 30–38°م.', 'جريان أقل لكنه مستمر.', 'ذروة الزوّار؛ يُفضّل الصباح الباكر.', 'احتمال عواصف رعدية بعد الظهر.'] },
        { title: 'الخريف', month: 'سبتمبر – نوفمبر', items: ['حرارة معتدلة ومريحة.', 'تعافي منسوب المياه تدريجياً.', 'إضاءة ممتازة للتصوير.', 'زحام أقل من الصيف.'] },
        { title: 'الشتاء', month: 'ديسمبر – فبراير', items: ['أبرد أشهر وربما ضباب.', 'أقوى انسياب بعد الأمطار.', 'مسارات زلقة بحذر.', 'أقل الزوّار ازدحاماً.'] }
      ],
      analysisTitle: 'تحليل شامل: الطقس والمياه والحياة البرية',
      analysis: [
        { title: 'الطقس', text: 'مناخ جبلي متوسطي بفارق حراري كبير بين النهار والليل. الصيف حار والشتاء بارد ورطب؛ الأمطار تتركز شتاءً وربيعاً، وقد يصاحبها رعد محلي.' },
        { title: 'نوعية المياه', text: 'الشلال يُغذّى من ينابيع وذوبان ثلوج الأطلس. المياه عذبة بطبيعتها لكنها تُصبح عكرة بعد الأمطار الغزيرة؛ يُنصح بالسباحة فقط في البرك الآمنة المحدّدة محلياً.' },
        { title: 'الحياة البرية', text: 'يُشاهد المكاك البربري حول الوادي، إضافة إلى طيور جارحة وأنواع مرتبطة بغابات الزيتون. لا تُطعم القرود ولا تقترب منها؛ حافظ على مسافة آمنة.' }
      ]
    },
    services: {
      kicker: 'خدمات الزوار',
      h2: 'المرافق المحيطة بالشلال',
      intro: 'نورد أدناه أنواع المرافق المتوفّرة قرب أوزود بصفة عامة، دون ترشيح جهة بعينها، لتبقى المعلومة محايدة ومفيدة لكل زائر.',
      cards: [
        { icon: '🚻', title: 'دورات المياه', text: 'متوفّرة قرب مداخل المسارات الرئيسية؛ قد تُطلب رسوم رمزية للصيانة.' },
        { icon: '🅿️', title: 'مواقف السيارات', text: 'مواقف مدفوعة صغيرة قرب القرية؛ تمتلئ مبكّراً في عطلة نهاية الأسبوع.' },
        { icon: '🍽', title: 'مطاعم ومقاهٍ', text: 'محال محلية تقدّم أطباقاً مغربية وأمازيغية (طاجين، شاي نعناع، عصير برتقال). اختر بحسب النظافة والسعر.' },
        { icon: '🛏', title: 'إقامة', text: 'بيوت ضيافة وفنادق صغيرة في القرية وبلدة أزيلال؛ احجز مبكّراً في الصيف.' },
        { icon: '🛒', title: 'متاجر وتموين', text: 'دكاكين صغيرة للهدايا التذكارية والمؤونة: ماء، وجبات خفيفة، زيت الزيتون المحلي والحرف اليدوية.' },
        { icon: '⛽', title: 'وقود وشحن', text: 'محطات وقود في أزيلال وعلى الطرق الرئيسية؛ شحن السيارات الكهربائية نادر فخطّط له مسبقاً.' }
      ]
    },
    itineraries: {
      kicker: 'خطط زيارتك',
      h2: 'مسارات حسب نوع الزوّار',
      audiences: [
        { title: '👨‍👩‍👧 عائلات مع أطفال', items: ['ابدأ من الشرفة العلوية الآمنة للأطفال.', 'تجنّب النزول شديد الانحدار أو استخدم الدرج بحذر.', 'راقب القرود من بعيد دون إطعامها.', 'خصّص نزهة قصيرة قرب المطاعم.'] },
        { title: '📷 مصوّرو الطبيعة', items: ['الذروة: شروق وغروب الشمس عند الحافة العليا.', 'لقطة قوس القزح داخل الرذاذ عند منتصف النهار صيفاً.', 'المنصة السفلية لالتقاط الشلال كاملاً.', 'مدرّجات الزيتون خلفية رائعة.'] },
        { title: '♿ حركة محدودة', items: ['الشرفة العلوية قابلة للوصول بانحدار لطيف.', 'تجنّب درج النزول إلى القاعدة.', 'مقاعد راحة متوفّرة على المسار العلوي.', 'خطّط لزيارة قصيرة ومريحة.'] }
      ],
      trips: [
        { title: 'نصف يوم', text: 'الوصول صباحاً → مشي خفيف عند الحافة العليا → صورة بانورامية → وجبة محلية هادئة → المغادرة قبل الظهيرة الحارة.' },
        { title: 'يوم كامل', text: 'نزول إلى القاعدة + جولة بالقارب الاختيارية → غداء → تمديد إلى الجسر الطبيعي (إيمي نفري) أو بلدة أزيلال إن توفّر الوقت.' }
      ]
    },
    responsibility: {
      kicker: 'النفع العام',
      h2: 'سياحة مسؤولة وتوعية',
      intro: 'بصفتها موقعاً طبيعياً مشتركاً، تبقى أوزود جميلة بفضل زوّارها. هذه توجيهات بسيطة لزيارة آمنة لا تترك أثراً:',
      cards: [
        { icon: '🌳', title: 'لا تطعم القرود', text: 'الإطعام يُفسد سلوك الحيوان ويقرّبها من الخطر؛ راقبها من بعيد.' },
        { icon: '🥾', title: 'ابقَ على المسارات', text: 'لا تقترب من حافة الشلال أو المسارات الزلقة بعد المطر دون احتياطات.' },
        { icon: '🚯', title: 'لا نفايات', text: 'أعد ما جلبته معك؛ لا تترك أكياساً أو عبوات في الوادي.' },
        { icon: '💧', title: 'الأمان المائي', text: 'لا تسبح قرب الشلال مباشرة؛ استخدم المناطق الآمنة فقط عند توفّرها.' },
        { icon: '🕌', title: 'احترم العادات', text: 'البس لباساً محتشماً عند المرور بالقرية؛ تصوّر باحترام للسكّان.' },
        { icon: '🤝', title: 'دعم محلي', text: 'شراء منتجات محلية وحرف يدوية يساند المجتمع المحيط بالموقع.' }
      ]
    },
    costs: {
      kicker: 'التكاليف العملية',
      h2: 'ماذا قد تدفع؟',
      cards: [
        { items: [
          { h: 'تذكرة الدخول', p: 'لا توجد عادةً تذكرة للموقع الطبيعي نفسه.' },
          { h: 'القارب', p: 'اختياري ويُدفع محلياً؛ الأسعار قد تتغير حسب الموسم والتشغيل.' }
        ] },
        { items: [
          { h: 'موقف السيارة', p: 'مواقف مدفوعة صغيرة قرب المداخل؛ اتفق على السعر مسبقاً.' },
          { h: 'المرشد', p: 'ليس إلزامياً للمسار الرئيسي، لكنه مفيد لمن يريد شرحاً محلياً ومسارات أطول.' }
        ] }
      ]
    },
    faq: {
      kicker: 'FAQ',
      h2: 'أسئلة شائعة',
      items: [
        ['أين تقع شلالات أوزود؟', 'تقع شلالات أوزود في قرية أوزود بإقليم أزيلال، ضمن جهة بني ملال خنيفرة في المغرب، على بُعد نحو 180 كم من مراكش.'],
        ['هل دخول شلالات أوزود مجاني؟', 'الوصول إلى الموقع الطبيعي نفسه مجاني عادةً، بينما تُدفع خدمات اختيارية مثل مواقف السيارات والقوارب والمرشدين والطعام بشكل منفصل.'],
        ['كم من الوقت أحتاج للزيارة؟', 'خصص ما بين 3 و5 ساعات للمشي والنزول إلى أسفل الشلال والتوقف عند نقاط المشاهدة وتناول وجبة بهدوء.'],
        ['ما أفضل وقت خلال اليوم؟', 'الصباح الباكر أهدأ عادةً، بينما قد تُظهر شمس الظهيرة أقواس قزح داخل رذاذ الشلال. تجنب الأحذية الملساء بعد المطر.'],
        ['هل يمكن الوصول بالسيارة؟', 'نعم، تصل الطرق إلى قرية أوزود ثم تكمل سيراً على الأقدام عبر المسارات المؤدية إلى نقاط المشاهدة وقاع الوادي.'],
        ['هل توجد قرود في المنطقة؟', 'تُشاهد قرود المكاك البربري أحياناً في المنطقة. الأفضل عدم إطعامها أو الاقتراب منها بشكل يزعجها.'],
        ['ما أهمية شلالات أوزود؟', 'تُعد شلالات أوزود من أشهر الوجهات الطبيعية في المغرب، وتتميز بارتفاع يقارب 110 م وبيئة وادٍ مغطاة بأشجار الزيتون حول ضفتي الوادي.']
      ]
    },
    sources: {
      heading: 'مصادر ومراجع',
      paragraphs: [
        '<strong>التقييمات · وقت المزامنة {sync}:</strong> مُزامَنة من تقييمات مستخدمي خرائط Google، وقت المزامنة {sync}؛ الحقوق تعود للكتّاب الأصليين وخرائط Google. <a href="{maps}" target="_blank" rel="noopener noreferrer" class="text-[var(--clay)] underline">عرض جميع التقييمات على خرائط Google ↗</a>',
        '<strong>مصادر الصور:</strong> صور حقيقية لشلالات أوزود من Wikimedia Commons، منها أعمال Jakub Hałun وKasmii، وتُعرض وفق تراخيصها المفتوحة.',
        '<strong>السياحة الرسمية:</strong> للاطلاع على التحديثات والنصائح الإقليمية، زُر <a href="{tourism}" target="_blank" rel="noopener noreferrer" class="text-[var(--clay)] underline">البوابة السياحية الرسمية للمغرب (Visit Morocco) ↗</a>.',
        'المعلومات العملية جُمعت من خرائط Google ومصادر سفر محلية وعامة؛ الأسعار والخدمات الاختيارية قد تتغير.'
      ]
    },
    footer: 'هذا موقع إرشادي مستقل وغير رسمي، ولا يمثل إدارة شلالات أوزود أو أي جهة حكومية أو تجارية.',
    weatherI18n: {
      wmo: {
        0: { t: 'صافٍ', i: '☀️' }, 1: { t: 'صافٍ غالباً', i: '🌤️' }, 2: { t: 'غائم جزئياً', i: '⛅' }, 3: { t: 'غائم', i: '☁️' },
        45: { t: 'ضباب', i: '🌫️' }, 48: { t: 'ضباب', i: '🌫️' },
        51: { t: 'رذاذ', i: '🌦️' }, 53: { t: 'رذاذ', i: '🌦️' }, 55: { t: 'رذاذ', i: '🌦️' }, 56: { t: 'رذاذ متجمّد', i: '🌧️' }, 57: { t: 'رذاذ متجمّد', i: '🌧️' },
        61: { t: 'مطر خفيف', i: '🌦️' }, 63: { t: 'مطر متوسط', i: '🌧️' }, 65: { t: 'مطر غزير', i: '🌧️' },
        66: { t: 'مطر متجمّد', i: '🌧️' }, 67: { t: 'مطر متجمّد', i: '🌧️' },
        71: { t: 'ثلج', i: '❄️' }, 73: { t: 'ثلج', i: '❄️' }, 75: { t: 'ثلج', i: '❄️' }, 77: { t: 'حبيبات ثلج', i: '🌨️' },
        80: { t: 'زخات مطر خفيفة', i: '🌦️' }, 81: { t: 'زخات مطر', i: '🌧️' }, 82: { t: 'زخات مطر غزيرة', i: '🌧️' },
        85: { t: 'زخات ثلج', i: '🌨️' }, 86: { t: 'زخات ثلج', i: '🌨️' },
        95: { t: 'عاصفة رعدية', i: '⛈️' }, 96: { t: 'عاصفة رعدية مع بَرَد', i: '⛈️' }, 99: { t: 'عاصفة رعدية مع بَرَد', i: '⛈️' }
      },
      wday: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
      today: 'اليوم',
      labels: {
        highLow: 'العظمى / الصغرى', precip: 'احتمال المطر', wind: 'الرياح', uv: 'الأشعة UV',
        forecast: 'توقّعات 7 أيام', loading: 'جارٍ تحميل الطقس…', error: 'تعذّر تحميل الطقس الآن. جرّب لاحقاً أو تحقّق من اتصالك بالإنترنت.',
        riskTitle: '⚠️ تنبيهات جوية', noRisk: '✅ لا توجد تنبيهات جوية خطيرة حالياً.',
        outfit: '👕 ملابس مقترحة', play: '🗺 ترتيب الزيارة', items: '🎒 أغراض تصطحبها'
      },
      advice: {
        precipHighOutfit: 'احتمال المطر مرتفع اليوم؛ يُفضّل اصطحاب مظلّة أو معطف مطر، وقدّم الزيارات الداخلية إن أمكن.',
        precipHighPlay: 'مع احتمال المطر القوي، أجّل النزول إلى الوادي وصعود المسارات المنحدرة.',
        precipHighItems: 'مظلّة أو معطف مطر',
        lightRainOutfit: 'أمطار خفيفة والأرض زلقة؛ تمشَّ بخطوات حذرة والتجارب المكشوفة أقل متعة.',
        lightRainItems: 'مظلّة قابلة للطي',
        modRainRisk: 'أمطار متوسطة: تجنّب أودية المياه والأحواض المنخفضة؛ القوارب قد تتوقف.',
        modRainItems: 'معطف مطر (تجنّب المظلّة الطويلة مع الرياح)',
        heavyRainRisk: 'أمطار غزيرة: لا تقترب من حافة الشلال أو مجاري المياه الجارية؛ الأنشطة النهرية متوقفة.',
        heavyRainItems: 'معطف مطر مقاوم',
        thunderRisk: 'احذر الرعد والبرق: لا تصعد الجبل ولا تسبح ولا تقف تحت الأشجار عند المطر؛ الأنشطة المائية متوقفة غالباً.',
        rainPlay: 'عند المطر يرتفع منسوب مياه الوادي بسرعة؛ لا تقترب من حافة الشلال أو مجاري المياه الجارية، ولا تسبح دون التأكد من الأمان.',
        hotOutfit: 'الحرارة مرتفعة؛ تجنّب الخروج وقت الظهيرة واختر ملابس خفيفة.',
        hotPlay: 'قصّر وقت المشي تحت الشمس واسترح في الظل.',
        hotItems: 'واقٍ شمسي، ماء كافٍ، أدوات تبريد',
        uvOutfit: 'الأشعة فوق البنفسجية قوية؛ احمِ بشرتك وعينيك.',
        uvItems: 'كريم واقٍ، نظارة شمسية، قبعة',
        tempDiffOutfit: 'فارق الحرارة بين النهار والليل كبير؛ احمل طبقة إضافية تلبسها وتخلعها بسهولة.',
        coldOutfit: 'الحرارة منخفضة؛ دفّئ جيداً وتجنّب البقاء طويلاً تحت الماء المتساقط.',
        coldItems: 'معطف سميك، وشاح',
        windActiveOutfit: 'الرياح نشطة؛ القبعة قد تطير فتجنّب الثياب الواسعة.',
        windActivePlay: 'رحلات البحر والأنشطة المكشوفة قد تتوقف مؤقتاً.',
        windStrongRisk: 'رياح قوية: ابتعد عن اللوحات الإعلانية وصخور الوادي؛ الأنشطة النهرية متوقفة غالباً.',
        clearOutfit: 'الطقس صافٍ ومناسب للتنزّه الخارجي.',
        clearPlay: 'وقت جيد لمشاهدة شروق أو غروب الشلال فوق الوادي.',
        clearItems: 'لا تنسَ واقي الشمس',
        cloudyOutfit: 'الضوء ناعم ومناسب جداً للتصوير، بلا حرارة حارقة.',
        cloudyPlay: 'مناسب للمشي الطويل حول الوادي والمدرّجات.',
        fogRisk: 'الرؤية ضعيفة؛ المسارات الزلقة والجسور أصعب والرحلات قد تتأخر.',
        fogItems: 'كن حذراً على الدرجات والحواف'
      }
    }
  },

  en: {
    nav: [
      { href: '#about', label: 'About' },
      { href: '#visit', label: 'The falls' },
      { href: '#transport', label: 'Getting there' },
      { href: '#food', label: 'Food' },
      { href: '#nearby', label: 'Around' },
      { href: '#reviews', label: 'Reviews' },
      { href: '#weather', label: 'Weather' },
      { href: '#faq', label: 'FAQ' }
    ],
    hero: {
      kicker: 'Azilal Province · Béni Mellal-Khénifra',
      title: ['Ouzoud', 'Waterfalls'],
      desc: 'Water tumbling over red rock and an olive-clad valley; a walk where the view changes at every turn, from the upper rim down to the riverbank.',
      badgeHeight: 'Around 110 m high',
      badgeFree: 'Natural site entry is free',
      ratingNote: 'Rating and review count synced from Google Maps user reviews · {sync} · See all Google Maps reviews ↗'
    },
    about: {
      kicker: 'About the place',
      h2: 'About {name}',
      p1: 'Welcome to <strong>{name}</strong>, widely known as <strong>{short}</strong>. It sits in the heart of <strong>{city}</strong>, Azilal Province, in <strong>{country}</strong>, and is a leading destination for travellers to the region.',
      hierarchy: '{name} ← {city} ← {province} ← {country}',
      cards: [
        { icon: '⏱', title: 'Suggested duration', text: '3–5 hours for a relaxed visit including the descent, return and a meal.' },
        { icon: '☀', title: 'Best time', text: 'Mornings are calmest; midday light catches the spray inside the falls.' },
        { icon: '🎟', title: 'Entry', text: 'The natural site has no entry ticket; optional services are paid.' },
        { icon: '🥾', title: 'Trail', text: 'Easy to moderate, but the slope and wet surface need attention.' }
      ]
    },
    visit: {
      kicker: 'Water & oasis',
      h2: 'Red rock, olive trees and white water',
      p: 'The signature here is not just the falls; the clay colour of the cliffs, the vegetation along both banks and the sound of the water create a visual identity unlike Morocco’s cities.'
    },
    transport: {
      kicker: 'Getting around',
      h2: 'Location and access to {short} in {city}',
      cards: [
        { title: 'From Marrakech', text: 'The overland distance is about 180 km. The trip usually takes around 2.5–3.5 hours depending on the road and stops. Organised day trips, private cars and shared transport are available.' },
        { title: 'By car', text: 'Head for Ouzoud / Azilal and follow signs to the falls area. The final roads are fairly mountainous, so slow down especially after sunset or rain.' },
        { title: 'Parking', text: 'Private lots sit near the trail entrances. Fees vary by location and season; ask the price before leaving the car and keep small Moroccan cash.' }
      ],
      mapTitle: 'Map of Ouzoud Waterfalls',
      cards2: [
        { title: '✈️ From Marrakech Menara Airport (RAK)', text: 'Ouzoud is about 180 km from the airport. Options: rent a car (most flexible), a private car/negotiated taxi (~2.5–3.5 hours), or an organised day trip. The road passes through Azilal then turns toward the village.' },
        { title: '🚌 Public transport', text: 'Intercity buses from Marrakech to Azilal or Béni Mellal, then a shared "grand taxi" to Ouzoud. Cheapest but longest; confirm return times in advance.' },
        { title: '🚕 Taxi', text: 'Grand taxis from Azilal/Béni Mellal take visitors to the start of the trail. Agree the price before leaving, and share with other passengers to lower the cost.' },
        { title: '🚗 Self-driving', text: 'Follow Ouzoud / Azilal. The final roads are mountainous so slow down, especially after sunset or rain. Entrance parking is paid.' }
      ]
    },
    food: {
      kicker: 'At the table',
      h2: 'Local food after the walk',
      restaurants: [
        { title: 'Chez Mounir', text: 'A well-known option near the falls, serving Moroccan dishes suited to a post-descent meal.' },
        { title: 'Restaurant Chez Rachid', text: 'A nearby restaurant with Moroccan and Mediterranean options, good for a quick meal before heading back.' },
        { title: 'La Table Berbere', text: 'An Amazigh and Moroccan option with a local atmosphere close to the visit route.' }
      ]
    },
    nearby: {
      kicker: 'Near the falls',
      h2: 'Sights and places around {short}',
      p: 'When visiting <strong>{name}</strong>, travellers can easily explore the surrounding historic landmarks and points of interest, including <strong>{lm1}</strong> and <strong>{lm2}</strong>.',
      cards: [
        { title: 'Valley trails and springs', text: 'Beyond the main viewpoint there are smaller paths and valley and spring scenery. Choose a path by time and ground conditions, and avoid slippery sections after rain without proper gear.' },
        { title: 'Imi Nfri', text: 'The natural bridge near Demnate is a logical stop for those with a car planning a longer day in the area, and can be combined with Ouzoud before returning toward Marrakech.' }
      ]
    },
    reviews: {
      kicker: 'Reviews',
      h2: 'What visitors say about {name}?',
      basedOn: 'Based on {n} reviews',
      syncNote: 'Synced from Google Maps user reviews, sync time {sync}; rights belong to the original authors and Google Maps.',
      button: 'See all reviews on Google Maps ↗'
    },
    weather: {
      kicker: 'Weather now',
      h2: 'Weather and 7-day forecast in {short}',
      note: 'Forecasts for the falls point update automatically when the page opens. Tips are based on weather conditions and do not replace official alerts.'
    },
    history: {
      kicker: 'Origins',
      h2: 'History and tales of Ouzoud Waterfalls',
      paragraphs: [
        'The name "Ouzoud" is linked in Amazigh (Berber) to the olive; the valley around the falls is covered with wild olive and pine forests, giving the place its name and a calm character unlike the noise of cities.',
        'Water drops from about 110 metres over red limestone cliffs from ancient geological eras, pouring into the Oued El Abid (Ouzoud valley) and forming one of the most famous and tallest waterfalls in Morocco and North Africa.',
        'The Ouzoud river (<strong>source of Ouzoud Waterfalls</strong>) rises from mountain springs near Demnate, gathering and flowing through the valley before dropping over the red cliff; this explains the strong flow especially in spring after the Atlas snowmelt.',
        'Amazigh tribes in the Azilal region turned the valley over the centuries into terraced farmland of olives and grains, within authentic Moroccan hospitality traditions still alive in the village today.',
        'A local tale says the falls’ spray releases a rainbow at midday on clear summer days, and that the place has long been a cool rest stop for caravans and travellers before climbing the nearby plateaus.'
      ],
      cards: [
        { icon: '🏞', title: 'Around 110 m high', text: 'Three successive drop levels make the scene multi-layered.' },
        { icon: '🌿', title: 'Natural reserve', text: 'The valley is home to Barbary macaques, wild olive trees and birds.' },
        { icon: '🪨', title: 'Red rock', text: 'The coloured clay cliffs are part of the place’s visual identity.' }
      ]
    },
    seasons: {
      kicker: 'When to visit',
      h2: 'Season-by-season visit strategy',
      intro: 'Ouzoud has a mountain Mediterranean climate: hot and relatively dry summer, cold and humid winter, and a spring that sees peak flow after the Atlas snowmelt. Below is a simplified comparison of weather, water and wildlife.',
      cards: [
        { title: 'Spring', month: 'March – May', items: ['Strongest flow after snowmelt.', 'Dense greenery and wildflowers.', 'Mild 15–25°C.', 'Moderate weekend crowds.'] },
        { title: 'Summer', month: 'June – August', items: ['High heat 30–38°C.', 'Less flow but continuous.', 'Peak visitors; mornings best.', 'Possible afternoon thunderstorms.'] },
        { title: 'Autumn', month: 'September – November', items: ['Mild and comfortable.', 'Water level recovers gradually.', 'Excellent light for photos.', 'Less crowded than summer.'] },
        { title: 'Winter', month: 'December – February', items: ['Coldest months, maybe fog.', 'Strongest flow after rain.', 'Slippery trails, take care.', 'Fewest crowds.'] }
      ],
      analysisTitle: 'Full analysis: weather, water and wildlife',
      analysis: [
        { title: 'Weather', text: 'Mountain Mediterranean climate with a large day–night temperature swing. Summer is hot, winter cold and humid; rain concentrates in winter and spring, sometimes with local thunder.' },
        { title: 'Water quality', text: 'The falls are fed by springs and Atlas snowmelt. Water is naturally fresh but turns cloudy after heavy rain; swim only in the safe pools designated locally.' },
        { title: 'Wildlife', text: 'Barbary macaques are seen around the valley, plus birds of prey and species linked to olive forests. Do not feed or approach the monkeys; keep a safe distance.' }
      ]
    },
    services: {
      kicker: 'Visitor services',
      h2: 'Facilities around the falls',
      intro: 'Below are the types of facilities generally available near Ouzoud, without recommending any specific party, to keep the information neutral and useful for every visitor.',
      cards: [
        { icon: '🚻', title: 'Toilets', text: 'Available near the main trail entrances; a small maintenance fee may be asked.' },
        { icon: '🅿️', title: 'Parking', text: 'Small paid lots near the village; fill up early on weekends.' },
        { icon: '🍽', title: 'Restaurants & cafés', text: 'Local places serve Moroccan and Amazigh dishes (tagine, mint tea, orange juice). Choose by cleanliness and price.' },
        { icon: '🛏', title: 'Accommodation', text: 'Guesthouses and small hotels in the village and Azilal town; book early in summer.' },
        { icon: '🛒', title: 'Shops & supplies', text: 'Small shops for souvenirs and supplies: water, snacks, local olive oil and handicrafts.' },
        { icon: '⛽', title: 'Fuel & charging', text: 'Fuel stations in Azilal and on main roads; EV charging is rare, so plan ahead.' }
      ]
    },
    itineraries: {
      kicker: 'Plan your visit',
      h2: 'Routes by visitor type',
      audiences: [
        { title: '👨‍👩‍👧 Families with children', items: ['Start at the safe upper terrace for kids.', 'Avoid the steep descent or use stairs with care.', 'Watch monkeys from afar, do not feed them.', 'Plan a short picnic near the restaurants.'] },
        { title: '📷 Nature photographers', items: ['Peak: sunrise and sunset at the upper rim.', 'Rainbow-in-spray shot at midday in summer.', 'Lower platform to capture the full falls.', 'Olive terraces make a great backdrop.'] },
        { title: '♿ Limited mobility', items: ['Upper terrace reachable with a gentle slope.', 'Avoid the stairs down to the base.', 'Rest seats available on the upper trail.', 'Plan a short, comfortable visit.'] }
      ],
      trips: [
        { title: 'Half day', text: 'Arrive morning → light walk at the upper rim → panoramic photo → calm local meal → leave before the hot midday.' },
        { title: 'Full day', text: 'Descent to the base + optional boat ride → lunch → extend to the natural bridge (Imi Nfri) or Azilal town if time allows.' }
      ]
    },
    responsibility: {
      kicker: 'Public good',
      h2: 'Responsible tourism & awareness',
      intro: 'As a shared natural site, Ouzoud stays beautiful thanks to its visitors. These are simple tips for a safe, leave-no-trace visit:',
      cards: [
        { icon: '🌳', title: 'Do not feed monkeys', text: 'Feeding spoils animal behaviour and brings them near danger; watch from afar.' },
        { icon: '🥾', title: 'Stay on trails', text: 'Do not approach the falls edge or slippery paths after rain without precautions.' },
        { icon: '🚯', title: 'No litter', text: 'Take back what you brought; leave no bags or bottles in the valley.' },
        { icon: '💧', title: 'Water safety', text: 'Do not swim right at the falls; use only the safe areas when available.' },
        { icon: '🕌', title: 'Respect customs', text: 'Dress modestly when passing through the village; photograph residents respectfully.' },
        { icon: '🤝', title: 'Support local', text: 'Buying local products and handicrafts supports the community around the site.' }
      ]
    },
    costs: {
      kicker: 'Practical costs',
      h2: 'What might you pay?',
      cards: [
        { items: [
          { h: 'Entry ticket', p: 'Usually no ticket for the natural site itself.' },
          { h: 'Boat', p: 'Optional and paid locally; prices may change by season and operation.' }
        ] },
        { items: [
          { h: 'Parking', p: 'Small paid lots near entrances; agree the price in advance.' },
          { h: 'Guide', p: 'Not required for the main trail, but useful for local explanation and longer paths.' }
        ] }
      ]
    },
    faq: {
      kicker: 'FAQ',
      h2: 'Frequently asked questions',
      items: [
        ['Where are Ouzoud Waterfalls?', 'Ouzoud Waterfalls are in Ouzoud village, Azilal Province, in the Béni Mellal-Khénifra region of Morocco, about 180 km from Marrakech.'],
        ['Is entry to Ouzoud Waterfalls free?', 'Access to the natural site itself is usually free, while optional services such as parking, boats, guides and food are paid separately.'],
        ['How long do I need for a visit?', 'Allow 3 to 5 hours for walking, descending to the base of the falls, stopping at viewpoints and having a calm meal.'],
        ['What is the best time of day?', 'Early morning is usually calmest, while midday sun may show a rainbow inside the falls’ spray. Avoid smooth shoes after rain.'],
        ['Can you reach it by car?', 'Yes, roads reach Ouzoud village then continue on foot via trails to the viewpoints and the valley base.'],
        ['Are there monkeys in the area?', 'Barbary macaques are sometimes seen in the area. Best not to feed or approach them in a way that disturbs them.'],
        ['Why are Ouzoud Waterfalls important?', 'They are among Morocco’s most famous natural destinations, about 110 m high, with an olive-clad valley environment along both banks of the river.']
      ]
    },
    sources: {
      heading: 'Sources & references',
      paragraphs: [
        '<strong>Reviews · sync time {sync}:</strong> Synced from Google Maps user reviews, sync time {sync}; rights belong to the original authors and Google Maps. <a href="{maps}" target="_blank" rel="noopener noreferrer" class="text-[var(--clay)] underline">See all reviews on Google Maps ↗</a>',
        '<strong>Image sources:</strong> Real photos of Ouzoud Waterfalls from Wikimedia Commons, including works by Jakub Hałun and Kasmii, shown under their open licences.',
        '<strong>Official tourism:</strong> For updates and regional tips, visit <a href="{tourism}" target="_blank" rel="noopener noreferrer" class="text-[var(--clay)] underline">the official Morocco tourism portal (Visit Morocco) ↗</a>.',
        'Practical information was gathered from Google Maps and local and general travel sources; prices and optional services may change.'
      ]
    },
    footer: 'This is an independent, unofficial guide site and does not represent the management of Ouzoud Waterfalls or any government or commercial entity.',
    weatherI18n: {
      wmo: {
        0: { t: 'Clear', i: '☀️' }, 1: { t: 'Mostly clear', i: '🌤️' }, 2: { t: 'Partly cloudy', i: '⛅' }, 3: { t: 'Overcast', i: '☁️' },
        45: { t: 'Fog', i: '🌫️' }, 48: { t: 'Fog', i: '🌫️' },
        51: { t: 'Drizzle', i: '🌦️' }, 53: { t: 'Drizzle', i: '🌦️' }, 55: { t: 'Drizzle', i: '🌦️' }, 56: { t: 'Freezing drizzle', i: '🌧️' }, 57: { t: 'Freezing drizzle', i: '🌧️' },
        61: { t: 'Light rain', i: '🌦️' }, 63: { t: 'Moderate rain', i: '🌧️' }, 65: { t: 'Heavy rain', i: '🌧️' },
        66: { t: 'Freezing rain', i: '🌧️' }, 67: { t: 'Freezing rain', i: '🌧️' },
        71: { t: 'Snow', i: '❄️' }, 73: { t: 'Snow', i: '❄️' }, 75: { t: 'Snow', i: '❄️' }, 77: { t: 'Snow grains', i: '🌨️' },
        80: { t: 'Rain showers', i: '🌦️' }, 81: { t: 'Rain showers', i: '🌧️' }, 82: { t: 'Violent rain showers', i: '🌧️' },
        85: { t: 'Snow showers', i: '🌨️' }, 86: { t: 'Snow showers', i: '🌨️' },
        95: { t: 'Thunderstorm', i: '⛈️' }, 96: { t: 'Thunderstorm with hail', i: '⛈️' }, 99: { t: 'Thunderstorm with hail', i: '⛈️' }
      },
      wday: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      today: 'Today',
      labels: {
        highLow: 'High / Low', precip: 'Rain chance', wind: 'Wind', uv: 'UV',
        forecast: '7-day forecast', loading: 'Loading weather…', error: 'Could not load weather now. Try later or check your connection.',
        riskTitle: '⚠️ Weather alerts', noRisk: '✅ No severe weather alerts at the moment.',
        outfit: '👕 Suggested clothing', play: '🗺 Visit plan', items: '🎒 Things to bring'
      },
      advice: {
        precipHighOutfit: 'High rain chance today; bring an umbrella or raincoat, and prefer indoor visits if possible.',
        precipHighPlay: 'With strong rain likely, delay the valley descent and steep trails.',
        precipHighItems: 'Umbrella or raincoat',
        lightRainOutfit: 'Light rain and slippery ground; step carefully, open-air experiences are less fun.',
        lightRainItems: 'Foldable umbrella',
        modRainRisk: 'Moderate rain: avoid water channels and low pools; boats may stop.',
        modRainItems: 'Raincoat (avoid a long umbrella in wind)',
        heavyRainRisk: 'Heavy rain: do not approach the falls edge or running water; river activities are stopped.',
        heavyRainItems: 'Waterproof raincoat',
        thunderRisk: 'Beware thunder and lightning: do not climb the mountain, swim or stand under trees in rain; water activities usually stop.',
        rainPlay: 'When it rains, the valley level rises fast; do not approach the falls edge or running water, and do not swim without confirming safety.',
        hotOutfit: 'High heat; avoid going out at midday and choose light clothing.',
        hotPlay: 'Shorten walking under the sun and rest in the shade.',
        hotItems: 'Sunscreen, enough water, cooling gear',
        uvOutfit: 'Strong UV; protect your skin and eyes.',
        uvItems: 'Sunscreen, sunglasses, hat',
        tempDiffOutfit: 'Large day–night temperature swing; carry an extra layer you can add or remove easily.',
        coldOutfit: 'Low temperature; warm up well and avoid staying long under the falling water.',
        coldItems: 'Thick coat, scarf',
        windActiveOutfit: 'Active wind; a hat may fly off, avoid loose clothing.',
        windActivePlay: 'Boat trips and open-air activities may pause temporarily.',
        windStrongRisk: 'Strong wind: stay away from signs and valley rocks; river activities usually stop.',
        clearOutfit: 'Clear weather, good for outdoor walking.',
        clearPlay: 'Good time to watch the falls sunrise or sunset over the valley.',
        clearItems: 'Do not forget sunscreen',
        cloudyOutfit: 'Soft light, great for photos without burning heat.',
        cloudyPlay: 'Good for a long walk around the valley and terraces.',
        fogRisk: 'Poor visibility; slippery trails and bridges are harder, trips may be delayed.',
        fogItems: 'Be careful on stairs and edges'
      }
    },
  fr: frGuide,
  zh: zhGuide
};
