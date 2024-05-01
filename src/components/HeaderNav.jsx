import { Container, Tabs, Stack, Text } from '@mantine/core';
import { IconCircle, IconBooks, IconUser, IconMail } from '@tabler/icons-react';
import { useNavigate, useParams } from 'react-router-dom';
import classes from '../styles/DesktopNav.module.css';

function MobileNav() {
  const navigate = useNavigate();
  const { tabValue } = useParams();
  function navigateOnChange(value) {
    value === 'home' ? navigate('/') : navigate(`/${value}`);
  }

  return (
    <Container visibleFrom="xs">
      <Tabs
        activateTabWithKeyboard={false}
        value={tabValue}
        onChange={(value) => navigateOnChange(value)}
        classNames={classes}
        variant="unstyled"
      >
        <Tabs.List justify="flex-end" classNames={classes}>
          <Tabs.Tab value="home" mr={'auto'}>
            <IconCircle />
          </Tabs.Tab>
          <Tabs.Tab value="projects">
            <Text size="md">Projects</Text>
          </Tabs.Tab>
          <Tabs.Tab value="about">
            <Text size="md">About</Text>
          </Tabs.Tab>
          <Tabs.Tab value="contact">
            <Text size="md">Contact</Text>
          </Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </Container>
  );
}

export default MobileNav;
