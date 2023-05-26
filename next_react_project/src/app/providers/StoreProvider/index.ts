import type {
    StateSchema, ThunkConfig, ReduxStoreWithManager,
    StateSchemaKey,
} from './config/StateSchema';
import { createReduxStore } from './config/store';
import type { AppDispatch } from './config/store';
import { StoreProvider } from './ui/StoreProvider';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    AppDispatch,
    ThunkConfig,
};

export type {
    ReduxStoreWithManager,
    StateSchemaKey,
};
