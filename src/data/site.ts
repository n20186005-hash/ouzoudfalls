import type { Locale } from '../i18n';

// حقائق محايدة لغوياً عن الوجهة (مصدر واحد للحقيقة)
export const site = {
  domain: 'ouzoudfalls.com',
  ogImagePath: '/images/og-oujoud.svg',

  latitude: 32.0152,
  longitude: -6.71933,
  plusCode: '277H+4VW',
  streetAddress: '277H+4VW Cascades Ouzoud',
  addressLocality: 'Ouzoud',
  addressRegion: 'Azilal',
  postalCode: '22576',
  countryCode: 'MA',

  rating: 4.6,
  reviewCount: 20133,
  ratingSource: { ar: 'خرائط Google', en: 'Google Maps', fr: 'Google Maps', zh: 'Google 地图' } as Record<Locale, string>,
  ratingSync: { ar: 'سبتمبر 2026', en: 'September 2026', fr: 'septembre 2026', zh: '2026年9月' } as Record<Locale, string>,

  mapsShareUrl: 'https://maps.app.goo.gl/cz7ABdpCUsSBKMXF6',
  tourismUrl: 'https://www.visitmorocco.com/',

  // أسماء الوجهة حسب اللغة
  name: { ar: 'شلالات أوزود', en: 'Ouzoud Waterfalls', fr: "Cascades d'Ouzoud", zh: '橄榄树瀑布' } as Record<Locale, string>,
  fullName: { ar: 'شلالات أوزود', en: 'Ouzoud Waterfalls', fr: "Cascades d'Ouzoud", zh: '橄榄树瀑布' } as Record<Locale, string>,
  shortName: { ar: 'أوزود', en: 'Ouzoud', fr: "Cascades d'Ouzoud", zh: '奥祖德瀑布' } as Record<Locale, string>,
  alternateName: ['Ouzoud Waterfalls', "Cascades d'Ouzoud", 'شلالات أوزود', '橄榄树瀑布', '奥祖德瀑布'],

  city: { ar: 'أوزود', en: 'Ouzoud', fr: 'Ouzoud', zh: '奥祖德' } as Record<Locale, string>,
  province: { ar: 'أزيلال', en: 'Azilal', fr: 'Azilal', zh: '阿齐拉勒' } as Record<Locale, string>,
  region: { ar: 'بني ملال خنيفرة', en: 'Béni Mellal-Khénifra', fr: 'Béni Mellal-Khénifra', zh: '贝尼迈拉勒-海尼夫拉' } as Record<Locale, string>,
  country: { ar: 'المغرب', en: 'Morocco', fr: 'Maroc', zh: '摩洛哥' } as Record<Locale, string>,

  nearbyLandmark1: { ar: 'إيمي نفري (الجسر الطبيعي)', en: 'Imi Nfri (natural bridge)', fr: 'Imi Nfri (pont naturel)', zh: '伊米恩弗里（天然桥）' } as Record<Locale, string>,
  nearbyLandmark2: { ar: 'وادي أوزود والينابيع', en: 'Ouzoud valley and springs', fr: "vallée d'Ouzoud et sources", zh: '奥祖德山谷与泉源' } as Record<Locale, string>
};

export type SiteFacts = typeof site;

// رابط تضمين خرائط Google حسب لغة الواجهة
export function mapsEmbedSrc(locale: Locale): string {
  const q = encodeURIComponent('277H+4VW Cascades Ouzoud, Ouzoud 22576, Morocco');
  const hl = locale === 'ar' ? 'ar' : locale === 'fr' ? 'fr' : locale === 'zh' ? 'zh' : 'en';
  return `https://www.google.com/maps?q=${q}&output=embed&hl=${hl}`;
}
