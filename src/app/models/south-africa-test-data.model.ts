export interface TestDataModel {
  date: string;
  timestamp: string;
  cumulative_tests: string;
  recovered: string;
  hospitalisation: string;
  critical_icu: string;
  ventilation: string;
  deaths: string;
  contacts: Contacts;
  travellers: Travellers;
}

export interface Contacts {
  contacts_identified: string;
  contacts_traced: string;
}

export interface Travellers {
  scanned: string;
  elevated_temperature: string;
  covid_suspected_criteria: string;
}
