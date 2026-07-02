function GuestPage() {
  return (
    <div
      style={{
        background: "#ffffff",
        padding: "25px",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
        marginTop: "20px",
      }}
    >
      <h2 style={{ color: "#0d6efd" }}>✈️ Flight Details</h2>

      <table
        border="1"
        cellPadding="10"
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "center",
        }}
      >
        <thead style={{ background: "#0d6efd", color: "white" }}>
          <tr>
            <th>Flight</th>
            <th>From</th>
            <th>To</th>
            <th>Time</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>AI-202</td>
            <td>Chennai</td>
            <td>Bangalore</td>
            <td>10:30 AM</td>
          </tr>

          <tr>
            <td>6E-101</td>
            <td>Delhi</td>
            <td>Mumbai</td>
            <td>2:00 PM</td>
          </tr>
        </tbody>
      </table>

      <p style={{ color: "red", marginTop: "20px" }}>
        🔒 Login to book tickets.
      </p>
    </div>
  );
}

export default GuestPage;