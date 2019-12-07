import React from 'react';
import Reviews from './Reviews.jsx';
import StarRatings from 'react-star-ratings';
import ModalBox from './ModalBox.jsx';

class App extends React.Component {
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
      reviewsLength: null,
      averageRating: null,
      currentBar: null,
      clickedWriteReview: false,
      item:"Men's Rainier Rain Jacket",
      seller:"REI Co-Op - REI Co-op",
      imgurl:"https://reiimages.s3-us-west-1.amazonaws.com/modalBoxImg/modalBoxImg.jpeg",
      fit: true
    }

  this.getStars = this.getStars.bind(this);
  this.getAverageRating = this.getAverageRating.bind(this);
  this.handleRatingBarClick = this.handleRatingBarClick.bind(this);
  this.barStyleClass = this.barStyleClass.bind(this);
  }

  barStyleClass(stars){
    if(stars / this.state.reviewsLength === 1){
      return "five full";
    } else if ((Number(stars / this.state.reviewsLength).toFixed(1) >= 0.9) && (Number(stars / this.state.reviewsLength).toFixed(1) < 1)){
      return "five aboveNinety";
    } else if ((Number(stars / this.state.reviewsLength).toFixed(1) >= 0.8) && (Number(stars / this.state.reviewsLength).toFixed(1) < 0.9)){
      return "five aboveEighty";
    } else if ((Number(stars / this.state.reviewsLength).toFixed(1) >= 0.7) && (Number(stars / this.state.reviewsLength).toFixed(1) < 0.8)){
      return "five aboveSeventy";
    } else if ((Number(stars / this.state.reviewsLength).toFixed(1) > 0.5) && (Number(stars / this.state.reviewsLength).toFixed(1) < 0.7)){
      return "five aboveFifty";
    } else if (stars / this.state.reviewsLength === 0.5){
      return "five fifty";
    } else if ((Number(stars / this.state.reviewsLength).toFixed(1) >= 0.4) && (Number(stars / this.state.reviewsLength).toFixed(1) < 0.5)){
      return "five aboveForty";
    } else if ((Number(stars / this.state.reviewsLength).toFixed(1) >= 0.3) && (Number(stars / this.state.reviewsLength).toFixed(1) < 0.4)){
      return "five aboveThirty";
    } else if ((Number(stars / this.state.reviewsLength).toFixed(1) >= 0.2) && (Number(stars / this.state.reviewsLength).toFixed(1) < 0.3)){
      return "five aboveTwenty";
    } else if ((Number(stars / this.state.reviewsLength).toFixed(1) > 0) && (Number(stars / this.state.reviewsLength).toFixed(1) < 0.2)){
      return "five aboveTen";
    } else {
      return "five";
    }
  }

  openModal(e){
    e.preventDefault();
    document.getElementById("FOREST-curtain").style.display = "block";
    document.getElementById("FOREST-modal").style.display = "block";
  }

  handleRatingBarClick(e){
    let currentBar;
    if (e.currentTarget.id === "five"){
      currentBar = 5;
    } else if (e.currentTarget.id === "four"){
      currentBar = 4;
    } else if (e.currentTarget.id === "three"){
      currentBar = 3;
    } else if (e.currentTarget.id === "two"){
      currentBar = 2;
    } else {
      currentBar = 1;
    }
    this.setState({
      currentBar: currentBar
    })
    console.log(this.state.currentBar)
  }

  getAverageRating(reviews){
    var averageRating = 0;
    for (var i = 0; i < reviews.length; i++){
      averageRating += reviews[i].stars
    }
    averageRating = Number((averageRating / reviews.length).toFixed(1));
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
      },
      reviewsLength: five + four + three + two + one
    })
  }
  
  render(){
    return(
      <div id="body">
       
        <link rel="stylesheet" href="https://reibundles.s3-us-west-1.amazonaws.com/style.css"></link>
        <link rel="stylesheet" href="https://reibundles.s3-us-west-1.amazonaws.com/modalStyle.css"></link>
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"></link>

        <div className="title">
        <p>Reviews</p>
        </div>
        
        <div id="FOREST-curtain"/>
          <div id="FOREST-modal">
          <div id="FOREST-sidebar">
            <img id="FOREST-itemImg" src={this.state.imgurl} />
            <p id="FOREST-itemInfo" className="FORESTGLOBAL-p">{this.state.seller+" - "+this.state.item}</p>
          </div>
          <ModalBox item={this.state.item} fit={this.state.fit}/>
        </div>

        <div className="write">
        <button id="FOREST-open"  className="FORESTGLOBAL-button" onClick={this.openModal.bind(this)}>Write a review</button>
        </div>

        <div className="summary">
          <div className="ratingAvg">
            <div id="snapshot">
              <p className="p">Rating Snapshot</p>
              <p className="p">Select a row below to filter reviews.</p>
              <div className="stars">
              <div onClick={this.handleRatingBarClick} id="five"  className="star">5 ★ <div className="barHolder"><span className={this.barStyleClass(this.state.stars.five)}></span></div><span>{this.state.stars.five}</span></div>
              <div onClick={this.handleRatingBarClick} id="four" className="star">4 ★  <div className="barHolder"><span className={this.barStyleClass(this.state.stars.four)}></span></div><span>{this.state.stars.four}</span></div>
              <div onClick={this.handleRatingBarClick} id="three" className="star">3 ★  <div className="barHolder"><span className={this.barStyleClass(this.state.stars.three)}></span></div><span>{this.state.stars.three}</span></div>
              <div onClick={this.handleRatingBarClick} id="two" className="star">2 ★  <div className="barHolder"><span className={this.barStyleClass(this.state.stars.two)}></span></div><span>{this.state.stars.two}</span></div>
              <div onClick={this.handleRatingBarClick} id="one" className="star">1 ★  <div className="barHolder"><span className={this.barStyleClass(this.state.stars.one)}></span></div><span>{this.state.stars.one}</span></div>
              </div>
            </div>

            <div id="average">
              <span>Average Customer Ratings</span>
              <div id="overall"><span id="overallText">Overall</span>{this.state.averageRating && <StarRatings starEmptyColor="#BEBEBE" starRatedColor="#426c90" starSpacing="0" starDimension="20px" rating={this.state.averageRating} />}<span id="score">{this.state.averageRating}</span></div>
              <div id="fitholder" style={{marginBottom: '10px'}}>
                <p id="fitword">Fit <li className="fit leftfit"></li><li className="fit"></li><span id="fitIndicator"></span><li className="fit"></li><li className="fit"></li></p>
                <p id="smallLarge"><span>Runs Small</span><span id="large">Runs Large</span></p>
              </div>
            </div>
          </div>
        </div> 

        <div>
          <Reviews currentBar={this.state.currentBar} getAverageRating={this.getAverageRating} getStars={this.getStars}/>
        </div>
        
      </div>   
    )
  }
}

export default App;