import { Title, Text, Box, Flex, Anchor } from '@mantine/core';
import { IconArrowDown } from '@tabler/icons-react';
import MobileFeaturedProject from './featured-project-mobile';
import DesktopFeaturedProject from './featured-project-desktop';
import HeaderNav from '../../components/HeaderNav';
import classes from '../../styles/Home.module.css';
import { projectContents } from '../../data/projectContent';
import { useState } from 'react';

export default function Home() {
  const [previewImage, setPreviewImage] = useState('');
  const preview = document.getElementById('preview');
  const movePreview = (e) => {
    const mouseY = e.clientY - 220;
    const mouseX = e.clientX - 150;
    if (preview) {
      preview.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    }
  };
  window.addEventListener('mousemove', movePreview);
  const addPreviewImage = (image) => {
    setPreviewImage(image);
  };
  const removePreviewImage = () => {
    setPreviewImage('');
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
        <Box hiddenFrom="sm">
          {projectContents.map((project) => {
            return (
              <MobileFeaturedProject
                key={project.id}
                id={project.id}
                title={project.title}
                stack={project.stack}
                url={project.url}
                image={project.image}
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
                image={project.image}
                retrievePreviewImage={addPreviewImage}
              />
            );
          })}
        </Flex>
        <div id="preview" className={classes.preview}>
          <img src={previewImage} alt="a preview image" />
        </div>
      </Box>
    </div>
  );
}
