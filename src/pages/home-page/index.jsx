import { Title, Text, Paper, Stack, Box, Group } from '@mantine/core';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <div id="home">
      <Title order={1}>Helen Burger</Title>
      <Text>Designer | Developer</Text>
      <section id="featured-projects">
        <Title order={2}>Featured Projects</Title>
        {/* TODO: rewrite as a loop */}
        <Paper radius="sm" withBorder>
          <Stack justify="space-between">
            <Box>
              <Title order={3}>Project Name</Title>
              <Text>HTML | SCSS | JQuery</Text>
            </Box>
            <Group justify="space-between">
              <Text>Launch</Text>
              <Text>Read</Text>
            </Group>
          </Stack>
        </Paper>
        <Paper radius="sm" withBorder>
          <Stack justify="space-between">
            <Box>
              <Title order={3}>Project Name</Title>
              <Text>HTML | SCSS | JQuery</Text>
            </Box>
            <Group justify="space-between">
              <Text>Launch</Text>
              <Text>Read</Text>
            </Group>
          </Stack>
        </Paper>
        <Paper radius="sm" withBorder>
          <Stack justify="space-between">
            <Box>
              <Title order={3}>Project Name</Title>
              <Text>HTML | SCSS | JQuery</Text>
            </Box>
            <Group justify="space-between">
              <Text>Launch</Text>
              <Text>Read</Text>
            </Group>
          </Stack>
        </Paper>
      </section>
      <Footer />
    </div>
  );
}
