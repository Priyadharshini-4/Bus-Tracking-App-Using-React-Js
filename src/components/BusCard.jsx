export default function BusCard({ bus }) {
  return (
    <div className="bus-card">
      <h4>{bus.number}</h4>
      <p>Route: {bus.route}</p>
      <p>
        Lat: {bus.coordinates[0].toFixed(4)} <br />
        Lng: {bus.coordinates[1].toFixed(4)}
      </p>
    </div>
  );
}
