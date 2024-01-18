function FinishScreen({ points, maxPossiblePoints, highscore }) {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🏅";
  if (percentage > 80 && percentage < 100) emoji = "🎉";
  if (percentage > 50 && percentage < 80) emoji = "👏🏻";
  if (percentage > 0 && percentage < 50) emoji = "💪";
  if (percentage === 0) emoji = "🙄";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>最高
        {maxPossiblePoints}点中、あなたのスコアは<strong>{points}</strong>
        点です。(
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(最高記録: {highscore} 点)</p>
    </>
  );
}

export default FinishScreen;
