import React from "react";

class ModalBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rate:"Click to rate",
      reviewFocused:false,
      invalidReviewInfo:"Required",
      invalidReviewWidth:"90px",

      titleBuffer:"",
      reviewBuffer:"",
      nicknameBuffer:"",
      emailBuffer:"",

      rating:"0",//
      title:"0",//
      review:"0",//50
      recommend:"0",

      nickname:"0",//4
      location:"0",
      email:"0",//
      fit:"0",
      read:"0",
      where:"0",
      feedback:"0",
      term:"0"//
    };
  }
  closeModal(e){
    e.preventDefault();
    document.getElementById("FOREST-curtain").style.display = "none";
    document.getElementById("FOREST-modal").style.display = "none";
  }
  //////////
  //rating//
  //////////
  coloringRating(i){
    if(i==="0")this.setState({rate:"Click to rate"});
    if(i==="1"){var str="red";this.setState({rate:"Poor"});}
    if(i==="2"){var str="orange";this.setState({rate:"Fair"});}
    if(i==="3"){var str="yellow";this.setState({rate:"Average"});}
    if(i==="4"){var str="lawngreen";this.setState({rate:"Good"});}
    if(i==="5"){var str="green";this.setState({rate:"Excellent"});}
    for(var a=1;a<=5;a++)
      document.getElementById("FOREST-star"+a).style.backgroundColor = a<=i?str:"#eee";
  }
  clickRating(e){this.setState({rating:e.currentTarget.getAttribute("value")});}
  hoverRating(e){this.coloringRating(e.currentTarget.getAttribute("value"));}
  leaveRating(){this.coloringRating(this.state.rating);}
  /////////
  //title//
  /////////
  blurTitle(){if(this.state.titleBuffer.length===0)this.setState({title:"-1"});}
  updateTitle(e){
    if(e.target.value.length>0)this.setState({title:"1"});
    this.setState({titleBuffer:e.target.value});
  }
  //////////
  //review//
  //////////
  hoverReview(){if(this.state.review!=="-1")this.blackReview();}
  focusReview(){
    if(this.state.review!=="-1")this.blackReview();
    this.setState({reviewFocused:true});
  }
  leaveReview(){if(!this.state.reviewFocused && this.state.review!=="-1")this.recoverReview();}
  updateReview(e){
    if(e.target.value.length>49){
      this.setState({review:"1"});
      this.blackReview();
    }else if(this.state.review!=="-1")this.setState({review:"0"});
    this.setState({
      invalidReviewInfo:`${50-e.target.value.length} characters too short`,
      invalidReviewWidth:"200px",
      reviewBuffer:e.target.value
    });
    if(e.target.value.length===0)this.setState({
      invalidReviewInfo:"Required",
      invalidReviewWidth:"90px"
    });
  }
  blurReview(){
    if(this.state.review==="1")this.recoverReview();
    if(this.state.review==="0"){
      this.setState({review:"-1"});
      this.redReview();
    }
    this.setState({reviewFocused:false});
  }
  blackReview(){document.getElementById("FOREST-reviewcontainer").style.borderColor="black";}
  redReview(){document.getElementById("FOREST-reviewcontainer").style.borderColor="crimson";}
  recoverReview(){
    document.getElementById("FOREST-reviewcontainer").style.borderColor="#ccc";
    document.getElementById("FOREST-reviewcontainer").style.borderTopColor="#aaa";
  }
  /////////////
  //recommend//
  /////////////
  hdlRecommend(e){
    e.currentTarget.style.backgroundColor="#777";
    e.currentTarget.style.color="white";
    var i=e.currentTarget.getAttribute("value");
    this.setState({recommend:i});
    if(i==="1")i="FOREST-recno";
    else i="FOREST-recyes";
    document.getElementById(i).style.borderColor="#ccc";
    document.getElementById(i).style.borderBottomColor="#999";
    document.getElementById(i).style.backgroundColor="#eee";
    document.getElementById(i).style.color="#777";
  }
  hoverRecommend(e){
    if(e.currentTarget.getAttribute("value")!==this.state.recommend){
      e.currentTarget.style.borderColor="#999";
      e.currentTarget.style.backgroundColor="#ddd";
    }
  }
  leaveRecommend(e){
    if(e.currentTarget.getAttribute("value")!==this.state.recommend){
      e.currentTarget.style.borderColor="#ccc";
      e.currentTarget.style.borderBottomColor="#999";
      e.currentTarget.style.backgroundColor="#eee";
      e.currentTarget.style.color="#777";
    }
  }
  ////////////
  //nickname//
  ////////////
  blurNickname(){if(this.state.nicknameBuffer.length===0)this.setState({nickname:"-1"});}
  updateNickname(e){
    if(e.target.value.length>0)this.setState({nickname:"1"});
    this.setState({nicknameBuffer:e.target.value});
  }
  /////////
  //email//
  /////////
  blurEmail(){if(this.state.emailBuffer.length===0)this.setState({email:"-1"});}
  updateEmail(e){
    if(e.target.value.length>0)this.setState({email:"1"});
    this.setState({emailBuffer:e.target.value});
  }
  ///////
  //fit//
  ///////
  hdlFit(e){
    var i=e.currentTarget.getAttribute("id").slice(-1);
    for(var j=1;j<6;j++)
      if(j!==i)
        document.getElementById("FOREST-fit"+j).style.backgroundColor="#eee";
    e.currentTarget.style.backgroundColor="#ddd";
    this.setState({fit:i});
  }
  hoverFit(e){e.currentTarget.style.backgroundColor="#ddd";}
  leaveFit(e){
    if(this.state.fit!==e.currentTarget.getAttribute("id").slice(-1))
      e.currentTarget.style.backgroundColor="#eee";
  }

  hdlLocation(){this.setState({location:"1"});}
  hdlWhere(){this.setState({where:"1"});}
  hdlRead(){this.setState({read:"1"});}
  hdlFeedback(){this.setState({feedback:"1"});}
  hdlTerm(){
    if(this.state.term==="1")this.setState({term:"-1"});
    else this.setState({term:"1"});
  }

  onPost(){
    var obj={};
    if(this.state.rating==="0")obj.rating="-1";
    if(this.state.title==="0")obj.title="-1";
    if(this.state.review==="0")obj.review="-1";
    if(this.state.nickname==="0")obj.nickname="-1";
    if(this.state.email==="0")obj.email="-1";
    if(this.state.term==="0")obj.term="-1";

    if(this.state.recommend==="0")obj.recommend="1";
    if(this.state.location==="0")obj.location="1";
    if(this.state.fit==="0")obj.fit="-2";
    if(this.state.read==="0")obj.read="1";
    if(this.state.where==="0")obj.where="1";
    if(this.state.feedback==="0")obj.feedback="1";
    this.setState(obj);
  }
  render(){
    return(
      <div id="FOREST-massage">

        <div id="FOREST-header" className="FOREST-container">
          <h3 className="FORESTGLOBAL-h3">{"My Review for "+this.props.item}</h3>
          <p className="FORESTGLOBAL-p FOREST-explaination">Required fields are marked with *</p>

          <div className="FOREST-closecontainer">
            <img className="FOREST-close" onClick={this.closeModal.bind(this)} src={require("../../db/times.svg")}/>
          </div>
        </div>

        <div id="FOREST-rating" className="FOREST-container">
          <h3 className="FORESTGLOBAL-h3" style={{color:this.state.rating==="-1"?"crimson":"black"}}>Product rating*</h3>
          <div id="FOREST-starcontainer">
            <div id="FOREST-stars">
              {([1,2,3,4,5]).map((i)=>(
              <div id={"FOREST-star"+i} className="FOREST-stars" value={i}
                onMouseOver={this.hoverRating.bind(this)}
                onClick={this.clickRating.bind(this)}
                onMouseLeave={this.leaveRating.bind(this)}>
                <img className="FOREST-greystar" src={require("../../db/star-grey.svg")}/>
                <img className="FOREST-whitestar" src={require("../../db/star-white.svg")}/>
              </div>
              ))}
            </div>
            <p className="FORESTGLOBAL-p">{this.state.rate}</p>
          </div>
          {this.state.rating==="0"?<div/>
          :this.state.rating==="-1"
          ?<div className="FOREST-invalidcontainer">
            <div className="FOREST-invalidwrap">
              <span className="FOREST-invalidtext">Required&nbsp;</span>
              <img className="FOREST-invalidimg" src={require("../../db/times.svg")}/>
            </div>
          </div>
          :<div className="FOREST-validcontainer">
            <div className="FOREST-validwrap">
              <img className="FOREST-validimg" src={require("../../db/tick.svg")}/>
            </div>
          </div>}
        </div>

        <div className="FOREST-container">
          <div className="FOREST-inlinewrap">
            <h3 className="FORESTGLOBAL-h3 FOREST-shorttitle" style={{color:this.state.title==="-1"?"crimson":"black"}}>Review title*</h3>
            {this.state.title==="0"?<div/>
            :this.state.title==="-1"
            ?<div className="FOREST-invalidcontainer FOREST-inlineic">
              <div className="FOREST-invalidwrap">
                <span className="FOREST-invalidtext">Required&nbsp;</span>
                <img className="FOREST-invalidimg" src={require("../../db/times.svg")}/>
              </div>
            </div>
            :<div className="FOREST-validcontainer FOREST-inlinevc">
              <div className="FOREST-validwrap">
                <img className="FOREST-validimg" src={require("../../db/tick.svg")}/>
              </div>
            </div>}
          </div>
          <input className="FORESTGLOBAL-input" placeholder="Example: Makes hiking even easier" value={this.state.titleBuffer}
            onBlur={this.blurTitle.bind(this)}
            onChange={this.updateTitle.bind(this)}/>
        </div>

        <div className="FOREST-container">
          <div className="FOREST-inlinewrap">
            <h3 className="FORESTGLOBAL-h3 FOREST-shorttitle" style={{color:this.state.review==="-1"?"crimson":"black"}}>Review*</h3>
            {this.state.review==="0"?<div/>
            :this.state.review==="-1"
            ?<div className="FOREST-invalidcontainer FOREST-inlineic">
              <div className="FOREST-invalidwrap" style={{width:this.state.invalidReviewWidth}}>
                <span className="FOREST-invalidtext">{this.state.invalidReviewInfo}&nbsp;</span>
                <img className="FOREST-invalidimg" src={require("../../db/times.svg")}/>
              </div>
            </div>
            :<div className="FOREST-validcontainer FOREST-inlinevc">
              <div className="FOREST-validwrap">
                <img className="FOREST-validimg" src={require("../../db/tick.svg")}/>
              </div>
            </div>}
          </div>
          <div id="FOREST-reviewcontainer"
            onMouseOver={this.hoverReview.bind(this)}
            onMouseLeave={this.leaveReview.bind(this)}>
            <textarea rows="4" id="FOREST-reviewarea" className="FORESTGLOBAL-textarea"
              onFocus={this.focusReview.bind(this)}
              onBlur={this.blurReview.bind(this)}
              onChange={this.updateReview.bind(this)}/>
            <div id="FOREST-addp">Add photo</div>
            <div id="FOREST-addv">Add video</div>
          </div>
        </div>

        <div id="FOREST-recommend" className="FOREST-container">
          <div className="FOREST-left">
            <h3 className="FORESTGLOBAL-h3" style={{color:this.state.recommend==="-1"?"crimson":"black"}}>Would you recommend this product to a friend?</h3>
          </div>
          <div className="FOREST-right">
            <button id="FOREST-recyes" className="FORESTGLOBAL-button" value="1"
              onClick={this.hdlRecommend.bind(this)}
              onMouseOver={this.hoverRecommend.bind(this)}
              onMouseLeave={this.leaveRecommend.bind(this)}>Yes</button>
            <button id="FOREST-recno" className="FORESTGLOBAL-button" value="2"
              onClick={this.hdlRecommend.bind(this)}
              onMouseOver={this.hoverRecommend.bind(this)}
              onMouseLeave={this.leaveRecommend.bind(this)}>No</button>
          </div>
          {this.state.recommend==="0"?<div/>:
          <div className="FOREST-validcontainer">
            <div className="FOREST-validwrap">
              <img className="FOREST-validimg" src={require("../../db/tick.svg")}/>
            </div>
          </div>}
        </div>

        <div className="FOREST-container">
          <div className="FOREST-left">
            <div className="FOREST-inlinewrap">
              <h3 className="FORESTGLOBAL-h3 FOREST-shorttitle" style={{color:this.state.nickname==="-1"?"crimson":"black"}}>Nickname*</h3>
              {this.state.nickname==="0"?<div/>
              :this.state.nickname==="-1"
              ?<div className="FOREST-invalidcontainer FOREST-inlineic">
                <div className="FOREST-invalidwrap">
                  <span className="FOREST-invalidtext">Required&nbsp;</span>
                  <img className="FOREST-invalidimg" src={require("../../db/times.svg")}/>
                </div>
              </div>
              :<div className="FOREST-validcontainer FOREST-inlinevc">
                <div className="FOREST-validwrap">
                  <img className="FOREST-validimg" src={require("../../db/tick.svg")}/>
                </div>
              </div>}
            </div>
            <input className="FORESTGLOBAL-input" placeholder="Example: jackie27" value={this.state.nicknameBuffer}
              onBlur={this.blurNickname.bind(this)}
              onChange={this.updateNickname.bind(this)}/>
          </div>
          <div className="FOREST-right">
            <div className="FOREST-inlinewrap">
              <h3 className="FORESTGLOBAL-h3 FOREST-shorttitle">Location</h3>
              {this.state.location==="0"?<div/>:
              <div className="FOREST-validcontainer FOREST-inlinevc">
                <div className="FOREST-validwrap">
                  <img className="FOREST-validimg" src={require("../../db/tick.svg")}/>
                </div>
              </div>}
            </div>
            <input className="FORESTGLOBAL-input" placeholder="Example: Seattle, WA" onBlur={this.hdlLocation.bind(this)}/>
          </div>
        </div>

        <div id="FOREST-email" className="FOREST-container">
          <div className="FOREST-left">
            <h3 className="FORESTGLOBAL-h3 FOREST-shorttitle" style={{color:this.state.email==="-1"?"crimson":"black"}}>Email*</h3>
            <input className="FORESTGLOBAL-input" placeholder="Example: youremail@example.com" value={this.state.emailBuffer}
              onBlur={this.blurEmail.bind(this)}
              onChange={this.updateEmail.bind(this)}/>
           </div>
          {this.state.email==="0"?<div/>
          :this.state.email==="-1"
          ?<div id="FOREST-emailvalidcontainer" className="FOREST-invalidcontainer">
            <div className="FOREST-invalidwrap">
              <span className="FOREST-invalidtext">Required&nbsp;</span>
              <img className="FOREST-invalidimg" src={require("../../db/times.svg")}/>
            </div>
          </div>
          :<div className="FOREST-validcontainer">
            <div className="FOREST-validwrap">
              <img className="FOREST-validimg" src={require("../../db/tick.svg")}/>
            </div>
          </div>}
        </div>

        {this.props.fit?
        <div id="FOREST-fit" className="FOREST-container">
          <div className="FOREST-left">
            <h3 className="FORESTGLOBAL-h3">Fit</h3>
          </div>
          <div className="FOREST-right">
            {[1,2,3,4,5].map((i)=>(
            <div id={"FOREST-fit"+i} className="FOREST-inputcontainer"
              onClick={this.hdlFit.bind(this)}
              onMouseOver={this.hoverFit.bind(this)}
              onMouseLeave={this.leaveFit.bind(this)}>
              <div className="FOREST-radio" style={{backgroundColor:this.state.fit===i.toString()?"blue":"white"}}/>
            </div>))}
            <p className="FORESTGLOBAL-p">Runs Small</p>
            <p id="FOREST-runlarge" className="FORESTGLOBAL-p">Runs Large</p>
          </div>
          {this.state.fit==="0"?<div/>:
          <div className="FOREST-validcontainer">
            <div className="FOREST-validwrap">
              <img className="FOREST-validimg" src={require("../../db/tick.svg")}/>
            </div>
          </div>}
        </div>
        :<div className="FOREST-box"/>}

        <div id="FOREST-read" className="FOREST-container">
          <div className="FOREST-left">
            <h3 className="FORESTGLOBAL-h3">Did you read product reviews online before first purchasing this item?</h3>
          </div>
          <div className="FOREST-right">
            <select className="FORESTGLOBAL-select" onChange={this.hdlRead.bind(this)}>
              <option>Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          {this.state.read==="0"?<div/>:
          <div className="FOREST-validcontainer">
            <div className="FOREST-validwrap">
              <img className="FOREST-validimg" src={require("../../db/tick.svg")}/>
            </div>
          </div>}
        </div>

        <div id="FOREST-where" className="FOREST-container">
          <div className="FOREST-left">
            <h3 className="FORESTGLOBAL-h3">Where did you purchase the product?</h3>
          </div>
          <div className="FOREST-right">
            <select className="FORESTGLOBAL-select" onChange={this.hdlWhere.bind(this)}>
              <option>Select</option>
              <option>Online</option>
              <option>In-Store</option>
            </select>
          </div>
          {this.state.where==="0"?<div/>:
          <div className="FOREST-validcontainer">
            <div className="FOREST-validwrap">
              <img className="FOREST-validimg" src={require("../../db/tick.svg")}/>
            </div>
          </div>}
        </div>

        <div className="FOREST-container">
          <div className="FOREST-inlinewrap">
            <h3 className="FORESTGLOBAL-h3">What feedback do you have for the people who designed and manufactured this product?</h3>
            {this.state.feedback==="0"?<div/>:
            <div className="FOREST-validcontainer FOREST-inlinevc">
              <div className="FOREST-validwrap">
                 <img className="FOREST-validimg" style={{marginTop: "15px"}} src={require("../../db/tick.svg")}/>
              </div>
            </div>}
          </div>
          <textarea className="FORESTGLOBAL-textarea" rows="4" onBlur={this.hdlFeedback.bind(this)}/>
        </div>

        <div id="FOREST-post" className="FOREST-container">
          <div className="FOREST-inlinewrap">
            <div className="FOREST-termcontainer">
              <input className="FORESTGLOBAL-input FOREST-termcontent" type="checkbox"
                onClick={this.hdlTerm.bind(this)}/>
              </div>
            <div className="FOREST-termcontainer"><label className="FOREST-termcontent">I agree to the</label></div>
            <div className="FOREST-termcontainer"><a  className="FOREST-termcontent" href="#">{"terms & conditions"}</a></div>
            {this.state.term==="0"?<div/>
            :this.state.term==="-1"
            ?<div className="FOREST-invalidcontainer FOREST-inlineic">
              <div className="FOREST-invalidwrap">
                <span className="FOREST-invalidtext">Required&nbsp;</span>
                <img className="FOREST-invalidimg" src={require("../../db/times.svg")}/>
              </div>
            </div>
            :<div className="FOREST-validcontainer FOREST-inlinevc">
              <div className="FOREST-validwrap">
                <img className="FOREST-validimg" src={require("../../db/tick.svg")}/>
              </div>
            </div>}
          </div>          
          <p className="FORESTGLOBAL-p FOREST-explaination">You may receive emails regarding this submission. Any emails will include the ability to opt out of future communications.</p>
          <button id="FOREST-postreview" className="FORESTGLOBAL-button" onClick={this.onPost.bind(this)}>Post review</button>
        </div>
      </div>
    );
  }
}

export default ModalBox;