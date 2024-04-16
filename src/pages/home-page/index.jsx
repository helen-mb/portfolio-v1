import { Title, Text } from '@mantine/core';
import Footer from '../../components/Footer';
import FeaturedProject from './featured-project';

export default function Home() {
  return (
    <div id="home">
      <Title order={1}>Helen Burger</Title>
      <Text>Designer | Developer</Text>
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
