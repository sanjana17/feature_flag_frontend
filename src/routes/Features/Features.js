import React, { useEffect } from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import TableContent from "../../components/TableContent";
import CheckBox from "../../components/CheckBox";

const featuresColumns = [
  {
    dataField: "flagName",
    text: "Flag",
    sort: true,
    order: "desc",
    width: "20px",
    headerStyle: (colum, colIndex) => {
      return { "white-space": "nowrap", width: "50px" };
    },
    formatter: (flagName, row) => (
      <Link to={`editFeature/${flagName}`}>
        <span
          className="feature-link"
          style={{
            display: "block",
            width: 100,
          }}
        >
          {flagName}
        </span>
      </Link>
    ),
  },
  {
    dataField: "Asia",
    text: "Asia",
    sort: true,
    width: "20px",
    headerStyle: (colum, colIndex) => {
      return { "white-space": "nowrap", width: "10px" };
    },
    formatter: (col, row) => {
      return (
        <span
          style={{
            display: "block",
            width: 100,
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          <CheckBox id="Asia" checked={col} editable={false} />
        </span>
      );
    },
  },
  {
    dataField: "Korea",
    text: "Korea",
    sort: true,
    headerStyle: (colum, colIndex) => {
      return { "white-space": "nowrap", width: "10px" };
    },
    formatter: (col, row) => {
      return (
        <span
          style={{
            display: "block",
            width: 100,
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          <CheckBox id="Korea" checked={col} editable={false} />
        </span>
      );
    },
  },
  {
    dataField: "Europe",
    text: "Europe",
    sort: true,
    headerStyle: (colum, colIndex) => {
      return { "white-space": "nowrap", width: "10px" };
    },
    formatter: (col, row) => {
      return (
        <span
          style={{
            display: "block",
            width: 100,
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          <CheckBox id="Japan" checked={col} editable={false} />
        </span>
      );
    },
  },
  {
    dataField: "Japan",
    text: "Japan",
    sort: true,
    headerStyle: (colum, colIndex) => {
      return { "white-space": "nowrap", width: "10px" };
    },
    formatter: (col, row) => {
      return (
        <span
          style={{
            display: "block",
            width: 100,
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          <CheckBox id="Japan" checked={col} editable={false} />
        </span>
      );
    },
  },
  {
    dataField: "America",
    text: "America",
    sort: true,
    width: "20px",
    headerStyle: (colum, colIndex) => {
      return { "white-space": "nowrap", width: "10px" };
    },
    formatter: (col, row) => {
      return (
        <span
          style={{
            display: "block",
            width: 100,
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          <CheckBox id="America" checked={col} editable={false} />
        </span>
      );
    },
  },
];

export default function Features(props) {
  useEffect(() => {
    props.fetchFeatures();
  }, []);
  const { features, loading } = props;
  if (!features.length && loading) {
    return <Header title="Features" />;
  }
  return (
    <div>
      <Header title="Features" />
      <div className="features-table">
        <h2 className="block-title">Feature Flags</h2>
        <span style={{ fontSize: "12px" }}>
          In this section we can view all the flags and respective countries
          they are enable for
        </span>
        <TableContent
          content={features}
          columns={featuresColumns}
          uniqueKey="flagName"
          remote
        />
      </div>
    </div>
  );
}
