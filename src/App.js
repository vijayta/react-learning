import './App.css';
// import ReactDOM from 'react-dom';
import Home from './components/home.jsx';
import Basic from './components/basic.jsx';
import Welcome from './components/welcome.jsx';
import Profile from './components/profile.jsx';
import Product from './components/product.jsx';
import Hooks from './components/hooks.jsx';
import ThemeContext from './components/themeContext.jsx';
import ThemeButton from './components/themedButton.jsx';
import Api from './components/api.jsx';
import Handling from './components/handling.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UseRef from './components/useRef.jsx';
import ContainerComponent from './components/container-component.jsx';
import LocalState from './components/localState.jsx';
import CounterReducer from './components/reducers.jsx';
import ReducerRegistry from './components/reducerRegistry.jsx';
import Tabs from './components/tabs/tabs.jsx';
import InlineTabs from './components/tabs/inline-tabs.jsx';

function App() {
  return (
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
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
