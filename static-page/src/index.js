import { createRoot } from 'react-dom/client';
import '../src/index.css';
import Header from './Header.js';
import MainContent from './MainContent';
import Footer from './Footer';

function App() {
    return (
        <div className="main-div">
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

//ReactDOM.render(page, document.getElementById("root"))
const root = createRoot(document.getElementById("root"))
root.render(<App />)