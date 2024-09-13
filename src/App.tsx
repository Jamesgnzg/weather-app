/**
 * Project Name: Weatheria
 * Description: A platform that forecasts weather and provides information on what to expect outside.
 *
 * Author: James Gonzaga
 * Email: j.jgonzaga03@gmail.com
 * Date: August 29, 2024
 */

import MainLayout from "./layouts/MainLayout";
import { Helmet } from "react-helmet-async";
import { getTitleFromRoute } from "./utils/docTitle";
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes/Routes";
import "./App.css";

function App() {
  return (
    <>
      <Helmet>
        <title>{getTitleFromRoute(location.pathname)}</title>
      </Helmet>
      <Routes>
        <Route element={<MainLayout />}>
          {privateRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>

        {publicRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
}

export default App;
