// components/specialties/SpecialtiesMainContent.tsx
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import SpecialtyCard from '@/components/specialties/specialtyCard';
import SearchBar from '@/components/specialties/searchBar';
import { Specialty } from '@/utils/interfaces';
import { useTranslation } from 'react-i18next';

interface SpecialtiesMainContentProps {
  specialties: Specialty[];
}

export default function SpecialtiesMainContent({ specialties }: SpecialtiesMainContentProps) {
  const { t } = useTranslation('specialties');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('name');

  const filteredAndSortedSpecialties = specialties
    .filter(
      (specialty) =>
        specialty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        specialty.description.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'doctors') return b.doctors - a.doctors;
      if (sortBy === 'patients') return b.patients - a.patients;
      return 0;
    });

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
      <motion.h1
        className="mb-6 text-3xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t("title")}
      </motion.h1>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <motion.div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {filteredAndSortedSpecialties.map((specialty, index) => (
          <SpecialtyCard key={specialty.id} specialty={specialty} index={index} />
        ))}
      </motion.div>
    </main>
  );
}
