const contents = {
  index: {
    title: "Introduction",
    display: "hidden",
    theme: {
      breadcrumb: false,
      sidebar: false,
      pagination: false,
      timestamp: false,
    },
  },
  basics: {
    title: "Basics",
    href: "/basics",
    type: "page",
  },
  software: {
    title: "Software Guides",
    href: "/software-guides",
    type: "page",
  },
  sop: {
    title: "SOPs",
    type: "menu",
    items: [
      {
        title: "GMC",
        href: "/SOP/GMC",
      },
      {
        title: "TWR",
        href: "/SOP/TWR",
      },
      {
        title: "APS",
        href: "/SOP/APS",
      },
      {
        title: "ACS",
        href: "/SOP/ACS",
      },
      {
        title: "AFIS/FIS",
        href: "/SOP/AFIS-&-FIS",
      },
    ],
  },
  external: {
    title: "External Resources",
    href: "/external-resources",
    type: "page",
  },
  "404": {
    type: "page",
    theme: {
      timestamp: false,
      typesetting: "article",
    },
  },
};

export default contents;
