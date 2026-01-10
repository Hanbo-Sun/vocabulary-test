const TOTAL_QUESTIONS = 30;
const BUILTIN_INDEX = "data/index.json";
const STORAGE_KEY = "vocab.customPacks";
const UI_LANG_KEY = "vocab.uiLanguage";
const THEME_KEY = "vocab.uiTheme";
const UI_LANGUAGES = ["auto", "en", "zh-Hans", "zh-Hant", "es", "fr", "de", "ja", "ko"];
const ANSWER_SCORES = {
  yes: 1,
  unsure: 0.5,
  no: 0,
};

const I18N = {
  en: {
    badge: "Vocabulary Lab",
    testLanguage: "Test language",
    uiLanguage: "UI language",
    uiLanguageAuto: "Auto (system)",
    startTest: "Start test",
    howItWorks: "How it works",
    managePacks: "Manage packs",
    question: "Question",
    estimatorLabel: "Estimator",
    estimatorSmoothed: "Smoothed",
    estimatorSimple: "Simple",
    estimatorNoteSmoothed: "Smoothed keeps bands monotonic.",
    estimatorNoteSimple: "Simple averages band samples without smoothing.",
    questionsLabel: "Questions",
    knowIt: "I know it",
    notSure: "Not sure",
    dontKnow: "I do not know it",
    trustInstinct: "Trust your first instinct. No definitions will be shown during the test.",
    estimate: "Estimate",
    samples: "Samples",
    knownRate: "Known rate",
    coverage: "Coverage",
    levelRanges: "Level ranges",
    levelRangeItem: "{level}: {range} {unit}",
    close: "Close",
    retake: "Retake",
    copySummary: "Copy summary",
    howWorksTitle: "How this test works",
    howWorksBody:
      "We sample from common to rare and adapt difficulty as you answer. Your responses estimate total vocabulary size.",
    howWorksBullet1: "Answer quickly to reduce second-guessing.",
    howWorksBullet2: "\"Not sure\" counts as half-known.",
    howWorksBullet3: "Retake for a tighter estimate.",
    packsTitle: "Language packs",
    packsBody: "Add more languages or character sets later by importing CSV or JSON.",
    installedPacks: "Installed packs",
    importPack: "Import a pack",
    languageName: "Language name",
    languageCode: "Language code",
    unitType: "Unit type",
    unitAuto: "Auto (from file)",
    unitWord: "Word",
    unitCharacter: "Character",
    bandSize: "Band size (optional)",
    packFile: "Pack file (JSON or CSV)",
    templateCsvWord: "CSV template (word)",
    templateCsvChar: "CSV template (character)",
    templateJsonWord: "JSON template (word)",
    templateJsonChar: "JSON template (character)",
    importButton: "Import pack",
    packHelp:
      "CSV columns: word or character, rank (optional: band, range). Unit type and band size help auto-generate ranges. JSON should match the existing data schema.",
    themeLabel: "Theme",
    themeGlow: "Glow",
    themePaper: "Paper",
    themeAuto: "Auto",
    languageNamePlaceholder: "Spanish",
    languageCodePlaceholder: "es",
    bandSizePlaceholder: "500",
    statusReady: "Ready",
    statusLoading: "Loading...",
    statusImported: "Imported",
    statusFixErrors: "Fix errors",
    statusInvalidFile: "Invalid file",
    copySuccess: "Copied",
    copyFailed: "Copy failed",
    bandLabel: "Band {band} ({range})",
    unitWords: "words",
    unitCharacters: "characters",
    nounVocabulary: "vocabulary",
    nounCharacter: "character knowledge",
    heroTitle: "Discover your {language} {noun}",
    heroCopy: "Fast test. Sample {unit}, estimate your {noun}.",
    estimateValue: "{count} {unit}",
    sampleCount: "{count} samples",
    coverageCount: "{count} bands",
    packNoPacks: "No packs installed.",
    packBuiltIn: "Built-in",
    packCustom: "Custom",
    packUse: "Use",
    packActive: "Active",
    packRemove: "Remove",
    packUnits: "{count} {unit}",
    packBands: "{count} bands",
    resultNote: "Estimator: {estimator}.",
    shareSummary: "{language}: {estimate}, level {level}.",
    errorNameRequired: "Language name is required.",
    errorCodeRequired: "Language code is required.",
    errorCodeInvalid: "Language code must be lowercase letters, numbers, or dashes.",
    errorFileRequired: "Please choose a JSON or CSV file.",
    errorBandSizeInvalid: "Band size must be a positive number.",
    errorCodeBuiltin: "That language code is already used by a built-in pack.",
    errorCodeCustom: "That language code is already used by a custom pack.",
    errorParseFile: "Unable to parse file: {message}",
    errorCsvMissingColumn: "CSV must include a 'word' or 'character' column.",
    errorCsvEmpty: "Empty CSV file.",
    errorNoWords: "No words found in the dataset.",
    errorNoValidWords: "No valid words found in the dataset.",
  },
  es: {
    badge: "Laboratorio de vocabulario",
    testLanguage: "Idioma de prueba",
    uiLanguage: "Idioma de la interfaz",
    uiLanguageAuto: "Auto (sistema)",
    startTest: "Empezar prueba",
    howItWorks: "Cómo funciona",
    managePacks: "Gestionar packs",
    question: "Pregunta",
    estimatorLabel: "Estimador",
    estimatorSmoothed: "Suavizado",
    estimatorSimple: "Simple",
    estimatorNoteSmoothed: "Suavizado mantiene las bandas monotónicas.",
    estimatorNoteSimple: "Simple promedia las bandas sin suavizado.",
    questionsLabel: "Preguntas",
    knowIt: "La conozco",
    notSure: "No estoy seguro",
    dontKnow: "No la conozco",
    trustInstinct: "Confía en tu primer instinto. No se mostrarán definiciones.",
    estimate: "Estimación",
    samples: "Muestras",
    knownRate: "Tasa de acierto",
    coverage: "Cobertura",
    levelRanges: "Rangos de nivel",
    levelRangeItem: "{level}: {range} {unit}",
    close: "Cerrar",
    retake: "Repetir",
    copySummary: "Copiar resumen",
    howWorksTitle: "Cómo funciona esta prueba",
    howWorksBody:
      "Muestreamos de común a raro y ajustamos la dificultad según tus respuestas. Así estimamos tu vocabulario total.",
    howWorksBullet1: "Responde rápido para reducir dudas.",
    howWorksBullet2: "\"No estoy seguro\" cuenta como medio conocido.",
    howWorksBullet3: "Repite para una estimación más precisa.",
    packsTitle: "Packs de idioma",
    packsBody: "Añade idiomas o conjuntos de caracteres importando CSV o JSON.",
    installedPacks: "Packs instalados",
    importPack: "Importar pack",
    languageName: "Nombre del idioma",
    languageCode: "Código del idioma",
    unitType: "Tipo de unidad",
    unitAuto: "Auto (del archivo)",
    unitWord: "Palabra",
    unitCharacter: "Carácter",
    bandSize: "Tamaño de banda (opcional)",
    packFile: "Archivo del pack (JSON o CSV)",
    templateCsvWord: "Plantilla CSV (palabras)",
    templateCsvChar: "Plantilla CSV (caracteres)",
    templateJsonWord: "Plantilla JSON (palabras)",
    templateJsonChar: "Plantilla JSON (caracteres)",
    importButton: "Importar pack",
    packHelp:
      "Columnas CSV: word o character, rank (opcional: band, range). El tipo de unidad y el tamaño de banda ayudan a generar rangos. JSON debe seguir el esquema.",
    themeLabel: "Tema",
    themeGlow: "Brillo",
    themePaper: "Papel",
    themeAuto: "Auto",
    languageNamePlaceholder: "Español",
    languageCodePlaceholder: "es",
    bandSizePlaceholder: "500",
    statusReady: "Listo",
    statusLoading: "Cargando...",
    statusImported: "Importado",
    statusFixErrors: "Corrige errores",
    statusInvalidFile: "Archivo inválido",
    copySuccess: "Copiado",
    copyFailed: "Error al copiar",
    bandLabel: "Banda {band} ({range})",
    unitWords: "palabras",
    unitCharacters: "caracteres",
    nounVocabulary: "vocabulario",
    nounCharacter: "conocimiento de caracteres",
    heroTitle: "Descubre tu {noun} de {language}",
    heroCopy: "Prueba rápida. Muestra {unit} y estima tu {noun}.",
    estimateValue: "{count} {unit}",
    sampleCount: "{count} muestras",
    coverageCount: "{count} bandas",
    packNoPacks: "No hay packs instalados.",
    packBuiltIn: "Incluido",
    packCustom: "Personalizado",
    packUse: "Usar",
    packActive: "Activo",
    packRemove: "Eliminar",
    packUnits: "{count} {unit}",
    packBands: "{count} bandas",
    resultNote: "Estimador: {estimator}.",
    shareSummary: "{language}: {estimate}, nivel {level}.",
    errorNameRequired: "El nombre del idioma es obligatorio.",
    errorCodeRequired: "El código del idioma es obligatorio.",
    errorCodeInvalid: "El código debe usar minúsculas, números o guiones.",
    errorFileRequired: "Selecciona un archivo JSON o CSV.",
    errorBandSizeInvalid: "El tamaño de banda debe ser un número positivo.",
    errorCodeBuiltin: "Ese código ya está en uso por un pack integrado.",
    errorCodeCustom: "Ese código ya está en uso por un pack personalizado.",
    errorParseFile: "No se pudo leer el archivo: {message}",
    errorCsvMissingColumn: "El CSV debe incluir una columna 'word' o 'character'.",
    errorCsvEmpty: "El archivo CSV está vacío.",
    errorNoWords: "No se encontraron palabras en los datos.",
    errorNoValidWords: "No se encontraron palabras válidas.",
  },
  "zh-Hans": {
    badge: "词汇实验室",
    testLanguage: "测试语言",
    uiLanguage: "界面语言",
    uiLanguageAuto: "自动（系统）",
    startTest: "开始测试",
    howItWorks: "测试原理",
    managePacks: "管理题库",
    question: "题目",
    estimatorLabel: "估算器",
    estimatorSmoothed: "平滑",
    estimatorSimple: "简单",
    estimatorNoteSmoothed: "平滑保证难度单调。",
    estimatorNoteSimple: "简单对各段直接平均。",
    questionsLabel: "题量",
    knowIt: "我认识",
    notSure: "不确定",
    dontKnow: "我不认识",
    trustInstinct: "相信直觉，不显示释义。",
    estimate: "估算",
    samples: "样本数",
    knownRate: "认识率",
    coverage: "覆盖",
    levelRanges: "等级范围",
    levelRangeItem: "{level}：{range}{unit}",
    close: "关闭",
    retake: "再测一次",
    copySummary: "复制结果",
    howWorksTitle: "这项测试如何工作",
    howWorksBody:
      "题目从高频到低频，并会根据你的答题情况调整难度，据此估算总词汇量。",
    howWorksBullet1: "快速作答，减少犹豫。",
    howWorksBullet2: "“不确定”按半懂计分。",
    howWorksBullet3: "可重复测试提升精度。",
    packsTitle: "语言包",
    packsBody: "可导入 CSV 或 JSON，扩展到其他语言或字符集。",
    installedPacks: "已安装语言包",
    importPack: "导入语言包",
    languageName: "语言名称",
    languageCode: "语言代码",
    unitType: "单位类型",
    unitAuto: "自动（从文件）",
    unitWord: "词",
    unitCharacter: "字/字符",
    bandSize: "频段大小（可选）",
    packFile: "语言包文件（JSON 或 CSV）",
    templateCsvWord: "CSV 模板（词）",
    templateCsvChar: "CSV 模板（字符）",
    templateJsonWord: "JSON 模板（词）",
    templateJsonChar: "JSON 模板（字符）",
    importButton: "导入",
    packHelp:
      "CSV 列：word 或 character，rank（可选：band,range）。单位与频段大小可自动生成范围。JSON 需符合示例结构。",
    themeLabel: "主题",
    themeGlow: "柔光",
    themePaper: "纸感",
    themeAuto: "自动",
    languageNamePlaceholder: "西班牙语",
    languageCodePlaceholder: "es",
    bandSizePlaceholder: "500",
    statusReady: "就绪",
    statusLoading: "加载中...",
    statusImported: "已导入",
    statusFixErrors: "请修正",
    statusInvalidFile: "文件无效",
    copySuccess: "已复制",
    copyFailed: "复制失败",
    bandLabel: "第 {band} 段（{range}）",
    unitWords: "词",
    unitCharacters: "字符",
    nounVocabulary: "词汇量",
    nounCharacter: "识字量",
    heroTitle: "测测你的{language}{noun}",
    heroCopy: "快速测试，抽样{unit}，估算你的{noun}。",
    estimateValue: "{count} {unit}",
    sampleCount: "{count} 题",
    coverageCount: "{count} 段",
    packNoPacks: "暂无语言包。",
    packBuiltIn: "内置",
    packCustom: "自定义",
    packUse: "使用",
    packActive: "当前",
    packRemove: "移除",
    packUnits: "{count} {unit}",
    packBands: "{count} 段",
    resultNote: "估算器：{estimator}。",
    shareSummary: "{language}：{estimate}，等级 {level}。",
    errorNameRequired: "请输入语言名称。",
    errorCodeRequired: "请输入语言代码。",
    errorCodeInvalid: "语言代码需为小写字母、数字或短横线。",
    errorFileRequired: "请选择 JSON 或 CSV 文件。",
    errorBandSizeInvalid: "频段大小需为正数。",
    errorCodeBuiltin: "语言代码已被内置包占用。",
    errorCodeCustom: "语言代码已被自定义包占用。",
    errorParseFile: "无法解析文件：{message}",
    errorCsvMissingColumn: "CSV 需要包含 word 或 character 列。",
    errorCsvEmpty: "CSV 文件为空。",
    errorNoWords: "数据中没有词条。",
    errorNoValidWords: "未找到有效词条。",
  },
  "zh-Hant": {
    badge: "詞彙實驗室",
    testLanguage: "測試語言",
    uiLanguage: "介面語言",
    uiLanguageAuto: "自動（系統）",
    startTest: "開始測試",
    howItWorks: "測試原理",
    managePacks: "管理題庫",
    question: "題目",
    estimatorLabel: "估算器",
    estimatorSmoothed: "平滑",
    estimatorSimple: "簡單",
    estimatorNoteSmoothed: "平滑確保難度單調。",
    estimatorNoteSimple: "簡單直接平均各段。",
    questionsLabel: "題量",
    knowIt: "我認識",
    notSure: "不確定",
    dontKnow: "我不認識",
    trustInstinct: "相信直覺，不顯示釋義。",
    estimate: "估算",
    samples: "樣本數",
    knownRate: "認識率",
    coverage: "覆蓋",
    levelRanges: "等級範圍",
    levelRangeItem: "{level}：{range}{unit}",
    close: "關閉",
    retake: "再測一次",
    copySummary: "複製結果",
    howWorksTitle: "這項測試如何運作",
    howWorksBody:
      "題目從高頻到低頻，並會根據你的作答調整難度，據此估算總詞彙量。",
    howWorksBullet1: "快速作答，減少猶豫。",
    howWorksBullet2: "「不確定」按半懂計分。",
    howWorksBullet3: "可重複測試提升精度。",
    packsTitle: "語言包",
    packsBody: "可匯入 CSV 或 JSON，擴展到其他語言或字符集。",
    installedPacks: "已安裝語言包",
    importPack: "匯入語言包",
    languageName: "語言名稱",
    languageCode: "語言代碼",
    unitType: "單位類型",
    unitAuto: "自動（從檔案）",
    unitWord: "詞",
    unitCharacter: "字/字元",
    bandSize: "頻段大小（可選）",
    packFile: "語言包檔案（JSON 或 CSV）",
    templateCsvWord: "CSV 範本（詞）",
    templateCsvChar: "CSV 範本（字元）",
    templateJsonWord: "JSON 範本（詞）",
    templateJsonChar: "JSON 範本（字元）",
    importButton: "匯入",
    packHelp:
      "CSV 欄位：word 或 character，rank（可選：band,range）。單位與頻段大小可自動生成範圍。JSON 需符合示例結構。",
    themeLabel: "主題",
    themeGlow: "柔光",
    themePaper: "紙感",
    themeAuto: "自動",
    languageNamePlaceholder: "西班牙語",
    languageCodePlaceholder: "es",
    bandSizePlaceholder: "500",
    statusReady: "就緒",
    statusLoading: "載入中...",
    statusImported: "已匯入",
    statusFixErrors: "請修正",
    statusInvalidFile: "檔案無效",
    copySuccess: "已複製",
    copyFailed: "複製失敗",
    bandLabel: "第 {band} 段（{range}）",
    unitWords: "詞",
    unitCharacters: "字元",
    nounVocabulary: "詞彙量",
    nounCharacter: "識字量",
    heroTitle: "測測你的{language}{noun}",
    heroCopy: "快速測試，抽樣{unit}，估算你的{noun}。",
    estimateValue: "{count} {unit}",
    sampleCount: "{count} 題",
    coverageCount: "{count} 段",
    packNoPacks: "暫無語言包。",
    packBuiltIn: "內建",
    packCustom: "自訂",
    packUse: "使用",
    packActive: "目前",
    packRemove: "移除",
    packUnits: "{count} {unit}",
    packBands: "{count} 段",
    resultNote: "估算器：{estimator}。",
    shareSummary: "{language}：{estimate}，等級 {level}。",
    errorNameRequired: "請輸入語言名稱。",
    errorCodeRequired: "請輸入語言代碼。",
    errorCodeInvalid: "語言代碼需為小寫字母、數字或連字號。",
    errorFileRequired: "請選擇 JSON 或 CSV 檔案。",
    errorBandSizeInvalid: "頻段大小需為正數。",
    errorCodeBuiltin: "語言代碼已被內建包使用。",
    errorCodeCustom: "語言代碼已被自訂包使用。",
    errorParseFile: "無法解析檔案：{message}",
    errorCsvMissingColumn: "CSV 需要包含 word 或 character 欄位。",
    errorCsvEmpty: "CSV 檔案為空。",
    errorNoWords: "資料中沒有詞條。",
    errorNoValidWords: "未找到有效詞條。",
  },
  fr: {
    badge: "Laboratoire de vocabulaire",
    testLanguage: "Langue du test",
    uiLanguage: "Langue de l’interface",
    uiLanguageAuto: "Auto (système)",
    startTest: "Commencer le test",
    howItWorks: "Comment ça marche",
    managePacks: "Gérer les packs",
    question: "Question",
    estimatorLabel: "Estimateur",
    estimatorSmoothed: "Lissé",
    estimatorSimple: "Simple",
    estimatorNoteSmoothed: "Le lissage garde les bandes monotones.",
    estimatorNoteSimple: "Simple moyenne les bandes sans lissage.",
    questionsLabel: "Questions",
    knowIt: "Je connais",
    notSure: "Pas sûr",
    dontKnow: "Je ne connais pas",
    trustInstinct: "Fais confiance à ton instinct. Pas de définitions pendant le test.",
    estimate: "Estimation",
    samples: "Échantillons",
    knownRate: "Taux de connaissance",
    coverage: "Couverture",
    levelRanges: "Plages de niveau",
    levelRangeItem: "{level} : {range} {unit}",
    close: "Fermer",
    retake: "Recommencer",
    copySummary: "Copier le résumé",
    howWorksTitle: "Comment fonctionne ce test",
    howWorksBody:
      "Nous échantillonnons du fréquent au rare et adaptons la difficulté à tes réponses. Cela estime ton vocabulaire total.",
    howWorksBullet1: "Réponds vite pour éviter les hésitations.",
    howWorksBullet2: "\"Pas sûr\" compte à moitié.",
    howWorksBullet3: "Refais le test pour affiner l’estimation.",
    packsTitle: "Packs de langue",
    packsBody: "Ajoute d’autres langues ou jeux de caractères via CSV ou JSON.",
    installedPacks: "Packs installés",
    importPack: "Importer un pack",
    languageName: "Nom de la langue",
    languageCode: "Code de langue",
    unitType: "Type d’unité",
    unitAuto: "Auto (depuis le fichier)",
    unitWord: "Mot",
    unitCharacter: "Caractère",
    bandSize: "Taille de bande (optionnel)",
    packFile: "Fichier du pack (JSON ou CSV)",
    templateCsvWord: "Modèle CSV (mots)",
    templateCsvChar: "Modèle CSV (caractères)",
    templateJsonWord: "Modèle JSON (mots)",
    templateJsonChar: "Modèle JSON (caractères)",
    importButton: "Importer",
    packHelp:
      "Colonnes CSV : word ou character, rank (optionnel : band, range). Le type d’unité et la taille de bande aident à générer les plages. Le JSON doit suivre le schéma.",
    themeLabel: "Thème",
    themeGlow: "Douce lumière",
    themePaper: "Papier",
    themeAuto: "Auto",
    languageNamePlaceholder: "Espagnol",
    languageCodePlaceholder: "es",
    bandSizePlaceholder: "500",
    statusReady: "Prêt",
    statusLoading: "Chargement...",
    statusImported: "Importé",
    statusFixErrors: "Corriger",
    statusInvalidFile: "Fichier invalide",
    copySuccess: "Copié",
    copyFailed: "Échec de copie",
    bandLabel: "Bande {band} ({range})",
    unitWords: "mots",
    unitCharacters: "caractères",
    nounVocabulary: "vocabulaire",
    nounCharacter: "connaissance des caractères",
    heroTitle: "Découvre ton {noun} en {language}",
    heroCopy: "Test rapide. Échantillonne des {unit}, estime ton {noun}.",
    estimateValue: "{count} {unit}",
    sampleCount: "{count} échantillons",
    coverageCount: "{count} bandes",
    packNoPacks: "Aucun pack installé.",
    packBuiltIn: "Intégré",
    packCustom: "Personnalisé",
    packUse: "Utiliser",
    packActive: "Actif",
    packRemove: "Supprimer",
    packUnits: "{count} {unit}",
    packBands: "{count} bandes",
    resultNote: "Estimateur : {estimator}.",
    shareSummary: "{language} : {estimate}, niveau {level}.",
    errorNameRequired: "Le nom de la langue est requis.",
    errorCodeRequired: "Le code de langue est requis.",
    errorCodeInvalid: "Le code doit être en minuscules, chiffres ou tirets.",
    errorFileRequired: "Veuillez choisir un fichier JSON ou CSV.",
    errorBandSizeInvalid: "La taille de bande doit être positive.",
    errorCodeBuiltin: "Ce code est déjà utilisé par un pack intégré.",
    errorCodeCustom: "Ce code est déjà utilisé par un pack personnalisé.",
    errorParseFile: "Impossible d’analyser le fichier : {message}",
    errorCsvMissingColumn: "Le CSV doit contenir une colonne 'word' ou 'character'.",
    errorCsvEmpty: "Fichier CSV vide.",
    errorNoWords: "Aucun mot dans le jeu de données.",
    errorNoValidWords: "Aucun mot valide trouvé.",
  },
  de: {
    badge: "Vokabularlabor",
    testLanguage: "Testsprache",
    uiLanguage: "UI-Sprache",
    uiLanguageAuto: "Auto (System)",
    startTest: "Test starten",
    howItWorks: "So funktioniert es",
    managePacks: "Pakete verwalten",
    question: "Frage",
    estimatorLabel: "Schätzer",
    estimatorSmoothed: "Geglättet",
    estimatorSimple: "Einfach",
    estimatorNoteSmoothed: "Geglättet hält die Bänder monoton.",
    estimatorNoteSimple: "Einfach mittelt die Bänder ohne Glättung.",
    questionsLabel: "Fragen",
    knowIt: "Kenne ich",
    notSure: "Nicht sicher",
    dontKnow: "Kenne ich nicht",
    trustInstinct: "Vertrau deinem ersten Eindruck. Keine Definitionen während des Tests.",
    estimate: "Schätzung",
    samples: "Stichproben",
    knownRate: "Bekanntheitsrate",
    coverage: "Abdeckung",
    levelRanges: "Stufenbereiche",
    levelRangeItem: "{level}: {range} {unit}",
    close: "Schließen",
    retake: "Neu starten",
    copySummary: "Zusammenfassung kopieren",
    howWorksTitle: "So funktioniert der Test",
    howWorksBody:
      "Wir nehmen Stichproben von häufig zu selten und passen die Schwierigkeit an deine Antworten an. So schätzen wir deinen Wortschatz.",
    howWorksBullet1: "Schnell antworten, um Grübeln zu vermeiden.",
    howWorksBullet2: "\"Nicht sicher\" zählt halb.",
    howWorksBullet3: "Wiederholen für genauere Schätzung.",
    packsTitle: "Sprachpakete",
    packsBody: "Weitere Sprachen oder Zeichensätze per CSV oder JSON hinzufügen.",
    installedPacks: "Installierte Pakete",
    importPack: "Paket importieren",
    languageName: "Sprachname",
    languageCode: "Sprachcode",
    unitType: "Einheitstyp",
    unitAuto: "Auto (aus Datei)",
    unitWord: "Wort",
    unitCharacter: "Zeichen",
    bandSize: "Bandgröße (optional)",
    packFile: "Paketdatei (JSON oder CSV)",
    templateCsvWord: "CSV-Vorlage (Wörter)",
    templateCsvChar: "CSV-Vorlage (Zeichen)",
    templateJsonWord: "JSON-Vorlage (Wörter)",
    templateJsonChar: "JSON-Vorlage (Zeichen)",
    importButton: "Importieren",
    packHelp:
      "CSV-Spalten: word oder character, rank (optional: band, range). Einheitstyp und Bandgröße helfen bei der Bereichsbildung. JSON muss dem Schema folgen.",
    themeLabel: "Thema",
    themeGlow: "Glow",
    themePaper: "Papier",
    themeAuto: "Auto",
    languageNamePlaceholder: "Spanisch",
    languageCodePlaceholder: "es",
    bandSizePlaceholder: "500",
    statusReady: "Bereit",
    statusLoading: "Laden...",
    statusImported: "Importiert",
    statusFixErrors: "Fehler beheben",
    statusInvalidFile: "Ungültige Datei",
    copySuccess: "Kopiert",
    copyFailed: "Kopieren fehlgeschlagen",
    bandLabel: "Band {band} ({range})",
    unitWords: "Wörter",
    unitCharacters: "Zeichen",
    nounVocabulary: "Wortschatz",
    nounCharacter: "Zeichenkenntnis",
    heroTitle: "Entdecke deinen {language} {noun}",
    heroCopy: "Schneller Test. Stichprobe von {unit}, schätze deinen {noun}.",
    estimateValue: "{count} {unit}",
    sampleCount: "{count} Stichproben",
    coverageCount: "{count} Bänder",
    packNoPacks: "Keine Pakete installiert.",
    packBuiltIn: "Integriert",
    packCustom: "Benutzerdefiniert",
    packUse: "Nutzen",
    packActive: "Aktiv",
    packRemove: "Entfernen",
    packUnits: "{count} {unit}",
    packBands: "{count} Bänder",
    resultNote: "Schätzer: {estimator}.",
    shareSummary: "{language}: {estimate}, Stufe {level}.",
    errorNameRequired: "Sprachname ist erforderlich.",
    errorCodeRequired: "Sprachcode ist erforderlich.",
    errorCodeInvalid: "Sprachcode nur Kleinbuchstaben, Zahlen oder Bindestriche.",
    errorFileRequired: "Bitte eine JSON- oder CSV-Datei wählen.",
    errorBandSizeInvalid: "Bandgröße muss positiv sein.",
    errorCodeBuiltin: "Dieser Code wird bereits von einem integrierten Paket genutzt.",
    errorCodeCustom: "Dieser Code wird bereits von einem benutzerdefinierten Paket genutzt.",
    errorParseFile: "Datei konnte nicht gelesen werden: {message}",
    errorCsvMissingColumn: "CSV muss eine Spalte 'word' oder 'character' enthalten.",
    errorCsvEmpty: "CSV-Datei ist leer.",
    errorNoWords: "Keine Wörter im Datensatz.",
    errorNoValidWords: "Keine gültigen Wörter gefunden.",
  },
  ja: {
    badge: "語彙ラボ",
    testLanguage: "テスト言語",
    uiLanguage: "UI言語",
    uiLanguageAuto: "自動（システム）",
    startTest: "テスト開始",
    howItWorks: "仕組み",
    managePacks: "パック管理",
    question: "問題",
    estimatorLabel: "推定法",
    estimatorSmoothed: "平滑化",
    estimatorSimple: "シンプル",
    estimatorNoteSmoothed: "平滑化でバンドが単調になります。",
    estimatorNoteSimple: "シンプルは平滑化せず平均します。",
    questionsLabel: "問題数",
    knowIt: "知っている",
    notSure: "よくわからない",
    dontKnow: "知らない",
    trustInstinct: "直感で答えてください。テスト中に定義は表示しません。",
    estimate: "推定",
    samples: "サンプル",
    knownRate: "既知率",
    coverage: "カバレッジ",
    levelRanges: "レベル範囲",
    levelRangeItem: "{level}: {range} {unit}",
    close: "閉じる",
    retake: "もう一度",
    copySummary: "結果をコピー",
    howWorksTitle: "このテストの仕組み",
    howWorksBody:
      "頻出から低頻度までサンプルし、回答に応じて難易度を調整して語彙量を推定します。",
    howWorksBullet1: "素早く答えて迷いを減らす。",
    howWorksBullet2: "「よくわからない」は半分として扱います。",
    howWorksBullet3: "再テストで精度を上げられます。",
    packsTitle: "言語パック",
    packsBody: "CSV/JSON を読み込んで他の言語や文字セットを追加できます。",
    installedPacks: "インストール済みパック",
    importPack: "パックを読み込む",
    languageName: "言語名",
    languageCode: "言語コード",
    unitType: "単位",
    unitAuto: "自動（ファイル）",
    unitWord: "単語",
    unitCharacter: "文字",
    bandSize: "バンドサイズ（任意）",
    packFile: "パックファイル（JSON/CSV）",
    templateCsvWord: "CSV テンプレート（単語）",
    templateCsvChar: "CSV テンプレート（文字）",
    templateJsonWord: "JSON テンプレート（単語）",
    templateJsonChar: "JSON テンプレート（文字）",
    importButton: "読み込む",
    packHelp:
      "CSV 列: word または character, rank（任意: band, range）。単位とバンドサイズで範囲を生成できます。JSON は既存の形式に合わせてください。",
    themeLabel: "テーマ",
    themeGlow: "グロー",
    themePaper: "ペーパー",
    themeAuto: "自動",
    languageNamePlaceholder: "スペイン語",
    languageCodePlaceholder: "es",
    bandSizePlaceholder: "500",
    statusReady: "準備完了",
    statusLoading: "読み込み中...",
    statusImported: "読み込み完了",
    statusFixErrors: "修正してください",
    statusInvalidFile: "無効なファイル",
    copySuccess: "コピーしました",
    copyFailed: "コピー失敗",
    bandLabel: "バンド {band}（{range}）",
    unitWords: "語",
    unitCharacters: "文字",
    nounVocabulary: "語彙",
    nounCharacter: "文字知識",
    heroTitle: "{language}の{noun}を測定",
    heroCopy: "短時間テスト。{unit}をサンプルして{noun}を推定。",
    estimateValue: "{count} {unit}",
    sampleCount: "{count} 件",
    coverageCount: "{count} バンド",
    packNoPacks: "パックがありません。",
    packBuiltIn: "内蔵",
    packCustom: "カスタム",
    packUse: "使用",
    packActive: "使用中",
    packRemove: "削除",
    packUnits: "{count} {unit}",
    packBands: "{count} バンド",
    resultNote: "推定法: {estimator}.",
    shareSummary: "{language}: {estimate}、レベル {level}。",
    errorNameRequired: "言語名は必須です。",
    errorCodeRequired: "言語コードは必須です。",
    errorCodeInvalid: "言語コードは小文字・数字・ハイフンのみです。",
    errorFileRequired: "JSON または CSV を選択してください。",
    errorBandSizeInvalid: "バンドサイズは正の数にしてください。",
    errorCodeBuiltin: "そのコードは既に組み込みパックで使用されています。",
    errorCodeCustom: "そのコードは既にカスタムパックで使用されています。",
    errorParseFile: "ファイルを解析できません: {message}",
    errorCsvMissingColumn: "CSV に 'word' または 'character' 列が必要です。",
    errorCsvEmpty: "CSV が空です。",
    errorNoWords: "データに語がありません。",
    errorNoValidWords: "有効な語が見つかりません。",
  },
  ko: {
    badge: "어휘 랩",
    testLanguage: "테스트 언어",
    uiLanguage: "UI 언어",
    uiLanguageAuto: "자동(시스템)",
    startTest: "테스트 시작",
    howItWorks: "작동 방식",
    managePacks: "팩 관리",
    question: "문항",
    estimatorLabel: "추정 방식",
    estimatorSmoothed: "스무딩",
    estimatorSimple: "단순",
    estimatorNoteSmoothed: "스무딩은 밴드를 단조롭게 유지합니다.",
    estimatorNoteSimple: "단순 평균으로 계산합니다.",
    questionsLabel: "문항 수",
    knowIt: "알아요",
    notSure: "잘 모르겠어요",
    dontKnow: "몰라요",
    trustInstinct: "직감대로 답하세요. 테스트 중 정의는 표시되지 않습니다.",
    estimate: "추정",
    samples: "샘플",
    knownRate: "알고 있는 비율",
    coverage: "커버리지",
    levelRanges: "레벨 범위",
    levelRangeItem: "{level}: {range} {unit}",
    close: "닫기",
    retake: "다시 하기",
    copySummary: "요약 복사",
    howWorksTitle: "이 테스트의 원리",
    howWorksBody:
      "자주 쓰이는 것부터 드문 것까지 샘플링하고, 답변에 맞춰 난이도를 조정해 어휘량을 추정합니다.",
    howWorksBullet1: "빠르게 답해 망설임을 줄이세요.",
    howWorksBullet2: "\"잘 모르겠어요\"는 절반으로 계산합니다.",
    howWorksBullet3: "재테스트하면 더 정확해집니다.",
    packsTitle: "언어 팩",
    packsBody: "CSV 또는 JSON을 가져와 다른 언어나 문자 집합을 추가하세요.",
    installedPacks: "설치된 팩",
    importPack: "팩 가져오기",
    languageName: "언어 이름",
    languageCode: "언어 코드",
    unitType: "단위 유형",
    unitAuto: "자동(파일)",
    unitWord: "단어",
    unitCharacter: "문자",
    bandSize: "밴드 크기(선택)",
    packFile: "팩 파일(JSON 또는 CSV)",
    templateCsvWord: "CSV 템플릿(단어)",
    templateCsvChar: "CSV 템플릿(문자)",
    templateJsonWord: "JSON 템플릿(단어)",
    templateJsonChar: "JSON 템플릿(문자)",
    importButton: "가져오기",
    packHelp:
      "CSV 열: word 또는 character, rank(선택: band, range). 단위와 밴드 크기를 이용해 범위를 생성합니다. JSON은 기존 스키마를 따라야 합니다.",
    themeLabel: "테마",
    themeGlow: "글로우",
    themePaper: "페이퍼",
    themeAuto: "자동",
    languageNamePlaceholder: "스페인어",
    languageCodePlaceholder: "es",
    bandSizePlaceholder: "500",
    statusReady: "준비됨",
    statusLoading: "로딩 중...",
    statusImported: "가져옴",
    statusFixErrors: "오류 수정",
    statusInvalidFile: "잘못된 파일",
    copySuccess: "복사됨",
    copyFailed: "복사 실패",
    bandLabel: "밴드 {band} ({range})",
    unitWords: "단어",
    unitCharacters: "문자",
    nounVocabulary: "어휘",
    nounCharacter: "문자 지식",
    heroTitle: "{language} {noun} 알아보기",
    heroCopy: "빠른 테스트. {unit}를 샘플링해 {noun}을 추정합니다.",
    estimateValue: "{count} {unit}",
    sampleCount: "{count}개 샘플",
    coverageCount: "{count}개 밴드",
    packNoPacks: "설치된 팩이 없습니다.",
    packBuiltIn: "기본",
    packCustom: "사용자",
    packUse: "사용",
    packActive: "활성",
    packRemove: "제거",
    packUnits: "{count} {unit}",
    packBands: "{count}개 밴드",
    resultNote: "추정 방식: {estimator}.",
    shareSummary: "{language}: {estimate}, 레벨 {level}.",
    errorNameRequired: "언어 이름이 필요합니다.",
    errorCodeRequired: "언어 코드가 필요합니다.",
    errorCodeInvalid: "언어 코드는 소문자, 숫자, 하이픈만 가능합니다.",
    errorFileRequired: "JSON 또는 CSV 파일을 선택하세요.",
    errorBandSizeInvalid: "밴드 크기는 양수여야 합니다.",
    errorCodeBuiltin: "이 코드는 기본 팩에서 이미 사용 중입니다.",
    errorCodeCustom: "이 코드는 사용자 팩에서 이미 사용 중입니다.",
    errorParseFile: "파일을 읽을 수 없습니다: {message}",
    errorCsvMissingColumn: "CSV에는 'word' 또는 'character' 열이 필요합니다.",
    errorCsvEmpty: "CSV 파일이 비었습니다.",
    errorNoWords: "데이터에 단어가 없습니다.",
    errorNoValidWords: "유효한 단어를 찾지 못했습니다.",
  },
};

