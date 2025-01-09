const Display = ({ calVal }) => {
  return (
    <div className="display-box">
      <input
        type="text"
        value={calVal}
        readOnly
        className="form-control display-result"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-lg"
      />
    </div>
  );
};

export default Display;
