import { Center, Container, SimpleGrid } from "@mantine/core";
import type { NextPage } from "next";
import Feature from "../components/branding/Feature";
import Features from "../components/branding/Features";
import HeroDesc from "../components/branding/HeroDesc";
import InviteButton from "../components/branding/InviteButton";
import UserCard from "../components/branding/UserCard";

const Home: NextPage = () => {
  return (
    <Container>
      <Center>
        <SimpleGrid cols={1} spacing="sm">
          <UserCard />
          <HeroDesc />
          <InviteButton />
        </SimpleGrid>
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
  );
};

export default Home;
