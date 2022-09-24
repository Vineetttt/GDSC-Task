import React from "react";

function Quiz({score,checkAnswer,data:{question,correct_answer,answers}}){
    return(
        <>
        <div className="questionClass">
                <h1 dangerouslySetInnerHTML={{__html:question}} />
            </div>
        <div className="optionClass">
            {answers.map((answer,i) => {
                return(
                    <button className="button" 
                    onClick = {() => checkAnswer(answer)}
                    dangerouslySetInnerHTML={{__html:answer}} />
                )
            })}
        </div>
        <p className="button score">Score:<span dangerouslySetInnerHTML={{__html:score}}/></p>
        </>
    )
}
export default Quiz;
