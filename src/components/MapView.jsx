export default function MapView({ buses }) {
  return (
    <div className="map">
      <h3>Live Bus Map</h3>
      {buses.map(bus => (
        <div key={bus.id} className="marker">
          🚌 {bus.number} ({bus.coordinates[0].toFixed(4)},
          {bus.coordinates[1].toFixed(4)})
        </div>
      ))}
    </div>
  );
}
