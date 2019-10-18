import React from 'react';

const ReviewsList = (props) => (
  <div>
    {props.reviews.map((review, i) => (
      <div key={review.id}>
        <div id="border"></div>
        <div id="reviewTop"><span id="userStars">{props.reviewStars(review.stars)}</span><span style={{ fontWeight: 'bold' }}>{review.username}</span><span style={{ fontSize: 14 }}> · {review.date}</span></div>
        <div style={{ fontWeight: 'bold', fontSize: 20 }}>{review.title}</div>
        <br />
        <div>{review.review}</div>
        <br />
        <div>{review.recommend ? <span><i className="fa fa-check-circle" aria-hidden="true"></i> Yes, I recommend this product.</span> : <span><i className="fa fa-times-circle" aria-hidden="true"></i> No, I don't recommend this product.</span>}</div>
        {review.img ? <img onClick={() => props.reviewImgClick(review.id)} className="reviewImg" src={review.img} alt="user_review_photo"/> : <p />}
        
        <div>Helpful?{' '}
          <span>
          <button className="helpfulButtons">Yes · {review.helpful_yes}</button>
          <button className="helpfulButtons">No · {review.helpful_no}</button>
          <button className="helpfulButtons">Report as inappropriate</button>
          </span> 
        </div>
      </div>
    ))}
    
  </div>
)

export default ReviewsList;