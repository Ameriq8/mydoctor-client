'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CityCard from './cityCard';
import SearchBar from './searchBar';

interface City {
  id: number;
  name: string;
  facilities: number;
  doctors: number;
  image: string;
}

interface CitiesMainContentProps {
  cities: City[];
}

const CitiesMainContent: React.FC<CitiesMainContentProps> = ({ cities }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { t } = useTranslation('cities');

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <motion.div className="flex-1 px-4 py-8">
      <motion.h1
        className="mb-6 text-3xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t('cities')}
      </motion.h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <motion.div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {filteredCities.map((city) => (
          <motion.div
            key={city.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <CityCard city={city} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default CitiesMainContent;
