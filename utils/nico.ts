import { NotificationsContextProps } from "@mantine/notifications/lib/types";
import { APILogin } from "../types";

export class Nico {
  public static get<type>(route: string, options?: RequestInit): Promise<type> {
    return new Promise((resolve, reject) => {
      fetch(`${process.env.API_URL}${route}`, {
        ...options,
        credentials: "include"
      })
        .then((res) => res.json())
        .then((res) => resolve(res as type))
        .catch((err) => reject(err));
    });
  }

  public static async logOut(
    setUser: (user: APILogin | null) => void,
    notifications?: NotificationsContextProps
  ): Promise<void> {
    await Nico.post("/oauth/logout");
    setUser(null);
    notifications &&
      notifications.showNotification({
        color: "grape",
        title: "Logged out",
        message: "You have been logged out"
      });
  }

  public static post<type>(route: string, body?: Object): Promise<type> {
    return new Promise((resolve, reject) => {
      fetch(`${process.env.API_URL}${route}`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(body)
      })
        .then((res) => res.json())
        .then((res) => resolve(res as type))
        .catch((err) => reject(err));
    });
  }
}
