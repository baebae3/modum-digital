import React, { useEffect, useState } from "react";
import styles from "./history.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { returnGiftsState } from "../../store/reducers/gifts";

export default function History() {
  const dispatch = useDispatch();


  const history = useSelector((store) => store.history);

  const returnGifts = (GiftList) => {
    dispatch(returnGiftsState(GiftList));
  };

  return (
    <div className={styles.history_wrapper}>
      <h1>История действий:</h1>
      {history.map((history, index) => {
        return (
          <div className={styles.history_item} key={index}>
           <span>
            {history.hours}:{history.minutes}:{history.seconds}
           </span>
            <p>
              {history.isRemoved ? "[Удален] " : "[Подарен] "}
              {history.giftType}
            </p>
            <button onClick={() => returnGifts(history.history)}>
              Вернуться
            </button>
          </div>
        );
      })}
    </div>
  );
}
