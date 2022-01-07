import Footer from "./Footer/Footer.tsx";
import ImageSlider from "./Image-Slider/ImageSlider.tsx";
import Header from "./Header/Header.tsx";

// All of the Agility Page Module Components that are in use in this site need to be imported into this index file.
// Place Page Modules in allModules array below, passing in a name and the component.

const allModules = [
  { name: "Header", module: Header },
  { name: "Footer", module: Footer },
  { name: "ImageSlider", module: ImageSlider },
];

export const getModule = (moduleName) => {
  if (!moduleName) return null;
  const obj = allModules.find(
    (m) => m.name.toLowerCase() === moduleName.toLowerCase()
  );
  if (!obj) return null;
  return obj.module;
};
