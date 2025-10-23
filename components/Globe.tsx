"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Region } from "@/lib/regions";

const GlobeGl = dynamic(() => import("react-globe.gl"), { ssr: false });

interface GlobeProps {
  regions: Region[];
  selectedRegion: Region | null;
  latencies: Map<string, number | null>;
  onRegionClick?: (region: Region) => void;
}

export function Globe({
  regions,
  selectedRegion,
  latencies,
  onRegionClick,
}: GlobeProps) {
  const globeEl = useRef<any>();
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => {
    if (globeEl.current) {
      const controls = globeEl.current.controls();
      controls.autoRotate = autoRotate;
      controls.autoRotateSpeed = 0.5;
    }
  }, [autoRotate]);

  useEffect(() => {
    if (selectedRegion && globeEl.current) {
      // Animate to selected region
      globeEl.current.pointOfView(
        {
          lat: selectedRegion.lat,
          lng: selectedRegion.lng,
          altitude: 2,
        },
        1000
      );
    }
  }, [selectedRegion]);

  const pointsData = regions.map((region) => ({
    lat: region.lat,
    lng: region.lng,
    size: selectedRegion?.id === region.id ? 0.6 : 0.4,
    color: getRegionColor(region, selectedRegion, latencies),
    region,
  }));

  const handlePointClick = (point: any) => {
    if (onRegionClick) {
      onRegionClick(point.region);
    }
    setAutoRotate(false);
  };

  const handleGlobeClick = () => {
    setAutoRotate(true);
  };

  return (
    <div className="w-full h-full relative bg-gradient-to-b from-slate-900 to-slate-950">
      <GlobeGl
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        pointsData={pointsData}
        pointAltitude={0.01}
        pointRadius="size"
        pointColor="color"
        atmosphereColor="lightskyblue"
        atmosphereAltitude={0.2}
        pointLabel={(d: any) => {
          const latency = latencies.get(d.region.id);
          const latencyText = latency ? `${latency}ms` : "Not tested";
          return `
            <div style="background: rgba(0, 0, 0, 0.9); padding: 10px 12px; border-radius: 6px; border: 1px solid rgba(255, 255, 255, 0.1);">
              <div style="font-weight: bold; color: white; font-size: 13px;">${d.region.provider}</div>
              <div style="color: #aaa; font-size: 12px; margin-top: 2px;">${d.region.name}</div>
              <div style="color: ${getLatencyColor(latency)}; font-weight: bold; font-size: 14px; margin-top: 4px;">${latencyText}</div>
            </div>
          `;
        }}
        onPointClick={handlePointClick}
        onGlobeClick={handleGlobeClick}
      />
    </div>
  );
}

function getRegionColor(
  region: Region,
  selectedRegion: Region | null,
  latencies: Map<string, number | null>
): string {
  if (selectedRegion?.id === region.id) {
    return "#3b82f6"; // blue for selected
  }

  const latency = latencies.get(region.id);
  if (latency === undefined) {
    return "#9ca3af"; // gray for not tested
  }

  if (latency === null) {
    return "#ef4444"; // red for failed
  }

  return getLatencyColor(latency);
}

function getLatencyColor(latency: number | null | undefined): string {
  if (!latency) return "#9ca3af"; // gray

  if (latency < 50) return "#10b981"; // emerald-500
  if (latency < 100) return "#84cc16"; // lime-500
  if (latency < 200) return "#eab308"; // yellow-500
  if (latency < 300) return "#f97316"; // orange-500
  return "#ef4444"; // red-500
}

