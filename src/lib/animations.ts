export const springTransition = {
  type: "spring" as const,
  stiffness: 260,
  damping: 20
};

export const softSpring = {
  type: "spring" as const,
  stiffness: 100,
  damping: 15,
  mass: 1
};

export const bouncySpring = {
  type: "spring" as const,
  stiffness: 400,
  damping: 10
};

export const transitionFast = {
  duration: 0.3,
  ease: [0.23, 1, 0.32, 1]
};

export const transitionMedium = {
  duration: 0.5,
  ease: [0.23, 1, 0.32, 1]
};

export const fadeInScale = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
  transition: softSpring
};

export const slideUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: softSpring
};
