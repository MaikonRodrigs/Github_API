import styled from "styled-components";
import { Search } from "@styled-icons/evil/Search";
import { CloseCircle } from "@styled-icons/ionicons-solid/CloseCircle";
import { DoNotDisturb } from "@styled-icons/material-outlined/DoNotDisturb";
import { Github } from "@styled-icons/boxicons-logos/Github";


export const Container = styled.div`
  /* display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: var(--secondary); */
`;

export const InputSearch = styled.input`
  color: #000;
  font-size: 1rem;
  width: 100%;
  margin-left: 10px;
  margin-bottom: 2px;
`;

export const Form = styled.form`
  background-color: var(--gray);
  padding: 10px 13px;
  border: 1px solid #ffff;
  border-radius: 18px;
  width: 100%;
  height: 50px;
  color: red;

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;
export const SearchIcon = styled(Search)`
  fill: black;
  width: 25px;
  height: 25px;
`;

export const ResetSearch = styled(CloseCircle)`
  width: 20px;
  height: 20px;
  color: black;
  margin-left: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const ValidUserName = styled.p`
  font-size: 13px;
  color: red;
  text-align: left;
  margin-left: -10px;

  /* position: absolute; */
  top: 55px;
  left: 30px;
`;

export const NotUserIcon = styled(DoNotDisturb)`
  width: 13px;
  height: 13px;
  color: red;
  margin-right: 5px;
`;

export const IconGitHub = styled(Github)`
  width: 25px;
  color: #fff;
`;

export const RowGitHub = styled.div`
  cursor: pointer;
  background-color: black;
  width: 60px;
  height: 50px;
  margin-left: -50px;
  border-radius: 18px 0 0 18px;
  display: flex;
  justify-content: center; 
  align-items: center;
  -webkit-box-shadow: 14px 22px 49px -18px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 14px 22px 49px -18px rgba(0, 0, 0, 0.75);
  box-shadow: 14px 22px 49px -18px rgba(0, 0, 0, 0.75);
`;

export const ButtonSend = styled.div`
  cursor: pointer;
`; 
