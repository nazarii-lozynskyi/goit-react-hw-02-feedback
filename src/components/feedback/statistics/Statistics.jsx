import React from 'react';

import styles from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <p className={styles.title}>Statistics</p>

      <ul className={styles.list}>
        <li className={styles.item}>
          <p className={styles.heading}>
            Good:<span className={styles.data}>{good}</span>
          </p>
        </li>

        <li className={styles.item}>
          <p className={styles.heading}>
            Neutral:
            <span className={styles.data}>{neutral}</span>
          </p>
        </li>

        <li className={styles.item}>
          <p className={styles.heading}>
            Bad:<span className={styles.data}>{bad}</span>
          </p>
        </li>

        <li className={styles.item}>
          <p className={styles.heading}>
            Total:<span className={styles.data}>{good + bad + neutral}</span>
          </p>
        </li>

        <li className={styles.item}>
          <p className={styles.heading}>
            Positive feedback:
            <span className={styles.data}>
              {(good / (good + bad + neutral)) * 100} %
            </span>
          </p>
        </li>
      </ul>
    </>
  );
}

export default Statistics;
