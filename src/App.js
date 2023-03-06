import './App.css';
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => 
<div className='page-container'>
<Header/>
  <div className='content-wrap'>
      
      <PortfolioContainer />
  </div>  
  <Footer />
</div>
export default App;
