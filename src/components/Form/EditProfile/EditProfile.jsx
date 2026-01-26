import { useState, useContext } from "react";
import close from "../../../assets/images/close.png";
import CurrentUserContext from "../../../contexts/CurrentUserContext";
import "../../../index.css";


export default function EditProfile({ handleClosePopup }) {
  const { handleUpdateUser } = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    handleUpdateUser({ name, about: description });
    setName("");
    setDescription("");
    handleClosePopup();
  };
  return (
    <div className="form__container">
      <button type="button" className="form__close">
        <img src={close} alt="close icon" />
      </button>
      <form className="form__group" onSubmit={handleSubmit} noValidate>
        <h2 className="form__title">Edit profile</h2>
        <input
          type="text"
          id="name"
          placeholder="Name"
          name="profile"
          className="form__placeholder"
          minlength="2"
          maxlength="40"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <span className="form__input-error name-error"></span>
        <input
          type="text"
          id="profession"
          placeholder="About me"
          name="profession"
          className="form__placeholder"
          minlength="10"
          maxlength="200"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <span className="form__input-error profession-error"></span>
        <button type="submit" className="form__submit">
          Save
        </button>
      </form>
    </div>
  );
}
