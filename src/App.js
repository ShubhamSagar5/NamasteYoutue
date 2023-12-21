import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utilis/store";
import {
  BrowserRouter,
  RouterProvider,
  Routes,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import MainConatiner from "./components/MainConatiner";
import WatchPage from "./components/WatchPage";
import { useState } from "react";
import MyContext from "./utilis/searchTextContext";
import SearchVideoContainer from "./components/SearchVideoContainer ";
import AboutUs from "./components/AboutUs";

// const appRouter = createBrowserRouter([{
//   path:"/",
//   element:<Body/>,
//   children:[
//     {
//       path:"/",
//       element:<MainConatiner/>
//     },
//     {
//       path:"watch",
//       element:<WatchPage/>
//     }
//   ]
// }])

function App() {
  const [text, setText] = useState("Home");

  return (
    <MyContext.Provider value={{ text, setText }}>
      <Provider store={store}>
        <BrowserRouter>
          <div className=" overflow-x-hidden">
            <Head />

            <Routes>
              <Route path="/" element={<Body />}>
                <Route path="/" element={<MainConatiner />}></Route>
                <Route path="watch" element={<WatchPage />}></Route>
                <Route path="/about" element={<AboutUs/>}></Route>
              </Route>
              <Route
                path="/search/:searchTerm"
                element={<SearchVideoContainer />}
              ></Route>
              
            </Routes>
            {/* <RouterProvider router={appRouter} /> */}
          </div>
        </BrowserRouter>
      </Provider>
    </MyContext.Provider>
  );
}

export default App;
