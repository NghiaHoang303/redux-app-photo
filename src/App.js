import React, { useEffect, useState } from 'react';
import './App.css';
import { Suspense } from 'react';
import { BrowserRouter,Redirect,Switch,Route, Link } from 'react-router-dom';
import NotFound from './components/NotFound';
import Header from './components/header';
import productApi from 'api/productApi';
import SignIn from 'features/Auth/pages/SignIn';

const Photo = React.lazy(() => import('./features/Photo'))

function App() {

  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = {
          _page : 1, 
          _limit: 10
        }
        const response = await productApi.getAll(params);
        console.log(response);
      }catch (err) {
        console.error('Failed to fetch product list',err);
      }
    }

    fetchProductList();
  }, [])

  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading ... </div>}>
        <BrowserRouter>
          {/* <ul>
            <li>
              <Link to="/photos">Go to photo page</Link>
              <Link to="/photos/add">Go to Add new photo page</Link>
              <Link to="/photos/123">Go to Edit photo page</Link>

            </li>
          </ul> */}
          <Header></Header>
          <Switch>
            <Redirect exact from="/" to ="photos"/>
            <Route path="/photos" component={Photo} />
            <Route path="/sign-in" component= {SignIn}/>
            <Route component={NotFound}/>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
