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
  weatherI18n: { wmo: Record<number, { t: string; i: string }> };
}

export const guides: Record<Locale, Guide> = {
  ar: {
  "nav": [
    {
      "href": "#about",
      "label": "عن أوزود"
    },
    {
      "href": "#visit",
      "label": "الزيارة"
    },
    {
      "href": "#transport",
      "label": "الوصول"
    },
    {
      "href": "#food",
      "label": "الطعام"
    },
    {
      "href": "#nearby",
      "label": "حول أوزود"
    },
    {
      "href": "#reviews",
      "label": "التقييمات"
    },
    {
      "href": "#weather",
      "label": "الطقس"
    },
    {
      "href": "#faq",
      "label": "الأسئلة"
    }
  ],
  "hero": {
    "kicker": "إقليم أزيلال · بني ملال خنيفرة",
    "title": [
      "شلالات",
      "أوزود"
    ],
    "desc": "شلالات أوزود وجهة طبيعية بإقليم أزيلال في المغرب. يحدد موقع الإقليم المكان في أوزود، جماعة آيت تكلا، بين الأطلس الكبير والمتوسط. النقطة المنشورة تحدد الموقع ولا تؤكد مدخلاً معيناً أو مساراً ميسراً.",
    "badgeHeight": "المكتب الوطني: نحو 100 م",
    "badgeFree": "الوصول: تحقق محلياً",
    "ratingNote": "لقطة من خرائط Google تحققنا منها يدوياً في {sync}؛ لا تتحدث تلقائياً. لا يجمع هذا الدليل هذه المراجعات، وحقوقها لأصحابها وخرائط Google."
  },
  "about": {
    "kicker": "عن الوجهة",
    "h2": "حول {name}",
    "p1": "شلالات أوزود وجهة طبيعية بإقليم أزيلال في المغرب. يحدد موقع الإقليم المكان في أوزود، جماعة آيت تكلا، بين الأطلس الكبير والمتوسط. النقطة المنشورة تحدد الموقع ولا تؤكد مدخلاً معيناً أو مساراً ميسراً.",
    "hierarchy": "{name} ← {city} ← {province} ← {country}",
    "cards": [
      {
        "icon": "📍",
        "title": "الوصول والمدخل",
        "text": "اسأل عن مكان الوقوف القانوني والنزول المتاح في يوم زيارتك وكيفية احتساب الثمن ونقطة لقاء السائق مجدداً. علامة الخريطة لا تضمن مدخلاً أو مكان وقوف."
      },
      {
        "icon": "ℹ️",
        "title": "الوصول: تحقق محلياً",
        "text": "أظهرت خرائط Google عبارة «مجاني» و«مفتوح 24 ساعة» في لقطة 29 أكتوبر 2026. لم نتحقق من جدول رسمي حالي أو تعرفة دخول موحدة. لا تثبت هذه العبارات سلامة الزيارة ليلاً أو مجانية المواقف والقوارب أو حرية دخول كل المسارات."
      }
    ]
  },
  "visit": {
    "kicker": "الماء والواحة",
    "h2": "صخر أحمر، زيتون وماء أبيض",
    "p": "اختر نقطة مشاهدة مسموحاً بها بعد التحقق من حالة المسار والصعود في العودة. اسأل عن الدرج والانحدار والسطح والحواجز والاستراحة وأي مساعدة لازمة. لم يجر هذا الدليل تدقيقاً لمسار ميسر ولا يضمن نزولاً كاملاً لكل الزوار."
  },
  "transport": {
    "kicker": "التنقل",
    "h2": "الموقع والوصول إلى {short} في {city}",
    "cards": [
      {
        "title": "سائق أو رحلة خاصة",
        "text": "من مراكش، أكد مكان الانطلاق والوجهة والثمن الكامل والانتظار وترتيبات العودة قبل حجز سيارة أو رحلة. قد تتغير مدة الطريق بسبب المرور وحالته؛ اترك وقتاً كافياً للزيارة في ضوء النهار."
      },
      {
        "title": "رحلة جماعية",
        "text": "في الرحلة الجماعية اسأل عما يشمله السعر: النقل والإرشاد والطعام والمواقف والأنشطة الاختيارية والعودة. تحقق من مقدم الخدمة وشروط الإلغاء مباشرة؛ لا يبيع هذا الدليل الرحلات ولا يزكي مقدماً معيناً."
      },
      {
        "title": "النقل العمومي",
        "text": "للنقل العمومي أو سيارة الأجرة المشتركة، تحقق من الوصلة الفعلية وآخر محطة وآخر عودة والجزء الأخير من الطريق قبل الانطلاق. لا تفترض وجود خدمة مباشرة متكررة أو سيارة تنتظرك عند الشلال."
      }
    ],
    "mapTitle": "خريطة شلالات أوزود",
    "cards2": [
      {
        "title": "الوصول: تحقق محلياً",
        "text": "اسأل عن مكان الوقوف القانوني والنزول المتاح في يوم زيارتك وكيفية احتساب الثمن ونقطة لقاء السائق مجدداً. علامة الخريطة لا تضمن مدخلاً أو مكان وقوف."
      },
      {
        "title": "خطط بمعلومات حالية",
        "text": "اختر نقطة مشاهدة مسموحاً بها بعد التحقق من حالة المسار والصعود في العودة. اسأل عن الدرج والانحدار والسطح والحواجز والاستراحة وأي مساعدة لازمة. لم يجر هذا الدليل تدقيقاً لمسار ميسر ولا يضمن نزولاً كاملاً لكل الزوار."
      }
    ]
  },
  "food": {
    "kicker": "حول المائدة",
    "h2": "أكل محلي بعد المشي",
    "restaurants": [
      {
        "title": "القائمة والثمن الكامل",
        "text": "اطلب قائمة حالية والثمن الإجمالي قبل الطلب، وتحقق من المشروبات والخدمة وأي رسوم إضافية. لم نتحقق من مطاعم محددة أو قائمة اليوم."
      },
      {
        "title": "الاحتياجات الغذائية",
        "text": "للحساسية أو المتطلبات الغذائية اسأل البائع عن المكونات والتحضير مباشرة. احمل الماء واللوازم التي تحتاجها مجموعتك ولا تعتمد على فتح كشك معين."
      },
      {
        "title": "الخدمات الاختيارية",
        "text": "قبل دفع ثمن دليل أو قارب اتفق على المسار والمدة والخدمات والمعدات وشروط الإلغاء. لم نتحقق هنا من مشغل حالي أو تعرفة نشاط."
      }
    ]
  },
  "nearby": {
    "kicker": "قريب من الشلال",
    "h2": "معالم وأماكن حول {short}",
    "p": "يعرض المكتب الوطني المغربي للسياحة أوزود ضمن طبيعة أزيلال، ويذكر إيمي نفري قرب دمنات وبين الويدان. هذه وجهات منفصلة لها وصولها ونقلها؛ لا يعني جمع أسمائها ضمان جولة قصيرة أو سهلة في يوم واحد.",
    "cards": [
      {
        "title": "Azilal / أزيلال",
        "text": "يعرض المكتب الوطني المغربي للسياحة أوزود ضمن طبيعة أزيلال، ويذكر إيمي نفري قرب دمنات وبين الويدان. هذه وجهات منفصلة لها وصولها ونقلها؛ لا يعني جمع أسمائها ضمان جولة قصيرة أو سهلة في يوم واحد."
      }
    ]
  },
  "reviews": {
    "kicker": "التقييمات",
    "h2": "ماذا يقول زوّار {name}؟",
    "basedOn": "بناءً على {n} تقييماً",
    "syncNote": "لقطة من خرائط Google تحققنا منها يدوياً في {sync}؛ لا تتحدث تلقائياً. لا يجمع هذا الدليل هذه المراجعات، وحقوقها لأصحابها وخرائط Google.",
    "button": "عرض جميع التقييمات على خرائط Google ↗"
  },
  "weather": {
    "kicker": "الطقس الآن",
    "h2": "الطقس وتوقّعات 7 أيام في {short}",
    "note": "توقع إقليمي من نموذج، وليس قياساً عند الشلال أو إعلاناً بأن المسارات مفتوحة. نعرض بيانات حديثة فقط بلا لقطة قديمة من البناء أو متوسط مناخي بديل."
  },
  "history": {
    "kicker": "أصل المكان",
    "h2": "تاريخ وحكايات شلالات أوزود",
    "paragraphs": [
      "تصف صفحة الطبيعة لدى المكتب الوطني المغربي للسياحة شلالاً بنحو 100 متر، فيما تستخدم كتيبات رسمية أقدم نحو 110 أمتار. هذه أوصاف منسوبة إلى مصادرها وليست قياساً جديداً. وارتفاع 1,060 متراً على موقع الإقليم هو ارتفاع الموقع عن البحر لا ارتفاع سقوط الماء.",
      "تشرح صفحة الإقليم المنظر الطبيعي ودور الموقع السياحي. لا تقدم هذه المصادر الخلفية قراءة لتدفق النهر اليوم أو حالة المسارات أو تشغيل القوارب أو مكاناً آمناً للسباحة. الصور القديمة لا تثبت حالة اليوم أيضاً."
    ],
    "cards": []
  },
  "seasons": {
    "kicker": "متى تزور",
    "h2": "خطط بمعلومات حالية",
    "intro": "توقع إقليمي من نموذج، وليس قياساً عند الشلال أو إعلاناً بأن المسارات مفتوحة. نعرض بيانات حديثة فقط بلا لقطة قديمة من البناء أو متوسط مناخي بديل.",
    "cards": [
      {
        "title": "اختيار الموعد",
        "month": "1",
        "items": [
          "قبل اختيار الموعد قارن توقعاً إقليمياً حديثاً بالتحذيرات الرسمية ومعلومات الوصول المحلية. لا يضمن شهر ثابت تدفقاً مثالياً أو سماء صافية أو مسارات آمنة."
        ]
      },
      {
        "title": "بعد المطر",
        "month": "2",
        "items": [
          "بعد المطر اسأل عن الإغلاق وحالة الطريق قبل النزول. لا تفترض أن توقع القرية يمثل كامل الحوض المائي أو استجابة النهر."
        ]
      },
      {
        "title": "اللباس والوتيرة",
        "month": "3",
        "items": [
          "عند توقع الدفء خطط للظل والماء ووتيرة تناسب مجموعتك. وعند توقع البرودة احمل طبقة إضافية؛ لا يقيم النموذج لياقة الشخص أو احتياجات الوصول."
        ]
      },
      {
        "title": "التصوير",
        "month": "4",
        "items": [
          "للتصوير اختر ضوء النهار ضمن ترتيبات وصول مؤكدة. الضوء وقوس المطر وحجم الماء غير مضمونة؛ لا تقترب من الحواف أو المسارات المقيدة للحصول على صورة."
        ]
      }
    ],
    "analysisTitle": "خطط بمعلومات حالية",
    "analysis": [
      {
        "title": "الوصول: تحقق محلياً",
        "text": "اختر نقطة مشاهدة مسموحاً بها بعد التحقق من حالة المسار والصعود في العودة. اسأل عن الدرج والانحدار والسطح والحواجز والاستراحة وأي مساعدة لازمة. لم يجر هذا الدليل تدقيقاً لمسار ميسر ولا يضمن نزولاً كاملاً لكل الزوار."
      }
    ]
  },
  "services": {
    "kicker": "خدمات الزوار",
    "h2": "المرافق المحيطة بالشلال",
    "intro": "اختر نقطة مشاهدة مسموحاً بها بعد التحقق من حالة المسار والصعود في العودة. اسأل عن الدرج والانحدار والسطح والحواجز والاستراحة وأي مساعدة لازمة. لم يجر هذا الدليل تدقيقاً لمسار ميسر ولا يضمن نزولاً كاملاً لكل الزوار.",
    "cards": [
      {
        "icon": "ℹ️",
        "title": "خطط بمعلومات حالية",
        "text": "اسأل عن مكان الوقوف القانوني والنزول المتاح في يوم زيارتك وكيفية احتساب الثمن ونقطة لقاء السائق مجدداً. علامة الخريطة لا تضمن مدخلاً أو مكان وقوف."
      },
      {
        "icon": "ℹ️",
        "title": "خطط بمعلومات حالية",
        "text": "للحساسية أو المتطلبات الغذائية اسأل البائع عن المكونات والتحضير مباشرة. احمل الماء واللوازم التي تحتاجها مجموعتك ولا تعتمد على فتح كشك معين."
      },
      {
        "icon": "ℹ️",
        "title": "خطط بمعلومات حالية",
        "text": "قبل دفع ثمن دليل أو قارب اتفق على المسار والمدة والخدمات والمعدات وشروط الإلغاء. لم نتحقق هنا من مشغل حالي أو تعرفة نشاط."
      }
    ]
  },
  "itineraries": {
    "kicker": "خطط زيارتك",
    "h2": "مسارات حسب نوع الزوّار",
    "audiences": [
      {
        "title": "العائلات",
        "items": [
          "للعائلات: ابدأ بنقطة مشاهدة قصيرة ومسموح بها وراقب الأطفال قرب الماء واتفق على نقطة العودة. الأنشطة والدورة الكاملة اختيارات وليست واجباً."
        ]
      },
      {
        "title": "احتياجات الوصول",
        "items": [
          "لاحتياجات الوصول: اسأل عن المسار كله من النزول من السيارة حتى نقطة المشاهدة والعودة. اختصر الزيارة إذا لم تناسب الظروف مجموعتك."
        ]
      },
      {
        "title": "التصوير",
        "items": [
          "للتصوير: اترك وقتاً للمشاهدة في النهار والعودة، واحترم خصوصية الزوار وقيود التصوير أو الطائرات المسيرة محلياً."
        ]
      }
    ],
    "trips": [
      {
        "title": "خطط بمعلومات حالية",
        "text": "من مراكش، أكد مكان الانطلاق والوجهة والثمن الكامل والانتظار وترتيبات العودة قبل حجز سيارة أو رحلة. قد تتغير مدة الطريق بسبب المرور وحالته؛ اترك وقتاً كافياً للزيارة في ضوء النهار."
      }
    ]
  },
  "responsibility": {
    "kicker": "النفع العام",
    "h2": "سياحة مسؤولة وتوعية",
    "intro": "لا يوصي هذا الدليل بالسباحة أو دخول النهر. لا يثبت حوض هادئ المظهر أو إعلان قارب أو وجود آخرين في الماء سلامته. اتبع الحواجز والتحذيرات وتعليمات الموقع.",
    "cards": [
      {
        "title": "خطط بمعلومات حالية",
        "text": "استخدم المسارات المسموح بها وابتعد عن الحواف. ارجع إذا لم تعد حالة الطريق أو الطقس مناسبة لمجموعتك؛ التوقع ليس تصريح سلامة أو إشعار تشغيل."
      },
      {
        "title": "خطط بمعلومات حالية",
        "text": "خذ مخلفاتك معك ولا تطعم الحيوانات البرية أو تقترب منها واحترم السكان والأرض الخاصة. لا تمنح صفة المكان السياحية إذناً بدخول كل ضفة أو حديقة."
      }
    ]
  },
  "costs": {
    "kicker": "التكاليف العملية",
    "h2": "ماذا قد تدفع؟",
    "cards": [
      {
        "items": [
          {
            "h": "الوصول: تحقق محلياً",
            "p": "أظهرت خرائط Google عبارة «مجاني» و«مفتوح 24 ساعة» في لقطة 29 أكتوبر 2026. لم نتحقق من جدول رسمي حالي أو تعرفة دخول موحدة. لا تثبت هذه العبارات سلامة الزيارة ليلاً أو مجانية المواقف والقوارب أو حرية دخول كل المسارات."
          }
        ]
      },
      {
        "items": [
          {
            "h": "خطط بمعلومات حالية",
            "p": "قبل دفع ثمن دليل أو قارب اتفق على المسار والمدة والخدمات والمعدات وشروط الإلغاء. لم نتحقق هنا من مشغل حالي أو تعرفة نشاط."
          }
        ]
      }
    ]
  },
  "faq": {
    "kicker": "FAQ",
    "h2": "أسئلة شائعة",
    "items": [
      [
        "أين تقع شلالات أوزود؟",
        "شلالات أوزود وجهة طبيعية بإقليم أزيلال في المغرب. يحدد موقع الإقليم المكان في أوزود، جماعة آيت تكلا، بين الأطلس الكبير والمتوسط. النقطة المنشورة تحدد الموقع ولا تؤكد مدخلاً معيناً أو مساراً ميسراً."
      ],
      [
        "هل الدخول مجاني ومتاح 24 ساعة؟",
        "أظهرت خرائط Google عبارة «مجاني» و«مفتوح 24 ساعة» في لقطة 29 أكتوبر 2026. لم نتحقق من جدول رسمي حالي أو تعرفة دخول موحدة. لا تثبت هذه العبارات سلامة الزيارة ليلاً أو مجانية المواقف والقوارب أو حرية دخول كل المسارات."
      ],
      [
        "كيف أعرف حالة أوزود اليوم؟",
        "توقع إقليمي من نموذج، وليس قياساً عند الشلال أو إعلاناً بأن المسارات مفتوحة. نعرض بيانات حديثة فقط بلا لقطة قديمة من البناء أو متوسط مناخي بديل. اختر نقطة مشاهدة مسموحاً بها بعد التحقق من حالة المسار والصعود في العودة. اسأل عن الدرج والانحدار والسطح والحواجز والاستراحة وأي مساعدة لازمة. لم يجر هذا الدليل تدقيقاً لمسار ميسر ولا يضمن نزولاً كاملاً لكل الزوار."
      ],
      [
        "هل يمكن السباحة أسفل الشلال؟",
        "لا يوصي هذا الدليل بالسباحة أو دخول النهر. لا يثبت حوض هادئ المظهر أو إعلان قارب أو وجود آخرين في الماء سلامته. اتبع الحواجز والتحذيرات وتعليمات الموقع."
      ],
      [
        "هل يوجد مسار ميسر؟",
        "اختر نقطة مشاهدة مسموحاً بها بعد التحقق من حالة المسار والصعود في العودة. اسأل عن الدرج والانحدار والسطح والحواجز والاستراحة وأي مساعدة لازمة. لم يجر هذا الدليل تدقيقاً لمسار ميسر ولا يضمن نزولاً كاملاً لكل الزوار."
      ],
      [
        "كيف أرتب العودة إلى مراكش؟",
        "من مراكش، أكد مكان الانطلاق والوجهة والثمن الكامل والانتظار وترتيبات العودة قبل حجز سيارة أو رحلة. قد تتغير مدة الطريق بسبب المرور وحالته؛ اترك وقتاً كافياً للزيارة في ضوء النهار."
      ]
    ]
  },
  "sources": {
    "heading": "مصادر ومراجع",
    "paragraphs": [
      "تحقق من المصادر في 29 أكتوبر 2026؛ تختلف المعلومات الجغرافية والتاريخية عن معلومات التشغيل الحالية.",
      "لقطة من خرائط Google تحققنا منها يدوياً في {sync}؛ لا تتحدث تلقائياً. لا يجمع هذا الدليل هذه المراجعات، وحقوقها لأصحابها وخرائط Google.",
      "<a href=\"https://provinceazilal.ma/?lsvr_listing=les-cascades-douzoud\" target=\"_blank\" rel=\"noopener noreferrer\">Province d’Azilal — Ouzoud ↗</a> · <a href=\"https://www.visitmorocco.com/en/travel/azilal/nature\" target=\"_blank\" rel=\"noopener noreferrer\">ONMT — Nature in Azilal ↗</a> · <a href=\"https://www.visitmorocco.com/sites/default/files/atoms/files/Nature%20%26%20Adventure%20ENG.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">ONMT — historical nature brochure ↗</a>"
    ]
  },
  "footer": "دليل مستقل غير ربحي للمعلومات السياحية والعلمية؛ ليس سلطة الشلال أو موقعاً حكومياً أو خدمة حجز.",
  "weatherI18n": {
    "wmo": {
      "0": {
        "t": "صافٍ",
        "i": "☀️"
      },
      "1": {
        "t": "صافٍ غالباً",
        "i": "🌤️"
      },
      "2": {
        "t": "غائم جزئياً",
        "i": "⛅"
      },
      "3": {
        "t": "غائم",
        "i": "☁️"
      },
      "45": {
        "t": "ضباب",
        "i": "🌫️"
      },
      "48": {
        "t": "ضباب",
        "i": "🌫️"
      },
      "51": {
        "t": "رذاذ",
        "i": "🌦️"
      },
      "53": {
        "t": "رذاذ",
        "i": "🌦️"
      },
      "55": {
        "t": "رذاذ",
        "i": "🌦️"
      },
      "56": {
        "t": "رذاذ متجمّد",
        "i": "🌧️"
      },
      "57": {
        "t": "رذاذ متجمّد",
        "i": "🌧️"
      },
      "61": {
        "t": "مطر خفيف",
        "i": "🌦️"
      },
      "63": {
        "t": "مطر متوسط",
        "i": "🌧️"
      },
      "65": {
        "t": "مطر غزير",
        "i": "🌧️"
      },
      "66": {
        "t": "مطر متجمّد",
        "i": "🌧️"
      },
      "67": {
        "t": "مطر متجمّد",
        "i": "🌧️"
      },
      "71": {
        "t": "ثلج",
        "i": "❄️"
      },
      "73": {
        "t": "ثلج",
        "i": "❄️"
      },
      "75": {
        "t": "ثلج",
        "i": "❄️"
      },
      "77": {
        "t": "حبيبات ثلج",
        "i": "🌨️"
      },
      "80": {
        "t": "زخات مطر خفيفة",
        "i": "🌦️"
      },
      "81": {
        "t": "زخات مطر",
        "i": "🌧️"
      },
      "82": {
        "t": "زخات مطر غزيرة",
        "i": "🌧️"
      },
      "85": {
        "t": "زخات ثلج",
        "i": "🌨️"
      },
      "86": {
        "t": "زخات ثلج",
        "i": "🌨️"
      },
      "95": {
        "t": "عاصفة رعدية",
        "i": "⛈️"
      },
      "96": {
        "t": "عاصفة رعدية مع بَرَد",
        "i": "⛈️"
      },
      "99": {
        "t": "عاصفة رعدية مع بَرَد",
        "i": "⛈️"
      }
    }
  }
},
  en: {
  "nav": [
    {
      "href": "#about",
      "label": "About"
    },
    {
      "href": "#visit",
      "label": "The falls"
    },
    {
      "href": "#transport",
      "label": "Getting there"
    },
    {
      "href": "#food",
      "label": "Food"
    },
    {
      "href": "#nearby",
      "label": "Around"
    },
    {
      "href": "#reviews",
      "label": "Reviews"
    },
    {
      "href": "#weather",
      "label": "Weather"
    },
    {
      "href": "#faq",
      "label": "FAQ"
    }
  ],
  "hero": {
    "kicker": "Azilal Province · Béni Mellal-Khénifra",
    "title": [
      "Ouzoud",
      "Falls"
    ],
    "desc": "Ouzoud Falls is a natural destination in Azilal province, Morocco. The province lists it at Ouzoud, Aït Taguella, between the High and Middle Atlas. Its published map point identifies the site, not a confirmed entrance or an accessible route.",
    "badgeHeight": "ONMT: about 100 m",
    "badgeFree": "Access: confirm locally",
    "ratingNote": "Google Maps snapshot manually checked {sync}; not automatically updated. This guide does not collect these reviews. Rights remain with the original reviewers and Google Maps."
  },
  "about": {
    "kicker": "About the place",
    "h2": "About {name}",
    "p1": "Ouzoud Falls is a natural destination in Azilal province, Morocco. The province lists it at Ouzoud, Aït Taguella, between the High and Middle Atlas. Its published map point identifies the site, not a confirmed entrance or an accessible route.",
    "hierarchy": "{name} ← {city} ← {province} ← {country}",
    "cards": [
      {
        "icon": "📍",
        "title": "Arrival and entrance",
        "text": "Ask where legal parking and drop-off are available on your visit date, how charges are calculated and where you will meet your driver again. A map marker is not an entrance or parking-space guarantee."
      },
      {
        "icon": "ℹ️",
        "title": "Access: confirm locally",
        "text": "Google Maps showed “free” and “24 hours” in the 29 October 2026 listing snapshot. No current authority timetable or uniform admission tariff was verified. These labels do not establish safe night access, free parking, a free boat ride or unrestricted entry to every path."
      }
    ]
  },
  "visit": {
    "kicker": "Water & oasis",
    "h2": "Red rock, olive trees and white water",
    "p": "Choose a permitted viewpoint after checking the current route and return climb. Ask specifically about steps, gradients, surfaces, barriers, seating and boarding assistance where relevant. This guide has not audited an accessible route and does not guarantee a complete descent for every visitor."
  },
  "transport": {
    "kicker": "Getting around",
    "h2": "Location and access to {short} in {city}",
    "cards": [
      {
        "title": "Driver or private trip",
        "text": "From Marrakech, confirm your exact pickup, destination, total price, waiting time and return arrangement before booking a driver or excursion. A quoted journey time can change with roads and traffic; leave adequate daylight for the visit."
      },
      {
        "title": "Group excursion",
        "text": "For a group trip, ask what the price includes: transport, guiding, meals, parking, optional activities and return pickup. Confirm the provider and cancellation terms directly; this guide does not sell or endorse an excursion."
      },
      {
        "title": "Public transport",
        "text": "For public transport or a shared taxi, confirm the actual connection, final stop, last return and the final approach before departure. Do not assume a frequent direct service or a vehicle waiting at the waterfall."
      }
    ],
    "mapTitle": "Map of Ouzoud Waterfalls",
    "cards2": [
      {
        "title": "Access: confirm locally",
        "text": "Ask where legal parking and drop-off are available on your visit date, how charges are calculated and where you will meet your driver again. A map marker is not an entrance or parking-space guarantee."
      },
      {
        "title": "Plan with current information",
        "text": "Choose a permitted viewpoint after checking the current route and return climb. Ask specifically about steps, gradients, surfaces, barriers, seating and boarding assistance where relevant. This guide has not audited an accessible route and does not guarantee a complete descent for every visitor."
      }
    ]
  },
  "food": {
    "kicker": "At the table",
    "h2": "Local food after the walk",
    "restaurants": [
      {
        "title": "Menu and total",
        "text": "Ask for a current menu and the total price before ordering; check whether drinks, service or a view-side table cost extra. This guide has not verified specific businesses or today’s menu."
      },
      {
        "title": "Dietary needs",
        "text": "For allergies or dietary requirements, speak directly with the seller about ingredients and preparation. Bring the drinking water and supplies your group needs rather than relying on a stall being open."
      },
      {
        "title": "Optional services",
        "text": "Before paying for a guide or boat, agree the route, duration, included services, equipment and cancellation terms. No current operator or activity tariff has been verified here."
      }
    ]
  },
  "nearby": {
    "kicker": "Near the falls",
    "h2": "Sights and places around {short}",
    "p": "The national tourism office presents Ouzoud within the Azilal nature region and also mentions Imi N’Ifri near Demnate and Bin El Ouidane. They are separate destinations with their own access and transport; this is not a promise of a short or easy combined loop.",
    "cards": [
      {
        "title": "Azilal / أزيلال",
        "text": "The national tourism office presents Ouzoud within the Azilal nature region and also mentions Imi N’Ifri near Demnate and Bin El Ouidane. They are separate destinations with their own access and transport; this is not a promise of a short or easy combined loop."
      }
    ]
  },
  "reviews": {
    "kicker": "Reviews",
    "h2": "What visitors say about {name}?",
    "basedOn": "Based on {n} reviews",
    "syncNote": "Google Maps snapshot manually checked {sync}; not automatically updated. This guide does not collect these reviews. Rights remain with the original reviewers and Google Maps.",
    "button": "See all reviews on Google Maps ↗"
  },
  "weather": {
    "kicker": "Weather now",
    "h2": "Weather and 7-day forecast in {short}",
    "note": "Regional model forecast, not a measurement at the waterfall or a statement that paths are open. Fresh data only; no old build-time snapshot or climate average is substituted."
  },
  "history": {
    "kicker": "Origins",
    "h2": "History and tales of Ouzoud Waterfalls",
    "paragraphs": [
      "The Moroccan National Tourist Office’s nature page describes a waterfall of about 100 metres; older official brochures use about 110 metres. These are attributed descriptions, not a new measurement. The province’s 1,060 metres refers to site elevation, not waterfall height.",
      "The provincial page explains the destination’s landscape and regional tourism role. Those background sources do not report the current river flow, path condition, boat operation or a safe swimming area. Historical photographs likewise do not establish today’s conditions."
    ],
    "cards": []
  },
  "seasons": {
    "kicker": "When to visit",
    "h2": "Plan with current information",
    "intro": "Regional model forecast, not a measurement at the waterfall or a statement that paths are open. Fresh data only; no old build-time snapshot or climate average is substituted.",
    "cards": [
      {
        "title": "Choose a date",
        "month": "1",
        "items": [
          "Before choosing a date, compare a recent regional forecast with official warnings and local access information. No fixed month guarantees ideal water flow, clear skies or safe paths."
        ]
      },
      {
        "title": "After rain",
        "month": "2",
        "items": [
          "After rain, ask about local closures and route conditions before descending. Do not infer that a forecast for the village describes the whole upstream catchment or river response."
        ]
      },
      {
        "title": "Clothing and pace",
        "month": "3",
        "items": [
          "For a warmer forecast, plan shade, water and a pace suited to your group. For a cooler forecast, bring a layer; the model does not assess an individual’s fitness or access needs."
        ]
      },
      {
        "title": "Photography",
        "month": "4",
        "items": [
          "For photography, choose daylight within confirmed access arrangements. Light, rainbows and water volume are not guaranteed; do not approach an edge or restricted route for a picture."
        ]
      }
    ],
    "analysisTitle": "Plan with current information",
    "analysis": [
      {
        "title": "Access: confirm locally",
        "text": "Choose a permitted viewpoint after checking the current route and return climb. Ask specifically about steps, gradients, surfaces, barriers, seating and boarding assistance where relevant. This guide has not audited an accessible route and does not guarantee a complete descent for every visitor."
      }
    ]
  },
  "services": {
    "kicker": "Visitor services",
    "h2": "Facilities around the falls",
    "intro": "Choose a permitted viewpoint after checking the current route and return climb. Ask specifically about steps, gradients, surfaces, barriers, seating and boarding assistance where relevant. This guide has not audited an accessible route and does not guarantee a complete descent for every visitor.",
    "cards": [
      {
        "icon": "ℹ️",
        "title": "Plan with current information",
        "text": "Ask where legal parking and drop-off are available on your visit date, how charges are calculated and where you will meet your driver again. A map marker is not an entrance or parking-space guarantee."
      },
      {
        "icon": "ℹ️",
        "title": "Plan with current information",
        "text": "For allergies or dietary requirements, speak directly with the seller about ingredients and preparation. Bring the drinking water and supplies your group needs rather than relying on a stall being open."
      },
      {
        "icon": "ℹ️",
        "title": "Plan with current information",
        "text": "Before paying for a guide or boat, agree the route, duration, included services, equipment and cancellation terms. No current operator or activity tariff has been verified here."
      }
    ]
  },
  "itineraries": {
    "kicker": "Plan your visit",
    "h2": "Routes by visitor type",
    "audiences": [
      {
        "title": "Families",
        "items": [
          "Families: choose a short permitted viewpoint first, supervise children near water and agree a return point. Activities and a full circuit are optional, not a requirement."
        ]
      },
      {
        "title": "Access needs",
        "items": [
          "Access needs: ask about the entire route from drop-off to the intended viewpoint, including the return. Shorten the visit if the conditions do not suit your group."
        ]
      },
      {
        "title": "Photography",
        "items": [
          "Photography: allow time for safe daylight viewing and the return journey. Respect other visitors’ privacy and local photography or drone restrictions."
        ]
      }
    ],
    "trips": [
      {
        "title": "Plan with current information",
        "text": "From Marrakech, confirm your exact pickup, destination, total price, waiting time and return arrangement before booking a driver or excursion. A quoted journey time can change with roads and traffic; leave adequate daylight for the visit."
      }
    ]
  },
  "responsibility": {
    "kicker": "Public good",
    "h2": "Responsible tourism & awareness",
    "intro": "This guide does not recommend swimming or entering the river. A calm-looking pool, a boat listing or other people in the water is not proof of safety. Follow barriers, warnings and local instructions.",
    "cards": [
      {
        "title": "Plan with current information",
        "text": "Use permitted routes and keep back from edges. Turn back if the route or weather no longer suits your group; a model forecast is not a safety clearance or an operating notice."
      },
      {
        "title": "Plan with current information",
        "text": "Carry out waste, avoid feeding or approaching wildlife, and respect residents and private land. Do not assume a tourist destination gives permission to enter every bank or garden."
      }
    ]
  },
  "costs": {
    "kicker": "Practical costs",
    "h2": "What might you pay?",
    "cards": [
      {
        "items": [
          {
            "h": "Access: confirm locally",
            "p": "Google Maps showed “free” and “24 hours” in the 29 October 2026 listing snapshot. No current authority timetable or uniform admission tariff was verified. These labels do not establish safe night access, free parking, a free boat ride or unrestricted entry to every path."
          }
        ]
      },
      {
        "items": [
          {
            "h": "Plan with current information",
            "p": "Before paying for a guide or boat, agree the route, duration, included services, equipment and cancellation terms. No current operator or activity tariff has been verified here."
          }
        ]
      }
    ]
  },
  "faq": {
    "kicker": "FAQ",
    "h2": "Frequently asked questions",
    "items": [
      [
        "Where are Ouzoud Falls?",
        "Ouzoud Falls is a natural destination in Azilal province, Morocco. The province lists it at Ouzoud, Aït Taguella, between the High and Middle Atlas. Its published map point identifies the site, not a confirmed entrance or an accessible route."
      ],
      [
        "Are the falls free and open 24 hours?",
        "Google Maps showed “free” and “24 hours” in the 29 October 2026 listing snapshot. No current authority timetable or uniform admission tariff was verified. These labels do not establish safe night access, free parking, a free boat ride or unrestricted entry to every path."
      ],
      [
        "What are conditions like today?",
        "Regional model forecast, not a measurement at the waterfall or a statement that paths are open. Fresh data only; no old build-time snapshot or climate average is substituted. Choose a permitted viewpoint after checking the current route and return climb. Ask specifically about steps, gradients, surfaces, barriers, seating and boarding assistance where relevant. This guide has not audited an accessible route and does not guarantee a complete descent for every visitor."
      ],
      [
        "Can I swim below the falls?",
        "This guide does not recommend swimming or entering the river. A calm-looking pool, a boat listing or other people in the water is not proof of safety. Follow barriers, warnings and local instructions."
      ],
      [
        "Is there an accessible route?",
        "Choose a permitted viewpoint after checking the current route and return climb. Ask specifically about steps, gradients, surfaces, barriers, seating and boarding assistance where relevant. This guide has not audited an accessible route and does not guarantee a complete descent for every visitor."
      ],
      [
        "How do I return to Marrakech?",
        "From Marrakech, confirm your exact pickup, destination, total price, waiting time and return arrangement before booking a driver or excursion. A quoted journey time can change with roads and traffic; leave adequate daylight for the visit."
      ]
    ]
  },
  "sources": {
    "heading": "Sources & references",
    "paragraphs": [
      "Sources checked 29 October 2026; geography and historical descriptions have a different scope from current operating information.",
      "Google Maps snapshot manually checked {sync}; not automatically updated. This guide does not collect these reviews. Rights remain with the original reviewers and Google Maps.",
      "<a href=\"https://provinceazilal.ma/?lsvr_listing=les-cascades-douzoud\" target=\"_blank\" rel=\"noopener noreferrer\">Province d’Azilal — Ouzoud ↗</a> · <a href=\"https://www.visitmorocco.com/en/travel/azilal/nature\" target=\"_blank\" rel=\"noopener noreferrer\">ONMT — Nature in Azilal ↗</a> · <a href=\"https://www.visitmorocco.com/sites/default/files/atoms/files/Nature%20%26%20Adventure%20ENG.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">ONMT — historical nature brochure ↗</a>"
    ]
  },
  "footer": "Independent nonprofit tourism and educational guide; not the waterfall authority, a government website or a booking service.",
  "weatherI18n": {
    "wmo": {
      "0": {
        "t": "Clear",
        "i": "☀️"
      },
      "1": {
        "t": "Mostly clear",
        "i": "🌤️"
      },
      "2": {
        "t": "Partly cloudy",
        "i": "⛅"
      },
      "3": {
        "t": "Overcast",
        "i": "☁️"
      },
      "45": {
        "t": "Fog",
        "i": "🌫️"
      },
      "48": {
        "t": "Fog",
        "i": "🌫️"
      },
      "51": {
        "t": "Drizzle",
        "i": "🌦️"
      },
      "53": {
        "t": "Drizzle",
        "i": "🌦️"
      },
      "55": {
        "t": "Drizzle",
        "i": "🌦️"
      },
      "56": {
        "t": "Freezing drizzle",
        "i": "🌧️"
      },
      "57": {
        "t": "Freezing drizzle",
        "i": "🌧️"
      },
      "61": {
        "t": "Light rain",
        "i": "🌦️"
      },
      "63": {
        "t": "Moderate rain",
        "i": "🌧️"
      },
      "65": {
        "t": "Heavy rain",
        "i": "🌧️"
      },
      "66": {
        "t": "Freezing rain",
        "i": "🌧️"
      },
      "67": {
        "t": "Freezing rain",
        "i": "🌧️"
      },
      "71": {
        "t": "Snow",
        "i": "❄️"
      },
      "73": {
        "t": "Snow",
        "i": "❄️"
      },
      "75": {
        "t": "Snow",
        "i": "❄️"
      },
      "77": {
        "t": "Snow grains",
        "i": "🌨️"
      },
      "80": {
        "t": "Rain showers",
        "i": "🌦️"
      },
      "81": {
        "t": "Rain showers",
        "i": "🌧️"
      },
      "82": {
        "t": "Violent rain showers",
        "i": "🌧️"
      },
      "85": {
        "t": "Snow showers",
        "i": "🌨️"
      },
      "86": {
        "t": "Snow showers",
        "i": "🌨️"
      },
      "95": {
        "t": "Thunderstorm",
        "i": "⛈️"
      },
      "96": {
        "t": "Thunderstorm with hail",
        "i": "⛈️"
      },
      "99": {
        "t": "Thunderstorm with hail",
        "i": "⛈️"
      }
    }
  }
},
  fr: frGuide,
  zh: zhGuide
};
