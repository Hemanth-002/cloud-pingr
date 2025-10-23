"use client";

import { useState } from "react";
import { Globe } from "@/components/Globe";
import { regions, cloudProviders } from "@/lib/regions";
import { pingAllRegions } from "@/lib/ping";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import type { Region } from "@/lib/regions";

export default function Home() {
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
  const [latencies, setLatencies] = useState<Map<string, number | null>>(
    new Map()
  );
  const [isPinging, setIsPinging] = useState(false);
  const [filterProvider, setFilterProvider] = useState<string | null>(null);

  const handlePingAll = async () => {
    setIsPinging(true);
    setLatencies(new Map());

    await pingAllRegions(regions, (regionId, latency) => {
      setLatencies((prev) => new Map(prev).set(regionId, latency));
    });

    setIsPinging(false);
  };

  const filteredRegions = filterProvider
    ? regions.filter((r) => r.provider === filterProvider)
    : regions;

  const sortedRegions = [...filteredRegions].sort((a, b) => {
    const latA = latencies.get(a.id);
    const latB = latencies.get(b.id);

    // If both have latencies, sort by latency
    if (latA !== undefined && latB !== undefined) {
      if (latA === null && latB === null) return 0;
      if (latA === null) return 1;
      if (latB === null) return -1;
      return latA - latB;
    }

    // Otherwise maintain original order
    return 0;
  });

  const getLatencyColor = (latency: number | null | undefined): string => {
    if (latency === undefined) return "bg-muted";
    if (latency === null) return "bg-red-500";
    if (latency < 50) return "bg-emerald-500";
    if (latency < 100) return "bg-lime-500";
    if (latency < 200) return "bg-yellow-500";
    if (latency < 300) return "bg-orange-500";
    return "bg-red-500";
  };

  return (
    <main className="h-screen bg-background">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={25} minSize={20} maxSize={40}>
          {/* Left Panel */}
          <div className="h-full border-r border-border flex flex-col">
            <div className="p-6 border-b border-border shrink-0">
              <h1 className="text-3xl font-bold mb-2">Cloud Pingr</h1>
              <p className="text-sm text-muted-foreground mb-4">
                Measure latency to cloud provider regions worldwide
              </p>
              <Button
                onClick={handlePingAll}
                disabled={isPinging}
                className="w-full"
                size="lg"
              >
                {isPinging ? "Pinging..." : "Ping All Regions"}
              </Button>
            </div>

            {/* Latency Legend */}
            <div className="p-4 border-b border-border shrink-0">
              <div className="text-xs font-semibold mb-2 text-muted-foreground">
                LATENCY LEGEND
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <span>Excellent (&lt; 50ms)</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-3 h-3 rounded-full bg-lime-500"></div>
                  <span>Good (50-100ms)</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <span>Moderate (100-200ms)</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <span>Slow (200-300ms)</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span>Very Slow (&gt; 300ms)</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-3 h-3 rounded-full bg-muted"></div>
                  <span>Not tested</span>
                </div>
              </div>
            </div>

            {/* Provider Filter */}
            <div className="p-4 border-b border-border shrink-0">
              <div className="text-xs font-semibold mb-2 text-muted-foreground">
                FILTER BY PROVIDER
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant={filterProvider === null ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setFilterProvider(null)}
                >
                  All
                </Badge>
                {cloudProviders.map((provider) => (
                  <Badge
                    key={provider}
                    variant={filterProvider === provider ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setFilterProvider(provider)}
                  >
                    {provider}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Regions List */}
            <div className="flex-1 min-h-0">
              <ScrollArea className="h-full">
                <div className="p-4 space-y-2">
                  {sortedRegions.map((region) => {
                    const latency = latencies.get(region.id);
                    const isSelected = selectedRegion?.id === region.id;

                    return (
                      <Card
                        key={region.id}
                        className={`cursor-pointer transition-all hover:bg-accent ${
                          isSelected ? "ring-2 ring-primary bg-accent/50" : ""
                        }`}
                        onClick={() => setSelectedRegion(region)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex items-start gap-3 flex-1">
                              <div
                                className={`w-3 h-3 rounded-full mt-0.5 shrink-0 ${getLatencyColor(
                                  latency
                                )}`}
                              ></div>
                              <div className="flex-1 min-w-0">
                                <div className="font-semibold text-sm">
                                  {region.name}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {region.provider}
                                </div>
                              </div>
                            </div>
                            <div className="text-sm font-mono font-semibold shrink-0">
                              {latency === undefined
                                ? "—"
                                : latency === null
                                ? "✕"
                                : `${latency}ms`}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </ScrollArea>
            </div>

            {/* Stats Footer */}
            {latencies.size > 0 && (
              <div className="p-4 border-t border-border shrink-0">
                <div className="grid grid-cols-3 gap-2 text-center text-sm">
                  <div>
                    <div className="font-semibold">
                      {Array.from(latencies.values()).filter((l) => l !== null)
                        .length}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Reachable
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">
                      {latencies.size > 0
                        ? Math.round(
                            Array.from(latencies.values())
                              .filter((l) => l !== null)
                              .reduce((a, b) => a! + b!, 0)! /
                              Array.from(latencies.values()).filter(
                                (l) => l !== null
                              ).length
                          )
                        : "—"}
                      ms
                    </div>
                    <div className="text-xs text-muted-foreground">Avg</div>
                  </div>
                  <div>
                    <div className="font-semibold">
                      {Math.min(
                        ...(Array.from(latencies.values()).filter(
                          (l) => l !== null
                        ) as number[])
                      )}
                      ms
                    </div>
                    <div className="text-xs text-muted-foreground">Best</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ResizablePanel>

        <ResizableHandle withHandle />

        <ResizablePanel defaultSize={75} minSize={50}>
          {/* Globe */}
          <div className="h-full w-full relative">
            <Globe
              regions={regions}
              selectedRegion={selectedRegion}
              latencies={latencies}
              onRegionClick={setSelectedRegion}
            />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}