const PACK_DISPLAY_NAMES = {
  en: {
    en: "English",
    es: "Spanish",
    zh: "Chinese (Characters)",
    "zh-hant": "Chinese (Traditional)",
    fr: "French",
    de: "German",
    ja: "Japanese (Words)",
    "ko-hanja": "Korean (Hanja)",
  },
  es: {
    en: "Inglés",
    es: "Español",
    zh: "Chino (caracteres)",
    "zh-hant": "Chino (tradicional)",
    fr: "Francés",
    de: "Alemán",
    ja: "Japonés (palabras)",
    "ko-hanja": "Coreano (hanja)",
  },
  "zh-Hans": {
    en: "英语",
    es: "西班牙语",
    zh: "中文（字符）",
    "zh-hant": "繁体中文（字符）",
    fr: "法语",
    de: "德语",
    ja: "日语（词汇）",
    "ko-hanja": "韩语（汉字）",
  },
  "zh-Hant": {
    en: "英語",
    es: "西班牙語",
    zh: "中文（字元）",
    "zh-hant": "繁體中文（字元）",
    fr: "法語",
    de: "德語",
    ja: "日語（詞彙）",
    "ko-hanja": "韓語（漢字）",
  },
  fr: {
    en: "Anglais",
    es: "Espagnol",
    zh: "Chinois (caractères)",
    "zh-hant": "Chinois (traditionnel)",
    fr: "Français",
    de: "Allemand",
    ja: "Japonais (mots)",
    "ko-hanja": "Coréen (hanja)",
  },
  de: {
    en: "Englisch",
    es: "Spanisch",
    zh: "Chinesisch (Zeichen)",
    "zh-hant": "Chinesisch (traditionell)",
    fr: "Französisch",
    de: "Deutsch",
    ja: "Japanisch (Wörter)",
    "ko-hanja": "Koreanisch (Hanja)",
  },
  ja: {
    en: "英語",
    es: "スペイン語",
    zh: "中国語（漢字）",
    "zh-hant": "中国語（繁体字）",
    fr: "フランス語",
    de: "ドイツ語",
    ja: "日本語（語彙）",
    "ko-hanja": "韓国語（漢字）",
  },
  ko: {
    en: "영어",
    es: "스페인어",
    zh: "중국어(한자)",
    "zh-hant": "중국어(번체)",
    fr: "프랑스어",
    de: "독일어",
    ja: "일본어(어휘)",
    "ko-hanja": "한국어(한자)",
  },
};
const startButton = document.getElementById("start-test");
const learnMoreButton = document.getElementById("learn-more");
const themeToggleButton = document.getElementById("theme-toggle");
const restartButton = document.getElementById("restart");
const shareButton = document.getElementById("share");

