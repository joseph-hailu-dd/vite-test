function Lazy({ count = 10 }: { count?: number }) {
  return (
    <div>
      <p className="read-the-docs">Lazy loaded: {11 / count} </p>
    </div>
  );
}

export default Lazy;
