import './App.css'
import { Route, Routes} from "react-router-dom";
import Landing from "./views/Landing/Landing.component";
import Home from "./views/Home/Home.component";
import Detail from "./views/Detail/Detail.component";
import Form from "./views/Form/Form.component";

function App() {
    return (
        <Routes>
            <Route path= "/" element = {<Landing/>}/>
            <Route path= "/home" element = {<Home/>}/>
            <Route path= "/detail/:id" element = {<Detail/>}/>
            <Route path= "/createactivity" element= {<Form/>}/>
        </Routes>
    )
};

export default App
