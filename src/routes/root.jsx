import MobileNav from '../components/MobileNav';
import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <MobileNav />
      <div id="content">
        <Outlet />
      </div>
    </>
  );
}
