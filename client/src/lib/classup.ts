// ClassUp shared constants and data
// VERBATIM sample questions -- do NOT modify any text, options, answers, or explanations

export const APP_URL = "https://app.classup.com.au";
export const DIAGNOSTIC_URL = `${APP_URL}/diagnostic/start`;
export const FOUNDERS_CODE = "FOUNDERS";

export interface SampleQuestion {
  id: string;
  acara?: string;
  skill?: string;
  year: number;
  domain: string;
  subdomain: string;
  difficulty: string;
  passage?: string;
  passageNote?: string;
  question: string;
  options: { letter: string; text: string }[];
  correct: string;
  correctExplanation: string;
  commonMistake: string;
}

// SAMPLE 1 -- Y3-NUM-002
export const SAMPLE_1: SampleQuestion = {
  id: "Y3-NUM-002",
  acara: "ACMNA028 (Year 3 -- Compare 3-digit numbers)",
  year: 3,
  domain: "Numeracy",
  subdomain: "Place Value -- Comparing 3-Digit Numbers",
  difficulty: "Basic",
  question: "Which number is the largest?",
  options: [
    { letter: "A", text: "369" },
    { letter: "B", text: "963" },
    { letter: "C", text: "396" },
    { letter: "D", text: "693" },
  ],
  correct: "B",
  correctExplanation: "963",
  commonMistake:
    "A child looking at the first digit of each number sees 3, 9, 3, 6 and might pick 369 -- selecting the first digit as the largest instead of comparing the whole number. The correct approach: compare the hundreds place first. 9 hundreds beats 6 hundreds beats 3 hundreds. So 963 is the biggest.",
};

// SAMPLE 2 -- Y5-NUM-04
export const SAMPLE_2: SampleQuestion = {
  id: "Y5-NUM-04",
  acara: "NA5.01 (Year 5 -- Apply knowledge of place value)",
  year: 5,
  domain: "Numeracy",
  subdomain: "Place Value",
  difficulty: "Basic",
  question: "What is the value of 4 in 9481?",
  options: [
    { letter: "A", text: "4 hundreds" },
    { letter: "B", text: "4 ones" },
    { letter: "C", text: "4 thousands" },
    { letter: "D", text: "4 tens" },
  ],
  correct: "A",
  correctExplanation: "4 hundreds = 400",
  commonMistake:
    "Children sometimes look only at the digit and pick 4 ones -- confusing the digit's identity with its position. The correct approach: in 9481, the 9 is in thousands, the 4 is in hundreds, 8 is in tens, 1 is in ones. So 4 represents 4 hundreds, which is 400.",
};

// SAMPLE 3 -- Y7-2016-C01
export const SAMPLE_3: SampleQuestion = {
  id: "Y7-2016-C01",
  acara: "NA7.08 (Year 7 -- Algebraic expression order)",
  year: 7,
  domain: "Numeracy",
  subdomain: "Algebra -- Order of Operations",
  difficulty: "Basic",
  question:
    "Grace is 16 years old. Mark is 5 years more than twice Grace's age. How old is Mark?",
  options: [
    { letter: "A", text: "37" },
    { letter: "B", text: "82" },
    { letter: "C", text: "42" },
    { letter: "D", text: "23" },
  ],
  correct: "A",
  correctExplanation: "37",
  commonMistake:
    "Children often add first, then double -- calculating (16 + 5) x 2 = 42 (option C). The correct order: twice Grace's age comes first (2 x 16 = 32), THEN add 5 (32 + 5 = 37). The order of operations in the wording matters -- twice X plus 5 means double first, add second.",
};

// SAMPLE 4 -- Y9-PRAC-S3Q1
export const SAMPLE_4: SampleQuestion = {
  id: "Y9-PRAC-S3Q1",
  acara: "AC9M9A01 (Year 9 -- Patterns and algebra)",
  year: 9,
  domain: "Numeracy",
  subdomain: "Algebra -- Operations with negative numbers",
  difficulty: "Basic",
  question: "If z = -8, what is the value of 4z?",
  options: [
    { letter: "A", text: "-48" },
    { letter: "B", text: "-32" },
    { letter: "C", text: "-4" },
    { letter: "D", text: "32" },
  ],
  correct: "B",
  correctExplanation: "-32",
  commonMistake:
    "Children sometimes add instead of multiply (4 + (-8) = -4, option C), or drop the negative sign entirely (4 x 8 = 32, option D). The correct approach: 4z means 4 multiplied by z. So 4 x (-8) = -32.",
};

// SAMPLE 5 -- Y3-LC-001
export const SAMPLE_5: SampleQuestion = {
  id: "Y3-LC-001",
  skill: "Year 3 -- Spelling -- CVC and Blend Spelling",
  year: 3,
  domain: "Language Conventions",
  subdomain: "Spelling",
  difficulty: "Basic",
  question: "I need to ____ my book to school tomorrow.\n\nWhich is the correct spelling?",
  options: [
    { letter: "A", text: "brang" },
    { letter: "B", text: "bring" },
    { letter: "C", text: "breng" },
    { letter: "D", text: "brinng" },
  ],
  correct: "B",
  correctExplanation: "bring",
  commonMistake:
    "Brang is a common phonetic substitution -- children write what they hear in informal Australian speech. The correct spelling is bring -- short i sound, no double n.",
};

