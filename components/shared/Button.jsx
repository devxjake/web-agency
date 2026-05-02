export default function Button({ children, className, handleClick }) {
  return (
    <button className={`btn ${className}`} onClick={handleClick}>
      {children}
    </button>
  );
}
