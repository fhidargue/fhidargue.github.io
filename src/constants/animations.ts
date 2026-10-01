import { type Variants } from "motion/react";

export const fadeVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 2.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const gridVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 70,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const topBarVariants: Variants = {
  hidden: {
    y: -100,
    opacity: 0,
  },

  show: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const servicesTextVariants: Variants = {
  hidden: { y: 100 },
  show: {
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const cardSecondaryVariants: Variants = {
  hidden: {
    y: 100,
  },
  show: {
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
