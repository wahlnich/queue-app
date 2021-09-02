import "./PlayersGroupCard.css";

function PlayersGroupCard(props) {
  const classes = `players-card ${props.className}`;

  const submitHandler = () => {};

  return (
    <div>
      <div className={classes}>{props.children}</div>
      <button onClick={submitHandler} type="submit">
        Confirm Team!
      </button>
    </div>
  );
}

export default PlayersGroupCard;
