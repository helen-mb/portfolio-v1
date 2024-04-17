import { Title, Text, Card, Image, Box, Group } from '@mantine/core';
import IMAGES from '../../images/Images';
import { Link } from 'react-router-dom';
import classes from '../../styles/ProjectCard.module.css';

export default function ProjectCard() {
  return (
    <Card padding="lg" radius="md" withBorder>
      <Box>
        <Title order={3}>Project Name</Title>
        <Text>HTML | SCSS | JQuery</Text>
      </Box>
      <Card.Section withBorder className={classes.container}>
        <Image src={IMAGES.testImage} height={200} alt="an image" />
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
  );
}
