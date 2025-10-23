import '../404.css';
import { Link } from '../Link.jsx';

export default function Page404() {
  return (
    <>
      <div className="bsod container">
        <h1 className="neg title">
          <span className="bg">Error - 404</span>
        </h1>
        <p>Ha ocurrido un error:</p>
        <p>* Vuelve a la home.</p>
        <nav className="nav">
          <Link to="/">Home</Link>
        </nav>
      </div>
    </>
  );
}
