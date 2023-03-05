export type {
    Profile,
    ProfileSchema,
} from './model/types/profile.types';

export {
    profileActions,
    profileReducer,
} from './model/slice/profileSlice';

export {
    fetchProfileData,
} from './model/services/fetchProfileData/fetchProfileData';

export {
    ProfileCard,
} from './ui/ProfileCard/ProfileCard';
