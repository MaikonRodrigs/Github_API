import React, { useContext } from 'react';
import { GlobalContext } from '../../hooks/useContext';

import * as S from './styles';

const SearchUser = ({
  onSubmit,
  onSubmitSend,
  userNotFound,
  userError,
  inputRef
}) => {
  const { userGit, setUserGit } = useContext(GlobalContext);
  const userErr = `${userError} User not found`

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
            ref={inputRef}
            type="text"
            required
            id="search"
            autoComplete="off"
            spellcheck="false"
            placeholder="Please, insert your user github"
            value={userGit || ''}
            onChange={handleInputChange}
          />
          {userGit && (<S.ResetSearch onClick={clearSearch} />)}
          <S.ButtonSend onClick={onSubmitSend}>
            <S.SearchIcon />
          </S.ButtonSend>
        </S.Form>
        {userNotFound && (
          <S.ErrorUser>
            {userErr}
          </S.ErrorUser>
        )}
      </S.Container>
    </>
  )
};

export default SearchUser;
