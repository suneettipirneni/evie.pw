import { Card, Text, Title } from "@mantine/core";
import Features from "./Features";
const Feature = ({
  name,
  description,
  preview
}: typeof Features extends Array<infer U> ? U : never) => {
  return (
    <Card shadow="sm" style={{ minWidth: 240 }}>
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
    </Card>
  );
};

export default Feature;
