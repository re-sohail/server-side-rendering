import React from "react";

function about() {
  return <div>about</div>;
}

export default about;

export function meta() {
  return [
    { title: "About Us" },
    { name: "description", content: "Learn more about us!" },
  ];
}
