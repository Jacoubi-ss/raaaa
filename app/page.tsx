"use client"

import { useState } from "react"
import HomePage from "../components/home-page"
import ComparisonPage from "../components/comparison-page"
import FexofenadineOnly from "../components/fexofenadine-only"
import ReferencesPage from "../components/references-page"
import { comparisonData } from "../components/comparison-data"

export default function App() {
  const [currentPage, setCurrentPage] = useState("home")

  const handleNavigate = (page: string) => {
    setCurrentPage(page)
  }

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />
      case "references":
        return <ReferencesPage onNavigate={handleNavigate} />
      case "fexofenadine":
        return <FexofenadineOnly onNavigate={handleNavigate} />
      case "loratadine":
        return <ComparisonPage data={comparisonData.loratadine} onNavigate={handleNavigate} currentPage={currentPage} />
      case "cetirizine":
        return <ComparisonPage data={comparisonData.cetirizine} onNavigate={handleNavigate} currentPage={currentPage} />
      case "desloratadine":
        return (
          <ComparisonPage data={comparisonData.desloratadine} onNavigate={handleNavigate} currentPage={currentPage} />
        )
      case "levocetirizine":
        return (
          <ComparisonPage data={comparisonData.levocetirizine} onNavigate={handleNavigate} currentPage={currentPage} />
        )
      case "bilastine":
        return <ComparisonPage data={comparisonData.bilastine} onNavigate={handleNavigate} currentPage={currentPage} />
      case "ebastine":
        return <ComparisonPage data={comparisonData.ebastine} onNavigate={handleNavigate} currentPage={currentPage} />
      default:
        return <HomePage onNavigate={handleNavigate} />
    }
  }

  return renderPage()
}
