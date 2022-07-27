import { Navbar, Transactions, Loader, Footer, Services, Welcome } from "./components";




const App = () => {

  return (
    <div className="min-h-screen">
          <div className="gradient-bg-welcome">



            <Navbar/>

            <Welcome/>


        <Services/>
        <Transactions/>
        <Footer/>

      </div>
    </div>

  )
}

export default App
