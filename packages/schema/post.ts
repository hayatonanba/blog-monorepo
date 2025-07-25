import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createSelectSchema } from "drizzle-zod";
import { createInsertSchema } from "drizzle-zod";

export const posts = sqliteTable("posts", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  body: text("body").notNull(),
});

export const postInsertSchema = createInsertSchema(posts);
export const postSelectSchema = createSelectSchema(posts);
export type Post = typeof postSelectSchema.type;