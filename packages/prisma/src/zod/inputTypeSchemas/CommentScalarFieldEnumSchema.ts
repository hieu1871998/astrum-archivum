import { z } from 'zod';

export const CommentScalarFieldEnumSchema = z.enum(['id','comment','postId']);

export default CommentScalarFieldEnumSchema;
