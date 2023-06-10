export const DescendBtn = ({ handleDescending }) => {
  return (
    <input
      type="button"
      onClick={handleDescending}
      value="Descend"
      className="text-dark fs-4 fw-bold"
      style={{
        backgroundColor: "white",
        borderTop: "1px solid black",
        borderBottom: "none",
        borderLeft: "none",
        borderRight: "none",
        width: "100%",
        padding: "2rem",
      }}
    />
  );
};
