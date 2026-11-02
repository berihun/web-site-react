import { useState } from "react";

function Header() {
  const name = "John Doe";
  const profession = "Software Engineer";

  return (
    <div>
      {/* {header section} */}
      <header className="header">
        <h2>{name}</h2>
        <p>{profession}</p>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    </div>
  );
}
export default Header;
