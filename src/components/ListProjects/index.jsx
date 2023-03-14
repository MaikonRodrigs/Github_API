import React from 'react';
import * as S from './styles';
import UseDate from '../../hooks/useDate'
import { LoadingIcon } from '../Spinner';


const ListProjects = ({
  avatar,
  name,
  since,
  bio,
  followers,
  public_repos,
  html_url,
  repository,
  isLoading,
  clearCache,
  closeButton = true,
  isNan,
  lastRequest = false,
}) => {

  return (
    <S.Container>
      <S.Row isNan={isNan}>
        {isLoading ? <LoadingIcon />
          :
          <S.Card >
            <S.LastRequest>
              {lastRequest ? 'LocalStorage.getItem()' : ''}
              {closeButton && (
                <S.IconClose onClick={clearCache} />
              )}
            </S.LastRequest>
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
                ((repository).slice(0, 7).map(function (item) {
                  return (
                    <p key={item.id} >
                      {item.name}
                    </p>
                  )
                }))
              )}
            </S.SectionRepos>
            <UseDate since={since} />
            <S.SectionIcons>
              <S.IconGitHub />
              <S.GitUrl src={html_url} target="_blank">
                {html_url}
              </S.GitUrl>
            </S.SectionIcons>
          </S.Card>
        }
      </S.Row>
    </S.Container >
  )
}

export default ListProjects;

