import { ModuleSettings } from "./ModuleSettings";

export interface AutoModeratorSettings extends ModuleSettings {

}

export const DefaultAutoModeratorSettings: AutoModeratorSettings = {
    enabled: false,
}