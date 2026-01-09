import { useState } from "react";
import NewCard from "../Form/NewCard/NewCard";
import novoa from "../../assets/images/novoa.jpg";
import edit from "../../assets/images/edit.png";
import pencil from "../../assets/images/pencil.png";
import add from "../../assets/images/add.png";
import Popup from "./components/Popup/Popup";
import EditProfile from "../Form/EditProfile/EditProfile";
import EditAvatar from "../Form/EditAvatar/EditAvatar";

export default function Main() {
  const [popup, setPopup] = useState(null);

  const editAvatar = { title: "New Photo", children: <EditAvatar /> };

  const newProfilePopup = { title: "Name", children: <EditProfile /> };

  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__edit-photo">
          <img
            src={novoa}
            alt="profile picture of user"
            className="profile__avatar"
          />
          <img
            src={pencil}
            alt="profile picture of user"
            className="profile__edit-pencil"
            onClick={() => {
              handleOpenPopup(editAvatar);
            }}
          />
        </div>

        <div className="profile__container">
          <h2 className="profile__name">JUAN PABLO</h2>
          <h3 className="profile__profession"> Explorador </h3>
        </div>
        <button type="button" className="profile__edit-button">
          <img
            src={edit}
            alt="Pen to edit the profile"
            className="profile__edit-image"
            onClick={() => {
              handleOpenPopup(newProfilePopup);
            }}
          />
        </button>
        <button type="button" className="profile__add-button">
          <img
            src={add}
            alt="box to add more"
            className="profile__add-image"
            onClick={() => {
              handleOpenPopup(newCardPopup);
            }}
          />
        </button>

        {popup && (
          <Popup onClose={handleClosePopup} title={popup.title}>
            {popup.children}
          </Popup>
        )}
      </section>
    </main>
  );
}
