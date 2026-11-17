function LeaderBoard() {
  return (
    <div className="leader-board">
      <p className="title">leader board</p>

      <div className="player-status">
        <i className="name">player 1</i>
        <i className="click-count">238</i>
        <i className="rank">1st</i>
      </div>

      <div className="player-status">
        <i className="name">player 2</i>
        <i className="click-count">207</i>
        <i className="rank">2nd</i>
      </div>
    </div>
  );
}

export default LeaderBoard;
