const IMAGES = {
  testImage: new URL('./testImage.png', import.meta.url).href,
  tempBackground: new URL('./tempBackground.png', import.meta.url).href,
  wumpusScreen: new URL('./hunt-the-wumpus-screenshot.png', import.meta.url)
    .href,
  takeFiveScreen: new URL('./take-five-screenshot.png', import.meta.url).href,
  wonderlandScreen: new URL(
    './visit-wonderland-screenshot.png',
    import.meta.url
  ).href,
};

export default IMAGES;
