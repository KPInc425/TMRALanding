/** @jsxImportSource theme-ui */
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { forwardRef } from "react";
import { Text, Flex } from "theme-ui";

type AccordionProps = {
  children: React.ReactNode;
  forwardedRef?: React.ForwardedRef<HTMLDivElement>;
};

const AccordionTrigger = forwardRef(
  ({ children, ...props }: AccordionProps ) => (
    <Accordion.Header className="AccordionHeader">
      <Accordion.Trigger
        sx={{
          backgroundColor: "background",
          color: "text",
          fontSize: "4",
          fontFamily: "subHeading",
          width: "100%",
          textAlign: "start",
          fontWeight: "bold",
          padding: "3",
          borderRadius: "3",
          cursor: "pointer",
          border: 'none',
          borderBottom: '1px solid',
          borderColor: 'lightGreyText',
          "&:hover": { backgroundColor: "darkGreyText", color: "white" },
        }}
        {...props}
        // ref={forwardedRef}
      >
      <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
        {children}
        <ChevronDownIcon className="AccordionChevron" aria-hidden />
      </Flex>
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = forwardRef(
  ({ children, forwardedRef, ...props }: AccordionProps) => (
    <Accordion.Content
      {...props}
      sx={{ fontFamily: "subHeading", fontSize: "3", color: "darkGreyText" }}
      ref={forwardedRef}
    >
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  )
);

const FrequentlyAskedQuestions = () => {
  return (
    <>
      <Flex py="5" sx={{ flexDirection: "column", gap: "4", textAlign: 'center' }}>
        <Text sx={{ variant: "text.heading", fontSize: "5" }}>
          Frequently Asked Questions
        </Text>
        <Text sx={{ variant: "text.subHeading", fontSize: "3" }}>
          Please reach us at if you cannot find an answer to your question.
        </Text>
      </Flex>
      <Accordion.Root type="multiple">
        <Accordion.Item value="item-1">
          <AccordionTrigger>What does a purchase grant?</AccordionTrigger>
          <AccordionContent>
            For most purchases you will be assigned ~1000-units to use during
            the life of your game play. Most scenes cost 1-unit on average. For
            most players this will be sufficent to play through the game
            many-many times. We are still working to figure out the best way to
            ensure your satisfaction and our viability so as your account nears
            0 units you will want to consider purchasing additional units if you
            wish. You will have access to your stories, and your images, for the
            lifetime of the project. You will also have access to many of the
            additional tools we build around the story and as part of your
            post-story. As the costs and capabilities of the technology shifts
            (so far in a cheaper, faster direction) we will continue to work
            hard to keep costs low and share those savings on with our players
            by adjusting the value of a "unit" when it makes sense to do so.
            Thank you so much for taking this journey with us.{" "}
          </AccordionContent>
        </Accordion.Item>

        <Accordion.Item className="AccordionItem" value="item-2">
          <AccordionTrigger>This game is in early access</AccordionTrigger>
          <AccordionContent>
            This game is currently in the early access phase of development. As
            a player, you have the opportunity to participate in the game's
            creation and growth by providing feedback to the developers as they
            continue to update and add content. It's important to note that
            early access is not the same as pre-purchasing a game. When you
            purchase an early access game, you are buying a playable version of
            the game in its current state, with the added benefit of being able
            to access updates and future developments as they become available.
            This means that you will always have access to the game, even after
            it transitions from early access to a fully released version. It is
            best to only purchase an early access game if you're excited about
            playing it in its current state.
          </AccordionContent>
        </Accordion.Item>

        <Accordion.Item className="AccordionItem" value="item-3">
          <AccordionTrigger>This game leverages AI technology</AccordionTrigger>
          <AccordionContent >
            This game utilizes various AI technologies to provide a unique
            experience to every player with each playthrough. AI is heavily
            integrated into every aspect of the game, from its content and
            graphics to its rules engine, logic, and audio. As a result, each
            playthrough yields distinct outcomes, results, and quality, making
            it different from a product created with older rules engines.
            Therefore, embrace and enjoy the unpredictability, as it adds to the
            joy of playing the game.
          </AccordionContent>
        </Accordion.Item>

        <Accordion.Item className="AccordionItem" value="item-4">
          <AccordionTrigger>
            This game is not meant for extreme adult content
          </AccordionTrigger>
          <AccordionContent >
            This game is designed for a general audience, and any efforts to
            incorporate extreme adult content may lead to restricted access to
            free text prompts and possible account suspension. It is suitable
            for players of all ages. If you are under 13 years old, kindly have
            an adult supervise your gameplay.
          </AccordionContent>
        </Accordion.Item>

        <Accordion.Item className="AccordionItem" value="item-5">
          <AccordionTrigger>We cannot issue refunds</AccordionTrigger>
          <AccordionContent >
            We cannot issue refunds for any reason and in game credits hold no
            cash value. If you are not satisfied with your purchase please
            contact us.
          </AccordionContent>
        </Accordion.Item>

        <Accordion.Item className="AccordionItem" value="item-6">
          <AccordionTrigger>
            Consider for entertainment value only
          </AccordionTrigger>
          <AccordionContent >
            As this game relies on multiple live technologies, it's crucial to
            keep in mind that the primary purpose of this game is to offer an
            enjoyable and entertaining experience. Although we strive to
            minimize any potential issues such as unexpected story deviations,
            game outages due to vendor outages, and other unforeseen
            complications, they may still arise despite our best efforts. Rest
            assured that we will keep you informed of any issues and resolve
            them as soon as possible. We appreciate your patience and
            understanding and hope you have an amazing time with The Most
            Ridiculous Adventure (TMRA) ever told.
          </AccordionContent>
        </Accordion.Item>

        <Accordion.Item className="AccordionItem" value="item-7">
          <AccordionTrigger>How your story data is used</AccordionTrigger>
          <AccordionContent >
            To provide you with a customized experience, we gather and save your
            story data. Additionally, we utilize this data to improve our game
            and enhance your experience. You will have various chances to
            publish, share, promote, or even take to print the stories you
            create, which will provide access to those individuals who have the
            corresponding links or receive the content. Moreover, we are
            introducing more opportunities for you to present your work entirely
            or partially to a community presence where others can enjoy,
            up-vote, and promote your content. However, please refrain from
            including any personal information in your stories as we cannot
            ensure the safety of any data you share.
          </AccordionContent>
        </Accordion.Item>
      </Accordion.Root>
    </>
  );
};

export default FrequentlyAskedQuestions;
