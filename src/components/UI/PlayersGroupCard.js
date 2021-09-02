import "./PlayersGroupCard.css";

function PlayersGroupCard(props) {
  const classes = `players-card ${props.className}`;
  return <div className={classes}>{props.children}</div>;
}

export default PlayersGroupCard;
