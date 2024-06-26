import { Title, Text, Box, Flex, Anchor, Grid } from '@mantine/core';
import { IconArrowDown, IconArrowNarrowRight } from '@tabler/icons-react';
import ProjectCard from '../../components/ProjectCard';
import HeaderNav from '../../components/HeaderNav';
import classes from '../../styles/Home.module.css';
import { projectContents } from '../../data/projectContent';
import { Link } from 'react-router-dom';
import { useWindowScroll } from '@mantine/hooks';

export default function Home() {
  const cursor = document.getElementById('cursor');
  const changeCursor = () => {
    if (cursor) {
      cursor.style.opacity = '0%';
    }
  };
  const resetCursor = () => {
    if (cursor) {
      cursor.style.removeProperty('opacity');
    }
  };

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
  const [scroll, scrollTo] = useWindowScroll();

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
          onMouseEnter={changeCursor}
          onMouseLeave={resetCursor}
        >
          <IconArrowDown className={classes.scrollDownArrow} />
        </Anchor>
      </Box>
      <HeaderNav id="header" />
      <Box id="featured-projects" className={classes.featuredProjects}>
        <Flex
          className={classes.flexContainer}
          gap={{ base: 'xl', sm: 'md', lg: 'lg' }}
        >
          {projectContents.map((project) => {
            return (
              <ProjectCard
                id={project.id}
                title={project.title}
                stack={project.stack}
                url={project.url}
                image={project.image}
                summary={project.summary}
              />
            );
          })}
        </Flex>
        <Anchor
          component={Link}
          to={'library'}
          onClick={() => scrollTo({ y: 0 })}
          className={classes.internalLink}
        >
          <div className={classes.linkAccent}></div>
          <p className={classes.linkText}>View all projects</p>
          <IconArrowNarrowRight />
        </Anchor>
      </Box>
      <Box className={classes.bioSection}>
        <Text className={classes.miniBio}>
          <span style={{ fontWeight: 'bold' }}>
            Goal-Directed yet Process-Oriented
          </span>
          , I enjoy problem solving almost as much as I love a fresh slice of
          buttery toast. My interests lie in user experience and I have a
          background in physiotherapy and the performing arts.
        </Text>
        <Anchor
          component={Link}
          to={'about'}
          onClick={() => scrollTo({ y: 0 })}
          className={classes.internalLink}
        >
          <div className={classes.linkAccent}></div>
          <p className={classes.linkText}>More about me</p>
          <IconArrowNarrowRight />
        </Anchor>
      </Box>
    </div>
  );
}
