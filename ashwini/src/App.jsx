import Header from "./components/Header";
import Hero from "./components/Hero";
import JobListing from "./components/JobListing";
import Footer from "./components/Footer";
import Sustainability from "./components/Sustainability";
import NewsAndMedia from "./components/NewsAndMedia";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <JobListing />
      <Sustainability />
      <NewsAndMedia/>
      <Footer />
    </div>
  );
}

export default App;
