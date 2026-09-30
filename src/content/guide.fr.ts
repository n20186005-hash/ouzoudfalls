import type { Guide } from './guide';

export const frGuide: Guide = {
  nav: [
    { href: '#about', label: 'À propos' },
    { href: '#visit', label: 'La cascade' },
    { href: '#transport', label: 'Accès' },
    { href: '#food', label: 'Restauration' },
    { href: '#nearby', label: 'Aux alentours' },
    { href: '#reviews', label: 'Avis' },
    { href: '#weather', label: 'Météo' },
    { href: '#faq', label: 'FAQ' }
  ],
  hero: {
    kicker: 'Province d’Azilal · Béni Mellal-Khénifra',
    title: ['Cascades', "d'Ouzoud"],
    desc: 'Une eau qui tombe sur des roches rouges et une vallée couverte d’oliviers ; une balade dont le décor change à chaque virage, du bord supérieur jusqu’à la rive de la rivière.',
    badgeHeight: 'Environ 110 m de haut',
    badgeFree: 'L’accès au site naturel est gratuit',
    ratingNote: 'La note et le nombre d’avis sont synchronisés depuis les avis Google Maps · {sync} · Voir tous les avis Google Maps ↗'
  },
  about: {
    kicker: 'À propos du lieu',
    h2: 'À propos de {name}',
    p1: 'Bienvenue aux <strong>{name}</strong>, plus connues sous le nom de <strong>{short}</strong>. Elles se trouvent au cœur de <strong>{city}</strong>, dans la province d’<strong>{province}</strong>, au <strong>{country}</strong>, et sont une destination phare pour les voyageurs de la région.',
    hierarchy: '{name} ← {city} ← {province} ← {country}',
    cards: [
      { icon: '⏱', title: 'Durée suggérée', text: '3 à 5 heures pour une visite tranquille incluant la descente, le retour et un repas.' },
      { icon: '☀', title: 'Meilleur moment', text: 'Les matins sont les plus calmes ; la lumière de midi traverse le voile d’eau de la chute.' },
      { icon: '🎟', title: 'Entrée', text: 'Le site naturel n’a pas de billet d’entrée ; les services optionnels sont payants.' },
      { icon: '🥾', title: 'Sentier', text: 'De facile à modéré, mais la pente et le sol humide demandent de l’attention.' }
    ]
  },
  visit: {
    kicker: 'Eau et oasis',
    h2: 'Roche rouge, oliviers et eau blanche',
    p: 'La signature ici n’est pas seulement la chute ; la couleur argileuse des falaises, la végétation sur les deux rives et le bruit de l’eau créent une identité visuelle différente des villes marocaines.'
  },
  transport: {
    kicker: 'Se déplacer',
    h2: 'Emplacement et accès à {short} à {city}',
    cards: [
      { title: 'Depuis Marrakech', text: 'La distance terrestre est d’environ 180 km. Le trajet dure généralement 2,5 à 3,5 heures selon la route et les arrêts. Des excursions organisées, des voitures privées et des transports partagés sont disponibles.' },
      { title: 'En voiture', text: 'Suivez la direction Ouzoud / Azilal puis les panneaux vers la zone des cascades. Les derniers tronçons sont montagneux, réduisez la vitesse surtout après le coucher du soleil ou la pluie.' },
      { title: 'Parking', text: 'Des parkings privés se trouvent près des entrées des sentiers. Les tarifs varient selon l’emplacement et la saison ; demandez le prix avant de laisser la voiture et gardez de la petite monnaie marocaine.' }
    ],
    mapTitle: 'Carte des cascades d’Ouzoud',
    cards2: [
      { title: '✈️ Depuis l’aéroport de Marrakech Menara (RAK)', text: 'Ouzoud est à environ 180 km de l’aéroport. Options : louer une voiture (le plus flexible), une voiture privée ou un taxi négocié (~2,5–3,5 h), ou une excursion organisée. La route passe par Azilal puis tourne vers le village.' },
      { title: '🚌 Transports publics', text: 'Cars interurbains de Marrakech à Azilal ou Béni Mellal, puis un « grand taxi » partagé vers Ouzoud. Le moins cher mais le plus long ; confirmez les horaires de retour à l’avance.' },
      { title: '🚕 Taxi', text: 'Les grands taxis depuis Azilal ou Béni Mellal conduisent les visiteurs au début du sentier. Fixez le prix avant de partir et partagez avec d’autres passagers pour réduire le coût.' },
      { title: '🚗 Conduite autonome', text: 'Suivez Ouzoud / Azilal. Les derniers tronçons sont montagneux, réduisez la vitesse surtout après le coucher du soleil ou la pluie. Le parking d’entrée est payant.' }
    ]
  },
  food: {
    kicker: 'À table',
    h2: 'Cuisine locale après la marche',
    restaurants: [
      { title: 'Chez Mounir', text: 'Une option réputée près de la chute, proposant des plats marocains adaptés à un repas après la descente.' },
      { title: 'Restaurant Chez Rachid', text: 'Un restaurant proche avec des options marocaines et méditerranéennes, idéal pour un repas rapide avant le retour.' },
      { title: 'La Table Berbere', text: 'Une option d’ambiance amazighe et marocaine, avec une atmosphère locale près du parcours de visite.' }
    ]
  },
  nearby: {
    kicker: 'Près de la chute',
    h2: 'Sites et lieux autour de {short}',
    p: 'Lors de la visite des <strong>{name}</strong>, les voyageurs peuvent facilement explorer les sites historiques et points d’intérêt environnants, notamment <strong>{lm1}</strong> et <strong>{lm2}</strong>.',
    cards: [
      { title: 'Sentiers de la vallée et sources', text: 'Au-delà du point principal, il y a des chemins plus petits et des paysages de vallée et de sources. Choisissez un sentier selon le temps et l’état du sol, et évitez les sections glissantes après la pluie sans équipement adapté.' },
      { title: 'Imi Nfri', text: 'Le pont naturel près de Demnate est une étape logique pour ceux qui ont une voiture et prévoient une journée plus longue dans la région, et peut se combiner avec Ouzoud avant de revenir vers Marrakech.' }
    ]
  },
  reviews: {
    kicker: 'Avis',
    h2: 'Que disent les visiteurs de {name} ?',
    basedOn: 'Basé sur {n} avis',
    syncNote: 'Synchronisé depuis les avis Google Maps, heure de synchronisation {sync} ; les droits appartiennent aux auteurs originaux et à Google Maps.',
    button: 'Voir tous les avis sur Google Maps ↗'
  },
  weather: {
    kicker: 'Météo actuelle',
    h2: 'Météo et prévisions à 7 jours à {short}',
    note: 'Les prévisions pour le point de la chute sont mises à jour automatiquement à l’ouverture de la page. Les conseils sont basés sur la météo et ne remplacent pas les alertes officielles.'
  },
  history: {
    kicker: 'Origines',
    h2: 'Histoire et récits des cascades d’Ouzoud',
    paragraphs: [
      'Le nom « Ouzoud » est lié en amazighe (berbère) à l’olivier ; la vallée autour des chutes est couverte de forêts d’oliviers sauvages et de pins, ce qui a donné son nom au lieu et un caractère calme différent du bruit des villes.',
      'L’eau chute d’environ 110 mètres sur des falaises de calcaire rouge datant d’époques géologiques anciennes, pour se déverser dans l’Oued El Abid (vallée d’Ouzoud) et former l’une des cascades les plus célèbres et les plus hautes du Maroc et d’Afrique du Nord.',
      'La rivière Ouzoud (<strong>source des cascades d’Ouzoud</strong>) naît de sources de montagne près de Demnate, l’eau s’accumule et s’écoule dans la vallée avant de chuter sur la falaise rouge ; cela explique le fort débit surtout au printemps après la fonte des neiges de l’Atlas.',
      'Les tribus amazighes de la région d’Azilal ont transformé la vallée au fil des siècles en terres agricoles en terrasses d’oliviers et de céréales, dans des traditions d’hospitalité marocaine authentiques encore vivantes dans le village aujourd’hui.',
      'Une légende locale raconte que le voile d’eau dégage un arc-en-ciel à midi les jours d’été clairs, et que le lieu a longtemps été une halte fraîche pour les caravanes et les voyageurs avant de gravir les plateaux voisins.'
    ],
    cards: [
      { icon: '🏞', title: 'Environ 110 m de haut', text: 'Trois niveaux de chute successifs rendent la scène en plusieurs couches.' },
      { icon: '🌿', title: 'Réserve naturelle', text: 'La vallée abrite des macaques de Barbarie, des oliviers sauvages et des oiseaux.' },
      { icon: '🪨', title: 'Roche rouge', text: 'Les falaises d’argile colorée font partie de l’identité visuelle du lieu.' }
    ]
  },
  seasons: {
    kicker: 'Quand visiter',
    h2: 'Stratégie de visite selon les saisons',
    intro: 'Ouzoud a un climat montagnard méditerranéen : un été chaud et relativement sec, un hiver froid et humide, et un printemps qui connaît le débit maximal après la fonte des neiges de l’Atlas. Voici une comparaison simplifiée réunissant météo, eau et faune.',
    cards: [
      { title: 'Printemps', month: 'Mars – Mai', items: ['Débit maximal après la fonte des neiges.', 'Végétation dense et fleurs sauvages.', 'Doux 15–25 °C.', 'Affluence modérée le week-end.'] },
      { title: 'Été', month: 'Juin – Août', items: ['Forte chaleur 30–38 °C.', 'Débit moindre mais continu.', 'Pic de visiteurs ; préférez le matin.', 'Risque d’orages l’après-midi.'] },
      { title: 'Automne', month: 'Septembre – Novembre', items: ['Doux et agréable.', 'Niveau d’eau qui remonte progressivement.', 'Lumière excellente pour la photo.', 'Moins de monde qu’en été.'] },
      { title: 'Hiver', month: 'Décembre – Février', items: ['Mois les plus froids, peut-être du brouillard.', 'Débit le plus fort après la pluie.', 'Sentiers glissants, prudence.', 'Le moins de visiteurs.'] }
    ],
    analysisTitle: 'Analyse complète : météo, eau et faune',
    analysis: [
      { title: 'Météo', text: 'Climat montagnard méditerranéen avec un grand écart de température jour/nuit. L’été est chaud, l’hiver froid et humide ; les pluies se concentrent en hiver et au printemps, parfois avec des orages locaux.' },
      { title: 'Qualité de l’eau', text: 'La chute est alimentée par des sources et la fonte des neiges de l’Atlas. L’eau est naturellement douce mais devient trouble après de fortes pluies ; ne nagez que dans les bassins sûrs désignés localement.' },
      { title: 'Faune', text: 'Les macaques de Barbarie sont observés autour de la vallée, ainsi que des oiseaux de proie et des espèces liées aux forêts d’oliviers. Ne nourrissez pas et n’approchez pas les singes ; gardez vos distances.' }
    ]
  },
  services: {
    kicker: 'Services aux visiteurs',
    h2: 'Équipements autour de la chute',
    intro: 'Vous trouverez ci-dessous les types d’équipements généralement disponibles près d’Ouzoud, sans recommander une partie précise, pour garder l’information neutre et utile à chaque visiteur.',
    cards: [
      { icon: '🚻', title: 'Toilettes', text: 'Disponibles près des entrées principales des sentiers ; une petite contribution d’entretien peut être demandée.' },
      { icon: '🅿️', title: 'Parking', text: 'Petits parkings payants près du village ; ils se remplissent tôt le week-end.' },
      { icon: '🍽', title: 'Restaurants & cafés', text: 'Des lieux locaux servent des plats marocains et amazighs (tajine, thé à la menthe, jus d’orange). Choisissez selon la propreté et le prix.' },
      { icon: '🛏', title: 'Hébergement', text: 'Maisons d’hôtes et petits hôtels dans le village et la ville d’Azilal ; réservez tôt en été.' },
      { icon: '🛒', title: 'Boutiques & provisions', text: 'Petits magasins pour souvenirs et provisions : eau, snacks, huile d’olive locale et artisanat.' },
      { icon: '⛽', title: 'Carburant & recharge', text: 'Stations-service à Azilal et sur les grands axes ; la recharge des VE est rare, prévoyez à l’avance.' }
    ]
  },
  itineraries: {
    kicker: 'Planifiez votre visite',
    h2: 'Itinéraires selon le type de visiteur',
    audiences: [
      { title: '👨‍👩‍👧 Familles avec enfants', items: ['Commencez par la terrasse supérieure sûre pour les enfants.', 'Évitez la descente raide ou utilisez les escaliers avec précaution.', 'Observez les singes de loin, ne les nourrissez pas.', 'Prévoyez un pique-nique court près des restaurants.'] },
      { title: '📷 Photographes de nature', items: ['Pic : lever et coucher du soleil sur le bord supérieur.', 'Arc-en-ciel dans le voile à midi en été.', 'Plateforme inférieure pour capturer toute la chute.', 'Les terrasses d’oliviers font un bel arrière-plan.'] },
      { title: '♿ Mobilité réduite', items: ['Terrasse supérieure accessible avec une pente douce.', 'Évitez les escaliers jusqu’au bas.', 'Des bancs de repos sur le sentier supérieur.', 'Planifiez une visite courte et confortable.'] }
    ],
    trips: [
      { title: 'Demi-journée', text: 'Arrivée le matin → marche légère sur le bord supérieur → photo panoramique → repas local calme → départ avant la chaleur de midi.' },
      { title: 'Journée complète', text: 'Descente vers la base + balade en barque optionnelle → déjeuner → prolongation vers le pont naturel (Imi Nfri) ou la ville d’Azilal si le temps le permet.' }
    ]
  },
  responsibility: {
    kicker: 'Intérêt général',
    h2: 'Tourisme responsable et sensibilisation',
    intro: 'Site naturel partagé, Ouzoud reste belle grâce à ses visiteurs. Voici de simples conseils pour une visite sûre et sans trace :',
    cards: [
      { icon: '🌳', title: 'Ne pas nourrir les singes', text: 'Nourrir perturbe le comportement des animaux et les rapproche du danger ; observez de loin.' },
      { icon: '🥾', title: 'Restez sur les sentiers', text: 'N’approchez pas le bord de la chute ni les sentiers glissants après la pluie sans précautions.' },
      { icon: '🚯', title: 'Pas de déchets', text: 'Repartez avec ce que vous avez apporté ; ne laissez pas de sacs ou bouteilles dans la vallée.' },
      { icon: '💧', title: 'Sécurité aquatique', text: 'Ne nagez pas juste à la chute ; utilisez uniquement les zones sûres quand elles existent.' },
      { icon: '🕌', title: 'Respectez les coutumes', text: 'Portez une tenue modeste en traversant le village ; photographiez les habitants avec respect.' },
      { icon: '🤝', title: 'Soutien local', text: 'Acheter des produits et artisanats locaux soutient la communauté autour du site.' }
    ]
  },
  costs: {
    kicker: 'Coûts pratiques',
    h2: 'Que pourriez-vous payer ?',
    cards: [
      { items: [
        { h: 'Billet d’entrée', p: 'Généralement pas de billet pour le site naturel lui-même.' },
        { h: 'Barque', p: 'Optionnel et payant localement ; les prix peuvent changer selon la saison et l’exploitation.' }
      ] },
      { items: [
        { h: 'Parking', p: 'Petits parkings payants près des entrées ; fixez le prix à l’avance.' },
        { h: 'Guide', p: 'Non requis pour le sentier principal, mais utile pour une explication locale et des sentiers plus longs.' }
      ] }
    ]
  },
  faq: {
    kicker: 'FAQ',
    h2: 'Questions fréquentes',
    items: [
      ['Où se trouvent les cascades d’Ouzoud ?', 'Les cascades d’Ouzoud se trouvent dans le village d’Ouzoud, province d’Azilal, dans la région de Béni Mellal-Khénifra au Maroc, à environ 180 km de Marrakech.'],
      ['L’entrée aux cascades d’Ouzoud est-elle gratuite ?', 'L’accès au site naturel lui-même est généralement gratuit, tandis que les services optionnels tels que parking, barques, guides et restauration sont payants séparément.'],
      ['Combien de temps faut-il pour la visite ?', 'Prévoyez 3 à 5 heures pour marcher, descendre au pied de la chute, vous arrêter aux points de vue et prendre un repas tranquille.'],
      ['Quel est le meilleur moment de la journée ?', 'Le matin tôt est généralement le plus calme, tandis que le soleil de midi peut révéler un arc-en-ciel dans le voile de la chute. Évitez les chaussures lisses après la pluie.'],
      ['Peut-on y accéder en voiture ?', 'Oui, les routes mènent au village d’Ouzoud puis se poursuivent à pied par les sentiers jusqu’aux points de vue et au fond de la vallée.'],
      ['Y a-t-il des singes dans la région ?', 'Les macaques de Barbarie sont parfois observés dans la région. Mieux vaut ne pas les nourrir ni les approcher de façon à les déranger.'],
      ['Pourquoi les cascades d’Ouzoud sont-elles importantes ?', 'Elles comptent parmi les destinations naturelles les plus célèbres du Maroc, d’environ 110 m de haut, avec un environnement de vallée couverte d’oliviers le long des deux rives de la rivière.']
    ]
  },
  sources: {
    heading: 'Sources et références',
    paragraphs: [
      '<strong>Avis · heure de synchronisation {sync} :</strong> Synchronisé depuis les avis Google Maps, heure de synchronisation {sync} ; les droits appartiennent aux auteurs originaux et à Google Maps. <a href="{maps}" target="_blank" rel="noopener noreferrer" class="text-[var(--clay)] underline">Voir tous les avis sur Google Maps ↗</a>',
      '<strong>Sources des images :</strong> Photos réelles des cascades d’Ouzoud issues de Wikimedia Commons, dont des œuvres de Jakub Hałun et Kasmii, diffusées selon leurs licences libres.',
      '<strong>Tourisme officiel :</strong> Pour les mises à jour et conseils régionaux, visitez <a href="{tourism}" target="_blank" rel="noopener noreferrer" class="text-[var(--clay)] underline">le portail officiel du tourisme marocain (Visit Morocco) ↗</a>.',
      'Les informations pratiques ont été rassemblées à partir de Google Maps et de sources de voyage locales et générales ; les prix et services optionnels peuvent changer.'
    ]
  },
  footer: 'Il s’agit d’un site guide indépendant et non officiel, et il ne représente pas la gestion des cascades d’Ouzoud ni aucune entité gouvernementale ou commerciale.',
  weatherI18n: {
    wmo: {
      0: { t: 'Clair', i: '☀️' }, 1: { t: 'Plutôt clair', i: '🌤️' }, 2: { t: 'Partiellement nuageux', i: '⛅' }, 3: { t: 'Nuageux', i: '☁️' },
      45: { t: 'Brouillard', i: '🌫️' }, 48: { t: 'Brouillard', i: '🌫️' },
      51: { t: 'Bruine', i: '🌦️' }, 53: { t: 'Bruine', i: '🌦️' }, 55: { t: 'Bruine', i: '🌦️' }, 56: { t: 'Bruine verglaçante', i: '🌧️' }, 57: { t: 'Bruine verglaçante', i: '🌧️' },
      61: { t: 'Pluie faible', i: '🌦️' }, 63: { t: 'Pluie modérée', i: '🌧️' }, 65: { t: 'Forte pluie', i: '🌧️' },
      66: { t: 'Pluie verglaçante', i: '🌧️' }, 67: { t: 'Pluie verglaçante', i: '🌧️' },
      71: { t: 'Neige', i: '❄️' }, 73: { t: 'Neige', i: '❄️' }, 75: { t: 'Neige', i: '❄️' }, 77: { t: 'Grains de neige', i: '🌨️' },
      80: { t: 'Averses de pluie', i: '🌦️' }, 81: { t: 'Averses de pluie', i: '🌧️' }, 82: { t: 'Fortes averses', i: '🌧️' },
      85: { t: 'Averses de neige', i: '🌨️' }, 86: { t: 'Averses de neige', i: '🌨️' },
      95: { t: 'Orage', i: '⛈️' }, 96: { t: 'Orage avec grêle', i: '⛈️' }, 99: { t: 'Orage avec grêle', i: '⛈️' }
    },
    wday: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    today: 'Aujourd’hui',
    labels: {
      highLow: 'Max / Min', precip: 'Risque de pluie', wind: 'Vent', uv: 'UV',
      forecast: 'Prévisions à 7 jours', loading: 'Chargement de la météo…', error: 'Impossible de charger la météo pour le moment. Réessayez plus tard ou vérifiez votre connexion.',
      riskTitle: '⚠️ Alertes météo', noRisk: '✅ Aucune alerte météo sévère pour le moment.',
      outfit: '👕 Vêtements suggérés', play: '🗺 Plan de visite', items: '🎒 Choses à emporter'
    },
    advice: {
      precipHighOutfit: 'Forte probabilité de pluie aujourd’hui ; emportez un parapluie ou un imperméable, et privilégiez les visites abritées si possible.',
      precipHighPlay: 'Avec une forte pluie probable, reportez la descente vers la vallée et les sentiers raides.',
      precipHighItems: 'Parapluie ou imperméable',
      lightRainOutfit: 'Pluie légère et sol glissant ; avancez avec précaution, les expériences en plein air sont moins agréables.',
      lightRainItems: 'Parapluie pliable',
      modRainRisk: 'Pluie modérée : évitez les chenaux d’eau et les bas-fonds ; les barques peuvent s’arrêter.',
      modRainItems: 'Imperméable (évitez un long parapluie par vent)',
      heavyRainRisk: 'Forte pluie : n’approchez pas le bord de la chute ni les eaux courantes ; les activités nautiques sont interrompues.',
      heavyRainItems: 'Imperméable étanche',
      thunderRisk: 'Méfiez-vous du tonnerre et de la foudre : ne grimpez pas la montagne, ne nagez pas et ne restez pas sous les arbres par pluie ; les activités nautiques s’arrêtent généralement.',
      rainPlay: 'Par temps de pluie, le niveau de la vallée monte vite ; n’approchez pas le bord de la chute ni les eaux courantes, et ne nagez pas sans vérifier la sécurité.',
      hotOutfit: 'Forte chaleur ; évitez de sortir à midi et portez des vêtements légers.',
      hotPlay: 'Raccourcissez la marche au soleil et reposez-vous à l’ombre.',
      hotItems: 'Crème solaire, assez d’eau, accessoires rafraîchissants',
      uvOutfit: 'UV forts ; protégez votre peau et vos yeux.',
      uvItems: 'Crème solaire, lunettes de soleil, chapeau',
      tempDiffOutfit: 'Grand écart de température jour/nuit ; emportez une couche supplémentaire facile à ajouter ou retirer.',
      coldOutfit: 'Température basse ; bien vous couvrir et éviter de rester longtemps sous l’eau qui tombe.',
      coldItems: 'Manteau épais, écharpe',
      windActiveOutfit: 'Vent actif ; un chapeau peut s’envoler, évitez les vêtements amples.',
      windActivePlay: 'Les balades en barque et activités en plein air peuvent s’interrompre temporairement.',
      windStrongRisk: 'Vent fort : éloignez-vous des panneaux et rochers de la vallée ; les activités nautiques s’arrêtent généralement.',
      clearOutfit: 'Temps clair, propice à la marche en extérieur.',
      clearPlay: 'Bon moment pour observer le lever ou le coucher du soleil de la chute au-dessus de la vallée.',
      clearItems: 'N’oubliez pas la crème solaire',
      cloudyOutfit: 'Lumière douce, très agréable pour la photo sans chaleur brûlante.',
      cloudyPlay: 'Idéal pour une longue marche autour de la vallée et des terrasses.',
      fogRisk: 'Visibilité réduite ; les sentiers glissants et ponts sont plus difficiles, les trajets peuvent être retardés.',
      fogItems: 'Soyez prudent sur les escaliers et bords'
    }
  }
};
