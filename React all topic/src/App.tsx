// import Navbar from "./01-component/navebar";
// import Hero from "./01-component/hero";
// import Footer from "./01-component/footer";

// function App(){
//   return(
//     <div>
//       <Navbar/>
//       <Hero/>
//       <Footer/>

//     </div>
//   );
// }

// export default App;

// import ProductList from "./components/ProductList";

// function App() {
//   return (
//     <div>
//       <ProductList />
//     </div>
//   );
// }

// export default App;

// import ClickEvent from "./03-events/Clickevent";

// function App() {
//     return (
//         <div>
//             <ClickEvent />
//         </div>
//     );
// }

// export default App;

// import Form from "./07-Form/form";

// function App() {
//   return (
//     <div>
//       <h1>My React App</h1>
//       <Form />
//     </div>
//   );
// }

// export default App;


// import Http from "./08-http/Http";

// function App() {
//   return (
//     <div>
//       <h1>React HTTP Practice</h1>
//       <Http />
//     </div>
//   );
// }

// export default App;

// import Child from "./09-input-output/InputChild";

// function App(){
//   return(
//     <div>
//       <Child name="Krish" age={21}/>
//     </div>
//   );
// }

// export default App;

//output-Callback  : A callback function allows a child component to send data to its parent component.
import Child from "./09-input-output/outputChild";
import { useState } from "react";

function App(){
  const[message,setMessage]=useState<string>("");

  function receiveData(data:string):void{
    setMessage(data);
  }



  return(
    <div>
      <Child sendData={receiveData}/>
      <h2>Message:{message}</h2>
    </div>
  )
}

export default App;