import React from "react";
import { useSelector } from "react-redux";
import { BiAdjust,BiSignal2,BiSignal3,BiSignal4,BiCircle,BiLoaderCircle} from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs"; //BsReception4
import {FcBadDecision,FcHighPriority} from "react-icons/fc"; //BsReception4
import "../styles/Dashboard.css";
import Card from "./Card";

const Dashboard = () => {
  const { dataSelected, user,prior } = useSelector((state) => state.dataSelectSlice);
  

  return (
    dataSelected && (
      <div className="container" style={{ justifyContent: "space-evenly" }}>
        {dataSelected.map((element, index) => {
          return (
            <>
              <div
                key={index}
                className="dashboard"
                style={{ backgroundColor: "whitesmoke" }}
              >
                <div className="cardHeading1">
                  <div
                    className="sideView1"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    {!user ?!prior?(element[index].title==='In progress'?<BiAdjust color="orange"/>:element[index].title==='Todo'?<BiCircle/>:<BiLoaderCircle/>):(element[index]?.title==='Low'?
                      <BiSignal2/>:element[index]?.title==='Medium'?
                      <BiSignal3/>:element[index]?.title==='No priority'?
                      <FcBadDecision/>:element[index]?.title==='Urgent'?<FcHighPriority/>:<BiSignal4/>
                    ) : (
                      <>
                        <div className="image">
                          <img
                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww"
                            alt="QuickSell"
                          />
                        </div>
                      </>
                    )}
                    <span>
                      <span>{element[index]?.title}</span><span className="len">{element[index]?.value?.length}</span>
                    </span>
                  </div>
                  <div className="sideView2">
                    <BsPlusLg color="grey" style={{position:'relative',top:'7px',right:'8px'}}/>
                    <span style={{color:'grey' }}>...</span>
                  </div>
                </div>
                <div className="selectList">
                  {element[index]?.value?.map((elem, ind) => {
                    return (
                      <Card
                        priortitle={elem.priority}
                        state={elem.status}
                        user={user}
                        prior={prior}
                        id={elem.id}
                        title={elem.title}
                        tags={elem.tag}
                      />
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    )
  );
};

export default Dashboard;
