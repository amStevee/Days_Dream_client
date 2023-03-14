import styled from "styled-components";

const VerifyComponent = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(000, 000, 000, 0.3);
  width: 100vw;
  height: 100vh;

  .rmv {
    display: none;
  }

  .contain {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
  }

  .btn {
    display: flex;
    gap: 15px;

    button {
      background-color: blue;
      padding: 20px;
      font-size: 1.5rem;
      color: #fff;
      border: none;
      outline: none;
    }
  }
`;
export default VerifyComponent;
