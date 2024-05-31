import { Title, Text, Box, Flex, Anchor, Grid } from '@mantine/core';
import { IconArrowDown } from '@tabler/icons-react';
import ProjectCard from '../../components/ProjectCard';
import HeaderNav from '../../components/HeaderNav';
import classes from '../../styles/Home.module.css';
import { projectContents } from '../../data/projectContent';

export default function Home() {
  const scrollToProjects = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div id="home">
      <Box className={classes.hero}>
        <div className={classes.circle}></div>
        <Box className={classes.title_box}>
          <Title order={1}>Helen Burger</Title>
          <Text>Designer | Developer</Text>
        </Box>
        <Anchor
          href="#featured-projects"
          onClick={(e) => scrollToProjects(e, 'featured-projects')}
          className={classes.scrollDownButton}
          id="scroll-down-button"
        >
          <IconArrowDown />
        </Anchor>
      </Box>
      <HeaderNav id="header" />
      <Box id="featured-projects" className={classes.featuredProjects}>
        <Grid p={'1rem'}>
          {projectContents.map((project) => {
            return (
              <Grid.Col span={{ base: 12, sm: 4 }} key={project.id}>
                <ProjectCard
                  id={project.id}
                  title={project.title}
                  stack={project.stack}
                  url={project.url}
                  image={project.image}
                  summary={project.summary}
                />
              </Grid.Col>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
}
