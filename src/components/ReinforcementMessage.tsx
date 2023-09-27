import { Box, Flex, Text, Image } from "theme-ui";

type ReinforcementMessageProps = {
  image: string;
  altText: string;
  statement: string;
};

const ReinforcementMessage = ({image, altText, statement}: ReinforcementMessageProps ) => {
  return (
    <Box>
      <Flex sx={{flexDirection: 'column', alignItems: 'center', maxWidth: '400px'}}>
        <Image sx={{
          // maxWidth: '400px', 
          // width: ['100%', '400px'], 
          aspectRatio: '1', 
          height: '100%', 
          display: 'block',
          borderRadius: '10px',
          }} 
          src={image} 
          alt={altText}
        />
        <Text pt='4' sx={{variant: 'text.subHeading', textAlign: ['center', 'start', 'justify'], fontSize: ['3', '3','4']}}>{statement}</Text>
      </Flex>
    </Box>
  );
};

export default ReinforcementMessage;
