import React from "react"

const DataTable = () => {
    const thList = ['#','Coin','Price','1h','24h','7d','24h Volume','Mkt Cap','Last 7 Days']
    return (
        <table className="table-auto text-left w-full border-collapse border border-slate-500">
            <thead>
                <tr>
                    {/* <th className="border border-slate-600">#</th>
                    <th className="border border-slate-600">Artist</th>
                    <th className="border border-slate-600">Year</th> */}
                    {
                        thList.map((e,i)=> 
                          <th key={i} className="border border-slate-600">
                             {e}
                          </th>
                        )
                    }
                </tr>
            </thead>
            <tbody>
              <tr>
                {/* <td className="border border-slate-700">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td className="border border-slate-700">Malcolm Lockyer</td>
                <td className="border border-slate-700">1961</td> */}
              </tr>
            </tbody>
        </table>
    )
}

export default DataTable;