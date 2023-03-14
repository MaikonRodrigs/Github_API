import React from 'react';

import * as S from './styles';

function Recents({ avatar_url, name, onClick, userName, clearState }) {

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