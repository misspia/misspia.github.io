import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import Routes from '../../router/routes';

import Canvas from '../Canvas';
import * as S from './Landing.styles';
import * as Animations from './Landing.animations';

import { email, projectsPage, socialLinks } from './Landing.metadata';

export default function Landing({}) {
  const containerRef = useRef(null);

  useEffect(() => {
    Animations.fadeIn(containerRef.current);
  }, []);

  return (
    <S.Container ref={containerRef}>
      <S.CanvasWrapper>
        <Canvas />
      </S.CanvasWrapper>
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
      <S.ContactLink href={`mailto:${email.label}`}>
        {email.label}
      </S.ContactLink>
    </S.Container>
  )
}

