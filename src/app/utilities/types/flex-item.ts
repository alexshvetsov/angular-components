export default interface FlexItem {
    order?: number;
    flexGrow?: number;
    flexShrink?: number;
    flexBasis?: string | number;
    alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  }