import "./App.css";
import Create from "./components/create";
import Read from "./components/read";
import Update from "./components/update";
import { Routes, Route } from "react-router-dom";
import { Divider } from "semantic-ui-react";

function App() {
  return (
    <div className="main">
      <Routes>
            <Route path="/">
            
                  <Route index path="read" element={<Read />} />
                  <Route exact path="create" element={<Create />} />
                  <Route path="update" element={<Update />} />
            
            </Route>
      </Routes>
    </div>
  );
}
export default App;
