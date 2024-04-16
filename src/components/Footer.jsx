import { Center, Stack, Text } from '@mantine/core';
import classes from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer>
      <Center>
        <Stack align="center" gap={'xs'}>
          <Text>email me</Text>
          <Text>or find me online!</Text>
        </Stack>
      </Center>
    </footer>
  );
}
