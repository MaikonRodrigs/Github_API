import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  flex-direction: column;
  bottom: 2rem;
  left: 0;
  right: 0;
  @media (max-width: 1024px) {
    /* display: none; */
    position: relative;
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
  a {
    color: #000;
    text-decoration: none;
    font-size: 1.2rem;
    &:hover {
      color: var(--dark);
    }
  }
`;