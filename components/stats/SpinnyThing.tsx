import { Paper, RingProgress, Title } from "@mantine/core";

export function SpinnyThing(props: {
  firstLine: string;
  secondLine: string;
  percent: number;
}) {
  return (
    <Paper shadow="md" radius="md" p="xs" withBorder>
      <RingProgress
        size={400}
        thickness={18}
        roundCaps
        sections={[{ value: props.percent, color: "grape" }]}
        label={
          <>
            <Title align="center">{props.firstLine}</Title>
            <Title order={2} align="center">
              {props.secondLine}
            </Title>
          </>
        }
      />
    </Paper>
  );
}
