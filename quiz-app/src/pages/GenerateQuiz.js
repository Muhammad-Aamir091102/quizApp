import React, { useState, useReducer } from 'react';

const initialState = {
  questions: [],
  quizTitle: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_QUESTION':
      return { ...state, questions: [...state.questions, { question: '', answers: ['', '', ''], correctAnswer: '' }] };
    case 'DELETE_QUESTION':
      const newQuestions = [...state.questions];
      newQuestions.splice(action.index, 1);
      return { ...state, questions: newQuestions };
    case 'ADD_ANSWER':
      const newAnswers = [...state.questions[action.index].answers];
      newAnswers.push('');
      return { ...state, questions: [...state.questions.slice(0, action.index), { ...state.questions[action.index], answers: newAnswers }, ...state.questions.slice(action.index + 1)] };
    case 'UPDATE_QUESTION':
      return { ...state, questions: [...state.questions.slice(0, action.index), { ...state.questions[action.index], question: action.value }, ...state.questions.slice(action.index + 1)] };
    case 'UPDATE_ANSWER':
      const updatedAnswers = [...state.questions[action.index].answers];
      updatedAnswers[action.answerIndex] = action.value;
      return { ...state, questions: [...state.questions.slice(0, action.index), { ...state.questions[action.index], answers: updatedAnswers }, ...state.questions.slice(action.index + 1)] };
    case 'UPDATE_CORRECT_ANSWER':
      return { ...state, questions: [...state.questions.slice(0, action.index), { ...state.questions[action.index], correctAnswer: action.value }, ...state.questions.slice(action.index + 1)] };
    case 'UPDATE_QUIZ_TITLE':
      return { ...state, quizTitle: action.value };
    default:
      return state;
  }
};

const GenerateQuiz = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const generateQuiz = () => {
    console.log('Generated Quiz:', state.questions);
  };

  return (
    <React.Fragment>
      <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          {/* Quiz Title Input */}
          <div className="mb-4">
            <label htmlFor="quizTitle" className="block text-gray-700 text-sm font-bold mb-2">
              Type your Quiz Title
            </label>
            <input
              type="text"
              id="quizTitle"
              value={state.quizTitle}
              onChange={(event) => dispatch({ type: 'UPDATE_QUIZ_TITLE', value: event.target.value })}
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Questions */}
          {state.questions.map((question, index) => (
            <div key={index} className="mb-4">
              {/* Question Input */}
              <div className="mb-2">
                <label htmlFor={`question-${index}`} className="block text-gray-700 text-sm font-bold mb-2">
                  Question {index + 1}
                </label>
                <input
                  type="text"
                  id={`question-${index}`}
                  value={question.question}
                  onChange={(event) => dispatch({ type: 'UPDATE_QUESTION', index, value: event.target.value })}
                  placeholder="Type your question"
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                />
              </div>

              {/* Answers */}
              {question.answers.map((answer, answerIndex) => (
                <div key={answerIndex} className="mb-2">
                  <label htmlFor={`answer-${index}-${answerIndex}`} className="block text-gray-700 text-sm font-bold mb-2">
                    Answer {answerIndex + 1}
                  </label>
                  <input
                    type="text"
                    id={`answer-${index}-${answerIndex}`}
                    value={answer}
                    onChange={(event) => dispatch({ type: 'UPDATE_ANSWER', index, answerIndex, value: event.target.value })}
                    placeholder="Type your answer"
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
                  />
                </div>
              ))}

              {/* Add Answer Button */}
              <button
                type="button"
                onClick={() => dispatch({ type: 'ADD_ANSWER', index })}
                className="inline-block px-3 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              >
                Add Answer
              </button>

              {/* Delete Question Button */}
              <button
                type="button"
                onClick={() => dispatch({ type: 'DELETE_QUESTION', index })}
                className="inline-block px-3 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:shadow-outline"
              >
                Delete Question
              </button>
            </div>
          ))}

          {/* Add Question Button */}
          <button
            type="button"
            onClick={() => dispatch({ type: 'ADD_QUESTION' })}
            className="inline-block px-3 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:shadow-outline"
          >
            Add Question
          </button>

          {/* Generate Quiz Button */}
          <button
            type="button"
            onClick={generateQuiz}
            className="inline-block px-3 py-2 text-white bg-yellow-600 rounded-lg hover:bg-yellow-700 focus:outline-none focus:shadow-outline"
          >
            Generate Quiz
          </button>
        </div>
      </section>
    </React.Fragment>
  );
};

export default GenerateQuiz;