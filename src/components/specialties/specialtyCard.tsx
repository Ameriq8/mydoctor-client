import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Stethoscope, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Specialty } from '@/utils/interfaces';
import { useTranslation } from 'react-i18next';
import { mergeClasses } from '@/utils/helper';

interface SpecialtyCardProps {
  specialty: Specialty;
  index: number;
}

export default function SpecialtyCard({ specialty, index }: SpecialtyCardProps) {
  const { i18n, t } = useTranslation('specialties');
  const locale = i18n.language;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="flex h-full flex-col transition-shadow duration-300 hover:shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Stethoscope className={mergeClasses(locale === "ar" ? "ml-2" : "mr-2" ,"h-5 w-5 text-purple-600")} />
            {specialty.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription className="mb-4">{specialty.description}</CardDescription>
          <p className="mb-2 flex items-center">
            <Users className="mr-2 h-4 w-4 text-gray-500" />
            {specialty.doctors} {t('sortBy.doctors')}
          </p>
          <p className="flex items-center">
            <Users className="mr-2 h-4 w-4 text-gray-500" />
            {specialty.patients} {t('sortBy.patients')}
          </p>
        </CardContent>
        <CardFooter>
          <Link href={`/specialties/${specialty.id}`} className="w-full">
            <Button className="w-full">View Doctors</Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
