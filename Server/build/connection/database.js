"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GetConnection;
const mongoose_1 = require("mongoose");
const config_1 = require("../config");
function GetConnection() {
    (0, mongoose_1.connect)(config_1.ConnectionDB).then(() => {
        (0, config_1.Database)('connection established');
    }).catch((error) => {
        (0, config_1.Error)('connection failed', error);
    });
}
//# sourceMappingURL=database.js.map