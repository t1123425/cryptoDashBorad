import React from "react"
import { CoinsDataType } from "@/DataTypes"
import Image from "next/image"
interface tableTh {
  name:string,
  width:string,
  align?:string
}
interface Props{
  coinsList?:CoinsDataType[]
}
const CoinsTable = ({coinsList}:Props) => {
    const thList:tableTh[] = [
      {
        name:'#',
        width:'w-10'
      },
      {
        name:'Coin',
        width:'w-20',
        align:'text-left'
      },
      {
        name:'Price',
        width:'w-20'
      },
      {
        name:'24 Price Change',
        width:'w-20'
      },
      {
        name:'Mkt Cap',
        width:'w-20'
      },
    ]
    function priceFormatConvert(num:number | undefined){
      if(num){
        const price = new Intl.NumberFormat('en-US',{
          style: 'currency',
          currency: 'USD',
        }).format(num) 
        return price;  
      }else{
        return null;
      }
      
    }
    return (
        <table className="table-auto text-center w-full border-collapse border border-slate-500">
            <thead>
                <tr className="border border-slate-600 text-sm">
                   {
                     thList.map((e,i) => 
                      <th key={i} className={e.width+e.align && e.align}>
                        {
                          e.name
                        }
                      </th>
                     )
                   }
                </tr>
            </thead>
            <tbody>
              {
                 coinsList?.map((e,i)=> 
                 <tr key={i} className="trlist">
                    <td>
                      {
                        e.market_cap_rank
                      }
                    </td>
                    <td>
                       <div className="py-2 flex w-full justify-start align-middle">
                          <Image src={e.image?e.image:''} alt={e.name?e.name:'error'} width={20} height={20}/>
                          <span className="ml-2">
                            {e.name}
                          </span>
                          <span className="ml-2">
                            {e.id}
                          </span>
                       </div>
                    </td>
                    <td>
                      <span>
                          {
                            priceFormatConvert(e.current_price)
                          }
                      </span>
                    </td>
                    <td>
                       <span>
                         {
                          e.price_change_percentage_24h?.toFixed(2) + '%'
                         }
                       </span>
                    </td>
                    <td>
                       <span>
                         {
                          priceFormatConvert(e.market_cap)
                         }
                       </span>
                    </td>
                 </tr>)
              }
            </tbody>
        </table>
    )
}

export default CoinsTable;