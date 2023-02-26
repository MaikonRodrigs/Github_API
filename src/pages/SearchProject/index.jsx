import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import * as S from './styles';
import * as F from './function'

const SearchProject = () => {
  const [valueInput, setValueInput] = useState('');

  const { request, data, error, loading } = useFetch()


  function handleSubmit(e) {
    e.preventDefault();
    fetchData()
  }

  async function fetchData() {
    const { response, json } = await request(`https://api.github.com/users/${valueInput}`);
  }

  return (
    <>
      <S.Container>
        <S.Form onSubmit={handleSubmit}>
          <S.SearchIcon />
          <S.InputSearch
            type="text" e
            autoComplete="off"
            spellcheck="false"
            placeholder="Please, insert your user github"
            value={valueInput}
            onChange={(e) => F.handleInputChange(e, setValueInput)}
          />
          {valueInput.length > 0 && <S.ResetSearch onClick={() => F.clearSearch(setValueInput)} />}
          {/* {valueInput.length > 0 && <button onClick={(e) => fetchData(e, valueInput)}>Enviar</button>} */}
          {/* <S.ValidUserName>
          <S.NotUserIcon />setValueInputsetValueInput
          Is not user
        </S.ValidUserName> */}
        </S.Form>
        <img src={data?.avatar_url} alt="" style={{ borderRadius: '100%' }} />
      </S.Container>
    </>
  )
};

export default SearchProject;
