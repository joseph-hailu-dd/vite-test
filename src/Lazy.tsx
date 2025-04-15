function Lazy({ count = 10 }: { count?: number }) {
  return (
    <div>
      <p className="read-the-docs">Lazy loaded: {10 / count} </p>
    </div>
  );
}

export default Lazy;
