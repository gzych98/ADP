const NavBar: React.FC = () => {
  return (
    <nav>
      <div className='navbar'>
        <ul>
          <li><a href="/">Strona domowa</a></li>
          <li><a href="/#web_solutions">Nasze Rozwiązania</a></li>
          <li><a href="/#form">Zrealizuj swój projekt</a></li>
          <li><a href="/#contact">Kontakt</a></li>
          <li><a id='language' href="/how-it-works">Jak to działa?</a></li>
        </ul>
      </div>
    </nav >
  );
};

export default NavBar;