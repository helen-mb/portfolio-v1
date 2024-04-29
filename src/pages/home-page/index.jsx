import { Title, Text, Box } from '@mantine/core';
import Footer from '../../components/Footer';
import FeaturedProject from './featured-project';
import classes from '../../styles/Home.module.css';

export default function Home() {
  return (
    <div id="home">
      <Box className={classes.hero}>
        <div className={classes.circle}></div>
        <Title order={1}>Helen Burger</Title>
        <Text>Designer | Developer</Text>
      </Box>
      <Box id="featured-projects">
        {/* TODO: rewrite as a loop */}
        <FeaturedProject />
        <FeaturedProject />
        <FeaturedProject />
      </Box>
      <Footer />
    </div>
  );
}
