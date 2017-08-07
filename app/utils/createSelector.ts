import { any, ap, apply, memoize, of, pipe } from 'ramda';

const bad: any = (fns): boolean => any(fn => typeof fn !== 'function')(fns);
const fnsOrArray: any = (fns): any[] => Array.isArray(fns[0]) ? fns[0] : fns.slice(0, -1);

const createSelector = (...fns) => (state: object, props: any) => {
  const preFns: any[] = fnsOrArray(fns)
    .map(
      fn => stateAndProps => fn.apply(null, stateAndProps)
    );

  if (bad(preFns)) {
    return () => {
      throw new Error('Input-selectors to be functions');
    };
  }

  const lastFn: () => void = memoize(fns[fns.length - 1]);

  return pipe(of, ap(preFns), apply(lastFn))([state, props]);
};

export { createSelector };
