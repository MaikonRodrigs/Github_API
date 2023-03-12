import styled from "styled-components";

export const Container = styled.div`
  display: ${({ isNan }) => isNan ? 'block' : 'none'};
  box-shadow: var(--shadow);
`;

export const Code = styled.div`
  position: relative;
  cursor: text;
`;

export const QRCode = styled.div`
  position: absolute;
  top: 20px;
  right: 22px;
`;

export const Dots = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  flex-direction: row;
  gap: .5rem;
`;

export const IconClosed = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${({ color }) => `${ color }`};
  border-radius: 9999px;
  cursor: pointer;
  &:hover {
    opacity: .6;
  }
`;