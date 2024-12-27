import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  const { t } = useTranslation('cities');

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
          placeholder={t('searchCities')}
          className="pr-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
      </div>
    </motion.div>
  );
};

export default SearchBar;
