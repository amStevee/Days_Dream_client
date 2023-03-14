import { Button } from "bootstrap";
import VerifyComponent from "../../styles/Verify.styled";

export default function Verify({
  handleDelete,
  desc,
  activedel,
  setActivedel,
}) {
  return (
    <VerifyComponent>
      <div className={activedel ? "rmv" : "contain"}>
        <h3>Are you sure you want to delete this {desc} </h3>
        <div className="btn">
          <Button onClick={handleDelete}>Yes</Button>
          <Button onClick={() => setActivedel(false)}>No</Button>
        </div>
      </div>
    </VerifyComponent>
  );
}
