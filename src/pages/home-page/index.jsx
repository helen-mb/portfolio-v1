import { Title, Text, Box, Flex } from '@mantine/core';
import Footer from '../../components/Footer';
import MobileFeaturedProject from './featured-project-mobile';
import DesktopFeaturedProject from './featured-project-desktop';
import classes from '../../styles/Home.module.css';

export default function Home() {
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
        {/* TODO: rewrite as a loop */}
        <MobileFeaturedProject />
        <MobileFeaturedProject />
        <MobileFeaturedProject />
      </Box>
      <Flex visibleFrom="sm" gap={'xs'} className={classes.image_container}>
        <DesktopFeaturedProject />
        <DesktopFeaturedProject />
        <DesktopFeaturedProject />
      </Flex>
      <Footer />
    </div>
  );
}
