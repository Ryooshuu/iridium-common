import { LanguageCode } from "../intl/LanguageCode";

export interface GuildSettings {
    language: LanguageCode
}

export const DefaultGuildSettings: GuildSettings = {
    language: "en-US"
};