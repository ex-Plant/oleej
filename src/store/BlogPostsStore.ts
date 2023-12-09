import { writable } from "svelte/store";
import type { postSlugMapType } from "../types";

export const postsSlugMap = writable<postSlugMapType>({});
