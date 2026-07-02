import { useState } from "react";
import GuestPage from "./Components/GuestPage";
import UserPage from "./Components/UserPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div
      style={{
        background: "#f4f8fb",
        minHeight: "100vh",
        padding: "30px",
        textAlign: "center",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ color: "#0d6efd" }}>
        ✈️ Ticket Booking App
      </h1>

      {loggedIn ? (
        <button
          onClick={() => setLoggedIn(false)}
          style={{
            background: "#dc3545",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => setLoggedIn(true)}
          style={{
            background: "#198754",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Login
        </button>
      )}

      {loggedIn ? <UserPage /> : <GuestPage />}
    </div>
  );
}

export default App;