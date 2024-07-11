import { useEffect, useState } from 'react';

export function useBodyDataValue<T extends string>(
  dataName: string,
  initialState: T
) {
  const [value, setValue] = useState<T>(initialState);

  useEffect(() => {
    document.body.setAttribute(`data-${dataName}`, value);
  }, [value]);

  return [value, setValue] as const;
}
