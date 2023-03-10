import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  align-items: center;
  justify-content: center;
  gap: 4rem
`;

export const RowGit = styled.div`

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  flex-direction: row;
  gap: 2rem;
`;
