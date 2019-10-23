import React from 'react';
import moment from 'moment';

const ReviewsList = (props) => (
  <div>
    {props.reviews.slice(0, props.itemsToShow).map((review, i) => (
      <div key={review.id}>
        <div id="border"></div>
        <div id="reviewTop">{props.reviewStars(review.stars)}<span style={{ fontWeight: 'bold' }}>{review.username}</span><span style={{ fontSize: 14 }}> · {moment(review.date, "YYYYMMDD").fromNow()}</span></div>
        <div style={{ fontWeight: 'bold', fontSize: 20 }}>{review.title}</div>
        <br />
        <div style={{lineHeight: "30px"}}>{review.review}</div>
        <br />
        <div>{review.recommend ? <span style={{fontWeight: "bold", fontSize: "15px"}}><i className="fa fa-check-circle" aria-hidden="true"></i> Yes, I recommend this product.</span> : <span style={{fontWeight: "bold", fontSize: "15px"}}><i className="fa fa-times-circle" aria-hidden="true"></i> No, I don't recommend this product.</span>}</div>
        {review.img ? <img onClick={() => props.reviewImgClick(review.id)} className="reviewImg" src={review.img} alt="user_review_photo"/> : <p />}
      
        <div>Helpful?{' '}
          <span>
          <button onClick={() => props.incrementHelpfulReviewsCount(i, review.id)} className={props.clickedHelpfulIndex.indexOf(i) === -1 ? 'helpfulButtons' : 'clickedHelpfulButton'}>Yes · <span className={props.clickedHelpfulIndex.indexOf(i) === -1 ? 'blackHelpful' : 'greenHelpful'}>{review.helpful_yes}</span></button>
          <button onClick={() => props.incrementUNhelpfulReviewsCount(i, review.id)} className={props.clickedUNhelfulIndex.indexOf(i) === -1 ? 'helpfulButtons' : 'clickedUNHelpfulButton'}>No · <span className={props.clickedUNhelfulIndex.indexOf(i) === -1 ? 'blackHelpful' : 'redUnhelpful'}>{review.helpful_no}</span></button>
          <button onClick={() => props.clickReportAsInappropriate(i)} className={props.clickedReportIndex.indexOf(i) === -1 ? "helpfulButtons" : "reportButton"}>{props.clickedReportIndex.indexOf(i) === -1 ? "Report as inappropriate" : "Reported"}</button>
          </span> 
        </div>
      </div>
    ))}
    
  </div>
)

export default ReviewsList;