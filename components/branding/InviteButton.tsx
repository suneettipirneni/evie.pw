import { Button } from "@mantine/core";
import router from "next/router";

export default function InviteButton() {
  return (
    <Button
      onClick={() => {
        router.push("/invite");
      }}
      color="grape"
    >
      Invite Evie
    </Button>
  );
}
