import React, { useState } from "react";
import { Icon } from "@iconify/react";
const CartOption = () => {
  const [qte, setQte] = useState(0);
  const handleQte = (x) => {
    let sum = x + qte;
    if (sum >= 0) {
      setQte(sum);
    }
  };
  return (
    <div className="settings">
      <label>2.99 RS</label>
      <div className="qte">
        <div className="settingsBtn" onClick={() => handleQte(1)}>
          <Icon icon="material-symbols:add" />
        </div>
        <span>{qte}</span>
        <div className="settingsBtn" onClick={() => handleQte(-1)}>
          <Icon icon="ic:sharp-minus" />
        </div>
      </div>
      <label>100 Kg</label>
      <label className="importantText">29.99 R.S</label>
    </div>
  );
};

export default CartOption;
