import React, { useState } from 'react';

import * as S from './styles';

const SearchProject = () => {
  const [valueInput, setValueInput] = useState('')

  function handleInputChange(e) {
    setValueInput(e.target.value);
  }

  function clearSearch() {
    setValueInput('');
  }

  const fieldError = () => {
    if (valueInput.length > 2) {
      return true;
    } 
      return false
  }

  return (
    <>
      <S.Container>
        <S.Form>
          <S.SearchIcon />
          <S.InputSearch
            type="text"
            autoComplete="off"
            placeholder="Please, insert your user github"
            value={valueInput}
            onChange={handleInputChange}
          />
          {valueInput.length > 0 && <S.ResetSearch onClick={clearSearch} />}
          {/* <S.ValidUserName>
          <S.NotUserIcon />
            Is not user
          </S.ValidUserName> */}
        </S.Form>
      </S.Container>
    </>
  )
};

export default SearchProject;
