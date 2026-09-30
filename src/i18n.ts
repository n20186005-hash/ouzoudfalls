export const locales = ['ar', 'en', 'fr', 'zh'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'ar';

interface LocaleMeta {
  htmlLang: string;
  dir: 'rtl' | 'ltr';
  ogLocale: string;
  label: string;
}

export const localeMeta: Record<Locale, LocaleMeta> = {
  ar: { htmlLang: 'ar', dir: 'rtl', ogLocale: 'ar_AR', label: 'العربية' },
  en: { htmlLang: 'en', dir: 'ltr', ogLocale: 'en_US', label: 'English' },
  fr: { htmlLang: 'fr', dir: 'ltr', ogLocale: 'fr_FR', label: 'Français' },
  zh: { htmlLang: 'zh', dir: 'ltr', ogLocale: 'zh_CN', label: '中文' }
};

// مسار الصفحة حسب اللغة (العربية في الجذر، البقية في بادئات لغوية)
export function pagePath(locale: Locale): string {
  switch (locale) {
    case 'ar': return '/';
    case 'en': return '/en/';
    case 'fr': return '/fr/';
    case 'zh': return '/zh/';
  }
}

// روابط hreflang البديلة لصفحة رئيسية (تغطي كل اللغات + x-default)
export function hreflangAlternates(site: URL | undefined): { hreflang: string; href: string }[] {
  if (!site) return [];
  const out: { hreflang: string; href: string }[] = locales.map((l) => ({
    hreflang: l,
    href: new URL(pagePath(l), site).href
  }));
  out.push({ hreflang: 'x-default', href: new URL('/en/', site).href });
  return out;
}

// روابط hreflang لصفحة موضوع فرعي ضمن /guide/{slug}
export function topicHreflangAlternates(
  site: URL | undefined,
  slug: string
): { hreflang: string; href: string }[] {
  if (!site) return [];
  const out: { hreflang: string; href: string }[] = locales.map((l) => ({
    hreflang: l,
    href: new URL(pagePath(l) + 'guide/' + slug + '/', site).href
  }));
  out.push({ hreflang: 'x-default', href: new URL('/en/guide/' + slug + '/', site).href });
  return out;
}
