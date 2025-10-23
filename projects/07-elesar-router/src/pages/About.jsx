import { Link } from '../Link.jsx';
import elesarImg from '../assets/elesar.png';

const i18n = {
  es: {
    title: 'Sobre nosotros',
    button: 'Ir a la home',
    description: '¡Hola! Me llamo Elesar y estoy creando un clon de React Router.',
  },
  en: {
    title: 'About us',
    button: 'Go to home page',
    description: 'Hi! My name is Elesar and I am creating a clone of React Router.',
  },
};

const useI128n = (lang) => {
  return i18n[lang] || i18n.en
};

export default function AboutPage({ routerParams }) {
  const i18n = useI128n(routerParams.lang ?? 'es');
  return (
    <>
      <h1>{i18n.title}</h1>
      <div>
        <img src={elesarImg} alt="Foto de Elesar" width="200" height="200" />
        <p>{i18n.description}</p>
      </div>
      <Link to="/">{i18n.button}</Link>
    </>
  );
}
