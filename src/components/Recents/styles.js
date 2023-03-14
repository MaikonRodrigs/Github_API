import styled from "styled-components";
import { CloseCircle } from "@styled-icons/ionicons-outline/CloseCircle";

export const Container = styled.div`
  position: relative;
  border-radius: 8px;
  &:nth-child(odd) {
    background: #76b0dc;
  }
  &:nth-child(even) {
    background: #fff;
  }
`;

export const Projects = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 200px;
  height: 300px;
  margin: 1rem;
  cursor: pointer;
  position: relative;

  p {
    color: var(--black);
  }

  &:hover {
    opacity: 0.9;
  }
`;

export const ProfileImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 999999px;
  border: 1px solid var(--white);
  margin-bottom: 1rem;

  box-shadow: 14px 22px 49px -18px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 14px 22px 49px -18px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 14px 22px 49px -18px rgba(0, 0, 0, 0.75);
`;

export const RemoveItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
  background-color: var(--white);
  position: absolute;
  bottom: 0px;
  border-radius: 0 0 8px 8px;

  cursor: pointer;
`;

export const IconClose = styled(CloseCircle)`
  width: 20px;
  color: var(--black);
  &:hover {
    color: red;
  }
`;
