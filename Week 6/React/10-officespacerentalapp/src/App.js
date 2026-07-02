import techPark from "./Tech Park.jpg";
import businessCenter from "./Business Center.jpg";
import workspace from "./Workspace.jpg";
import cts from "./CTS.jpg";

function App() {
  const offices = [
    {
      name: "Tech Park Tower",
      rent: 45000,
      address: "Bangalore",
      image: techPark,
    },
    {
      name: "Skyline Business Center",
      rent: 75000,
      address: "Hyderabad",
      image: businessCenter,
    },
    {
      name: "Infinity Workspace",
      rent: 58000,
      address: "Chennai",
      image: workspace,
    },
    {
      name: "Global IT Hub",
      rent: 92000,
      address: "Pune",
      image: cts,
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#f4f8fb",
        minHeight: "100vh",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#0d6efd",
          marginBottom: "40px",
        }}
      >
        🏢 Office Space Rental App
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        {offices.map((office, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              width: "280px",
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
            }}
          >
            <img
              src={office.image}
              alt={office.name}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "18px" }}>
              <h2
                style={{
                  color: "#0d6efd",
                  marginBottom: "10px",
                }}
              >
                {office.name}
              </h2>

              <h3
                style={{
                  color: office.rent < 60000 ? "red" : "green",
                }}
              >
                Rent: ₹{office.rent}
              </h3>

              <h4 style={{ color: "#555" }}>
                📍 {office.address}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;