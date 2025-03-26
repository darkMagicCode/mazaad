import { useState, useEffect } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

interface Category {
  id: number;
  name: string;
  parent_id?: number;
}

interface Property {
  id: number;
  name: string;
  options: PropertyOption[];
}

interface PropertyOption {
  id: number;
  name: string;
  childProperties?: Property[];
}

interface SelectedValue {
  propertyId: number;
  value: string;
  isCustom: boolean;
  children?: SelectedValue[];
}

const API_HEADERS = {
  "content-language": "en",
  Accept: "application/json",
  "private-key": "Tg$LXgp7uK!D@aAj^aT3TmWY9a9u#qh5g&xgEETJ",
  platform: "Postman",
  currency: "AED",
};

export function ProductForm({ isOpen, onClose }: any) {
  const [mainCategories, setMainCategories] = useState<Category[]>([]);
  const [selectedMain, setSelectedMain] = useState<number | null>(null);
  const [subCategories, setSubCategories] = useState<Category[]>([]);
  const [selectedSub, setSelectedSub] = useState<number | null>(null);
  const [properties, setProperties] = useState<Property[]>([]);
  const [selectedValues, setSelectedValues] = useState<SelectedValue[]>([]);
  const [showResults, setShowResults] = useState(false);

  // Fetch main categories
  useEffect(() => {
    const fetchMainCategories = async () => {
      try {
        const response = await fetch(
          "https://stagingapi.mazaady.com/api/v1/all-categories/web",
          { headers: API_HEADERS }
        );
        const data = await response.json();
        setMainCategories(data.data.categories || []);
        console.log(data);
      } catch (error) {
        console.error("Error fetching main categories:", error);
      }
    };
    fetchMainCategories();
  }, []);

  useEffect(() => {
    const fetchSubCategories = async () => {
      if (selectedMain) {
        try {
          const mainCategory = mainCategories.filter(
            (c) => c.parent_id === selectedMain
          );
          setSubCategories(mainCategory || []);
        } catch (error) {
          console.error("Error fetching subcategories:", error);
        }
      }
    };
    fetchSubCategories();
  }, [selectedMain]);

  useEffect(() => {
    const fetchProperties = async () => {
      if (selectedSub) {
        try {
          const response = await fetch(
            `https://stagingapi.mazaady.com/api/v1/properties/${selectedSub}`,
            { headers: API_HEADERS }
          );
          const data = await response.json();
          setProperties(data.data.options || []);
        } catch (error) {
          console.error("Error fetching properties:", error);
        }
      }
    };
    fetchProperties();
  }, [selectedSub]);

  const handlePropertySelect = async (
    property: Property,
    option: PropertyOption | "other",
    value: string
  ) => {
    const newValue: SelectedValue = {
      propertyId: property.id,
      value: value,
      isCustom: option === "other",
    };

    if (option !== "other" && option.childProperties) {
      newValue.children = await fetchChildProperties(option);
    }

    setSelectedValues((prev) => [
      ...prev.filter((v) => v.propertyId !== property.id),
      newValue,
    ]);
  };

  const fetchChildProperties = async (
    option: PropertyOption
  ): Promise<SelectedValue[]> => {
    try {
      const response = await fetch(
        `https://stagingapi.mazaady.com/api/v1/option-properties/${option.id}`,
        { headers: API_HEADERS }
      );
      const data = await response.json();
      return (
        data.data?.map((prop: Property) => ({
          propertyId: prop.id,
          value: "",
          isCustom: false,
        })) || []
      );
    } catch (error) {
      console.error("Error fetching child properties:", error);
      return [];
    }
  };

  const renderPropertyDropdown = (property: Property, parentId?: number) => (
    <div key={property.id} className="mb-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-full text-left">
            {selectedValues.find((v) => v.propertyId === property.id)?.value ||
              `Select ${property.name}`}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0">
          <Command>
            <CommandInput placeholder={`Search ${property.name}...`} />
            <CommandEmpty>No options found.</CommandEmpty>
            <CommandGroup>
              {property.options.map((option) => (
                <CommandItem
                  key={option.id}
                  onSelect={() =>
                    handlePropertySelect(property, option, option.name)
                  }
                >
                  {option.name}
                </CommandItem>
              ))}
              <CommandItem
                onSelect={() =>
                  handlePropertySelect(property, "other", "Other")
                }
              >
                Other
              </CommandItem>
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>

      {selectedValues.find((v) => v.propertyId === property.id)?.isCustom && (
        <Input
          className="mt-2"
          placeholder={`Enter ${property.name}`}
          onChange={(e) =>
            handlePropertySelect(property, "other", e.target.value)
          }
        />
      )}

      {selectedValues
        .find((v) => v.propertyId === property.id)
        ?.children?.map((child) =>
          renderPropertyDropdown(
            properties.find((p) => p.id === child.propertyId)!,
            property.id
          )
        )}
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Select Categories</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="space-y-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full text-left">
                  {selectedMain
                    ? mainCategories.find((c) => c.id === selectedMain)?.name
                    : "Select Main Category"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-0">
                <Command>
                  <CommandInput placeholder="Search categories..." />
                  <CommandEmpty>No categories found.</CommandEmpty>
                  <CommandGroup>
                    {mainCategories.map((category) => (
                      <CommandItem
                        key={category.id}
                        onSelect={() => setSelectedMain(category.id)}
                      >
                        {category.name}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>

            {selectedMain && (
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full text-left">
                    {selectedSub
                      ? subCategories.find((c) => c.id === selectedSub)?.name
                      : "Select Subcategory"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0">
                  <Command>
                    <CommandInput placeholder="Search subcategories..." />
                    <CommandEmpty>No subcategories found.</CommandEmpty>
                    <CommandGroup>
                      {subCategories.map((category) => (
                        <CommandItem
                          key={category.id}
                          onSelect={() => setSelectedSub(category.id)}
                        >
                          {category.name}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
            )}

            {[{ id: 1, name: "Property 1" }].map((property) => (
              <div key={property.id}>{property.name}</div>
            ))}
          </div>

          <Button className="w-full" onClick={() => setShowResults(true)}>
            Submit
          </Button>
        </div>
        <div>
          {
            <div className="mt-4">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border px-4 py-2">Key</th>
                    <th className="border px-4 py-2">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">Main Category</td>
                    <td className="border px-4 py-2">
                      {mainCategories.find((c) => c.id === selectedMain)?.name}
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Subcategory</td>
                    <td className="border px-4 py-2">
                      {subCategories.find((c) => c.id === selectedSub)?.name}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          }
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
