import React, { useState } from "react";
import axios from 'axios';
import img from '../assets/images/author.png';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    role: "",
    skills: [],
    about: {
      location: "",
      work: "",
      from: ""
    },
    elsewhere: []
  });



  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <main className="content-profile">
      <div className="container-fluid">
        <div className="mb-3">
        </div>
        <div className="row">
          {/* Profile Details Card */}
          <div className="col-md-4 col-xl-3">
            <div className="card mb-3">
              <div className="card-header">
                <h5 className="card-title mb-0">Profile Details</h5>
              </div>
              <div className="card-body text-center">
                <img
                  src={img}
                  alt="User Picture"
                  className="img-fluid rounded-circle mb-2"
                  width="128"
                  height="128"
                />
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                    className="form-control mb-2"
                  />
                ) : (
                  <h5 className="card-title mb-0">{profile.name}</h5>
                )}
                {isEditing ? (
                  <input
                    type="text"
                    name="role"
                    value={profile.role}
                    onChange={handleChange}
                    className="form-control mb-2"
                  />
                ) : (
                  <div className="text-muted mb-2">{profile.role}</div>
                )}
                <div>
                  {isEditing ? (
                    <button onClick={handleSave} className="btn btn-primary btn-sm">
                      Save
                    </button>
                  ) : (
                    <button onClick={handleEdit} className="btn btn-primary btn-sm">
                      Edit
                    </button>
                  )}
                </div>
              </div>
              <hr className="my-0" />
              <div className="card-body">
                <h5 className="h6 card-title">Skills</h5>
                {isEditing ? (
                  profile.skills.map((skill, index) => (
                    <input
                      key={index}
                      type="text"
                      name={`skill-${index}`}
                      value={skill}
                      onChange={handleChange}
                      className="form-control mb-1"
                    />
                  ))
                ) : (
                  profile.skills.map((skill, index) => (
                    <a key={index} href="#" className="badge bg-primary me-1 my-1">
                      {skill}
                    </a>
                  ))
                )}
              </div>
              <hr className="my-0" />
              <div className="card-body">
                <h5 className="h6 card-title">About</h5>
                {isEditing ? (
                  <div>
                    <input
                      type="text"
                      name="location"
                      value={profile.about.location}
                      onChange={handleChange}
                      className="form-control mb-1"
                    />
                    <input
                      type="text"
                      name="work"
                      value={profile.about.work}
                      onChange={handleChange}
                      className="form-control mb-1"
                    />
                    <input
                      type="text"
                      name="from"
                      value={profile.about.from}
                      onChange={handleChange}
                      className="form-control mb-1"
                    />
                  </div>
                ) : (
                  <ul className="list-unstyled mb-0">
                    <li className="mb-1">
                      <span className="feather-sm me-1"></span> Lives in{" "}
                      <a href="#">{profile.about.location}</a>
                    </li>
                    <li className="mb-1">
                      <span className="feather-sm me-1"></span> Works at{" "}
                      <a href="#">{profile.about.work}</a>
                    </li>
                    <li className="mb-1">
                      <span className="feather-sm me-1"></span> From{" "}
                      <a href="#">{profile.about.from}</a>
                    </li>
                  </ul>
                )}
              </div>
              <hr className="my-0" />
              <div className="card-body">
                <h5 className="h6 card-title">Elsewhere</h5>
                {isEditing ? (
                  profile.elsewhere.map((link, index) => (
                    <input
                      key={index}
                      type="text"
                      name={`elsewhere-${index}`}
                      value={link}
                      onChange={handleChange}
                      className="form-control mb-1"
                    />
                  ))
                ) : (
                  <ul className="list-unstyled mb-0">
                    {profile.elsewhere.map((link, index) => (
                      <li key={index} className="mb-1">
                        <a href="#">{link}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
