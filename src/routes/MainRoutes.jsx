import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../Pages/Home"
import NavBarComponent from "../components/NavBarComponent/NavBarComponent"
import Category from "../Pages/Category"
import Item from "../Pages/Item"



const MainRoutes = () => {
    return (

        
        <BrowserRouter>
        <NavBarComponent/>

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Category/:CategoryId" element={<Category/>}/>
            <Route path="/item/:Id" element={<Item/>}/>
        </Routes>
        
        </BrowserRouter>


    )
}

export default MainRoutes