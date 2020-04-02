export interface SouthAfricaCasesDetailsModel {
    ages: AgeCount[];
    provinces: ProvinceCount[];
    genders: GenderCount[];
}

export interface AgeCount {
    age: string;
    count: number;
}

export interface ProvinceCount {
    province: string;
    count: number;
}

export interface GenderCount {
    gender: string;
    count: number;
}