const heroTitle = document.getElementById("hero-title");
const heroCopy = document.getElementById("hero-copy");
const questionCountSelect = document.getElementById("question-count");
const resultNote = document.getElementById("result-note");

const languageSelect = document.getElementById("language");
const uiLanguageSelect = document.getElementById("ui-language");
const languageNote = document.getElementById("language-note");
const packList = document.getElementById("pack-list");
const packForm = document.getElementById("pack-form");
const packNameInput = document.getElementById("pack-name");
const packCodeInput = document.getElementById("pack-code");
const packFileInput = document.getElementById("pack-file");
const packModeSelect = document.getElementById("pack-mode");
const packBandSizeInput = document.getElementById("pack-band-size");
const packErrors = document.getElementById("pack-errors");
const answerButtons = Array.from(document.querySelectorAll("[data-answer]"));

const testCard = document.getElementById("test-card");
const resultCard = document.getElementById("result-card");
const packCard = document.getElementById("pack-card");
const howModal = document.getElementById("how-modal");

const wordEl = document.getElementById("word");
const progressEl = document.getElementById("progress");
const meterFill = document.getElementById("meter-fill");

const estimateEl = document.getElementById("estimate");
const levelEl = document.getElementById("level");
const levelExplainEl = document.getElementById("level-explain");
const sampleCountEl = document.getElementById("sample-count");
const knownRateEl = document.getElementById("known-rate");
const levelRangesEl = document.getElementById("level-ranges");
const levelRangesList = document.getElementById("level-ranges-list");

