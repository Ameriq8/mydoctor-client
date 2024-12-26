'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Users, Globe, Clock } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { formatCount, mergeClasses } from '@/utils/helper';
import { useEffect, useRef, useState } from 'react';

export default function AboutComponent() {
  const { i18n, t } = useTranslation('about');
  const locale = i18n.language;

  const AnimatedCounter = ({
    end,
    duration = 2,
    pluralKey,
  }: {
    end: number;
    duration?: number;
    pluralKey: string; // Key for ICU pluralization
  }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef<HTMLSpanElement>(null);
    const isInView = useInView(countRef, { once: true });

    useEffect(() => {
      if (isInView) {
        let start = 0;
        const increment = end / (duration * 60);
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 1000 / 60);
        return () => clearInterval(timer);
      }
    }, [end, duration, isInView]);

    return (
      <span ref={countRef}>{t(pluralKey, { count, formattedCount: formatCount(count) })}</span>
    );
  };

  const impacts = [
    { key: 'Registered_Users', count: 500 },
    { key: 'Healthcare_Providers', count: 1_000 },
    { key: 'Governorates_Covered', count: 18 },
    { key: 'Monthly_Appointments', count: 50_000 },
  ];

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
      <motion.h1
        className="mb-6 text-3xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t('About_Title')}
      </motion.h1>
      <motion.section
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="mb-4 text-lg">{t('About_Description_1')}</p>
        <p className="mb-4 text-lg">{t('About_Description_2')}</p>
      </motion.section>

      <motion.section
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4">{t('Our_Impact_Title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map(({ key, count }) => (
            <Card key={key}>
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-purple-600">
                  <AnimatedCounter end={count} pluralKey={`Our_Impacts.${key}`} />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{t(`Our_Impacts.${key}_Description`)}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="mb-4 text-2xl font-bold">{t('Values_Title')}</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {(t('Values', { returnObjects: true }) as any[]).map((value: any, index: number) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              <Card className="h-full transition-shadow duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    {index === 0 && (
                      <Heart
                        className={mergeClasses(
                          locale === 'ar' ? 'ml-2' : 'mr-2',
                          'h-6 w-6 text-purple-600',
                        )}
                      />
                    )}
                    {index === 1 && (
                      <Users
                        className={mergeClasses(
                          locale === 'ar' ? 'ml-2' : 'mr-2',
                          'h-6 w-6 text-purple-600',
                        )}
                      />
                    )}
                    {index === 2 && (
                      <Globe
                        className={mergeClasses(
                          locale === 'ar' ? 'ml-2' : 'mr-2',
                          'h-6 w-6 text-purple-600',
                        )}
                      />
                    )}
                    {index === 3 && (
                      <Clock
                        className={mergeClasses(
                          locale === 'ar' ? 'ml-2' : 'mr-2',
                          'h-6 w-6 text-purple-600',
                        )}
                      />
                    )}
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h2 className="mb-4 text-2xl font-bold">{t('Join_Title')}</h2>
        <p className="mb-4 text-lg">{t('Join_Description')}</p>
        <Button size="lg">{t('Join_Button')}</Button>
      </motion.section>
    </main>
  );
}
