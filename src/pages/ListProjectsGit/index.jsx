import React, { useEffect, useState } from 'react';
import * as S from './styles';
import useFetch from '../../hooks/useFetch';

const ListProjectsGit = () => {

  const [repo, setRepo] = useState('');
  const [user, setUser] = useState('Maiko');

  function FetchListRepo() {
    fetch(`https://api.github.com/users/${user}/repos`)
      .then(response => response.json())
      .then(data => setRepo(data))
  }

  const { request, data, error, loading } = useFetch()

  useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(`https://api.github.com/users/${user}`);
    }
    fetchData()
    FetchListRepo()
  }, [])

  if (error) {
    return (
      <S.ErrorScreen>
        <h1>User não localizado</h1>
      </S.ErrorScreen>
    )
  }

  if (data)
    return (
      <S.Container>
        {loading && <p>Loading</p>}
        {error && <p>Error</p>}
        <S.Row>

          <S.Card>
            <S.ProfileImg src={data.avatar_url} />
            <S.Name>{data.name}</S.Name>
            <S.Description>{data.bio}</S.Description>

            <S.LikeRow>
              <S.IconGitLike />
              {data.followers}
              <S.IconGitRepo />
              {data.public_repos}
            </S.LikeRow>

            <S.TextRepo />
            <S.SectionRepos>
              {repo && (
                (repo.slice(0, 7).map(function (item) {
                  return (
                    <p key={item.id} >
                      {item.name}
                    </p>
                  )
                }))
              )}
            </S.SectionRepos>
          </S.Card>
          {/* <button onClick={FetchListRepo}>CLIQUE</button> */}
          <S.SectionIcons>
            <S.IconGitHub />
            <S.GitUrl src={data.html_url} target="_blank">
              {data.html_url}
            </S.GitUrl>

          </S.SectionIcons>
        </S.Row>
      </S.Container >
    )
}

export default ListProjectsGit;

