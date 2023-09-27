/** @jsxImportSource theme-ui */
import { Box, Link, Flex, Embed } from "theme-ui";

// const videos = [
//   {
//     videoUrl: "https://youtu.be/7eZkuLe7_Dk",
//     statement: "This is a statement",
//   },
//   {
//     videoUrl: "https://youtu.be/7eZkuLe7_Dk",
//     statement: "This is a statement",
//   },
//   {
//     videoUrl: "https://youtu.be/7eZkuLe7_Dk",
//     statement: "This is a statement",
//   },
// ];

const VideoGallery = () => {
  return (
    <Box py={['4','6']} sx={{backgroundColor: 'text'}}>
      <Box mx="auto" sx={{ width: "80vw", textAlign: "center" }}>
        <Link href="https://app.tmra.ai" sx={{variant: 'links.default', fontSize: '5'}}>Play Now</Link>
        <Flex pt='4' sx={{ justifyContent: "center", gap: "5" }}>
          <Embed src="https://www.youtube.com/embed/7eZkuLe7_Dk" />
        </Flex>
      </Box>
    </Box>
  );
};

export default VideoGallery;
