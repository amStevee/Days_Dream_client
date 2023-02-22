import styled from "styled-components";

const StyeledSearchItem = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 10px;
  gap: 20px;
  margin-bottom: 20px;
  box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);

  .siImg {
    object-fit: cover;
    width: 200px;
  }

  .siDesc {
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 2;
  }

  .siTitle {
    font-size: 20px;
    color: #3ac4e5;
  }

  .siDistance,
  .siTaxiOp,
  .siSubtitle.siFeatures,
  .siCancelOp,
  .siCancelOpSubtitle,
  .siTaxOp {
    font-size: 12px;
  }

  .siTaxiOp {
    background-color: #008009;
    color: #fff;
    width: max-content;
    padding: 5px;
    border-radius: 5px;
  }

  .siSubtitle {
    font-weight: bold;
  }

  .siCancelOp,
  .siCancelOpSubtitle {
    color: #008009;
  }
  .siCancelOp {
    font-weight: bold;
  }

  .siDetails {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .siRating {
    display: flex;
    justify-content: space-between;

    & > span {
      font-weight: 500;
    }
  }

  .siDetailTexts {
    text-align: right;
    display: flex;
    flex-direction: column;
    gap: 5px;

    .siPrice {
      font-size: 24px;
    }

    .siTaxOp {
      color: gray;
    }
  }
`;

export default StyeledSearchItem;
