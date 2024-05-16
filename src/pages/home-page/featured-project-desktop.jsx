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
import classes from '../../styles/FeaturedProject.module.css';
import { IconArrowNarrowRight, IconArrowUpRight } from '@tabler/icons-react';

export default function DesktopFeaturedProject({ id, title, stack, url }) {
  const [scroll, scrollTo] = useWindowScroll();
  const cursor = document.getElementById('cursor');
  const preview = document.getElementById('preview');
  const hideCursor = () => {
    cursor.style.opacity = '0%';
    preview.style.opacity = '100%';
  };
  const showCursor = () => {
    cursor.style.removeProperty('opacity');
    preview.style.opacity = '0%';
  };

  return (
    <Paper
      radius={'sm'}
      withBorder
      className={classes.desktop_paper}
      onMouseEnter={hideCursor}
      onMouseLeave={showCursor}
    >
      <Stack justify="space-between" className={classes.stack}>
        <Box>
          <Title order={3}>{title}</Title>
          <Text>{stack}</Text>
        </Box>
        <Group justify="space-between">
          <Anchor href={url} target="_blank">
            {/* <div className={classes.linkAccent}></div> */}
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
    </Paper>
  );
}
