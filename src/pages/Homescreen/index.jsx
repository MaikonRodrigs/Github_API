import React, { useContext, useEffect, useState, useRef } from 'react';
import * as S from './styles';
import { GlobalContext } from '../../hooks/useContext';
import useFetch from '../../hooks/useFetch';

import { Spinner } from '../../components/Spinner';
import CardCode from '../../components/CardCode';
import SearchUser from '../../components/SearchUser';
import ListProjects from '../../components/ListProjects';
import Recents from '../../components/Recents';

const Homescreen = () => {
  const { userGit, setUserGit } = useContext(GlobalContext);
  const inputRef = useRef();
  
  const [user, setUser] = useState(null);
  const [repo, setRepo] = useState(null);
  const [responseStatus, setResponseStatus] = useState(null);
  const [oldUsers, setOldUsers] = useState([]);
  const [oldRepos, setOldRepos] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true)
  const [isNan, setIsNan] = useState(true)
  const [isErrorUser, setIsErrorUser] = useState(false)
  const [errorName, setErrorName] = useState(null)
  const [loadingStatus, setLoadingStatus] = useState(false);
  
  const localItemUser = localStorage.getItem('__user')
  const localItemRepo = localStorage.getItem('__repos')
  const getItem = (JSON.parse(localItemUser))
  const getRepo = (JSON.parse(localItemRepo))
  const QRCODE = user?.login || getItem?.login

  const URL_FETCH_GIT = 'https://api.github.com/users'
  
  const { request, data } = useFetch()
  
  async function fetchData() {
    setLoadingStatus(true)
    let { response, json } = await request(`${URL_FETCH_GIT}/${userGit}`);
    if (response.status === 404) {
      setIsErrorUser(true)
    } else {
      setUser(json)
      let userName = json
      setOldUsers((old) => [...old, userName])
      userName ? localStorage.setItem('__user', JSON.stringify(userName)) : null;
      setResponseStatus(response)
      setIsErrorUser(false)
    }
    setTimeout(async () => {
      setLoadingStatus(false)
    }, 1000)
  }

  async function fetchRepo() {
    let { response, json } = await request(`${URL_FETCH_GIT}/${userGit}/repos`);
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
    setErrorName(inputRef.current.value)
    if (data?.message === "Not Found") {
      setUserGit(inputRef.current.value)
      setIsNan(false)
      setIsErrorUser(true)
    } else {
      setIsNan(true)
      setIsErrorUser(false)
      setTimeout(() => {
        setLoadingStatus(false)
      }, 1000)
    }
    if (userGit === undefined) {
      return;
    }
    if (userGit <= 0) {
    } else {
      fetchData()
      fetchRepo()
      setUserGit(e.target.value)
    } setUserGit('')
  }

  function clearCache() {
    setLoadingStatus(true)
    setTimeout(() => {
      localStorage.clear()
      location.reload()
      setLoadingStatus(false)
    }, 1000)
  }

  function selectUseRecente(userName) {
    selectUser(userName.replace(/ /g, ''))
    selectRepo(userName.replace(/ /g, ''))
  }

  function clearState(i) {
    const arr = oldUsers.filter((item, idx) => idx !== i);
    setOldUsers(arr);
  }

  async function selectUser(name) {
    let { json } = await request(`https://api.github.com/users/${name}`);
    setUser(json)
  }

  async function selectRepo(name) {
    let { json } = await request(`https://api.github.com/users/${name}/repos`);
    setRepo(json)
  }

  useEffect(() => {

    if (data?.message === "Not Found") {
      setUserGit(inputRef.current.value)
      setIsNan(false)
      setIsErrorUser(true)
    } else {
      setIsNan(true)
      setIsErrorUser(false)
      setTimeout(() => {
        setLoadingStatus(false)
      }, 1000)
    }

    if (oldUsers[0] == [""]) {
      if (oldUsers[1]) {
        setIsEmpty(false)
      } return
    } else {
      setIsEmpty(false)
    } return
  }, [oldUsers, data])

  const jsonFetch = `${data && (`{
    "status": ${JSON.stringify(responseStatus?.status)},
    "url": ${JSON.stringify(responseStatus?.url)},
},`)}
{
  "login" : ${JSON.stringify(user?.name || getItem?.name)},
  "id" : ${JSON.stringify(user?.id || getItem?.id)},
  "node_id" : ${JSON.stringify(user?.id || getItem?.node_id)},
  "avatar_url" : ${JSON.stringify(user?.avatar_url || getItem?.avatar_url)},
  "gravatar_id" : ${JSON.stringify(user?.gravatar_id || getItem?.gravatar_id)},
  "url" : ${JSON.stringify(user?.url || getItem?.url)},
  "html_url" : ${JSON.stringify(user?.html_url || getItem?.html_url)},
  "organizations_url" : ${JSON.stringify(user?.organizations_url || getItem?.organizations_url)},
  "repos_url" : ${JSON.stringify(user?.repos_url || getItem?.repos_url)},
  "type" : ${JSON.stringify(user?.type || getItem?.type)},
  "site_admin" : ${JSON.stringify(user?.site_admin || getItem?.site_admin)},
  "name" : ${JSON.stringify(user?.name || getItem?.name)},
  "company" : ${JSON.stringify(user?.company || getItem?.company)},
  "blog" : ${JSON.stringify(user?.blog || getItem?.blog)},
  "location" : ${JSON.stringify(user?.location || getItem?.location)},
  "email" : ${JSON.stringify(user?.email || getItem?.email)},
  "bio" : ${JSON.stringify(user?.bio || getItem?.bio)},
  "twitter_username" : ${JSON.stringify(user?.twitter_username || getItem?.twitter_username)},
  "public_repos" : ${JSON.stringify(user?.public_repos || getItem?.public_repos)},
  "public_gists" : ${JSON.stringify(user?.public_gists || getItem?.public_gists)},
  "followers" : ${JSON.stringify(user?.followers || getItem?.followers)},
  "following" : ${JSON.stringify(user?.following || getItem?.following)},
  "created_at" : ${JSON.stringify(user?.created_at || getItem?.created_at)},
  "updated_at" : ${JSON.stringify(user?.updated_at || getItem?.updated_at)} "
} `;

  return (
    <>
      {loadingStatus ? <Spinner /> : ''}
      <S.Container>
        <SearchUser
          inputRef={inputRef}
          onSubmit={handleSubmit}
          onSubmitSend={handleSubmit}
          userNotFound={isErrorUser}
          userError={errorName}
        />
        <S.RowGit >
          {(data) && (
            <S.Card>
              <ListProjects
                QRCodeUser={userGit}
                isNan={isNan}
                closeButton={false}
                isLoading={loadingStatus}
                git={userGit}
                repository={repo}
                key={user?.id}
                avatar={(user)?.avatar_url}
                name={(user)?.name}
                since={(user)?.created_at}
                bio={(user)?.bio}
                followers={(user)?.followers}
                public_repos={(user)?.public_repos}
                html_url={(user)?.html_url}
              />
              <CardCode
                isNan={isNan}
                QRCodeUser={QRCODE}
                jsonFetch={jsonFetch}
                loading={loadingStatus}
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
                isLoading={loadingStatus}
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
          (oldUsers.map((item, idx) => (
            <Recents
              key={idx}
              clearState={() => clearState(idx)}
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