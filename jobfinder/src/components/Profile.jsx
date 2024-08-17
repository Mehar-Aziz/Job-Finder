import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import img from "../assets/images/author.png";
import { AuthContext } from "../context/UserContext";

const ProfilePage = () => {
  const { auth } = useContext(AuthContext);
  const userId = auth?.id;
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    role: "",
    skills: [],
    about: {
      location: "",
      work: "",
      from: "",
    },
    elsewhere: [],
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        console.log("Fetching profile for ID:", userId); 
        const res = await axios.get(`/api/profile/${userId}`);
        setProfile(res.data);
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    };

    if (userId) {
      fetchProfile();
    }
  }, [userId]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      await axios.put(`/api/profile/${userId}`, profile);
      setIsEditing(false);
    } catch (error) {
      console.error("Error saving profile:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name in profile) {
      setProfile((prevProfile) => ({
        ...prevProfile,
        [name]: value,
      }));
    } else if (name.startsWith("about.")) {
      const field = name.replace("about.", "");
      setProfile((prevProfile) => ({
        ...prevProfile,
        about: {
          ...prevProfile.about,
          [field]: value,
        },
      }));
    } else if (name.startsWith("skill-")) {
      const index = parseInt(name.replace("skill-", ""), 10);
      const updatedSkills = [...profile.skills];
      updatedSkills[index] = value;
      setProfile((prevProfile) => ({
        ...prevProfile,
        skills: updatedSkills,
      }));
    } else if (name.startsWith("elsewhere-")) {
      const index = parseInt(name.replace("elsewhere-", ""), 10);
      const updatedElsewhere = [...profile.elsewhere];
      updatedElsewhere[index] = value;
      setProfile((prevProfile) => ({
        ...prevProfile,
        elsewhere: updatedElsewhere,
      }));
    }
  };

  if (!profile) return <div>Loading...</div>;

  return (
    <main className="content-profile">
      <div className="container-fluid">
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
                    placeholder="Enter Your Name"
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
                    placeholder="Enter Your Position/Role"
                    value={profile.role}
                    onChange={handleChange}
                    className="form-control mb-2"
                  />
                ) : (
                  <div className="text-muted mb-2">{profile.role}</div>
                )}
                <div>
                  {isEditing ? (
                    <button
                      onClick={handleSave}
                      className="btn btn-primary btn-sm"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={handleEdit}
                      className="btn btn-primary btn-sm"
                    >
                      Edit
                    </button>
                  )}
                </div>
              </div>
              <hr className="my-0" />
              <div className="card-body">
                <h5 className="h6 card-title">Skills</h5>
                {isEditing
                  ? (profile.skills || []).map((skill, index) => (
                      <input
                        key={index}
                        type="text"
                        name={`skill-${index}`}
                        value={skill}
                        onChange={handleChange}
                        className="form-control mb-1"
                      />
                    ))
                  : (profile.skills || []).map((skill, index) => (
                      <a
                        key={index}
                        href="#"
                        className="badge bg-primary me-1 my-1"
                      >
                        {skill}
                      </a>
                    ))}
              </div>
              <hr className="my-0" />
              <div className="card-body">
                <h5 className="h6 card-title">About</h5>
                {isEditing ? (
                  <div>
                    <input
                      type="text"
                      name="about.location"
                      placeholder="Enter Your Location"
                      value={profile.about.location}
                      onChange={handleChange}
                      className="form-control mb-1"
                    />
                    <input
                      type="text"
                      name="about.work"
                      placeholder="Enter Your WorkPlace"
                      value={profile.about.work}
                      onChange={handleChange}
                      className="form-control mb-1"
                    />
                    <input
                      type="text"
                      name="about.from"
                      placeholder="Enter Your Address"
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
                {isEditing
                  ? (profile.elsewhere || []).map((elsewhere, index) => (
                      <input
                        key={index}
                        type="text"
                        placeholder="Insert Links"
                        name={`elsewhere-${index}`}
                        value={elsewhere}
                        onChange={handleChange}
                        className="form-control mb-1"
                      />
                    ))
                  : (profile.elsewhere || []).map((elsewhere, index) => (
                      <a
                        key={index}
                        href="#"
                        className="badge bg-secondary me-1 my-1"
                      >
                        {elsewhere}
                      </a>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
