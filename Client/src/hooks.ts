// hooks.js
import { createTypedHooks } from 'easy-peasy';
import { AppStoreModel } from './store/Models';

const { useStoreActions, useStoreState, useStoreDispatch, useStore } = createTypedHooks<AppStoreModel>();

export  {
  useStoreActions,
  useStoreState,
  useStoreDispatch,
  useStore
}