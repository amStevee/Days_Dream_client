import React from "react";
import LoadingComponent from "../../styles/Loading.styled";

export default function Loading() {
  const fakedata = [1, 2];
  return (
    <LoadingComponent>
      {fakedata.map((item) => (
        <div className="post" key={item}>
          <div className="image" />

          <div className="content">
            <div className="title" />
            <div className="desc"></div>
            <div className="button" />
          </div>
        </div>
      ))}
    </LoadingComponent>
  );
}
