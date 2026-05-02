"use client";

import { useRef, useEffect } from "react";
import * as echarts from "echarts/core";
import { PieChart } from "echarts/charts";
import { LegendComponent, TitleComponent, TooltipComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([PieChart, LegendComponent, TitleComponent, TooltipComponent, CanvasRenderer]);

export function EChartsDonut() {
  const ref = useRef<HTMLDivElement>(null);
  const chartRef = useRef<echarts.ECharts | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    chartRef.current = echarts.init(ref.current);
    chartRef.current.setOption({
      animation: true,
      animationDuration: 1000,
      animationEasing: "cubicOut",
      title: {
        text: "TRAFFIC",
        left: 0,
        top: 0,
        textStyle: { fontSize: 13, fontFamily: "Geist Mono, monospace", color: "#6B665C", fontWeight: 500 },
      },
      legend: {
        orient: "horizontal",
        bottom: 4,
        icon: "circle",
        itemWidth: 8,
        itemHeight: 8,
        itemGap: 10,
        textStyle: { fontSize: 11, fontFamily: "Geist Mono, monospace", color: "#6B665C" },
      },
      series: [
        {
          type: "pie",
          radius: ["42%", "74%"],
          center: ["50%", "46%"],
          avoidLabelOverlap: false,
          label: { show: false },
          data: [
            { value: 62, name: "Organic", itemStyle: { color: "#6B3977" } },
            { value: 24, name: "Direct", itemStyle: { color: "rgba(107,57,119,0.55)" } },
            { value: 14, name: "Social", itemStyle: { color: "rgba(107,57,119,0.22)" } },
          ],
        },
      ],
      tooltip: { show: false },
    });

    const handleResize = () => chartRef.current?.resize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      chartRef.current?.dispose();
    };
  }, []);

  return <div ref={ref} style={{ flex: 1, width: "100%", minHeight: 120 }} />;
}
