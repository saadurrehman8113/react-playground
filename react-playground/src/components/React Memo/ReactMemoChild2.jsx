import React from "react";

const ReactMemoChild2 = React.memo(() => {
  return <>{console.log("ReactMemoChild2")}</>;
});

export default ReactMemoChild2;
