import List from "../lists/List";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
const lists = [
  {
    title: "Primeiro, seu prato",
    class: "list dishes",
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
      {
        category: "dish",
        image: "assets/poke.jpg",
        image_alt: "Poke",
        title: "Poke",
        subtitle: "Poke com vários ingredientes de Poke",
        price: "21,90",
      },
      {
        category: "dish",
        image: "assets/macarronada.jpeg",
        image_alt: "Macarronada",
        title: "Macarronada",
        subtitle: "Macarronada que na verdade é espaguete...",
        price: "10,90",
      },
    ],
  },
  {
    title: "Agora, sua bebida",
    class: "list beverages",
    itens: [
      {
        category: "beverage",
        image: "assets/caipirinha.jpeg",
        image_alt: "Caipirinha",
        title: "Caipirinha",
        subtitle:
          "Classica de limão. Para fazer seu trabalho depois do almoço render ;)",
        price: "8,90",
      },
      {
        category: "beverage",
        image: "assets/coca.jpg",
        image_alt: "CocaCola",
        title: "CocaCola",
        subtitle: "Seu pancreas fica triste, mas você fica feliz :D",
        price: "4,90",
      },
      {
        category: "beverage",
        image: "assets/suco.jpg",
        image_alt: "Suco de Laranja",
        title: "Suco de Laranja",
        subtitle: "Vitamina C pra dar aquele Up na imunidade. Xô Covid!",
        price: "9,80",
      },
      {
        category: "beverage",
        image: "assets/lokal.jpeg",
        image_alt: "Cerveja Lokal",
        title: "Cerveja Lokal",
        subtitle: "Ingrediente principal: água do rio (sem tratamento).",
        price: "5,90",
      },
    ],
  },
  {
    title: "Por fim, sua sobremesa",
    class: "list desserts",
    itens: [
      {
        category: "dessert",
        image: "assets/cheesecake.jpeg",
        image_alt: "Cheesecake",
        title: "Cheesecake",
        subtitle: "Torta de requeijão para os decolonizados :D",
        price: "7,99",
      },
      {
        category: "dessert",
        image: "assets/brownie.jpg",
        image_alt: "brownie",
        title: "Brownie",
        subtitle: "IPorque o bom e velho bolo de chocolate ficou obsoleto :/",
        price: "10,00",
      },
      {
        category: "dessert",
        image: "assets/pudim.jpg",
        image_alt: "Pudim",
        title: "Pudim",
        subtitle: "É aquela história né: quer moleza, senta em um pudim.",
        price: "7,50",
      },
      {
        category: "dessert",
        image: "assets/sorvete.jpeg",
        image_alt: "Sorvete",
        title: "Sorvete",
        subtitle: "Vai derreter? Sim, mas sai daqui congeladinho :D",
        price: "5,90",
      },
    ],
  },
];

let order = []; //gets updated everytime the user interacts with the layout.
export default function Main() {
  const [itensQty, setItensQty] = React.useState(0);
  const updateOrder = (newItem) => {
    let exists = false;
    if (newItem.qty === 0) {
      order = order.filter((item) => {
        //using a combination of title+id because ids are not unique :(
        if (item.id === newItem.id && item.title === newItem.title) {
          return false;
        }
        return true;
      });
      setItensQty(itensQty - 1);
    }
    order.forEach((item) => {
      if (item.category === newItem.category && item.id === newItem.id) {
        item.qty = newItem.qty;
        setItensQty(itensQty + 1);
        exists = true;
      }
    });
    if (!exists && newItem.qty > 0) {
      order.push(newItem);
      setItensQty(itensQty + 1);
    }
    checkOrder();
  };

  const [isCheckoutReady, setIsCheckoutReady] = React.useState(false);

  const checkOrder = () => {
    const dishes = order.filter((item) => item.category === "dish");
    const beverages = order.filter((item) => item.category === "beverage");
    const desserts = order.filter((item) => item.category === "dessert");
    dishes.length > 0 && beverages.length > 0 && desserts.length > 0
      ? setIsCheckoutReady(true)
      : setIsCheckoutReady(false);
  };

  return (
    <>
      <Header />
      <main>
        {lists.map((list, index) => (
          <List
            key={index}
            title={list.title}
            className={list.class}
            itens={list.itens}
            updateOrder={updateOrder}
          ></List>
        ))}
      </main>
      <Footer isCheckoutReady={isCheckoutReady} orderData={order} />
    </>
  );
}
