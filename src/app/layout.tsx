import { Nunito_Sans } from 'next/font/google'
import './globals.css'
import Layout from '@/components/Layout'

const nunitosans = Nunito_Sans({ subsets: ['latin'] })


//This is the new way to handle all the seo things like: title, description, keywords, meta tags...
export function generateMetadata(){
  return {
    title: "Greatest Recruitment Database",
    description: "This platform give you information about people searching jobs."
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunitosans.className}>
        <Layout>
        {children}
        </Layout>
      </body>
    </html>
  )
}
