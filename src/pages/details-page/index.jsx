import {
  Title,
  Box,
  Stack,
  Text,
  Center,
  BackgroundImage,
  Image,
  Flex,
} from '@mantine/core';
import classes from '../../styles/Details.module.css';
import IMAGES from '../../images/Images';

export default function Details() {
  return (
    <div id="details">
      <Box className={classes.hero}>
        <Box className={classes.container}>
          {/* <BackgroundImage
            radius={'xs'}
            src={IMAGES.tempBackground}
            className={classes.backgroundImage}
          /> */}
        </Box>
        <Stack className={classes.heroContent}>
          <Center h={'100vh'}>
            <div className={classes.circle}>
              <Center>
                <Stack gap={'xs'}>
                  <Title order={2}>Project Title</Title>
                  <Text>Project Subtitle</Text>
                </Stack>
              </Center>
            </div>
          </Center>
        </Stack>
      </Box>
      <Title order={2}>Project Title</Title>
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Necessitatibus, numquam nam at corporis, atque delectus ab quo minima
        tenetur adipisci rerum consequatur eius amet inventore, omnis tempore?
        Magnam, harum tempore reprehenderit modi ex, inventore consectetur
        beatae similique explicabo illo voluptatibus. Non, corrupti, sint
        officia minima pariatur quod sapiente praesentium repellendus illum ad
        aliquam sed dolor!
      </Text>
    </div>
  );
}