let dataset = null;
let currentQuestion = null;
let totalQuestions = TOTAL_QUESTIONS;
let currentIndex = 0;
let results = [];
let bandPools = {};
let usedWords = new Set();
let adaptiveBand = 1;
let correctStreak = 0;
let wrongStreak = 0;
let packIndex = [];
let customPacks = [];
let uiLanguage = "auto";
let languageNoteState = "ready";
let uiTheme = "glow";
let systemTheme = "glow";
let testActive = false;
let datasetReady = false;

function t(key, vars = {}) {
  const table = I18N[getEffectiveUiLanguage()] || I18N.en;
  const template = table[key] || I18N.en[key] || key;
  return template.replace(/\{(\w+)\}/g, (_, name) => {
    return Object.prototype.hasOwnProperty.call(vars, name) ? vars[name] : "";
  });
}

function detectUiLanguage() {
  const raw = navigator.language || "en";
  if (raw.startsWith("zh")) {
    if (/Hant|TW|HK|MO/i.test(raw)) {
      return "zh-Hant";
    }
    return "zh-Hans";
  }
  if (raw.startsWith("es")) {
    return "es";
  }
  if (raw.startsWith("fr")) {
    return "fr";
  }
  if (raw.startsWith("de")) {
    return "de";
  }
  if (raw.startsWith("ja")) {
    return "ja";
  }
  if (raw.startsWith("ko")) {
    return "ko";
  }
  return "en";
}

