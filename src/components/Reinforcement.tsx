/** @jsxImportSource theme-ui */
import { Box, Flex } from "theme-ui";
import ReinforcementMessage from "./ReinforcementMessage";

const images = [
  {
    imgUrl: "https://res.cloudinary.com/dxrjeyjpn/image/private/s--p0iTrIpw--/v1695764153/tmra_landing/tmra_pixel_ex1_dsoqjw.jpg",
    altText: "pixel style scene of a jungle village overlooking a river",
    statement: "From our team to you, we truly hope you enjoy the clever and fun achievements systems, the injury bleed out-effect (watch that health bar!), the companion sub-systems, and the dynamic tapestry of story, prompting, imagery, and eventually sound.",
  },
  {
    imgUrl: "https://res.cloudinary.com/dxrjeyjpn/image/private/s--7UNQM1Ye--/v1695764153/tmra_landing/tmra_comicbook_ex1_xhudkh.jpg",
    altText: "comic book style scene of a group of soldier on horseback in the desert",
    statement: "When your story is complete you can share it with others, send it to print, or even print it yourself. As for the fantastic images, hand pick some of your favorites to add to a collection and share with others, or send these too to print on canvas to create wall art or other great print products.",
  },
  {
    imgUrl: "https://res.cloudinary.com/dxrjeyjpn/image/private/s--F0NxKfkQ--/v1695764152/tmra_landing/tmra_example4_ddqvkd.jpg",
    altText: "3D animated scene of silloutte standing before a group of warriors on horseback",
    statement: "You and the AI will co-create a unique world, with a rich character backstory, dynamic goals systems, action prompting (with custom options), story progression, NPC management, and amazing images to deliver a truly unique story experience.",
  },
];

const Reinforcement = () => {
  return (
    <Box py={['4','6']}>
      <Box mx="auto" sx={{ width: "80vw" }}>
        <Flex sx={{justifyContent: 'center', gap: '5', flexDirection: ['column', 'row']}}>
          {images.map((item, index) => {
            return (
              <ReinforcementMessage
                key={index}
                image={item.imgUrl}
                altText={item.altText}
                statement={item.statement}
              />
            )
          })}
        </Flex>
      </Box>
    </Box>
  );
};

export default Reinforcement;
