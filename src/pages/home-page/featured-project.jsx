import {
  Title,
  Text,
  Paper,
  Stack,
  Box,
  Group,
  BackgroundImage,
  AspectRatio,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import IMAGES from '../../images/Images';
import classes from '../../styles/Home.module.css';

export default function FeaturedProject() {
  return (
    <AspectRatio ratio={16 / 8} maw={400} className={classes.aspectRatio}>
      <Paper radius={'sm'} withBorder className={classes.paper}>
        <BackgroundImage
          src={IMAGES.testImage}
          radius={'sm'}
          className={classes.backgroundImage}
        />
      </Paper>
      <Stack justify="space-between" className={classes.stack}>
        <Box>
          <Title order={3}>Project Name</Title>
          <Text>HTML | SCSS | JQuery</Text>
        </Box>
        <Group justify="space-between">
          <Text>Launch</Text>
          <Link to={'../details'}>Read</Link>
        </Group>
      </Stack>
    </AspectRatio>
  );
}
