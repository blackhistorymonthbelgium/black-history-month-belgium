
const locales = require('./locales');

function getDefaultLanguage() {
  for (let key in locales) {
    if (locales[key].default)
      return key;
  }
  return 'en';
}
const defaultLanguage = getDefaultLanguage();

function createPagePath(node, lang) {
  if (!node.fields)
    console.log('Error: invalid node:', node);
  
  const language = lang || node.frontmatter.language;
  const originalSlug = node.fields.slug;
  const slug = node.frontmatter.slug;
  let resultingSlug = originalSlug;
  if (slug !== null) {
    const index = originalSlug.lastIndexOf('/',  originalSlug.length - 2);
    resultingSlug = originalSlug.substring(0, index) + '/' + slug;
  }
  if (language != null && language !== defaultLanguage)
    resultingSlug = '/' + language + resultingSlug;
  return resultingSlug;
}

function getLocalizedUrl(genericUrl, lang) {
  if (lang === defaultLanguage)
    return genericUrl;

  return '/' + lang + genericUrl;
}

function getRelocalizedUrl(currentUrl, currentLang, targetLang) {
  if (currentLang === targetLang)
    return currentUrl;
  
  const genericUrl = currentLang === defaultLanguage
    ? currentUrl
    : currentUrl.substring(1 + currentLang.length);
  return getLocalizedUrl(genericUrl, targetLang);
}

function getPostsInLanguage(edges, language) {
  const postsInDefaultLanguage = edges.filter(edge => edge.node.frontmatter.language === null || edge.node.frontmatter.language === defaultLanguage);
  if (language === defaultLanguage)
    return postsInDefaultLanguage;
  
  const postsInLanguage = edges.filter(edge => edge.node.frontmatter.language === language);
  const pathsInLanguage = postsInLanguage.map(edge => createPagePath(edge.node, defaultLanguage));
  postsInDefaultLanguage.forEach(edge => {
    const path = createPagePath(edge.node);
    if (!pathsInLanguage.includes(path))
      postsInLanguage.push(edge);
  });
  return postsInLanguage;
}

module.exports = {
  defaultLanguage,
  createPagePath,
  getPostsInLanguage,
  getLocalizedUrl,
  getRelocalizedUrl
};
