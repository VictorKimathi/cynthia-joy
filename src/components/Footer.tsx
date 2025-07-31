import React from 'react';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-white border-t border-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600">
              © {currentYear} Cynthia Joy. All rights reserved.
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">
              cynthia.joy@student.egerton.ac.ke
            </p>
          </div>
        </div>
      </div>
    </footer>;
}