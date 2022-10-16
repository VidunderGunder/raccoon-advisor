import { hookstate } from "@hookstate/core";
import { DevTools } from "@hookstate/core";

export type GlobalState = {};
export const globalState = hookstate<GlobalState>({});
DevTools(globalState);
