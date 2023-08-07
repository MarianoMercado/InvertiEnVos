import Layout from "./Components/Layout/Layout";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Categorias from "./Components/Categorias/Categorias";
import Products from "./Components/Products/Products";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <Hero></Hero>
        <Categorias></Categorias>
        <Products></Products>
      </Layout>
      <Footer></Footer>
    </>
  );
}

export default App;

//52 minutos
