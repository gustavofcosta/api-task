import app from "./app";

const port = process.env.URL || process.env.PORT;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
