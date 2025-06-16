import { CardTitle } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "@/components/ui/table";
import React from "react";

const Astakavarga = () => {
  const Astakavargudata = {
    lables: [
      "Ar",
      "Ta",
      "Ge",
      "Cn",
      "Le",
      "Vi",
      "Li",
      "Sc",
      "Sa",
      "Cp",
      "Aq",
      "Pi",
    ],
    data: {
      sun: [0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1],
      moon: [0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0],
      mars: [0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1],
      mercury: [1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1],
      jupiter: [0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0],
      venus: [1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
      saturn: [1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0],
      lagna: [1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0],
    },
  };

  return (
    <div className="w-full max-w-6xl  my-20 p-4 mx-140">
      <h4 className="text-xl font-semibold">Astakavarga</h4>
      <Table className="w-[100px] ">
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            {Astakavargudata.lables.map((value, i) => (
              <TableHead key={i}>{value}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <TableHead>Sun</TableHead>
            </TableCell>
            {Astakavargudata.data.sun.map((value, i) => (
              <TableCell key={i}>{value}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>
              <TableHead>Moon</TableHead>
            </TableCell>

            {Astakavargudata.data.moon.map((value, i) => (
              <TableCell key={i}>{value}</TableCell>
            ))}
          </TableRow>

          <TableRow>
            <TableCell>
              <TableHead>Mars</TableHead>
            </TableCell>

            {Astakavargudata.data.mars.map((value, i) => (
              <TableCell key={i}>{value}</TableCell>
            ))}
          </TableRow>

          <TableRow>
            <TableCell>
              <TableHead>Mercury</TableHead>
            </TableCell>

            {Astakavargudata.data.mercury.map((value, i) => (
              <TableCell key={i}>{value}</TableCell>
            ))}
          </TableRow>

          <TableRow>
            <TableCell>
              <TableHead>Jupiter</TableHead>
            </TableCell>

            {Astakavargudata.data.jupiter.map((value, i) => (
              <TableCell key={i}>{value}</TableCell>
            ))}
          </TableRow>

          <TableRow>
            <TableCell>
              <TableHead>Venus</TableHead>
            </TableCell>

            {Astakavargudata.data.venus.map((value, i) => (
              <TableCell key={i}>{value}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>
              <TableHead>Saturn</TableHead>
            </TableCell>

            {Astakavargudata.data.saturn.map((value, i) => (
              <TableCell key={i}>{value}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>
              <TableHead>Lagna</TableHead>
            </TableCell>

            {Astakavargudata.data.lagna.map((value, i) => (
              <TableCell key={i}>{value}</TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default Astakavarga;
