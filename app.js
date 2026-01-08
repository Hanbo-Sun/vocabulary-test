const TOTAL_QUESTIONS = 30;
const BUILTIN_INDEX = "data/index.json";
const STORAGE_KEY = "vocab.customPacks";
const UI_LANG_KEY = "vocab.uiLanguage";
const THEME_KEY = "vocab.uiTheme";
const DENSITY_KEY = "vocab.uiDensity";
const UI_LANGUAGES = ["auto", "en", "zh-Hans", "zh-Hant", "es"];
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
    knowIt: "I know it",
    notSure: "Not sure",
    dontKnow: "I do not know it",
    trustInstinct: "Trust your first instinct. No definitions will be shown during the test.",
    estimate: "Estimate",
    samples: "Samples",
    knownRate: "Known rate",
    coverage: "Coverage",
    retake: "Retake",
    copySummary: "Copy summary",
    howWorksTitle: "How this test works",
    howWorksBody:
      "We sample words across frequency bands (common to rare). You mark whether you know each word, and we estimate your total vocabulary size using a smoothed, monotonic model across bands.",
    howWorksBullet1: "Answer quickly to reduce second-guessing.",
    howWorksBullet2: "\"Not sure\" counts as half-known.",
    howWorksBullet3: "Switch estimators for a raw vs smoothed view.",
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
    densityLabel: "Density",
    densityAiry: "Airy",
    densityCompact: "Compact",
    densityAuto: "Auto",
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
    heroCopy:
      "A clean, fast test that samples {unit} across difficulty bands and estimates your total {noun}. No login. No fluff.",
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
    resultNote: "Estimator: {estimator}. Based on {bands} frequency bands.",
    shareSummary: "{language}: {estimate}, level {level} ({estimator}).",
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
    knowIt: "La conozco",
    notSure: "No estoy seguro",
    dontKnow: "No la conozco",
    trustInstinct: "Confía en tu primer instinto. No se mostrarán definiciones.",
    estimate: "Estimación",
    samples: "Muestras",
    knownRate: "Tasa de acierto",
    coverage: "Cobertura",
    retake: "Repetir",
    copySummary: "Copiar resumen",
    howWorksTitle: "Cómo funciona esta prueba",
    howWorksBody:
      "Tomamos muestras de palabras de distintas bandas de frecuencia (comunes a raras). Indicas si las conoces y estimamos tu vocabulario total con un modelo suavizado y monotónico.",
    howWorksBullet1: "Responde rápido para reducir dudas.",
    howWorksBullet2: "\"No estoy seguro\" cuenta como medio conocido.",
    howWorksBullet3: "Cambia el estimador para ver simple vs suavizado.",
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
    densityLabel: "Densidad",
    densityAiry: "Aireado",
    densityCompact: "Compacto",
    densityAuto: "Auto",
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
    heroCopy:
      "Una prueba rápida y limpia que toma muestras de {unit} por bandas y estima tu {noun} total. Sin registro. Sin relleno.",
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
    resultNote: "Estimador: {estimator}. Basado en {bands} bandas de frecuencia.",
    shareSummary: "{language}: {estimate}, nivel {level} ({estimator}).",
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
    knowIt: "我认识",
    notSure: "不确定",
    dontKnow: "我不认识",
    trustInstinct: "相信直觉，不显示释义。",
    estimate: "估算",
    samples: "样本数",
    knownRate: "认识率",
    coverage: "覆盖",
    retake: "再测一次",
    copySummary: "复制结果",
    howWorksTitle: "这项测试如何工作",
    howWorksBody:
      "我们从不同频率段（常见到冷门）抽样词或字，你标记是否认识，再用平滑单调模型估算总量。",
    howWorksBullet1: "快速作答，减少犹豫。",
    howWorksBullet2: "“不确定”按半懂计分。",
    howWorksBullet3: "可切换估算器查看简单与平滑结果。",
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
    densityLabel: "密度",
    densityAiry: "宽松",
    densityCompact: "紧凑",
    densityAuto: "自动",
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
    heroCopy: "快速测试，从不同频段抽样{unit}，估算你的总体{noun}。无需登录。",
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
    resultNote: "估算器：{estimator}。基于 {bands} 个频段。",
    shareSummary: "{language}：{estimate}，等级 {level}（{estimator}）。",
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
    knowIt: "我認識",
    notSure: "不確定",
    dontKnow: "我不認識",
    trustInstinct: "相信直覺，不顯示釋義。",
    estimate: "估算",
    samples: "樣本數",
    knownRate: "認識率",
    coverage: "覆蓋",
    retake: "再測一次",
    copySummary: "複製結果",
    howWorksTitle: "這項測試如何運作",
    howWorksBody:
      "我們從不同頻率段（常見到冷門）抽樣詞或字，你標記是否認識，再用平滑單調模型估算總量。",
    howWorksBullet1: "快速作答，減少猶豫。",
    howWorksBullet2: "「不確定」按半懂計分。",
    howWorksBullet3: "可切換估算器查看簡單與平滑結果。",
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
    densityLabel: "密度",
    densityAiry: "寬鬆",
    densityCompact: "緊湊",
    densityAuto: "自動",
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
    heroCopy: "快速測試，從不同頻段抽樣{unit}，估算你的總體{noun}。無需登入。",
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
    resultNote: "估算器：{estimator}。基於 {bands} 個頻段。",
    shareSummary: "{language}：{estimate}，等級 {level}（{estimator}）。",
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
};

