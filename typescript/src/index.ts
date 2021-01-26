import express from "express";

import { hellow } from "./routes";

const app = express();

app.get("/", hellow);

app.listen(3333, () => console.log("server started on por 3333"));
