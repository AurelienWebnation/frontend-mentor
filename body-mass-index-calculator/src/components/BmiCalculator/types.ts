export type UnitsType = 'metric' | 'imperial';

export type MetricAndImperialUnits =
  | 'cm'
  | 'kg'
  | 'feet'
  | 'inch'
  | 'stone'
  | 'pound';

export interface MetricUnits {
  cm: number;
  kg: number;
}

export interface ImperialUnits {
  feet: number;
  inch: number;
  stone: number;
  pound: number;
}

export interface Units {
  imperial: ImperialUnits;
  metric: MetricUnits;
}

export interface IdealWeight {
  minKg: number;
  maxKg: number;
  minStone: number;
  maxStone: number;
  minPounds: number;
  maxPounds: number;
}

type FeetConversions = {
  inch: number;
  cm: number;
};

type InchConversions = {
  feet: number;
  cm: number;
};

type StoneConversions = {
  pound: number;
  kg: number;
};

type PoundConversions = {
  stone: number;
  kg: number;
};

type CmConversions = {
  feet: number;
  inch: number;
};

type KgConversions = {
  stone: number;
  pound: number;
};

export type ConversionMap = {
  feet: FeetConversions;
  inch: InchConversions;
  stone: StoneConversions;
  pound: PoundConversions;
  cm: CmConversions;
  kg: KgConversions;
};
