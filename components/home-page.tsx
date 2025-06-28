"use client"

import { ArrowRight } from "lucide-react"

interface HomePageProps {
  onNavigate: (page: string) => void
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Sanofi Logo */}
      <div className="flex justify-center pt-16 pb-8">
        <div className="text-center">
          <div className="text-6xl font-bold text-gray-800 mb-2">
            <span className="relative">
              <span className="text-purple-500 text-2xl absolute -left-4 top-0">•</span>
              sanofi
              <span className="text-purple-500 text-2xl absolute -right-4 top-0">•</span>
            </span>
          </div>
        </div>
      </div>

      {/* Legal Text */}
      <div className="flex-1 flex items-center justify-center px-8">
        <div className="max-w-4xl text-center space-y-4">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong>TITULAIRE DE L'AUTORISATION DE MISE SUR LE MARCHÉ EN ALGÉRIE :</strong> Laboratoires PROPHARMAL SPA,
            Zone d'activité Amara, Groupe 04 N° 509 et 510, route d'Ouled Fayet, Chéraga -Alger -Algérie
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong>Pour toute information Médicale :</strong> Adresse Info Med: infomed@propharmal.dz
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong>Signalez tout éventuel effet indésirable au service de pharmacovigilance PROPHARMAL :</strong> Tél
            PV/Info Med : +213(0)555625 780 ou Par E-mail à l'adresse : Email PV: pharmacovigilance@propharmal.dz
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong>CNPM ( centre national de pharmacovigilance ) :</strong> Si vous souhaitez signaler un cas de
            pharmacovigilance, contactez : Centre National de Pharmacovigilance et de Matériovigilance Sis, NIPA, Nouvel
            Institut Pasteur d'Algérie, Dely Ibrahim. Tél. /Fax : 023.36.75.02/ 023.36.75.27/02336.75.29. E-mail :
            cnpm@cnpm.org.dz
          </p>
        </div>
      </div>

      {/* Propharmal Logo */}
      <div className="flex justify-center py-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-8 h-8 bg-teal-500 rounded-full"></div>
            <span className="text-2xl font-bold text-gray-700">propharmal spa</span>
          </div>
          <div className="text-sm text-teal-600 font-semibold mt-1">cfao HEALTHCARE</div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center p-8">
        <button
          onClick={() => onNavigate("references")}
          className="bg-gradient-to-r from-purple-400 to-purple-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
        >
          Références
        </button>

        <button
          onClick={() => onNavigate("loratadine")}
          className="bg-gradient-to-r from-purple-400 to-purple-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}
