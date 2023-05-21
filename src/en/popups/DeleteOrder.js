import React from "react";

const DeleteOrder = ({ setDeleteOrder }) => {
  return (
    <>
      <div className="darkBG" onClick={() => setDeleteOrder(false)} />
      <div className="centered modalDelete">
        <h2>Delete Order</h2>
        <p>
          Are you sure to delete order <br />
          <b>Red Onion High Quality</b> ?
        </p>
        <div className="buttons">
          <button className="cancel" onClick={() => setDeleteOrder(false)}>
            Cancel
          </button>
          <button className="confirm">Confirm</button>
        </div>
      </div>
    </>
  );
};

export default DeleteOrder;
