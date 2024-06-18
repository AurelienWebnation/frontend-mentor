import type {
  ConversionMap,
  IdealWeight,
  MetricAndImperialUnits,
  Units,
} from './types.ts';
import { round } from '../../utils.ts';
import type { Dispatch, SetStateAction } from 'react';

/**
 *
 * @param weight Kilogram
 * @param height Meter
 */
export function getBmi(weight: number, height: number) {
  const bmi = weight / height ** 2;

  if (!bmi || bmi === Infinity || Number.isNaN(bmi)) return 0;

  return bmi;
}

export function getBmiSentence(bmi: number) {
  if (bmi < 18.5) return "you're underweight";
  if (bmi >= 18.5 && bmi < 24.9) return "you're a healthy weight";
  if (bmi >= 25 && bmi < 29.9) return "you're overweight";
  if (bmi >= 30) return "you're obese";

  return 'Please, enter a valid bmi number.';
}

/**
 *
 * @param height Provide height in meter
 * @return {minKg, max, minStone, maxStone, minPounds, maxPounds}
 */
export function getIdealWeightRange(height: number): IdealWeight {
  const MIN_IDEAL_BMI = 18.5;
  const MAX_IDEAL_BMI = 24.9;

  const minKg = round(MIN_IDEAL_BMI * height ** 2, 1);
  const maxKg = round(MAX_IDEAL_BMI * height ** 2, 1);

  const minStone = round(minKg * 0.15747);
  const maxStone = round(maxKg * 0.15747);

  const minPounds = round(minKg * 2.20462);
  const maxPounds = round(maxKg * 2.20462);

  return { minKg, maxKg, minStone, maxStone, minPounds, maxPounds };
}

const conversionFactors: ConversionMap = {
  feet: {
    inch: 12,
    cm: 30.48,
  },
  inch: {
    feet: 1 / 12,
    cm: 2.54,
  },
  stone: {
    pound: 14,
    kg: 6.35,
  },
  pound: {
    stone: 1 / 14,
    kg: 1 / 2.205,
  },
  cm: {
    feet: 1 / 30.48,
    inch: 1 / 2.54,
  },
  kg: {
    stone: 1 / 6.35,
    pound: 2.205,
  },
};

export function convertUnit<
  K extends MetricAndImperialUnits,
  T extends keyof ConversionMap[K],
>(value: number, from: K, to: T): number {
  const factor = Number(conversionFactors[from][to]);

  if (Number.isNaN(factor)) return 0;

  return value * factor;
}

export function convertOtherStateValues(
  htmlName: string,
  nextValue: number,
  setState: Dispatch<SetStateAction<Units>>
) {
  // Metric
  if (htmlName === 'cm') {
    setState((prev) => ({
      ...prev,
      imperial: {
        ...prev.imperial,
        inch: convertUnit(nextValue, 'cm', 'inch'),
        feet: convertUnit(nextValue, 'cm', 'feet'),
      },
    }));
  }

  if (htmlName === 'kg') {
    setState((prev) => ({
      ...prev,
      imperial: {
        ...prev.imperial,
        stone: convertUnit(nextValue, 'kg', 'stone'),
        pound: convertUnit(nextValue, 'kg', 'pound'),
      },
    }));
  }

  // Imperial
  if (htmlName === 'feet') {
    setState((prev) => ({
      ...prev,
      imperial: {
        ...prev.imperial,
        inch: convertUnit(nextValue, 'feet', 'inch'),
      },
      metric: {
        ...prev.metric,
        cm: convertUnit(nextValue, 'feet', 'cm'),
      },
    }));
  }

  if (htmlName === 'inch') {
    setState((prev) => ({
      ...prev,
      imperial: {
        ...prev.imperial,
        feet: convertUnit(nextValue, 'inch', 'feet'),
      },
      metric: {
        ...prev.metric,
        cm: convertUnit(nextValue, 'inch', 'cm'),
      },
    }));
  }

  if (htmlName === 'stone') {
    setState((prev) => ({
      ...prev,
      imperial: {
        ...prev.imperial,
        pound: convertUnit(nextValue, 'stone', 'pound'),
      },
      metric: {
        ...prev.metric,
        kg: convertUnit(nextValue, 'stone', 'kg'),
      },
    }));
  }

  if (htmlName === 'pound') {
    setState((prev) => ({
      ...prev,
      imperial: {
        ...prev.imperial,
        stone: convertUnit(nextValue, 'pound', 'stone'),
      },
      metric: {
        ...prev.metric,
        kg: convertUnit(nextValue, 'pound', 'kg'),
      },
    }));
  }
}
