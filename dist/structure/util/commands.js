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
Object.defineProperty(exports, "__esModule", { value: true });
exports.installCommands = void 0;
require("dotenv").config();
const installCommands = (commands) => __awaiter(void 0, void 0, void 0, function* () {
    const endpoint = `applications/${process.env.APPLICATION_ID}/commands`;
    try {
        yield discordRequest(endpoint, { method: "PUT", body: commands });
    }
    catch (err) {
        console.error(err);
    }
});
exports.installCommands = installCommands;
const discordRequest = (endpoint, options) => __awaiter(void 0, void 0, void 0, function* () {
    const url = "https://discord.com/api/v10/" + endpoint;
    if (options.body)
        options.body = JSON.stringify(options.body);
    const res = yield fetch(url, Object.assign({ headers: {
            Authorization: `Bot ${process.env.APPLICATION_TOKEN}`,
            "Content-Type": "application/json; charset=UTF-8",
            "User-Agent": "DiscordBot (https://github.com/discord/discord-example-app, 1.0.0)",
        } }, options));
    if (!res.ok) {
        const data = yield res.json();
        console.log(res.status);
        throw new Error(JSON.stringify(data));
    }
    return res;
});
//# sourceMappingURL=commands.js.map