export default interface GridBox {
    display: 'grid';
    gridTemplateColumns?: string;
    gridTemplateRows?: string;
    gridGap?: string | number;
    gridColumnGap?: string | number;
    gridRowGap?: string | number;
    justifyContent?: 'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly';
    alignItems?: 'start' | 'end' | 'center' | 'stretch';
    gridAutoFlow?: 'row' | 'column' | 'dense';
  }