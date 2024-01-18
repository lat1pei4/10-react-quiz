function NextButton({ dispatch, answer, index, numQuestions, status }) {
  if (answer === null) return null;
  if (index < numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        次へ
      </button>
    );
  if (index === numQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        提出
      </button>
    );
  if (status === "finished")
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        もう一回
      </button>
    );
}

export default NextButton;
