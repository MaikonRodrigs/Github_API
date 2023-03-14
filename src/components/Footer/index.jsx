import React, { useEffect } from 'react';
import * as S from './styles';

import useFetch from '../../hooks/useFetch';

const Footer = () => {
  const { request } = useFetch()
  const nameUserGit = 'MaikonRodrigs'

  const localItemUser = localStorage.getItem('__git')
  const getUser = (JSON.parse(localItemUser))

  useEffect(() => {
    if (getUser) {
      return;
    } else {
      async function fetchData() {
        const { response, json } = await request(`https://api.github.com/users/${nameUserGit}`);
        let maikonrodrigs = json
        JSON ? localStorage.setItem('__git', JSON.stringify(maikonrodrigs)) : null;
      }
      fetchData()
    }
  }, [])

  return (
    <S.Container>
      <S.GitAvatar src={getUser?.avatar_url} />
      <S.GitUser>
        <a href={getUser?.html_url} target="_blank" rel="noreferrer">
          {getUser?.html_url}
        </a>
        <p>I'am FrontEnd JavaScript, and React ❤️</p>
      </S.GitUser>
      <br />
      powered by<S.ReactIcon />
    </S.Container>
  )
}

export default Footer;