import "./App.css";

function Header() {
  return (
    <header>
      <div className="logoD">
        <img
          className="logoS"
          src="https://static.wikia.nocookie.net/bluelock/images/b/b0/Real_Madrid.PNG/revision/latest?cb=20240122040731&path-prefix=es"
          alt=""
        />
        <span>Studio Luna</span>
      </div>
      <nav>
        <ul className="navigation">
          <li className="menu">
            <a href="#">Início</a>
          </li>
          <li className="menu">
            <a href="#">Serviços</a>
          </li>
          <li className="menu">
            <a href="#">Sobre</a>
          </li>
          <li className="menu">
            <a href="#">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
