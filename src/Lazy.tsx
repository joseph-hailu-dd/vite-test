function Lazy({ count = 10 }: { count?: number }) {
  return (
    <div>
      <p className="read-the-docs">Lazy loaded: {111 / count} </p>
      <br />
      <br />
      <br />
      <br />
      <p className="read-the-docs">Date: {new Date().toISOString()} </p>
    </div>
  );
}

export default Lazy;
