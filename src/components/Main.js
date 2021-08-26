import List from "../lists/List";
const lists = [
  {
    title: "Primeiro, seu prato",
    class: "list dish",
    itens: [
      {
        category: "dish",
        image: "assets/hamburguer.jpg",
        image_alt: "Hamburguer",
        title: "Hamburguer",
        subtitle: "Hamburguer com vários ingredientes de hamburguer",
        price: "11,90",
      },
      {
        category: "dish",
        image: "assets/pizza.jpg",
        image_alt: "Pizza",
        title: "Pizza",
        subtitle: "Pizza com vários ingredientes de pizza!",
        price: "13,90",
      },
    ],
  },
  { title: "Agora, sua bebida", class: "list beverage", itens: [] },
  { title: "Por fim, sua sobremesa", class: "list dessert", itens: [] },
];

export default function Main() {
  return (
    <main>
      {lists.map((list, key) => (
        <List
          title={list.title}
          className={list.class}
          key={key}
          itens={list.itens}
        ></List>
      ))}
    </main>
  );
}
