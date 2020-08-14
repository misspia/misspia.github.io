import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './Projects.styles';
import Metadata from './Projects.metadata';
import Routes from '../../router/routes';
import Project from '../Project';

export default function Projects({ }) {
  return (
    <S.Container>
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
