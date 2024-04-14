import { Affix, Tabs, Stack, Text } from '@mantine/core';
import { IconHome, IconBooks, IconUser, IconMail } from '@tabler/icons-react';
import { useNavigate, useParams } from 'react-router-dom';

function MobileNav() {
  const navigate = useNavigate();
  const { tabValue } = useParams();

  return (
    <Affix hiddenFrom="xs" position={{ bottom: 0, left: 0, right: 0 }}>
      <Tabs
        activateTabWithKeyboard={false}
        value={tabValue}
        onChange={(value) => navigate(`/${value}`)}
      >
        <Tabs.List grow justify="center">
          <Tabs.Tab value="home">
            <Stack align="center" gap={'0'}>
              <IconHome />
              <Text size="xs">Home</Text>
            </Stack>
          </Tabs.Tab>
          <Tabs.Tab value="projects">
            <Stack align="center" gap={'0'}>
              <IconBooks />
              <Text size="xs">Projects</Text>
            </Stack>
          </Tabs.Tab>
          <Tabs.Tab value="about">
            <Stack align="center" gap={'0'}>
              <IconUser />
              <Text size="xs">About</Text>
            </Stack>
          </Tabs.Tab>
          <Tabs.Tab value="contact">
            <Stack align="center" gap={'0'}>
              <IconMail />
              <Text size="xs">Contact</Text>
            </Stack>
          </Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </Affix>
  );
}

export default MobileNav;
