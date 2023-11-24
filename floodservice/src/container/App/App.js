import '../../App.css';
import Header from './Header/Header';
import {Footer} from "../Footer/Footer";
import {Navigation} from "../Navigation/Navigation"

function App() {
    return (
        <div className="App">
            <Header/>
            <Navigation/>
            <Footer/>
        </div>
    );
}

export default App;
