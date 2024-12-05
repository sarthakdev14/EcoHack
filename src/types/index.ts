export interface Restaurant {
  id: string;
  name: string;
  location: string;
  availableFood: Food[];
}

export interface Food {
  id: string;
  name: string;
  quantity: number;
  expiryTime: string;
}

export interface CarbonFootprint {
  electricity: number;
  carUsage: number;
  airTravel: number;
  waterConsumption: number;
  gasUsage: number;
}