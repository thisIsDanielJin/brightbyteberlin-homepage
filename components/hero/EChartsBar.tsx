"use client";

import { useRef, useEffect } from "react";
import * as echarts from "echarts/core";
import { BarChart } from "echarts/charts";
import { GridComponent, TitleComponent, TooltipComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([BarChart, GridComponent, TitleComponent, TooltipComponent, CanvasRenderer]);

export function EChartsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const chartRef = useRef<echarts.ECharts | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    chartRef.current = echarts.init(ref.current);
    chartRef.current.setOption({
      animation: true,
      animationDuration: 1200,
      animationEasing: "cubicOut",
      grid: { top: 28, right: 6, bottom: 22, left: 24 },
      title: {
        text: "REVENUE",
        left: 0,
        top: 0,
        textStyle: { fontSize: 13, fontFamily: "Geist Mono, monospace", color: "#6B665C", fontWeight: 500 },
      },
      xAxis: {
        type: "category",
        data: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { fontSize: 11, fontFamily: "Geist Mono, monospace", color: "#9A958A" },
      },
      yAxis: { type: "value", show: false },
      series: [
        {
          type: "bar",
          data: [2800, 3500, 3200, 4500, 5200, 6800],
          barWidth: "55%",
          itemStyle: {
            borderRadius: [2, 2, 0, 0],
            color: (params: { dataIndex: number }) =>
              params.dataIndex === 5 ? "#6B3977" : "rgba(107,57,119,0.25)",
          },
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

  return <div ref={ref} style={{ flex: 1, width: "100%", minHeight: 140 }} />;
}
