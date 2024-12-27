import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  sortBy: string;
  setSortBy: (value: string) => void;
}

export default function SearchBar({
  searchTerm,
  setSearchTerm,
  sortBy,
  setSortBy,
}: SearchBarProps) {
  return (
    <motion.div
      className="mb-6 flex flex-col gap-4 sm:flex-row"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative flex-grow">
        <Input
          type="search"
          placeholder="Search specialties..."
          className="pr-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
      </div>
      <Select value={sortBy} onValueChange={setSortBy}>
        <SelectTrigger className="w-full sm:w-[180px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="name">Name</SelectItem>
          <SelectItem value="doctors">Number of Doctors</SelectItem>
          <SelectItem value="patients">Number of Patients</SelectItem>
        </SelectContent>
      </Select>
    </motion.div>
  );
}
