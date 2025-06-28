"use client"

import { Home } from "lucide-react"

interface ReferencesPageProps {
  onNavigate: (page: string) => void
}

export default function ReferencesPage({ onNavigate }: ReferencesPageProps) {
  const references = [
    "1. Greisner WA 3rd. Onset of action for the relief of allergic rhinitis symptoms with second-generation antihistamines. Allergy Asthma Proc. 2004 Mar-Apr;25(2):81-3. PMID: 15176489.",
    "2. Potter PC, H S Schoeman; Rapid onset of action of fexofenadine (Telfast). Current Allergy & Clinical Immunology, June 2001 Vol14, No. 2",
    "3. Day JH, Briscoe M, Rafeiro E, Ratz JD. Comparative clinical efficacy, onset and duration of action of levocetirizine for symptoms of seasonal allergic rhinitis in subjects evaluated in the Environmental Exposure Unit (EEU). Int J Clin Pract. 2004 Feb;58(2):109-18. doi: 10.1111/j.1368-5031.2004.0117x. PMID: 15055856.",
    "4. Horak F, Zieglmayer P, Zieglmayer R, Lemell P. The effects of bilastine compared with cetirizine, fexofenadine, and placebo on allergen-induced nasal and ocular symptoms in patients exposed to aeroallergens in the Vienna Challenge Chamber. Inflamm Res. 2010 May;59(5):391-8. doi: 10.1007/s00011-009-0117-4. Epub 2009 Nov 27. PMID: 19943178.",
    "5. Hair PI, Scott LJ. Levocetirizine: a review of its use in the management of allergic rhinitis and skin allergies. Drugs. 2006;66(7):973-96. doi: 10.2165/00003495-200666070-00017. PMID: 16740020.",
    "6. Wiseman LR, Faulds D. Ebastine. A review of its pharmacological properties and clinical efficacy in the treatment of allergic disorders. Drugs. 1996 Feb;51(2):260-77. doi: 10.2165/00003495-199651020-00006. PMID: 8808167.",
    "7. Kawauchi H, Yanai K, Wang DY, Itahashi K, Okubo K. Antihistamines for Allergic Rhinitis Treatment from the Viewpoint of Nonsedative Properties. Int J Mol Sci. 2019 Jan 30;20(1):213. doi: 10.3390/ijms20010213. PMCID: PMC6337346.",
    "8. Meltzer EO. Evaluation of the optimal oral antihistamine for patients with allergic rhinitis. Mayo Clin Proc. 2005 Sep;80(9):1170-6. doi: 10.4065/80.9.1170. PMID: 16178497.",
    "9. Huang CZ, Jiang ZH, Wang J, Luo Y, Peng H. Antihistamine effects and safety of fexofenadine: a systematic review and Meta-analysis of randomized controlled trials. BMC Pharmacol Toxicol. 2019 Nov 29;20(1):72. doi: 10.1186/s40360-019-0351-3. PMID: 31783781; PMCID: PMC6884918.",
    "10. Anostegui IJ, Bousquet J, Canonica GW, Demoly P, Gómez RM, Meltzer EO, Murrieta-Aguttes M, Naclerio RM, Rosario Filho N, Scadding GK. Why fexofenadine is considered as a truly non-sedating antihistamine with the brain penetration: a systematic review. Curr Med Res Opin. 2024 Jul 19. PMID: 39028636.",
    "11. RCP Telfast 120 mg",
    "12. Smith SM, Gums JG. Fexofenadine: biochemical, pharmacokinetic and pharmacodynamic properties and its unique role in allergic disorders. Expert Opin Drug Metab Toxicol. 2009 Jul;5(7):813-22. doi: 10.1517/17425250902950214. PMID: 19505214.",
    "13. Vincent J, Sumner DJ, Reid JL. Ebastine: the effect of a new antihistamine on psychomotor performance and autonomic responses in healthy subjects. Br J Clin Pharmacol. 1988 Nov;26(5):503-8. doi: 10.1111/j.1365-2125.1988.tb05281.x; PMID: PMC1386626.",
    "14. Holgate ST, Canonica GW, Simons FE, Taglialatela M, Tharp M, Timmerman H, Yanai K; Consensus Group on New-Generation Antihistamines. Consensus Group on New-Generation Antihistamines (CONGA): present status and recommendations. Clin Exp Allergy. 2003 Sep;33(9):1305-24. doi: 10.1046/j.1365-2222.2003.01769.x. PMID: 12956754.",
    "15. Tashiro M, Mochizuki H, Iwabuchi K, Sakurada Y, Itoh M, Watanabe T, Yanai K. Roles of histamine in regulation of arousal and cognition: functional neuroimaging of histamine H1 receptors in human brain. Life Sci. 2002 Oct 4;71(21):2501-7. doi: 10.1016/s0024-3205(02)02084-6. PMID: 12270754; PMCID: PMC4112269.",
    "16. Le CRAT_Antihistaminiques-H1-Grossesse",
    "17. Le CRAT_Antihistaminiques-H1-Allaitement",
    "18. Nathan, R., Mason, J., Bernstein, D., Howland, W., Kaiser, H., Meltzer, E., & Segall, N. (2012). Long-Term Tolerability of Fexofenadine in Healthy Volunteers. Clinical Drug Investigation, 18(4), 317-328.",
    "19. Simons, F. E. R. (2004). Prospective, long-term safety evaluation of the H1-receptor antagonist cetirizine in very young children with atopic dermatitis. Journal of Allergy and Clinical Immunology, Volume 104, Issue 2, 433 - 440",
    "20. 05-16-2025 FDA Drug Safety Communication",
    "21. Yagami A, Furue M, Togawa M, Saito H, Hide M. One-year safety and efficacy study of bilastine treatment in Japanese patients with chronic spontaneous urticaria or pruritus associated with skin diseases. J Dermatol. 2017 Apr;44(4):375-385. doi: 10.1111/1346-8138.13644. Epub 2016 Nov 14. PMID: 27862277; PMCID: PMC5412823.",
    "22. Boer J, Ederveen E, Grundmark B. Desloratadine and depression, a drug safety signal based on worldwide spontaneous reporting of side effects. Ups J Med Sci. 2018 Sep;123(3):174-178. doi: 10.1080/03009734.2018.1489918. Epub 2018 Aug 7. PMID: 30084285; PMCID: PMC6198223.",
  ]

  return (
    <div className="h-screen bg-gray-50 p-2 overflow-hidden">
      <div className="max-w-6xl mx-auto h-full flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-400 to-purple-500 rounded-xl p-2 mb-2 shadow-lg">
          <h1 className="text-white text-lg font-bold text-center">Références</h1>
        </div>

        {/* References Content */}
        <div className="bg-white rounded-xl p-3 shadow-lg mb-2 flex-1 overflow-hidden">
          <div className="h-full flex flex-col justify-between text-xs text-gray-700 leading-none">
            {references.map((ref, index) => (
              <p key={index} className="break-words flex-1 flex items-center">
                <span>
                  <span className="font-semibold">{index + 1}.</span> {ref.substring(2)}
                </span>
              </p>
            ))}
          </div>
        </div>

        {/* Home Button */}
        <div className="flex justify-center">
          <button
            onClick={() => onNavigate("home")}
            className="bg-gradient-to-r from-purple-400 to-purple-500 text-white p-2 rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            <Home className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
