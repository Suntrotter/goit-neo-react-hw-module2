import css from "./Options.module.css";

const Options = ({ onGoodClick, onBadClick, onNeutralClick, onResetClick, totalFeedback }) => {
  return (
    <div>
      <button className={css.btn} onClick={onGoodClick}>Good</button>
      <button className={css.btn} onClick={onBadClick}>Bad</button>
      <button className={css.btn} onClick={onNeutralClick}>Neutral</button>
      {totalFeedback > 0 && (
        <button className={css.btn} onClick={onResetClick}>Reset</button>
      )}
    </div>
  );
};

export default Options;
