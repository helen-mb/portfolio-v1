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
          <Text>Launch</Text>
          <Link to={'../details'}>Read</Link>
        </Group>
      </Stack>
    </Paper>
  );
}
