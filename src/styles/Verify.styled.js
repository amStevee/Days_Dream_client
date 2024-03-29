import styled from "styled-components";

const VerifyComponent = styled.div`
  .content {
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
    color: gray;
  }
  .rmv {
    display: none;
  }

  .contain {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
    gap: 10px;
    width: fit-content;
  }

  .btn {
    display: flex;
    gap: 15px;

    button {
      background-color: gray;
      padding: 10px;
      font-size: 1.5rem;
      color: #fff;
      border: none;
      border-radius: 5px;
      outline: none;
      width: 7rem;
    }
  }
`;
export default VerifyComponent;
