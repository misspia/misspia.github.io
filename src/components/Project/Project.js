import React from 'react';

import * as S from './Project.styles';

export default function Project({
  name = '',
  img = '',
  demo = '',
  github = '',
}) {
  return (
    <S.Wrapper>
      <S.ImageContainer>
        <S.Image src={img} alt={name} />
      </S.ImageContainer>
      <S.InfoContainer>
        <S.Name>{name}</S.Name>
        <S.Links>
          <S.Link href={demo} target='_blank'>
            demo
            </S.Link>
          <S.Link href={github} target='_blank'>
            github
            </S.Link>
        </S.Links>
      </S.InfoContainer>
    </S.Wrapper>
  )
}
