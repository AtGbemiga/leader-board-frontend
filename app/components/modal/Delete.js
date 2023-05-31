import { useDispatch } from "react-redux";
import { deleteCloseModal } from "@/app/store/features/modal/modalSlice";

const DeleteModal = () => {
  const dispatch = useDispatch();
  return (
    <div className="card" style={{ position: "fixed", bottom: 10, left: 10 }}>
      <div>
        <button onClick={() => dispatch(deleteCloseModal())}>
          Close delete modal
        </button>
        delete Successful!
      </div>
    </div>
  );
};
export default DeleteModal;
