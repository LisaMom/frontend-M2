
import './App.css'
import { FooterComponent } from './components/nav-footer/FooterComponent';
import { NavbarComponet } from './components/nav-footer/NavbarComponent';
import { ProductCardComponet } from './components/products/ProductCardComponet';
import { TestComponet } from './components/TestComponent';

function App() {

  // let name = "Maria";
  // let isSingle = true;

  return (
    <>
    <NavbarComponet/>
    {/* <h1>Hello everyone welcome to our cafe shop!!</h1>
    <h2>Heading 2</h2>
    <h3>Her name is {name}</h3> */}
    {/* used ternary operator because in jsx cannot used if-else statement */}
    {/* {
      isSingle? "Yes you are !" : "No you are not !"
    } */}
    <ProductCardComponet/>
    {/* <TestComponet/> */}
    <FooterComponent/>
    </>
  )
}

export default App
