import VerifyComponent from "../../styles/Verify.styled";

export default function Verify({
  handleDelete,
  desc,
  activedel,
  setActivedel,
}) {
  return (
    <VerifyComponent>
      <div className={activedel ? "contain" : "rmv"}>
        <h3>Are you sure you want to delete this {desc} </h3>
        <div className="btn">
          <button onClick={handleDelete}>Yes</button>
          <button onClick={() => setActivedel(false)}>No</button>
        </div>
      </div>
    </VerifyComponent>
  );
}
