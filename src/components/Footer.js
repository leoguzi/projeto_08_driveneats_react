export default function Footer() {
  return (
    <footer>
      <div className="button checkout" onClick={() => console.log("checkout")}>
        <spam>
          Selecione os tres itens <br />
          para fechar o pedido
        </spam>
      </div>
    </footer>
  );
}
