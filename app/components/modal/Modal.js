import { useDispatch } from "react-redux";
import { closeModal } from "@/app/store/features/modal/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <div className="card" style={{ position: "fixed", bottom: 10, left: 10 }}>
      <div>
        <button onClick={() => dispatch(closeModal())}>
          Close update modal
        </button>
        Update Successful!
      </div>
    </div>
  );
};
export default Modal;
