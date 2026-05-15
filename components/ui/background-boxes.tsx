"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  // The naming in the source is misleading: "rows" lays out horizontally
  // (flex-row), "cols" stacks vertically inside each. So `rows × cell-w`
  // = pattern width; `cols × cell-h` = pattern height. After the skew +
  // scale transform, the pattern needs to be tall + wide enough to fill
  // the visible section, or it shows up as a small parallelogram in one
  // corner — which is exactly what was happening.
  //
  // 80 × 60 cells with w-20 h-10 = 6400×2400px pattern, ~4320×1620px
  // after scale(0.675). Fills a standard-height section, stays under
  // 5000 motion-divs so perf is still acceptable.
  const rows = new Array(80).fill(1);
  const cols = new Array(60).fill(1);

  // Quieter palette — the original rainbow (9 saturated pastels) was too
  // loud against the editorial dark UI. Now four cool low-saturation tints
  // (slate/sky/indigo family) that still give the cursor trail a sense of
  // life without screaming.
  const colors = [
    "rgba(125, 211, 252, 0.55)", // sky
    "rgba(147, 197, 253, 0.45)", // blue-300
    "rgba(165, 180, 252, 0.45)", // indigo-300
    "rgba(196, 181, 253, 0.40)", // violet-300
  ];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Centered + scaled to cover the full section. The Aceternity default
  // anchored to one corner (left-1/4 -top-1/4 + translate(-40%,-60%))
  // which left most of the section empty. Anchoring at 50/50 with a
  // self-translate(-50%, -50%) puts the geometric centre of the pattern
  // at the section centre; scale 0.85 keeps tile size readable while
  // ensuring the skewed pattern overhangs the viewport edges.
  return (
    <div
      style={{
        transform: `translate(-50%,-50%) skewX(-48deg) skewY(14deg) scale(0.85) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute left-1/2 top-1/2 p-4 flex w-full h-full z-0",
        className,
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="w-16 h-8 border-l border-slate-700 relative"
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: getRandomColor(),
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col` + j}
              className="w-16 h-8 border-r border-t border-slate-700 relative"
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute h-6 w-10 -top-[14px] -left-[22px] text-slate-700 stroke-[1px] pointer-events-none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
