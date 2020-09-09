// This file has been auto-generated by Warthog.  Do not update directly as it
// will be re-written.  If you need to change this file, update models or add
// new TypeGraphQL objects
// prettier-ignore
// @ts-ignore
import { DateResolver as Date } from 'graphql-scalars';
// prettier-ignore
// @ts-ignore
import { GraphQLID as ID } from 'graphql';
// prettier-ignore
// @ts-ignore
import { ArgsType, Field as TypeGraphQLField, Float, InputType as TypeGraphQLInputType, Int } from 'type-graphql';
// prettier-ignore
// @ts-ignore
import { registerEnumType, GraphQLISODateTime as DateTime } from "type-graphql";

// prettier-ignore
// @ts-ignore eslint-disable-next-line @typescript-eslint/no-var-requires
const { GraphQLJSONObject } = require('graphql-type-json');
// prettier-ignore
// @ts-ignore
import { BaseWhereInput, JsonObject, PaginationArgs, DateOnlyString, DateTimeString } from '../../../src';

import { StringEnum } from "../src/user.model";

// @ts-ignore
import { User } from "../src/user.model";

export enum UserOrderByEnum {
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",

  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",

  deletedAt_ASC = "deletedAt_ASC",
  deletedAt_DESC = "deletedAt_DESC",

  firstName_ASC = "firstName_ASC",
  firstName_DESC = "firstName_DESC",

  lastName_ASC = "lastName_ASC",
  lastName_DESC = "lastName_DESC",

  email_ASC = "email_ASC",
  email_DESC = "email_DESC",

  age_ASC = "age_ASC",
  age_DESC = "age_DESC",

  isRequired_ASC = "isRequired_ASC",
  isRequired_DESC = "isRequired_DESC",

  stringEnumField_ASC = "stringEnumField_ASC",
  stringEnumField_DESC = "stringEnumField_DESC",

  rating_ASC = "rating_ASC",
  rating_DESC = "rating_DESC"
}

registerEnumType(UserOrderByEnum, {
  name: "UserOrderByInput"
});

@TypeGraphQLInputType()
export class UserWhereInput {
  @TypeGraphQLField(() => ID, { nullable: true })
  id_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  id_in?: string[];

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_eq?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_lt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_lte?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_gt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  createdAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  createdById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  createdById_in?: string[];

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_eq?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_lt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_lte?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_gt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  updatedAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  updatedById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  updatedById_in?: string[];

  @TypeGraphQLField({ nullable: true })
  deletedAt_all?: Boolean;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_eq?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_lt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_lte?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_gt?: Date;

  @TypeGraphQLField(() => DateTime, { nullable: true })
  deletedAt_gte?: Date;

  @TypeGraphQLField(() => ID, { nullable: true })
  deletedById_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  deletedById_in?: string[];

  @TypeGraphQLField({ nullable: true })
  firstName_eq?: string;

  @TypeGraphQLField({ nullable: true })
  firstName_contains?: string;

  @TypeGraphQLField({ nullable: true })
  firstName_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  firstName_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  firstName_in?: string[];

  @TypeGraphQLField({ nullable: true })
  lastName_eq?: string;

  @TypeGraphQLField({ nullable: true })
  lastName_contains?: string;

  @TypeGraphQLField({ nullable: true })
  lastName_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  lastName_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  lastName_in?: string[];

  @TypeGraphQLField({ nullable: true })
  email_eq?: string;

  @TypeGraphQLField({ nullable: true })
  email_contains?: string;

  @TypeGraphQLField({ nullable: true })
  email_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  email_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  email_in?: string[];

  @TypeGraphQLField(() => Int, { nullable: true })
  age_eq?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  age_gt?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  age_gte?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  age_lt?: number;

  @TypeGraphQLField(() => Int, { nullable: true })
  age_lte?: number;

  @TypeGraphQLField(() => [Int], { nullable: true })
  age_in?: number[];

  @TypeGraphQLField(() => Boolean, { nullable: true })
  isRequired_eq?: Boolean;

  @TypeGraphQLField(() => [Boolean], { nullable: true })
  isRequired_in?: Boolean[];

  @TypeGraphQLField(() => StringEnum, { nullable: true })
  stringEnumField_eq?: StringEnum;

  @TypeGraphQLField(() => [StringEnum], { nullable: true })
  stringEnumField_in?: StringEnum[];

  @TypeGraphQLField(() => Float, { nullable: true })
  rating_eq?: number;

  @TypeGraphQLField(() => Float, { nullable: true })
  rating_gt?: number;

  @TypeGraphQLField(() => Float, { nullable: true })
  rating_gte?: number;

  @TypeGraphQLField(() => Float, { nullable: true })
  rating_lt?: number;

  @TypeGraphQLField(() => Float, { nullable: true })
  rating_lte?: number;

  @TypeGraphQLField(() => [Float], { nullable: true })
  rating_in?: number[];
}

@TypeGraphQLInputType()
export class UserWhereUniqueInput {
  @TypeGraphQLField(() => ID, { nullable: true })
  id?: string;

  @TypeGraphQLField(() => String, { nullable: true })
  email?: string;
}

@TypeGraphQLInputType()
export class UserCreateInput {
  @TypeGraphQLField()
  firstName!: string;

  @TypeGraphQLField({ nullable: true })
  lastName?: string;

  @TypeGraphQLField()
  email!: string;

  @TypeGraphQLField()
  age!: number;

  @TypeGraphQLField()
  isRequired!: boolean;

  @TypeGraphQLField(() => StringEnum)
  stringEnumField!: StringEnum;

  @TypeGraphQLField()
  rating!: number;
}

@TypeGraphQLInputType()
export class UserUpdateInput {
  @TypeGraphQLField({ nullable: true })
  firstName?: string;

  @TypeGraphQLField({ nullable: true })
  lastName?: string;

  @TypeGraphQLField({ nullable: true })
  email?: string;

  @TypeGraphQLField({ nullable: true })
  age?: number;

  @TypeGraphQLField({ nullable: true })
  isRequired?: boolean;

  @TypeGraphQLField(() => StringEnum, { nullable: true })
  stringEnumField?: StringEnum;

  @TypeGraphQLField({ nullable: true })
  rating?: number;
}

@ArgsType()
export class UserWhereArgs extends PaginationArgs {
  @TypeGraphQLField(() => UserWhereInput, { nullable: true })
  where?: UserWhereInput;

  @TypeGraphQLField(() => UserOrderByEnum, { nullable: true })
  orderBy?: UserOrderByEnum;
}

@ArgsType()
export class UserCreateManyArgs {
  @TypeGraphQLField(() => [UserCreateInput])
  data!: UserCreateInput[];
}

@ArgsType()
export class UserUpdateArgs {
  @TypeGraphQLField() data!: UserUpdateInput;
  @TypeGraphQLField() where!: UserWhereUniqueInput;
}
