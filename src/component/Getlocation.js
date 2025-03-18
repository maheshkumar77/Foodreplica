import React, { useState } from "react";
import axios from "axios";

const GetLocation = () => {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  const fetchAddress = async (lat, lng) => {
    try {
      const response = await axios.post("http://localhost:5000/api/get-address", {
        lat,
        lng,
      });
      setAddress(response.data.address);
      setError("");
    } catch (error) {
      setError("Failed to fetch address.");
      console.error(error);
    }
  };

  const getLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        setLocation({ lat, lng });
        fetchAddress(lat, lng);
      },
      (err) => {
        setError("Failed to get location. Please allow location access.");
        console.error(err);
      }
    );
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Get Your Location & Address</h2>
      <button onClick={getLocation} style={{ padding: "10px", fontSize: "16px" }}>
        Get My Location
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {location && (
        <div>
          <h3>Your Coordinates</h3>
          <p><strong>Latitude:</strong> {location.lat}</p>
          <p><strong>Longitude:</strong> {location.lng}</p>
        </div>
      )}

      {address && (
        <div>
          <h3>Your Address</h3>
          <p>{address}</p>
        </div>
      )}
    </div>
  );
};

export default GetLocation;