function getEffectiveUiLanguage() {
  if (uiLanguage === "auto") {
    return detectUiLanguage();
  }
  return uiLanguage;
}

function loadUiLanguage() {
  return "en";
}

function setUiLanguage(lang) {
  uiLanguage = UI_LANGUAGES.includes(lang) ? lang : "auto";
  localStorage.setItem(UI_LANG_KEY, uiLanguage);
  uiLanguageSelect.value = uiLanguage;
  document.documentElement.lang = getEffectiveUiLanguage();
  applyTranslations();
}

function loadPreference(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored || fallback;
  } catch (error) {
    return fallback;
  }
}

function resolveTheme(theme) {
  if (theme === "auto") {
    return systemTheme;
  }
  return theme === "paper" ? "paper" : "glow";
}

function applyTheme(theme) {
  uiTheme = theme;
  const resolved = resolveTheme(uiTheme);
  document.body.classList.toggle("theme-paper", resolved === "paper");
  localStorage.setItem(THEME_KEY, uiTheme);
}

function updateToggleButtons() {
  const themeKey = uiTheme === "auto"
    ? "themeAuto"
    : uiTheme === "paper"
      ? "themePaper"
      : "themeGlow";
  themeToggleButton.textContent = `${t("themeLabel")}: ${t(
    themeKey
  )}`;
}

function setLanguageNote(state) {
  languageNoteState = state;
  if (!languageNote) {
    return;
  }
  const keyMap = {
    ready: "statusReady",
    loading: "statusLoading",
    imported: "statusImported",
    fixErrors: "statusFixErrors",
    invalidFile: "statusInvalidFile",
  };
  languageNote.textContent = t(keyMap[state] || "statusReady");
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = t(node.dataset.i18n);
    if (value) {
      node.textContent = value;
    }
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const value = t(node.dataset.i18nPlaceholder);
    if (value) {
      node.setAttribute("placeholder", value);
    }
  });
  updateHeroCopy();
  updateToggleButtons();
  setLanguageNote(languageNoteState);
  renderLanguageOptions();
  if (results.length > 0 && currentIndex >= totalQuestions) {
    showResults();
  }
}

function setCardState(card, state) {
  card.setAttribute("data-state", state);
}

