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

interface FeetConversions {
  inch: number;
  cm: number;
}

interface InchConversions {
  feet: number;
  cm: number;
}

interface StoneConversions {
  pound: number;
  kg: number;
}

interface PoundConversions {
  stone: number;
  kg: number;
}

interface CmConversions {
  feet: number;
  inch: number;
}

interface KgConversions {
  stone: number;
  pound: number;
}

export interface ConversionMap {
  feet: FeetConversions;
  inch: InchConversions;
  stone: StoneConversions;
  pound: PoundConversions;
  cm: CmConversions;
  kg: KgConversions;
}
