import { IGallery } from '../types/IGallery';
import { IAuthors } from '../types/IAuthors';
import { ILocations } from '../types/ILocations';
import { IPaintings } from '../types/IPaintings';

const createGalleryCard = (
  data: IPaintings[],
  authors: IAuthors[],
  loations: ILocations[]
): IGallery[] => {
  return data.map((item) => {
    const { authorId } = item;
    const { locationId } = item;
    const author = authors.find((el) => el.id === authorId);
    const location = loations.find((el) => el.id === locationId);

    return {
      ...item,
      author: author?.name || 'Not known',
      location: location?.location || 'Not known',
    };
  });
};

export default createGalleryCard;
