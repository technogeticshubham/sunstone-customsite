import Heading from "./Heading";
import Footer from "./Footer/Footer";
import ImageSlider from "./Image-Slider/ImageSlider";

// All of the Agility Page Module Components that are in use in this site need to be imported into this index file.
// Place Page Modules in allModules array below, passing in a name and the component.

const allModules = [
  { name: "Footer", module: Footer },
  { name: "ImageSlider", module: ImageSlider },
  { name: "Heading", module: Heading },
];

export const getModule = (moduleName) => {
  if (!moduleName) return null;
  const obj = allModules.find(
    (m) => m.name.toLowerCase() === moduleName.toLowerCase()
  );
  if (!obj) return null;
  return obj.module;
};
