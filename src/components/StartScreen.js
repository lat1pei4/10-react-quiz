function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Reactクイズへようこそ！</h2>
      <h3>{numQuestions}の質問であなたのReactの習熟度をテストしましょう</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        始めましょう
      </button>
    </div>
  );
}

export default StartScreen;
