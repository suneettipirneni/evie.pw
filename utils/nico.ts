export class Nico {
  public static get<type>(route: string, options?: RequestInit): Promise<any> {
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

  public static post<type>(route: string, body?: Object): Promise<any> {
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
