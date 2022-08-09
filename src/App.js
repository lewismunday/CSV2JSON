import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
      <main className="text-gray-400 bg-gray-900 body-font">
        <Navbar />
        <Main />
        <Footer />
      </main>
  );
}

export default App;
