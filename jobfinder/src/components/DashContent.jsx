import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import feather from "feather-icons";

Chart.register(...registerables);

const Content = () => {
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    feather.replace(); 
  }, []);

  const lineChartData = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Projects Completion",
        data: [
          65, 59, 80, 81, 56, 55, 40, 42, 50, 60, 70, 78, 90, 45, 67, 89, 95,
        ],
        fill: false,
        borderColor: '#1f2b7b',
      },
    ],
  };

  return (
    <main className="content">
      <div className="container-fluid p-0">
        <h1 className="h3 mb-3">
          <strong>Analytics</strong> Dashboard
        </h1>

        <div className="row">
          <div className="col-xl-6 col-xxl-5 d-flex">
            <div className="w-100">
              <div className="row">
                <div className="col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col mt-0">
                          <h5 className="card-title">Task Completed</h5>
                        </div>
                        <div className="col-auto">
                          <div className="stat text-primary">
                            <i className="align-middle" data-feather="truck"></i>
                          </div>
                        </div>
                      </div>
                      <h1 className="mt-1 mb-3">93</h1>
                      <div className="mb-0">
                        <span className="text-danger">
                          <i className="mdi mdi-arrow-bottom-right"></i> -3.65%
                        </span>
                        <span className="text-muted">Since last year</span>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col mt-0">
                          <h5 className="card-title">Visitors</h5>
                        </div>
                        <div className="col-auto">
                          <div className="stat text-primary">
                            <i className="align-middle" data-feather="users"></i>
                          </div>
                        </div>
                      </div>
                      <h1 className="mt-1 mb-3">14.212</h1>
                      <div className="mb-0">
                        <span className="text-success">
                          <i className="mdi mdi-arrow-bottom-right"></i> 5.25%
                        </span>
                        <span className="text-muted">Since last week</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col mt-0">
                          <h5 className="card-title">Earnings</h5>
                        </div>
                        <div className="col-auto">
                          <div className="stat text-primary">
                            <i
                              className="align-middle"
                              data-feather="dollar-sign"
                            ></i>
                          </div>
                        </div>
                      </div>
                      <h1 className="mt-1 mb-3">$21.300</h1>
                      <div className="mb-0">
                        <span className="text-success">
                          <i className="mdi mdi-arrow-bottom-right"></i> 6.65%
                        </span>
                        <span className="text-muted">Since last week</span>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col mt-0">
                          <h5 className="card-title">Orders</h5>
                        </div>
                        <div className="col-auto">
                          <div className="stat text-primary">
                            <i
                              className="align-middle"
                              data-feather="shopping-cart"
                            ></i>
                          </div>
                        </div>
                      </div>
                      <h1 className="mt-1 mb-3">64</h1>
                      <div className="mb-0">
                        <span className="text-danger">
                          <i className="mdi mdi-arrow-bottom-right"></i> -2.25%
                        </span>
                        <span className="text-muted">Since last week</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-xxl-7">
            <div className="card flex-fill w-100">
              <div className="card-header">
                <h5 className="card-title mb-0">Recent Movement</h5>
              </div>
              <div className="card-body py-3">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
                <div className="chart chart-sm">
                  <Line data={lineChartData} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-lg-8 col-xxl-9 d-flex">
            <div className="card flex-fill">
              <div className="card-header">
                <h5 className="card-title mb-0">Latest Projects</h5>
              </div>
              <table className="table table-hover my-0">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th className="d-none d-xl-table-cell">Start Date</th>
                    <th className="d-none d-xl-table-cell">End Date</th>
                    <th>Status</th>
                    <th className="d-none d-md-table-cell">Assignee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Project Apollo</td>
                    <td className="d-none d-xl-table-cell">01/01/2024</td>
                    <td className="d-none d-xl-table-cell">31/06/2024</td>
                    <td>
                      <span className="badge bg-success">Done</span>
                    </td>
                    <td className="d-none d-md-table-cell">Vanessa Tucker</td>
                  </tr>
                  <tr>
                    <td>Project Fireball</td>
                    <td className="d-none d-xl-table-cell">01/01/2024</td>
                    <td className="d-none d-xl-table-cell">31/06/2024</td>
                    <td>
                      <span className="badge bg-danger">Cancelled</span>
                    </td>
                    <td className="d-none d-md-table-cell">William Harris</td>
                  </tr>
                  <tr>
                    <td>Project Hades</td>
                    <td className="d-none d-xl-table-cell">01/01/2024</td>
                    <td className="d-none d-xl-table-cell">31/06/2024</td>
                    <td>
                      <span className="badge bg-success">Done</span>
                    </td>
                    <td className="d-none d-md-table-cell">Sharon Lessman</td>
                  </tr>
                  <tr>
                    <td>Project Nitro</td>
                    <td className="d-none d-xl-table-cell">01/01/2024</td>
                    <td className="d-none d-xl-table-cell">31/06/2024</td>
                    <td>
                      <span className="badge bg-warning">In progress</span>
                    </td>
                    <td className="d-none d-md-table-cell">Vanessa Tucker</td>
                  </tr>
                  <tr>
                    <td>Project Phoenix</td>
                    <td className="d-none d-xl-table-cell">01/01/2024</td>
                    <td className="d-none d-xl-table-cell">31/06/2024</td>
                    <td>
                      <span className="badge bg-success">Done</span>
                    </td>
                    <td className="d-none d-md-table-cell">William Harris</td>
                  </tr>
                  <tr>
                    <td>Project X</td>
                    <td className="d-none d-xl-table-cell">01/01/2024</td>
                    <td className="d-none d-xl-table-cell">31/06/2024</td>
                    <td>
                      <span className="badge bg-success">Done</span>
                    </td>
                    <td className="d-none d-md-table-cell">Sharon Lessman</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Content;
