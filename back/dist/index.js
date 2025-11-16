"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = void 0;
const app_1 = __importDefault(require("./app"));
const swagger_1 = require("./config/swagger");
const server = (0, app_1.default)();
exports.PORT = Number(process.env.PORT) || 3000;
const startServer = async () => {
    try {
        await new Promise((resolve, reject) => {
            server
                .listen({
                port: exports.PORT,
                host: "0.0.0.0",
            }, () => {
                console.log(`${new Date()}`);
                console.log(`🚀 Server run in: http://localhost:${exports.PORT}`);
                (0, swagger_1.swaggerDocs)(server, exports.PORT);
                resolve();
            })
                .on("error", (error) => {
                reject(error);
            });
        });
    }
    catch (error) {
        console.log(`Server crashed: ${error}`);
        process.exit(1);
    }
};
startServer();
//# sourceMappingURL=index.js.map