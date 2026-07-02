function UserPage() {
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
      <h2 style={{ color: "#198754" }}>
        🎉 Welcome User
      </h2>

      <h3>✈️ Ticket Booking Available</h3>

      <button
        style={{
          background: "#198754",
          color: "white",
          border: "none",
          padding: "12px 25px",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Book Ticket
      </button>
    </div>
  );
}

export default UserPage;