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
  "software-guides": {
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
        href: "/sop/gmc",
      },
      {
        title: "TWR",
        href: "/sop/twr",
      },
      {
        title: "APS",
        href: "/sop/aps",
      },
      {
        title: "ACS",
        href: "/sop/acs",
      },
      {
        title: "AFIS/FIS",
        href: "/sop/fis",
      },
    ],
  },
  "external-resources": {
    title: "External Resources",
    href: "/external-resources",
    type: "page",
  },
  404: {
    type: "page",
    theme: {
      timestamp: false,
      typesetting: "article",
    },
  },
};

export default contents;
