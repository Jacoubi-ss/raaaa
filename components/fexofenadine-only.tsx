"use client"

import { Check, Clock, Brain, Pill, LeafIcon as Liver, Users, Heart, Home } from "lucide-react"
import { BabyIcon } from "lucide-react" // Added import for BabyIcon

interface FexofenadineOnlyProps {
  onNavigate: (page: string) => void
}

export default function FexofenadineOnly({ onNavigate }: FexofenadineOnlyProps) {
  const data = [
    {
      category: "Délai d'action",
      icon: Clock,
      value: "60 minutes* avec un début d'action dès la 5ème minute*",
    },
    {
      category: "Sédation et impact sur la conduite",
      icon: Brain,
      value: { result: "check", text: "Aucune¹⁸" },
    },
    {
      category: "Passage BHE*",
      icon: Brain,
      value: { result: "check", text: "Non¹" },
    },
    {
      category: "Métabolisme hépatique",
      icon: Liver,
      value: { result: "check", text: "Non¹¹" },
    },
    {
      category: "Interaction médicamenteuse/alimentaire",
      icon: Pill,
      value: { result: "check", text: "Non¹²" },
    },
  ]

  const data2 = [
    {
      category: "Effets anticholinergiques",
      icon: Brain,
      value: { result: "check", text: "Non¹¹¹" },
    },
    {
      category: "Effets cardiotoxiques",
      icon: Heart,
      value: { result: "check", text: "Non¹¹⁴" },
    },
    {
      category: "Insuffisance rénale",
      icon: BabyIcon,
      value: { result: "check", text: "Non¹" },
    },
    {
      category: "Insuffisance hépatique",
      icon: Liver,
      value: { result: "check", text: "Non¹" },
    },
    {
      category: "Sujet âgé",
      icon: Users,
      value: { result: "check", text: "Non¹" },
    },
  ]

  const data3 = [
    {
      category: "Utilisable chez la femme enceinte selon le CRAT",
      icon: Users,
      value: { result: "check", text: "Oui¹⁶" },
    },
    {
      category: "Utilisable chez la femme allaitante selon le CRAT",
      icon: Users,
      value: { result: "check", text: "Oui¹⁷" },
    },
    {
      category: "Utilisation à long terme (> 6 mois)",
      icon: Clock,
      value: { result: "check", text: "Oui¹⁸ (jusqu'à 12 mois)" },
    },
  ]

  const renderCell = (content: any) => {
    if (typeof content === "string") {
      return <div className="text-xs leading-tight text-gray-700 break-words">{content}</div>
    }

    if (content?.result) {
      return (
        <div>
          <Check className="w-4 h-4 mx-auto text-green-500 mb-1" />
          <div className="text-xs font-semibold leading-tight break-words">{content.text}</div>
        </div>
      )
    }

    return <div className="text-xs leading-tight text-gray-700 break-words">{content}</div>
  }

  const renderBlock = (blockData: any[]) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden min-w-72">
      {blockData.map((row, index) => {
        const IconComponent = row.icon
        const isLastRow = index === blockData.length - 1

        return (
          <div key={index} className={`grid grid-cols-2 min-h-[80px] ${!isLastRow ? "border-b border-gray-200" : ""}`}>
            <div className="bg-gradient-to-br from-purple-300 to-purple-400 p-3 flex items-center justify-center text-center min-h-[80px]">
              <div>
                <IconComponent className="w-4 h-4 mx-auto mb-2 text-purple-800" />
                <div className="text-purple-800 font-semibold text-xs leading-tight break-words">{row.category}</div>
              </div>
            </div>
            <div className="p-3 text-center border-l border-gray-200 flex items-center justify-center">
              {renderCell(row.value)}
            </div>
          </div>
        )
      })}
    </div>
  )

  const medications = [
    "fexofenadine",
    "loratadine",
    "cetirizine",
    "desloratadine",
    "bilastine",
    "levocetirizine",
    "ebastine",
  ]
  const medicationLabels = {
    fexofenadine: "Fexofénadine",
    loratadine: "Loratadine",
    cetirizine: "Cétirizine",
    desloratadine: "Desloratadine",
    bilastine: "Bilastine",
    levocetirizine: "Lévocétirizine",
    ebastine: "Ebastine",
  }

  return (
    <div className="h-screen bg-gray-50 p-2 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main Header */}
        <div className="bg-gradient-to-r from-purple-400 to-purple-500 rounded-xl p-3 mb-3 shadow-lg">
          <h1 className="text-white text-lg md:text-xl font-bold text-center">
            COMPARATIF FEXOFÉNADINE VS AUTRES ANTIHISTAMINIQUES
          </h1>
        </div>

        {/* Secondary Header */}
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-3 mb-4 shadow-lg max-w-xl mx-auto">
          <h2 className="text-white text-lg font-bold text-center">Fexofénadine</h2>
        </div>

        {/* Comparison Blocks */}
        <div className="flex gap-2 mb-4 justify-center">
          {renderBlock(data)}
          {renderBlock(data2)}
          {renderBlock(data3)}
        </div>

        {/* Bottom Navigation Pills */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-2 relative">
          {medications.map((med) => (
            <button
              key={med}
              onClick={() => onNavigate(med)}
              className={`text-sm px-4 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow ${
                med === "fexofenadine"
                  ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white"
                  : "bg-gradient-to-r from-purple-400 to-purple-500 text-white"
              }`}
            >
              {medicationLabels[med as keyof typeof medicationLabels]}
            </button>
          ))}

          {/* Home Button */}
          <button
            onClick={() => onNavigate("home")}
            className="bg-gradient-to-r from-purple-400 to-purple-500 text-white p-2 rounded-full shadow-lg hover:shadow-xl transition-shadow ml-4"
          >
            <Home className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
