import Link from "next/link";

export default function Main() {
  return (
    <div className="flex flex-col gap-5 items-center h-screen pt-8 bg-gray-200">
      <Link href="/fontstyle" className="border rounded-md p-3 fontName show h-28 w-64 cursor-pointer hover:scale-105 transition-all shadow-md hover:shadow-black">
        <p className="fixed top-28 show1 hidden w-56 text-center shadow-md shadow-black rounded-md bg-white px-5 mt-3">View All Nextjs Google Fonts <br/> Total: 1200+ Fonts</p>
      </Link>
      <Link href="/saved" className="border rounded-md flex items-center justify-center bg-blue-500 text-white font-semibold text-3xl p-3 h-28 w-64 cursor-pointer hover:scale-105 transition-all shadow-md hover:shadow-black">
        <p>Saved Fonts</p>
      </Link>
    </div>
  );
}
