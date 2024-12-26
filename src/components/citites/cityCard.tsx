import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Building, User } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { mergeClasses } from "@/utils/helper";

interface City {
  id: number;
  name: string;
  facilities: number;
  doctors: number;
  image: string;
}

interface CityCardProps {
  city: City;
}

const CityCard: React.FC<CityCardProps> = ({ city }) => {
  const { i18n, t } = useTranslation("cities");
  const locale = i18n.language;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="flex h-full flex-col transition-shadow duration-300 hover:shadow-lg">
        <div className="relative h-48 w-full">
          <Image
            src={city.image}
            alt={`${city.name} cityscape`}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <CardHeader>
          <CardTitle className="flex items-center">
            <MapPin className={mergeClasses(locale === "ar" ? "ml-2" : "mr-2", "h-5 w-5 text-purple-600")} />
            {city.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="mb-2 flex items-center">
            <Building className={mergeClasses(locale === "ar" ? "ml-2" : "mr-2", "h-4 w-4 text-gray-500")} />
            {t('healthcareFacilities')}: {city.facilities}
          </p>
          <p className="flex items-center">
            <User className={mergeClasses(locale === "ar" ? "ml-2" : "mr-2", "h-4 w-4 text-gray-500")} />
            {t('doctors')}: {city.doctors}
          </p>
        </CardContent>
        <CardFooter>
          <Link href={`/cities/${city.id}`} passHref>
            <Button className="w-full">{t('viewDetails')}</Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default CityCard;
