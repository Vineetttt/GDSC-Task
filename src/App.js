import React from "react";
import axios from "axios";
import {useState, useEffect } from "react";
import './App.css';
import Quiz from "./AppComponents/quiz";

const getData = "https://opentdb.com/api.php?amount=10";
function App(){
    const [questions,getQuestion] = useState([]); // initializing questions with an empty array
    const [index,currentIndex] = useState(0);     // initializing with first index 0 
    const [score,updateScore] = useState(0);      // initial score is set to 0 

    // use effect hook is used to perform side tasks like fetching data 
    useEffect(() =>{
      axios.get(getData)
      .then(response => response.data)
      .then(data => {

        // to shuffel the correct answer to a new place every time create a new object with all the answers including incorrect
        const questions = data.results.map((question) => ({
          ...question,  
          //sorting the answer array so the correct answer is not at the same index always 
          answers: [question.correct_answer,...question.incorrect_answers].sort(() => Math.random() - 0.5) 
        }))
        //console.log(questions) //will display the questions and corresponding correct answers in console
        getQuestion(questions)  
      })
},[])

const checkAnswer = (answer) =>{
  //checking if the user selected answer matches the correct answer from api data
  if(answer === questions[index].correct_answer){
    updateScore(score+1);
  }
  currentIndex(index+1)
  console.log("Your current score is ",score);
}

    return(
       /*if some data is fetched i.e. the size of the array is > 0 then call the fucntion else display still fetching the data*/
       questions.length > 0 ? (
        <div className="container">
          {/*when there are no questions left to display output the final quiz score*/}
          {index >= questions.length ? (
            <>
            <h1 className="final-score">Final Score: {score}</h1>
            <button className='button play-again' onClick = {() => window.open('./App','_self')}>Play Again</button>
            </>
          ):(
            <>
            {/*Passing the data fetched into quiz.js to display it on the page */}
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