import { Title } from '@mantine/core';
import Footer from '../../components/Footer';
import ProjectCard from './project-card';

export default function Projects() {
  return (
    <div id="projects">
      <Title order={1}>Projects Library</Title>
      {/* Filter? */}
      <ProjectCard />
      <Footer />
    </div>
  );
}
