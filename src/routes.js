import React from "react";

const Notes = React.lazy(() => import("./views/Notes/index"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/notes", name: "Notes", element: Notes },
];

export default routes;
