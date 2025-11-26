export default function Footer({ value }) {
  return (
    <div id="footer" className={value ? "dark" : "black"}>
      <p>Ⓒ Copy Right by MustafaEgeh</p>
      <p className="footer-date">04.2024</p>
    </div>
  );
}
