import React from "react";

function ProductRow(props) {
  const { name, price, stocked } = props.product;
  let style = null;
  if (!stocked) style = { color: "red" };
  return (
    <tr>
      <td style={style}>{name}</td>
      <td>{price}</td>
    </tr>
  );
}

export default ProductRow;
