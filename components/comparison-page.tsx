"use client"

import { Check, X, Clock, Brain, Pill, LeafIcon as Liver, Users, Heart, BabyIcon as Kidney, Home } from "lucide-react"

const iconMap = {
  Clock,
  Brain,
  Pill,
  Liver,
  Users,
  Heart,
  Kidney,
}

interface ComparisonPageProps {
  data: any
  onNavigate: (page: string) => void
  currentPage: string
}

export default function ComparisonPage({ data, onNavigate, currentPage }: ComparisonPageProps) {
  const renderCell = (content: any) => {
    if (typeof content === "string") {
      return <div className="text-xs leading-tight text-gray-700 break-words">{content}</div>
    }

    if (content?.result) {
      const Icon = content.result === "check" ? Check : X
      const color = content.result === "check" ? "text-green-500" : "text-red-500"
      return (
        <div>
          <Icon className={`w-4 h-4 mx-auto ${color} mb-1`} />
          <div className="text-xs font-semibold leading-tight break-words">{content.text}</div>
        </div>
      )
    }

    return <div className="text-xs leading-tight text-gray-700 break-words">{content}</div>
  }

  const renderBlock = (blockData: any[], title1: string, title2: string) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden min-w-72">
      {/* Header */}
      <div className="grid grid-cols-3 border-b border-gray-200">
        <div className="p-2"></div>
        <div className="p-2 text-center border-l border-gray-200">
          <div className="text-purple-600 font-semibold text-sm leading-tight">{title1}</div>
        </div>
        <div className="p-2 text-center border-l border-gray-200">
          <div className="text-purple-600 font-semibold text-sm leading-tight">{title2}</div>
        </div>
      </div>

      {/* Rows */}
      {blockData.map((row, index) => {
        const IconComponent = iconMap[row.icon as keyof typeof iconMap]
        const isLastRow = index === blockData.length - 1

        return (
          <div key={index} className={`grid grid-cols-3 min-h-[80px] ${!isLastRow ? "border-b border-gray-200" : ""}`}>
            <div className="bg-gradient-to-br from-purple-300 to-purple-400 p-3 flex items-center justify-center text-center min-h-[80px]">
              <div>
                <IconComponent className="w-4 h-4 mx-auto mb-2 text-purple-800" />
                <div className="text-purple-800 font-semibold text-xs leading-tight break-words">{row.category}</div>
              </div>
            </div>
            <div className="p-3 text-center border-l border-gray-200 flex items-center justify-center">
              {renderCell(row.fexofenadine)}
            </div>
            <div className="p-3 text-center border-l border-gray-200 flex items-center justify-center">
              {renderCell(row.comparator)}
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
          <h2 className="text-white text-lg font-bold text-center">{data.title}</h2>
        </div>

        {/* Comparison Blocks */}
        <div className="flex gap-2 mb-4 justify-center">
          {data.data && renderBlock(data.data, "Fexofénadine", data.title.split(" VS ")[1])}
          {data.data2 && renderBlock(data.data2, "Fexofénadine", data.title.split(" VS ")[1])}
          {data.data3 && renderBlock(data.data3, "Fexofénadine", data.title.split(" VS ")[1])}
        </div>

        {/* Bottom Navigation Pills */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-2 relative">
          {medications.map((med) => (
            <button
              key={med}
              onClick={() => onNavigate(med)}
              className={`text-sm px-4 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow ${
                currentPage === med
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
