import React from 'react';
import axios from 'axios';
import ReviewsList from './ReviewsList.jsx';
import Modal from 'react-modal';

const modalStyle = {
  content: {
    display: 'block',
    marginTop: '0',
    margin: '0 auto',
    width: '60%',
    height: '65%',
    background: 'black',
    color: '#696969',
    
  }
};

Modal.setAppElement('#app');

class Reviews extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      reviews: [],
      showModal: false,
      reviewImg: '',
      imgCaption: '',
      itemsToShow: 8
    }

    this.sortByRelevance = this.sortByRelevance.bind(this);
    this.reviewStars = this.reviewStars.bind(this);
    this.reviewImgClick = this.reviewImgClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount(){
    this.getItemReviews(1);
  }

  sortByRelevance(){
    this.state.reviews.sort((a, b) => b.helpful_yes - a.helpful_yes);
  }

  reviewStars(rating){
    if (rating === 5){
      return '★★★★★';
    } else if (rating === 4){
      return '★★★★☆';
    } else if (rating === 3) {
      return '★★★☆☆';
    } else if (rating === 2) {
      return '★★☆☆☆';
    } else {
      return '★☆☆☆☆';
    }
  }

  getItemReviews(id){
    axios.get(`/api/reviews/${id}`)
    .then((results) => {
      this.setState({
        reviews: results.data,
        test: true
      })
      this.sortByRelevance();
      console.log(this.state.reviews)
    })
    .catch((err) => console.error(`Unsuccessful getItemReviews request: ${err}`))
  }

  reviewImgClick(id){
    axios.get(`/api/reviewImg/${id}`)
    .then((results) => {
      this.setState({
        showModal: true,
        reviewImg: results.data[0].img,
        imgCaption: results.data[0].caption,
      })
    })
    .catch((err) => console.error(`Unsuccessful reviewImg info request: ${err}`))

  }

  closeModal(){
    this.setState({
      showModal: false
    })
  }

  showMore(){
    if (this.state.itemsToShow === this.state.reviews.length){
      loadMore.style.display="none"
    } else {
      this.setState({
        itemsToShow: this.state.itemsToShow + 8
      })
    } 
  }

  render(){
    return(
      <div>
      <div id="reviewNums">
        <span id="reviews">1 – {this.state.itemsToShow} of {this.state.reviews.length} Reviews</span>
        <span id="sort">
          <img id="q" src="https://img.icons8.com/material-sharp/24/000000/help.png"></img><span>Sort by:</span>
          <div className="dropdown">
            <button className="dropbtn">Most Relevant{`  `}
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <a id="relevant">Most Relevant</a>
              <a id="helpful">Most Helpful</a>
              <a id="highest">Highest To Lowest Rating</a>
              <a id="lowest">Lowest To Highest Rating</a>
              <a id="recent">Most Recent</a>
            </div>
          </div>
        </span>
        </div> 
        <div>
          <ReviewsList itemsToShow={this.state.itemsToShow} closeModal={this.closeModal} reviewImgClick={this.reviewImgClick} reviewStars={this.reviewStars} reviews={this.state.reviews}/>
          <button onClick={() => this.showMore()} id="loadMore">Load more</button>
          <Modal isOpen={this.state.showModal} onRequestClose={this.closeModal} style={modalStyle}>
          <div id="modalContainer">
            <img id="clickedRevImg" src={this.state.reviewImg} alt="clicked_Img"/>
          </div>
          <p style={{color: "white", textAlign: "center"}}>{this.state.imgCaption}</p>
          </Modal>
        </div>
      </div>
    )
  }
}

export default Reviews;