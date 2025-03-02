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
        href: "/sop/gmc/general",
      },
      {
        title: "TWR",
        href: "/sop/twr/general",
      },
      {
        title: "APS",
        href: "/sop/aps/general",
      },
      {
        title: "ACS",
        href: "/sop/acs/general",
      },
      {
        title: "AFIS/FIS",
        href: "/sop/fis/general",
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
