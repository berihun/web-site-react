function Footer() {
  const name = "John Doe";

  return (
    <div>
      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} {name}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
