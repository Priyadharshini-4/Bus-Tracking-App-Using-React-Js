export default function RouteFilter({ routes, setSelectedRoute }) {
  return (
    <select onChange={e => setSelectedRoute(e.target.value)}>
      <option value="">All Routes</option>
      {routes.map(route => (
        <option key={route} value={route}>
          Route {route}
        </option>
      ))}
    </select>
  );
}
