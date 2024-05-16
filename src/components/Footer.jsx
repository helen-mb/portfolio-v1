import { Title, Center, Stack, Text, Group, ActionIcon } from '@mantine/core';
import {
  IconBrandInstagram,
  IconBrandGithub,
  IconBrandLinkedin,
} from '@tabler/icons-react';
import classes from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer id="contact">
      <Center>
        <Stack align="center" gap={'xs'}>
          <Title order={2} className={classes.footerHeading}>
            Get in Touch!
          </Title>
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
              className={classes.socialLink}
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
              className={classes.socialLink}
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
              className={classes.socialLink}
            >
              <IconBrandInstagram />
            </ActionIcon>
          </Group>
        </Stack>
      </Center>
    </footer>
  );
}
