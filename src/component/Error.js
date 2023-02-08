import React from "react";
import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  return (
    <div>
      {error.status} {error.statusText}
    </div>
  );
}

export default Error;
