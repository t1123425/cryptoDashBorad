import './globals.css'
import Headers from '@/components/headers'
export const metadata = {
  title: 'CryptoDashborad',
  description: 'This is crypto dashborad app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Headers />
        {children}
      </body>
    </html>
  )
}
