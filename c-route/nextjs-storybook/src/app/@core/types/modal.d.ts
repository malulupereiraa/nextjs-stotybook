/* eslint-disable @typescript-eslint/no-explicit-any */

export interface ModalProps {
  isOpen: boolean;
  title: string;
  body: any;
  sizeModal?: any;
  hasFooter: boolean;
  footer?: any;
  center?: boolean;
  onSubmitAction?: (value: any) => void;
  onCloseAction: () => any;
}
