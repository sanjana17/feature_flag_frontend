import React from "react";
import Header from "../../components/Header";

export default function Home() {
  return (
    <div>
      <Header title="Home" />
      <div className="features-table">
        <h2 className="block-title">Basic Information</h2>

        <span style={{ fontSize: "18px" }}>
          <ul>
            This Project has 3 sections:
            <li>
              1. FF service : node js application which acts like a backend
              databse to store and retrive feature flags
            </li>
            <li>
              2. Backend : Java Spring boot application which is to retrieve the
              date from FF service and provide it to front end
            </li>
            <li>
              3 Front end: Lastly, react application which gives user ability to
              create, edit and view the feature flags
            </li>
          </ul>
        </span>
      </div>
    </div>
  );
}
