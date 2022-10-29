const toString = Object.prototype.toString

/**
 * 判断值是否未某个类型
 * @param val 类型值
 * @param type 匹配类型
 * @returns boolean
 */
export function is(val: unknown, type: string): boolean {
  return toString.call(val) === `[object ${type}]`
}

/**
 * 是否为函数类型
 * @param val 类型值
 * @returns boolean
 */
export function isFunction<T = Function>(val: unknown): val is T {
  return is(val, 'Function')
}

/**
 * 是否已定义变量
 * @param val 变量值
 * @returns boolean
 */
export const isDef = <T = unknown>(val?: T): val is T => {
  return typeof val !== 'undefined'
}

/**
 * 是否定义变量
 * @param val 变量值
 * @returns boolean
 */
export const isUnDef = <T = unknown>(val?: T): val is T => {
  return !isDef(val)
}

/**
 * 是否为对象类型
 * @param val 类型值
 * @returns boolean
 */
export const isObject = (val: any): val is Record<any, any> => {
  return val !== null && is(val, 'Object')
}

/**
 * 是否为时间类型
 * @param val 类型值
 * @returns boolean
 */
export function isDate(val: unknown): val is Date {
  return is(val, 'Date')
}

/**
 * 是否为数值类型
 * @param val 类型值
 * @returns boolean
 */
export function isNumber(val: unknown): val is number {
  return is(val, 'Number')
}

/**
 * 是否为AsyncFunction类型
 * @param val 类型值
 * @returns boolean
 */
export function isAsyncFunction<T = any>(val: unknown): val is Promise<T> {
  return is(val, 'AsyncFunction')
}

/**
 * 是否为promise类型
 * @param val 类型值
 * @returns boolean
 */
export function isPromise<T = any>(val: unknown): val is Promise<T> {
  return is(val, 'Promise') && isObject(val) && isFunction(val.then) && isFunction(val.catch)
}

/**
 * 是否为字符串
 * @param val 类型值
 * @retruns boolean
 */
export function isString(val: unknown): val is string {
  return is(val, 'String')
}

/**
 * 是否为boolean类型
 * @param val 类型值
 * @returns boolean
 */
export function isBoolean(val: unknown): val is boolean {
  return is(val, 'Boolean')
}

/**
 * 是否为数组类型
 * @param val 类型值
 * @returns boolean
 */
export function isArray(val: any): val is Array<any> {
  return val && Array.isArray(val)
}

/**
 * 是否为空类型
 * @param val 类型值
 * @returns boolean
 */
export function isNull(val: unknown): val is null {
  return val === null
}

/**
 * 判断是否是空对象
 * @param obj 变量值
 * @returns boolean
 */
export const isNullObj: (obj: {
  [key: string]: any
}) => boolean = obj => JSON.stringify(obj) === '{}'

/**
 * 判断为空也未定义值 且(&&)关系
 * @param val 变量值
 * @returns boolean
 */
export function isNullAndUnDef(val: unknown): val is null | undefined {
  return isUnDef(val) && isNull(val)
}

/**
 * 判断为空或者未定义值 或(||)关系
 * @param val 变量值
 * @returns boolean
 */
export function isNullOrUnDef(val: unknown): val is null | undefined {
  return isUnDef(val) || isNull(val)
}

/**
 * 判断给定的日期是否是工作日
 * @param date 时间类型值
 * @returns boolean
 */
export const isWeekday: (date: string | Date) => boolean = (date) => {
  return (date instanceof Date ? date : new Date(date)).getDay() % 6 !== 0
}
