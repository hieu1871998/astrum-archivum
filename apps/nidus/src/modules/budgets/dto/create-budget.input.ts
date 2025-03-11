import { Field,InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateBudgetInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
