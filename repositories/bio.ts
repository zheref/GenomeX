import Access from '../constants/Access';
import {Genome} from '../stores/bio/types';


export async function fetchBio(handle: string): Promise<Genome | null> {
  const response = await fetch(`${Access.torreBase}/bios/${handle}`);
  const json: Genome = await response.json();
  if (json.message) {
    return null;
  } else {
    return json;
  }
}