const PACK_DISPLAY_NAMES = {
  en: {
    en: "English",
    es: "Spanish",
    zh: "Chinese (Characters)",
    "zh-hant": "Chinese (Traditional)",
    fr: "French",
    de: "German",
    "ja-kana": "Japanese (Kana)",
    "ko-hanja": "Korean (Hanja)",
  },
  es: {
    en: "Inglés",
    es: "Español",
    zh: "Chino (caracteres)",
    "zh-hant": "Chino (tradicional)",
    fr: "Francés",
    de: "Alemán",
    "ja-kana": "Japonés (kana)",
    "ko-hanja": "Coreano (hanja)",
  },
  "zh-Hans": {
    en: "英语",
    es: "西班牙语",
    zh: "中文（字符）",
    "zh-hant": "繁体中文（字符）",
    fr: "法语",
    de: "德语",
    "ja-kana": "日语（假名）",
    "ko-hanja": "韩语（汉字）",
  },
  "zh-Hant": {
    en: "英語",
    es: "西班牙語",
    zh: "中文（字元）",
    "zh-hant": "繁體中文（字元）",
    fr: "法語",
    de: "德語",
    "ja-kana": "日語（假名）",
    "ko-hanja": "韓語（漢字）",
  },
};
const startButton = document.getElementById("start-test");
const learnMoreButton = document.getElementById("learn-more");
const managePacksButton = document.getElementById("manage-packs");
const densityToggleButton = document.getElementById("density-toggle");
const themeToggleButton = document.getElementById("theme-toggle");
const restartButton = document.getElementById("restart");
const shareButton = document.getElementById("share");

const heroTitle = document.getElementById("hero-title");
const heroCopy = document.getElementById("hero-copy");
const estimatorSelect = document.getElementById("estimator");
const estimatorNote = document.getElementById("estimator-note");
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

const testCard = document.getElementById("test-card");
const resultCard = document.getElementById("result-card");
const infoCard = document.getElementById("info-card");
const packCard = document.getElementById("pack-card");

const wordEl = document.getElementById("word");
const bandEl = document.getElementById("band");
const progressEl = document.getElementById("progress");
const meterFill = document.getElementById("meter-fill");

const estimateEl = document.getElementById("estimate");
const levelEl = document.getElementById("level");
const levelExplainEl = document.getElementById("level-explain");
const sampleCountEl = document.getElementById("sample-count");
const knownRateEl = document.getElementById("known-rate");
const coverageEl = document.getElementById("coverage");

