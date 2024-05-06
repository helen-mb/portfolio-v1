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
import { Link } from 'react-router-dom';
import IMAGES from '../../images/Images';
import classes from '../../styles/FeaturedProject.module.css';

export default function MobileFeaturedProject({ id, title, stack, url }) {
  return (
    <AspectRatio ratio={16 / 8} maw={700} className={classes.aspectRatio}>
      <Paper radius={'sm'} withBorder className={classes.paper}>
        <BackgroundImage
          src={IMAGES.testImage}
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
          <Anchor component={Link} to={`project/${id}`}>
            Read
          </Anchor>
        </Group>
      </Stack>
    </AspectRatio>
  );
}
