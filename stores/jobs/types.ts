import {Org} from '../bio/types';

export interface JobsState {
    lastFetched: Date | null;
    opportunities: Opportunity[];
    isLoading: boolean;
}

export interface OpportunityCompensationData {
    code: string;
    currency: string;
    minAmount: number;
    maxAmount: number;
    periodicity: string;
}

export interface OpportunityCompensation {
    data: OpportunityCompensationData;
    visible: boolean;
}

export interface OpportunitySkill {
    name: string;
    experience: string;
}

export interface Opportunity {
    id: string;
    objective: string;
    type: string;
    organizations: Org[];
    compensation: OpportunityCompensation;
    skills: OpportunitySkill[];
    membersCount: number;
}