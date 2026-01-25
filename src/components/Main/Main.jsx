import { useContext } from "react";
import EditProfile from "../Form/EditProfile/EditProfile";
import edit from "../../assets/images/edit.png";
import pencil from "../../assets/images/pencil.png";
import add from "../../assets/images/add.png";
import Popup from "./components/Popup/Popup";
import EditAvatar from "../Form/EditAvatar/EditAvatar";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import Card from "../Card/Card";
import NewCard from "../Form/NewCard/NewCard";

export default function Main(props) {
  const { currentUser } = useContext(CurrentUserContext);
  const {
    cards,
    popup,
    handleOpenPopup,
    handleClosePopup,
    handleCardDelete,
    handleCardLike,
  } = props;

  const editAvatar = {
    title: "New Photo",
    children: <EditAvatar handleClosePopup={handleClosePopup} />,
  };

  const newProfilePopup = {
    title: "Name",
    children: <EditProfile handleClosePopup={handleClosePopup} />,
  };

  const newCardPopup = {
    title: "New place",
    children: <NewCard handleClosePopup={handleClosePopup} />,
  };

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__edit-photo">
          <img
            src={currentUser.avatar}
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
          <h2 className="profile__name">{currentUser.name}</h2>
          <h3 className="profile__profession"> {currentUser.about}</h3>
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
      </section>
      <section className="cards">
        <div className="cards__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              handleCardDelete={handleCardDelete}
              handleCardLike={handleCardLike}
            />
          ))}
        </div>
      </section>
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
