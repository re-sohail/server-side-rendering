export default function HomePage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Welcome</h1>
      <p className="mb-4">
        This is a simple example of a React Router v7 app. You can start
        building your application from here.
      </p>
      <p>
        Check out the{" "}
        <a href="/about" className="text-blue-600 hover:underline">
          About page
        </a>{" "}
        to learn more.
      </p>
    </div>
  );
}
