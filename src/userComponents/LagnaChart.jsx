// components/LagnaChart.tsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const housePositions = [
  { id: 1, row: 0, col: 1 },
  { id: 2, row: 0, col: 2 },
  { id: 3, row: 0, col: 3 },
  { id: 12, row: 0, col: 0 },
  { id: 4, row: 1, col: 3 },
  { id: 11, row: 1, col: 0 },
  { id: 10, row: 2, col: 0 },
  { id: 5, row: 2, col: 3 },
  { id: 9, row: 3, col: 0 },
  { id: 8, row: 3, col: 1 },
  { id: 7, row: 3, col: 2 },
  { id: 6, row: 3, col: 3 },

  // { id: 13, row: 1, col: 1 },
  // { id: 14, row: 1, col: 2 },
  // { id: 15, row: 2, col: 1 },
  // { id: 16, row: 2, col: 2 },
];

export default function LagnaChart({ data }) {
  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-2 p-2 max-w-md mx-auto mt-100">
      {Array.from({ length: 16 }).map((_, idx) => {
        const position = housePositions.find((h) => h.row * 4 + h.col === idx);
        const houseId = position?.id;

        return (
          <Card
            key={idx}
            className="h-24 w-24 flex items-center justify-center"
          >
            <CardContent className="text-center p-2 text-xs">
              <div className="font-semibold">{houseId ?? ""}</div>
              <div>
                {houseId && data[houseId] ? data[houseId].join(", ") : ""}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
