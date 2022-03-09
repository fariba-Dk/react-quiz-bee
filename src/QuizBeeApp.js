import questions from './questions.js';
import React, { Component } from 'react';
import './style.css';
import QuestionBox from './component/QuestionBox';
import Result from './component/Result';

/* when we click a button -> we pass our option if it is correct, if correct we increment score by 1*/
class QuizBeeApp extends Component {
  //declare state in our component
  state = {
    questionBank: [],
  };
  //this invokes the questionBank and gets results
  getQuestions = () => {
    questions().then((question) => {
      this.setState({
        questionBank: question,
      });
    });
  };
  //load for first time
  componentDidMount() {
    this.getQuestions();
  }
  render() {
    return (
      <div className='container'>
        <div className='title'>🐝 Quiz-Bee 🐝</div>
        {this.state.questionBank.length > 0 &&
          this.state.questionBank.map(
            ({ question, answers, correct, questionId }) => (
              <QuestionBox
                question={question}
                options={answers}
                key={questionId}
              />
            )
          )}
      </div>
    );
  }
}
export default QuizBeeApp;
