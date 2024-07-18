import Link from "next/link"

const TopHeader = () => {
  return (
    <div className="bg-sky-600 flex-center px-32 py-4">
      <Link href={"/"} className="text-4xl text-white font-mono ">Betting App</Link>
    </div>
  )
}

export default TopHeader
