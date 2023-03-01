import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import * as S from './styles';

const SearchProject = () => {
  const [valueInput, setValueInput] = useState('');

  const { request, data, error, loading } = useFetch()


  function handleSubmit(e) {
    e.preventDefault();
    fetchData()
  }

  function clearSearch() {
    const inputSearch = document.getElementById('search')
    inputSearch.value = ''
    setValueInput('');
  }

  function handleInputChange(e, state) {
    state(e.target.value);
  }

  async function fetchData() {
    const { response, json } = await request(`https://api.github.com/users/${valueInput}`);
  }

  return (
    <>
      <S.Container>
        {loading && (<p>Loading..</p>)}
        <S.Form onSubmit={handleSubmit} >
          <S.SearchIcon />
          <S.InputSearch
            type="text"
            required
            id="search"
            autoComplete="off"
            spellcheck="false"
            placeholder="Please, insert your user github"
            value={valueInput}
            onChange={(e) => handleInputChange(e, setValueInput)}
          />
          {valueInput.length > 0 && <S.ResetSearch onClick={() => clearSearch()} />}
          {/* {valueInput.length > 0 && <button onClick={(e) => fetchData(e, valueInput)}>Enviar</button>} */}
          {/* <S.ValidUserName>
          </S.ValidUserName> */}
        </S.Form>
      </S.Container>
    </>
  )
};

export default SearchProject;
