import styled from "styled-components";
import { Search } from "@styled-icons/evil/Search";
import { CloseCircle } from "@styled-icons/ionicons-solid/CloseCircle";
import { DoNotDisturb } from "@styled-icons/material-outlined/DoNotDisturb";
import { Github } from "@styled-icons/boxicons-logos/Github";

export const Container = styled.div``;

export const InputSearch = styled.input`
  color: #000;
  font-size: 1rem;
  width: 111%;
  margin-left: 10px;
  margin-bottom: 2px;
  &::placeholder {
    color: var(--black);
  }
`;

export const Form = styled.form`
  background-color: var(--gray);
  padding: 10px 13px;
  border: 1px solid #ffff;
  border-radius: 18px;
  width: 111%;
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
  margin-right: 3px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const IconGitHub = styled(Github)`
  width: 25px;
  color: #fff;
`;

export const RowGitHub = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  width: 60px;
  height: 50px;
  margin-left: -50px;
  
  cursor: pointer;

  border-radius: 18px 0 0 18px;
  box-shadow: 14px 22px 49px -18px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 14px 22px 49px -18px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 14px 22px 49px -18px rgba(0, 0, 0, 0.75);
`;

export const ButtonSend = styled.div`
  cursor: pointer;
`;

export const ErrorUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  color: var(--error);
  margin: 12px auto;
  text-transform: uppercase;
`;
