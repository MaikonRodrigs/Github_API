import styled from "styled-components";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { Heart } from "@styled-icons/boxicons-solid/Heart";
import { GitRepository } from "@styled-icons/remix-line/GitRepository";

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Row = styled.p`
  width: 320px;
  height: auto;

  min-height: 500px;
  padding: 30px 20px 90px;

  position: relative;

  border-radius: 15px;
  -webkit-box-shadow: 14px 22px 49px -18px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 14px 22px 49px -18px rgba(0, 0, 0, 0.75);
  box-shadow: 14px 22px 49px -18px rgba(0, 0, 0, 0.75);
`;

export const Card = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const ProfileImg = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 9999px;
  border: 1px solid white;

  box-shadow: var(--shadow);
  -moz-box-shadow: var(--shadow);
  -webkit-box-shadow: var(--shadow);
`;

export const Name = styled.h1`
  font-size: 24px;
  color: #fff;
  padding: 20px 0 5px;
`;

export const Description = styled.span`
  display: inline-block;
  font-size: 14px;
  color: black;
  padding: 0;
`;

export const GitUrl = styled.a`
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  margin: 10px 5px;
`;

export const LikeRow = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  /* justify-content: space-between; */
  margin: 20px 0 0;
`;

export const IconGitRepo = styled(GitRepository)`
  width: 17px;
  margin: 1px 2px 0 10px;
  color: #3c3c3c;
`;

export const TextRepo = styled.span`
  font-size: 12px;
  margin: 13px 0 0;
  &::before {
    content: "Publick Repositorys:";
  }
`;

export const SectionIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  position: absolute;
  bottom: 0;
  top: 92%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const IconGitHub = styled(Github)`
  width: 25px;
  /* margin: 0 10px 0; */
`;

export const IconGitLike = styled(Heart)`
  width: 16px;
  color: red;
  margin: 2px 3px 0 0;
`;

export const SectionRepos = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
  row-gap: 8px;
  padding: 10px 0;

  p {
    border: 1px solid #fff;
    border-radius: 12px;
    padding: 2px 15px;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 0.4px;
    cursor: pointer;

    /* white-space: nowrap;
    width: 138px;
    overflow: hidden;
    text-overflow: ellipsis; */

    &:before {
      content: "#";
    }

    &:hover {
      background-color: white;
      color: black;
    }
  }
`;

export const ErrorScreen = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 100vh;
`;
