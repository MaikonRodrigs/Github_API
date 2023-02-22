import styled from "styled-components";
import { Search } from "@styled-icons/evil/Search";
import { CloseCircle } from "@styled-icons/ionicons-solid/CloseCircle";
import { DoNotDisturb } from "@styled-icons/material-outlined/DoNotDisturb";

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const InputSearch = styled.input`
  color: #000;
  font-size: 1rem;
  width: 100%;
  margin-left: 10px;
  margin-bottom: 2px;
`;

export const Form = styled.div`
  padding: 10px 20px;
  border: 1px solid #ffff;
  border-radius: 18px;
  width: 40%;
  height: 50px;

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
  width: 35px;
  height: 35px;
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

  position: absolute;
  top: 55px;
  left: 30px;
`;

export const NotUserIcon = styled(DoNotDisturb)`
  width: 13px;
  height: 13px;
  color: red;
  margin-right: 5px;
`;
