import './App.css';
import Header from './components/header/header';
import Section1 from './components/sections/section1/section1';
import Section2 from './components/sections/section2/section2';
import Section3 from './components/sections/section3/section3';
import Section4 from './components/sections/section4/section4';
import Section5 from './components/sections/section5/section5';
import Footer from './components/footer/footer';

export default function App() {
  return (
    <>
      <div className="App">
      <Header/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Footer/>
      </div>
    </>
  );
}
