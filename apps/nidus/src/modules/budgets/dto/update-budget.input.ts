import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

import { CreateBudgetInput } from './create-budget.input';

@InputType()
export class UpdateBudgetInput extends PartialType(CreateBudgetInput) {
  @Field(() => Int)
  id: number;
}
