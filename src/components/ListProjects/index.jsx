import React from 'react';
import { GlobalContext } from '../../hooks/useContext';

import * as S from './styles';

const ListProjects = ({
  avatar,
  name,
  bio,
  followers,
  public_repos,
  html_url,
  repository,
  LoadingRepositories
}) => {

  return (
    <S.Container>
      <S.Row>
        <S.Card>
          <S.ProfileImg src={avatar} />
          <S.Name>{name}</S.Name>
          <S.Description>{bio}</S.Description>
          <S.LikeRow>
            <S.IconGitLike />
            {followers}
            <S.IconGitRepo />
            {public_repos}
          </S.LikeRow>
          <S.TextRepo />
          <S.SectionRepos>
            {(repository) && (
              ((repository)?.slice(0, 7).map(function (item) {
                return (
                  <p key={item.id} >
                    {item.name}
                  </p>
                )
              }))
            )}
            {/* {!repository && (
                <p onClick={LoadingRepositories}>Recarregar os repositorios</p>
            )} */}
          </S.SectionRepos>
        </S.Card>
        <S.SectionIcons>
          <S.IconGitHub />
          <S.GitUrl src={html_url} target="_blank">
            {html_url}
          </S.GitUrl>
        </S.SectionIcons>
      </S.Row>
    </S.Container >
  )
}

export default ListProjects;

