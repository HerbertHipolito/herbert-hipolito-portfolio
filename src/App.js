import './App.css';
import Header from './components/header/header';
import Section1 from './components/sections/section1/section1';
import Section2 from './components/sections/section2/section2';
import Section3 from './components/sections/section3/section3';
import Section4 from './components/sections/section4/section4';
import Footer from './components/footer/footer';


function App() {
  return (
    <>
      
      <div className="App">
      <Header/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Footer/>
      </div>
    </>
  );
}

export default App;
//https://html-color-codes.info/colors-from-image/
//https://kevintavares.com.br/#knowledge

/*
to-do list:

How to make the download buttons work (file is not possible to download)?
Make the buttons in the header work.
Fix the 'text' tag in the section 3.

*/