import _get from 'lodash/get';
import _set from 'lodash/set';
import { tuple } from 'src/utils';

export const IRules = tuple(
  'required',
  'mustBeNumber',
  'mustBeString',
  'cellphone',
  'email',
  'matchPassword',
  'minValue',
  'maxValue',
);

const validate: any[string] = {
  required: (value: string | number) => (value ? undefined : 'This field is required'),

  mustBeNumber: (value: number) => (isNaN(value) ? 'Must be a number' : undefined),

  mustBeString: (value: any) =>
    isNaN(value) || typeof value !== 'string' ? 'Must be a string' : undefined,

  cellphone: (value: string) =>
    /\+?([ -]?\d+)+|\(\d+\)([ -]\d+)/.test(value)
      ? undefined
      : 'You have entered an invalid cellphone number',

  email: (value: string) =>
    /\S+@\S+\.\S+/.test(value) ? undefined : 'You have entered an invalid e-mail address',

  matchPassword: (pass1: string) => (pass2: string) =>
    pass1 !== pass2 ? 'Password you entered do not match' : undefined,

  minValue: (min: number) => (value: number) =>
    isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`,

  maxValue: (max: number) => (value: number) =>
    isNaN(value) || value <= max ? undefined : `Should be less than ${max}`,
};

export const metaError = (meta: any | { error: string; touched: any }) =>
  meta.error && meta.touched;

export const validators = (errors: object, values: object) => (
  key: string,
  rule: typeof IRules[number],
) => {
  const errorMessage = validate[rule](_get(values, key, null)) || undefined;
  _set(errors, key, errorMessage);
};
