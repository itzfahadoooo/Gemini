import { use, useContext } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from "../../context/contextProvider";
const Main = () => {
    const {
        onSent,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,}=useContext(Context);
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
          </div>
          <div className="main-container">
              <div className="greet">
                  <p><span>Hello, Dev.</span></p>
                  <p>How can i help you today?</p>
              </div>
              <div className="cards">
                  <div className="card">
                      <p>Suggest beautiful places for an upcoming trip</p>
                      <img src={assets.compass_icon} alt="" />
                  </div>
                  <div className="card">
                      <p>Briefly summarize this concept: Urban Planning</p>
                      <img src={assets.bulb_icon} alt="" />
                  </div>
                  <div className="card">
                      <p>Brainstorm team bonding activities for our work retreat</p>
                      <img src={assets.message_icon} alt="" />
                  </div>
                  <div className="card">
                      <p>Improve the readability of the following code</p>
                      <img src={assets.code_icon} alt="" />
                  </div>
              </div>
              <div className="main-bottom">
                  <div className="search-box">
                      <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Enter prompt here" />
                      <div>
                          <img src={assets.gallery_icon} alt="" />
                          <img src={assets.mic_icon} alt="" />
                          <img src={assets.send_icon} alt="" />
                      </div>
                  </div>
                  <p className="bottom-info">
                    Gemini may display inaccurate information. Please verify with appropriate sources before making any decisions.
                  </p>
              </div>
          </div>
    </div>
  );
};

export default Main;
