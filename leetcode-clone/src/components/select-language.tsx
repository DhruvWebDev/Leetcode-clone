import * as React from "react"
import {Code2} from "lucide-react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectLanguage() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Language</SelectLabel>
          <SelectItem value="Javascript">Javascript</SelectItem>
          <SelectItem value="Python">Python</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
