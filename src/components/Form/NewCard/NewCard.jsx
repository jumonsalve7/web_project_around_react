import close from "../../../assets/images/close.png";
import { useContext, useState } from "react";
import CurrentUserContext from "../../../Context/CurrentUserContext";

export default function NewCard() {
  const userContext = useContext(CurrentUserContext);
  const { handleAddPlaceSubmit } = userContext;
  const { name, setName } = useState();
  const { link, setLink } = useState();
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submit behavior

    handleAddPlaceSubmit({ name, link }); // Update the user info
    console.log(name);
  };

  const setInput = (event) =>{
    const input = event.target.value
    setName(input)
  }

  return (
    <div className="formadd__container">
      <button type="button" className="formadd__close">
        <img src={close} alt="close icon" />
      </button>
      <form className="formadd__group" onSubmit={handleSubmit} novalidate>
        <h2 className="formadd__title">New place</h2>
        <input
          type="text"
          id="inputTitle"
          placeholder="Title"
          name="place"
          className="form__placeholder"
          minlength="2"
          maxlength="30"
          value={name}
          onChange={setInput}
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
          onChange={() => setLink(value)}
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
