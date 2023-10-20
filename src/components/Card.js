import React from "react";
import { BiAdjust,BiSignal2,BiSignal3,BiSignal4,BiCircle,BiSolidCircle,BiLoaderCircle} from "react-icons/bi";
import {FcHighPriority} from "react-icons/fc"; //BsReception4
import "../styles/Card.css";

const Card = ({user, state, prior, id, priortitle, title, tags, status }) => {
  return (
    <div className="container">
      <div className="cardHeading2" style={{ justifyContent: "space-between" }}>
        <span style={{ textTransform: "uppercase", color: "darkgrey" }}>
          {id}
        </span>

        {!user && <div className="image">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww"
            alt="QuickSell"
          />

          <div className="status"></div>
        </div>}
      </div>

      <div className="title">
      {(user || prior) && <div className="im">{(state==='In progress'?<BiAdjust fontSize="18px" color="orange"/>:state==='Todo'?<BiCircle fontSize="18px"/>:<BiLoaderCircle fontSize="18px"/>)}</div>}
        <p className="im">{title.length<62?title:title.slice(0,62)+"..."}</p>
      </div>

      <div className="tags">
        {!prior && <div className="tag">
        {priortitle===1?<BiSignal2/>:priortitle===2?<BiSignal3/>:priortitle===4?<FcHighPriority/>:priortitle===0?<p>...</p>:<BiSignal4/>}
                    
        </div>}
        {tags?.map((element, index) => {
          return (
            <div key={index} className="tag">
              <span><BiSolidCircle fontSize="13px" color="grey"/></span> <div className="tagtext">{element}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
