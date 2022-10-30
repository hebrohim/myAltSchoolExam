
import './App.css';
import Header from './components/Header';
import Section from './components/Button';
import SocialMedia from "./components/SocialMedia"
function App() {
  return (
    <div class="container ">
  <Header />
  <Section content = "Twitter Link" />
  <Section content = "Zuri Team"/>
  <Section content = "Zuri Books"/>
  <Section content = "Python Books"/>
  <Section content = "Background check for coders"/>
  <Section content = "Design Books"/>
 <SocialMedia />



    </div>
  );
}

export default App;
