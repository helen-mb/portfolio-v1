import {
  Title,
  Center,
  Stack,
  Text,
  Group,
  ActionIcon,
  Box,
  Anchor,
} from '@mantine/core';
import {
  IconBrandInstagram,
  IconBrandGithub,
  IconBrandLinkedin,
  IconArrowUpRight,
} from '@tabler/icons-react';
import classes from '../styles/Footer.module.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  const date = new Date();

  return (
    <footer id="contact">
      <Center className={classes.contactSection}>
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
      <Box className={classes.footNotes}>
        <Group>
          <p>
            Made in Canada, on{' '}
            <Anchor
              as={Link}
              target="_blank"
              href="https://www.songheesnation.ca/community/l-k-ng-n-traditional-territory"
            >
              lək̓ʷəŋən territory.
              <IconArrowUpRight />
            </Anchor>{' '}
          </p>
          <p>
            &copy; {date.getFullYear()}{' '}
            <Anchor
              as={Link}
              target="_blank"
              href="https://github.com/helen-mb"
            >
              Helen Burger
            </Anchor>{' '}
            | &#9829; Built using Vite, React JS, & Mantine
          </p>
        </Group>
      </Box>
    </footer>
  );
}