function openHowModal() {
  if (!howModal) {
    return;
  }
  howModal.classList.add("is-open");
  howModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeHowModal() {
  if (!howModal) {
    return;
  }
  howModal.classList.remove("is-open");
  howModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function setTestActive(active) {
  testActive = active;
  answerButtons.forEach((button) => {
    button.disabled = !active;
  });
}

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function resolveUnitLabel(unitLabel, mode) {
  if (unitLabel === "words") {
    return t("unitWords");
  }
  if (unitLabel === "characters") {
    return t("unitCharacters");
  }
  if (unitLabel) {
    return unitLabel;
  }
  return mode === "character" ? t("unitCharacters") : t("unitWords");
}

function getPackDisplayName(pack) {
  const map = PACK_DISPLAY_NAMES[getEffectiveUiLanguage()] || PACK_DISPLAY_NAMES.en;
  return map[pack.code] || pack.name || pack.code;
}

function getActiveLanguageName() {
  const pack = findPack(languageSelect.value);
  if (pack) {
    return getPackDisplayName(pack);
  }
  return dataset?.language || "English";
}

function getUnitLabel() {
  if (!dataset) {
    return t("unitWords");
  }
  return resolveUnitLabel(dataset.unitLabel, dataset.mode);
}

function getEstimatorLabel() {
  return t("estimatorSimple");
}

function getQuestionCount() {
  if (!questionCountSelect) {
    return TOTAL_QUESTIONS;
  }
  const value = Number.parseInt(questionCountSelect.value, 10);
  return Number.isFinite(value) ? Math.max(20, value) : TOTAL_QUESTIONS;
}


function updateHeroCopy() {
  if (!dataset) {
    return;
  }
  const unitLabel = getUnitLabel();
  const language = getActiveLanguageName();
  const noun = dataset.mode === "character" ? t("nounCharacter") : t("nounVocabulary");
  heroTitle.textContent = t("heroTitle", { language, noun });
  heroCopy.textContent = t("heroCopy", { unit: unitLabel, noun });
}

function getDefaultLevelsWord() {
  return [
    { level: "A1", max: 1000, label: t("levelA1") },
    { level: "A2", max: 2000, label: t("levelA2") },
    { level: "B1", max: 3500, label: t("levelB1") },
    { level: "B2", max: 5000, label: t("levelB2") },
    { level: "C1", max: 8000, label: t("levelC1") },
    { level: "C2", max: Number.POSITIVE_INFINITY, label: t("levelC2") },
  ];
}

function getDefaultLevelsChar() {
  return [
    { level: t("levelChar1Name"), max: 800, label: t("levelChar1") },
    { level: t("levelChar2Name"), max: 1600, label: t("levelChar2") },
    { level: t("levelChar3Name"), max: 2600, label: t("levelChar3") },
    { level: t("levelChar4Name"), max: 4000, label: t("levelChar4") },
    { level: t("levelChar5Name"), max: 6000, label: t("levelChar5") },
    { level: t("levelChar6Name"), max: Number.POSITIVE_INFINITY, label: t("levelChar6") },
  ];
}

function getLevelBands() {
  if (Array.isArray(dataset?.levels) && dataset.levels.length > 0) {
    return dataset.levels;
  }
  return dataset?.mode === "character" ? getDefaultLevelsChar() : getDefaultLevelsWord();
}

function groupByBand(words) {
  const grouped = {};
  words.forEach((word) => {
    if (!grouped[word.band]) {
      grouped[word.band] = [];
    }
    grouped[word.band].push(word);
  });
  return grouped;
}

function buildBandPools(words) {
  const grouped = groupByBand(words);
  const pools = {};
  dataset.bands.forEach((band) => {
    const items = grouped[band.index] ?? [];
    pools[band.index] = shuffle(items);
  });
  return pools;
}

function clampBand(band) {
  if (!dataset?.bands?.length) {
    return band;
  }
  return Math.max(1, Math.min(dataset.bands.length, band));
}

function findNearestBand(startBand) {
  if (!dataset?.bands?.length) {
    return startBand;
  }
  if (bandPools[startBand]?.length) {
    return startBand;
  }
  for (let offset = 1; offset < dataset.bands.length; offset += 1) {
    const lower = startBand - offset;
    const upper = startBand + offset;
    if (lower >= 1 && bandPools[lower]?.length) {
      return lower;
    }
    if (upper <= dataset.bands.length && bandPools[upper]?.length) {
      return upper;
    }
  }
  return startBand;
}

function pullNextFromBand(band) {
  const pool = bandPools[band] ?? [];
  while (pool.length > 0) {
    const candidate = pool.pop();
    if (!usedWords.has(candidate.word)) {
      usedWords.add(candidate.word);
      return candidate;
    }
  }
  return null;
}

function getNextQuestion() {
  let targetBand = findNearestBand(adaptiveBand);
  let next = pullNextFromBand(targetBand);
  if (!next) {
    for (let band = 1; band <= dataset.bands.length; band += 1) {
      next = pullNextFromBand(band);
      if (next) {
        targetBand = band;
        break;
      }
    }
  }
  adaptiveBand = targetBand;
  return next;
}

function updateAdaptiveBand(score) {
  if (score >= 1) {
    correctStreak += 1;
    wrongStreak = 0;
  } else if (score <= 0) {
    wrongStreak += 1;
    correctStreak = 0;
  } else {
    correctStreak = 0;
    wrongStreak = 0;
  }

  let step = 1;
  if (correctStreak >= 4 || wrongStreak >= 3) {
    step = 3;
  } else if (correctStreak >= 2 || wrongStreak >= 2) {
    step = 2;
  }

  if (score >= 1) {
    adaptiveBand += step;
  } else if (score <= 0) {
    adaptiveBand -= step;
  }
  adaptiveBand = clampBand(adaptiveBand);
}

function updateQuestion() {
  const current = currentQuestion;
  if (!current) {
    return;
  }
  setTestActive(true);
  wordEl.textContent = current.word;
  progressEl.textContent = `${currentIndex + 1} / ${totalQuestions}`;
  meterFill.style.width = `${((currentIndex + 1) / totalQuestions) * 100}%`;
}

function setIdleProgress() {
  const total = getQuestionCount();
  progressEl.textContent = `1 / ${total}`;
  meterFill.style.width = "0%";
}

function isotonicNonIncreasing(means, weights) {
  const blocks = [];
  means.forEach((mean, index) => {
    blocks.push({ mean, weight: weights[index], count: 1 });
    while (blocks.length >= 2) {
      const last = blocks[blocks.length - 1];
      const prev = blocks[blocks.length - 2];
      if (prev.mean >= last.mean) {
        break;
      }
      const weight = prev.weight + last.weight;
      const merged = {
        mean: (prev.mean * prev.weight + last.mean * last.weight) / weight,
        weight,
        count: prev.count + last.count,
      };
      blocks.pop();
      blocks.pop();
      blocks.push(merged);
    }
  });

  const smoothed = [];
  blocks.forEach((block) => {
    for (let i = 0; i < block.count; i += 1) {
      smoothed.push(block.mean);
    }
  });
  return smoothed;
}

function estimateSmoothed(resultsData) {
  const bandStats = {};
  resultsData.forEach((result) => {
    if (!bandStats[result.band]) {
      bandStats[result.band] = { score: 0, total: 0 };
    }
    bandStats[result.band].score += result.score;
    bandStats[result.band].total += 1;
  });

  const alpha = 1;
  const beta = 1;
  const means = dataset.bands.map((band) => {
    const stat = bandStats[band.index] ?? { score: 0, total: 0 };
    const total = stat.total + alpha + beta;
    return (stat.score + alpha) / total;
  });
  const weights = dataset.bands.map((band) => {
    const stat = bandStats[band.index] ?? { score: 0, total: 0 };
    return stat.total + alpha + beta;
  });

  const smoothed = isotonicNonIncreasing(means, weights);
  const estimate = dataset.bands.reduce((sum, band, index) => {
    return sum + smoothed[index] * band.size;
  }, 0);

  const clamped = Math.max(0, Math.min(dataset.maxRank, estimate));
  return Math.round(clamped / 50) * 50;
}

function estimateSimple(resultsData) {
  const bandStats = {};
  resultsData.forEach((result) => {
    if (!bandStats[result.band]) {
      bandStats[result.band] = { score: 0, total: 0 };
    }
    bandStats[result.band].score += result.score;
    bandStats[result.band].total += 1;
  });

  const overall = resultsData.reduce((sum, result) => sum + result.score, 0) /
    Math.max(resultsData.length, 1);

  const ratios = dataset.bands.map((band) => {
    const stat = bandStats[band.index];
    if (!stat) {
      return null;
    }
    return stat.score / stat.total;
  });

  const resolvedRatios = ratios.map((ratio, index) => {
    if (ratio !== null) {
      return ratio;
    }
    const left = ratios.slice(0, index).reverse().find((value) => value !== null);
    const right = ratios.slice(index + 1).find((value) => value !== null);
    if (left !== undefined && right !== undefined) {
      return (left + right) / 2;
    }
    return left ?? right ?? overall;
  });

  const estimate = dataset.bands.reduce((sum, band, index) => {
    return sum + resolvedRatios[index] * band.size;
  }, 0);

  const clamped = Math.max(0, Math.min(dataset.maxRank, estimate));
  return Math.round(clamped / 50) * 50;
}

function estimateVocabulary(resultsData) {
  return estimateSimple(resultsData);
}

function applyEstimateJitter(estimate) {
  const jitter = Math.floor(Math.random() * 41) - 20;
  const adjusted = estimate + jitter;
  return Math.max(0, Math.min(dataset.maxRank, adjusted));
}

function getLevel(estimate) {
  const levels = getLevelBands();
  return levels.find((band) => estimate <= band.max) ?? levels[0];
}

function formatLevelRange(start, end) {
  if (!Number.isFinite(end)) {
    return `${start}+`;
  }
  return `${start}-${end}`;
}

function renderLevelRanges() {
  if (!levelRangesEl || !levelRangesList) {
    return;
  }
  const levels = getLevelBands();
  let prevMax = 0;
  levelRangesList.innerHTML = "";
  levels.forEach((level, index) => {
    const start = index === 0 ? 0 : prevMax + 1;
    const end = level.max;
    const range = formatLevelRange(start, end);
    const item = document.createElement("li");
    const label = t("levelRangeItem", {
      level: level.level,
      range,
      unit: getUnitLabel(),
    });
    const strong = document.createElement("strong");
    strong.textContent = level.level;
    item.appendChild(strong);
    item.appendChild(document.createTextNode(label.replace(`${level.level}`, "").trim()));
    levelRangesList.appendChild(item);
    prevMax = end;
  });
  levelRangesEl.style.display = "";
}

function showResults() {
  const estimate = estimateVocabulary(results);
  const levelInfo = getLevel(estimate);
  const knownRate = results.reduce((sum, item) => sum + item.score, 0) /
    Math.max(results.length, 1);
  const displayEstimate = applyEstimateJitter(estimate);

  estimateEl.textContent = t("estimateValue", { count: displayEstimate, unit: getUnitLabel() });
  levelEl.textContent = levelInfo.level;
  levelExplainEl.textContent = levelInfo.label;
  sampleCountEl.textContent = t("sampleCount", { count: results.length });
  knownRateEl.textContent = `${Math.round(knownRate * 100)}%`;
  resultNote.textContent = "";
  renderLevelRanges();

  setTestActive(false);
  setCardState(testCard, "idle");
  setCardState(resultCard, "active");
}

function resetTest() {
  if (!datasetReady) {
    return;
  }
  estimateEl.textContent = "—";
  levelEl.textContent = "—";
  levelExplainEl.textContent = "";
  sampleCountEl.textContent = "—";
  knownRateEl.textContent = "—";
  resultNote.textContent = "";
  if (levelRangesEl) {
    levelRangesEl.style.display = "none";
  }
  if (levelRangesList) {
    levelRangesList.innerHTML = "";
  }
  totalQuestions = getQuestionCount();
  currentIndex = 0;
  results = [];
  usedWords = new Set();
  bandPools = buildBandPools(dataset.words);
  adaptiveBand = Math.ceil(dataset.bands.length / 2);
  correctStreak = 0;
  wrongStreak = 0;
  currentQuestion = getNextQuestion();
  updateQuestion();
  setTestActive(true);
  setCardState(testCard, "active");
  setCardState(resultCard, "idle");
}

function handleAnswer(answer) {
  if (!testActive) {
    return;
  }
  const current = currentQuestion;
  if (!current) {
    return;
  }
  results.push({
    word: current.word,
    band: current.band,
    score: ANSWER_SCORES[answer],
  });
  updateAdaptiveBand(ANSWER_SCORES[answer]);
  currentIndex += 1;
  if (currentIndex >= totalQuestions) {
    showResults();
  } else {
    currentQuestion = getNextQuestion();
    updateQuestion();
  }
}

function parseCSVLine(line) {
  const cells = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      cells.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }
  cells.push(current.trim());
  return cells;
}

function parseCSV(text) {
  const lines = text.split(/\r?\n/).filter((line) => line.trim() !== "");
  if (lines.length === 0) {
    throw new Error(t("errorCsvEmpty"));
  }
  const headers = parseCSVLine(lines[0]).map((header) => header.toLowerCase());
  if (!headers.includes("word") && !headers.includes("character")) {
    throw new Error(t("errorCsvMissingColumn"));
  }
  const rows = lines.slice(1).map((line) => {
    const values = parseCSVLine(line);
    const row = {};
    headers.forEach((header, index) => {
      row[header] = values[index];
    });
    return row;
  });
  return rows;
}

function normalizeDataset(raw, overrides = {}) {
  const data = { ...raw };
  data.language = overrides.name || data.language || "Custom";
  data.code = overrides.code || data.code || "custom";
  data.mode = overrides.mode || data.mode || "word";
  data.unitLabel =
    overrides.unitLabel ||
    data.unitLabel ||
    (data.mode === "character" ? "characters" : "words");
  data.bandSize = Number(overrides.bandSize || data.bandSize) || 500;

  if (!Array.isArray(data.words) || data.words.length === 0) {
    throw new Error(t("errorNoWords"));
  }

  const seen = new Set();
  const words = data.words
    .map((item, index) => {
      const rawWord = item.word ?? item.character ?? item.glyph ?? item.symbol;
      const word = String(rawWord ?? "").trim();
      if (!word || seen.has(word)) {
        return null;
      }
      seen.add(word);
      const rank = Number(item.rank ?? index + 1) || index + 1;
      const band = Number(item.band) || Math.ceil(rank / data.bandSize);
      const range = item.range ||
        `${(band - 1) * data.bandSize + 1}-${band * data.bandSize}`;
      return { word, rank, band, range };
    })
    .filter(Boolean);
  if (words.length === 0) {
    throw new Error(t("errorNoValidWords"));
  }

  const maxRank = Number(data.maxRank) ||
    Math.max(...words.map((word) => word.rank), words.length);
  data.maxRank = maxRank;

  if (!Array.isArray(data.bands) || data.bands.length === 0) {
    const bandCount = Math.ceil(maxRank / data.bandSize);
    data.bands = Array.from({ length: bandCount }, (_, index) => {
      const start = index * data.bandSize + 1;
      const end = Math.min((index + 1) * data.bandSize, maxRank);
      return {
        index: index + 1,
        range: `${start}-${end}`,
        size: end - start + 1,
      };
    });
  }

  if (Array.isArray(data.levels) && data.levels.length > 0) {
    data.levels = data.levels
      .map((level) => ({
        level: String(level.level || ""),
        max: Number(level.max),
        label: String(level.label || ""),
      }))
      .filter((level) => Number.isFinite(level.max));
  }

  data.words = words;
  return data;
}

function loadCustomPacks() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    customPacks = stored ? JSON.parse(stored) : [];
  } catch (error) {
    customPacks = [];
  }
}

