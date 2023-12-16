"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";
import * as z from "zod";
import {
  FontBoldIcon,
  FontItalicIcon,
  UnderlineIcon,
} from "@radix-ui/react-icons";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  search: z.string().min(2, {
    message: "search must be at least 2 characters.",
  }),
});

const FiltersSection = () => {
  const [selectedKey, setSelectedKey] = useState<string>("");
  const onToggle = (key: string) => {
    console.log("key", key);
    setSelectedKey(key);
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const filters = [
    {
      key: "lensType",
      id: "1",
      label: "Lens type",
      children: [
        {
          key: "daily",
          id: "1-1",
          label: "Daily",
        },
        {
          key: "BI-weekly",
          id: "1-2",
          label: "BI-weekly",
        },
        {
          key: "Monthly",
          id: "1-3",
          label: "Monthly ",
        },
      ],
    },
    {
      key: "brand",
      id: "2",
      label: "Brand",
      children: [
        {
          key: "Biotrue",
          id: "2-1",
          label: "Biotrue",
        },
        {
          key: "airOptix",
          id: "2-2",
          label: "Air Optix",
        },
        {
          key: "Acuvue",
          id: "2-3",
          label: "Acuvue",
        },
        {
          key: "Biofinity",
          id: "2-4",
          label: "Biofinity",
        },
        {
          key: "Myday",
          id: "2-5",
          label: "Myday",
        },
        {
          key: "Dailies total",
          id: "2-6",
          label: "Dailies total",
        },
        {
          key: "Precision1",
          id: "2-7",
          label: "Precision1",
        },
        {
          key: "Clariti",
          id: "2-8",
          label: "Clariti",
        },
        {
          key: "Proclear",
          id: "2-9",
          label: "Proclear",
        },
        {
          key: "Ultra",
          id: "2-10",
          label: "Ultra",
        },
      ],
    },
    {
      key: "Manufacturer",
      id: "3",
      label: "Manufacturer",
      children: [
        {
          key: "alcon",
          id: "3-1",
          label: "Alcon",
        },
        {
          key: "coopperVision",
          id: "3-2",
          label: "Coopper Vision",
        },
        {
          key: "johnsonJohnson",
          id: "3-3",
          label: "Johnson & johnson",
        },
      ],
    },

    {
      key: "prescriptionType",
      id: "4",
      label: "Prescription type",
      children: [
        {
          key: "spherical",
          id: "4-1",
          label: "Spherical",
        },
        {
          key: "toricAstigmatism",
          id: "4-2",
          label: "Toric/Astigmatism",
        },
        {
          key: "multifocal",
          id: "4-3",
          label: "Multifocal",
        },
      ],
    },
  ];

  const filter = filters.find((f) => f.key === selectedKey);

  const renderToggleItems = (children: any) => {
    return children.map((child: any) => (
      <ToggleGroupItem
        key={child.id}
        value={child.key}
        aria-label={child.label}
        size="lg"
        className={`bg-[#F1F1F1]  mx-auto flex-[150px]  ${
          selectedKey ? "data-[state=on]:bg-[#fff]" : ""
        } data-[state=off]:border-transparent data-[state=on]:border-black border`}
      >
        {child.label}
      </ToggleGroupItem>
    ));
  };

  return (
    <div className="flex my-10 flex-col gap-5 rounded-lg justify-center items-center border border-black">
      <div className="">
        <ToggleGroup type="single" className="my-5 gap-5">
          {filters.map((filter) => (
            <ToggleGroupItem
              key={filter.id}
              value={filter.key}
              aria-label={filter.label}
              size="lg"
              className={`bg-[#F1F1F1] w-40 ${
                selectedKey === filter.key
                  ? "data-[state=on]:bg-[#9AE4E3] border-black"
                  : ""
              } data-[state=off]:border-transparent data-[state=on]:border-black border`}
              onClick={() => onToggle(filter.key)}
            >
              {filter.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
        <ToggleGroup
          type="single"
          className="my-5 gap-5 flex justify-center items-center flex-wrap "
        >
          {filter && renderToggleItems(filter.children)}
        </ToggleGroup>
      </div>

      <div className="flex justify-between w-full p-5">
        <Button variant="link" className=" underline  text-xl" size={"lg"}>
          Reset All
        </Button>
        <Button variant="default" className="p-6 mr-20 text-xl">
          Apply Filters
        </Button>
      </div>
    </div>
  );
};

export default FiltersSection;
