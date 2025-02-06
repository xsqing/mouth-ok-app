import { View, useWindowDimensions } from "react-native";
import { SvgChart, SVGRenderer } from "@wuba/react-native-echarts";
import * as echarts from "echarts/core";
import { useRef, useEffect } from "react";
import { PieChart } from "echarts/charts";
import { TooltipComponent, LegendComponent } from "echarts/components";
echarts.use([PieChart, SVGRenderer, TooltipComponent, LegendComponent]);
/**
 *
 * @param {{1: number, 2: number, 3: number, 4: number, 5: number}} painLevelData
 * @returns
 */
export default function PainLevelChart({ painLevelData }) {
  const chartRef = useRef(null);
  const { width: screenWidth } = useWindowDimensions();

  // 计算图表尺寸，留出边距
  const chartSize = Math.min(screenWidth - 100, 400);

  useEffect(() => {
    if (!painLevelData) return;

    let chart;
    if (chartRef.current) {
      chart = echarts.init(chartRef.current, "light", {
        renderer: "svg",
        width: chartSize,
        height: chartSize,
      });

      chart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{b}: {c} ({d}%)",
        },
        legend: {
          top: "bottom",
          left: "left",
        },
        series: [
          {
            type: "pie",
            radius: ["40%", "70%"],
            label: {
              show: false,
            },
            padAngle: 2,
            itemStyle: {
              borderRadius: 10,
            },

            data: [
              { value: painLevelData["1"] || 0, name: "没事~" },
              { value: painLevelData["2"] || 0, name: "轻微" },
              { value: painLevelData["3"] || 0, name: "有点痛" },
              { value: painLevelData["4"] || 0, name: "很痛" },
              { value: painLevelData["5"] || 0, name: "剧痛" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
              },
            },
          },
        ],
      });
    }

    return () => {
      chart?.dispose();
    };
  }, [chartRef.current, painLevelData, chartSize]);

  return (
    <View style={{ alignItems: "center", marginTop: 10, width: "100%" }}>
      <SvgChart ref={chartRef} />
    </View>
  );
}
