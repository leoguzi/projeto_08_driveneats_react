import React from "react";
export default function Item({
  id,
  category,
  image,
  image_alt,
  title,
  subtitle,
  price,
  updateOrder,
}) {
  const [qtyCounter, setQtyCounter] = React.useState(0);

  const selected = {
    card: `${category} selected`,
    counter: "qty-selector",
  };
  const notSelected = {
    card: category,
    counter: "qty-selector hidden",
  };
  const [itemStyle, setItemStyle] = React.useState(notSelected);
  const orderInfo = {
    //information used to update the order
    id: id,
    category: category,
    title: title,
    price: Number(price.toString().replace(",", ".")),
    qty: 0,
  };

  const selectItem = () => {
    setItemStyle(selected);
    if (qtyCounter === 0) {
      orderInfo.qty = 1;
      setQtyCounter(1, updateOrder(orderInfo));
    }
  };

  const updateCounter = (newNumber) => {
    if (newNumber > 0) {
      orderInfo.qty = newNumber;
      setQtyCounter(newNumber, updateOrder(orderInfo));
    }
    if (newNumber === 0) {
      orderInfo.qty = newNumber;
      setQtyCounter(0, updateOrder(orderInfo));
      setTimeout(() => setItemStyle(notSelected, 100));
    }
  };

  return (
    <li className={itemStyle.card} onClick={() => selectItem()}>
      <img src={image} alt={image_alt} />
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <h3>
        R$ <spam className="value">{price}</spam>
      </h3>
      <div className={itemStyle.counter}>
        <ion-icon
          name="remove"
          class="qty-minus"
          onClick={() => updateCounter(qtyCounter - 1)}
        ></ion-icon>
        <spam className="qty-counter">{qtyCounter}</spam>
        <ion-icon
          name="add"
          class="qty-plus"
          onClick={() => updateCounter(qtyCounter + 1)}
        ></ion-icon>
      </div>
    </li>
  );
}
