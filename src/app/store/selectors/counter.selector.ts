import { createSelector } from '@ngrx/store';

export const selectCount = (state: { count: number }) => state.count;

export const getCount = createSelector(selectCount, (count) => count);