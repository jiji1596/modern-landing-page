import { Layout } from "./components/Layout"
import { Hero } from "./components/sections/Hero"
import { Brands } from "./components/sections/Brands";
import { Services } from "./components/sections/Services";


function App() {

  return (
  <Layout title="Edge AI">
    <Hero />
    <Brands />
    <Services />
  </Layout>
  )
}

export default App
