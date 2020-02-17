import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import MainPage from './components/MainPage';
import AboutUs from './components/AboutUs';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import configureStore from './store/configureStore';
import './styles/styles.scss';

const store = configureStore();

const App = () => (
  <section className="main">
    <BrowserRouter>
      <div className="main_2">
        <div className="navPanel">
          <h1>Card Check</h1>
          <nav className="navigation">
            <ul>
              <li>
                <Link to="/">Check Picture</Link>
              </li>
              <li />
              <li>
                <Link to="/about_us">About Us</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Route path="/" render={(props) => <MainPage {...props} />} exact={true} />
        <Route path="/about_us" render={(props) => <AboutUs {...props} />} />
        <Contacts />
        <Footer />
      </div>
    </BrowserRouter>
  </section>
);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('app'));
