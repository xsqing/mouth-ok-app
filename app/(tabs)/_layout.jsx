import { Image, View, TouchableWithoutFeedback } from "react-native";
import React from "react";
import icons from "@/constants/icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "./profile";
import RecordScreen from "./record";
import StatisticScreen from "./statistic";
import WikiScreen from "./wiki";

const Tab = createBottomTabNavigator();

const TabIcon = ({ icon, color }) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      ></Image>
    </View>
  );
};

const tabsMeta = [
  { title: "记录", name: "Record", icon: "home", component: RecordScreen },
  {
    title: "历史",
    name: "Statistic",
    icon: "statistic",
    component: StatisticScreen,
  },
  { title: "百科", name: "Wiki", icon: "plus", component: WikiScreen },
  { title: "我的", name: "Profile", icon: "profile", component: ProfileScreen },
];

const TabsScreens = () => {
  const ss = [];
  tabsMeta.forEach((tab) => {
    ss.push(
      <Tab.Screen
        name={tab.name}
        key={tab.name}
        component={tab.component}
        options={{
          title: tab.title,
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons[tab.icon]}
              color={color}
              focused={focused}
              name={tab.name}
            />
          ),
        }}
      ></Tab.Screen>
    );
  });
  return ss;
};

const TabsLayout = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: true,
          tabBarStyle: {
            height: 64,
          },
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarButton: (props) => (
            <TouchableWithoutFeedback onPress={props.onPress}>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {props.children}
              </View>
            </TouchableWithoutFeedback>
          ),
        }}
      >
        {TabsScreens()}
      </Tab.Navigator>
    </>
  );
};

export default TabsLayout;