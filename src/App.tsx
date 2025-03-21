import { Route, Routes } from "react-router-dom";
import IndexPage from "@/pages/index"
import MUIPage from "@/pages/mui";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<MUIPage />} path="/mui" />
 
    </Routes>
  );
}

export default App;
