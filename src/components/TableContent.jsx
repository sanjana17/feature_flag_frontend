import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import PropTypes from "prop-types";

import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

const TableContent = ({
  content,
  columns,
  uniqueKey,
  filter,
  remote,
  wrapperClasses,
  hidden,
}) => (
  <div className="table-content">
    <BootstrapTable
      bootstrap4
      keyField={uniqueKey}
      data={content}
      columns={columns}
      hidden={hidden}
      filter={filter}
      bordered={false}
      remote={remote}
      onTableChange={() => {}}
      wrapperClasses={wrapperClasses}
    />
  </div>
);

export default TableContent;

TableContent.propTypes = {
  content: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      dataField: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  uniqueKey: PropTypes.string.isRequired,
  remote: PropTypes.bool,
  hidden: PropTypes.bool,
  wrapperClasses: PropTypes.string,
};

TableContent.defaultProps = {
  remote: false,
  hidden: false,
  wrapperClasses: "",
};
