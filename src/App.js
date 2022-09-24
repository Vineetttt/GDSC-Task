import React from "react";
import axios from "axios";
import {useState, useEffect } from "react";
import './App.css';
import Quiz from "./AppComponents/quiz";

const getData = "https://opentdb.com/api.php?amount=10";
function App(){
    const [questions,getQuestion] = useState([]);
    const [index,currentIndex] = useState(0);
    const [score,updateScore] = useState(0);

    useEffect(() =>{
      axios.get(getData)
      .then(response => response.data)
      .then(data => {
        //console.log(data.results)

        // to shuffel the correct answer create a new array with all the answers including incorrect
        const questions = data.results.map((question) => ({
          ...question, //not chnaging the data except 
          //sorting the answer array so the correct answer is not at the same index always 
          answers: [question.correct_answer,...question.incorrect_answers].sort(() => Math.random() - 0.5) 
        }))
        console.log(questions)
        getQuestion(questions)  
      })
},[])

const checkAnswer = (answer) =>{
  //checking i fthe answer matches the correct answer from api
  if(answer === questions[index].correct_answer){
    updateScore(score+1);
  }
  currentIndex(index+1)
  console.log("Your score is ",score);
}
    return(
       questions.length > 0 ? (
        <div className="container">
          {index >= questions.length ? (
            <>
            <h1 className="final-score">Final Score: {score}</h1>
            <button className='button play-again' onClick = {() => window.open('./App','_self')}>Play Again</button>
            </>
          ):(
            <>
            <Quiz checkAnswer = {checkAnswer}
            score = {score}
            data={questions[index]} />
            </>
          )}
        </div>
    ) :"Fetching...."
    );
};

export default App;