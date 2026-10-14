import Header from "../Components/Header"
import Product from "../Components/Product"
import Footer from "../Components/Footer"
function Home() {
  return (
    <div>
<Header title="My Shoping"/>

<Product name="Mobile" price="10000"/>
<Product name="Laptop" price="50000"/>

<Footer text="thanks for reaching us"/>
    </div>
  )
}

export default Home