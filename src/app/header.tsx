import React from "react"
import Link from "next/link"
const Headers = () => {
  const dummydata:string[] = [
    'page1',
     'page2',
     'page3'
  ]
  return (
    <header className="bg-white drop-shadow-md">
        <nav className="mx-auto flex items-center justify-between p-6 lg:px-8">
            <div className="lg:flex-1">
                <Link href="/" className="-m-1.5 p-1.5">
                    <span>Crypto Trending App</span>
                </Link>
            </div>
            <ul className=" w-1/4 flex list-none">
                {
                    dummydata.map((e,i:number) => 
                    <li key={i} className="inline-block ml-2">
                        <a href="#" className="px-2 py-3 block rounded-lg  text-base font-semibold leading-7 text-gray-900 bg-gray-50 hover:bg-gray-100">{e}</a>
                    </li>)
                }
            </ul>
        </nav>
    </header>
  )
}

export default Headers;