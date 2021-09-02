import "./PlayerCard.css";

function PlayerCard(props) {
  const classes = `player-card ${props.className}`;
  return <div className={classes}>{props.children}</div>;
}

export default PlayerCard;
