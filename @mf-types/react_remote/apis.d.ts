
    export type RemoteKeys = 'react_remote/Button';
    type PackageType<T> = T extends 'react_remote/Button' ? typeof import('react_remote/Button') :any;