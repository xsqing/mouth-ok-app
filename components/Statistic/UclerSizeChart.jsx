import { View, useWindowDimensions, Text } from "react-native";
import { SvgChart, SVGRenderer } from "@wuba/react-native-echarts";
import { Card } from "../ui/card";
import * as echarts from "echarts/core";
import { useRef, useEffect } from "react";
import { PieChart } from "echarts/charts";
import { TooltipComponent, LegendComponent } from "echarts/components";
import NoData from "./NoData";
import { hasValidData } from "@/utils/chart";
echarts.use([PieChart, SVGRenderer, TooltipComponent, LegendComponent]);
/**
 *
 * @param {{1: number, 2: number, 3: number, 4: number, 5: number}} painLevelData
 * @returns
 */
export default function UclerSizeChart({ uclerSizeData }) {
  const { width } = useWindowDimensions();
  const chartRef = useRef(null);

  useEffect(() => {
    if (!uclerSizeData) return;

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
            showEmptyCircle: true,
            left: 0,
            top: 0,
            startAngle: 180,
            endAngle: 360,

            data: [
              { value: uclerSizeData["1"], name: "芝麻" },
              { value: uclerSizeData["2"], name: "小米" },
              { value: uclerSizeData["3"], name: "高粱" },
              { value: uclerSizeData["4"], name: "绿豆" },
              { value: uclerSizeData["5"], name: "黄豆" },
            ],
          },
        ],
      });
    }

    return () => {
      chart?.dispose();
    };
  }, [chartRef.current, uclerSizeData, width]);

  return (
    <Card className="justify-center items-center">
      <Text>溃疡大小分布</Text>
      <SizeDesc />
      {hasValidData(uclerSizeData) ? <SvgChart ref={chartRef} /> : <NoData />}
    </Card>
  );
}

function SizeDesc() {
  return (
    <View className="justify-center items-center">
      <Text className="text-xs text-gray-500">
        芝麻:(1-2mm)、小米:(2-3mm)、高粱:(3-4mm)
      </Text>
      <Text className="text-xs text-gray-500">绿豆:(4-5mm)、黄豆:(5-8mm)</Text>
    </View>
  );
}
