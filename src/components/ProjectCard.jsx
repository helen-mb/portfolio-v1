import {
  Title,
  Text,
  Card,
  Image,
  Box,
  Group,
  Anchor,
  Stack,
} from '@mantine/core';
import { IconArrowNarrowRight, IconArrowUpRight } from '@tabler/icons-react';
import { useWindowScroll } from '@mantine/hooks';
import { Link } from 'react-router-dom';
import classes from '../styles/ProjectCard.module.css';

export default function ProjectCard({ id, title, stack, url, image, summary }) {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Card padding="lg" radius="md" withBorder className={classes.card}>
      <Box>
        <Title order={3}>{title}</Title>
        <Text>{stack}</Text>
      </Box>
      <Card.Section withBorder className={classes.container}>
        <Image
          src={image}
          mah={300}
          alt="an image"
          className={classes.backgroundImage}
        />
      </Card.Section>
      <Stack justify="space-between" gap={'xs'}>
        <Text c={'dimmed'}>{summary}</Text>
        <Group justify="space-between">
          <Anchor href={url} target="_blank">
            <p className={classes.launchLink}>Launch</p>
            <IconArrowUpRight className={classes.launchIcon} />
          </Anchor>
          <Anchor
            component={Link}
            to={`project/${id}`}
            onClick={() => scrollTo({ y: 0 })}
          >
            <div className={classes.linkAccent}></div>
            <p className={classes.readLink}>Read</p>
            <IconArrowNarrowRight />
          </Anchor>
        </Group>
      </Stack>
    </Card>
  );
}
