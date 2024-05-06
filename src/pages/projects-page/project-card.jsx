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
import { useWindowScroll } from '@mantine/hooks';
import IMAGES from '../../images/Images';
import { Link } from 'react-router-dom';
import classes from '../../styles/ProjectCard.module.css';

export default function ProjectCard({ id, title, stack, url }) {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Card padding="lg" radius="md" withBorder className={classes.card}>
      <Box>
        <Title order={3}>{title}</Title>
        <Text>{stack}</Text>
      </Box>
      <Card.Section withBorder className={classes.container}>
        <Image
          src={IMAGES.testImage}
          mah={300}
          alt="an image"
          className={classes.backgroundImage}
        />
      </Card.Section>
      <Stack justify="space-between" gap={'xs'}>
        <Text c={'dimmed'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sit
          ullam, voluptatibus magnam obcaecati eos, nemo odit iusto sed soluta
          nesciunt ipsum veniam modi placeat!
        </Text>
        <Group justify="space-between">
          <Anchor href={url} target="_blank">
            Launch
          </Anchor>
          <Anchor
            component={Link}
            to={`/project/${id}`}
            onClick={() => scrollTo({ y: 0 })}
          >
            Read
          </Anchor>
        </Group>
      </Stack>
    </Card>
  );
}
