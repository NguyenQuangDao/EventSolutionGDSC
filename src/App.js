import './App.css';
import NavBar from './components/NavBar/NavBar';
// import SlideBanner from './components/SlideBanner/SlideBanner';
import PostHeader from './components/PostHeader/PostHeader';
import Posts from './components/Posts/Posts';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <SlideBanner/> */}
      <h1>làm thêm cái banner ở  đây</h1>
      <PostHeader />
      <Posts />
      <Footer />
    </div>
  );
}

export default App;
