import { Container } from "react-bootstrap"
import Menu from "./modulos/navbar"
import Footer from "./modulos/footer"

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('https://dummyjson.com/products/1')
    const repo = await res.json()
    // Pass data to the page via props
    return { props: { repo } }
  }
   
  export default function Page({ repo }) {
    return (
      <main>
        <Menu/>
        <Container>
            <p>ID: {repo.id}</p>
            <p>Title: {repo.title}</p>
            <p>Description:{repo.description}</p>
            <p>Node Id:{repo.node_id}</p>
        </Container>
        <Footer/>
      </main>
    )
  }