export const Header = () => {
  return (
    <div className="sticky-card-wrapper">
      <div id="card" className="card">
        <div className="row card-body">
          <div className="col">
            <h6 style={{ margin: 0, padding: 0 }}>Name</h6>
          </div>
          <div className="col">
            <h6 style={{ margin: 0, padding: 0 }}>Score</h6>
          </div>
          <div className="col col-lg-2">
            <h6 style={{ margin: 0, padding: 0 }}>Edit/Delete</h6>
          </div>
        </div>
      </div>
    </div>
  );
};
