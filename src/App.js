import './App.css';
// import ReactDOM from 'react-dom';
import Home from './components/home.jsx';
import Practice from './components/practice.jsx';
import Basic from './components/basic.jsx';
import Welcome from './components/welcome.jsx';
import Profile from './components/profile.jsx';
import Product from './components/product.jsx';
import Hooks from './components/hooks.jsx';
import ThemeContext from './components/themeContext.jsx';
import ThemeButton from './components/themedButton.jsx';
import Api from './components/api.jsx';
import Handling from './components/handling.jsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import UseRef from './components/useRef.jsx';
import ContainerComponent from './components/container-component.jsx';
import LocalState from './components/localState.jsx';
import CounterReducer from './components/reducers.jsx';
import ReducerRegistry from './components/reducerRegistry.jsx';
import Tabs from './components/tabs/tabs.jsx';
import InlineTabs from './components/tabs/inline-tabs.jsx';
import Provider from './components/redux/provider.jsx';
import MyStore from './myStore.jsx';

const pages = [
  { path: '/', label: 'Home' },
  { path: '/practice', label: 'Practice' },
  { path: '/myStore', label: 'My Store' },
  { path: '/tabs', label: 'Tabs' },
  { path: '/basic', label: 'Basic' },
  { path: '/welcome', label: 'Welcome' },
  { path: '/profile', label: 'Profile' },
  { path: '/product', label: 'Product' },
  { path: '/hooks', label: 'Hooks' },
  { path: '/useRef', label: 'UseRef' },
  { path: '/containerComponent', label: 'Container Component' },
  { path: '/localState', label: 'Local State' },
  { path: '/counterReducer', label: 'Counter Reducer' },
  { path: '/reducerRegistry', label: 'Reducer Registry' },
  { path: '/inlineTabs', label: 'Inline Tabs' },
  { path: '/redux/provider', label: 'Redux Provider' },
  { path: '/theme', label: 'Theme' },
  { path: '/handling', label: 'Handling' },
  { path: '/api', label: 'API' },
];

function App() {
  return (
  <BrowserRouter>
    <nav className="page-nav">
      {pages.map((page) => (
        <Link key={page.path} to={page.path}>
          {page.label}
        </Link>
      ))}
    </nav>
    <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/practice" element={<Practice />} />
        <Route path="/myStore" element={<MyStore />} />
        <Route path="/tabs" element={<Tabs />} />
        <Route path="/basic" element={<Basic />} />
        <Route path="/welcome" element={<Welcome name="vijaytaaa" />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product" element={<Product />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/useRef" element={<UseRef />} />
        <Route path="/containerComponent" element={<ContainerComponent />} />
        <Route path="/localState" element={<LocalState />} />
        <Route path="/counterReducer" element={<CounterReducer />} />
        <Route path="/reducerRegistry" element={<ReducerRegistry />} />
        <Route path="/inlineTabs" element={<InlineTabs />} />
        <Route path="/redux/provider" element={<Provider />} />
        <Route path="/theme" element={<ThemeContext.Provider value="light">
          <div>
            <h1>Theme Button</h1>
            <ThemeButton />
          </div>
        </ThemeContext.Provider>} />
        <Route path="/handling" element={<Handling />} />
        <Route path="/api" element={<Api />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
