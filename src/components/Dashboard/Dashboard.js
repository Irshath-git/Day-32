import React from "react";
import Card from "./Card";
import {
  faBook,
  faBookReader,
  faUserPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import Barchart from "./Barchart";
import { PieChart } from "./Piechart";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
);

function Dashboard() {
  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
      </div>
      <div class="row">
        <Card title="BORROWED" value="200" color="primary" icon={faBook} />
        <Card title="RETURNED" value="56" color="info" icon={faBookReader} />
        <Card title="VISITORS" value="35" color="warning" icon={faUsers} />
        <Card title="NEW MEMBER" value="15" color="success" icon={faUserPlus} />
      </div>
      <div className="row">
        <div className="col-xl-8 col-lg-7">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Visitor & Borrower
              </h6>
            </div>
            <div className="card-body">
              <div className="chart-bar">
                <Barchart />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-7">
          <div className="card shadow mb-4">
            <div className="card-header">
              <h6 className="m-0 font-weight-bold text-primary">
                Male & Female
              </h6>
            </div>
            <div className="card-body">
              <PieChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
