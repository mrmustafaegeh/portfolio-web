export default function Footer({ value }) {
  return (
    <div id="footer" className={value ? "dark" : "black"}>
      <p className="">Ⓒ Copy Right by MustafaEgeh</p>
      <p className="footer-date">04.2025</p>
    </div>
  );
}
