"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnect = exports.connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// A URI indica o IP, a porta e BD a ser conectado
const uri = process.env.DB_URI || "";
// Salva o objeto mongoose em uma variável
const db = mongoose_1.default;
function connect() {
    // Utiliza o método connect do Mongoose para estabelecer a conexão com
    // o MongoDB, usando a URI
    db.connect(uri, {
        serverSelectionTimeoutMS: 20000,
        maxPoolSize: 10
    })
        .then(() => console.log("Conectado ao MongoDB"))
        .catch((e) => {
        console.error("Erro ao conectar ao MongoDB:", e.message);
    });
    // o sinal SIGINT é disparado ao encerrar a aplicação, geralmente, usando Crtl+C
    process.on("SIGINT", () => __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("Conexão com o MongoDB fechada");
            yield mongoose_1.default.connection.close();
            process.exit(0);
        }
        catch (error) {
            console.error("Erro ao fechar a conexão com o MongoDB:", error);
            process.exit(1);
        }
    }));
}
exports.connect = connect;
function disconnect() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Conexão com o MongoDB encerrada");
        yield db.disconnect();
    });
}
exports.disconnect = disconnect;
