export type CellType = 'text' | 'number' | 'date' | 'boolean' | 'img';
export interface Column {
  key: string;
  header: string;
  type: CellType;
  sortable?: boolean;
}
