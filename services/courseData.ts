
import { ModuleData } from '../types';

export const courseData: ModuleData[] = [
  {
    id: 1,
    title: 'Módulo 1: Introducción a las Vitaminas Hidrosolubles',
    content: [
      "Las vitaminas hidrosolubles son un grupo de micronutrientes esenciales que no se almacenan en el cuerpo en cantidades significativas, lo que requiere una ingesta regular. A pesar de la fortificación de alimentos y el uso de suplementos, las deficiencias persisten, a menudo asociadas a patologías malabsortivas, enfermedades crónicas o dietas restrictivas.",
      "Las Ingestas Dietéticas de Referencia (IDR) son valores establecidos para planificar y evaluar las dietas de individuos sanos. Incluyen:",
      "- **RDA (Recommended Dietary Allowance):** Nivel de ingesta diaria suficiente para satisfacer los requerimientos del 97-98% de los individuos sanos.",
      "- **AI (Adequate Intake):** Nivel de ingesta recomendado cuando no hay suficiente evidencia para establecer una RDA.",
      "- **UL (Tolerable Upper Intake Level):** Máximo nivel de ingesta diaria que probablemente no presente riesgos para la salud."
    ],
    summary: "Este módulo introduce el concepto de vitaminas hidrosolubles, su importancia en la dieta regular y las definiciones clave de las Ingestas Dietéticas de Referencia (IDR) que guían el consumo nutricional.",
    quiz: [
      {
        question: "¿Cuál es la principal razón por la que las vitaminas hidrosolubles requieren una ingesta regular?",
        options: ["Se almacenan en el tejido graso", "No se almacenan en el cuerpo en cantidades significativas", "Son tóxicas en pequeñas dosis", "Solo se encuentran en alimentos de temporada"],
        correctAnswer: "No se almacenan en el cuerpo en cantidades significativas",
      },
      {
        question: "¿Qué significa RDA en el contexto de las IDR?",
        options: ["Ingesta Diaria Aleatoria", "Requerimiento Dietético Anual", "Ingesta Dietética Recomendada (cubre al 97-98% de la población)", "Ración Diaria Aceptable"],
        correctAnswer: "Ingesta Dietética Recomendada (cubre al 97-98% de la población)",
      },
      {
        question: "El 'Nivel de Ingesta Superior Tolerable' (UL) se refiere a:",
        options: ["La cantidad mínima necesaria para prevenir enfermedades", "La cantidad promedio consumida por la población", "La dosis recomendada para atletas", "El nivel más alto de ingesta diaria que no supone un riesgo para la salud"],
        correctAnswer: "El nivel más alto de ingesta diaria que no supone un riesgo para la salud",
      },
      {
          question: "Las deficiencias de vitaminas hidrosolubles a menudo coexisten con:",
          options: ["Exceso de actividad física", "Dietas altas en grasas", "Patologías malabsortivas y enfermedades crónicas", "Consumo elevado de agua"],
          correctAnswer: "Patologías malabsortivas y enfermedades crónicas",
      },
      {
          question: "¿Cuándo se utiliza la 'Ingesta Adecuada' (AI)?",
          options: ["Cuando la RDA es demasiado alta", "Cuando no hay suficiente evidencia para establecer una RDA", "Solo para niños y adolescentes", "Para planificar dietas de deportistas de élite"],
          correctAnswer: "Cuando no hay suficiente evidencia para establecer una RDA",
      },
    ]
  },
  {
    id: 2,
    title: 'Módulo 2: Vitamina B1 (Tiamina)',
    content: [
      "La tiamina es crucial para el metabolismo energético (ciclo de Krebs, vía de las pentosas fosfato) y el correcto funcionamiento del sistema nervioso, corazón y músculos. Se encuentra en granos integrales fortificados, cerdo, legumbres, nueces y semillas.",
      "La deficiencia de tiamina es rara en países desarrollados, pero ocurre en comorbilidades que afectan la ingesta dietética, como en niños con Trastorno del Espectro Autista (TEA) con selectividad alimentaria, Trastorno de Evitación/Restricción de la Ingesta de Alimentos (ARFID), o trastornos de la alimentación como anorexia y bulimia.",
      "Manifestaciones clínicas de la deficiencia:",
      "- **Encefalopatía de Wernicke:** Un síndrome neuropsiquiátrico agudo con la tríada clásica de confusión mental, oftalmoplejía y ataxia de la marcha. Es una emergencia médica.",
      "- **Síndrome de Wernicke-Korsakoff:** Condición crónica e irreversible que sigue a la encefalopatía de Wernicke no tratada, caracterizada por un grave deterioro de la memoria.",
      "- **Beriberi seco:** Afecta principalmente al sistema nervioso, causando neuropatía periférica con debilidad muscular y parestesias.",
      "- **Beriberi húmedo:** Afecta al sistema cardiovascular, causando insuficiencia cardíaca de alto gasto, vasodilatación periférica y edema.",
      "**Evaluación de laboratorio:** El método más común es medir el coeficiente de actividad de la transcetolasa eritrocitaria (ETKAC), un biomarcador funcional sensible del estado de la tiamina."
    ],
    summary: "La tiamina (B1) es vital para el metabolismo energético y la función nerviosa. Su deficiencia puede causar graves síndromes como la encefalopatía de Wernicke y el beriberi. El diagnóstico se apoya en la medición del coeficiente de actividad de la transcetolasa eritrocitaria (ETKAC).",
    quiz: [
      {
        question: "Una niña de 13 años con ARFID presenta nistagmo, ataxia y confusión. ¿Qué prueba de laboratorio es la más indicada para confirmar la causa de sus síntomas neurológicos?",
        options: ["Niveles de ácido ascórbico", "Niveles de biotina", "Coeficiente de actividad de la transcetolasa eritrocitaria", "Niveles de fósforo"],
        correctAnswer: "Coeficiente de actividad de la transcetolasa eritrocitaria",
      },
      {
        question: "La tríada clásica de la encefalopatía de Wernicke incluye:",
        options: ["Dermatitis, diarrea y demencia", "Confusión, oftalmoplejía y ataxia", "Anemia, fatiga y dolor articular", "Hemorragias, cabello en sacacorchos y sangrado gingival"],
        correctAnswer: "Confusión, oftalmoplejía y ataxia",
      },
      {
        question: "El beriberi húmedo afecta principalmente al sistema:",
        options: ["Nervioso periférico", "Gastrointestinal", "Cardiovascular", "Inmunológico"],
        correctAnswer: "Cardiovascular",
      },
      {
          question: "¿Cuál de las siguientes es una fuente dietética importante de tiamina?",
          options: ["Frutas cítricas", "Productos lácteos", "Granos integrales fortificados", "Aceites vegetales"],
          correctAnswer: "Granos integrales fortificados",
      },
      {
          question: "El síndrome de Wernicke-Korsakoff es una complicación de:",
          options: ["Exceso de tiamina", "Encefalopatía de Wernicke no tratada o tratada inadecuadamente", "Deficiencia de ácido fólico", "Beriberi húmedo crónico"],
          correctAnswer: "Encefalopatía de Wernicke no tratada o tratada inadecuadamente",
      },
    ]
  },
  {
    id: 3,
    title: 'Módulo 3: Vitamina B9 (Folato)',
    content: [
      "El folato, o vitamina B9, es vital para la síntesis, reparación y metilación del ADN, así como para el metabolismo de los aminoácidos. Es especialmente crucial durante períodos de rápido crecimiento celular, como el desarrollo fetal, para prevenir defectos del tubo neural (DTN).",
      "Las fuentes naturales (folato) incluyen verduras de hoja verde, frutas y legumbres. El ácido fólico es la forma sintética que se añade a alimentos fortificados como cereales y harinas.",
      "La deficiencia pura de folato es rara, a menudo asociada a comorbilidades como la enfermedad celíaca o de Crohn, que afectan su absorción en el yeyuno. El uso de medicamentos antiepilépticos (fenitoína, fenobarbital) o metotrexato también puede causar deficiencia.",
      "**Manifestaciones clínicas:** La principal manifestación es la anemia megaloblástica, debida a una síntesis de ADN alterada. Durante la embriogénesis, su deficiencia es una causa conocida de defectos del tubo neural como la espina bífida.",
      "**Riesgos de toxicidad:** Aunque no es típicamente un problema, un consumo excesivo de ácido fólico puede enmascarar los signos hematológicos de una deficiencia de vitamina B12, permitiendo que el daño neurológico progrese de forma irreversible."
    ],
    summary: "El folato (B9) es esencial para la síntesis de ADN y la prevención de defectos del tubo neural. La deficiencia causa anemia megaloblástica. La suplementación con ácido fólico es clave en la edad fértil, pero un exceso puede enmascarar una deficiencia de B12.",
    quiz: [
      {
        question: "Para disminuir la probabilidad de que su próximo hijo tenga espina bífida, se recomienda la suplementación con:",
        options: ["Ácido ascórbico", "Ácido fólico", "Niacina", "Tiamina"],
        correctAnswer: "Ácido fólico",
      },
      {
        question: "La principal manifestación hematológica de la deficiencia de folato es:",
        options: ["Anemia microcítica", "Anemia hemolítica", "Anemia megaloblástica", "Trombocitopenia"],
        correctAnswer: "Anemia megaloblástica",
      },
      {
        question: "Un riesgo importante del consumo excesivo de ácido fólico es que puede:",
        options: ["Causar daño renal directo", "Enmascarar una deficiencia de Vitamina B12", "Provocar toxicidad hepática", "Aumentar el riesgo de beriberi"],
        correctAnswer: "Enmascarar una deficiencia de Vitamina B12",
      },
      {
        question: "El folato se absorbe principalmente en:",
        options: ["El estómago", "El duodeno", "El yeyuno", "El íleon terminal"],
        correctAnswer: "El yeyuno",
      },
      {
        question: "Medicamentos como la fenitoína y el metotrexato pueden causar deficiencia de folato porque:",
        options: ["Aumentan su excreción renal", "Inhiben su absorción y metabolismo", "Se unen al folato en la dieta", "Destruyen las reservas corporales"],
        correctAnswer: "Inhiben su absorción y metabolismo",
      },
    ]
  },
  {
    id: 4,
    title: 'Módulo 4: Vitamina B12 (Cobalamina)',
    content: [
      "La vitamina B12 es esencial para la síntesis de ADN, la formación de eritroblastos, la mielinización neuronal y la síntesis de neurotransmisores. Se obtiene principalmente de alimentos de origen animal como carne, pescado, huevos y lácteos. Las fuentes vegetales son escasas a menos que estén fortificadas.",
      "Su absorción es un proceso complejo que requiere del factor intrínseco, secretado por las células parietales del estómago, para unirse a la B12 y ser absorbida en el íleon terminal.",
      "**Deficiencia y tratamiento:** Los síntomas pueden tardar años en aparecer e incluyen neuropatía periférica (parestesias), defectos en la propiocepción y, en casos graves, degeneración combinada subaguda de la médula espinal. También causa anemia megaloblástica. Las causas incluyen ingesta insuficiente (dietas veganas), anemia perniciosa (deficiencia de factor intrínseco), cirugías gastrointestinales (resección del íleon terminal) o enfermedades como Crohn.",
      "En lactantes de madres deficientes, puede causar retraso en el desarrollo y fallo de medro. El tratamiento se basa en la causa y severidad, pudiendo requerir suplementación oral o inyecciones intramusculares.",
      "**Evaluación de laboratorio:** Aunque se mide la B12 sérica total, el ácido metilmalónico (MMA) y la homocisteína en plasma son marcadores más sensibles y específicos de deficiencia a nivel tisular. Niveles elevados de ambos sugieren fuertemente una deficiencia de B12."
    ],
    summary: "La B12 (cobalamina), proveniente de fuentes animales, es crucial para la función neurológica y hematológica. Su deficiencia, a menudo por malabsorción (requiere factor intrínseco), causa anemia megaloblástica y daño neurológico. El MMA y la homocisteína son biomarcadores clave.",
    quiz: [
      {
        question: "Un joven de 17 años con enfermedad de Crohn y resección del íleon terminal, que sigue una dieta vegetariana, presenta fatiga y parestesias. ¿Qué terapia es la más apropiada?",
        options: ["Dieta sin gluten", "Inyección intramuscular de B12", "Ácido ascórbico intravenoso", "Suplemento oral de ácido fólico"],
        correctAnswer: "Inyección intramuscular de B12",
      },
      {
        question: "La absorción de la vitamina B12 depende críticamente de:",
        options: ["La bilis", "Las enzimas pancreáticas", "El factor intrínseco", "El ácido clorhídrico únicamente"],
        correctAnswer: "El factor intrínseco",
      },
      {
        question: "¿Qué marcadores de laboratorio, además de la B12 sérica, son más sensibles para detectar una deficiencia funcional de B12?",
        options: ["Transcetolasa y piridoxal-fosfato", "Ferritina y transferrina", "Ácido metilmalónico y homocisteína", "Folato sérico y eritrocitario"],
        correctAnswer: "Ácido metilmalónico y homocisteína",
      },
      {
        question: "La vitamina B12 se encuentra casi exclusivamente en:",
        options: ["Verduras de hoja verde", "Frutas cítricas", "Alimentos de origen animal", "Granos enteros"],
        correctAnswer: "Alimentos de origen animal",
      },
      {
        question: "La deficiencia de B12 y la de folato pueden causar el mismo tipo de anemia, que es:",
        options: ["Microcítica", "Normocítica", "Megaloblástica", "Falciforme"],
        correctAnswer: "Megaloblástica",
      },
    ]
  },
  {
    id: 5,
    title: 'Módulo 5: Vitamina C (Ácido Ascórbico)',
    content: [
      "La vitamina C es un potente antioxidante y un cofactor esencial para la síntesis de colágeno, crucial para la integridad del tejido conectivo, la curación de heridas y los vasos sanguíneos. También participa en la síntesis de neurotransmisores y L-carnitina.",
      "Las principales fuentes son frutas cítricas, tomates, brócoli y pimientos. Se absorbe en el intestino delgado (duodeno y yeyuno).",
      "**Deficiencia y Tratamiento (Escorbuto):** La deficiencia grave causa escorbuto, una condición rara hoy en día pero difícil de diagnosticar por sus síntomas inespecíficos. Las poblaciones de riesgo incluyen niños con dietas muy restrictivas (p. ej., TEA).",
      "Las manifestaciones clínicas se deben a la síntesis de colágeno alterada e incluyen hemorragias perifoliculares, cabello en sacacorchos, petequias, sangrado gingival y mala cicatrización. También puede haber anemia, fatiga y dolor articular.",
      "**Requerimientos especiales:** La exposición a la nicotina (vaping, tabaco) aumenta el estrés oxidativo y el recambio de vitamina C, por lo que se recomienda aumentar la ingesta en estos individuos. El tratamiento del escorbuto es la reposición con vitamina C oral.",
      "**Evaluación de laboratorio:** El estándar de oro es medir los niveles de ácido ascórbico en suero. Niveles por debajo de 23 µmol/L indican deficiencia."
    ],
    summary: "La vitamina C es un antioxidante vital para la síntesis de colágeno. Su deficiencia causa escorbuto, con síntomas cutáneos y hemorrágicos. El diagnóstico se confirma midiendo el ácido ascórico en suero. Los fumadores y vapeadores tienen mayores requerimientos.",
    quiz: [
      {
        question: "Un adolescente que usa un dispositivo de vapeo con nicotina tiene mayores requerimientos de:",
        options: ["Vitamina B1", "Vitamina B9", "Vitamina B12", "Vitamina C"],
        correctAnswer: "Vitamina C",
      },
      {
        question: "Un niño de 15 años con autismo y dieta muy limitada presenta fatiga, dolor articular y encías sangrantes. ¿Qué prueba confirmará el diagnóstico?",
        options: ["Niveles de ácido ascórbico sérico", "Coeficiente de actividad de la transcetolasa eritrocitaria", "Niveles de ferritina", "Niveles de ácido metilmalónico"],
        correctAnswer: "Niveles de ácido ascórbico sérico",
      },
      {
        question: "Los signos clínicos del escorbuto, como las hemorragias perifoliculares, se deben a un defecto en la síntesis de:",
        options: ["ADN", "Hemoglobina", "Colágeno", "Mielina"],
        correctAnswer: "Colágeno",
      },
      {
        question: "El escorbuto es una deficiencia de ¿qué vitamina?",
        options: ["Tiamina", "Riboflavina", "Ácido ascórbico", "Niacina"],
        correctAnswer: "Ácido ascórbico",
      },
      {
        question: "¿Cuál de los siguientes alimentos es una excelente fuente de Vitamina C?",
        options: ["Carne de res", "Leche de vaca", "Pimientos y naranjas", "Pan blanco"],
        correctAnswer: "Pimientos y naranjas",
      },
    ]
  }
];
