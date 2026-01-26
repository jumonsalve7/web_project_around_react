import Header from "./Header/header";
import Footer from "./Footer/footer";
import Main from "./Main/Main";
import { api } from "../utils/Api";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { useEffect, useState } from "react";
import "../../src/App.css";

export default function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    (async () => {
      await api.getUserInfo().then((data) => {
        setCurrentUser(data);
      });
    })();
  }, []);

  useEffect(() => {
    (async () => {
      await api.getInitialCards().then((data) => {
        setCards(data);
      });
    })();
  }, []);

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  const handleUpdateUser = (data) => {
    (async () => {
      await api
        .editProfile(data)
        .then((newData) => {
          setCurrentUser(newData);
          handleClosePopup();
        })
        .catch((error) => console.error(error));
    })();
  };
  const handleAddPlaceSubmit = (card) => {
    (async () => {
      await api.createCard(card).then((data) => {
        setCards([data, ...cards]);
        handleClosePopup();
      });
    })();
  };

  const onAvatarUpdate = async (avatar) => {
    try {
      const newData = await api.editPhoto(avatar);
      setCurrentUser(newData);
      handleClosePopup();
    } catch (error) {
      console.error(error);
    }
  };

  async function handleCardLike(card) {
    try {
      await api.toggleLikeCard(card.isLiked, card._id);

      setCards((state) =>
        state.map((currentCard) =>
          currentCard._id === card._id
            ? { ...currentCard, isLiked: !currentCard.isLiked }
            : currentCard,
        ),
      );
    } catch (error) {
      console.error("Error al actualizar el like:", error);
    }
  }

  async function handleCardDelete(id) {
    api.deleteCard(id);

    await setCards((state) =>
      state.filter((currentCard) => currentCard._id !== id),
    );
  }
  return (
    <>
      <CurrentUserContext.Provider
        value={{
          currentUser,
          handleUpdateUser,
          onAvatarUpdate,
          handleAddPlaceSubmit,
        }}
      >
        <Header></Header>
        <Main
          onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
          popup={popup}
          cards={cards}
          handleOpenPopup={handleOpenPopup}
          handleClosePopup={handleClosePopup}
          handleCardLike={handleCardLike}
          handleCardDelete={handleCardDelete}
        ></Main>
        <Footer></Footer>
      </CurrentUserContext.Provider>
    </>
  );
}
