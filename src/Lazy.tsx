import { useLocation } from "react-router";

function Lazy() {
  const locationState = useLocation().state;
  return (
    <div>
      <p className="read-the-docs">Lazy loaded: {locationState?.count} </p>
    </div>
  );
}

export default Lazy;
