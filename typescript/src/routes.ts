import { Request, Response } from "express";

import CreateUser from "./services/CreateUser";
export function hellow(request: Request, response: Response) {
  const user = CreateUser({
    name: "Pedro",
    email: "pedro1997@gmail.com",
    password: "1232",
    tech: ["react", "java"
{title: 'javajava', experience: 10}],
  });
  return response.json({ message: "hellow" });
}
