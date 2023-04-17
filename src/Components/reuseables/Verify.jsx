import VerifyComponent from "../../styles/Verify.styled";

export default function Verify({
  handleDelete,
  desc,
  activedel,
  setActivedel,
}) {
  return (
    <VerifyComponent>
      <div className={activedel ? "content" : "rmv"}>
        <div className={"contain"}>
          <h3>{desc} </h3>
          <div className="btn">
            <button onClick={handleDelete}>Yes</button>
            <button onClick={() => setActivedel(false)}>No</button>
          </div>
        </div>
      </div>
    </VerifyComponent>
  );
}