function saveCustomPacks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(customPacks));
}

function findPack(code) {
  const builtin = packIndex.find((pack) => pack.code === code);
  if (builtin) {
    return { ...builtin, type: "builtin" };
  }
  const custom = customPacks.find((pack) => pack.code === code);
  if (custom) {
    return { ...custom, type: "custom" };
  }
  return null;
}

async function loadPack(code) {
  const pack = findPack(code);
  if (!pack) {
    throw new Error("Pack not found.");
  }
  if (pack.type === "builtin") {
    const response = await fetch(pack.file);
    const data = await response.json();
    return normalizeDataset(data);
  }
  return normalizeDataset(pack.dataset, { name: pack.name, code: pack.code });
}

function renderPackErrors(errors) {
  if (!packErrors) {
    return;
  }
  if (!errors || errors.length === 0) {
    packErrors.classList.remove("active");
    packErrors.innerHTML = "";
    return;
  }
  packErrors.classList.add("active");
  packErrors.innerHTML = `<ul>${errors.map((error) => `<li>${error}</li>`).join("")}</ul>`;
}

function renderPackList(activeCode) {
  if (!packList) {
    return;
  }
  packList.innerHTML = "";
  const allPacks = [
    ...packIndex.map((pack) => ({ ...pack, type: "builtin" })),
    ...customPacks.map((pack) => ({ ...pack, type: "custom" })),
  ];

  if (allPacks.length === 0) {
    packList.innerHTML = `<p class=\"muted\">${t("packNoPacks")}</p>`;
    return;
  }

  allPacks.forEach((pack) => {
    const item = document.createElement("div");
    item.className = "pack-item";
    const title = document.createElement("strong");
    title.textContent = `${getPackDisplayName(pack)} (${pack.code})`;
    const meta = document.createElement("span");
    const unitLabel = resolveUnitLabel(
      pack.unitLabel || pack.dataset?.unitLabel,
      pack.mode || pack.dataset?.mode
    );
    const wordCount = pack.size ?? pack.dataset?.words?.length ?? pack.words?.length ?? "";
    const bandCount = pack.bands ?? pack.dataset?.bands?.length ?? "";
    const parts = [pack.type === "builtin" ? t("packBuiltIn") : t("packCustom")];
    if (wordCount) {
      parts.push(t("packUnits", { count: wordCount, unit: unitLabel }));
    }
    if (bandCount) {
      parts.push(t("packBands", { count: bandCount }));
    }
    meta.textContent = parts.join(" • ");
    const actions = document.createElement("div");
    actions.className = "pack-actions";
    const useButton = document.createElement("button");
    useButton.className = "secondary";
    useButton.textContent = pack.code === activeCode ? t("packActive") : t("packUse");
    useButton.disabled = pack.code === activeCode;
    useButton.addEventListener("click", () => {
      languageSelect.value = pack.code;
      handleLanguageChange();
    });
    actions.appendChild(useButton);

    if (pack.type === "custom") {
      const removeButton = document.createElement("button");
      removeButton.className = "ghost";
      removeButton.textContent = t("packRemove");
      removeButton.addEventListener("click", () => {
        customPacks = customPacks.filter((item) => item.code !== pack.code);
        saveCustomPacks();
        renderLanguageOptions();
      });
      actions.appendChild(removeButton);
    }

    item.appendChild(title);
    item.appendChild(meta);
    item.appendChild(actions);
    packList.appendChild(item);
  });
}

function renderLanguageOptions() {
  const active = languageSelect.value || "en";
  languageSelect.innerHTML = "";
  const options = [
    ...packIndex.map((pack) => ({ code: pack.code, name: pack.name })),
    ...customPacks.map((pack) => ({ code: pack.code, name: pack.name })),
  ];
  options.forEach((pack) => {
    const option = document.createElement("option");
    option.value = pack.code;
    option.textContent = getPackDisplayName(pack);
    languageSelect.appendChild(option);
  });
  if (options.some((option) => option.code === active)) {
    languageSelect.value = active;
  } else if (options.length > 0) {
    languageSelect.value = options[0].code;
  }
  renderPackList(languageSelect.value);
}

async function handleLanguageChange() {
  setLanguageNote("loading");
  dataset = await loadPack(languageSelect.value);
  updateHeroCopy();
  setLanguageNote("ready");
  resetTest();
  renderPackList(languageSelect.value);
}

function flashLanguageNote(state) {
  setLanguageNote(state);
  setTimeout(() => {
    setLanguageNote("ready");
  }, 1800);
}

async function handlePackImport(event) {
  if (!packForm) {
    return;
  }
  event.preventDefault();
  renderPackErrors([]);
  const errors = [];
  const name = packNameInput.value.trim();
  const code = packCodeInput.value.trim().toLowerCase();
  const file = packFileInput.files[0];
  let mode = packModeSelect.value;
  const bandSizeValue = packBandSizeInput.value.trim();
  const bandSize = bandSizeValue ? Number(bandSizeValue) : undefined;

  if (!name) {
    errors.push(t("errorNameRequired"));
  }
  if (!code) {
    errors.push(t("errorCodeRequired"));
  }
  if (code && !/^[a-z0-9-]+$/.test(code)) {
    errors.push(t("errorCodeInvalid"));
  }
  if (!file) {
    errors.push(t("errorFileRequired"));
  }
  if (bandSizeValue && (!Number.isFinite(bandSize) || bandSize <= 0)) {
    errors.push(t("errorBandSizeInvalid"));
  }
  if (packIndex.some((pack) => pack.code === code)) {
    errors.push(t("errorCodeBuiltin"));
  }
  if (customPacks.some((pack) => pack.code === code)) {
    errors.push(t("errorCodeCustom"));
  }

  if (errors.length > 0) {
    renderPackErrors(errors);
    flashLanguageNote("fixErrors");
    return;
  }

  if (mode === "auto") {
    mode = undefined;
  }

  const text = await file.text();
  let rawData;
  try {
    if (file.name.endsWith(".csv")) {
      const rows = parseCSV(text);
      rawData = { words: rows };
      if (!mode) {
        mode = "word";
      }
    } else {
      rawData = JSON.parse(text);
    }
  } catch (error) {
    renderPackErrors([t("errorParseFile", { message: error.message })]);
    flashLanguageNote("invalidFile");
    return;
  }

  try {
    const normalized = normalizeDataset(rawData, {
      name,
      code,
      mode,
      bandSize: Number.isFinite(bandSize) ? bandSize : undefined,
    });
    customPacks.push({
      name: normalized.language,
      code: normalized.code,
      dataset: normalized,
      mode: normalized.mode,
      unitLabel: normalized.unitLabel,
    });
    saveCustomPacks();
    renderLanguageOptions();
    packForm.reset();
    renderPackErrors([]);
    flashLanguageNote("imported");
  } catch (error) {
    renderPackErrors([error.message]);
    flashLanguageNote("fixErrors");
  }
}

function bindActions() {
  document.querySelectorAll("[data-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      handleAnswer(button.dataset.answer);
    });
  });

  startButton.addEventListener("click", () => {
    if (!datasetReady) {
      return;
    }
    resetTest();
  });

  learnMoreButton.addEventListener("click", () => {
    openHowModal();
  });

  restartButton.addEventListener("click", () => {
    resetTest();
  });

  shareButton.addEventListener("click", async () => {
    const summary = t("shareSummary", {
      language: getActiveLanguageName(),
      estimate: estimateEl.textContent,
      level: levelEl.textContent,
    });
    try {
      await navigator.clipboard.writeText(summary);
      shareButton.textContent = t("copySuccess");
      setTimeout(() => {
        shareButton.textContent = t("copySummary");
      }, 1400);
    } catch (error) {
      shareButton.textContent = t("copyFailed");
      setTimeout(() => {
        shareButton.textContent = t("copySummary");
      }, 1400);
    }
  });

  languageSelect.addEventListener("change", handleLanguageChange);
  if (packForm) {
    packForm.addEventListener("submit", handlePackImport);
  }
  if (questionCountSelect) {
    questionCountSelect.addEventListener("change", () => {
      resetTest();
    });
  }
  uiLanguageSelect.addEventListener("change", () => {
    setUiLanguage(uiLanguageSelect.value);
  });

  if (howModal) {
    howModal.querySelectorAll("[data-modal-close]").forEach((button) => {
      button.addEventListener("click", closeHowModal);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && howModal.classList.contains("is-open")) {
        closeHowModal();
      }
    });
  }

  themeToggleButton.addEventListener("click", () => {
    const next = uiTheme === "glow" ? "paper" : uiTheme === "paper" ? "auto" : "glow";
    applyTheme(next);
    updateToggleButtons();
  });
}

