import { useState } from "react";

const Card = ({ id, name, link, onEliminar }) => {
  const [active, setActive] = useState(false);
   const [openImage, setOpenImage] = useState(false); 

  return (
    <div className="cards__content">
      <img src={link} alt={name} className="cards__content-image" onClick={() => setOpenImage(true)} />

      <button
        type="button"
        className="cards__content-trash"
        onClick={() => onEliminar(id)}
      ></button>

      <div className="cards__content-block">
        <h2 className="cards__content-description">{name}</h2>

        <button
          aria-label="Botón de me gusta"
          type="button"
          className={`cards__content-like ${
            active ? "cards__content-like_active" : ""
          }`}
          onClick={() => setActive(!active)}
        ></button>
      </div>
      {openImage && (
        <div onClick={() => setOpenImage(false)}>
          <img src={link} alt={name} className="popup__image"/>
        </div>
      )}
    </div>

    
  );
};

export default Card;
