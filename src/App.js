import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Switch, Route, withRouter } from "react-router-dom";
import "./App.css";
import Features from "./routes/Features/FeaturesContainer";
import EditFeature from "./routes/Features/EditFeatureContainer";
import Home from "./routes/Home/Home";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path="/features" component={Features} />
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/editFeature"
            render={(props) => <EditFeature {...props} key="create-feature" />}
          />
          <Route
            path="/editFeature/:name"
            render={(props) => <EditFeature {...props} featureExists />}
          />
        </Switch>
      </Layout>
    </div>
  );
}

export default withRouter(App);
