export interface CategoryData {
    categories: {
      [key: string]: { name: string; selected: boolean }[];
    };
  }

  export interface CategoryWord {
    name: string;
    selected: boolean;
  }