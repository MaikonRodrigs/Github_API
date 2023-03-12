import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  margin: 80px 0 240px 0;
`;

export const RowGit = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  flex-direction: row;
  gap: 2rem;
`;

export const RowRecents = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  gap: 2rem;
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 4rem;
`;

export const ErrorScreen = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 100vh;
`;