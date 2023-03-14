import React, { useEffect } from 'react';
import { Container, GitAvatar, GitUser } from './styles';
import useFetch from '../../hooks/useFetch';

const Footer = () => {
  const { request, data, error, loading } = useFetch()
  const nameUserGit = 'MaikonRodrigs'
  let user = data

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
    <Container>
      <GitAvatar src={getUser?.avatar_url} />
      <GitUser>
        <a href={getUser?.html_url} target="_blank" rel="noreferrer">
          {getUser?.html_url}
        </a>
        <p>I'am FrontEnd JavaScript, and React ❤️</p>
      </GitUser>
    </Container>
  )
}

export default Footer;