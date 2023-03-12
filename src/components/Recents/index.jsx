import React from 'react';

import * as S from './styles';

function Recents({ avatar_url, isEmpty, name, onClick, userName, clearState }) {

  if (isEmpty) {
    return <p>Esta vazio</p>
  }
  return (
    <S.Container>
      <S.Projects onClick={() => onClick(userName)}>
        <S.ProfileImg src={avatar_url} />
        <p>{name}</p>
      </S.Projects>
      <S.RemoveItem>
        <S.IconClose onClick={clearState} />
      </S.RemoveItem>
    </S.Container>

  )
}

export default Recents;