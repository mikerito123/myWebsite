import cn from 'clsx'
import s from './Layout.module.css'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { CustomContext, CustomContextProvider } from '../../../contexts/customContext'

const Loading = () => (
  <div className="w-80 h-80 flex items-center text-center justify-center p-3">
  </div>
)



interface Props {
  pageProps: {
  }
  children?: React.ReactNode
}




const Layout: React.FC<Props> = ({
  children,
}) => {
  

  return (
    <CustomContextProvider >
      <div className={cn(s.root)}>
        <main className="fit">{children}</main>
        <h1>bet?</h1>
      </div>
    </CustomContextProvider>
  )
}

export default Layout
