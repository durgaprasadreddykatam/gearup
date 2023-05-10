import '@/styles/globals.css'
import Layout from '../../components/layout'
const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
const url=`https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`



export default function App({ Component, pageProps }) {

  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps} />)
    }

  return(
          <Layout>
            <script src={url}></script>
            {/* <script src="https://apis.google.com/js/api.js"></script>
            <script src="https://accounts.google.com/gsi/client" async defer></script> */}
            <Component  {...pageProps}  />
          </Layout>
        )
     
}
