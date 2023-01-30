export interface Tableprops {
  name: string;
  row: any;
  col: any;
  autoHightProp: boolean;
  showSearchProp: boolean;
  onCellClickEvent?: (clickData: any) => void;
  onBackClickEvent?: (clickData: any) => void;
}
