import { Blockquote, Center, Container, Highlight } from "@mantine/core";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <Container>
        <Center>
          <Image
            className=""
            src="/Evie.svg"
            alt="Evie Logo"
            height={300}
            width={300}
          />
          <Blockquote
            classNames={{ body: "text-white" }}
            cite="– Tristan (lead dev of Evie)"
          >
            <Highlight
              align="center"
              highlight="you"
              highlightStyles={(theme) => ({
                backgroundImage: theme.fn.linearGradient(
                  45,
                  "#ff0044",
                  "#2ce8f5"
                ),
                fontWeight: 700,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              })}
            >
              Evie is a Discord bot that helps you build the community you want.
            </Highlight>
          </Blockquote>
        </Center>
      </Container>
    </>
  );
}
