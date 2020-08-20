import React, { Fragment } from "react";
import PropTypes from "prop-types";

export default function Icon({ src }) {
  return (
    <Fragment>
      <img src={src} width="100" height="100" alt="current weather" />
    </Fragment>
  );
}

Icon.propTypes = {
  src: PropTypes.string.isRequired,
};
