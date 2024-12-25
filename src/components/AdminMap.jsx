import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function AdminMap() {
  return (
    <div style={{ height: "400px", margin: "20px 0" }}>
      <MapContainer center={[12.7118, 108.2378]} zoom={8} style={{ height: "100%", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[12.7118, 108.2378]}>
          <Popup>Đắk Lắk Province</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default AdminMap;
