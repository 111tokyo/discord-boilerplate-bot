"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runClientReady = void 0;
const discord_js_1 = require("discord.js");
const runClientReady = (client) => {
    var _a, _b, _c;
    let activityType = discord_js_1.ActivityType.Custom;
    if (process.env.CLIENT_ACTIVITY_TYPE === "CUSTOM") {
        activityType = discord_js_1.ActivityType.Custom;
    }
    if (process.env.CLIENT_ACTIVITY_TYPE === "WATCHING") {
        activityType = discord_js_1.ActivityType.Watching;
    }
    if (process.env.CLIENT_ACTIVITY_TYPE === "COMPETING") {
        activityType = discord_js_1.ActivityType.Competing;
    }
    if (process.env.CLIENT_ACTIVITY_TYPE === "LISTENING") {
        activityType = discord_js_1.ActivityType.Listening;
    }
    if (process.env.CLIENT_ACTIVITY_TYPE === "PLAYING") {
        activityType = discord_js_1.ActivityType.Playing;
    }
    (_a = client.user) === null || _a === void 0 ? void 0 : _a.setPresence({
        activities: [
            {
                type: activityType,
                name: (_b = process.env.CLIENT_ACTIVITY_NAME) !== null && _b !== void 0 ? _b : "Ready!",
            },
        ],
        status: "online",
    });
    console.log(`✅ ${(_c = client.user) === null || _c === void 0 ? void 0 : _c.username} is now ready!`);
    return;
};
exports.runClientReady = runClientReady;
//# sourceMappingURL=clientReady.js.map