// ##### Written by Yassine BOUKHLA
// Please note that authMiddleware is deprecated by clerk
// I used it just to follow up with the tutorial

import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware();

export const config = {
  matcher: ["/((?!.*..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
