import { Center, Container, SimpleGrid, Space } from "@mantine/core";
import type { NextPage } from "next";
import Feature from "../components/branding/Feature";
import Features from "../components/branding/Features";
import HeroDesc from "../components/branding/HeroDesc";
import OpenGraph from "../components/branding/util/OpenGraph";

const Home: NextPage = () => {
  return (
    <>
      <OpenGraph
        title="Evie"
        url="https://evie.pw/"
        image="https://evie.pw/assets/EvieLogo.png"
        description="Evie is a Discord bot that helps you build the community you want."
      />
      <Container>
        <Center>
          <SimpleGrid cols={1} spacing="sm">
            <HeroDesc />
          </SimpleGrid>
          <Space h="md" />
        </Center>
        <SimpleGrid cols={2} spacing="sm">
          {Features.map(({ name, description, preview }) => (
            <Feature
              name={name}
              description={description}
              preview={preview}
              key={name}
            />
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Home;
