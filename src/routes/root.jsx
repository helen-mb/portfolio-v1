import MobileNav from '../components/MobileNav';
import HeaderNav from '../components/HeaderNav';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <HeaderNav />
      <MobileNav />
      <div id="content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
