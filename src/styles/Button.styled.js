import styled from "styled-components";

const StyledButton = styled.button`
  margin: ${({ margin }) => margin};
  margin-left: ${({ marginleft }) => marginleft};
  margin-right: ${({ marginright }) => marginright};
  margin-top: ${({ margintop }) => margintop};
  margin-bottom: ${({ marginbottom }) => marginbottom};
  padding: ${({ padding }) => padding};
  background-color: ${({ background }) => background};
  border: ${({ border }) => border};
  border-radius: ${({ borderR }) => borderR};
  color: ${({ color }) => color};
  font-weight: 500;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  cursor: pointer;

  position: ${({ position }) => position};
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};

  :disabled {
    cursor: not-allowed;
  }

  
`;

export default StyledButton;
