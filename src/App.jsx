import React from 'react';
import { Home, Cart } from './pages/';
import { Header } from './components/';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <Header />

      <main className="content">
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </main>
    </div>
  );
}
export default App;
