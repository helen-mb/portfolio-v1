import { Title, Grid } from '@mantine/core';
import ProjectCard from './project-card';
import { projectContents } from '../../data/projectContent';

export default function Projects() {
  return (
    <div id="projects">
      <Title order={1} m={'1rem'}>
        Projects Library
      </Title>
      {/* Filter? */}
      <Grid p={'1rem'}>
        {projectContents.map((project) => {
          return (
            <Grid.Col span={{ base: 12, xs: 6, md: 4, xl: 3 }} key={project.id}>
              <ProjectCard
                id={project.id}
                title={project.title}
                stack={project.stack}
                url={project.url}
              />
            </Grid.Col>
          );
        })}
      </Grid>
    </div>
  );
}
