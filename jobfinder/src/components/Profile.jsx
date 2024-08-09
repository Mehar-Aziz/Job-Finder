import React from "react";

const ProfilePage = () => {
  return (
    <main className="content-profile">
      <div className=" ">
        <div className="mb-3"></div>
        <div className="row">
          {/* Profile Details Card */}
          <div className="col-md-4 col-xl-3">
            <div className="card mb-3">
              <div className="card-header">
                <h5 className="card-title mb-0">Profile Details</h5>
              </div>
              <div className="card-body text-center">
                <img
                  src="img/avatars/avatar-4.jpg"
                  alt="Christina Mason"
                  className="img-fluid rounded-circle mb-2"
                  width="128"
                  height="128"
                />
                <h5 className="card-title mb-0">MEHAR AZIZ</h5>
                <div className="text-muted mb-2">MERN Stack Developer</div>
                <div>
                </div>
              </div>
              <hr className="my-0" />
              <div className="card-body">
                <h5 className="h6 card-title">Skills</h5>
                <a href="#" className="badge bg-primary me-1 my-1">
                  HTML
                </a>
                <a href="#" className="badge bg-primary me-1 my-1">
                  JavaScript
                </a>
                <a href="#" className="badge bg-primary me-1 my-1">
                  Sass
                </a>
                <a href="#" className="badge bg-primary me-1 my-1">
                  Angular
                </a>
                <a href="#" className="badge bg-primary me-1 my-1">
                  Vue
                </a>
                <a href="#" className="badge bg-primary me-1 my-1">
                  React
                </a>
                <a href="#" className="badge bg-primary me-1 my-1">
                  Redux
                </a>
                <a href="#" className="badge bg-primary me-1 my-1">
                  UI
                </a>
                <a href="#" className="badge bg-primary me-1 my-1">
                  UX
                </a>
              </div>
              <hr className="my-0" />
              <div className="card-body">
                <h5 className="h6 card-title">About</h5>
                <ul className="list-unstyled mb-0">
                  <li className="mb-1">
                    <span
                      data-feather="home"
                      className="feather-sm me-1"
                    ></span>{" "}
                    Lives in <a href="#">Lahore, Pakistan</a>
                  </li>
                  <li className="mb-1">
                    <span
                      data-feather="briefcase"
                      className="feather-sm me-1"
                    ></span>{" "}
                    Works at <a href="#">InternnCarft</a>
                  </li>
                  <li className="mb-1">
                    <span
                      data-feather="map-pin"
                      className="feather-sm me-1"
                    ></span>{" "}
                    From <a href="#">Pakistan</a>
                  </li>
                </ul>
              </div>
              <hr className="my-0" />
              <div className="card-body">
                <h5 className="h6 card-title">Elsewhere</h5>
                <ul className="list-unstyled mb-0">
                  <li className="mb-1">
                    <a href="#">GitHub</a>
                  </li>
                  <li className="mb-1">
                    <a href="#">Twitter</a>
                  </li>
                  <li className="mb-1">
                    <a href="#">Facebook</a>
                  </li>
                  <li className="mb-1">
                    <a href="#">Instagram</a>
                  </li>
                  <li className="mb-1">
                    <a href="#">LinkedIn</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
