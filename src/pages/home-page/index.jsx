import { Title, Text, Box, Flex } from '@mantine/core';
import MobileFeaturedProject from './featured-project-mobile';
import DesktopFeaturedProject from './featured-project-desktop';
import classes from '../../styles/Home.module.css';
import { projectContents } from '../../data/projectContent';
import IMAGES from '../../images/Images';
import { useMouse } from '@mantine/hooks';

export default function Home() {
  const preview = document.getElementById('preview');
  const { x, y } = useMouse();
  const movePreview = () => {
    preview.style.top = `${y}px`;
    preview.style.left = `${x}px`;
  };
  return (
    <div id="home">
      <Box className={classes.hero}>
        <div className={classes.circle}></div>
        <Box className={classes.title_box}>
          <Title order={1}>Helen Burger</Title>
          <Text>Designer | Developer</Text>
        </Box>
      </Box>
      <Box id="featured-projects" hiddenFrom="sm">
        {projectContents.map((project) => {
          return (
            <MobileFeaturedProject
              key={project.id}
              id={project.id}
              title={project.title}
              stack={project.stack}
              url={project.url}
            />
          );
        })}
      </Box>
      <Flex
        visibleFrom="sm"
        gap={{ base: 'xs', md: 'md', lg: 'xl' }}
        className={classes.image_container}
        justify={'center'}
        onMouseMove={movePreview}
      >
        {projectContents.map((project) => {
          return (
            <DesktopFeaturedProject
              key={project.id}
              id={project.id}
              title={project.title}
              stack={project.stack}
              url={project.url}
            />
          );
        })}
      </Flex>
      <div id="preview" className={classes.preview}>
        <img src={IMAGES.testImage} alt="a test image" />
      </div>
    </div>
  );
}
