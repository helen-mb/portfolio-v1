import { Title, Grid, Stack } from '@mantine/core';
import { projectContents } from '../../data/projectContent';
import HeaderNav from '../../components/HeaderNav';
import { useState } from 'react';
import classes from '../../styles/Library.module.css';
import ArchiveItem from './ArchiveItem';

export default function Projects() {
  const [previewImage, setPreviewImage] = useState('');
  const preview = document.getElementById('preview');
  const movePreview = (e) => {
    const mouseY = e.clientY - 200;
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

  return (
    <div id="projects">
      <HeaderNav id="header" />
      <Title order={1} m={'1rem'}>
        Projects Library
      </Title>
      {/* Filter? */}
      <Grid p={'1rem'}>
        {projectContents.map((project) => {
          return (
            <Grid.Col span={{ base: 12, xs: 6, md: 4, xl: 3 }} key={project.id}>
              {/* <ProjectCard
                id={project.id}
                title={project.title}
                stack={project.stack}
                url={project.url}
                image={project.image}
                summary={project.summary}
              /> */}
            </Grid.Col>
          );
        })}
      </Grid>
      <Stack onMouseMove={movePreview}>
        {projectContents.map((project) => {
          return (
            <ArchiveItem
              key={project.id}
              id={project.id}
              title={project.title}
              stack={project.stack}
              url={project.url}
              image={project.image}
              summary={project.summary}
              retrievePreviewImage={addPreviewImage}
            />
          );
        })}
      </Stack>
      <div id="preview" className={classes.preview}>
        <img src={previewImage} alt="a preview image" />
      </div>
    </div>
  );
}
