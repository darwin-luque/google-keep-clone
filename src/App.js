import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Notes from './components/Notes/Notes';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Notes />
      <Footer />
    </div>
  );
}

export default App;
