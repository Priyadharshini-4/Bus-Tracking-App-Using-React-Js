import { useEffect, useState } from "react";
import Header from "./components/Header";
import BusCard from "./components/BusCard";
import MapView from "./components/MapView";
import RouteFilter from "./components/RouteFilter";
import { busesData } from "./data/buses";
import "./App.css";

export default function App() {
  const [buses, setBuses] = useState(busesData);
  const [selectedRoute, setSelectedRoute] = useState("");

  // simulate live movement
  useEffect(() => {
    const interval = setInterval(() => {
      setBuses(prev =>
        prev.map(bus => ({
          ...bus,
          coordinates: [
            bus.coordinates[0] + (Math.random() - 0.5) * 0.001,
            bus.coordinates[1] + (Math.random() - 0.5) * 0.001,
          ],
        }))
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const filteredBuses = selectedRoute
    ? buses.filter(bus => bus.route === selectedRoute)
    : buses;

  const routes = [...new Set(buses.map(bus => bus.route))];

  return (
    <>
      <Header />
      <RouteFilter routes={routes} setSelectedRoute={setSelectedRoute} />
      <MapView buses={filteredBuses} />
      <div className="bus-list">
        {filteredBuses.map(bus => (
          <BusCard key={bus.id} bus={bus} />
        ))}
      </div>
    </>
  );
}

