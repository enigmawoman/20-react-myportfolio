import './App.css';
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => 
<div className='page-container'>
  <div className='content-wrap'>
      <Header/>
      <PortfolioContainer />
  </div>  
  <Footer />
</div>
export default App;
