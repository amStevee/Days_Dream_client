import StyledButton from "../../styles/Button.styled";
//SHOULD HAVE USED PROPS INSTED OF THE UNNERSSARRY DISSTRUCTURING

export default function Button({
  text,
  margin,
  marginleft,
  marginright,
  margintop,
  marginbottom,
  padding,
  background,
  color,
  width,
  height,
  border,
  handleOption,
  disabled,
  borderR,
  position,
  top,
  right,
  bottom,
  left,
}) {
  return (
    <StyledButton
      disabled={disabled}
      margin={margin}
      marginleft={marginleft}
      marginright={marginright}
      margintop={margintop}
      marginbottom={marginbottom}
      padding={padding}
      background={background}
      color={color}
      width={width}
      height={height}
      border={border}
      borderR={borderR}
      onClick={handleOption}
      position={position}
      top={top}
      right={right}
      bottom={bottom}
      left={left}
    >
      {text}
    </StyledButton>
  );
}
