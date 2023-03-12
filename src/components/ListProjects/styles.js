import styled from "styled-components";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { Heart } from "@styled-icons/boxicons-solid/Heart";
import { GitRepository } from "@styled-icons/remix-line/GitRepository";
import { CloseCircle } from "@styled-icons/ionicons-outline/CloseCircle";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  /* display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100vh; */
`;

export const Row = styled.p`
  background: #76b0dc;
  width: 320px;
  height: auto;

  display: ${({ isNan }) => isNan ? 'block' : 'none'};

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
  color: var(--black);
  padding: 20px 0 5px;
`;

export const Description = styled.span`
  display: inline-block;
  font-size: 14px;
  color: var(--black);
  padding: 0;
`;

export const GitUrl = styled.a`
  cursor: pointer;
  color: var(--black);
  font-size: 14px;
  font-weight: bold;
  margin: 10px 5px;
`;

export const LikeRow = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  margin: 20px 0 0;
  color: var(--black);
`;

export const IconGitRepo = styled(GitRepository)`
  width: 17px;
  margin: 1px 2px 0 10px;
  color: var(--black);
`;

export const TextRepo = styled.span`
  font-size: 12px;
  margin: 13px 0 0;
  color: var(--black);
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
  color: var(--black);
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
    border: 1px solid var(--black);
    color: var(--black);
    border-radius: 12px;
    padding: 2px 15px;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 0.4px;
    cursor: progress;;

    /* white-space: nowrap;
    width: 138px;
    overflow: hidden;
    text-overflow: ellipsis; */

    &:before {
      content: "#";
    }

    &:hover {
      background-color: var(--black);
      color: var(--white);
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

export const RemoveItem = styled.div`
  width: 100%;
  height: 30px;
  background-color: var(--white);
  position: absolute;
  bottom: 0px;
  border-radius: 0 0 8px 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    /* background-color: red; */
  }
`;

export const IconClose= styled(CloseCircle)`
  position: absolute;
  top: 22px;
  right: 12px;
  width: 20px;
  cursor: pointer;
  color: var(--black);
  &:hover {
    color: red;
  }
  `;

export const LastRequest = styled.div`
  color: var(--black);
  color: #61C554;
  font-weight: bold;
  letter-spacing: -.5px;
  background-color: white;
  padding: 4px 20px;
  border-radius: 8px;
  margin-top: -15px;
  margin-bottom: 20px;

`;

