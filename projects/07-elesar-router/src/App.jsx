import './App.css';
import { lazy, Suspense } from 'react';

import { Router } from './Router.jsx';
import { Route } from './Route.jsx';

import SearchPage from './pages/Search.jsx';

const LazyHomePage = lazy(() => import('./pages/Home.jsx'));
const LazyAboutPage = lazy(() => import('./pages/About.jsx'));
const Lazy404Page = lazy(() => import('./pages/404.jsx'));

const appRouter = [
  {
    path: '/:lang/about',
    Component: LazyAboutPage,
  },
  {
    path: '/search/:query',
    Component: SearchPage,
  },
];

function App() {
  return (
    <main>
      <Suspense fallback={null}>
        <Router routes={appRouter} defaultComponent={Lazy404Page}>
          <Route path="/" Component={LazyHomePage} />
          <Route path="/about" Component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  );
}

export default App;
