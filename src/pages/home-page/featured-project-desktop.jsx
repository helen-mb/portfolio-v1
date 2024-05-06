import {
  Title,
  Text,
  Paper,
  Stack,
  Box,
  Group,
  Anchor,
  BackgroundImage,
  AspectRatio,
} from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { Link } from 'react-router-dom';
import IMAGES from '../../images/Images';
import classes from '../../styles/FeaturedProject.module.css';

export default function DesktopFeaturedProject({ id, title, stack, url }) {
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <Paper radius={'sm'} withBorder className={classes.desktop_paper}>
      <Stack justify="space-between" className={classes.stack}>
        <Box>
          <Title order={3}>{title}</Title>
          <Text>{stack}</Text>
        </Box>
        <Group justify="space-between">
          <Anchor href={url} target="_blank">
            Launch
          </Anchor>
          <Anchor
            component={Link}
            to={`project/${id}`}
            onClick={() => scrollTo({ y: 0 })}
          >
            Read
          </Anchor>
        </Group>
      </Stack>
    </Paper>
  );
}
