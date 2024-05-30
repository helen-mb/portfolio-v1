import {
  Box,
  Center,
  Stack,
  Title,
  Text,
  Accordion,
  List,
  Paper,
  Group,
  SimpleGrid,
  Blockquote,
} from '@mantine/core';
import {
  IconCode,
  IconReport,
  IconNotebook,
  IconUserHeart,
  IconSparkles,
} from '@tabler/icons-react';
import classes from '../../styles/About.module.css';
import HeaderNav from '../../components/HeaderNav';

export default function About() {
  return (
    <div id="about">
      <HeaderNav id="header" />
      <Box className={classes.introBox}>
        <Center>
          <Stack>
            <Text className={classes.xlIntroText}>
              A designer / developer with a special interest in user experience
            </Text>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              mollitia dolores iste. Blanditiis quos expedita sapiente ea
              assumenda incidunt corporis magnam consequuntur voluptas non
              aperiam fugit repudiandae, dignissimos numquam, atque consectetur
              neque et harum laboriosam, modi eligendi minima autem! Id quidem
              ut sapiente, corrupti officia veniam fugiat quam recusandae
              possimus?
            </Text>
          </Stack>
        </Center>
      </Box>
      <Box className={classes.relative}>
        {/* Image */}
        <Box className={classes.absolute}>
          <Accordion
            defaultValue={'skills'}
            variant="unstyled"
            className={classes.accordion}
          >
            <Accordion.Item value="skills" className={classes.accordionItem}>
              <Accordion.Control
                icon={<IconCode />}
                className={classes.accordionTitle}
              >
                Technical Skills
              </Accordion.Control>
              <Accordion.Panel className={classes.accordionContent}>
                <List>
                  <List.Item>JavaScript</List.Item>
                  <List.Item>React</List.Item>
                  <List.Item>PHP</List.Item>
                  <List.Item>JQuery</List.Item>
                  <List.Item>SCSS</List.Item>
                  <List.Item>HTML/CSS</List.Item>
                </List>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item
              value="experience"
              className={classes.accordionItem}
            >
              <Accordion.Control
                icon={<IconReport />}
                className={classes.accordionTitle}
              >
                Work Experience
              </Accordion.Control>
              <Accordion.Panel className={classes.accordionContent}>
                <Text fw={700}>Freelance Physiotherapist</Text>
                <Text>Jan 2024 - Present</Text>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item
              value="publications"
              className={classes.accordionItem}
            >
              <Accordion.Control
                icon={<IconNotebook />}
                className={classes.accordionTitle}
              >
                Publications
              </Accordion.Control>
              <Accordion.Panel className={classes.accordionContent}>
                <Paper withBorder>
                  <Text>
                    Experiences engaging in a group-based physiotherapist-led
                    exercise programme for adults living with HIV and complex
                    multimorbidity: a qualitative study
                  </Text>
                  <Group>
                    <Text fw={700}>BMJ Open | Jul 27, 2021</Text>
                    <Text>Read</Text>
                  </Group>
                </Paper>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="trivia" className={classes.accordionItem}>
              <Accordion.Control
                icon={<IconUserHeart />}
                className={classes.accordionTitle}
              >
                Other Trivia
              </Accordion.Control>
              <Accordion.Panel className={classes.accordionContent}>
                <SimpleGrid cols={2} spacing={'xs'} verticalSpacing={'xs'}>
                  <div>
                    <Text>Favourite TV Show:</Text>
                  </div>
                  <div>
                    <Text>Ted Lasso</Text>
                  </div>
                  <div>
                    <Text>Favourite Musical:</Text>
                  </div>
                  <div>
                    <Text>Hades Town</Text>
                  </div>
                  <div>
                    <Text>Favourite Author:</Text>
                  </div>
                  <div>
                    <Text>Terry Pratchett</Text>
                  </div>
                  <div>
                    <Text>Favourite Snack:</Text>
                  </div>
                  <div>
                    <Text>A fresh slice of buttery toast</Text>
                  </div>
                </SimpleGrid>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
          <Blockquote
            cite="Terry Pratchett"
            icon={<IconSparkles />}
            className={classes.blockquote}
          >
            Fantasy is an exercise bicycle for the mind. It might not take you
            anywhere, but it tones up the muscles that can. Of course, I could
            be wrong.
          </Blockquote>
        </Box>
        <div className={classes.circle}></div>
        <div className={classes.spacer}></div>
      </Box>
    </div>
  );
}
