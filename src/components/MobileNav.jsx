import { Affix, Tabs, Stack, Text, Anchor } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { IconCircle, IconBooks, IconUser, IconMail } from '@tabler/icons-react';
import { useNavigate, useParams } from 'react-router-dom';
import classes from '../styles/MobileNav.module.css';

function MobileNav() {
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
    <Affix hiddenFrom="xs" position={{ bottom: 0, left: 0, right: 0 }}>
      <Tabs
        activateTabWithKeyboard={false}
        value={tabValue}
        onChange={(value) => navigateOnChange(value)}
        classNames={classes}
        variant="unstyled"
      >
        <Tabs.List aria-label="Main Menu">
          <Tabs.Tab value="home" onClick={() => scrollTo({ y: 0 })}>
            <Stack align="center" gap={'0'}>
              <IconCircle />
              <Text size="xs">Home</Text>
            </Stack>
          </Tabs.Tab>
          <Tabs.Tab value="library" onClick={() => scrollTo({ y: 0 })}>
            <Stack align="center" gap={'0'}>
              <IconBooks />
              <Text size="xs">Projects</Text>
            </Stack>
          </Tabs.Tab>
          <Tabs.Tab value="about" onClick={() => scrollTo({ y: 0 })}>
            <Stack align="center" gap={'0'}>
              <IconUser />
              <Text size="xs">About</Text>
            </Stack>
          </Tabs.Tab>
          <Anchor
            href="#contact"
            onClick={(e) => scrollToContact(e, 'contact')}
            className={classes.contactButton}
          >
            <Stack align="center" gap={'0'}>
              <IconMail />
              <Text size="xs">Contact</Text>
            </Stack>
          </Anchor>
        </Tabs.List>
      </Tabs>
    </Affix>
  );
}

export default MobileNav;
