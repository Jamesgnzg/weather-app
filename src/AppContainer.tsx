import { HelmetProvider } from "react-helmet-async";
import App from "./App";

const AppContainer = () => {
  //Put the providers here
  return (
    <>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </>
  );
};

export default AppContainer;
