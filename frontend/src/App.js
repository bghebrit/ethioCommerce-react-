import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import './bootstrap.min.css'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
        <h1> Welcome to ethioCommerce </h1>
        </Container>
          
      </main>
      <Footer />
    </>
  );
}

export default App;
