import AboutPage from "../pages/About";

export function meta() {
  return [
    { title: "About" },
    { name: "description", content: "About React Router!" },
  ];
}

export default function About() {
  return <AboutPage />;
}
