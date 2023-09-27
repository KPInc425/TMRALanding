/** @jsxImportSource theme-ui */
import { Box, Text, Flex } from 'theme-ui';
import FrequentlyAskedQuestions from './FrequentlyAskedQuestions';

const TermsAndConditions = () => {
  return (
    <Box py='5'>
      <Box mx='auto' sx={{ width: ['80vw', '60vw'], fontSize: [3, 4] }}>
        <Box sx={{ textAlign: 'center' }}>
          <Text sx={{ variant: 'text.heading', fontSize: '4'}}>
            Terms and Conditions
          </Text>
        </Box>
        <Flex
          py='5'
          sx={{
            justifyContent: 'center',
            gap: '4',
            flexDirection: 'column',
            // textAlign: 'start',
          }}
        >
          <Text sx={{ variant: 'text.subHeading'}}>
            Welcome to TMRA - The Most Ridiculous Adventure ever told, our
            Choose Your Own Adventure game, powered by AI!
          </Text>
          <Text sx={{ variant: 'text.subHeading'}}>
            With TMRA, you can communicate with the AI as if you were speaking
            to a real person, asking questions, making choices, and experiencing
            the story in a whole new way. Our mission is to provide you with a
            game that is not only entertaining but also truly unique and
            thought-provoking. Through your adventures in the game, you will
            encounter diverse characters and situations that challenge your
            assumptions and expand your perspective. You will have the
            opportunity to experiment with language and prompting, storyline and
            goals, and experience the thrill of exploring different
            possibilities.
          </Text>
          <Text sx={{ variant: 'text.subHeading'}}>
            Our technology is powered by GPT-3-5, a state-of-the-art language
            model that allows us to generate complex and dynamic stories, and
            stable diffusion for unique real-time image generation.
          </Text>
          <Text sx={{ variant: 'text.subHeading'}}>
            We are always exploring additional AIs that can help us increase
            interaction and decrease costs, and we remain committed to staying
            at the forefront of technological innovation.
          </Text>
          <Text sx={{ variant: 'text.subHeading'}}>
            We are also committed to building a vibrant and active community
            around your stories, where you can share, upvote, and enjoy the
            adventures of others. However, we do not tolerate any content that
            explores the edges of indecency. No content that would not be
            suitable for an R-rated film will be allowed, and we have built
            several mechanisms to help you and us remain aware of where those
            edges are.
          </Text>
          <Text sx={{ variant: 'text.subHeading'}}>
            Thank you for choosing TMRA, and we look forward to seeing where
            your adventure takes you. With our commitment to excellence and our
            dedication to providing you with the best gaming experience
            possible, we believe that TMRA will truly be The Most Ridiculous
            Adventure ever told!
          </Text>
        </Flex>
        <FrequentlyAskedQuestions />
      </Box>
    </Box>
  );
};

export default TermsAndConditions;
