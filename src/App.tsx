import {BrowserRouter as Router, Routes, Link, Route} from 'react-router-dom'
import './App.css'
import Home from "./components/Home.tsx";
import Customer from "./components/Customer.tsx";
import Products from "./components/Products.tsx";
import Order from "./components/Order.tsx";
function App() {


  return (
    <>


      <Router>

        <div>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <div className="navbar-brand" >
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Wattpad_logo.png/800px-Wattpad_logo.png"
                     alt="wattapad-image" className='logo'  /></div>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                      aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current='page' to={'/'}>Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active"  to={'/customer'}>Customer</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to={'/orders'}>Order Management</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to={'/products'}>Products</Link>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
        </div>

        <hr/>

        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/customer'} element={<Customer/>}/>
          <Route path={'/products'} element={<Products/>}/>
          <Route path={'/orders'} element={<Order/>}/>

        </Routes>


      </Router>


    </>
  )
}

export default App
