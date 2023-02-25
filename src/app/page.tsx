// import Image from 'next/image'
import styles from './page.module.css'
import DataTable from '@/components/dataTable'
export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className='text-3xl font-bold underline'>Hello</h1>
      <section className='p-2 flex justify-center'>
        <DataTable />
      </section>
    </main>
  )
}
