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
      <section id="featured-projects">
        <Title order={2}>Featured Projects</Title>
        {/* TODO: rewrite as a loop */}
        <FeaturedProject />
        <FeaturedProject />
        <FeaturedProject />
      </section>
      <Footer />
    </div>
  );
}
