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
    <Card withBorder className={classes.card}>
      <Box className={classes.titleBox}>
        <Title order={3}>{title}</Title>
        <Text>{stack}</Text>
      </Box>
      <Card.Section withBorder className={classes.imageContainer}>
        <Image src={image} alt="an image" className={classes.backgroundImage} />
      </Card.Section>
      <Stack style={{ flexGrow: '1' }} justify="space-between" gap={'xs'}>
        <Text className={classes.summary}>{summary}</Text>
        <Group justify="space-between">
          <Anchor
            component={Link}
            to={`project/${id}`}
            onClick={() => scrollTo({ y: 0 })}
          >
            <div className={classes.linkAccent}></div>
            <p className={classes.readLink}>Read</p>
            <IconArrowNarrowRight />
          </Anchor>
          <Anchor href={url} target="_blank">
            <p className={classes.launchLink}>Launch</p>
            <IconArrowUpRight className={classes.launchIcon} />
          </Anchor>
        </Group>
      </Stack>
    </Card>
  );
}
