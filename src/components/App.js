import React from 'react';
import ScoreBoard from './ScoreBoard';
import Images from './Images';
import './App.css';


import Guitar1 from '../assets/images/baby_taylor.jpg';
import Guitar2 from '../assets/images/guild_m20.jpg';
import Guitar3 from '../assets/images/martin_00015m.jpg';
import Guitar4 from '../assets/images/takamine_nex.jpg';

class App extends React.Component {

    state = {
        totalWins: 0,
        totalLosses: 0,
        currentScore: 0,
        goalScore: 0,
        imageValue1: 0,
        imageValue2: 0,
        imageValue3: 0,
        imageValue4: 0
    }


    initialize = () => {
        let goal = (Math.floor(Math.random() * 20)) + 20;
        let val1 = Math.floor(Math.random() * (Math.floor(goal / 4)))
        let val2 = Math.floor(Math.random() * (Math.floor(goal / 4)))
        let val3 = Math.floor(Math.random() * (Math.floor(goal / 4)))
        let val4 = Math.floor(Math.random() * (Math.floor(goal / 4)))

        this.setState({
            
            currentScore: 0,
            goalScore: goal,
            imageValue1: val1,
            imageValue2: val2,
            imageValue3: val3,
            imageValue4: val4
        })
    }

    handleClickedImage = (event) => {
        let pickedId = event.target.getAttribute('imageid')
        let pickedValue = this.state[`imageValue${pickedId}`]
        
        //console.log(this.state)
        
        this.setState({
            currentScore: this.state.currentScore + pickedValue
        },()=>{
            this.scoreDecision() //callBack on this setState to handle async
        })
        
        
        
    }

    scoreDecision = () => {
        if (this.state.currentScore > this.state.goalScore){
            let lose = new Audio('../assets/audio/loser.m4a');
            lose.play();
            
            console.log("Lost");
            this.setState({totalLosses: this.state.totalLosses + 1})
            this.initialize()
                     
        }
        else if (this.state.currentScore === this.state.goalScore){
            console.log("Win")
            this.setState({totalWins: this.state.totalWins + 1})
            this.initialize()
        }
    }

    componentDidMount() {
        this.initialize();
    }

    render() {


        return (
            <div id="imageBackground" >
            

            <div className="container">
                <ScoreBoard
                    goal={this.state.goalScore}
                    currScore={this.state.currentScore}
                    totWins={this.state.totalWins}
                    totLosses={this.state.totalLosses} />

                    <div className="row px-5 py-2">
                        <div className="col-6 col-sm-3">
                            <Images imageid="1" srcAddress={Guitar1} handleClickedImage={this.handleClickedImage}/>                            </div>
                        <div className="col-6 col-sm-3">
                            <Images imageid="2" srcAddress={Guitar2} handleClickedImage={this.handleClickedImage}/>
                        </div>
                        <div className="col-6 col-sm-3">
                            <Images imageid="3" srcAddress={Guitar3} handleClickedImage={this.handleClickedImage} />
                        </div>
                        <div className="col-6 col-sm-3">
                            <Images imageid="4" srcAddress={Guitar4} handleClickedImage={this.handleClickedImage}/>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}


export default App;

