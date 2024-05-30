import MobileNav from '../components/MobileNav';
import HeaderNav from '../components/HeaderNav';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import { useMouse } from '@mantine/hooks';
import { useRef } from 'react';

export default function Root() {
  const { x, y } = useMouse();
  const cursor = useRef(null);
  const changePosition = () => {
    cursor.current.style.top = `${y}px`;
    cursor.current.style.left = `${x}px`;
  };

  return (
    <div onMouseMove={changePosition}>
      {/* <HeaderNav id="header" /> */}
      <MobileNav />
      <div id="content">
        <div id="cursor" className="cursor" ref={cursor}></div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
