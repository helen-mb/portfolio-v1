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
import { Link } from 'react-router-dom';
import IMAGES from '../../images/Images';
import classes from '../../styles/FeaturedProject.module.css';

export default function DesktopFeaturedProject() {
  return (
    <Paper radius={'sm'} withBorder className={classes.desktop_paper}>
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
    </Paper>
  );
}
