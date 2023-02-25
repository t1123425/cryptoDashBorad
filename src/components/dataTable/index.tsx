import React from "react"

const DataTable = () => {
    return (
        <table className="table-auto text-left w-full border-collapse border border-slate-500">
            <thead>
                <tr>
                    <th className="border border-slate-600">Song</th>
                    <th className="border border-slate-600">Artist</th>
                    <th className="border border-slate-600">Year</th>
                </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-700">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td className="border border-slate-700">Malcolm Lockyer</td>
                <td className="border border-slate-700">1961</td>
              </tr>
            </tbody>
        </table>
    )
}

export default DataTable;