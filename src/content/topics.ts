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
  "marrakech-transport": {
    "en": {
      "kicker": "Plan with current information",
      "h1": "Marrakech to Ouzoud: confirm transport and return",
      "desc": "From Marrakech, confirm your exact pickup, destination, total price, waiting time and return arrangement before booking a driver or excursion. A quoted journey time can change with roads and traffic; leave adequate daylight for the visit.",
      "intro": "Ouzoud Falls is a natural destination in Azilal province, Morocco. The province lists it at Ouzoud, Aït Taguella, between the High and Middle Atlas. Its published map point identifies the site, not a confirmed entrance or an accessible route.",
      "blocks": [
        {
          "h2": "Marrakech to Ouzoud: confirm transport and return · 1",
          "body": "From Marrakech, confirm your exact pickup, destination, total price, waiting time and return arrangement before booking a driver or excursion. A quoted journey time can change with roads and traffic; leave adequate daylight for the visit."
        },
        {
          "h2": "Marrakech to Ouzoud: confirm transport and return · 2",
          "body": "For a group trip, ask what the price includes: transport, guiding, meals, parking, optional activities and return pickup. Confirm the provider and cancellation terms directly; this guide does not sell or endorse an excursion."
        },
        {
          "h2": "Marrakech to Ouzoud: confirm transport and return · 3",
          "body": "For public transport or a shared taxi, confirm the actual connection, final stop, last return and the final approach before departure. Do not assume a frequent direct service or a vehicle waiting at the waterfall."
        },
        {
          "h2": "Marrakech to Ouzoud: confirm transport and return · 4",
          "body": "Ask where legal parking and drop-off are available on your visit date, how charges are calculated and where you will meet your driver again. A map marker is not an entrance or parking-space guarantee."
        }
      ]
    },
    "ar": {
      "kicker": "خطط بمعلومات حالية",
      "h1": "من مراكش إلى شلالات أوزود: تأكيد الطريق والعودة",
      "desc": "من مراكش، أكد مكان الانطلاق والوجهة والثمن الكامل والانتظار وترتيبات العودة قبل حجز سيارة أو رحلة. قد تتغير مدة الطريق بسبب المرور وحالته؛ اترك وقتاً كافياً للزيارة في ضوء النهار.",
      "intro": "شلالات أوزود وجهة طبيعية بإقليم أزيلال في المغرب. يحدد موقع الإقليم المكان في أوزود، جماعة آيت تكلا، بين الأطلس الكبير والمتوسط. النقطة المنشورة تحدد الموقع ولا تؤكد مدخلاً معيناً أو مساراً ميسراً.",
      "blocks": [
        {
          "h2": "من مراكش إلى شلالات أوزود: تأكيد الطريق والعودة · 1",
          "body": "من مراكش، أكد مكان الانطلاق والوجهة والثمن الكامل والانتظار وترتيبات العودة قبل حجز سيارة أو رحلة. قد تتغير مدة الطريق بسبب المرور وحالته؛ اترك وقتاً كافياً للزيارة في ضوء النهار."
        },
        {
          "h2": "من مراكش إلى شلالات أوزود: تأكيد الطريق والعودة · 2",
          "body": "في الرحلة الجماعية اسأل عما يشمله السعر: النقل والإرشاد والطعام والمواقف والأنشطة الاختيارية والعودة. تحقق من مقدم الخدمة وشروط الإلغاء مباشرة؛ لا يبيع هذا الدليل الرحلات ولا يزكي مقدماً معيناً."
        },
        {
          "h2": "من مراكش إلى شلالات أوزود: تأكيد الطريق والعودة · 3",
          "body": "للنقل العمومي أو سيارة الأجرة المشتركة، تحقق من الوصلة الفعلية وآخر محطة وآخر عودة والجزء الأخير من الطريق قبل الانطلاق. لا تفترض وجود خدمة مباشرة متكررة أو سيارة تنتظرك عند الشلال."
        },
        {
          "h2": "من مراكش إلى شلالات أوزود: تأكيد الطريق والعودة · 4",
          "body": "اسأل عن مكان الوقوف القانوني والنزول المتاح في يوم زيارتك وكيفية احتساب الثمن ونقطة لقاء السائق مجدداً. علامة الخريطة لا تضمن مدخلاً أو مكان وقوف."
        }
      ]
    },
    "fr": {
      "kicker": "Préparer avec des informations actuelles",
      "h1": "Marrakech–Ouzoud: confirmer trajet et retour",
      "desc": "Depuis Marrakech, confirmez le lieu de départ, la destination, le prix total, l’attente et le retour avant de réserver un chauffeur ou une excursion. La durée dépend de la route et du trafic; gardez assez de temps de visite de jour.",
      "intro": "Les cascades d’Ouzoud sont une destination naturelle de la province d’Azilal, au Maroc. La province situe le site à Ouzoud, Aït Taguella, entre le Haut et le Moyen Atlas. Son point cartographique ne confirme ni une entrée précise ni un parcours accessible.",
      "blocks": [
        {
          "h2": "Marrakech–Ouzoud: confirmer trajet et retour · 1",
          "body": "Depuis Marrakech, confirmez le lieu de départ, la destination, le prix total, l’attente et le retour avant de réserver un chauffeur ou une excursion. La durée dépend de la route et du trafic; gardez assez de temps de visite de jour."
        },
        {
          "h2": "Marrakech–Ouzoud: confirmer trajet et retour · 2",
          "body": "Pour une sortie en groupe, demandez ce qui est inclus: transport, guide, repas, parking, activités et retour. Vérifiez le prestataire et les conditions d’annulation directement; ce guide ne vend ni ne recommande une excursion particulière."
        },
        {
          "h2": "Marrakech–Ouzoud: confirmer trajet et retour · 3",
          "body": "En transport public ou taxi collectif, confirmez la correspondance réelle, le dernier arrêt, le dernier retour et l’approche finale avant de partir. Ne présumez pas un service direct fréquent ou un véhicule vous attendant aux chutes."
        },
        {
          "h2": "Marrakech–Ouzoud: confirmer trajet et retour · 4",
          "body": "Demandez où stationner légalement et déposer les passagers le jour prévu, comment le prix est calculé et où retrouver votre chauffeur. Un point sur la carte ne garantit ni entrée ni place de parking."
        }
      ]
    },
    "zh": {
      "kicker": "按实际条件准备",
      "h1": "马拉喀什到奥祖德：确认交通与返程",
      "desc": "从马拉喀什出发，预约司机或行程前确认实际上车点、目的地、总价、等待及返程安排。路况和交通可能改变时间，须为白天游览和返回预留余量。",
      "intro": "奥祖德瀑布位于摩洛哥阿齐拉勒省。省政府将地点列于奥祖德、Aït Taguella，介于高阿特拉斯与中阿特拉斯之间。官方页面的地图点用于标示景点，并不是经确认的入口或无障碍路线。",
      "blocks": [
        {
          "h2": "马拉喀什到奥祖德：确认交通与返程 · 1",
          "body": "从马拉喀什出发，预约司机或行程前确认实际上车点、目的地、总价、等待及返程安排。路况和交通可能改变时间，须为白天游览和返回预留余量。"
        },
        {
          "h2": "马拉喀什到奥祖德：确认交通与返程 · 2",
          "body": "团体行程应逐项确认交通、导览、餐饮、停车、可选活动及回程是否包含。直接核对提供者与取消条款；本站不销售或背书特定行程。"
        },
        {
          "h2": "马拉喀什到奥祖德：确认交通与返程 · 3",
          "body": "乘公共交通或拼车前，确认实际接驳、最后下车点、最晚返程和最后一段路。不假设有频繁直达班次或瀑布旁随时有车等候。"
        },
        {
          "h2": "马拉喀什到奥祖德：确认交通与返程 · 4",
          "body": "询问到访日可合法停车和下客的位置、收费方式及再次会合地点。地图标记不保证入口或停车空位。"
        }
      ]
    }
  },
  "best-season": {
    "en": {
      "kicker": "Plan with current information",
      "h1": "When to visit Ouzoud: forecast and access checks",
      "desc": "Before choosing a date, compare a recent regional forecast with official warnings and local access information. No fixed month guarantees ideal water flow, clear skies or safe paths.",
      "intro": "Regional model forecast, not a measurement at the waterfall or a statement that paths are open. Fresh data only; no old build-time snapshot or climate average is substituted.",
      "blocks": [
        {
          "h2": "When to visit Ouzoud: forecast and access checks · 1",
          "body": "Before choosing a date, compare a recent regional forecast with official warnings and local access information. No fixed month guarantees ideal water flow, clear skies or safe paths."
        },
        {
          "h2": "When to visit Ouzoud: forecast and access checks · 2",
          "body": "After rain, ask about local closures and route conditions before descending. Do not infer that a forecast for the village describes the whole upstream catchment or river response."
        },
        {
          "h2": "When to visit Ouzoud: forecast and access checks · 3",
          "body": "For a warmer forecast, plan shade, water and a pace suited to your group. For a cooler forecast, bring a layer; the model does not assess an individual’s fitness or access needs."
        },
        {
          "h2": "When to visit Ouzoud: forecast and access checks · 4",
          "body": "For photography, choose daylight within confirmed access arrangements. Light, rainbows and water volume are not guaranteed; do not approach an edge or restricted route for a picture."
        }
      ]
    },
    "ar": {
      "kicker": "خطط بمعلومات حالية",
      "h1": "وقت زيارة أوزود: الطقس والوصول الحالي",
      "desc": "قبل اختيار الموعد قارن توقعاً إقليمياً حديثاً بالتحذيرات الرسمية ومعلومات الوصول المحلية. لا يضمن شهر ثابت تدفقاً مثالياً أو سماء صافية أو مسارات آمنة.",
      "intro": "توقع إقليمي من نموذج، وليس قياساً عند الشلال أو إعلاناً بأن المسارات مفتوحة. نعرض بيانات حديثة فقط بلا لقطة قديمة من البناء أو متوسط مناخي بديل.",
      "blocks": [
        {
          "h2": "وقت زيارة أوزود: الطقس والوصول الحالي · 1",
          "body": "قبل اختيار الموعد قارن توقعاً إقليمياً حديثاً بالتحذيرات الرسمية ومعلومات الوصول المحلية. لا يضمن شهر ثابت تدفقاً مثالياً أو سماء صافية أو مسارات آمنة."
        },
        {
          "h2": "وقت زيارة أوزود: الطقس والوصول الحالي · 2",
          "body": "بعد المطر اسأل عن الإغلاق وحالة الطريق قبل النزول. لا تفترض أن توقع القرية يمثل كامل الحوض المائي أو استجابة النهر."
        },
        {
          "h2": "وقت زيارة أوزود: الطقس والوصول الحالي · 3",
          "body": "عند توقع الدفء خطط للظل والماء ووتيرة تناسب مجموعتك. وعند توقع البرودة احمل طبقة إضافية؛ لا يقيم النموذج لياقة الشخص أو احتياجات الوصول."
        },
        {
          "h2": "وقت زيارة أوزود: الطقس والوصول الحالي · 4",
          "body": "للتصوير اختر ضوء النهار ضمن ترتيبات وصول مؤكدة. الضوء وقوس المطر وحجم الماء غير مضمونة؛ لا تقترب من الحواف أو المسارات المقيدة للحصول على صورة."
        }
      ]
    },
    "fr": {
      "kicker": "Préparer avec des informations actuelles",
      "h1": "Quand visiter Ouzoud: météo et accès",
      "desc": "Avant de choisir une date, comparez une prévision régionale récente aux alertes officielles et aux informations locales. Aucun mois fixe ne garantit débit idéal, ciel clair ou chemins sûrs.",
      "intro": "Prévision régionale modélisée, pas une mesure aux cascades ni une confirmation d’ouverture des chemins. Aucune ancienne capture de construction ou moyenne climatique ne remplace les données récentes.",
      "blocks": [
        {
          "h2": "Quand visiter Ouzoud: météo et accès · 1",
          "body": "Avant de choisir une date, comparez une prévision régionale récente aux alertes officielles et aux informations locales. Aucun mois fixe ne garantit débit idéal, ciel clair ou chemins sûrs."
        },
        {
          "h2": "Quand visiter Ouzoud: météo et accès · 2",
          "body": "Après la pluie, renseignez-vous sur les fermetures et les chemins avant de descendre. La prévision du village ne représente pas forcément tout le bassin versant ou la réaction du cours d’eau."
        },
        {
          "h2": "Quand visiter Ouzoud: météo et accès · 3",
          "body": "Par prévision chaude, prévoyez ombre, eau et rythme adapté au groupe. Par temps plus froid, ajoutez une couche; le modèle n’évalue ni condition physique ni besoins d’accès."
        },
        {
          "h2": "Quand visiter Ouzoud: météo et accès · 4",
          "body": "Pour les photos, choisissez le jour et un accès confirmé. Lumière, arc-en-ciel et débit ne sont pas garantis; ne franchissez pas une limite pour une image."
        }
      ]
    },
    "zh": {
      "kicker": "按实际条件准备",
      "h1": "奥祖德到访时间：天气与通行核对",
      "desc": "选择日期前，将近期区域天气预报与官方警示、当地通行消息一起核对。没有某个月份能保证理想水量、晴空或安全路径。",
      "intro": "区域模型预报，不是瀑布现场测量，也不代表路径开放。仅显示足够新且有效的数据，不用旧构建快照或气候平均补充。",
      "blocks": [
        {
          "h2": "奥祖德到访时间：天气与通行核对 · 1",
          "body": "选择日期前，将近期区域天气预报与官方警示、当地通行消息一起核对。没有某个月份能保证理想水量、晴空或安全路径。"
        },
        {
          "h2": "奥祖德到访时间：天气与通行核对 · 2",
          "body": "雨后先问是否关闭或路径受影响，再考虑下行。村落预报不一定能代表整个上游汇水区和河流反应。"
        },
        {
          "h2": "奥祖德到访时间：天气与通行核对 · 3",
          "body": "预报较热时安排遮阴、饮水和适合队伍的步速；较冷时加一层衣物。模型不能评估个人体能或无障碍需求。"
        },
        {
          "h2": "奥祖德到访时间：天气与通行核对 · 4",
          "body": "摄影应选择已确认通行时段内的白天。光线、彩虹与水量不保证出现；不要为了拍照靠近边缘或越过限制。"
        }
      ]
    }
  },
  "tickets": {
    "en": {
      "kicker": "Plan with current information",
      "h1": "Ouzoud tickets: check access and service charges",
      "desc": "Google Maps showed “free” and “24 hours” in the 29 October 2026 listing snapshot. No current authority timetable or uniform admission tariff was verified. These labels do not establish safe night access, free parking, a free boat ride or unrestricted entry to every path.",
      "intro": "Google Maps showed “free” and “24 hours” in the 29 October 2026 listing snapshot. No current authority timetable or uniform admission tariff was verified. These labels do not establish safe night access, free parking, a free boat ride or unrestricted entry to every path.",
      "blocks": [
        {
          "h2": "Ouzoud tickets: check access and service charges · 1",
          "body": "Google Maps showed “free” and “24 hours” in the 29 October 2026 listing snapshot. No current authority timetable or uniform admission tariff was verified. These labels do not establish safe night access, free parking, a free boat ride or unrestricted entry to every path."
        },
        {
          "h2": "Ouzoud tickets: check access and service charges · 2",
          "body": "Ask for a current menu and the total price before ordering; check whether drinks, service or a view-side table cost extra. This guide has not verified specific businesses or today’s menu."
        },
        {
          "h2": "Ouzoud tickets: check access and service charges · 3",
          "body": "Before paying for a guide or boat, agree the route, duration, included services, equipment and cancellation terms. No current operator or activity tariff has been verified here."
        },
        {
          "h2": "Ouzoud tickets: check access and service charges · 4",
          "body": "Choose a permitted viewpoint after checking the current route and return climb. Ask specifically about steps, gradients, surfaces, barriers, seating and boarding assistance where relevant. This guide has not audited an accessible route and does not guarantee a complete descent for every visitor."
        }
      ]
    },
    "ar": {
      "kicker": "خطط بمعلومات حالية",
      "h1": "أوزود: التحقق من الدخول ورسوم الخدمات",
      "desc": "أظهرت خرائط Google عبارة «مجاني» و«مفتوح 24 ساعة» في لقطة 29 أكتوبر 2026. لم نتحقق من جدول رسمي حالي أو تعرفة دخول موحدة. لا تثبت هذه العبارات سلامة الزيارة ليلاً أو مجانية المواقف والقوارب أو حرية دخول كل المسارات.",
      "intro": "أظهرت خرائط Google عبارة «مجاني» و«مفتوح 24 ساعة» في لقطة 29 أكتوبر 2026. لم نتحقق من جدول رسمي حالي أو تعرفة دخول موحدة. لا تثبت هذه العبارات سلامة الزيارة ليلاً أو مجانية المواقف والقوارب أو حرية دخول كل المسارات.",
      "blocks": [
        {
          "h2": "أوزود: التحقق من الدخول ورسوم الخدمات · 1",
          "body": "أظهرت خرائط Google عبارة «مجاني» و«مفتوح 24 ساعة» في لقطة 29 أكتوبر 2026. لم نتحقق من جدول رسمي حالي أو تعرفة دخول موحدة. لا تثبت هذه العبارات سلامة الزيارة ليلاً أو مجانية المواقف والقوارب أو حرية دخول كل المسارات."
        },
        {
          "h2": "أوزود: التحقق من الدخول ورسوم الخدمات · 2",
          "body": "اطلب قائمة حالية والثمن الإجمالي قبل الطلب، وتحقق من المشروبات والخدمة وأي رسوم إضافية. لم نتحقق من مطاعم محددة أو قائمة اليوم."
        },
        {
          "h2": "أوزود: التحقق من الدخول ورسوم الخدمات · 3",
          "body": "قبل دفع ثمن دليل أو قارب اتفق على المسار والمدة والخدمات والمعدات وشروط الإلغاء. لم نتحقق هنا من مشغل حالي أو تعرفة نشاط."
        },
        {
          "h2": "أوزود: التحقق من الدخول ورسوم الخدمات · 4",
          "body": "اختر نقطة مشاهدة مسموحاً بها بعد التحقق من حالة المسار والصعود في العودة. اسأل عن الدرج والانحدار والسطح والحواجز والاستراحة وأي مساعدة لازمة. لم يجر هذا الدليل تدقيقاً لمسار ميسر ولا يضمن نزولاً كاملاً لكل الزوار."
        }
      ]
    },
    "fr": {
      "kicker": "Préparer avec des informations actuelles",
      "h1": "Ouzoud: vérifier accès et prix des services",
      "desc": "Google Maps indiquait «gratuit» et «ouvert 24 h/24» dans la capture du 29 octobre 2026. Aucun horaire officiel actuel ni tarif uniforme d’accès n’a été vérifié. Ces mentions ne garantissent ni visite nocturne sûre, ni parking ou bateau gratuits, ni accès à tous les chemins.",
      "intro": "Google Maps indiquait «gratuit» et «ouvert 24 h/24» dans la capture du 29 octobre 2026. Aucun horaire officiel actuel ni tarif uniforme d’accès n’a été vérifié. Ces mentions ne garantissent ni visite nocturne sûre, ni parking ou bateau gratuits, ni accès à tous les chemins.",
      "blocks": [
        {
          "h2": "Ouzoud: vérifier accès et prix des services · 1",
          "body": "Google Maps indiquait «gratuit» et «ouvert 24 h/24» dans la capture du 29 octobre 2026. Aucun horaire officiel actuel ni tarif uniforme d’accès n’a été vérifié. Ces mentions ne garantissent ni visite nocturne sûre, ni parking ou bateau gratuits, ni accès à tous les chemins."
        },
        {
          "h2": "Ouzoud: vérifier accès et prix des services · 2",
          "body": "Demandez le menu actuel et le total avant de commander, y compris boissons, service et suppléments. Aucun établissement précis ni menu du jour n’a été vérifié."
        },
        {
          "h2": "Ouzoud: vérifier accès et prix des services · 3",
          "body": "Avant de payer un guide ou un bateau, convenez du parcours, de la durée, des prestations, du matériel et de l’annulation. Aucun opérateur actuel ni tarif d’activité n’a été vérifié ici."
        },
        {
          "h2": "Ouzoud: vérifier accès et prix des services · 4",
          "body": "Choisissez un point de vue autorisé après avoir vérifié le chemin et la remontée. Demandez des précisions sur les marches, pentes, sols, barrières, sièges et aides nécessaires. Ce guide n’a pas audité un itinéraire accessible et ne garantit pas une descente complète pour tous."
        }
      ]
    },
    "zh": {
      "kicker": "按实际条件准备",
      "h1": "奥祖德门票：入场与服务收费核对",
      "desc": "2026年10月29日的Google地图快照显示“免费”和“24小时”。本站未核实当前官方每日时间表或统一入场价目。这些第三方标签不代表夜间可安全游览、停车或乘船免费，也不代表每条路径都可进入。",
      "intro": "2026年10月29日的Google地图快照显示“免费”和“24小时”。本站未核实当前官方每日时间表或统一入场价目。这些第三方标签不代表夜间可安全游览、停车或乘船免费，也不代表每条路径都可进入。",
      "blocks": [
        {
          "h2": "奥祖德门票：入场与服务收费核对 · 1",
          "body": "2026年10月29日的Google地图快照显示“免费”和“24小时”。本站未核实当前官方每日时间表或统一入场价目。这些第三方标签不代表夜间可安全游览、停车或乘船免费，也不代表每条路径都可进入。"
        },
        {
          "h2": "奥祖德门票：入场与服务收费核对 · 2",
          "body": "点餐前索取当日菜单并确认含饮料、服务及其他附加项目的总价。本站未核实具体商家或今日菜单。"
        },
        {
          "h2": "奥祖德门票：入场与服务收费核对 · 3",
          "body": "聘导游或乘船前确认路线、时长、所含服务、装备及取消条款。本站没有核实当前活动经营者或固定价目。"
        },
        {
          "h2": "奥祖德门票：入场与服务收费核对 · 4",
          "body": "先询问当前路径及返程上坡情况，再选择获准的观景点。具体确认台阶、坡度、路面、护栏、座椅和所需协助。本站没有完成无障碍路线审计，不保证所有旅客都能走完下行路线。"
        }
      ]
    }
  }
};
export const topicSlugs = ["marrakech-transport", "best-season", "tickets"];
