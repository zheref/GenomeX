import Access from '../constants/Access';
import {Genome} from '../stores/bio/types';


export async function fetchBio(handle: string): Promise<Genome | null> {
  const response = await fetch(`${Access.torreBase}/bios/${handle}`);
  return await response.json();
}