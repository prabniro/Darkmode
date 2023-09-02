
import './App.css';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
import About from './components/About';

function App(){
  return (
    <>
    {/* <Navbar title ="Textutils2" aboutText="About textUtils" / > */}
        <Navbar title="ManageText" />
        <div className="container">
          {/* <TextForm heading="Enter the text to analyze"></TextForm> */}
          <About/>
          </div>
      </>
  );
}

export default App;
