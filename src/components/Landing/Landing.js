import React from 'react';
import { Link } from 'react-router-dom';

import Routes from '../../router/routes';

import * as S from './Landing.styles';

import { email, projectsPage, socialLinks } from './Landing.metadata';

export default function Landing({}) {
  return (
    <S.Container>
      <S.Title>
        pia leung
          </S.Title>
      <S.LinksContainer>
        <Link to={Routes.PROJECTS}>
          <S.ProjectLink>
            {projectsPage.label}
          </S.ProjectLink>
        </Link>
        {socialLinks.map((link) => (
          <S.Link
            key={link.label}
            href={link.href}
            target='_blank'>
            {link.label}
          </S.Link>
        ))}
      </S.LinksContainer>
      <S.ContactLink>{email.label}</S.ContactLink>
    </S.Container>
  )
}