// SAMPLE 6 -- Y5-LC-001
export const SAMPLE_6: SampleQuestion = {
  id: "Y5-LC-001",
  acara: "AC9E5LY06",
  skill: "Year 5 -- Spelling -- Uncommon Vowel Patterns",
  year: 5,
  domain: "Language Conventions",
  subdomain: "Spelling",
  difficulty: "Basic",
  passage:
    "Priya's family went on a bushwalk through the Blue Mountains. The scenery was beautiful and the air smelled fresh.",
  question:
    "Which is the correct spelling of the missing word?\nThe ____ was long but worth every step.",
  options: [
    { letter: "A", text: "jerney" },
    { letter: "B", text: "journy" },
    { letter: "C", text: "journey" },
    { letter: "D", text: "jurney" },
  ],
  correct: "C",
  correctExplanation: "journey",
  commonMistake:
    "Children spell journey the way it sounds -- jerney or jurney -- missing the silent vowels that come from the word's French origin (journee). The correct spelling preserves the ou pattern from the original French.",
};

// SAMPLE 7 -- Y7-LC-001
export const SAMPLE_7: SampleQuestion = {
  id: "Y7-LC-001",
  acara: "AC9E7LY07",
  skill: "Year 7 -- Spelling -- Etymology (French Vowels)",
  year: 7,
  domain: "Language Conventions",
  subdomain: "Spelling",
  difficulty: "Basic",
  passage:
    "During a Year 7 History excursion to the Australian War Memorial in Canberra, students were encouraged to purchase a small item from the gift shop as a keepsake.",
  question:
    "Which is the correct spelling of the missing word?\nMany chose postcards and replica medals as a ____.",
  options: [
    { letter: "A", text: "souvenier" },
    { letter: "B", text: "souvanir" },
    { letter: "C", text: "souvenir" },
    { letter: "D", text: "suovenir" },
  ],
  correct: "C",
  correctExplanation: "souvenir",
  commonMistake:
    "Children commonly write souvenier -- adding an extra i before the r because it feels phonetically natural. The correct spelling comes from French -- sou-ve-nir -- with no extra i before the final r.",
};

// SAMPLE 8 -- P-Y5-NAR-01
export const SAMPLE_8: SampleQuestion = {
  id: "P-Y5-NAR-01",
  year: 5,
  domain: "Reading",
  subdomain: "Narrative -- Locating Information",
  difficulty: "Basic",
  passage:
    "Lila pressed her back against the brick wall of the school office and watched the other children stream past. They moved in noisy groups of three and four, their bright blue uniforms blurring together as they rushed toward the oval. None of them noticed her.\n\nIt was her first day at Murrumba State School, a small regional school on the outskirts of Bundaberg. Her family had moved there from Brisbane two weeks ago because her mum had taken a job at the local hospital. Lila already missed her old friends.",
  passageNote: "Read the full passage in product",
  question: "Why did Lila's family move to Bundaberg?",
  options: [
    { letter: "A", text: "Lila wanted to go to a smaller school" },
    { letter: "B", text: "Her family wanted to live closer to the beach" },
    { letter: "C", text: "Her mum got a job at the local hospital" },
    { letter: "D", text: "Her dad grew up in Bundaberg" },
  ],
  correct: "C",
  correctExplanation: "Her mum got a job at the local hospital",
  commonMistake:
    "Children scanning the passage for Bundaberg might fixate on geographic details (B -- closer to the beach) rather than the actual reason given. The text states explicitly: her mum had taken a job at the local hospital. This is a Locating cognitive process question -- the answer is in the text, not inferred.",
};

// SAMPLE 9 -- P-Y7-PER-01
export const SAMPLE_9: SampleQuestion = {
  id: "P-Y7-PER-01",
  year: 7,
  domain: "Reading",
  subdomain: "Persuasive -- Locating Statistics",
  difficulty: "Basic",
  passage:
    "Every year, marine scientists issue warnings about the deterioration of Australia's Great Barrier Reef, yet the destruction of this irreplaceable ecosystem continues at an alarming rate. We must act now -- not in five years, not after the next election -- to prevent what could become the greatest environmental loss in our nation's history.\n\nThe bleaching of coral occurs when rising ocean temperatures force coral to expel the algae living in their tissues. Without these algae, coral turns ghostly white and, if conditions do not improve within weeks, dies.",
  passageNote: "Read the full passage in product",
  question:
    "According to the passage, what percentage of the Reef's coral experienced bleaching in 2024?",
  options: [
    { letter: "A", text: "Sixty-five per cent" },
    { letter: "B", text: "Forty-five per cent" },
    { letter: "C", text: "Twenty-five per cent" },
    { letter: "D", text: "Eighty-five per cent" },
  ],
  correct: "A",
  correctExplanation: "Sixty-five per cent",
  commonMistake:
    "Persuasive texts contain multiple statistics. Children may confuse the bleaching percentage with other numbers in the passage. The question asks specifically about the 2024 bleaching figure -- read for the specific year, not just any percentage.",
};

export const ALL_SAMPLES = [
  SAMPLE_1,
  SAMPLE_2,
  SAMPLE_3,
  SAMPLE_4,
  SAMPLE_5,
  SAMPLE_6,
  SAMPLE_7,
  SAMPLE_8,
  SAMPLE_9,
];
