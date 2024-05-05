import { Title, Grid } from '@mantine/core';
import ProjectCard from './project-card';

export default function Projects() {
  return (
    <div id="projects">
      <Title order={1}>Projects Library</Title>
      {/* Filter? */}
      <Grid p={'1rem'}>
        <Grid.Col span={{ base: 12, xs: 6, md: 4, xl: 3 }}>
          <ProjectCard />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 6, md: 4, xl: 3 }}>
          <ProjectCard />
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 6, md: 4, xl: 3 }}>
          <ProjectCard />
        </Grid.Col>
      </Grid>
    </div>
  );
}
