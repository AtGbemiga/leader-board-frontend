import { useDispatch } from "react-redux";
import { postCloseModal } from "@/app/store/features/modal/modalSlice";

const PostModal = () => {
  const dispatch = useDispatch();
  return (
    <div className="card" style={{ position: "fixed", bottom: 10, left: 10 }}>
      <div>
        <button onClick={() => dispatch(postCloseModal())}>
          Close post modal
        </button>
        post Successful!
      </div>
    </div>
  );
};
export default PostModal;
