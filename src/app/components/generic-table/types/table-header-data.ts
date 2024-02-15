export interface SubHeadline {
    headline: string;
    value: string;
}

export interface TableHeaderData {
    icon: string;
    title: string;
    add?: boolean;
    exportPdf?: boolean;
    exportExcel?: boolean;
    subHeadlines?:SubHeadline[]
}