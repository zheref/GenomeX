import Access from '../constants/Access';
import {Opportunity} from '../stores/jobs/types';


export async function fetchBestChances(handle: string): Promise<Opportunity[] | null> {
  const response = await fetch(`${Access.herokuBase}/bestChances/${handle}`);
  return await response.json() as Opportunity[];
}