"use client"
import React, { useState } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/atoms/select"

interface SelectCompProps {
  options: { value: string; label: string }[]
  placeholder?: string
  onValueChange: (value: string) => void
}

export const SelectComp: React.FC<SelectCompProps> = ({
  options,
  placeholder = "Select an option",
  onValueChange,
  ...props
}) => {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedValue, setSelectedValue] = useState("")

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleValueChange = (value: string) => {
    setSelectedValue(value)
    onValueChange(value)
  }

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault()
    setSelectedValue("")
    onValueChange("")
  }

  return (
    <Select
    {...props}
    
      value={selectedValue}
      onValueChange={handleValueChange}
      onOpenChange={(open) => !open && setSearchQuery("")}
    >
      <SelectTrigger className="relative w-52">
        <SelectValue placeholder={placeholder} />
        {selectedValue && (
          <div
            onClick={handleClear}
            className=" absolute right-8 top-1/2 -translate-y-1/2 p-1 rounded-full bg-gray-200 hover:bg-gray-300 z-50 pointer-events-auto"
          >
            <div className="w-4 h-4 text-gray-600">X</div>
          </div>
        )}
      </SelectTrigger>
      <SelectContent>
        {/* Search Input */}
        <div className="sticky top-0 bg-background z-10 p-2 border-b">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onClick={(e) => e.stopPropagation()}
            className="w-full px-3 py-1.5 text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>

        {/* Filtered Results */}
        {filteredOptions.length > 0 ? (
          filteredOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))
        ) : (
          <div className="py-1.5 px-3 text-sm text-muted-foreground">
            No matches found1
          </div>
        )}
      </SelectContent>
    </Select>
  )
}
