import { GiGuitar as icon } from "react-icons/gi";

export default {
  name: "work",
  title: "References",
  type: "document",
  icon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "place",
      title: "Place",
      type: "string",
    },
    {
      name: "date",
      title: "Date",
      type: "date",
      options: {
        dateFormat: "DD.MM.YYYY",
        calendarTodayLabel: "Today",
      },
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 100,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "client",
      title: "Client",
      type: "string",
    },
    {
      title: "Description",
      name: "description",
      type: "text",
    },
  ],
  preview: {
    select: {
      name: "title",
      media: "image",
      date: "date",
    },
    prepare: ({ name, media, date }) => ({
      media,
      title: `${name}`,
      subtitle: `${date}`,
    }),
  },
};
