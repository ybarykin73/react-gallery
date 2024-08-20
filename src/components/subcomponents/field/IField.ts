export interface IProps {
  type: 'text' | 'number';
  placeholder: string;
  handleCahge: (str: string) => void;
}
