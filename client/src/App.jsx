import './App.css'
import { Route, Routes} from "react-router-dom";
import Landing from "./views/landing/landing";
import Home from "./views/home/home";
import Detail from "./views/detail/Detail";
import Form from "./views/form/form";


function App() {
    return (
        <div>
        <Routes>
            <Route path= "/" element = {<Landing/>}/>
            <Route path= "/home" element = {<Home/>}/>
            <Route path= "/detail/:id" element = {<Detail/>}/>
            <Route path= "/createactivity" element= {<Form/>}/>
        </Routes>
        </div>
    )
};

export default App
