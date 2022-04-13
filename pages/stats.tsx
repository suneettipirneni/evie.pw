import { Center, Container, SimpleGrid, Space } from "@mantine/core";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import HeroDesc from "../components/branding/HeroDesc";
import OpenGraph from "../components/branding/util/OpenGraph";
import { SpinnyThing } from "../components/stats/SpinnyThing";
import { StatBlock } from "../components/stats/StatBlock";
import { Stats } from "../types";
import { Nico } from "../utils/nico";

const Home: NextPage = () => {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    function fetchStats() {
      Nico.get<Stats>("/stats").then(setStats).catch(console.error);
    }
    fetchStats();
    setInterval(() => {
      fetchStats();
    }, 6500);
  }, []);

  return (
    <>
      <OpenGraph
        title="Evie Stats"
        url="https://evie.pw/stats"
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
          <SpinnyThing
            percent={stats?.cpuUsage ?? 0}
            firstLine="CPU Usage"
            secondLine={`${stats?.cpuUsage ?? 0}%`}
          />
          <StatBlock firstLine="Guilds" secondLine={`${stats?.guilds ?? 0}`} />
          <StatBlock firstLine="Users" secondLine={`${stats?.users ?? 0}`} />
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Home;
