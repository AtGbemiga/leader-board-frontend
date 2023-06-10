export const AscendBtn = ({ handleAscending }) => {
  return (
    <input
      type="button"
      value="Ascend"
      onClick={handleAscending}
      className="text-dark fs-4 fw-bold"
      style={{
        backgroundColor: "white",
        borderTop: "none",
        borderBottom: "none",
        borderLeft: "none",
        borderRight: "none",
        width: "100%",
        padding: "2rem",
      }}
    />
  );
};
