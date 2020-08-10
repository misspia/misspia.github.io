import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './Projects.styles';
import Metadata from './Projects.metadata';
import Routes from '../../routes';

export default function Projects({ }) {
  return (
    <S.Container>
      <Link to={Routes.home}>
        <S.HomeButton>×</S.HomeButton>
      </Link>
      <S.Title>selected works</S.Title>
      <S.Projects>
        {Metadata.map(project => (
          <S.Project key={project.name}>
            <S.ImageContainer>
              <S.Image src={project.img} alt={project.name} />
            </S.ImageContainer>
            <S.InfoContainer>
              <S.Name>{project.name}</S.Name>
              <S.Links>
                <S.Link href={project.demo} target='_blank'>
                  demo
            </S.Link>
                <S.Link href={project.github} target='_blank'>
                  github
            </S.Link>
              </S.Links>
            </S.InfoContainer>
          </S.Project>
        ))}
      </S.Projects>
    </S.Container>
  )
}
