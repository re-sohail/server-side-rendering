import HomePage from "../pages/Home";

import { useLoaderData } from "react-router";

// fetch data for the home page
export async function loader({ request }) {
  // Simulate a data fetching function
  const data = await new Promise((resolve) =>
    setTimeout(() => resolve({ message: "Welcome to the Home Page!" }), 10000)
  );
  return data;
}

// Handle form submission or other actions here
export function action({ request }) {
  // Handle form submission or other actions here
  return null;
}

export function meta(args) {
  return [
    { title: "Home" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const data = useLoaderData();

  return <HomePage {...data} />;
}
