import { Link } from "react-router";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen">
      <header className="bg-slate-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">My App</h1>
          <nav>
            <ul className="flex gap-4">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="container mx-auto p-4">{children}</main>
      <footer className="bg-slate-800 text-white p-4 mt-auto">
        <div className="container mx-auto text-center">
          &copy; {new Date().getFullYear()} My App
        </div>
      </footer>
    </div>
  );
}
