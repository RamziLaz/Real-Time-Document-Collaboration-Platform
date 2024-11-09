import { Navbar } from "../component/Navbar";
import "../styles/globals.css";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="p-4">{children}</main>
    </div>
  );
}
