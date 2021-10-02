import React from 'react';

import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({
  onLeavePositiveFeedback,
  onLeaveNeutralFeedback,
  onLeaveNegativeFeedback,
}) => (
  <ul className={styles.bntList}>
    <li className={styles.btnItem}>
      <button
        type="button"
        className={styles.btn}
        onClick={onLeavePositiveFeedback}
      >
        Good
      </button>
    </li>

    <li className={styles.btnItem}>
      <button
        type="button"
        className={styles.btn}
        onClick={onLeaveNeutralFeedback}
      >
        Neutral
      </button>
    </li>

    <li className={styles.btnItem}>
      <button
        type="button"
        className={styles.btn}
        onClick={onLeaveNegativeFeedback}
      >
        Bad
      </button>
    </li>
  </ul>
);

export default FeedbackOptions;
