'use client';
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation('footer');

  return (
    <footer className="w-full bg-gray-900 text-white">
      <div className="container mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">{t('About_Us')}</h3>
            <p className="mb-4 text-gray-400">
              {t('About_Us_Description')}
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <span className="sr-only">Linkedin</span>
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">{t('Quick_Links')}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  {t('Home')}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  {t('About_Us')}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  {t('Find_a_Doctor')}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  {t('Services')}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  {t('Contact_Us')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">{t('Our_Services')}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  {t('Find_Healthcare_Facilities')}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  {t('Book_Appointments')}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  {t('Read_Patient_Reviews')}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  {t('Healthcare_News')}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  {t('Medical_Directory')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">{t('Contact_Information')}</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="mx-2 h-5 w-5 text-purple-500" />
                <span className="text-gray-400">{t('Baghdad_Iraq')}</span>
              </li>
              <li className="flex items-center">
                <Phone className="mx-2 h-5 w-5 text-purple-500" />
                <span className="text-gray-400">{t('Phone_Number')}</span>
              </li>
              <li className="flex items-center">
                <Mail className="mx-2 h-5 w-5 text-purple-500" />
                <span className="text-gray-400">{t('Email')}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-gray-400">
              &copy; 2024 MyDoctor.IQ. {t('All_rights_reserved')}
            </p>
            <nav className="mt-4 flex gap-4 md:mt-0">
              <Link
                href="#"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                {t('Terms_of_Service')}
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                {t('Privacy_Policy')}
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                {t('Cookie_Policy')}
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                {t('Accessibility')}
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
