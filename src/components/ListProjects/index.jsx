import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

import * as S from './styles';

const ListProjects = ({
  avatar,
  name,
  bio,
  followers,
  public_repos,
  html_url,
  repository,
  isLoading,
  isEmpty,
  clearCache,
  closeButton = true,
  isNan,
  QRCodeUser
}) => {

  if (isLoading) {
    <h1>Carregando...</h1>
  }

  if (isEmpty) {
    return <p>Esta vazio</p>
  }

  return (
    <S.Container>
      <S.Row isNan={isNan}>
        <S.Card >
          {closeButton && (
            <S.IconClose onClick={clearCache} />
          )}
          <S.QRCode>
            <S.ProfileImg src={avatar} />
            <QRCodeSVG
              value={`https://github.com/${QRCodeUser}`}
              size={72}
              includeMargin={true}
              level="L"
            />
          </S.QRCode>
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

