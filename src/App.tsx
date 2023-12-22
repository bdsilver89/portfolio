import { BrowserRouter } from "react-router-dom";

import Router from "./router";
import { DarkModeProvider } from "./context/DarkMode";

function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
