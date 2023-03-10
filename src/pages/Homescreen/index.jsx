import React, { useContext, useEffect, useState, useRef } from 'react';
import useFetch from '../../hooks/useFetch';
// import useLocalStorage from '../../hooks/useLocalStorage';
import { GlobalContext } from '../../hooks/useContext';

import SearchUser from '../../components/SearchUser';
import ListProjects from '../../components/ListProjects';
import * as S from './styles';
import { H1 } from 'styled-icons/remix-editor';


const Homescreen = () => {
  const [user, setUser] = useState('');
  const [repo, setRepo] = useState('');
  const [oldUsers, setOldUsers] = useState(['name: "Maikon']);
  const [oldRepos, setOldRepos] = useState(['']);

  const { userGit, setUserGit } = useContext(GlobalContext);
  const localItemUser = localStorage.getItem('__user')
  const localItemRepo = localStorage.getItem('__repos')
  const getItem = (JSON.parse(localItemUser))
  const getRepo = (JSON.parse(localItemRepo))



  const { request, data, error, loading } = useFetch()

  function handleSubmit(e) {
    e.preventDefault();
    if (userGit === undefined) {
      console.log(userGit)
      return;
    }
    if (userGit <= 0) {
    } else {
      setUserGit(e.target.value);
      fetchData()
      fetchRepo()
    }
  }

  async function fetchData() {
    let { response, json } = await request(`https://api.github.com/users/${userGit}`);
    setUser(json)
    let userName = json
    setOldUsers((p) => [...p, userName])
    userName ? localStorage.setItem('__user', JSON.stringify(userName)) : null;
    console.log(oldUsers)
  }
  
  async function fetchRepo() {
    let { response, json } = await request(`https://api.github.com/users/${userGit}/repos`);
    setRepo(json)
    let repoGit = json
    setOldRepos((p) => [...p, repoGit])
    repoGit ? localStorage.setItem('__repos', JSON.stringify(repoGit)) : null
    console.log(oldRepos)
    
  }
  
  return (
    <S.Container>
      <SearchUser onSubmit={handleSubmit} onSubmitSend={handleSubmit} />
      <S.RowGit >
        {data && (
          < ListProjects 
          git={userGit}
          repository={repo}
          key={user?.id}
          avatar={(user)?.avatar_url}
          name={(user)?.name}
          bio={(user)?.bio}
          follower={(user)?.followers}
          public_repos={(user)?.followers}
          html_url={(user)?.html_url}
          />
        )
        }
        {!data && getItem && (
          <ListProjects
          git={userGit}
          repository={getRepo}
          key={getItem?.id}
          avatar={(getItem)?.avatar_url}
          name={(getItem)?.name}
          bio={(getItem)?.bio}
          follower={(getItem)?.followers}
          public_repos={(getItem)?.followers}
          html_url={(getItem)?.html_url}
          />
          )}
          {oldUsers.id != '' && (
            (oldUsers?.slice(2, 7).map((p) => (
              <ListProjects 
              git={userGit}
              repository={repo}
              key={p.id}
              avatar={p?.avatar_url}
              name={p?.name}
              bio={p?.bio}
              follower={p?.followers}
              public_repos={p?.followers}
              html_url={p?.html_url}
              />
              )))
          )}
      </S.RowGit>
    </S.Container>
  )
}

export default Homescreen;

// function FetchListRepo() {
  //   fetch(`https://api.github.com/users/${userGit}/repos`)
  //     .then(response => response.json())
  //     .then(data => setRepo(data))
  //   localStorage.setItem('__repos', JSON.stringify(repo))
  // }
  
  // function fetchData() {
    //   fetch(`https://api.github.com/users/${userGit}`)
    //     .then(response => response.json())
    //     .then(data => setUser(data))
    //     .then(localStorage.setItem('__repos', JSON.stringify(data)))
    // }
    

    // async function fetchData() {
      //   let { response, json } = await request(`https://api.github.com/users/${userGit}`);
      //   setUser(json)
      //   const REQUEST = await localStorage.setItem('__user', JSON.stringify(user))
      
        // async function fetchData() {
        //   let { response, json } = await request(`https://api.github.com/users/${userGit}`);
        //   json ? localStorage.setItem('__user', JSON.stringify(json)) : null;
        // }
  // }