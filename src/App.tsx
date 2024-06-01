import {BrowserRouter as Router, Routes, Link, Route} from 'react-router-dom'
import './App.css'
import Home from "./components/Home.tsx";
import Customer from "./components/Customer.tsx";
import Products from "./components/Products.tsx";
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
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                       aria-expanded="false">
                      Dropdown
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li>
                        <hr className="dropdown-divider"/>
                      </li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
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

        </Routes>


      </Router>


    </>
  )
}

export default App
