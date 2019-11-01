import { UserConfig } from '@hint/utils';

export type IssueData = {
    errorMessage?: string;
    configs?: Array<UserConfig>;
    errorType?: 'crash' | 'stderr' | 'timeout';
    log?: string;
    scan: string;
    url: string;
};
