import { Center, Paper, SimpleGrid, Title } from "@mantine/core";

export function StatBlock(props: { firstLine: string; secondLine: string }) {
  return (
    <Paper shadow="md" radius="md" p="xs" withBorder>
      <Center style={{ width: 400, height: 400 }}>
        <SimpleGrid cols={1} spacing="sm">
          <Title align="center">{props.firstLine}</Title>
          <Title order={2} align="center">
            {props.secondLine}
          </Title>
        </SimpleGrid>
      </Center>
    </Paper>
  );
}
