"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const routes_1 = __importDefault(require("./router/routes"));
const config_1 = require("./config");
const database_1 = __importDefault(require("./connection/database"));
const Application = (0, express_1.default)();
(0, database_1.default)();
Application.use((0, morgan_1.default)('dev'));
Application.use(config_1.HelmetSettings);
Application.use((0, cors_1.default)(config_1.CorsConfig));
Application.disable('x-powered-by');
Application.use((0, express_rate_limit_1.default)(config_1.LimiterConfig));
Application.use(body_parser_1.default.json({ limit: "100mb" }));
Application.use(body_parser_1.default.urlencoded({ limit: "100mb", extended: true }));
Application.use((0, express_fileupload_1.default)({ useTempFiles: true, tempFileDir: './Upload' }));
Application.use('/backend/api/rest/ufostart/server/route/fetch/axios', routes_1.default);
Application.get('/favicon.ico', (req, res) => { res.status(204).end(); });
exports.default = Application;
//# sourceMappingURL=app.js.map