import { fetchData1 } from "../data/fetchData1";

const dataMap: Map<string, string> = new Map();

export function useData1(cacheKey: string): string {
  const cachedData = dataMap.get(cacheKey);
  if (cachedData === undefined) {
    throw fetchData1().then((d) => dataMap.set(cacheKey, d));
  }
  return cachedData;
}
