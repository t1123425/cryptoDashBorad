// import Image from 'next/image'
// import DataTable from '@/components/dataTable'
import CoinsTable from '@/components/CoinsTable';
import { CoinsDataType } from 'typings';
import { GetCoinsList , GetCoinsMarket} from './coingecko_api'
export default async function Home() {
  let CoinsMarketsList:CoinsDataType[] = []
  let CoinList = [];
  // const LoadPageApi = [GetCoinsMarket()]
  // Promise.allSettled(LoadPageApi).then(values => {
  //   console.log(values);
  // }).catch(err =>{
  //   console.error(err);
  // })
  // try{
  //   const data:any = await GetCoinsMarket();
  //   CoinsMarketsList = data.map((e:any) => {
  //     return {
  //       name:e.name,
  //       id:e.id,
  //       image:e.image,
  //       current_price:e.current_price,
  //       market_cap_rank:e.market_cap_rank,
  //       market_cap:e.market_cap,
  //       price_change_percentage_24h:e.price_change_percentage_24h
  //     }
  //   })
  // }catch(err){
  //   console.log(err);
  // }
  
  return (
    <main className="max-w-screen-2xl m-auto text-left flex flex-col items-center p-6 min-h-screen">
      <h1 className='text-3xl font-bold underline'>Cryptocurrency Prices</h1>
      {/* <div className='flex w-full justify-end'>
          <span>
             Current Currency:
          </span>
          <select name="" id="" className='px-1 py-2 rounded-full'>

          </select>
      </div> */}
      <section className='p-2 w-full flex justify-center'>
        {/* @ts-expect-error Server Component */} 
        <CoinsTable />
      </section>
    </main>
  )
}
