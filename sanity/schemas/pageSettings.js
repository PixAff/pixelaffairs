import { GiGuitar as icon } from "react-icons/gi";

export default {
  name: "pageSettings",
  title: "Settings",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "example",
      title: "Example for index",
      type: "array",
      of: [{ type: "reference", to: [{ type: "work" }] }],
    },
    {
      name: "imageIdx",
      title: "index Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "imageBgIdx",
      title: "index Background",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "imageAbout",
      title: "about Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "imageContact",
      title: "contact Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
