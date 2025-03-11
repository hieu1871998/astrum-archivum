import { Field, Int,ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Budget {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
