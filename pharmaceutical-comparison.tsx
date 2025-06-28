import { Check, X, Clock, Brain, Pill, LeafIcon as Liver, Users, Heart, BabyIcon as Kidney, Home } from "lucide-react"

export default function Component() {
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
          <h2 className="text-white text-lg font-bold text-center">Fexofénadine VS Loratadine</h2>
        </div>

        {/* Three Separate Comparison Blocks */}
        <div className="flex gap-2 mb-4 justify-center">
          {/* Block 1: Left Comparison */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden min-w-72">
            {/* Header */}
            <div className="grid grid-cols-3 border-b border-gray-200">
              <div className="p-2"></div>
              <div className="p-2 text-center border-l border-gray-200">
                <div className="text-purple-600 font-semibold text-sm leading-tight">Fexofénadine</div>
              </div>
              <div className="p-2 text-center border-l border-gray-200">
                <div className="text-purple-600 font-semibold text-sm leading-tight">Loratadine</div>
              </div>
            </div>

            {/* Row 1 */}
            <div className="grid grid-cols-3 border-b border-gray-200 min-h-[80px]">
              <div className="bg-gradient-to-br from-purple-300 to-purple-400 p-3 flex items-center justify-center text-center min-h-[80px]">
                <div>
                  <Clock className="w-4 h-4 mx-auto mb-2 text-purple-800" />
                  <div className="text-purple-800 font-semibold text-xs leading-tight break-words">Délai d'action</div>
                </div>
              </div>
              <div className="p-3 text-center border-l border-gray-200 flex items-center justify-center">
                <div className="text-xs leading-tight text-gray-700 break-words">
                  60 minutes* avec un début d'action dès la 5ème minute*
                </div>
              </div>
              <div className="p-3 text-center border-l border-gray-200 flex items-center justify-center">
                <div className="text-xs leading-tight text-gray-700 break-words">A partir de 1h42¹</div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-3 border-b border-gray-200 min-h-[80px]">
              <div className="bg-gradient-to-br from-purple-300 to-purple-400 p-3 flex items-center justify-center text-center min-h-[80px]">
                <div>
                  <Brain className="w-4 h-4 mx-auto mb-2 text-purple-800" />
                  <div className="text-purple-800 font-semibold text-xs leading-tight break-words">
                    Sédation et impact sur la conduite
                  </div>
                </div>
              </div>
              <div className="p-3 text-center border-l border-gray-200 flex items-center justify-center">
                <div>
                  <Check className="w-4 h-4 mx-auto text-green-500 mb-1" />
                  <div className="text-xs font-semibold leading-tight break-words">Aucune¹⁸</div>
                </div>
              </div>
              <div className="p-3 text-center border-l border-gray-200 flex items-center justify-center">
                <div>
                  <X className="w-4 h-4 mx-auto text-red-500 mb-1" />
                  <div className="text-xs font-semibold leading-tight break-words">prudence somnolence possible¹</div>
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-3 border-b border-gray-200 min-h-[80px]">
              <div className="bg-gradient-to-br from-purple-300 to-purple-400 p-3 flex items-center justify-center text-center min-h-[80px]">
                <div>
                  <Brain className="w-4 h-4 mx-auto mb-2 text-purple-800" />
                  <div className="text-purple-800 font-semibold text-xs leading-tight break-words">Passage BHE*</div>
                </div>
              </div>
              <div className="p-3 text-center border-l border-gray-200 flex items-center justify-center">
                <div>
                  <Check className="w-4 h-4 mx-auto text-green-500 mb-1" />
                  <div className="text-xs font-semibold leading-tight break-words">Non¹</div>
                </div>
              </div>
              <div className="p-3 text-center border-l border-gray-200 flex items-center justify-center">
                <div>
                  <X className="w-4 h-4 mx-auto text-red-500 mb-1" />
                  <div className="text-xs font-semibold leading-tight break-words">Oui¹⁰</div>
                </div>
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-3 border-b border-gray-200 min-h-[80px]">
              <div className="bg-gradient-to-br from-purple-300 to-purple-400 p-3 flex items-center justify-center text-center min-h-[80px]">
                <div>
                  <Liver className="w-4 h-4 mx-auto mb-2 text-purple-800" />
                  <div className="text-purple-800 font-semibold text-xs leading-tight break-words">
                    Métabolisme hépatique
                  </div>
                </div>
              </div>
              <div className="p-3 text-center border-l border-gray-200 flex items-center justify-center">
                <div>
                  <Check className="w-4 h-4 mx-auto text-green-500 mb-1" />
                  <div className="text-xs font-semibold leading-tight break-words">Non¹¹</div>
                </div>
              </div>
              <div className="p-3 text-center border-l border-gray-200 flex items-center justify-center">
                <div>
                  <X className="w-4 h-4 mx-auto text-red-500 mb-1" />
                  <div className="text-xs font-semibold leading-tight break-words">Oui¹</div>
                </div>
              </div>
            </div>

            {/* Row 5 */}
            <div className="grid grid-cols-3 min-h-[80px]">
              <div className="bg-gradient-to-br from-purple-300 to-purple-400 p-3 flex items-center justify-center text-center min-h-[80px]">
                <div>
                  <Pill className="w-4 h-4 mx-auto mb-2 text-purple-800" />
                  <div className="text-purple-800 font-semibold text-xs leading-tight break-words">
                    Interaction médicamenteuse/ alimentaire
                  </div>
                </div>
              </div>
              <div className="p-3 text-center border-l border-gray-200 flex items-center justify-center">
                <div>
                  <Check className="w-4 h-4 mx-auto text-green-500 mb-1" />
                  <div className="text-xs font-semibold leading-tight break-words">Non¹²</div>
                </div>
              </div>
              <div className="p-3 text-center border-l border-gray-200 flex items-center justify-center">
                <div>
                  <X className="w-4 h-4 mx-auto text-red-500 mb-1" />
                  <div className="text-xs font-semibold leading-tight break-words">
                    Potentielle avec les inhibiteurs CYP3A4/2D6¹
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Block 2: Middle Comparison */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden min-w-72">
            {/* Header */}
            <div className="grid grid-cols-3 border-b border-gray-200">
              <div className="p-2"></div>
              <div className="p-2 text-center border-l border-gray-200">
                <div className="text-purple-600 font-semibold text-sm leading-tight">Fexofénadine</div>
              </div>
              <div className="p-2 text-center border-l border-gray-200">
                <div className="text-purple-600 font-semibold text-sm leading-tight">Loratadine</div>
              </div>
            </div>

            {/* Row 1 */}
            <div className="grid grid-cols-3 border-b border-gray-200 min-h-[80px]">
              <div className="bg-gradient-to-br from-purple-300 to-purple-400 p-3 flex items-center justify-center text-center min-h-[80px]">
                <div>
                  <Brain className="w-4 h-4 mx-auto mb-2 text-purple-800" />
                  <div className="text-purple-800 font-semibold text-xs leading-tight break-words">
                    Effets anticholinergiques
                  </div>
                </div>
              </div>
              <div className="p-3 text-center border-l border-gray-200 flex items-center justify-center">
                <div>
                  <Check className="w-4 h-4 mx-auto text-green-500 mb-1" />
                  <div className="text-xs font-semibold leading-tight break-words">Oui¹¹²</div>
                </div>
              </div>
              <div className="p-3 text-center border-l border-gray-200 flex items-center justify-center">
                <div>
                  <X className="w-4 h-4 mx-auto text-red-500 mb-1" />
                  <div className="text-xs font-semibold leading-tight break-words">Non¹¹¹</div>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-3 border-b border-gray-200 min-h-[80px]">
              <div className="bg-gradient-to-br from-purple-300 to-purple-400 p-3 flex items-center justify-center text-center min-h-[80px]">
                <div>
                  <Heart className="w-4 h-4 mx-auto mb-2 text-purple-800" />
                  <div className="text-purple-800 font-semibold text-xs leading-tight break-words">
                    Effets cardiotoxiques
                  </div>
                </div>
              </div>
              <div className="p-3 text-center border-l border-gray-200 flex items-center justify-center">
                <div>
                  <Check className="w-4 h-4 mx-auto text-green-500 mb-1" />
                  <div className="text-xs font-semibold leading-tight break-words">Non¹¹⁴</div>
                </div>
              </div>
              <div className="p-3 text-center border-l border-gray-200 flex items-center justify-center">
                <div className="text-xs leading-tight break-words">
                  un effet sur l'amplitude du courant hERG à des concentrations élevées.¹⁴ Peut entraîner un blocage des
                  canaux potassiques cardiaques par le gène hKv1.5¹⁵
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-3 border-b border-gray-200 min-h-[80px]">
              <div className="bg-gradient-to-br from-purple-300 to-purple-400 p-3 flex items-center justify-center text-center min-h-[80px]">
                <div>
                  <Kidney className="w-4 h-4 mx-auto mb-2 text-purple-800" />
                  <div className="text-purple-800 font-semibold text-xs leading-tight break-words">
                    Insuffisance rénale
                  </div>
                </div>
              </div>
              <div className="p-3 text-center border-l border-gray-200 flex items-center justify-center">
                <div>
                  <Check className="w-4 h-4 mx-auto text-green-500 mb-1" />
                  <div className="text-xs font-semibold leading-tight break-words">Non¹</div>
                </div>
              </div>
              <div className="p-3 text-center border-l border-gray-200 flex items-center justify-center">
                <div>
                  <X className="w-4 h-4 mx-auto text-red-500 mb-1" />
                  <div className="text-xs font-semibold leading-tight break-words">Oui¹</div>
                </div>
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-3 border-b border-gray-200 min-h-[80px]">
              <div className="bg-gradient-to-br from-purple-300 to-purple-400 p-3 flex items-center justify-center text-center min-h-[80px]">
                <div>
                  <Liver className="w-4 h-4 mx-auto mb-2 text-purple-800" />
                  <div className="text-purple-800 font-semibold text-xs leading-tight break-words">
                    Insuffisance hépatique
                  </div>
                </div>
              </div>
              <div className="p-3 text-center border-l border-gray-200 flex items-center justify-center">
                <div>
                  <Check className="w-4 h-4 mx-auto text-green-500 mb-1" />
                  <div className="text-xs font-semibold leading-tight break-words">Non¹</div>
                </div>
              </div>
              <div className="p-3 text-center border-l border-gray-200 flex items-center justify-center">
                <div className="text-xs font-semibold leading-tight break-words">Oui (atteinte sévère)¹</div>
              </div>
            </div>

            {/* Row 5 */}
            <div className="grid grid-cols-3 min-h-[80px]">
              <div className="bg-gradient-to-br from-purple-300 to-purple-400 p-3 flex items-center justify-center text-center min-h-[80px]">
                <div>
                  <Users className="w-4 h-4 mx-auto mb-2 text-purple-800" />
                  <div className="text-purple-800 font-semibold text-xs leading-tight break-words">Sujet âgé</div>
                </div>
              </div>
              <div className="p-3 text-center border-l border-gray-200 flex items-center justify-center">
                <div>
                  <Check className="w-4 h-4 mx-auto text-green-500 mb-1" />
                  <div className="text-xs font-semibold leading-tight break-words">Non¹</div>
                </div>
              </div>
              <div className="p-3 text-center border-l border-gray-200 flex items-center justify-center">
                <div className="text-xs font-semibold leading-tight break-words">Non¹</div>
              </div>
            </div>
          </div>

          {/* Block 3: Right Comparison */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden min-w-72">
            {/* Header */}
            <div className="grid grid-cols-3 border-b border-gray-200">
              <div className="p-2"></div>
              <div className="p-2 text-center border-l border-gray-200">
                <div className="text-purple-600 font-semibold text-sm leading-tight">Fexofénadine</div>
              </div>
              <div className="p-2 text-center border-l border-gray-200">
                <div className="text-purple-600 font-semibold text-sm leading-tight">Loratadine</div>
              </div>
            </div>

            {/* Row 1 */}
            <div className="grid grid-cols-3 border-b border-gray-200 min-h-[80px]">
              <div className="bg-gradient-to-br from-purple-300 to-purple-400 p-3 flex items-center justify-center text-center min-h-[80px]">
                <div>
                  <Users className="w-4 h-4 mx-auto mb-2 text-purple-800" />
                  <div className="text-purple-800 font-semibold text-xs leading-tight break-words">
                    Utilisable chez la femme enceinte selon le CRAT
                  </div>
                </div>
              </div>
              <div className="p-3 text-center border-l border-gray-200 flex items-center justify-center">
                <div>
                  <Check className="w-4 h-4 mx-auto text-green-500 mb-1" />
                  <div className="text-xs font-semibold leading-tight break-words">Oui¹⁶</div>
                </div>
              </div>
              <div className="p-3 text-center border-l border-gray-200 flex items-center justify-center">
                <div className="text-xs font-semibold leading-tight break-words">Oui¹⁶</div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-3 border-b border-gray-200 min-h-[80px]">
              <div className="bg-gradient-to-br from-purple-300 to-purple-400 p-3 flex items-center justify-center text-center min-h-[80px]">
                <div>
                  <Users className="w-4 h-4 mx-auto mb-2 text-purple-800" />
                  <div className="text-purple-800 font-semibold text-xs leading-tight break-words">
                    Utilisable chez la femme allaitante selon le CRAT
                  </div>
                </div>
              </div>
              <div className="p-3 text-center border-l border-gray-200 flex items-center justify-center">
                <div>
                  <Check className="w-4 h-4 mx-auto text-green-500 mb-1" />
                  <div className="text-xs font-semibold leading-tight break-words">Oui¹⁷</div>
                </div>
              </div>
              <div className="p-3 text-center border-l border-gray-200 flex items-center justify-center">
                <div className="text-xs font-semibold leading-tight break-words">Oui¹⁷</div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-3 min-h-[80px]">
              <div className="bg-gradient-to-br from-purple-300 to-purple-400 p-3 flex items-center justify-center text-center min-h-[80px]">
                <div>
                  <Clock className="w-4 h-4 mx-auto mb-2 text-purple-800" />
                  <div className="text-purple-800 font-semibold text-xs leading-tight break-words">
                    Utilisation à long terme ({"> 6 mois"})
                  </div>
                </div>
              </div>
              <div className="p-3 text-center border-l border-gray-200 flex items-center justify-center">
                <div>
                  <Check className="w-4 h-4 mx-auto text-green-500 mb-1" />
                  <div className="text-xs font-semibold leading-tight break-words">Oui¹⁸ (jusqu'à 12 mois)</div>
                </div>
              </div>
              <div className="p-3 text-center border-l border-gray-200 flex items-center justify-center">
                <div className="text-xs font-semibold leading-tight break-words">Pas de données disponibles</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation Pills */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-2 relative">
          <button className="bg-gradient-to-r from-purple-400 to-purple-500 text-white text-sm px-4 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow">
            Fexofénadine
          </button>
          <button className="bg-gradient-to-r from-purple-400 to-purple-500 text-white text-sm px-4 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow">
            Loratadine
          </button>
          <button className="bg-gradient-to-r from-purple-400 to-purple-500 text-white text-sm px-4 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow">
            Cétirizine
          </button>
          <button className="bg-gradient-to-r from-purple-400 to-purple-500 text-white text-sm px-4 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow">
            Desloratadine
          </button>
          <button className="bg-gradient-to-r from-purple-400 to-purple-500 text-white text-sm px-4 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow">
            Bilastine
          </button>
          <button className="bg-gradient-to-r from-purple-400 to-purple-500 text-white text-sm px-4 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow">
            Lévocétirizine
          </button>
          <button className="bg-gradient-to-r from-purple-400 to-purple-500 text-white text-sm px-4 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow">
            Ebastine
          </button>

          {/* Home Button - positioned within the nav */}
          <button className="bg-gradient-to-r from-purple-400 to-purple-500 text-white p-2 rounded-full shadow-lg hover:shadow-xl transition-shadow ml-4">
            <Home className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
