import classes from "./CountdownElement.module.css";
const CountdownElement = ({ timeUnit, text }) => {
  return (
    <div className={classes.countdownEl}>
      <p className={classes.bigText}>{timeUnit}</p>
      <span>{text}</span>
    </div>
  );
};

export default CountdownElement;
