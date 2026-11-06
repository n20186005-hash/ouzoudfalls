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
  },
  "nearby-attractions": {
    "en": {
      "kicker": "Plan with current information",
      "h1": "Near Ouzoud: other places to consider",
      "desc": "Beyond the falls, the wider Azilal region has lakes, gorges and towns worth a separate plan. Confirm distances, road conditions and opening times locally before combining them with your visit.",
      "intro": "Ouzoud sits in Azilal province between the High and Middle Atlas. Neighbouring sights such as Bin el Ouidane lake and the Imi n'Ifri natural bridge are separate destinations with their own access and conditions; this guide does not operate or confirm them.",
      "blocks": [
        {
          "h2": "Near Ouzoud: other places to consider · 1",
          "body": "Bin el Ouidane is a large reservoir some distance from Ouzoud. Confirm the actual driving route, fuel, and any site access before going; do not assume a short, paved connection."
        },
        {
          "h2": "Near Ouzoud: other places to consider · 2",
          "body": "Imi n'Ifri is described as a natural rock bridge near Demnate. Verify the current approach, any local guide need and walking conditions before visiting; access can change with weather."
        },
        {
          "h2": "Near Ouzoud: other places to consider · 3",
          "body": "Azilal town offers markets and services. Treat it as a supply or rest stop, not a confirmed attraction with fixed hours; check locally what is open on your date."
        },
        {
          "h2": "Near Ouzoud: other places to consider · 4",
          "body": "Keep plans flexible. Mountain roads, weather and limited services can affect a multi-stop day; this guide does not guarantee any connection or opening."
        }
      ]
    },
    "ar": {
      "kicker": "خطط بمعلومات حالية",
      "h1": "بالقرب من أوزود: أماكن أخرى تستحق النظر",
      "desc": "بعيداً عن الشلال، تضم منطقة أزيلال بحيرات وودياناً وبلدات تستحق تخطيطاً منفصلاً. تأكد من المسافات وحالة الطرق وأوقات الفتح محلياً قبل الجمع بينها وبين زيارتك.",
      "intro": "يقع أوزود في إقليم أزيلال بين الأطلس الكبير والمتوسط. فالمعالم المجاورة مثل بحيرة بين الويدان والجسر الصخري عيني نيفري هي وجهات منفصلة بظروفها ووصولها الخاصين؛ ولا يشغل هذا الدليل تلك الأماكن ولا يؤكدها.",
      "blocks": [
        {
          "h2": "بالقرب من أوزود: أماكن أخرى تستحق النظر · 1",
          "body": "بحيرة بين الويدان خزان كبير على بُعد من أوزود. تأكد من مسار القيادة الفعلي والوقود وأي وصول للموقع قبل التوجه إليها؛ لا تفترض وجود وصلة معبدة قصيرة."
        },
        {
          "h2": "بالقرب من أوزود: أماكن أخرى تستحق النظر · 2",
          "body": "توصف عيني نيفري بأنها جسر صخري طبيعي قرب دمنات. تحقق من مسار الوصول الحالي وأي حاجة لدليل محلي وظروف المشي قبل الزيارة؛ فالوصول قد يتغير مع الطقس."
        },
        {
          "h2": "بالقرب من أوزود: أماكن أخرى تستحق النظر · 3",
          "body": "توفر بلدة أزيلال أسواقاً وخدمات. تعامل معها كمحطة تموين أو راحة لا كمعلم مؤكد بساعات ثابتة؛ تحقق محلياً مما هو مفتوح في يومك."
        },
        {
          "h2": "بالقرب من أوزود: أماكن أخرى تستحق النظر · 4",
          "body": "احفظ خططك مرنة. فالطرق الجبلية والطقس والخدمات المحدودة قد تؤثر على يوم يضم عدة محطات؛ ولا يضمن هذا الدليل أي وصلة أو فتح."
        }
      ]
    },
    "fr": {
      "kicker": "Préparer avec des informations actuelles",
      "h1": "Autour d’Ouzoud: d’autres lieux à envisager",
      "desc": "Au-delà des chutes, la région d’Azilal offre lacs, gorges et villes qui méritent un plan séparé. Confirmez distances, état des routes et horaires localement avant de les combiner avec votre visite.",
      "intro": "Ouzoud se trouve dans la province d’Azilal, entre le Haut et le Moyen Atlas. Les sites voisins comme le lac Bin el Ouidane et l’arche naturelle d’Imi n’Ifri sont des destinations distinctes, avec leur propre accès et leurs propres conditions; ce guide ne gère ni ne confirme ces lieux.",
      "blocks": [
        {
          "h2": "Autour d’Ouzoud: d’autres lieux à envisager · 1",
          "body": "Bin el Ouidane est un grand barrage situé à distance d’Ouzoud. Confirmez l’itinéraire réel en voiture, le carburant et l’accès au site avant d’y aller; ne présumez pas d’une courte liaison goudronnée."
        },
        {
          "h2": "Autour d’Ouzoud: d’autres lieux à envisager · 2",
          "body": "Imi n’Ifri est décrite comme un pont rocheux naturel près de Demnate. Vérifiez l’approche actuelle, un éventuel guide local et les conditions de marche avant la visite; l’accès peut changer avec la météo."
        },
        {
          "h2": "Autour d’Ouzoud: d’autres lieux à envisager · 3",
          "body": "La ville d’Azilal propose marchés et services. Traitez-la comme une étape ravitaillement ou repos, non comme un site à horaires fixes; vérifiez localement ce qui est ouvert à votre date."
        },
        {
          "h2": "Autour d’Ouzoud: d’autres lieux à envisager · 4",
          "body": "Restez flexible. Routes de montagne, météo et services limités peuvent affecter une journée à plusieurs étapes; ce guide ne garantit aucune liaison ni ouverture."
        }
      ]
    },
    "zh": {
      "kicker": "按实际条件准备",
      "h1": "奥祖德周边：可考虑的其他去处",
      "desc": "除瀑布外，阿齐拉勒省一带还有湖泊、峡谷和城镇，值得单独规划。结合行程前请于当地确认距离、路况与开放时间。",
      "intro": "奥祖德位于阿特拉斯山之间的阿齐拉勒省。邻近的 Bin el Ouidane 湖、Imi n'Ifri 天然石桥等是各自独立的地点，有各自的到达方式与条件；本站不运营也不确认这些地方。",
      "blocks": [
        {
          "h2": "奥祖德周边：可考虑的其他去处 · 1",
          "body": "Bin el Ouidane 是距离奥祖德有一段车程的大型水库。出发前确认实际驾车路线、油料和现场到达方式；不要假设有短而铺装的连接道路。"
        },
        {
          "h2": "奥祖德周边：可考虑的其他去处 · 2",
          "body": "Imi n'Ifri 被描述为 Demnate 附近的天然岩桥。到访前核实当前到达方式、是否需当地向导及步行条件；天气变化可能影响通行。"
        },
        {
          "h2": "奥祖德周边：可考虑的其他去处 · 3",
          "body": "阿齐拉勒镇有市场和基本服务。把它当作补给或休息点，而非有固定开放时间的确认景点；在当地核对你到访当天什么开放。"
        },
        {
          "h2": "奥祖德周边：可考虑的其他去处 · 4",
          "body": "保持计划弹性。山路、天气与有限服务都可能影响多站点的行程；本站不保证任何接驳或开放状态。"
        }
      ]
    }
  },
  "food-dining": {
    "en": {
      "kicker": "Plan with current information",
      "h1": "Eating at Ouzoud: check before you order",
      "desc": "Small cafés and food stalls operate near the site, but this guide has not verified specific businesses, menus or today's prices. Ask for a current menu and the total before ordering.",
      "intro": "Food service at Ouzoud is local and informal. This independent guide does not endorse a particular café or dish and has not audited hygiene, hours or pricing of any vendor.",
      "blocks": [
        {
          "h2": "Eating at Ouzoud: check before you order · 1",
          "body": "Ask for the current menu and the full price, including drinks, service and any view-side seating, before you order. This guide has not verified specific businesses or today's menu."
        },
        {
          "h2": "Eating at Ouzoud: check before you order · 2",
          "body": "Moroccan tea, simple tagines and snacks are commonly available; confirm what is actually prepared on your visit date rather than assuming a fixed offering."
        },
        {
          "h2": "Eating at Ouzoud: check before you order · 3",
          "body": "Carry water and consider the return climb when eating; this guide does not assess individual vendors' food safety or suitability for your group."
        },
        {
          "h2": "Eating at Ouzoud: check before you order · 4",
          "body": "Paying by card may not be available everywhere; confirm accepted payment on site. No operator or price has been verified here."
        }
      ]
    },
    "ar": {
      "kicker": "خطط بمعلومات حالية",
      "h1": "الأكل في أوزود: تحقق قبل الطلب",
      "desc": "تعمل مقاهٍ وأكشاك صغيرة قرب الموقع، لكن هذا الدليل لم يتحقق من مطاعم محددة أو قوائم أو أسعار اليوم. اسأل عن القائمة الحالية والثمن الإجمالي قبل الطلب.",
      "intro": "تقديم الطعام في أوزود محلي وبسيط. هذا الدليل المستقل لا يزكي مقهىً أو طبقاً معيناً ولم يراجع النظافة أو الساعات أو الأسعار لدى أي بائع.",
      "blocks": [
        {
          "h2": "الأكل في أوزود: تحقق قبل الطلب · 1",
          "body": "اطلب القائمة الحالية والثمن الكامل، بما يشمل المشروبات والخدمة وأي مقعد بإطلالة، قبل الطلب. لم يتحقق هذا الدليل من مطاعم محددة أو قائمة اليوم."
        },
        {
          "h2": "الأكل في أوزود: تحقق قبل الطلب · 2",
          "body": "عادة ما تتوفر الشاي المغربي والطاجنات البسيطة والوجبات الخفيفة؛ أكد ما يُحضر فعلاً في يوم زيارتك بدل افتراض قائمة ثابتة."
        },
        {
          "h2": "الأكل في أوزود: تحقق قبل الطلب · 3",
          "body": "احمل ماءً وضع في الحسبان صعود العودة عند الأكل؛ لا يقيّم هذا الدليل سلامة طعام بائع معين أو ملاءمته لمجموعتك."
        },
        {
          "h2": "الأكل في أوزود: تحقق قبل الطلب · 4",
          "body": "قد لا يكون الدفع بالبطاقة متاحاً في كل مكان؛ تأكد من طرق الدفع المقبولة في الموقع. لم يُتحقق هنا من أي مقدم خدمة أو سعر."
        }
      ]
    },
    "fr": {
      "kicker": "Préparer avec des informations actuelles",
      "h1": "Manger à Ouzoud: vérifiez avant de commander",
      "desc": "De petits cafés et stands proposent à manger près du site, mais ce guide n’a vérifié aucun commerce, menu ou prix du jour. Demandez le menu actuel et le total avant de commander.",
      "intro": "La restauration à Ouzoud est locale et informelle. Ce guide indépendant ne recommande ni café ni plat précis et n’a pas contrôlé l’hygiène, les horaires ni les prix d’un vendeur.",
      "blocks": [
        {
          "h2": "Manger à Ouzoud: vérifiez avant de commander · 1",
          "body": "Demandez le menu actuel et le prix complet, boissons, service et éventuelle table avec vue compris, avant de commander. Ce guide n’a vérifié aucun commerce ni menu du jour."
        },
        {
          "h2": "Manger à Ouzoud: vérifiez avant de commander · 2",
          "body": "Thé marocain, tagines simples et snacks sont courants; confirmez ce qui est réellement préparé à votre date plutôt que d’imaginer une offre fixe."
        },
        {
          "h2": "Manger à Ouzoud: vérifiez avant de commander · 3",
          "body": "Emportez de l’eau et pensez à la remontée après le repas; ce guide n’évalue ni la sécurité alimentaire d’un vendeur ni l’adéquation pour votre groupe."
        },
        {
          "h2": "Manger à Ouzoud: vérifiez avant de commander · 4",
          "body": "Le paiement par carte peut ne pas être partout accepté; confirmez sur place. Aucun opérateur ni prix n’a été vérifié ici."
        }
      ]
    },
    "zh": {
      "kicker": "按实际条件准备",
      "h1": "奥祖德用餐：点餐前先确认",
      "desc": "景点附近有小咖啡馆和摊位，但本站未核实具体商家、菜单或当日价格。点餐前索取当日菜单并确认总价。",
      "intro": "奥祖德的餐饮是当地、非正式的。这个独立指南不背书任何特定咖啡馆或菜品，也未审核任何摊贩的卫生、营业时间或价格。",
      "blocks": [
        {
          "h2": "奥祖德用餐：点餐前先确认 · 1",
          "body": "点餐前索取当日菜单与全部价格，含饮料、服务及任何靠景观座位等附加项。本站未核实具体商家或今日菜单。"
        },
        {
          "h2": "奥祖德用餐：点餐前先确认 · 2",
          "body": "摩洛哥茶、简易塔吉锅和小吃通常可得；请确认你到访当天实际供应什么，而非假设有固定菜品。"
        },
        {
          "h2": "奥祖德用餐：点餐前先确认 · 3",
          "body": "随身带水，并考虑餐后返程上坡。本站不评估个别摊贩的食品安全或是否适合你的队伍。"
        },
        {
          "h2": "奥祖德用餐：点餐前先确认 · 4",
          "body": "并非处处都能刷卡；请在现场确认可接受的付款方式。本站没有核实任何经营者或价格。"
        }
      ]
    }
  },
  "walking-paths": {
    "en": {
      "kicker": "Plan with current information",
      "h1": "Paths and viewpoints at Ouzoud: confirm on arrival",
      "desc": "The descent to the falls uses steps and uneven ground. Choose a permitted route and confirm conditions, barriers and the return climb before going down; this guide has not audited an accessible route.",
      "intro": "Ouzoud's paths are natural and change with weather and use. This independent guide describes general considerations only and does not guarantee a complete, safe descent for every visitor.",
      "blocks": [
        {
          "h2": "Paths and viewpoints at Ouzoud: confirm on arrival · 1",
          "body": "Ask specifically about steps, gradients, surfaces, barriers, seating and boarding assistance where relevant. This guide has not audited an accessible route and does not guarantee a complete descent for every visitor."
        },
        {
          "h2": "Paths and viewpoints at Ouzoud: confirm on arrival · 2",
          "body": "After rain or heat, surfaces can be slippery or tiring. Plan shade, water and a pace suited to your group; the model does not assess an individual's fitness or access needs."
        },
        {
          "h2": "Paths and viewpoints at Ouzoud: confirm on arrival · 3",
          "body": "Choose a permitted viewpoint after checking the current route and return climb. Do not approach an edge or restricted path for a picture."
        },
        {
          "h2": "Paths and viewpoints at Ouzoud: confirm on arrival · 4",
          "body": "Keep children and the group accounted for near water and drops. No current operator, guard or safe route is guaranteed here."
        }
      ]
    },
    "ar": {
      "kicker": "خطط بمعلومات حالية",
      "h1": "مسارات ومواقع المشاهدة في أوزود: أكد عند الوصول",
      "desc": "النزول إلى الشلال يستخدم درجاً وأرضاً غير مستوية. اختر مساراً مسموحاً وتأكد من الظروف والحواجز وصعود العودة قبل النزول؛ لم يراجع هذا الدليل مساراً ميسراً.",
      "intro": "مسارات أوزود طبيعية وتتغير مع الطقس والاستخدام. يصف هذا الدليل المستقل اعتبارات عامة فقط ولا يضمن نزولاً كاملاً وآمناً لكل زائر.",
      "blocks": [
        {
          "h2": "مسارات ومواقع المشاهدة في أوزود: أكد عند الوصول · 1",
          "body": "اسأل تحديداً عن الدرج والانحدار والسطح والحواجز والاستراحة وأي مساعدة لازمة. لم يراجع هذا الدليل مساراً ميسراً ولا يضمن نزولاً كاملاً لكل الزوار."
        },
        {
          "h2": "مسارات ومواقع المشاهدة في أوزود: أكد عند الوصول · 2",
          "body": "بعد المطر أو الحرارة قد تكون الأسطح زلقة أو متعبة. خطط للظل والماء ووتيرة تناسب مجموعتك؛ لا يقيم النموذج لياقة الشخص أو احتياجات الوصول."
        },
        {
          "h2": "مسارات ومواقع المشاهدة في أوزود: أكد عند الوصول · 3",
          "body": "اختر نقطة مشاهدة مسموحاً بها بعد التحقق من حالة المسار وصعود العودة. لا تقترب من حافة أو مسار مقيد للحصول على صورة."
        },
        {
          "h2": "مسارات ومواقع المشاهدة في أوزود: أكد عند الوصول · 4",
          "body": "راقب الأطفال والمجموعة قرب الماء والمنحدرات. لا يُضمن هنا أي عامل أو حارس أو مسار آمن."
        }
      ]
    },
    "fr": {
      "kicker": "Préparer avec des informations actuelles",
      "h1": "Chemins et points de vue à Ouzoud: confirmez à l’arrivée",
      "desc": "La descente vers les chutes emprunte des marches et un sol inégal. Choisissez un chemin autorisé et vérifiez conditions, barrières et remontée avant de descendre; ce guide n’a pas audité d’itinéraire accessible.",
      "intro": "Les chemins d’Ouzoud sont naturels et changent avec le temps et l’usage. Ce guide indépendant ne donne que des indications générales et ne garantit pas une descente complète et sûre pour chaque visiteur.",
      "blocks": [
        {
          "h2": "Chemins et points de vue à Ouzoud: confirmez à l’arrivée · 1",
          "body": "Renseignez-vous précisément sur les marches, pentes, sols, barrières, sièges et aides nécessaires. Ce guide n’a pas audité d’itinéraire accessible et ne garantit pas une descente complète pour tous."
        },
        {
          "h2": "Chemins et points de vue à Ouzoud: confirmez à l’arrivée · 2",
          "body": "Après la pluie ou par chaleur, les sols peuvent être glissants ou fatigants. Prévoyez ombre, eau et rythme adapté; le modèle n’évalue ni condition physique ni besoins d’accès."
        },
        {
          "h2": "Chemins et points de vue à Ouzoud: confirmez à l’arrivée · 3",
          "body": "Choisissez un point de vue autorisé après avoir vérifié le chemin et la remontée. Ne franchissez pas une limite pour une image."
        },
        {
          "h2": "Chemins et points de vue à Ouzoud: confirmez à l’arrivée · 4",
          "body": "Surveillez enfants et groupe près de l’eau et des à-pics. Aucun opérateur, garde ou chemin sûr n’est garanti ici."
        }
      ]
    },
    "zh": {
      "kicker": "按实际条件准备",
      "h1": "奥祖德步道与观景点：抵达后再确认",
      "desc": "下到瀑布需走台阶和不平整地面。选择获准路线，下行前确认路况、护栏及返程上坡；本站未审计无障碍路线。",
      "intro": "奥祖德的步道是自然形成，随天气和使用而变化。这个独立指南只描述一般注意事项，不保证每位游客都能安全走完全程。",
      "blocks": [
        {
          "h2": "奥祖德步道与观景点：抵达后再确认 · 1",
          "body": "具体确认台阶、坡度、路面、护栏、座椅和所需协助。本站没有审计无障碍路线，也不保证所有游客都能完整下行。"
        },
        {
          "h2": "奥祖德步道与观景点：抵达后再确认 · 2",
          "body": "雨后或炎热时路面可能湿滑或费力。安排遮阴、饮水和适合队伍的步速；模型不能评估个人体能或无障碍需求。"
        },
        {
          "h2": "奥祖德步道与观景点：抵达后再确认 · 3",
          "body": "先询问当前路径和返程上坡情况，再选择获准的观景点。不要为了拍照靠近边缘或越过限制。"
        },
        {
          "h2": "奥祖德步道与观景点：抵达后再确认 · 4",
          "body": "在水边和陡坡附近看管好儿童和队伍。本站不保证有经营者、看守或安全路线。"
        }
      ]
    }
  },
  "where-to-stay": {
    "en": {
      "kicker": "Plan with current information",
      "h1": "Staying near Ouzoud: verify before you book",
      "desc": "Lodging ranges from simple guesthouses to larger hotels in the region. This guide has not verified specific properties, availability or prices; confirm directly with the provider before booking.",
      "intro": "Accommodation near Ouzoud and in Azilal is independently run. This guide does not endorse a property and has not audited cleanliness, location, safety or cancellation terms.",
      "blocks": [
        {
          "h2": "Staying near Ouzoud: verify before you book · 1",
          "body": "Confirm the exact location, how to reach it from the site, check-in time and the total price before booking. This guide has not verified specific properties or today's availability."
        },
        {
          "h2": "Staying near Ouzoud: verify before you book · 2",
          "body": "Ask what is included: meals, heating or cooling, parking and cancellation. Verify the provider and terms directly; this guide does not sell or recommend lodging."
        },
        {
          "h2": "Staying near Ouzoud: verify before you book · 3",
          "body": "Consider the return after a day visit and the last reliable transport. Mountain roads and limited night services mean plans should leave adequate daylight."
        },
        {
          "h2": "Staying near Ouzoud: verify before you book · 4",
          "body": "Read recent, independent reviews and book through a channel you trust. No property, rating or price has been verified here."
        }
      ]
    },
    "ar": {
      "kicker": "خطط بمعلومات حالية",
      "h1": "الإقامة قرب أوزود: تحقق قبل الحجز",
      "desc": "تتراوح الإقامة من بيوت ضيافة بسيطة إلى فنادق أكبر في المنطقة. لم يتحقق هذا الدليل من عقارات أو توافر أو أسعار محددة؛ أكد مباشرة مع المزود قبل الحجز.",
      "intro": "الإقامة قرب أوزود وفي أزيلال يديرها أفراد مستقلون. لا يزكي هذا الدليل عقاراً ولم يراجع النظافة أو الموقع أو السلامة أو شروط الإلغاء.",
      "blocks": [
        {
          "h2": "الإقامة قرب أوزود: تحقق قبل الحجز · 1",
          "body": "أكد الموقع الدقيق وطريقة الوصول من الموقع وموعد الاستلام والثمن الإجمالي قبل الحجز. لم يتحقق هذا الدليل من عقارات محددة أو توافر اليوم."
        },
        {
          "h2": "الإقامة قرب أوزود: تحقق قبل الحجز · 2",
          "body": "اسأل عما هو مشمول: الوجبات والتدفئة أو التبريد والمواقف والإلغاء. تحقق من المزود والشروط مباشرة؛ لا يبيع هذا الدليل الإقامة ولا يوصي بها."
        },
        {
          "h2": "الإقامة قرب أوزود: تحقق قبل الحجز · 3",
          "body": "ضع في الحسبان العودة بعد يوم زيارة وآخر نقل موثوق. فالطرق الجبلية والخدمات الليلية المحدودة تعني ضرورة ترك وقت نهاري كافٍ."
        },
        {
          "h2": "الإقامة قرب أوزود: تحقق قبل الحجز · 4",
          "body": "اقرأ تقييمات حديثة مستقلة واحجز عبر قناة تثق بها. لم يُتحقق هنا من أي عقار أو تقييم أو سعر."
        }
      ]
    },
    "fr": {
      "kicker": "Préparer avec des informations actuelles",
      "h1": "Dormir près d’Ouzoud: vérifiez avant de réserver",
      "desc": "L’hébergement va de simples guesthouses à des hôtels plus grands dans la région. Ce guide n’a vérifié aucun établissement, disponibilité ou prix; confirmez directement auprès du prestataire avant de réserver.",
      "intro": "L’hébergement près d’Ouzoud et à Azilal est géré indépendamment. Ce guide ne recommande aucun établissement et n’a pas contrôlé propreté, emplacement, sécurité ou conditions d’annulation.",
      "blocks": [
        {
          "h2": "Dormir près d’Ouzoud: vérifiez avant de réserver · 1",
          "body": "Confirmez l’emplacement exact, l’accès depuis le site, l’heure d’arrivée et le prix total avant de réserver. Ce guide n’a vérifié aucun établissement ni disponibilité du jour."
        },
        {
          "h2": "Dormir près d’Ouzoud: vérifiez avant de réserver · 2",
          "body": "Demandez ce qui est inclus: repas, chauffage ou climatisation, parking et annulation. Vérifiez le prestataire et les conditions directement; ce guide ne vend ni ne recommande de logement."
        },
        {
          "h2": "Dormir près d’Ouzoud: vérifiez avant de réserver · 3",
          "body": "Pensez au retour après la visite et au dernier transport fiable. Routes de montagne et services nocturnes limités imposent de garder assez de jour."
        },
        {
          "h2": "Dormir près d’Ouzoud: vérifiez avant de réserver · 4",
          "body": "Lisez des avis récents et indépendants et réservez via un canal de confiance. Aucun établissement, note ou prix n’a été vérifié ici."
        }
      ]
    },
    "zh": {
      "kicker": "按实际条件准备",
      "h1": "奥祖德附近住宿：预订前先确认",
      "desc": "本地住宿从简易旅馆到周边较大的酒店都有。本站未核实具体物业、可订房态或价格；预订前请直接向提供者确认。",
      "intro": "奥祖德及阿齐拉勒一带的住宿由独立经营者运营。本站不背书任何物业，也未审核其清洁、位置、安全或取消条款。",
      "blocks": [
        {
          "h2": "奥祖德附近住宿：预订前先确认 · 1",
          "body": "预订前确认确切位置、从景点如何到达、入住时间与总价。本站未核实具体物业或当日可订状态。"
        },
        {
          "h2": "奥祖德附近住宿：预订前先确认 · 2",
          "body": "询问是否包含餐饮、取暖或制冷、停车及取消政策。直接向提供者核实条款；本站不销售也不推荐住宿。"
        },
        {
          "h2": "奥祖德附近住宿：预订前先确认 · 3",
          "body": "考虑游览日后的返程与最可靠的末班交通。山路与有限的夜间服务意味着要预留充足白天时间。"
        },
        {
          "h2": "奥祖德附近住宿：预订前先确认 · 4",
          "body": "阅读近期独立评价，并通过你信任的渠道预订。本站没有核实任何物业、评分或价格。"
        }
      ]
    }
  },
  "wildlife-nature": {
    "en": {
      "kicker": "Plan with current information",
      "h1": "Nature at Ouzoud: observe, do not disturb",
      "desc": "The area is known for olive trees, a canyon and Barbary macaques. Observe wildlife from a distance and do not feed animals; this guide does not guarantee sightings or a particular condition.",
      "intro": "Ouzoud's setting is natural and seasonal. This independent guide describes general features only and does not confirm current water flow, animal presence or path conditions.",
      "blocks": [
        {
          "h2": "Nature at Ouzoud: observe, do not disturb · 1",
          "body": "Barbary macaques may be present near the paths. Keep distance, do not feed them, and follow any local guidance; this guide does not guarantee sightings or safe interaction."
        },
        {
          "h2": "Nature at Ouzoud: observe, do not disturb · 2",
          "body": "Olive terraces and the canyon are part of the landscape. Respect private land and stay on permitted routes; this guide does not confirm access to every area."
        },
        {
          "h2": "Nature at Ouzoud: observe, do not disturb · 3",
          "body": "Water volume changes with season and rain. A regional forecast does not measure the falls; do not infer current flow or safe conditions from a single source."
        },
        {
          "h2": "Nature at Ouzoud: observe, do not disturb · 4",
          "body": "Take litter away and avoid disturbing plants or animals. This guide promotes responsible, independent visiting only."
        }
      ]
    },
    "ar": {
      "kicker": "خطط بمعلومات حالية",
      "h1": "طبيعة أوزود: راقب ولا تزعج",
      "desc": "يُعرف المكان بأشجار الزيتون والوادي وقرود المكاك البربري. راقب الحياة البرية من بعيد ولا تطعم الحيوانات؛ لا يضمن هذا الدليل رؤيتها أو حالة معينة.",
      "intro": "محيط أوزود طبيعي وموسمي. يصف هذا الدليل المستقل سمات عامة فقط ولا يؤكد تدفق الماء الحالي أو وجود الحيوانات أو حالة المسارات.",
      "blocks": [
        {
          "h2": "طبيعة أوزود: راقب ولا تزعج · 1",
          "body": "قد تتواجد قرود المكاك البربري قرب المسارات. حافظ على مسافة ولا تطعمها واتبع أي إرشاد محلي؛ لا يضمن هذا الدليل رؤيتها أو تفاعلاً آمناً."
        },
        {
          "h2": "طبيعة أوزود: راقب ولا تزعج · 2",
          "body": "تمثل مدرجات الزيتون والوادي جزءاً من المشهد. احترم الأرض الخاصة وابقَ على المسارات المسموح بها؛ لا يؤكد هذا الدليل الوصول إلى كل المناطق."
        },
        {
          "h2": "طبيعة أوزود: راقب ولا تزعج · 3",
          "body": "يتغير حجم الماء مع الفصول والمطر. لا يقيس التوقع الإقليمي الشلال؛ لا تستنتج التدفق الحالي أو الظروف الآمنة من مصدر واحد."
        },
        {
          "h2": "طبيعة أوزود: راقب ولا تزعج · 4",
          "body": "خذ نفاياتك معك وتجنب إزعاج النباتات أو الحيوانات. يشجع هذا الدليل الزيارة المسؤولة والمستقلة فقط."
        }
      ]
    },
    "fr": {
      "kicker": "Préparer avec des informations actuelles",
      "h1": "La nature à Ouzoud: observez, ne dérangez pas",
      "desc": "Le site est connu pour ses oliviers, son canyon et les macaques de Barbarie. Observez la faune à distance et ne nourrissez pas les animaux; ce guide ne garantit ni observation ni état particulier.",
      "intro": "Le cadre d’Ouzoud est naturel et saisonnier. Ce guide indépendant ne décrit que des traits généraux et ne confirme ni débit actuel, ni présence animale, ni état des chemins.",
      "blocks": [
        {
          "h2": "La nature à Ouzoud: observez, ne dérangez pas · 1",
          "body": "Des macaques de Barbarie peuvent être près des sentiers. Gardez vos distances, ne les nourrissez pas et suivez les consignes locales; ce guide ne garantit ni observation ni interaction sûre."
        },
        {
          "h2": "La nature à Ouzoud: observez, ne dérangez pas · 2",
          "body": "Les terrasses d’oliviers et le canyon font partie du paysage. Respectez la propriété privée et restez sur les chemins autorisés; ce guide ne confirme pas l’accès à chaque zone."
        },
        {
          "h2": "La nature à Ouzoud: observez, ne dérangez pas · 3",
          "body": "Le débit change avec la saison et la pluie. Une prévision régionale ne mesure pas les chutes; ne déduisez pas l’écoulement actuel ni des conditions sûres d’une seule source."
        },
        {
          "h2": "La nature à Ouzoud: observez, ne dérangez pas · 4",
          "body": "Emportez vos déchets et évitez de déranger flore et faune. Ce guide promeut uniquement une visite responsable et indépendante."
        }
      ]
    },
    "zh": {
      "kicker": "按实际条件准备",
      "h1": "奥祖德的自然：观察，不要打扰",
      "desc": "这一带以橄榄树、峡谷和巴巴里猕猴闻名。请远观野生动物，不要投喂；本站不保证能看到动物或某种特定状态。",
      "intro": "奥祖德的环境是自然且随季节变化的。这个独立指南只描述一般特征，不确认当前水量、动物出没或路径状况。",
      "blocks": [
        {
          "h2": "奥祖德的自然：观察，不要打扰 · 1",
          "body": "小径附近可能有巴巴里猕猴。保持距离、不要投喂，并遵循当地指引；本站不保证能看到或能安全互动。"
        },
        {
          "h2": "奥祖德的自然：观察，不要打扰 · 2",
          "body": "橄榄梯田与峡谷是景观的一部分。尊重私人土地，留在获准路线上；本站不确认每个区域都可进入。"
        },
        {
          "h2": "奥祖德的自然：观察，不要打扰 · 3",
          "body": "水量随季节和降雨变化。区域预报并不测量瀑布；不要从单一来源推断当前流量或安全状况。"
        },
        {
          "h2": "奥祖德的自然：观察，不要打扰 · 4",
          "body": "带走垃圾，避免惊扰植物或动物。本站只倡导负责任的独立游览。"
        }
      ]
    }
  },
  "local-products": {
    "en": {
      "kicker": "Plan with current information",
      "h1": "Local products at Ouzoud: buy with care",
      "desc": "Argan oil, olive oil and simple crafts are sold by local vendors. This guide has not verified specific sellers, authenticity or prices; inspect and agree before buying.",
      "intro": "Local products around Ouzoud are independently produced and sold. This independent guide does not endorse a shop or certify any item's origin, quality or license.",
      "blocks": [
        {
          "h2": "Local products at Ouzoud: buy with care · 1",
          "body": "Ask about origin, ingredients and price before buying argan or olive oil. This guide has not verified specific sellers or product authenticity."
        },
        {
          "h2": "Local products at Ouzoud: buy with care · 2",
          "body": "Check seals, labels and freshness yourself; do not assume a certificate or a fixed price. Confirm payment and any return possibility on site."
        },
        {
          "h2": "Local products at Ouzoud: buy with care · 3",
          "body": "Simple crafts and souvenirs are available from various vendors. Compare and choose what suits you; this guide does not recommend a particular stall."
        },
        {
          "h2": "Local products at Ouzoud: buy with care · 4",
          "body": "Keep receipts and buy through a channel you trust. No seller, trademark or price has been verified here."
        }
      ]
    },
    "ar": {
      "kicker": "خطط بمعلومات حالية",
      "h1": "منتجات أوزود المحلية: اشترِ بحرص",
      "desc": "يُباع زيت الأرغان والزيتون والحرف البسيطة من بائعين محليين. لم يتحقق هذا الدليل من بائعين أو أصالة أو أسعار محددة؛ افحص واتفق قبل الشراء.",
      "intro": "تُنتج وتُباع المنتجات المحلية حول أوزود بشكل مستقل. لا يزكي هذا الدليل متجراً ولا يوثق منشأ أي غرض أو جودته أو ترخيصه.",
      "blocks": [
        {
          "h2": "منتجات أوزود المحلية: اشترِ بحرص · 1",
          "body": "اسأل عن المنشأ والمكونات والسعر قبل شراء زيت الأرغان أو الزيتون. لم يتحقق هذا الدليل من بائعين محددين أو أصالة المنتج."
        },
        {
          "h2": "منتجات أوزود المحلية: اشترِ بحرص · 2",
          "body": "افحص الأختام والبطاقات والحداثة بنفسك؛ لا تفترض وجود شهادة أو سعر ثابت. أكد طريقة الدفع وأي إمكانية للإرجاع في الموقع."
        },
        {
          "h2": "منتجات أوزود المحلية: اشترِ بحرص · 3",
          "body": "تتوفر حرف وبضائع تذكارية بسيطة من بائعين مختلفين. قارن واختر ما يناسبك؛ لا يوصي هذا الدليل بكشك معين."
        },
        {
          "h2": "منتجات أوزود المحلية: اشترِ بحرص · 4",
          "body": "احتفظ بإيصالات واشترِ عبر قناة تثق بها. لم يُتحقق هنا من أي بائع أو علامة أو سعر."
        }
      ]
    },
    "fr": {
      "kicker": "Préparer avec des informations actuelles",
      "h1": "Produits locaux à Ouzoud: achetez avec prudence",
      "desc": "Huile d’argan, huile d’olive et petits artisanats sont vendus par des vendeurs locaux. Ce guide n’a vérifié aucun vendeur, authenticité ou prix; inspectez et confirmez avant d’acheter.",
      "intro": "Les produits locaux autour d’Ouzoud sont produits et vendus indépendamment. Ce guide indépendant ne recommande aucune boutique et n’atteste l’origine, la qualité ou la licence d’aucun article.",
      "blocks": [
        {
          "h2": "Produits locaux à Ouzoud: achetez avec prudence · 1",
          "body": "Renseignez-vous sur l’origine, les ingrédients et le prix avant d’acheter de l’argan ou de l’huile d’olive. Ce guide n’a vérifié aucun vendeur ni l’authenticité du produit."
        },
        {
          "h2": "Produits locaux à Ouzoud: achetez avec prudence · 2",
          "body": "Vérifiez vous-même sceaux, étiquettes et fraîcheur; ne présumez ni certificat ni prix fixe. Confirmez le paiement et d’éventuels retours sur place."
        },
        {
          "h2": "Produits locaux à Ouzoud: achetez avec prudence · 3",
          "body": "Artisanats et souvenirs simples sont proposés par divers vendeurs. Comparez et choisissez selon vos besoins; ce guide ne recommande pas un stand précis."
        },
        {
          "h2": "Produits locaux à Ouzoud: achetez avec prudence · 4",
          "body": "Conservez les reçus et achetez via un canal de confiance. Aucun vendeur, label ou prix n’a été vérifié ici."
        }
      ]
    },
    "zh": {
      "kicker": "按实际条件准备",
      "h1": "奥祖德当地产品：谨慎购买",
      "desc": "当地摊贩出售阿甘油、橄榄油和简单手工艺品。本站未核实具体卖家、真伪或价格；购买前请查验并谈妥。",
      "intro": "奥祖德周边的本地产品由独立生产者制作和销售。这个独立指南不背书任何店铺，也不为任何物品的产地、质量或授权作认证。",
      "blocks": [
        {
          "h2": "奥祖德当地产品：谨慎购买 · 1",
          "body": "购买阿甘油或橄榄油前，询问产地、成分和价格。本站未核实具体卖家或产品真伪。"
        },
        {
          "h2": "奥祖德当地产品：谨慎购买 · 2",
          "body": "自行检查封印、标签和新鲜度；不要假设有证书或固定价格。现场确认付款方式与是否可退。"
        },
        {
          "h2": "奥祖德当地产品：谨慎购买 · 3",
          "body": "各摊贩有简单的手工艺品和纪念品。多做比较、按需要选择；本站不推荐某个具体摊位。"
        },
        {
          "h2": "奥祖德当地产品：谨慎购买 · 4",
          "body": "保留收据，并通过你信任的渠道购买。本站没有核实任何卖家、商标或价格。"
        }
      ]
    }
  }
};
export const topicSlugs = ["marrakech-transport", "best-season", "tickets", "nearby-attractions", "food-dining", "walking-paths", "where-to-stay", "wildlife-nature", "local-products"];
