import styled from "styled-components";
import { ReactLogo } from '@styled-icons/boxicons-logos/ReactLogo'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  bottom: 2rem;
  margin-top: 6rem;
  @media (max-width: 1024px) {
    /* display: none; */
    /* position: relative; */
  }
`;
export const GitAvatar = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  margin-bottom: 1rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.5s linear;
  &:hover {
    width: 5rem;
    height: 5rem;
  }
`;
export const GitUser = styled.span`
    display: contents;
  a {
    color: var(--white);
    text-decoration: none;
    font-size: 1.2rem;
    &:hover {
      color: var(--dark);
    }
  }
`;

export const ReactIcon = styled(ReactLogo)`
  width: 40px;
  height: 40px;
  margin: 4px;
  color: var(--white);
`;
