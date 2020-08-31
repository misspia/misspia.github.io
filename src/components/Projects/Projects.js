import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Metadata from './Projects.metadata';
import Routes from '../../router/routes';
import Project from '../Project';

import * as S from './Projects.styles';
import * as Animations from './Projects.animations';

export default function Projects({ }) {
  const containerRef = useRef(null);

  useEffect(() => {
    Animations.fadeIn(containerRef.current);
  }, []);

  return (
    <S.Container ref={containerRef}>
      <Link to={Routes.HOME}>
        <S.HomeButton>×</S.HomeButton>
      </Link>
      <S.Title>selected works</S.Title>
      <S.Projects>
        {Metadata.map(project => (
          <Project
            key={project.name}
            name={project.name}
            img={project.img}
            demo={project.demo}
            github={project.github}
          />
        ))}
      </S.Projects>
    </S.Container>
  )
}
