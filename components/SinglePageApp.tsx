import { ComponentPropsWithoutRef, forwardRef, useState } from "react";
import {
  BackgroundImage,
  Box,
  BoxProps,
  Center,
  Image,
  Text,
} from "@mantine/core";
import { css } from "styled-components";

type Props = {
  // Component props here
} & Omit<ComponentPropsWithoutRef<"div">, "children"> &
  BoxProps;

/**
 * Use an open source api to get a fortune
 */
async function getFortune() {
  const url = "https://api.adviceslip.com/advice";
  const fortune: string = await fetch(url)
    .then((res) => res.json())
    .then((res) => res.slip.advice);
  return fortune;
}

export default forwardRef<HTMLDivElement, Props>(function SinglePageApp(
  { ...props },
  ref
) {
  // const words = "I will tell you your future";
  const [words, setWords] = useState(
    "I will give you the best advice ever... Ask me!"
  );

  // Your logic
  async function handleClick() {
    // Do something
    setWords(await getFortune());
  }

  return (
    <Box ref={ref} {...props}>
      <h1>Advice Raccoon</h1>
      <Box
        css={css`
          position: relative;
        `}
      >
        <Center
          css={css`
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: -1;
          `}
        >
          <Image
            width={300}
            src="https://cdn.pixabay.com/photo/2014/04/03/09/59/bubble-309546_1280.png"
            alt="Speech bubble"
          />
        </Center>
        <Center
          css={css`
            height: 300px;
            position: relative;
            bottom: 30px;
          `}
        >
          <Text
            css={css`
              max-width: 250px;
            `}
          >
            {words}
          </Text>
        </Center>
      </Box>

      <button onClick={handleClick}>Ask me</button>
      <Image
        src="https://cdn.pixabay.com/photo/2016/07/11/20/08/raccoon-1510500_1280.png"
        radius="md"
        width={300}
        alt="Raccoon"
      />
    </Box>
  );
});
