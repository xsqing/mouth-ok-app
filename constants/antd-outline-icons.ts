import {
  outlineGlyphMap,
  OutlineGlyphMapType,
} from "@ant-design/icons-react-native/lib/outline";

type OutlineIconsType = {
  [K in OutlineGlyphMapType]: OutlineGlyphMapType;
};
// keys 转map

const outlineIcons: OutlineIconsType = {} as OutlineIconsType;
for (const key in outlineGlyphMap) {
  outlineIcons[key as OutlineGlyphMapType] = key as OutlineGlyphMapType;
}
export { outlineIcons };
