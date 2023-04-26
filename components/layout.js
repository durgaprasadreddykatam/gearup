import Header from "./Header"
import Footer1 from "./Footer1"
export default function Layout({ children }) {

    return (
                <>
                    <Header />
                    <div>{children}</div>
            
                </>
            )
    
  }
