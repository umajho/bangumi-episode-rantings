import { Hono } from "jsr:@hono/hono";

import * as Middlewares from "../../../../middlewares/mod.ts";
import { SubjectID } from "../../../../types.ts";
import { tryExtractNumberFromCTXParams } from "../../utils.ts";
import { respondForAPI } from "../../../../responding.tsx";
import * as Queries from "../../../../operations/queries.ts";
import * as Global from "../../../../global.ts";

import episodesRouter from "./episodes.ts";

export const router = new Hono();
export default router;

router.route("/episodes/:episodeID", episodesRouter);

router.get(
  "/episodes/ratings",
  Middlewares.auth(),
  async (ctx) => {
    const subjectID = //
      tryExtractNumberFromCTXParams(ctx, "subjectID") as SubjectID;

    if (subjectID === null) {
      return respondForAPI(ctx, ["error", "BAD_REQUEST", "参数有误。"]);
    }

    const result = await Queries.querySubjectEpisodesRatings(
      Global.repo,
      await ctx.var.authenticate(Global.repo),
      { subjectID },
    );

    return respondForAPI(ctx, result);
  },
);
