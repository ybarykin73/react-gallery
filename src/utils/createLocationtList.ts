import { ILocations } from '../types/ILocations';
import { IAuthors } from '../types/IAuthors';

const createLocationtList = (arr: ILocations[]): IAuthors[] => {
  const out = arr.map((item) => {
    return { id: item.id, name: item.location };
  });

  return out;
};

export default createLocationtList;
