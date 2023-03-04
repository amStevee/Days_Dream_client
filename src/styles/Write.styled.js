import styled from "styled-components";

const WriteComponent = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;

  .content {
    flex: 5;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    input {
      padding: 10px;
      border: 1px solid lightgray;
    }

    .editorContainer {
      height: 300px;
      overflow: scroll;
      border: 1px solid lightgray;
      padding: 0;

      .editor {
        height: 100%;
        border: none;
        padding: 0;
        margin: 0;
        text-align: justify;
      }
    }
  }

  .menu {
    flex: 2;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px;

    .item {
      border: 1px solid lightgray;
      padding: 10px;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: #555;
      gap: 7px;

      .file {
        text-decoration: underline;
        cursor: pointer;
      }

      .buttons {
        display: flex;
        justify-content: space-between;
        color: #fff;
        background: #c1b49f;
        padding: 3px 5px;
        border: 1px solid #c1b49f;
      }
    }

    .category {
      display: flex;
      align-items: center;
      gap: 2px;
      color: #8d9887;
    }
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export default WriteComponent;
