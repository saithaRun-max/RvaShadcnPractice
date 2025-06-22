import {
  Calculator,
  Calendar,
  CreditCard,
  File,
  Settings,
  Smile,
  User,
} from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

const SearchBar = () => {
  return (
    <Command className="rounded-lg border shadow-md w-[400px] ">
      <CommandInput placeholder="Search documentation..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Calculators">
          <CommandItem>
            <File />
            <span>Panchang</span>
          </CommandItem>
          <CommandItem>
            <File />
            <span>Hora Muhurth</span>
          </CommandItem>
          <CommandItem>
            <File />
            <span>Choghadiya Muhurat</span>
          </CommandItem>{" "}
          <CommandItem>
            <File />
            <span>Mole Astrology</span>
          </CommandItem>{" "}
          <CommandItem>
            <File />
            <span>tarabalam Chakra</span>
          </CommandItem>{" "}
          <CommandItem>
            <File />
            <span>KP Planets Motion Chart</span>
          </CommandItem>{" "}
          <CommandItem>
            <File />
            <span>Baby Name Checker</span>
          </CommandItem>{" "}
          <CommandItem>
            <File />
            <span>Dream Astrology</span>
          </CommandItem>
          <CommandItem disabled>
            <Calculator />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Dosha Checkers">
          <CommandItem>
            <File />
            <span>Kuja Dosha cheack</span>
            {/* <CommandShortcut>⌘P</CommandShortcut> */}
          </CommandItem>
          <CommandItem>
            <File />
            <span>Sade Sati Calculator</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default SearchBar;
