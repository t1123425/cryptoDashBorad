// import Image from 'next/image'
import DataTable from '@/components/dataTable'
import { GetCoinsList , GetCoinsMarket} from './coingecko_api'
export default async function Home() {
  try{
    const data = await GetCoinsMarket();
    // const data = await GetCoinsList();
    console.log('data',data);
  }catch(err){
    console.log(err);
  }
  
  return (
    <main className="flex flex-col items-center p-6 min-h-screen">
      <h1 className='text-3xl font-bold underline'>Home page</h1>
      <section className='p-2 flex justify-center'>
        <DataTable />
      </section>
    </main>
  )
}
