import React from "react";
import Avatar from "./Avatar";
import Message from "./Message";
import Author from "./Author";
import Time from "./time";
import Options from "./option";
import "./index.css";

// const Tweet = ({tweetData}) => {
//   console.log(tweetData);
//   return (
//     <div className='tweet'>
//         <Avatar hash = {tweetData.gravator}/>
//         <div className='content'>
//           <Author autor = {tweetData.author}/>
//           <Time time = {tweetData.timestamp}/>
//           <Message text = {tweetData.message}/>
//           <div className='buttons'>
//             <Options />
//           </div>
//         </div>

//     </div>
//   )
// }

const Tweet = () => {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <Author />
        <Message />
        <Time />
        <Options />
      </div>
      Tweet
    </div>
  );
};

export default Tweet;
