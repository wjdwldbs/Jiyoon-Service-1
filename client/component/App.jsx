import React from 'react';
import Reviews from './Reviews.jsx';
class App extends React.Component{
  constructor(){
    super();
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
              <div className="star">5 ★  <div className="barHolder"><span className="five"></span></div></div>
              <div className="star">4 ★  <div className="barHolder"><span className="five"></span></div></div>
              <div className="star">3 ★  <div className="barHolder"><span className="five"></span></div></div>
              <div className="star">2 ★  <div className="barHolder"><span className="five"></span></div></div>
              <div className="star">1 ★  <div className="barHolder"><span className="five"></span></div></div>
              </div>
            </div>

            <div id="average">
              <p>Average Customer Ratings</p>
              <p>Overall  <span id="overall">  ★★★★☆</span><span id="score">4.0</span></p>
              <div id="fitholder">
                <p id="fitword">Fit <li className="fit leftfit"></li><li className="fit"></li><li className="fit"></li><li className="fit"></li></p>
                <p id="smallLarge"><span>Runs Small</span><span id="large">Runs Large</span></p>
              </div>
            </div>

          </div>

        </div> 
        {/* end of summary div */}

        <div id="reviewNums">
          <span id="reviews">1–8 of 53 Reviews</span>

          <span id="sort">
            <img id="q" src="https://img.icons8.com/material-sharp/24/000000/help.png"></img><span>Sort by:</span>

            <div className="dropdown">
              <button className="dropbtn">Most Relevant{`  `}
              <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <a className="relevant">Most Relevant</a>
                <a className="helpful">Most Helpful</a>
                <a className="highest">Highest To Lowest Rating</a>
                <a className="lowest">Lowest To Highest Rating</a>
                <a className="recent">Most Recent</a>
              </div>
            </div>
          </span>

        </div> 
        {/* <div id="border"></div> */}
        
      </div>
      
    )
  }
}

export default App;