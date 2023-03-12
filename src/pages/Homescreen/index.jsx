import React, { useContext, useEffect, useState, useRef } from 'react';
import useFetch from '../../hooks/useFetch';
// import useLocalStorage from '../../hooks/useLocalStorage';
import { GlobalContext } from '../../hooks/useContext';

import SearchUser from '../../components/SearchUser';
import ListProjects from '../../components/ListProjects';
import Recents from '../../components/Recents';
import * as S from './styles';

const Homescreen = () => {
  const [user, setUser] = useState('');
  const [repo, setRepo] = useState('');
  const [oldUsers, setOldUsers] = useState([]);
  const [oldRepos, setOldRepos] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true)
  const [isNan, setIsNan] = useState(true)
  const { userGit, setUserGit } = useContext(GlobalContext);
  const localItemUser = localStorage.getItem('__user')
  const localItemRepo = localStorage.getItem('__repos')
  const getItem = (JSON.parse(localItemUser))
  const getRepo = (JSON.parse(localItemRepo))

  const { request, data, error, loading } = useFetch()

  async function fetchData() {

    let { response, json } = await request(`https://api.github.com/users/${userGit}`);
    if (response.status === 404) {
      json = undefined
    } else {
      setUser(json)
      let userName = json
      setOldUsers((old) => [...old, userName])
      userName ? localStorage.setItem('__user', JSON.stringify(userName)) : null;
    }
  }

  async function fetchRepo() {
    let { response, json } = await request(`https://api.github.com/users/${userGit}/repos`);
    if (response.status === 404) {
      json = undefined
    } else {
      setOldRepos((p) => [...p, repoGit])
      setRepo(json)
      let repoGit = json
      repoGit ? localStorage.setItem('__repos', JSON.stringify(repoGit)) : null
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (userGit === undefined) {
      return;
    }
    if (userGit <= 0) {

    } else {
      setUserGit(e.target.value)
      fetchData()
      fetchRepo()
    } setUserGit('')
  }

  function clearCache() {
    localStorage.clear()
    location.reload()
  }

  function isLoading() {
    if (oldUsers) {
      <p>Loading</p>
    }
  }

  function selectUseRecente(userName) {
    selectUser(userName.replace(/ /g, ''))
    selectRepo(userName.replace(/ /g, ''))
  }

  function clearState(i) {
    // setOldUsers[arr]([''])
    const arr = oldUsers.filter((item) => item.id !== i);
    setOldUsers(arr);
  }

  async function selectUser(name) {
    let { response, json } = await request(`https://api.github.com/users/${name}`);
    setUser(json)
    let userName = json
    // setOldUsers((old) => [...old, userName])
  }

  async function selectRepo(name) {
    let { response, json } = await request(`https://api.github.com/users/${name}/repos`);
    setRepo(json)
  }

  useEffect(() => {

    if (data?.message === "Not Found") {
      setIsNan(false)
    } else setIsNan(true)

    if (oldUsers[0] == [""]) {
      if (oldUsers[1]) {
        setIsEmpty(false)
      } return
    } else {
      setIsEmpty(false)
    } return
  }, [oldUsers, data])


  return (
    <>
      <S.Container>
        <SearchUser onSubmit={handleSubmit} onSubmitSend={handleSubmit} />
        {/* {localItemUser && (
          <p onClick={clearCache} >Limpar</p>
        )} */}
        <S.RowGit >
          {isLoading}
          {(data) && (
            <ListProjects
              QRCodeUser={userGit}
              isNan={isNan}
              closeButton={false}
              isLoading={loading}
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
          )}
          {!data && getItem && (
            <ListProjects
              isNan={isNan}
              closeButton
              clearCache={clearCache}
              isLoading={loading}
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
        </S.RowGit>
      </S.Container>
      <S.RowRecents>
        {oldUsers.id != '' && (
          (oldUsers.map((item) => (
            <Recents
              clearState={() => clearState(item.id)}
              onClick={() => selectUseRecente(item.login)}
              isEmpty={isEmpty}
              avatar_url={item?.avatar_url}
              name={item?.name}
            />
          )))
        )}
      </S.RowRecents>
    </>
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
{/* {oldUsers.id != '' && (
          (oldUsers?.slice(1, 7).map((item) => (
          // ((oldUsers).map((item) => (
            <ListProjects 
              isEmpty={isEmpty}
              isLoading={loading}
              git={userGit}
              repository={repo}
              key={item?.id}
              avatar={item?.avatar_url}
              name={item?.name}
              bio={item?.bio}
              follower={item?.followers}
              public_repos={item?.followers}
              html_url={item?.html_url}
            />
            )))
        )} */}