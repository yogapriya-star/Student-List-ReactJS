import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

import StudentList from "./pages/StudentList"
import FavouriteList from "./pages/FavouriteList"
import ArrContextProvider from "./ArrContextProvider"

function App() {
  return (
      <div>
        <BrowserRouter>
          <nav className="bg-[#BD5A5B] p-10 text-white">
            <Link to={"/"} className="underline decoration-black mx-8">Student List</Link>
            {" "}
            <Link to={"/favourite-list"} className="underline decoration-black">Favourite List</Link>
          </nav>
          <ArrContextProvider>
            <Routes>
              <Route path="/" element={<StudentList />} />
              <Route path="/favourite-list" element={<FavouriteList />} />
            </Routes>
          </ArrContextProvider>
        </BrowserRouter>
      </div>
  );
}

export default App;
