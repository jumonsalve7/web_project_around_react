import close from "../../../assets/images/close.png";
import { useContext, useState } from "react";
import CurrentUserContext from "../../../contexts/CurrentUserContext";
import "../../../App.css";


export default function NewCard({ handleClosePopup }) {
  const { handleAddPlaceSubmit } = useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    handleAddPlaceSubmit({ name, link });
    setName("");
    setLink("");
    handleClosePopup();
  };

  return (
    <div className="formadd__container">
      <button
        type="button"
        className="formadd__close"
        onClick={handleClosePopup}
      >
        <img src={close} alt="close icon" />
      </button>
      <form className="formadd__group" onSubmit={handleSubmit} noValidate>
        <h2 className="formadd__title">New place</h2>
        <input
          type="text"
          id="inputTitle"
          placeholder="Title"
          name="place"
          className="form__placeholder"
          minLength="2"
          maxLength="30"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <span className="form__input-error inputTitle-error"></span>

        <input
          type="url"
          id="inputUrl"
          name="url"
          placeholder="Image URL"
          className="form__placeholder"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
        />
        <span className="form__input-error inputUrl-error">
          Please enter a URL.
        </span>

        <button type="submit" className="form__submit">
          Save
        </button>
      </form>
    </div>
  );
}
