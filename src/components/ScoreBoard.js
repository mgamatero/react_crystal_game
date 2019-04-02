import React from 'react';
import './ScoreBoard.css';

const ScoreBoard = (props) => {
    let currScore = `
                Goal = ${props.goal}  Current Score = ${props.currScore}
                `

    let totalScore = `
                Total Wins = ${props.totWins}  Total Losses = ${props.totLosses}
                 `

    let instructions = `
                Reach the Goal Score! Each guitar has a random value assigned to it. 
                Clicking adds the random value to your current score.  Good luck!
                        `
    return (
        <div>
            <div className="row py-4">

                <div className="d-none d-md-block col-md-8 text-center text-light border rounded">
                    <div className="display-4">
                        "Crystal Game"
                        </div>
                    <div className="lead">
                        {instructions}
                    </div>
                </div>
                <div className="col-md-4 text-center text-light border rounded score">
                    <h4>Scores</h4>
                    <h5>Current Score</h5>
                    {currScore}
                    <h5>Total Score</h5>
                    {totalScore}
                </div>
            </div>

        </div>


    )
}



// <div className="col-4">
// <h5>Scores</h5>
// <p className="bg-secondary">
//     {body}
// </p>
// <p className="card-footer bg-warning">
//     {totals}
// </p>

// </div>


export default ScoreBoard;
