import {
  Title,
  Box,
  Stack,
  Text,
  Center,
  Anchor,
  BackgroundImage,
  Image,
  Flex,
} from '@mantine/core';
import { IconTerminal2, IconExternalLink } from '@tabler/icons-react';
import { useParams } from 'react-router-dom';
import { projectContents } from '../../data/projectContent';
import classes from '../../styles/Details.module.css';
import IMAGES from '../../images/Images';
import HeaderNav from '../../components/HeaderNav';

export default function Details() {
  const { id } = useParams();
  const projectDetails = projectContents[id];

  return (
    <div id="details">
      <HeaderNav id="header" />
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
                <Stack gap={'xs'} align="center">
                  <Title order={2}>{projectDetails.title}</Title>
                  <Text>{projectDetails.stack}</Text>
                </Stack>
              </Center>
            </div>
          </Center>
        </Stack>
      </Box>
      <Box className={classes.content}>
        <Text className={classes.xlIntroText}>{projectDetails.intro}</Text>
        <Anchor href={projectDetails.git} target="_blank">
          <IconTerminal2 /> See the Code
        </Anchor>
        <Anchor href={projectDetails.url} target="_blank">
          <IconExternalLink /> Launch the Project
        </Anchor>
        {projectDetails.content.map((contentItem, index) => {
          if (contentItem[0] === 'paragraph') {
            return <Text key={index}>{contentItem[1]}</Text>;
          } else if (contentItem[0] === 'image') {
            let imageKey = contentItem[1];
            return <Image src={IMAGES[imageKey]} key={index} />;
          }
        })}
      </Box>
    </div>
  );
}
