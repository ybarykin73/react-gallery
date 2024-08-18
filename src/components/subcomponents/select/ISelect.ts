import { IAuthors } from '../../../types/IAuthors';

export interface IProps {
  list: IAuthors[];
  name: string;
  changeSelect: (n: number) => void;
}
