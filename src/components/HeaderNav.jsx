import { Container, Tabs, Anchor, Text } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { IconCircle } from '@tabler/icons-react';
import { useNavigate, useParams } from 'react-router-dom';
import classes from '../styles/DesktopNav.module.css';

function HeaderNav() {
  const navigate = useNavigate();
  const { tabValue } = useParams();
  const [scroll, scrollTo] = useWindowScroll();
  function navigateOnChange(value) {
    value === 'home' ? navigate('/') : navigate(`/${value}`);
  }
  const scrollToContact = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  return (
    <Container visibleFrom="xs" className="headerNav">
      <Tabs
        activateTabWithKeyboard={false}
        value={tabValue}
        onChange={(value) => navigateOnChange(value)}
        classNames={classes}
        variant="unstyled"
      >
        <Tabs.List justify="flex-end" classNames={classes}>
          <Tabs.Tab value="home" mr={'auto'} onClick={() => scrollTo({ y: 0 })}>
            <IconCircle />
          </Tabs.Tab>
          <Tabs.Tab value="library" onClick={() => scrollTo({ y: 0 })}>
            <Text size="md">Projects</Text>
          </Tabs.Tab>
          <Tabs.Tab value="about" onClick={() => scrollTo({ y: 0 })}>
            <Text size="md">About</Text>
          </Tabs.Tab>
          <Anchor
            href="#contact"
            onClick={(e) => scrollToContact(e, 'contact')}
            className={classes.contactButton}
          >
            <Text size="md">Contact</Text>
          </Anchor>
        </Tabs.List>
      </Tabs>
    </Container>
  );
}

export default HeaderNav;
