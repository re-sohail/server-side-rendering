export function meta(args) {
  // Here we build an array of <meta> tags; array creation is O(n) in the number of tags.
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <h1>Welcome to Remix</h1>
      <p>
        This is a simple example of a Remix app. You can start building your
        application from here.
      </p>
    </div>
  );
}
