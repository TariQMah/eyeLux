"use client";
import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import useFilter from "@/hooks/use-filters";

const formSchema = z.object({
  search: z.string().min(2, {
    message: "search must be at least 2 characters.",
  }),
});

const SearchBar = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const filter = useFilter();

  const toggleFilter = () => {
    filter.toggleFilter();
  };

  return (
    <div className="flex my-10 gap-5 justify-center items-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full  justify-center items-center"
        >
          <div className="flex justify-between items-center gap-5 w-full border-2 p-2 border-[#E5E5E5] rounded-full">
            <FormField
              control={form.control}
              name="search"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl autoCorrect="off">
                    <Input
                      type="text"
                      {...field}
                      width={100}
                      className="bg-transparent placeholder:[#E5E5E5] w-full text-xl rounded-sm p-5 py-6 focus-visible:ring-offset-0  focus-visible:ring-0 text-[#000] border-white border w-full"
                      placeholder="Search any product or brand"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              variant="outline"
              className="rounded-full h-16 w-16 bg-[#7BDFDD] hover:bg-[#7BDFDD] hover:bg-opacity-95"
            >
              <Search className="h-12 text-black w-12" />
            </Button>
          </div>
        </form>
      </Form>
      <div className="flex-[0.3]">
        <Button
          variant="outline"
          onClick={() => toggleFilter()}
          className="rounded-full h-[60px] w-[60px] p-0 m-0 bg-[#7BDFDD] hover:bg-[#7BDFDD] hover:bg-opacity-95"
        >
          <SlidersHorizontal className=" text-black" size={30} />
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
