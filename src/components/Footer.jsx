import { Center, Stack, Text, Group, ActionIcon } from '@mantine/core';
import {
  IconBrandInstagram,
  IconBrandGithub,
  IconBrandLinkedin,
} from '@tabler/icons-react';
import classes from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer>
      <Center>
        <Stack align="center" gap={'xs'}>
          <Text fw={'bold'}>Get in Touch!</Text>
          <Text>
            Find me on Linkedin, read my code on Github, and see my art on
            Instagram
          </Text>
          <Group>
            <ActionIcon
              radius={'xl'}
              size={'lg'}
              color={'myBlue.9'}
              autoContrast
              component="a"
              target="_blank"
              href="https://www.linkedin.com/in/helen-burger/"
              aria-label="Link to LinkedIn"
            >
              <IconBrandLinkedin />
            </ActionIcon>
            <ActionIcon
              radius={'xl'}
              size={'lg'}
              color={'myBlue.9'}
              autoContrast
              component="a"
              target="_blank"
              href="https://github.com/helen-mb"
              aria-label="Link to Github"
            >
              <IconBrandGithub />
            </ActionIcon>
            <ActionIcon
              radius={'xl'}
              size={'lg'}
              color={'myBlue.9'}
              autoContrast
              component="a"
              target="_blank"
              href="https://www.instagram.com/scribbles_by.helen/"
              aria-label="Link to Instagram"
            >
              <IconBrandInstagram />
            </ActionIcon>
          </Group>
        </Stack>
      </Center>
    </footer>
  );
}
