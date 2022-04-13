import {
  Blockquote,
  Container,
  Highlight,
  Paper,
  SimpleGrid
} from "@mantine/core";
import Image from "next/image";
import InviteButton from "./InviteButton";

export default function Hero() {
  return (
    <Paper shadow="md" radius="md" p="xs" withBorder>
      <Container>
        <SimpleGrid cols={2}>
          <Image
            className=""
            src="/Evie.svg"
            alt="Evie Logo"
            height={300}
            width={300}
          />
          <div>
            <SimpleGrid cols={1} spacing="xl">
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
                  Evie is a Discord bot that helps you build the community you
                  want.
                </Highlight>
              </Blockquote>
              <InviteButton />
            </SimpleGrid>
          </div>
        </SimpleGrid>
      </Container>
    </Paper>
  );
}
