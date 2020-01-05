const _ = require('lodash')
const path = require('path')
const locales = require('./src/locales');
const { createPagePath, defaultLanguage } = require('./src/helpers');
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

function expandPagesForLanguages(posts) {
  const results = [];
  const primaryNodes = {};
  const defined = new Set();
  // add all ports to their results, make a set of all defined paths, and
  // collect all nodes in their primary language
  posts.forEach(edge => {
    const { node } = edge;
    const language = node.frontmatter.language || defaultLanguage;
    const path = createPagePath(edge.node, language);

    results.push({ language, node, path });
    defined.add(path);
    
    if (language === defaultLanguage)
      primaryNodes[path] = node;
  });
  // for each node in the primary language, check if the translation already
  // exists, and if not, register the primary language as the translation
  Object.keys(primaryNodes).forEach(path => {
    Object.keys(locales).forEach(language => {
      const node = primaryNodes[path];
      const translatedPath = createPagePath(node, language);
      if (defined.has(translatedPath))
        return;
      
      results.push({ language, node, path: translatedPath });
    });
  });
  return results;
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
              language
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = expandPagesForLanguages(result.data.allMarkdownRemark.edges);

    posts.forEach(edge => {
      const {
        node,
        language,
        path: pagePath
      } = edge;

      const id = node.id;
      createPage({
        path: pagePath,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
          language
        },
      })
    })

    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach(edge => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach(tag => {
      Object.keys(locales).forEach(language => {
        let tagPath = `/tags/${_.kebabCase(tag)}/`
        if (language !== defaultLanguage)
          tagPath = '/' + language + tagPath;

        createPage({
          path: tagPath,
          component: path.resolve(`src/templates/tags.js`),
          context: {
            tag,
            language
          },
        })
      });
    })
  })
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  return new Promise(resolve => {
    deletePage(page);

    Object.keys(locales).map(language => {
      const localizedPath = locales[language].default ? page.path : '/' + locales[language].path + page.path;
      return createPage({
        ...page,
        path: localizedPath,
        context: { language }
      });
    });

    resolve();
  });
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
