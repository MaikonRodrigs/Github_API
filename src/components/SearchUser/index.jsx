import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../../hooks/useContext';

import * as S from './styles';

const SearchUser = ({
  onSubmit,
  onSubmitSend
}) => {
  const [valueInput, setValueInput] = useState();
  const { userGit, setUserGit } = useContext(GlobalContext);



  function clearSearch() {
    const inputSearch = document.getElementById('search')
    inputSearch.value = ''
  }

  function handleInputChange(e) {
    setUserGit(e.target.value);
  }

  return (
    <>
      <S.Container>
        <S.Form onSubmit={onSubmit} >
          <S.RowGitHub>
            <S.IconGitHub />
          </S.RowGitHub>
          <S.InputSearch
            type="text"
            required
            id="search"
            autoComplete="off"
            spellcheck="false"
            placeholder="Please, insert your user github"
            value={userGit}
            onChange={handleInputChange}
          />
          <S.ButtonSend onClick={onSubmitSend}>
            <S.SearchIcon />
          </S.ButtonSend>
          {userGit && (<S.ResetSearch onClick={clearSearch} />) }
          
        </S.Form>
      </S.Container>
    </>
  )
};

export default SearchUser;
