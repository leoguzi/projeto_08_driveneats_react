export default function Item(props) {
  const { category, image, image_alt, title, subtitle, price } = props;
  return (
    <li className={category} onClick={() => console.log("Cliqueiiii")}>
      <img src={image} alt={image_alt} />
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <h3>
        R$ <spam className="value">{price}</spam>
      </h3>
      <ion-icon name="checkmark-circle" className="checkmark"></ion-icon>
    </li>
  );
}
