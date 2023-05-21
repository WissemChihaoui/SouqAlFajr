import React, { useState } from "react";

const ShippingOption = () => {
  const [option, setOption] = useState(false);
  return (
    <li className={option ? "active" : ""} onClick={() => setOption(!option)}>
      <label>Shipping Riyad</label>
      <span>1000 R.S</span>
    </li>
  );
};

export default ShippingOption;
