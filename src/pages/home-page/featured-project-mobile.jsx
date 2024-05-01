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

export default function MobileFeaturedProject() {
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
          <Title order={3}>Project Name</Title>
          <Text>HTML | SCSS | JQuery</Text>
        </Box>
        <Group justify="space-between">
          <Anchor href="https://www.google.com" target="_blank">
            Launch
          </Anchor>
          <Anchor component={Link} to={'details'}>
            Read
          </Anchor>
        </Group>
      </Stack>
    </AspectRatio>
  );
}
