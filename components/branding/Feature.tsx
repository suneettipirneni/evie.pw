import { Paper, Text, Title } from "@mantine/core";
import Features from "./Features";
const Feature = ({
  name,
  description,
  preview
}: typeof Features extends Array<infer U> ? U : never) => {
  return (
    <Paper shadow="md" radius="md" p="xs" withBorder>
      {preview}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10
        }}
      >
        <Title>{name}</Title>
      </div>

      <Text size="sm" style={{ minHeight: 140 }}>
        {description}
      </Text>
    </Paper>
  );
};

export default Feature;
