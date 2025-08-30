import Card from "../card/card";
import "./card-list.css";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list-container">
      {monsters.map(({ name, email, id }) => (
        <Card name={name} email={email} key={id} id={id} />
      ))}
    </div>
  );
};

export default CardList;
