import React from 'react';
//Sentinel,Roboto,'Helvetica Neue',Helvetica,Arial,sans-serif;
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
              <p className="star">5 ★  <span className="bar"></span></p>
              <p className="star">4 ★  <span className="bar"></span></p>
              <p className="star">3 ★  <span className="bar"></span></p>
              <p className="star">2 ★  <span className="bar"></span></p>
              <p className="star">1 ★  <span className="bar"></span></p>
              </div>
            </div>

            <div id="average">
              <p>Average Customer Ratings</p>
              <p>Overall  <span>★★★★☆</span></p>
              <p>Fit</p>
            </div>
            
          </div>
        </div>

      </div>
    )
  }
}

export default App;