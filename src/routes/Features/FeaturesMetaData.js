import React from "react";
import CheckBox from "../../components/CheckBox";

export const editableFeaturesColumns = (editable) => [
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
      <span
        className=""
        style={{
          display: "block",
          width: 100,
        }}
      >
        {flagName}
      </span>
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
          <CheckBox id="Asia" checked={col} editable={editable} />
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
          <CheckBox id="Korea" checked={col} editable={editable} />
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
          <CheckBox id="Japan" checked={col} editable={editable} />
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
          <CheckBox id="Japan" checked={col} editable={editable} />
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
          <CheckBox id="America" checked={col} editable={editable} />
        </span>
      );
    },
  },
];
