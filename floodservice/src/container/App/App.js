import '../../App.css';
import {Footer} from "../Footer/Footer";
import {Navigation} from "../Navigation/Navigation"
import {Provider} from "react-redux";
import store from "../../Redux/store";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Navigation/>
                <Footer/>
            </div>
        </Provider>
    );
}

export default App;
