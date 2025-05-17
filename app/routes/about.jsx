// routes/about.jsx
import { Link } from "react-router";
import MainLayout from "../components/MainLayout";

export function meta() {
  return [
    { title: "About" },
    { name: "description", content: "About React Router!" },
  ];
}

// Capitalize component name (React convention)
export default function About() {
  return (
    <MainLayout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">About</h1>
        <p className="mb-4">
          This is the about page of our React Router v7 application.
        </p>
        <p>
          React Router v7 is a powerful routing library for React applications,
          providing declarative routing capabilities and server-side rendering
          support.
        </p>
      </div>
    </MainLayout>
  );
}
