import { useDispatch } from "react-redux";
import { postCloseModal } from "@/app/store/features/modal/modalSlice";

const PostModal = () => {
  const dispatch = useDispatch();
  return (
    <div
      className="card bg-primary text-white"
      style={{ position: "fixed", bottom: 10, left: 10 }}
    >
      <div className="p-2 d-flex justify-content-around align-items-center">
        Post Successful!
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-x-lg"
          viewBox="0 0 16 16"
          onClick={() => dispatch(postCloseModal())}
          style={{
            cursor: "pointer",
            paddingLeft: 5,
            boxSizing: "border-box",
            fontWeight: "bold",
          }}
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </svg>
      </div>
    </div>
  );
};
export default PostModal;
