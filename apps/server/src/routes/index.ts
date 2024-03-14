import { t } from "../trpc.js";
import { authRouter } from "./auth.js";
import { bookmarksRouter } from "./bookmarks.js";
import { collectionsRouter } from "./collections.js";
import { profileRouter } from "./profile.js";
import { statsRouter } from "./stats.js";
import { tagsRouter } from "./tags.js";

export const appRouter = t.router({
  profile: profileRouter,
  auth: authRouter,
  bookmarks: bookmarksRouter,
  collections: collectionsRouter,
  tags: tagsRouter,
  stats: statsRouter,
});
