import Item from "./Item";

export default function List({ title, className, itens, updateOrder }) {
  return (
    <>
      <h1 className="list-title">{title}</h1>
      <ul className={className}>
        {itens.map((item, index) => (
          <Item
            key={index}
            id={index}
            category={item.category}
            image={item.image}
            image_alt={item.image_alt}
            title={item.title}
            subtitle={item.subtitle}
            price={item.price}
            updateOrder={updateOrder}
          ></Item>
        ))}
      </ul>
    </>
  );
}
