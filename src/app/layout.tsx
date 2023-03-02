import './globals.css'
import Headers from '@/components/headers'
export const metadata = {
  title: 'Crypto Trend',
  description: 'This is crypto Trending dashborad app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='w-full'>
        <Headers />
        {children}
      </body>
    </html>
  )
}
