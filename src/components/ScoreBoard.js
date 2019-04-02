import React from 'react';
import './ScoreBoard.css';

const ScoreBoard = (props) => {
    let body = `
                Goal = ${props.goal}
                CurrentScore = ${props.currScore}
                Total Wins = ${props.totWins}
                Total Losses = ${props.totLosses}
                `
    return (
        <div>
            <div className="jumbotron p-2 bg-secondary">
                <h5 className="text-center">Scores</h5>
                {body}

            </div>
        </div>
    )
}

export default ScoreBoard;
