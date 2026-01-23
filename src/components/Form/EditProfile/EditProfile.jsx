import { useState, useContext } from "react";
import close from "../../../assets/images/close.png";
import CurrentUserContext from "../../../Context/CurrentUserContext";

export default function EditProfile() {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    handleUpdateUser({ name, about: description });
  };
  return (
    <div className="form__container">
      <button type="button" className="form__close">
        <img src={close} alt="close icon" />
      </button>
      <form className="form__group" novalidate>
        <h2 className="form__title">Edit profile</h2>
        <input
          type="text"
          id="name"
          placeholder="Name"
          name="profile"
          className="form__placeholder"
          minlength="2"
          maxlength="40"
          required
          value={name}
          onChange={handleChangeName}
          onSubmit={handleSubmit}
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
          required
          value={description}
          onChange={handleChangeDescription}
        />
        <span className="form__input-error profession-error"></span>
        <button type="submit" className="form__submit">
          Save
        </button>
      </form>
    </div>
  );
}
