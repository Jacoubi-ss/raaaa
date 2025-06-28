export const comparisonData = {
  loratadine: {
    title: "Fexofénadine VS Loratadine",
    data: [
      {
        category: "Délai d'action",
        icon: "Clock",
        fexofenadine: "60 minutes* avec un début d'action dès la 5ème minute*",
        comparator: "A partir de 1h42¹",
      },
      {
        category: "Sédation et impact sur la conduite",
        icon: "Brain",
        fexofenadine: { result: "check", text: "Aucune¹⁸" },
        comparator: { result: "x", text: "prudence somnolence possible¹" },
      },
      {
        category: "Passage BHE*",
        icon: "Brain",
        fexofenadine: { result: "check", text: "Non¹" },
        comparator: { result: "x", text: "Oui¹⁰" },
      },
      {
        category: "Métabolisme hépatique",
        icon: "Liver",
        fexofenadine: { result: "check", text: "Non¹¹" },
        comparator: { result: "x", text: "Oui¹" },
      },
      {
        category: "Interaction médicamenteuse/alimentaire",
        icon: "Pill",
        fexofenadine: { result: "check", text: "Non¹²" },
        comparator: { result: "x", text: "Potentielle avec les inhibiteurs CYP3A4/2D6¹" },
      },
    ],
    data2: [
      {
        category: "Effets anticholinergiques",
        icon: "Brain",
        fexofenadine: { result: "check", text: "Oui¹¹²" },
        comparator: { result: "x", text: "Non¹¹¹" },
      },
      {
        category: "Effets cardiotoxiques",
        icon: "Heart",
        fexofenadine: { result: "check", text: "Non¹¹⁴" },
        comparator: {
          result: "x",
          text: "un effet sur l'amplitude du courant hERG à des concentrations élevées.¹⁴ Peut entraîner un blocage des canaux potassiques cardiaques par le gène hKv1.5¹⁵",
        },
      },
      {
        category: "Insuffisance rénale",
        icon: "Kidney",
        fexofenadine: { result: "check", text: "Non¹" },
        comparator: { result: "x", text: "Oui¹" },
      },
      {
        category: "Insuffisance hépatique",
        icon: "Liver",
        fexofenadine: { result: "check", text: "Non¹" },
        comparator: "Oui (atteinte sévère)¹",
      },
      {
        category: "Sujet âgé",
        icon: "Users",
        fexofenadine: { result: "check", text: "Non¹" },
        comparator: "Non¹",
      },
    ],
    data3: [
      {
        category: "Utilisable chez la femme enceinte selon le CRAT",
        icon: "Users",
        fexofenadine: { result: "check", text: "Oui¹⁶" },
        comparator: "Oui¹⁶",
      },
      {
        category: "Utilisable chez la femme allaitante selon le CRAT",
        icon: "Users",
        fexofenadine: { result: "check", text: "Oui¹⁷" },
        comparator: "Oui¹⁷",
      },
      {
        category: "Utilisation à long terme (> 6 mois)",
        icon: "Clock",
        fexofenadine: { result: "check", text: "Oui¹⁸ (jusqu'à 12 mois)" },
        comparator: "Pas de données disponibles",
      },
    ],
  },
  cetirizine: {
    title: "Fexofénadine VS Cétirizine",
    data: [
      {
        category: "Délai d'action",
        icon: "Clock",
        fexofenadine: "60 minutes* avec un début d'action dès la 5ème minute*",
        comparator: "Entre 59 minutes et 2h06¹",
      },
      {
        category: "Sédation et impact sur la conduite",
        icon: "Brain",
        fexofenadine: { result: "check", text: "Aucune¹⁸" },
        comparator: {
          result: "x",
          text: "Effet sédatif (peut altérer la conduite à un niveau comparable à l'alcool.)³",
        },
      },
      {
        category: "Passage BHE*",
        icon: "Brain",
        fexofenadine: { result: "check", text: "Non¹" },
        comparator: { result: "x", text: "Oui¹⁴²⁰" },
      },
      {
        category: "Métabolisme hépatique",
        icon: "Liver",
        fexofenadine: { result: "check", text: "Non¹¹" },
        comparator: "négligeable¹",
      },
      {
        category: "Interaction médicamenteuse/alimentaire",
        icon: "Pill",
        fexofenadine: { result: "check", text: "Non¹²" },
        comparator: { result: "x", text: "Avec l'alcool: Prudence¹" },
      },
    ],
    data2: [
      {
        category: "Effets anticholinergiques",
        icon: "Brain",
        fexofenadine: { result: "check", text: "Oui¹¹²" },
        comparator: "Non¹²",
      },
      {
        category: "Effets cardiotoxiques",
        icon: "Heart",
        fexofenadine: { result: "check", text: "Non¹¹⁴" },
        comparator: "Non¹⁴",
      },
      {
        category: "Insuffisance rénale",
        icon: "Kidney",
        fexofenadine: { result: "check", text: "Non¹" },
        comparator: { result: "x", text: "Oui (modérée à sévère)¹" },
      },
      {
        category: "Insuffisance hépatique",
        icon: "Liver",
        fexofenadine: { result: "check", text: "Non¹" },
        comparator: "Oui (si insuffisance rénale associée)¹",
      },
      {
        category: "Sujet âgé",
        icon: "Users",
        fexofenadine: { result: "check", text: "Non¹" },
        comparator: "Non¹",
      },
    ],
    data3: [
      {
        category: "Utilisable chez la femme enceinte selon le CRAT",
        icon: "Users",
        fexofenadine: { result: "check", text: "Oui¹⁶" },
        comparator: "Oui¹⁶",
      },
      {
        category: "Utilisable chez la femme allaitante selon le CRAT",
        icon: "Users",
        fexofenadine: { result: "check", text: "Oui¹⁷" },
        comparator: "Oui¹⁷",
      },
      {
        category: "Utilisation à long terme (> 6 mois)",
        icon: "Clock",
        fexofenadine: { result: "check", text: "Oui¹⁸ (jusqu'à 12 mois)" },
        comparator: {
          result: "x",
          text: "Oui² Avertissement sur un prurit mais sévère après l'arrêt prolongé de la cétirizine ou lévocétirizine²⁰",
        },
      },
    ],
  },
  desloratadine: {
    title: "Fexofénadine VS Desloratadine",
    data: [
      {
        category: "Délai d'action",
        icon: "Clock",
        fexofenadine: "60 minutes* avec un début d'action dès la 5ème minute*",
        comparator: "3h³⁴",
      },
      {
        category: "Sédation et impact sur la conduite",
        icon: "Brain",
        fexofenadine: { result: "check", text: "Aucune¹⁸" },
        comparator: { result: "x", text: "prudence somnolence possible¹" },
      },
      {
        category: "Passage BHE*",
        icon: "Brain",
        fexofenadine: { result: "check", text: "Non¹" },
        comparator: { result: "x", text: "Oui¹⁴²⁰" },
      },
      {
        category: "Métabolisme hépatique",
        icon: "Liver",
        fexofenadine: { result: "check", text: "Non¹¹" },
        comparator: { result: "x", text: "Oui¹" },
      },
      {
        category: "Interaction médicamenteuse/alimentaire",
        icon: "Pill",
        fexofenadine: { result: "check", text: "Non¹²" },
        comparator: "Non¹",
      },
    ],
    data2: [
      {
        category: "Effets anticholinergiques",
        icon: "Brain",
        fexofenadine: { result: "check", text: "Oui¹¹²" },
        comparator: { result: "x", text: "Oui¹ (peut entraîner un état dépressif cliniquement significatif)²²" },
      },
      {
        category: "Effets cardiotoxiques",
        icon: "Heart",
        fexofenadine: { result: "check", text: "Non¹¹⁴" },
        comparator: {
          result: "x",
          text: "Peut entraîner un blocage des canaux potassiques Kv canaux par le gène hKv1.5¹⁵",
        },
      },
      {
        category: "Insuffisance rénale",
        icon: "Kidney",
        fexofenadine: { result: "check", text: "Non¹" },
        comparator: "Prudence (atteinte sévère)¹",
      },
      {
        category: "Insuffisance hépatique",
        icon: "Liver",
        fexofenadine: { result: "check", text: "Non¹" },
        comparator: "Non mentionné",
      },
      {
        category: "Sujet âgé",
        icon: "Users",
        fexofenadine: { result: "check", text: "Non¹" },
        comparator: "Non mentionné",
      },
    ],
    data3: [
      {
        category: "Utilisable chez la femme enceinte selon le CRAT",
        icon: "Users",
        fexofenadine: { result: "check", text: "Oui¹⁶" },
        comparator: "Oui¹⁶",
      },
      {
        category: "Utilisable chez la femme allaitante selon le CRAT",
        icon: "Users",
        fexofenadine: { result: "check", text: "Oui¹⁷" },
        comparator: "Oui¹⁷",
      },
      {
        category: "Utilisation à long terme (> 6 mois)",
        icon: "Clock",
        fexofenadine: { result: "check", text: "Oui¹⁸ (jusqu'à 12 mois)" },
        comparator: "Pas de données disponibles",
      },
    ],
  },
  levocetirizine: {
    title: "Fexofénadine VS Lévocétirizine",
    data: [
      {
        category: "Délai d'action",
        icon: "Clock",
        fexofenadine: "60 minutes* avec un début d'action dès la 5ème minute*",
        comparator: "1h³⁵",
      },
      {
        category: "Sédation et impact sur la conduite",
        icon: "Brain",
        fexofenadine: { result: "check", text: "Aucune¹⁸" },
        comparator: { result: "x", text: "Léger effet sédatif¹ : vérifier la réponse individuelle avant de conduire¹" },
      },
      {
        category: "Passage BHE*",
        icon: "Brain",
        fexofenadine: { result: "check", text: "Non¹" },
        comparator: { result: "x", text: "Oui¹" },
      },
      {
        category: "Métabolisme hépatique",
        icon: "Liver",
        fexofenadine: { result: "check", text: "Non¹¹" },
        comparator: { result: "x", text: "Modéré¹" },
      },
      {
        category: "Interaction médicamenteuse/alimentaire",
        icon: "Pill",
        fexofenadine: { result: "check", text: "Non¹²" },
        comparator: { result: "x", text: "Improbable (aucune donnée disponible)¹ Avec l'alcool: Prudence¹" },
      },
    ],
    data2: [
      {
        category: "Effets anticholinergiques",
        icon: "Brain",
        fexofenadine: { result: "check", text: "Oui¹¹²" },
        comparator: "N/A¹²",
      },
      {
        category: "Effets cardiotoxiques",
        icon: "Heart",
        fexofenadine: { result: "check", text: "Non¹¹⁴" },
        comparator: "Non⁵¹⁵",
      },
      {
        category: "Insuffisance rénale",
        icon: "Kidney",
        fexofenadine: { result: "check", text: "Non¹" },
        comparator: { result: "x", text: "Oui (modérée à sévère)¹" },
      },
      {
        category: "Insuffisance hépatique",
        icon: "Liver",
        fexofenadine: { result: "check", text: "Non¹" },
        comparator: "Oui (si insuffisance rénale associée)¹",
      },
      {
        category: "Sujet âgé",
        icon: "Users",
        fexofenadine: { result: "check", text: "Non¹" },
        comparator: "Oui (en cas d'atteinte rénale modérée à sévère)¹",
      },
    ],
    data3: [
      {
        category: "Utilisable chez la femme enceinte selon le CRAT",
        icon: "Users",
        fexofenadine: { result: "check", text: "Oui¹⁶" },
        comparator: "Oui¹⁶",
      },
      {
        category: "Utilisable chez la femme allaitante selon le CRAT",
        icon: "Users",
        fexofenadine: { result: "check", text: "Oui¹⁷" },
        comparator: "Oui¹⁷",
      },
      {
        category: "Utilisation à long terme (> 6 mois)",
        icon: "Clock",
        fexofenadine: { result: "check", text: "Oui¹⁸ (jusqu'à 12 mois)" },
        comparator: {
          result: "x",
          text: "Oui² Avertissement sur un prurit mais sévère après l'arrêt prolongé de la cétirizine ou lévocétirizine²",
        },
      },
    ],
  },
  bilastine: {
    title: "Fexofénadine VS Bilastine",
    data: [
      {
        category: "Délai d'action",
        icon: "Clock",
        fexofenadine: "60 minutes* avec un début d'action dès la 5ème minute*",
        comparator: "1h²",
      },
      {
        category: "Sédation et impact sur la conduite",
        icon: "Brain",
        fexofenadine: { result: "check", text: "Aucune¹⁸" },
        comparator: { result: "x", text: "prudence somnolence possible¹" },
      },
      {
        category: "Passage BHE*",
        icon: "Brain",
        fexofenadine: { result: "check", text: "Non¹" },
        comparator: "Non¹",
      },
      {
        category: "Métabolisme hépatique",
        icon: "Liver",
        fexofenadine: { result: "check", text: "Non¹¹" },
        comparator: "Non¹",
      },
      {
        category: "Interaction médicamenteuse/alimentaire",
        icon: "Pill",
        fexofenadine: { result: "check", text: "Non¹²" },
        comparator: { result: "x", text: "Oui avec les aliments¹" },
      },
    ],
    data2: [
      {
        category: "Effets anticholinergiques",
        icon: "Brain",
        fexofenadine: { result: "check", text: "Oui¹¹²" },
        comparator: { result: "x", text: "Non¹" },
      },
      {
        category: "Effets cardiotoxiques",
        icon: "Heart",
        fexofenadine: { result: "check", text: "Non¹¹⁴" },
        comparator: {
          result: "x",
          text: "Une prolongation du QT a été observée avec l'association bilastine + kétoconazole²¹",
        },
      },
      {
        category: "Insuffisance rénale",
        icon: "Kidney",
        fexofenadine: { result: "check", text: "Non¹" },
        comparator: "Non¹",
      },
      {
        category: "Insuffisance hépatique",
        icon: "Liver",
        fexofenadine: { result: "check", text: "Non¹" },
        comparator: "Non¹",
      },
      {
        category: "Sujet âgé",
        icon: "Users",
        fexofenadine: { result: "check", text: "Non¹" },
        comparator: "Non¹",
      },
    ],
    data3: [
      {
        category: "Utilisable chez la femme enceinte selon le CRAT",
        icon: "Users",
        fexofenadine: { result: "check", text: "Oui¹⁶" },
        comparator: "Non¹⁶",
      },
      {
        category: "Utilisable chez la femme allaitante selon le CRAT",
        icon: "Users",
        fexofenadine: { result: "check", text: "Oui¹⁷" },
        comparator: "Non¹⁷",
      },
      {
        category: "Utilisation à long terme (> 6 mois)",
        icon: "Clock",
        fexofenadine: { result: "check", text: "Oui¹⁸ (jusqu'à 12 mois)" },
        comparator: { result: "x", text: "Oui²¹" },
      },
    ],
  },
  ebastine: {
    title: "Fexofénadine VS Ebastine",
    data: [
      {
        category: "Délai d'action",
        icon: "Clock",
        fexofenadine: "60 minutes* avec un début d'action dès la 5ème minute*",
        comparator: "1 à 3h²",
      },
      {
        category: "Sédation et impact sur la conduite",
        icon: "Brain",
        fexofenadine: { result: "check", text: "Aucune¹⁸" },
        comparator: { result: "x", text: "prudence somnolence¹" },
      },
      {
        category: "Passage BHE*",
        icon: "Brain",
        fexofenadine: { result: "check", text: "Non¹" },
        comparator: { result: "x", text: "Oui¹⁰" },
      },
      {
        category: "Métabolisme hépatique",
        icon: "Liver",
        fexofenadine: { result: "check", text: "Non¹¹" },
        comparator: { result: "x", text: "Oui¹" },
      },
      {
        category: "Interaction médicamenteuse/alimentaire",
        icon: "Pill",
        fexofenadine: { result: "check", text: "Non¹²" },
        comparator: {
          result: "x",
          text: "Prudence (interaction médicamenteuse)¹ Aliments + biodisponibilité de la carébastine¹",
        },
      },
    ],
    data2: [
      {
        category: "Effets anticholinergiques",
        icon: "Brain",
        fexofenadine: { result: "check", text: "Oui¹¹²" },
        comparator: "Non¹³",
      },
      {
        category: "Effets cardiotoxiques",
        icon: "Heart",
        fexofenadine: { result: "check", text: "Non¹¹⁴" },
        comparator: {
          result: "x",
          text: "Précautions cardiaques présentant un intervalle QT prolongé, une hypokaliémie, une bradycardie ou la prise concomitante de médicaments allongeant l'intervalle QT ou influençant l'isoenzyme CYP3A4²",
        },
      },
      {
        category: "Insuffisance rénale",
        icon: "Kidney",
        fexofenadine: { result: "check", text: "Non¹" },
        comparator: "Prudence¹",
      },
      {
        category: "Insuffisance hépatique",
        icon: "Liver",
        fexofenadine: { result: "check", text: "Non¹" },
        comparator: "Prudence (légère à modérée)¹",
      },
      {
        category: "Sujet âgé",
        icon: "Users",
        fexofenadine: { result: "check", text: "Non¹" },
        comparator: "Non¹",
      },
    ],
    data3: [
      {
        category: "Utilisable chez la femme enceinte selon le CRAT",
        icon: "Users",
        fexofenadine: { result: "check", text: "Oui¹⁶" },
        comparator: { result: "x", text: "Non¹⁶" },
      },
      {
        category: "Utilisable chez la femme allaitante selon le CRAT",
        icon: "Users",
        fexofenadine: { result: "check", text: "Oui¹⁷" },
        comparator: { result: "x", text: "Non¹⁷" },
      },
      {
        category: "Utilisation à long terme (> 6 mois)",
        icon: "Clock",
        fexofenadine: { result: "check", text: "Oui¹⁸ (jusqu'à 12 mois)" },
        comparator: {
          result: "x",
          text: "Oui! Les effets indésirables les plus fréquents étaient des maux de tête et des troubles gastro-intestinaux¹",
        },
      },
    ],
  },
}
