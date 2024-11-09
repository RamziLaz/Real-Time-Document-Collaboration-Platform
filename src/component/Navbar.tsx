// src/components/Navbar.tsx
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-gray-100">
      <h1 className="text-xl font-bold">Bigmama Collab</h1>
      <Link href="/docs" className="text-blue-500">
        My Documents
      </Link>
    </nav>
  );
}
