export interface SouthAfricaProvinces {
    eastern_cape: string;
    free_state: string;
    gauteng: string;
    kwazulu_natal: string;
    limpopo: string;
    mpumlanga: string;
    northern_cape: string;
    north_west: string;
    western_cape: string;
    unknown: string;
}

export interface SouthAfricaProvinceModel {
    date: string;
    timestamp: string;
    provinces: SouthAfricaProvinces;
    total: string;
}
