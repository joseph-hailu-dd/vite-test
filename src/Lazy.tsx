import { NavLink } from "react-router";

function Lazy({ count = 10 }: { count?: number }) {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <br />
      <br />
      <br />
      <p className="read-the-docs">No longer Lazy loaded: {111 / count} </p>
      <br />
      <br />
      <br />
      <p className="read-the-docs">Date: {new Date().toISOString()} </p>
    </div>
  );
}

export default Lazy;
