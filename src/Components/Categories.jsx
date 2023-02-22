import { useState } from "react";

export default function Categories() {
  const [category, setCategory] = useState("");
  console.log(category);
  return (
    <>
      {" "}
      <div className="item">
        <h1>Category</h1>
        <div className="category">
          <input
            type="radio"
            name="category"
            id="art"
            value={"art"}
            onChange={(e) => setCategory(e.target.value)}
          />
          <label htmlFor="art">Art</label>
        </div>
        <div className="category">
          <input
            type="radio"
            name="category"
            id="science"
            value={"science"}
            onChange={(e) => setCategory(e.target.value)}
          />
          <label htmlFor="science">Science</label>
        </div>
        <div className="category">
          <input
            type="radio"
            name="category"
            id="technology"
            value={"technology"}
            onChange={(e) => setCategory(e.target.value)}
          />
          <label htmlFor="technology">Technology</label>
        </div>
        <div className="category">
          <input
            type="radio"
            name="category"
            id="cinema"
            value={"cinema"}
            onChange={(e) => setCategory(e.target.value)}
          />
          <label htmlFor="cinema">Cinema</label>
        </div>
        <div className="category">
          <input
            type="radio"
            name="category"
            id="design"
            value={"design"}
            onChange={(e) => setCategory(e.target.value)}
          />
          <label htmlFor="design">Design</label>
        </div>
        <div className="category">
          <input
            type="radio"
            name="category"
            id="food"
            value={"food"}
            onChange={(e) => setCategory(e.target.value)}
          />
          <label htmlFor="food">Food</label>
        </div>
      </div>
    </>
  );
}
