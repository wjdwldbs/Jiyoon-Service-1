import React from 'react';
import Reviews from './Reviews.jsx';
import axios from 'axios';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      stars: {
        five: null,
        four: null,
        three: null,
        two: null,
        one: null
      },
      averageRating: null
    }

  this.getStars = this.getStars.bind(this);
  this.getAverageRating = this.getAverageRating.bind(this);
  }

  getAverageRating(reviews){
    var averageRating = 0;
    for (var i = 0; i < reviews.length; i++){
      averageRating += reviews[i].stars
    }
    averageRating = (averageRating / reviews.length).toFixed(1);
    this.setState({
      averageRating: averageRating
    })
  }

  getStars(reviews){
    var five = 0;
    var four = 0;
    var three = 0;
    var two = 0;
    var one = 0;
    for (var i = 0; i < reviews.length; i++){
      if (reviews[i].stars === 5){
        five++;
      } else if (reviews[i].stars === 4){
        four++;
      } else if (reviews[i].stars === 3){
        three++;
      } else if (reviews[i].stars === 2){
        two++;
      } else {
        one++;
      }
    }
    this.setState({
      stars: {
        five: five,
        four: four,
        three: three,
        two: two,
        one: one
      }
    })
  }
  
  render(){
    return(
      <div>
        <div className="title">
        <p>Reviews</p>
        </div>

        <div className="write">
          <button id="button">Write a review</button>
        </div>

        <div className="summary">

          <div className="ratingAvg">

            <div id="snapshot">
              <p className="p">Rating Snapshot</p>
              <p className="p">Select a row below to filter reviews.</p>
              <div className="stars">
              <div className="star">5 ★  <div className="barHolder"><span className="five"></span></div><span>{this.state.stars.five}</span></div>
              <div className="star">4 ★  <div className="barHolder"><span className="five"></span></div><span>{this.state.stars.four}</span></div>
              <div className="star">3 ★  <div className="barHolder"><span className="five"></span></div><span>{this.state.stars.three}</span></div>
              <div className="star">2 ★  <div className="barHolder"><span className="five"></span></div><span>{this.state.stars.two}</span></div>
              <div className="star">1 ★  <div className="barHolder"><span className="five"></span></div><span>{this.state.stars.one}</span></div>
              </div>
            </div>

            <div id="average">
              <p>Average Customer Ratings</p>
              <p>Overall  <span id="overall">  ★★★★☆</span><span id="score">{this.state.averageRating}</span></p>
              <div id="fitholder">
                <p id="fitword">Fit <li className="fit leftfit"></li><li className="fit"></li><span id="fitIndicator"></span><li className="fit"></li><li className="fit"></li></p>
                <p id="smallLarge"><span>Runs Small</span><span id="large">Runs Large</span></p>
              </div>
            </div>

          </div>

        </div> 

        <div>
          <Reviews getAverageRating={this.getAverageRating} getStars={this.getStars}/>
        </div>
        
      </div>
      
    )
  }
}

export default App;