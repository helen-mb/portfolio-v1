import {
  Title,
  Text,
  Paper,
  Stack,
  Box,
  Group,
  BackgroundImage,
  AspectRatio,
  Anchor,
} from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { Link } from 'react-router-dom';
import IMAGES from '../../images/Images';
import classes from '../../styles/FeaturedProject.module.css';

export default function MobileFeaturedProject({
  id,
  title,
  stack,
  url,
  image,
}) {
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <AspectRatio ratio={16 / 8} maw={700} className={classes.aspectRatio}>
      <Paper radius={'sm'} withBorder className={classes.paper}>
        <BackgroundImage
          src={image}
          radius={'sm'}
          className={classes.backgroundImage}
        />
      </Paper>
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
    </AspectRatio>
  );
}
