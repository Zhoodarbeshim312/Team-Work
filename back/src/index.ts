import buildServer from "./app";
import { swaggerDocs } from "./config/swagger";
const server = buildServer();
export const PORT = Number(process.env.PORT) || 3000;
const startServer = async () => {
  try {
    await new Promise<void>((resolve, reject) => {
      server
        .listen(
          {
            port: PORT,
            host: "0.0.0.0",
          },
          () => {
            console.log(`${new Date()}`);
            console.log(`🚀 Server run in: http://localhost:${PORT}`);
            swaggerDocs(server, PORT);
            resolve();
          }
        )
        .on("error", (error) => {
          reject(error);
        });
    });
  } catch (error) {
    console.log(`Server crashed: ${error}`);
    process.exit(1);
  }
};

startServer();
