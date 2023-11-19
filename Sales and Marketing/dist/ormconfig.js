"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_entity_1 = require("./src/entities/users.entity");
const notification_entity_1 = require("./src/entities/notification.entity");
const analytics_entity_1 = require("./src/entities/analytics.entity");
const sales_entity_1 = require("./src/entities/sales.entity");
const customer_entity_1 = require("./src/entities/customer.entity");
const ormConfig = {
    type: 'postgres',
    database: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '12345',
    entities: [users_entity_1.Users, notification_entity_1.Notification, analytics_entity_1.Analytics, sales_entity_1.Sale, customer_entity_1.Customer],
    synchronize: true,
    schema: 'public',
};
exports.default = ormConfig;
//# sourceMappingURL=ormconfig.js.map