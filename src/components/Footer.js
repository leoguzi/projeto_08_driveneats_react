export default function Footer({ isCheckoutReady, orderData }) {
  let className = "button checkout";
  let buttonAction = () =>
    alert("Você deve selecionar pelo menos um item de cada categoria.");
  let buttonText =
    "Selecione pelo menos um item de cada categoria para fechar o pedido";
  if (isCheckoutReady) {
    className = "button checkout checkout-ready";
    buttonText = "Fechar Pedido";
    buttonAction = checkout;
  }

  function checkout() {
    let mensagem = "Olá, gostaria de fazer o pedido: \n";
    let valorTotal = 0;
    orderData.forEach((item) => {
      mensagem += "- " + item.title + " " + "(" + item.qty + "x)\n";
      valorTotal += item.price * item.qty;
    });
    mensagem +=
      "Total: R$ " +
      valorTotal.toFixed(2).toString().replace(".", ",") +
      "\n\n";
    mensagem =
      "https://wa.me/5548991235293/?text=" + encodeURIComponent(mensagem);
    window.open(mensagem);
  }

  return (
    <footer>
      <div className={className} onClick={() => buttonAction()}>
        <spam>{buttonText}</spam>
      </div>
    </footer>
  );
}