let dataset = null;
let session = [];
let currentIndex = 0;
let results = [];
let packIndex = [];
let customPacks = [];
let uiLanguage = "auto";
let languageNoteState = "ready";
let uiTheme = "glow";
let uiDensity = "airy";
let systemTheme = "glow";
let systemDensity = "airy";

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
  return "en";
}

function getEffectiveUiLanguage() {
  if (uiLanguage === "auto") {
    return detectUiLanguage();
  }
  return uiLanguage;
}

function loadUiLanguage() {
  try {
    const stored = localStorage.getItem(UI_LANG_KEY);
    if (stored && UI_LANGUAGES.includes(stored)) {
      return stored;
    }
  } catch (error) {
    return detectUiLanguage();
  }
  return "auto";
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

function resolveDensity(density) {
  if (density === "auto") {
    return systemDensity;
  }
  return density === "compact" ? "compact" : "airy";
}

function applyDensity(density) {
  uiDensity = density;
  const resolved = resolveDensity(uiDensity);
  document.body.classList.toggle("density-compact", resolved === "compact");
  localStorage.setItem(DENSITY_KEY, uiDensity);
}

function updateToggleButtons() {
  const densityKey = uiDensity === "auto"
    ? "densityAuto"
    : uiDensity === "compact"
      ? "densityCompact"
      : "densityAiry";
  const themeKey = uiTheme === "auto"
    ? "themeAuto"
    : uiTheme === "paper"
      ? "themePaper"
      : "themeGlow";
  densityToggleButton.textContent = `${t("densityLabel")}: ${t(
    densityKey
  )}`;
  themeToggleButton.textContent = `${t("themeLabel")}: ${t(
    themeKey
  )}`;
}

function setLanguageNote(state) {
  languageNoteState = state;
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
  updateEstimatorNote();
  updateHeroCopy();
  updateToggleButtons();
  setLanguageNote(languageNoteState);
  renderLanguageOptions();
  if (results.length > 0 && currentIndex >= session.length) {
    showResults();
  } else if (dataset) {
    resultNote.textContent = t("resultNote", {
      estimator: getEstimatorLabel(),
      bands: dataset.bands.length,
    });
  }
}

function setCardState(card, state) {
  card.setAttribute("data-state", state);
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

function getEstimatorMode() {
  return estimatorSelect.value || "smoothed";
}

function getEstimatorLabel() {
  return getEstimatorMode() === "simple" ? t("estimatorSimple") : t("estimatorSmoothed");
}

function updateEstimatorNote() {
  estimatorNote.textContent =
    getEstimatorMode() === "simple" ? t("estimatorNoteSimple") : t("estimatorNoteSmoothed");
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

function buildSession(words, total) {
  const grouped = groupByBand(words);
  const bands = shuffle(Object.keys(grouped));
  const picks = [];
  const used = new Set();

  while (picks.length < total) {
    let added = false;
    bands.forEach((band) => {
      if (picks.length >= total) {
        return;
      }
      const options = grouped[band].filter((word) => !used.has(word.word));
      if (options.length === 0) {
        return;
      }
      const choice = options[Math.floor(Math.random() * options.length)];
      picks.push(choice);
      used.add(choice.word);
      added = true;
    });
    if (!added) {
      break;
    }
  }

  return picks;
}

function updateQuestion() {
  const current = session[currentIndex];
  wordEl.textContent = current.word;
  bandEl.textContent = t("bandLabel", { band: current.band, range: current.range });
  progressEl.textContent = `${currentIndex + 1} / ${session.length}`;
  meterFill.style.width = `${((currentIndex + 1) / session.length) * 100}%`;
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
  const mode = getEstimatorMode();
  return mode === "simple" ? estimateSimple(resultsData) : estimateSmoothed(resultsData);
}

function getLevel(estimate) {
  const levels = getLevelBands();
  return levels.find((band) => estimate <= band.max) ?? levels[0];
}

function showResults() {
  const estimate = estimateVocabulary(results);
  const levelInfo = getLevel(estimate);
  const knownRate = results.reduce((sum, item) => sum + item.score, 0) /
    Math.max(results.length, 1);

  estimateEl.textContent = t("estimateValue", { count: estimate, unit: getUnitLabel() });
  levelEl.textContent = levelInfo.level;
  levelExplainEl.textContent = levelInfo.label;
  sampleCountEl.textContent = t("sampleCount", { count: results.length });
  knownRateEl.textContent = `${Math.round(knownRate * 100)}%`;
  coverageEl.textContent = t("coverageCount", { count: dataset.bands.length });
  resultNote.textContent = t("resultNote", {
    estimator: getEstimatorLabel(),
    bands: dataset.bands.length,
  });

  setCardState(testCard, "idle");
  setCardState(resultCard, "active");
  setCardState(infoCard, "active");
}

function resetTest() {
  session = buildSession(dataset.words, TOTAL_QUESTIONS);
  currentIndex = 0;
  results = [];
  updateQuestion();
  setCardState(testCard, "active");
  setCardState(resultCard, "idle");
  setCardState(infoCard, "active");
}

function handleAnswer(answer) {
  const current = session[currentIndex];
  results.push({
    word: current.word,
    band: current.band,
    score: ANSWER_SCORES[answer],
  });
  currentIndex += 1;
  if (currentIndex >= session.length) {
    showResults();
  } else {
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
  if (!errors || errors.length === 0) {
    packErrors.classList.remove("active");
    packErrors.innerHTML = "";
    return;
  }
  packErrors.classList.add("active");
  packErrors.innerHTML = `<ul>${errors.map((error) => `<li>${error}</li>`).join("")}</ul>`;
}

function renderPackList(activeCode) {
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
    resetTest();
  });

  learnMoreButton.addEventListener("click", () => {
    infoCard.scrollIntoView({ behavior: "smooth" });
  });

  managePacksButton.addEventListener("click", () => {
    packCard.scrollIntoView({ behavior: "smooth" });
  });

  restartButton.addEventListener("click", () => {
    resetTest();
  });

  shareButton.addEventListener("click", async () => {
    const summary = t("shareSummary", {
      language: getActiveLanguageName(),
      estimate: estimateEl.textContent,
      level: levelEl.textContent,
      estimator: getEstimatorLabel(),
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
  packForm.addEventListener("submit", handlePackImport);
  estimatorSelect.addEventListener("change", () => {
    updateEstimatorNote();
    if (results.length > 0 && currentIndex >= session.length) {
      showResults();
    }
  });
  uiLanguageSelect.addEventListener("change", () => {
    setUiLanguage(uiLanguageSelect.value);
  });

  densityToggleButton.addEventListener("click", () => {
    const next = uiDensity === "airy" ? "compact" : uiDensity === "compact" ? "auto" : "airy";
    applyDensity(next);
    updateToggleButtons();
  });

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
}

async function init() {
  hydrateLevelLabels();
  uiLanguage = loadUiLanguage();
  uiLanguageSelect.value = uiLanguage;
  document.documentElement.lang = getEffectiveUiLanguage();
  systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "paper" : "glow";
  systemDensity = window.matchMedia("(max-width: 720px)").matches ? "compact" : "airy";
  applyTheme(loadPreference(THEME_KEY, "glow"));
  applyDensity(loadPreference(DENSITY_KEY, "airy"));
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
    systemTheme = event.matches ? "paper" : "glow";
    if (uiTheme === "auto") {
      applyTheme(uiTheme);
      updateToggleButtons();
    }
  });
  window.matchMedia("(max-width: 720px)").addEventListener("change", (event) => {
    systemDensity = event.matches ? "compact" : "airy";
    if (uiDensity === "auto") {
      applyDensity(uiDensity);
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
  dataset = await loadPack(languageSelect.value || "en");
  updateHeroCopy();
  updateEstimatorNote();
  setCardState(testCard, "idle");
  setCardState(resultCard, "idle");
  setCardState(infoCard, "active");
  setCardState(packCard, "active");
  bindActions();
  applyTranslations();
}

init();
