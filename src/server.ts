import app from "./app";
import { initDB } from "./database";

const port = 3000;

initDB().then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }).catch((error) => {
    console.error('Failed to initialize database', error);
  });