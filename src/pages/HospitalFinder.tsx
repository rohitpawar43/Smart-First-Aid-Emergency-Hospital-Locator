import React, { useEffect, useState } from "react";
import "./HospitalFinder.css";

interface Location {
  lat: number;
  lng: number;
}

const HospitalFinder = () => {
  const [userLocation, setUserLocation] = useState<Location | null>(null);
  const [error, setError] = useState<string | null>(null);
  const googleMapsApiKey = "";

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        () => {
          setError("Failed to get your location. Enable GPS.");
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  }, []);

  return (
    <div className="hospital-container">
      <h2 className="hospital-title">Nearby Hospitals</h2>

      {error && <p className="hospital-error">{error}</p>}

      <div className="hospital-map">
        {userLocation ? (
          <iframe
            src={`https://www.google.com/maps/embed/v1/search?key=${googleMapsApiKey}&q=hospitals&center=${userLocation.lat},${userLocation.lng}&zoom=14`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        ) : (
          <p className="hospital-loading">Fetching your location...</p>
        )}
      </div>

      <button
        onClick={() =>
          userLocation &&
          window.open(
            `https://www.google.com/maps/search/hospitals+near+me/@${userLocation.lat},${userLocation.lng},14z`,
            "_blank"
          )
        }
        className="hospital-btn"
        disabled={!userLocation}
      >
        Open in Google Maps
      </button>
    </div>
  );
};

export default HospitalFinder;
