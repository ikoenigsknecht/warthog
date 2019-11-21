// This file has been auto-generated by Warthog.  Do not update directly as it
// will be re-written.  If you need to change this file, update models or add
// new TypeGraphQL objects
import {
  ArgsType,
  Field as TypeGraphQLField,
  InputType as TypeGraphQLInputType
} from "type-graphql";
import { registerEnumType } from "type-graphql";

import { BaseWhereInput, PaginationArgs } from "../../../../";

export enum CreateIDTestOrderByEnum {
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",

  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",

  deletedAt_ASC = "deletedAt_ASC",
  deletedAt_DESC = "deletedAt_DESC",

  stringField_ASC = "stringField_ASC",
  stringField_DESC = "stringField_DESC"
}

registerEnumType(CreateIDTestOrderByEnum, {
  name: "CreateIDTestOrderByInput"
});

@TypeGraphQLInputType()
export class CreateIDTestWhereInput extends BaseWhereInput {
  @TypeGraphQLField({ nullable: true })
  stringField_eq?: string;

  @TypeGraphQLField({ nullable: true })
  stringField_contains?: string;

  @TypeGraphQLField({ nullable: true })
  stringField_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  stringField_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  stringField_in?: string[];
}

@TypeGraphQLInputType()
export class CreateIDTestWhereUniqueInput {
  @TypeGraphQLField(() => String)
  id?: string;
}

@TypeGraphQLInputType()
export class CreateIDTestCreateInput {
  @TypeGraphQLField({ nullable: true })
  id?: string;

  @TypeGraphQLField()
  stringField!: string;
}

@TypeGraphQLInputType()
export class CreateIDTestUpdateInput {
  @TypeGraphQLField({ nullable: true })
  stringField?: string;
}

@ArgsType()
export class CreateIDTestWhereArgs extends PaginationArgs {
  @TypeGraphQLField(() => CreateIDTestWhereInput, { nullable: true })
  where?: CreateIDTestWhereInput;

  @TypeGraphQLField(() => CreateIDTestOrderByEnum, { nullable: true })
  orderBy?: CreateIDTestOrderByEnum;
}

@ArgsType()
export class CreateIDTestCreateManyArgs {
  @TypeGraphQLField(() => [CreateIDTestCreateInput])
  data!: CreateIDTestCreateInput[];
}

@ArgsType()
export class CreateIDTestUpdateArgs {
  @TypeGraphQLField() data!: CreateIDTestUpdateInput;
  @TypeGraphQLField() where!: CreateIDTestWhereUniqueInput;
}
