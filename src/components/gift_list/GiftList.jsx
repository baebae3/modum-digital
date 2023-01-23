import styles from "./gift_list.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { addGift, deleteGift, refreshIds } from "../../store/reducers/gifts";
import { addHistoryItem } from "../../store/reducers/history";
import { GIFTS_NAME } from "../../consts/gifts";

export default function GiftList() {
  const dispatch = useDispatch();

  const allGifts = useSelector((store) => store.gifts);

  const [currentGift, setCurrentGift] = useState({
    giftType: "Дикий Авимим",
    gender: "Мальчик",
    age: 3,
    history: allGifts,
    isRemoved: false,
  });

  const addCurrentGift = (e) => {
    setCurrentGift((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const setGift = (gift) => {
    dispatch(
      addGift({ giftType: gift.giftType, age: gift.age, gender: gift.gender })
    );
    dispatch(
      addHistoryItem({
        giftType: currentGift.giftType,
        history: currentGift.history,
        isRemoved: currentGift.isRemoved,
      })
    );
  };

  const removeGift = (gift) => {
    dispatch(deleteGift(gift.id));
    dispatch(
      addHistoryItem({
        giftType: gift.giftType,
        isRemoved: true,
        history: currentGift.history,
      })
    );
  };

  useEffect(() => {
    setCurrentGift((prev) => ({
      ...prev,
      history: allGifts,
    }));
    dispatch(refreshIds());
  }, [allGifts]);

  return (
    <div className={styles.gift_list}>
      <select
        name="giftType"
        value={currentGift.giftType}
        id=""
        onChange={addCurrentGift}>
        {GIFTS_NAME.map((gift, index) => {
          return (
            <option key={index} value={gift}>
              {gift}
            </option>
          );
        })}
      </select>
      <label htmlFor="gender">М</label>
      <input
        type="radio"
        name="gender"
        value="Мальчик"
        onChange={addCurrentGift}
        checked={currentGift.gender == "Мальчик" ? true : false}
      />
      <label htmlFor="gender">Д</label>
      <input
        type="radio"
        name="gender"
        value="Девочка"
        onChange={addCurrentGift}
      />
      <input
        type="number"
        name="age"
        onChange={addCurrentGift}
        value={
          currentGift.age > 12
            ? setCurrentGift((prev) => ({ ...prev, age: 12 }))
            : currentGift.age < 3
            ? setCurrentGift((prev) => ({ ...prev, age: 3 }))
            : currentGift.age
        }
      />
      <button className={styles.add_btn} onClick={() => setGift(currentGift)}>
        Добавить
      </button>
      <ul>
        {allGifts.map((gift) => {
          return (
            <li key={gift.id}>
              <div className={styles.gift_list_header}>
                <h2>{gift.giftType}</h2>
                <button onClick={() => removeGift(gift)}>Удалить</button>
              </div>
              <p>Пол: {gift.gender == "М" ? "Мужской" : "Женский"}</p>
              <p>Возраст: {gift.age}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
