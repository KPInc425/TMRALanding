/** @jsxImportSource theme-ui */
import { Box, Link, Flex, Embed, Button } from "theme-ui";

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
    <Box py={['4','5']} className="terms-gradient">
      <Box mx="auto" sx={{ width: "80vw", textAlign: "center" }}>
        <Flex pt='4' sx={{ justifyContent: "center", gap: "5" }}>
          <Embed src="https://www.youtube.com/embed/7eZkuLe7_Dk" />
        </Flex>
        <Link href="https://app.tmra.ai" sx={{variant: 'links.default', fontSize: '5'}}>
          <Button mt='4'>  
            Play Now
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default VideoGallery;
