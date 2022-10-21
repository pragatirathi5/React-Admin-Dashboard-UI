import "./Main.css";
import welcome from "../../assets/welcome.jpeg";
import Chart from "../charts/Chart";
import { FaRupeeSign } from 'react-icons/fa';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { FcStatistics } from 'react-icons/fc';
import { GoGraph } from 'react-icons/go';

const Main = () => {
  return (
    <main>
      <div className="main__container">

        <div className="main__title">
          <img src={welcome} alt="hello" />
          <div className="main__greeting">
            <h1>Hello ChatCube <BsFillChatDotsFill /></h1>
            <p>Welcome to the admin dashboard</p>
          </div>
        </div>
        <div className="main__cards">
          <div className="card">
            <i
              className="fa fa-user-o fa-2x text-lightblue"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Total Number of Users</p>
              <span className="font-bold text-title">20,000</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-calendar fa-2x text-red" aria-hidden="true"></i>
            <div className="card_inner">
              <p className="text-primary-p">Total Number of Visitors</p>
              <span className="font-bold text-title">70,000</span>
            </div>
          </div>

          <div className="card">
            <i
              className="fa fa-video-camera fa-2x text-yellow"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Daily Sales (<FaRupeeSign />)</p>
              <span className="font-bold text-title">80000</span>
            </div>
          </div>

          <div className="card">
            <i
              className="fa fa-thumbs-up fa-2x text-green"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Income (<FaRupeeSign />)</p>
              <span className="font-bold text-title">240000</span>
            </div>
          </div>
        </div>
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Daily Traffic <GoGraph /></h1>
                <p>North Region, India, India</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>
            <Chart />
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Website Statistics <FcStatistics /></h1>
                <p>North Region, India, India</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1>Daily Sales</h1>
                <p>24000</p>
              </div>

              <div className="card2">
                <h1>Income</h1>
                <p>72000</p>
              </div>

              <div className="card3">
                <h1>Users</h1>
                <p>6000</p>
              </div>

              <div className="card4">
                <h1>Visitors</h1>
                <p>25000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;