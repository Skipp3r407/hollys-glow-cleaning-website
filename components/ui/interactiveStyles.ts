/**
 * Shared hover treatments for “important” panels (cards, forms, tables).
 * Lift + shadow + dusty blue border shift — matches homepage service / testimonial cards.
 */

/** Default white/slate bordered cards */
export const interactiveHover =
  "transition duration-300 ease-out will-change-transform hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-400/15 hover:border-dusty-blue/40";

/** Cards on muted backgrounds (e.g. slate-50) */
export const interactiveHoverMuted =
  "transition duration-300 ease-out will-change-transform hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-400/15 hover:border-dusty-blue/40 hover:bg-white";

/** Gold / featured accent (services featured package, reassurance blocks) */
export const interactiveHoverGold =
  "transition duration-300 ease-out will-change-transform hover:-translate-y-1.5 hover:shadow-xl hover:shadow-gold/20 hover:border-gold/50";

/** Large shells: pricing table, wide panels */
export const interactiveHoverShell =
  "transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-slate-400/12 hover:border-dusty-blue/30";

/** Navy CTA banner */
export const interactiveHoverNavyBanner =
  "transition duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30 hover:ring-1 hover:ring-white/25";

/** Hero / team image frames */
export const interactiveHoverMedia =
  "transition duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-400/20 hover:ring-2 hover:ring-dusty-blue/20";

/** Accordions / dense stacks — subtler lift */
export const interactiveHoverTight =
  "transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md hover:shadow-slate-400/12 hover:border-dusty-blue/35";
