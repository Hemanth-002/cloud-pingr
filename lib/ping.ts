import { Region } from "./regions";

export async function pingRegion(region: Region): Promise<number | null> {
  if (region.unavailable || !region.endpoint) {
    return null;
  }

  try {
    const startTime = performance.now();
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

    const response = await fetch(region.endpoint, {
      method: "GET",
      mode: "no-cors",
      cache: "no-store",
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    const endTime = performance.now();
    const latency = Math.round(endTime - startTime);

    return latency;
  } catch (error) {
    // Even with no-cors, measuring the time to fail/succeed gives us a latency estimate
    // For CORS-blocked requests, we can still measure connection time
    return null;
  }
}

export async function pingAllRegions(
  regions: Region[],
  onProgress?: (regionId: string, latency: number | null) => void
): Promise<Map<string, number | null>> {
  const results = new Map<string, number | null>();

  // Ping all regions in parallel with some concurrency limit
  const batchSize = 10;
  for (let i = 0; i < regions.length; i += batchSize) {
    const batch = regions.slice(i, i + batchSize);
    const batchPromises = batch.map(async (region) => {
      const latency = await pingRegion(region);
      results.set(region.id, latency);
      if (onProgress) {
        onProgress(region.id, latency);
      }
    });

    await Promise.all(batchPromises);
  }

  return results;
}

