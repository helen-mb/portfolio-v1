import { Title, Text, Card, Image, Box, Group } from '@mantine/core';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

export default function Projects() {
  return (
    <div id="projects">
      <Title order={1}>Projects Library</Title>
      {/* Filter? */}
      <Card padding="lg" radius="md" withBorder>
        <Box>
          <Title order={3}>Project Name</Title>
          <Text>HTML | SCSS | JQuery</Text>
        </Box>
        <Card.Section withBorder>
          <Image src="" height={160} alt="an image" />
        </Card.Section>
        <Box>
          <Text c={'dimmed'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sit
            ullam, voluptatibus magnam obcaecati eos, nemo odit iusto sed soluta
            nesciunt ipsum veniam modi placeat!
          </Text>
          <Group justify="space-between">
            <Text>Launch</Text>
            <Link to={'../details'}>Read</Link>
          </Group>
        </Box>
      </Card>
      <Footer />
    </div>
  );
}
