import styles from "./App.module.css";
import { navbar } from "./components/Navbar/navbar";

function App() {
  return (
    <div className={Styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
