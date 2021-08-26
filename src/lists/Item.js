import React from "react";
export default function Item(props) {
  const { category, image, image_alt, title, subtitle, price } = props;
  const [qty_counter, setQty_counter] = React.useState(0);
  return (
    <li className={category} onClick={() => console.log("Cliqueiiii")}>
      <img src={image} alt={image_alt} />
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <h3>
        R$ <spam className="value">{price}</spam>
      </h3>
      <div className="qty-selector">
        <ion-icon
          name="remove"
          class="qty-minus"
          onClick={() =>
            qty_counter > 0
              ? setQty_counter(qty_counter - 1)
              : setQty_counter(qty_counter)
          }
        ></ion-icon>
        <spam className="qty-counter">{qty_counter}</spam>
        <ion-icon
          name="add"
          class="qty-plus"
          onClick={() => setQty_counter(qty_counter + 1)}
        ></ion-icon>
      </div>
    </li>
  );
}
