import {
  Title,
  Text,
  Paper,
  Box,
  Group,
  Anchor,
  Stack,
  Flex,
} from '@mantine/core';
import { IconArrowNarrowRight, IconArrowUpRight } from '@tabler/icons-react';
import { useWindowScroll } from '@mantine/hooks';
import { Link } from 'react-router-dom';
import classes from '../../styles/ArchiveItem.module.css';

export default function ArchiveItem({
  id,
  title,
  stack,
  url,
  summary,
  image,
  retrievePreviewImage,
}) {
  const [scroll, scrollTo] = useWindowScroll();
  const cursor = document.getElementById('cursor');
  const preview = document.getElementById('preview');
  const changeCursor = () => {
    if (preview) {
      cursor.style.opacity = '0%';
      retrievePreviewImage(image);
      preview.style.opacity = '100%';
    }
  };
  const resetCursor = () => {
    cursor.style.removeProperty('opacity');
    preview.style.opacity = '0%';
  };

  return (
    <Paper
      radius={0}
      className={classes.paper}
      onMouseEnter={changeCursor}
      onMouseLeave={resetCursor}
    >
      <Flex gap={'sm'}>
        <Box className={classes.titleGroup}>
          <Title order={3}>{title}</Title>
          <Text>{stack}</Text>
        </Box>
        <Stack justify="space-between" gap={'xs'}>
          <Text c={'dimmed'} className={classes.summary}>
            {summary}
          </Text>
          <Group justify="flex-start" gap={'xl'}>
            <Anchor
              component={Link}
              to={`../project/${id}`}
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
      </Flex>
    </Paper>
  );
}
