import '@/styles/globals.css'
import Layout from '../../components/layout'


export default function App({ Component, pageProps }) {

  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps} />)
    }

  return(
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )
     
}
