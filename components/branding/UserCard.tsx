import { Card, Text } from "@mantine/core";
import type { User } from "discord.js";
import { useEffect, useState } from "react";
import { Nico } from "../../utils/nico";
export default function UserCard() {
  const [me, setMe] = useState<User | null>(null);

  useEffect(() => {
    Nico.get<User>(`/users/@me`).then(setMe);
  }, []);

  return (
    <Card shadow="sm" style={{ minWidth: 240 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10
        }}
      ></div>

      <Text size="sm" style={{ minHeight: 140 }}>
        {me ? me.username : "Loading..."}
      </Text>
    </Card>
  );
}
