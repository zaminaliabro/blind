import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-100 p-4">
      <h1 className="text-xl font-bold mb-6 text-blue-500">Dashboard</h1>

      <ul className="space-y-2">
        <li>
          <Link
            href="/dashborad"
            className="block p-2 hover:bg-gray-200 rounded text-black"
          >
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            href="/orders"
            className="block p-2 hover:bg-gray-200 rounded text-black"
          >
            Orders
          </Link>
        </li>

        <li>
          <Link
            href="/product"
            className="block p-2 hover:bg-gray-200 rounded text-black"
          >
            Products
          </Link>
        </li>

        <li>
          <Link
            href="/customer"
            className="block p-2 hover:bg-gray-200 rounded text-black"
          >
            Customers
          </Link>
        </li>
      </ul>
    </div>
  );
}
