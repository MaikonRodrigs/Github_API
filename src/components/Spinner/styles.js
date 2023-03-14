import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
	0% {
		top: 28px;
		left: 28px;
		width: 0;
		height: 0;
		opacity: 1;
	}

	100% {
		top: -1px;
		left: -1px;
		width: 58px;
		height: 58px;
		opacity: 0;
	}
`;

const BounceAnimation = keyframes`
  0% { 
    margin-bottom: 0; 
  }

  50% { 
    margin-bottom: 1rem;
  }

  100% { 
    margin-bottom: 0;
  }
`;

export const Loading = styled.div`
  /* position: absolute; */
  border: 4px solid #333;
  opacity: 1;
  border-radius: 50%;
  animation: ${rotate360} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

  &:nth-child(2) {
    animation-delay: -0.5s;
  }
`;

export const Centralizer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  z-index: 9999;
  flex: 1;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.4);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  position: relative;
  top: 56%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const Dot = styled.div`
  background-color: #fff;
  border-radius: 50%;
  width: 0.5rem;
  height: 0.5rem;
  margin: 0 0.25rem;

  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${({ delay }) => `${ delay }` };
`;
