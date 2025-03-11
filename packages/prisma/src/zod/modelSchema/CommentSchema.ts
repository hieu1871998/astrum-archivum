import { z } from 'zod';

/////////////////////////////////////////
// COMMENT SCHEMA
/////////////////////////////////////////

export const CommentSchema = z.object({
  id: z.string(),
  comment: z.string(),
  postId: z.string(),
})

export type Comment = z.infer<typeof CommentSchema>

export default CommentSchema;
