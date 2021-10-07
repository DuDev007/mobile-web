import Footer from "./layout/Footer";
import Header from "./layout/Header";
import home from "./screens/home";
import Menu from "./layout/Menu";
import Sidebar from "./layout/Sidebar";
import Slider from "./layout/Slider";
import product from "./screens/product";
import cart from "./screens/cart";
import search from "./screens/search";
import category from "./screens/category";
import success from "./screens/success";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter
} from "react-router-dom";




function App() {
  

  
  return (
    <div className="App">
      {/* <Router> */}
      <HashRouter>
      <Header />
      <div id="body">
        <div class="container">
          <Menu />
          <div class="row">
            <div id="main" class="col-lg-8 col-md-12 col-sm-12">
              <Slider />
              <Switch>
                <Route  path="/detail/:id" component={product}  />
                <Route  path="/cart" component={cart}  />
                <Route  path="/search" component={search}/>
                <Route  path="/success" component={success}/>
                <Route  path="/category/:id" component={category}/>
                <Route exact path="/" component={home}/>
                
              {/* <Home /> */}
    
              </Switch>
            </div>
            <Sidebar />
          </div>
        </div>
      </div>
      <Footer/>
      </HashRouter>
      {/* </Router> */}
    </div>
  );
}

export default App;
