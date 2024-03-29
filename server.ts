import express from "express";
import path from "path";

const PORT = process.env.REACT_APP_PORT ?? 3040;

const app = express();

app.use(express.static(__dirname));
app.use(express.static(path.resolve(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT);
