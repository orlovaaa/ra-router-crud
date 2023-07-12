import './css/main.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import EditPost from "./components/EditPost";
import Posts from "./components/Posts";
import CreateButton from "./components/CreateButton";
import EditButton from "./components/EditButton";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/posts/:id" element={<EditPost Footer={EditButton}/>}/>
                    <Route path="/posts/new" element={<EditPost Footer={CreateButton}/>}/>
                    <Route path="*" element={<Posts/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
