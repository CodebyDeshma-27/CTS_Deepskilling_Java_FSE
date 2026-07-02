import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

import Home from "./Components/Home";
import TrainersList from "./Components/TrainersList";
import TrainerDetails from "./Components/TrainerDetails";

function App() {
  return (
    <BrowserRouter>

      <h1>Trainer Management Portal</h1>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/trainers">Trainers</Link>

        <hr />
      </nav>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/trainers" element={<TrainersList />} />

        <Route path="/trainer/:id" element={<TrainerDetails />} />

        <Route path="*" element={<Navigate to="/" />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;