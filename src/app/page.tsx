// import Image from 'next/image'
// import DataTable from '@/components/dataTable'
import CoinsTable from '@/components/CoinsTable';
import { GetCoinsList , GetCoinsMarket} from './coingecko_api'
import { CoinsDataType } from '@/DataTypes';
export default async function Home() {
  let CoinsList:CoinsDataType[] = []
  try{
    const data = await GetCoinsMarket();
    CoinsList = data.map((e:any) => {
      return {
        name:e.name,
        id:e.id,
        image:e.image,
        current_price:e.current_price,
        market_cap_rank:e.market_cap_rank,
        market_cap:e.market_cap,
        price_change_percentage_24h:e.price_change_percentage_24h
      }
    })
    // const data = await GetCoinsList();
    //console.log('data',data);
  }catch(err){
    console.log(err);
  }
  
  return (
    <main className="max-w-screen-2xl m-auto text-left flex flex-col items-center p-6 min-h-screen">
      <h1 className='text-3xl font-bold underline'>Cryptocurrency Prices</h1>
      <section className='p-2 w-full flex justify-center'>
        <CoinsTable coinsList={CoinsList} />
      </section>
    </main>
  )
}
