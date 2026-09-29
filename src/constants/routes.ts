export const ROUTES = {
  HOME: "/",
  WORK: "/work",
  ABOUT: "/about",
  STACK: "/stack",
  CONTACT: "/contact",
  PROJECTS: {
    DCC_TRANSLATION: "/work/dcc-translation",
    WAVEFRONT_PATHTRACER: "/work/wavefront-pathtracer",
    MOCAP_RETARGET: "/work/mocap-retargeting",
    SNOWBALL_SIM: "/work/snowball-simulation",
    HAIR_SIM: "/work/hair-simulation",
    RENDERMAN_API: "/work/renderman-api",
    HDA_GARDEN: "/work/hda-garden-generator",
    IMP_STAIRS: "/work/impossible-stairs",
  },
} as const;

export const ROUTE_PATHS = [
  ROUTES.HOME,
  ROUTES.WORK,
  ROUTES.ABOUT,
  ROUTES.STACK,
  ROUTES.CONTACT,
  ...Object.values(ROUTES.PROJECTS),
] as const;
