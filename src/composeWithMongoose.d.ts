import {
  InputTypeComposer,
  SchemaComposer,
  TypeComposer,
} from 'graphql-compose';
import { Document, Model } from 'mongoose';
import { ConnectionSortMapOpts } from './resolvers/connection';
import {
  FilterHelperArgsOpts,
  LimitHelperArgsOpts,
  RecordHelperArgsOpts,
  SortHelperArgsOpts,
} from './resolvers/helpers';
import { PaginationResolverOpts } from './resolvers/pagination';

export type TypeConverterOpts = {
  schemaComposer?: SchemaComposer<any>;
  name?: string;
  description?: string;
  fields?: {
    only?: string[];
    remove?: string[];
  };
  inputType?: TypeConverterInputTypeOpts;
  resolvers?: false | TypeConverterResolversOpts;
};

export type TypeConverterInputTypeOpts = {
  name?: string;
  description?: string;
  fields?: {
    only?: string[];
    remove?: string[];
    required?: string[];
  };
};

export type TypeConverterResolversOpts = {
  findById?: false;
  findByIds?:
    | false
    | {
        limit?: LimitHelperArgsOpts | false;
        sort?: SortHelperArgsOpts | false;
      };
  findOne?:
    | false
    | {
        filter?: FilterHelperArgsOpts | false;
        sort?: SortHelperArgsOpts | false;
        skip?: false;
      };
  findMany?:
    | false
    | {
        filter?: FilterHelperArgsOpts | false;
        sort?: SortHelperArgsOpts | false;
        limit?: LimitHelperArgsOpts | false;
        skip?: false;
      };
  updateById?:
    | false
    | {
        record?: RecordHelperArgsOpts | false;
      };
  updateOne?:
    | false
    | {
        input?: RecordHelperArgsOpts | false;
        filter?: FilterHelperArgsOpts | false;
        sort?: SortHelperArgsOpts | false;
        skip?: false;
      };
  updateMany?:
    | false
    | {
        record?: RecordHelperArgsOpts | false;
        filter?: FilterHelperArgsOpts | false;
        sort?: SortHelperArgsOpts | false;
        limit?: LimitHelperArgsOpts | false;
        skip?: false;
      };
  removeById?: false;
  removeOne?:
    | false
    | {
        filter?: FilterHelperArgsOpts | false;
        sort?: SortHelperArgsOpts | false;
      };
  removeMany?:
    | false
    | {
        filter?: FilterHelperArgsOpts | false;
      };
  createOne?:
    | false
    | {
        record?: RecordHelperArgsOpts | false;
      };
  createMany?:
    | false
    | {
        record?: RecordHelperArgsOpts | false;
      };
  count?:
    | false
    | {
        filter?: FilterHelperArgsOpts | false;
      };
  connection?: ConnectionSortMapOpts | false;
  pagination?: PaginationResolverOpts | false;
};

export function composeWithMongoose(
  model: Model<any>,
  opts?: TypeConverterOpts,
): TypeComposer<any>;

export function prepareFields(
  tc: TypeComposer<any>,
  opts: { only?: string[]; remove?: string[] },
): void;

export function prepareInputFields(
  inputTypeComposer: InputTypeComposer,
  inputFieldsOpts: { only?: string[]; remove?: string[]; required?: string[] },
): void;

export function createInputType(
  tc: TypeComposer<any>,
  inputTypeOpts?: TypeConverterInputTypeOpts,
): void;

export function createResolvers<TDocument extends Document>(
  model: Model<TDocument>,
  tc: TypeComposer<any>,
  opts: TypeConverterResolversOpts,
): void;
