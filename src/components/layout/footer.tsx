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

export function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white">
      <div className="container mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">About MyDoctor.IQ</h3>
            <p className="mb-4 text-gray-400">
              MyDoctor.IQ is Iraq's leading healthcare facilities directory,
              connecting patients with quality healthcare services across the
              country.
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
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Find a Doctor
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Find Healthcare Facilities
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Book Appointments
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Read Patient Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Healthcare News
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Medical Directory
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Information</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-purple-500" />
                <span className="text-gray-400">Baghdad, Iraq</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-purple-500" />
                <span className="text-gray-400">+964 123 456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-purple-500" />
                <span className="text-gray-400">info@mydoctor.iq</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-gray-400">
              &copy; 2024 MyDoctor.IQ. All rights reserved.
            </p>
            <nav className="mt-4 flex gap-4 md:mt-0">
              <Link
                href="#"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                Cookie Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                Accessibility
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
