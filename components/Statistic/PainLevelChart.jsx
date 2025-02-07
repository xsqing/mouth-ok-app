import { View, useWindowDimensions, Text } from "react-native";
import { SvgChart, SVGRenderer } from "@wuba/react-native-echarts";
import { Card } from "../ui/card";
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
  const { width } = useWindowDimensions();
  const chartRef = useRef(null);

  useEffect(() => {
    if (!painLevelData) return;

    let chart;
    if (chartRef.current) {
      chart = echarts.init(chartRef.current, "light", {
        renderer: "svg",
        width: width - 32, // 考虑左右边距
        height: (width - 32) * 0.5,
      });

      chart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{b}: {c} ({d}%)",
        },

        series: [
          {
            type: "pie",
            radius: ["60%", "100%"],
            center: ["50%", "75%"],
            padAngle: 2,
            itemStyle: {
              borderRadius: 10,
            },
            showEmptyCircle: false,
            left: 0,
            top: 0,
            startAngle: 180,
            endAngle: 360,

            data: [
              { value: painLevelData["1"], name: "没事~" },
              { value: painLevelData["2"], name: "轻微" },
              { value: painLevelData["3"], name: "有点痛" },
              { value: painLevelData["4"], name: "很痛" },
              { value: painLevelData["5"], name: "剧痛" },
            ],
          },
        ],
      });
    }

    return () => {
      chart?.dispose();
    };
  }, [chartRef.current, painLevelData, width]);

  return (
    <Card className="justify-center items-center">
      <Text>疼痛等级分布</Text>
      <SvgChart ref={chartRef} />
    </Card>
  );
}
