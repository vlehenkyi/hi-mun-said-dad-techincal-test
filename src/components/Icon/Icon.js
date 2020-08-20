import React, { Fragment } from "react";

export default function Icon({ src }) {
  return (
    <Fragment>
      <img src={src} width="100" height="100" alt="current weather" />
    </Fragment>
  );
}
