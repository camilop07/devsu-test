export interface ApiGetResponse {
  data: Datum[] | [];
}

export interface ApiResponse {
  data: Datum;
  message: string;
}

export interface Datum {
  id: string;
  name: string;
  description: string;
  logo: string;
  date_release: Date;
  date_revision: Date;
}

export interface ProductItemProps {
  item: Partial<Datum>;
  idx: number;
  onPress: () => void;
}

export interface ModalProps {
  onConfirm?: () => void;
  onClose?: () => void;
  showModal: boolean;
  item?: Datum;
}

export interface DetailsRowProps {
  name: string;
  value: string;
}

export interface ButtonProps {
  label: string;
  onPress(item?: Datum): void;
  type: buttonTypes;
  size?: buttonSizes;
  disabled?: boolean;
}

export type buttonTypes = 'primary' | 'danger' | 'ghost';
export type buttonSizes = 'md' | 'full' | 'sm';
export type Origin = 'Home' | 'Favorite';
