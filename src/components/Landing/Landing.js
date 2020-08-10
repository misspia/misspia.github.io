import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import Routes from '../../routes';
import Scene from './scene';

import * as S from './Landing.styles';

import { email, projectsPage, socialLinks } from './Landing.metadata';

export default function Landing({}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new Scene(canvasRef.current);

    const handleResize = () => {
      canvasRef.current.width = document.documentElement.clientWidth;
      canvasRef.current.height = document.documentElement.clientHeight;
      scene.resize(this.canvas.width, this.canvas.height)
    }

    window.addEventListener('resize', handleResize);


    scene.render();

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <S.Container>
      <S.Canvas ref={canvasRef} />
      <S.Title>
        pia leung
          </S.Title>
      <S.LinksContainer>
        <Link to={Routes.projects}>
          <S.ProjectLink>
            {projectsPage.label}
          </S.ProjectLink>
        </Link>
        {socialLinks.map((link, index) => (
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

