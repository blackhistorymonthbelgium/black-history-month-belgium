import React from 'react';
import { createPagePath } from '../helpers';
import { getCurrentLanguage } from '../internationalization';
import { Link } from 'gatsby';
import { getLocalizedUrl } from '../helpers';
import { kebabCase } from 'lodash'

export const PostLink = ({ className, post, children }) => {
  return <Link className={className} to={createPagePath(post, getCurrentLanguage())}>{children}</Link>
}

export const TagLink = ({ className, tag, children }) => {
  return <Link className={className} to={getLocalizedUrl(`/tags/${kebabCase(tag)}/`, getCurrentLanguage())}>{children}</Link>
}

export const LocalizedLink = ({ className, to, children }) => {
  return <Link className={className} to={getLocalizedUrl(to, getCurrentLanguage())}>{children}</Link>
}
