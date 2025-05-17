import { index, route } from "@react-router/dev/routes";

// Simplify the syntax - React Router v7 expects simple positional parameters
export default [index("routes/home.jsx"), route("about", "routes/about.jsx")];
