import "./card.css";

function Card({ title, image, description, rating, price, i, star }) {
  const descrip = description.slice(0, 130);

  return (
    <div key={i} className="card">
      <div className="productImg">
        <img src={image} alt={title} />
      </div>

      <div>
        <hr />
      </div>
      <div>
      <h3 className="title">{title}</h3>
      </div>
      <div>
      <p className="description">{descrip}...see more</p>
      </div>
      <div className="btnMainRating">
        <button className="btn">Cart | ${price}</button>
        <button className="btn">
          {rating} <img src={star} width={15} alt="star" />
        </button>
      </div>
    </div>

  );
}

export default Card;