function hydrateLevelLabels() {
  if (!I18N.en.levelA1) {
    Object.assign(I18N.en, {
      levelA1: "Basic everyday words for simple needs.",
      levelA2: "Common daily vocabulary across familiar topics.",
      levelB1: "Handles routine reading and conversations.",
      levelB2: "Comfortable with general media and texts.",
      levelC1: "Understands complex and academic language.",
      levelC2: "Near-native breadth across rare terms.",
      levelChar1Name: "Level 1",
      levelChar2Name: "Level 2",
      levelChar3Name: "Level 3",
      levelChar4Name: "Level 4",
      levelChar5Name: "Level 5",
      levelChar6Name: "Level 6",
      levelChar1: "Recognizes the most common characters.",
      levelChar2: "Handles everyday texts with support.",
      levelChar3: "Comfortable with general reading material.",
      levelChar4: "Reads complex material with occasional gaps.",
      levelChar5: "Advanced coverage across specialized texts.",
      levelChar6: "Near-native range of rare characters.",
    });
  }
  Object.assign(I18N.es, {
    levelA1: "Palabras básicas para necesidades simples.",
    levelA2: "Vocabulario común en temas cotidianos.",
    levelB1: "Maneja lectura rutinaria y conversaciones.",
    levelB2: "Cómodo con textos y medios generales.",
    levelC1: "Comprende lenguaje complejo y académico.",
    levelC2: "Amplitud casi nativa en términos raros.",
    levelChar1Name: "Nivel 1",
    levelChar2Name: "Nivel 2",
    levelChar3Name: "Nivel 3",
    levelChar4Name: "Nivel 4",
    levelChar5Name: "Nivel 5",
    levelChar6Name: "Nivel 6",
    levelChar1: "Reconoce los caracteres más comunes.",
    levelChar2: "Maneja textos cotidianos con apoyo.",
    levelChar3: "Cómodo con lectura general.",
    levelChar4: "Lee material complejo con algunas lagunas.",
    levelChar5: "Cobertura avanzada en textos especializados.",
    levelChar6: "Rango casi nativo de caracteres raros.",
  });
  Object.assign(I18N["zh-Hans"], {
    levelA1: "基础日常词汇，可满足简单需求。",
    levelA2: "熟悉常见话题的日常词汇。",
    levelB1: "能应对常规阅读与对话。",
    levelB2: "可理解一般媒体与文本。",
    levelC1: "能理解复杂与学术语言。",
    levelC2: "接近母语的高阶词汇量。",
    levelChar1Name: "等级 1",
    levelChar2Name: "等级 2",
    levelChar3Name: "等级 3",
    levelChar4Name: "等级 4",
    levelChar5Name: "等级 5",
    levelChar6Name: "等级 6",
    levelChar1: "认识最常见的字符。",
    levelChar2: "可在辅助下阅读日常文本。",
    levelChar3: "能阅读一般材料。",
    levelChar4: "阅读复杂材料仍有少量缺口。",
    levelChar5: "在专业文本中覆盖面较广。",
    levelChar6: "接近母语的冷僻字符掌握。",
  });
  Object.assign(I18N["zh-Hant"], {
    levelA1: "基礎日常詞彙，可滿足簡單需求。",
    levelA2: "熟悉常見主題的日常詞彙。",
    levelB1: "能應對常規閱讀與對話。",
    levelB2: "可理解一般媒體與文本。",
    levelC1: "能理解複雜與學術語言。",
    levelC2: "接近母語的高階詞彙量。",
    levelChar1Name: "等級 1",
    levelChar2Name: "等級 2",
    levelChar3Name: "等級 3",
    levelChar4Name: "等級 4",
    levelChar5Name: "等級 5",
    levelChar6Name: "等級 6",
    levelChar1: "認識最常見的字元。",
    levelChar2: "可在輔助下閱讀日常文本。",
    levelChar3: "能閱讀一般材料。",
    levelChar4: "閱讀複雜材料仍有少量缺口。",
    levelChar5: "在專業文本中覆蓋面較廣。",
    levelChar6: "接近母語的冷僻字元掌握。",
  });
  Object.assign(I18N.fr, {
    levelA1: "Mots du quotidien pour des besoins simples.",
    levelA2: "Vocabulaire courant sur des sujets familiers.",
    levelB1: "Gère la lecture et les conversations usuelles.",
    levelB2: "À l’aise avec les médias et textes généraux.",
    levelC1: "Comprend un langage complexe et académique.",
    levelC2: "Étendue quasi native, y compris les termes rares.",
    levelChar1Name: "Niveau 1",
    levelChar2Name: "Niveau 2",
    levelChar3Name: "Niveau 3",
    levelChar4Name: "Niveau 4",
    levelChar5Name: "Niveau 5",
    levelChar6Name: "Niveau 6",
    levelChar1: "Reconnaît les caractères les plus courants.",
    levelChar2: "Lit des textes quotidiens avec aide.",
    levelChar3: "À l’aise avec la lecture générale.",
    levelChar4: "Lit des textes complexes avec quelques lacunes.",
    levelChar5: "Couverture avancée des textes spécialisés.",
    levelChar6: "Maîtrise quasi native des caractères rares.",
  });
  Object.assign(I18N.de, {
    levelA1: "Grundwortschatz für einfache Bedürfnisse.",
    levelA2: "Häufiger Wortschatz zu vertrauten Themen.",
    levelB1: "Bewältigt Routinelektüre und Gespräche.",
    levelB2: "Sicher bei allgemeinen Medien und Texten.",
    levelC1: "Versteht komplexe und akademische Sprache.",
    levelC2: "Nahezu muttersprachliche Breite, inkl. seltener Wörter.",
    levelChar1Name: "Stufe 1",
    levelChar2Name: "Stufe 2",
    levelChar3Name: "Stufe 3",
    levelChar4Name: "Stufe 4",
    levelChar5Name: "Stufe 5",
    levelChar6Name: "Stufe 6",
    levelChar1: "Erkennt die häufigsten Zeichen.",
    levelChar2: "Liest Alltagstexte mit Unterstützung.",
    levelChar3: "Sicher beim allgemeinen Lesen.",
    levelChar4: "Liest komplexe Texte mit wenigen Lücken.",
    levelChar5: "Fortgeschrittene Abdeckung in Fachtexten.",
    levelChar6: "Nahezu muttersprachlicher Umgang mit seltenen Zeichen.",
  });
  Object.assign(I18N.ja, {
    levelA1: "基本的な日常語で簡単な用事ができる。",
    levelA2: "身近な話題の語彙をよく知っている。",
    levelB1: "日常的な読解や会話に対応できる。",
    levelB2: "一般的な媒体や文章を理解できる。",
    levelC1: "複雑・学術的な表現も理解できる。",
    levelC2: "稀な語も含む母語並みの語彙幅。",
    levelChar1Name: "レベル 1",
    levelChar2Name: "レベル 2",
    levelChar3Name: "レベル 3",
    levelChar4Name: "レベル 4",
    levelChar5Name: "レベル 5",
    levelChar6Name: "レベル 6",
    levelChar1: "最頻出の文字を認識できる。",
    levelChar2: "支援があれば日常文を読める。",
    levelChar3: "一般的な文章を読める。",
    levelChar4: "複雑な文章も概ね読める。",
    levelChar5: "専門的な文章でも高いカバー率。",
    levelChar6: "稀な文字まで含む母語並みの範囲。",
  });
  Object.assign(I18N.ko, {
    levelA1: "기본 생활 어휘로 간단한 필요를 해결.",
    levelA2: "익숙한 주제의 일상 어휘를 알고 있음.",
    levelB1: "일상 독해와 대화에 대응 가능.",
    levelB2: "일반 매체와 글을 편하게 이해.",
    levelC1: "복잡하고 학술적인 언어도 이해.",
    levelC2: "드문 단어까지 포함한 거의 원어민 수준.",
    levelChar1Name: "레벨 1",
    levelChar2Name: "레벨 2",
    levelChar3Name: "레벨 3",
    levelChar4Name: "레벨 4",
    levelChar5Name: "레벨 5",
    levelChar6Name: "레벨 6",
    levelChar1: "가장 흔한 글자를 인식.",
    levelChar2: "도움이 있으면 일상 글을 읽음.",
    levelChar3: "일반적인 글을 읽을 수 있음.",
    levelChar4: "복잡한 글도 큰 어려움 없이 읽음.",
    levelChar5: "전문 글에서도 높은 커버리지.",
    levelChar6: "희귀 글자까지 포함한 원어민 수준.",
  });
}

async function init() {
  hydrateLevelLabels();
  uiLanguage = loadUiLanguage();
  uiLanguageSelect.value = uiLanguage;
  document.documentElement.lang = getEffectiveUiLanguage();
  systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "paper" : "glow";
  applyTheme(loadPreference(THEME_KEY, "glow"));
  document.body.classList.add("density-compact");
  startButton.disabled = true;
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
    systemTheme = event.matches ? "paper" : "glow";
    if (uiTheme === "auto") {
      applyTheme(uiTheme);
      updateToggleButtons();
    }
  });
  setLanguageNote("ready");
  applyTranslations();

  const response = await fetch(BUILTIN_INDEX);
  const indexData = await response.json();
  packIndex = indexData.packs || [];
  loadCustomPacks();
  renderLanguageOptions();
  if (languageSelect.querySelector('option[value="en"]')) {
    languageSelect.value = "en";
  }
  dataset = await loadPack(languageSelect.value || "en");
  datasetReady = true;
  startButton.disabled = false;
  updateHeroCopy();
  setIdleProgress();
  setCardState(testCard, "idle");
  setCardState(resultCard, "idle");
  if (packCard) {
    setCardState(packCard, "active");
  }
  if (levelRangesEl) {
    levelRangesEl.style.display = "none";
  }
  setTestActive(false);
  bindActions();
  applyTranslations();
}

init();
