import React, { useContext, useEffect, useState, useRef } from 'react';
import useFetch from '../../hooks/useFetch';
// import useLocalStorage from '../../hooks/useLocalStorage';
import { GlobalContext } from '../../hooks/useContext';

import { useAutoAnimate } from '@formkit/auto-animate/react'

import SearchUser from '../../components/SearchUser';
import ListProjects from '../../components/ListProjects';
import CardCode from '../../components/CardCode';
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
  const QRCODE = user?.login || getItem?.login

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


  const jsonFetch = `{
    "login" : ${JSON.stringify(user.name || getItem?.name)},
    "id": ${JSON.stringify(user.id || getItem?.id)},
    "node_id": ${JSON.stringify(user.id || getItem?.node_id)},
    "avatar_url": ${JSON.stringify(user.avatar_url || getItem?.avatar_url)},
    "gravatar_id": ${JSON.stringify(user.gravatar_id || getItem?.gravatar_id)},
    "url": ${JSON.stringify(user.url || getItem?.url)},
    "html_url": ${JSON.stringify(user?.html_url || getItem?.html_url)},
    "organizations_url": ${JSON.stringify(user?.organizations_url || getItem?.organizations_url)},
    "repos_url": ${JSON.stringify(user?.repos_url || getItem?.repos_url)},
    "type": ${JSON.stringify(user?.type || getItem?.type)},
    "site_admin": ${JSON.stringify(user?.site_admin || getItem?.site_admin)},
    "name": ${JSON.stringify(user?.name || getItem?.name)},
    "company": ${JSON.stringify(user?.company || getItem?.company)},
    "blog": ${JSON.stringify(user?.blog || getItem?.blog)},
    "location": ${JSON.stringify(user?.location || getItem?.location)},
    "email": ${JSON.stringify(user?.email || getItem?.email)},
    "bio": ${JSON.stringify(user?.bio || getItem?.bio)},
    "twitter_username": ${JSON.stringify(user?.twitter_username || getItem?.twitter_username)},
    "public_repos": ${JSON.stringify(user?.public_repos || getItem?.public_repos)},
    "public_gists": ${JSON.stringify(user?.public_gists || getItem?.public_gists)},
    "followers": ${JSON.stringify(user?.followers || getItem?.followers)},
    "following": ${JSON.stringify(user?.following || getItem?.following)},
    "created_at": ${JSON.stringify(user?.created_at || getItem?.created_at)},
    "updated_at": ${JSON.stringify(user?.updated_at || getItem?.updated_at)}"
  }`;


  return (
    <>
      <S.Container>
        <SearchUser onSubmit={handleSubmit} onSubmitSend={handleSubmit} />
        <S.RowGit >
          {isLoading}
          {(data) && (
            <S.Card>
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
                followers={(user)?.followers}
                public_repos={(user)?.public_repos}
                html_url={(user)?.html_url}
              />
              <CardCode
                isNan={isNan}
                QRCodeUser={QRCODE}
                jsonFetch={jsonFetch}
              />
            </S.Card>
          )}
          {!data && getItem && (
            <S.Card>
              <ListProjects
                lastRequest={true}
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
                followers={(getItem)?.followers}
                public_repos={(getItem)?.public_repos}
                html_url={(getItem)?.html_url}
              />
              <CardCode
                QRCodeUser={QRCODE}
                isNan={isNan}
                jsonFetch={jsonFetch}
              />
            </S.Card>
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