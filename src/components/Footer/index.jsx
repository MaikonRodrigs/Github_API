import React, { useEffect } from 'react';
import { Container, GitAvatar, GitUser } from './styles';
import useFetch from '../../hooks/useFetch';

const Footer = () => {
  const { request, data, error, loading } = useFetch()
  const nameUserGit = 'MaikonRodrigs'
  let user = data
  
  useEffect(() => {
    async function fetchData() {
      const { response, json } =  await request(`https://api.github.com/users/${nameUserGit}`);
    }
    fetchData()
  }, [])

  return (

    <Container>
      <GitAvatar src={user?.avatar_url} />
      <GitUser>
         {/* <strong>powered by</strong>: {user?.name} <br /> */}
        <a href={user?.html_url} target="_blank" rel="noreferrer">
        {user?.html_url}
        </a>
      </GitUser>
    </Container>
  )
}

export default Footer;