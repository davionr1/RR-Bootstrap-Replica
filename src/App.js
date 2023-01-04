import './App.css';
import TopBar from './components/TopBar';
import BackgroundImg from './components/BackgroundImg';
import StoreListings from './components/StoreListing';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <BackgroundImg/>
      <StoreListings/>
    </div>
  );
}

export default App;
