import React, { useEffect } from 'react';
import * as S from './styles';
import useFetch from '../../hooks/useFetch';

const ListProjectsGit = () => {

  const { request, data, error, loading } = useFetch()

  useEffect(() => {
    async function fetchData() {
      const { response, json } =  await request('https://api.github.com/users/MaikonRodrigs');
    }
    fetchData()
  }, [])

  if (error) {
    return 'errr'
  }

  if (data)
    return (
      <S.Container>
        {loading ? <p>Loading</p> :
          <S.Row>
            {data ? data.public_repos + ' ' + data?.html_url : 'a' } <br />
          </S.Row>
        }
      </S.Container>
    )
}

export default ListProjectsGit;

