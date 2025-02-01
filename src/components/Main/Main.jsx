import { assets } from "../../assets/assets";
import "./Main.css";
const Main = () => {
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
                      <input type="text" placeholder="Enter prompt here" />
                      <div>
                          <img src="" alt="" />
                      </div>
                  </div>
              </div>
          </div>
    </div>
  );
};

export default Main;
