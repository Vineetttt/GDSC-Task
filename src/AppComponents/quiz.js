import React from "react";

//de-structuring the array data inside the fucntion to use 
function Quiz({score,checkAnswer,data:{question,answers}}){
    return(
        <>
        <div className="questionClass">
                <h1 dangerouslySetInnerHTML={{__html:question}} />
            </div>
        <div className="optionClass">
            {/*number of options visible is equal to the size of the answers array*/}
            {answers.map((answer,i) => {
                return(
                    <button className="button" 
                    onClick = {() => checkAnswer(answer)}
                    dangerouslySetInnerHTML={{__html:answer}} />
                )
            })
            
            }
        </div>
        <p className="button score">Score:<span dangerouslySetInnerHTML={{__html:score}}/></p>
        </>
    )
}
export default Quiz;
