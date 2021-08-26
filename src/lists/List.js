import Item from "./Item";
export default function List(props) {
  const { title, className, itens } = props;
  return (
    <>
      <h1 className="list-title">{title}</h1>
      <ul className={className}>
        {itens.map((item) => (
          <Item
            category={item.category}
            image={item.image}
            image_alt={item.image_alt}
            title={item.title}
            subtitle={item.subtitle}
            price={item.price}
          ></Item>
        ))}
      </ul>
    </>
  );
}
