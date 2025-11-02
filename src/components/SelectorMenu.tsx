import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function SelectorMenu() {
  return (
    <Select>
      <SelectTrigger className="w-full   hover:bg-green-800 p-4 transition-colors duration-200 flex items-center justify-between group rounded text-white">
        
        <SelectValue 
          placeholder="—Veuillez choisir une option—" 
          className="[&>span]:text-white" 
        />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="particulier">un particulier</SelectItem>
        <SelectItem value="bureau">un bureau</SelectItem>
        <SelectItem value="hotel-restaurant">un hôtel - un restaurant</SelectItem>
        <SelectItem value="agence-evenementielle">une agence événementielle</SelectItem>
        <SelectItem value="cabinet-architecte">{`un cabinet d'architecte`}</SelectItem>
        <SelectItem value="autres">autres</SelectItem>
      </SelectContent>
    </Select>
  )
}
