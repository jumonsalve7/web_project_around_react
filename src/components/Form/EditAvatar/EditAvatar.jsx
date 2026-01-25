import close from "../../../assets/images/close.png";
import CurrentUserContext from "../../../contexts/CurrentUserContext";
import { useContext, useState } from "react";

export default function EditAvatar({ handleClosePopup }) {
  const { onAvatarUpdate } = useContext(CurrentUserContext);

  const [avatar, setAvatar] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onAvatarUpdate(avatar);
    setAvatar("");
    handleClosePopup();
  };

  return (
    <div className="photo__container">
      <button type="button" className="photo__close">
        <img src={close} alt="close icon" />
      </button>
      <form className="photo__group" onSubmit={handleSubmit} noValidate>
        <h2 className="photo__title">New photo</h2>
        <span className="form__input-error inputTitle-error"></span>
        <input
          type="url"
          id="inputUrl"
          name="url"
          placeholder="Image URL"
          className="form__placeholder"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
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
