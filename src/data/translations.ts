// TURA v14 — Localization Dictionary (AR, EN, FR, ES, KO, ZH)

export const UI_TRANSLATIONS: Record<string, Record<string, string | Record<string, string>>> = {
  build: {
    ar: 'البناء',
    en: 'Build',
    fr: 'Construction',
    es: 'Construir',
    ko: '빌드',
    zh: '构建'
  },
  colorLab: {
    ar: 'معمل الألوان',
    en: 'Color Lab',
    fr: 'Labo Couleur',
    es: 'Laboratorio de Color',
    ko: '컬러 랩',
    zh: '色彩实验室'
  },
  colorLabIntro: {
    ar: 'تحكم دقيق بالألوان وتدرجاتها بصرياً بأسلوب DaVinci Resolve لإنتاج موجه لوني فائق الجودة.',
    en: 'Precise, visual color grading inspired by DaVinci Resolve to craft a premium cinematic color prompt.',
    fr: 'Étalonnage de couleurs précis et visuel inspiré de DaVinci Resolve pour générer un prompt couleur haut de gamme.',
    es: 'Gradación de color precisa y visual inspirada en DaVinci Resolve para crear un prompt de color premium.',
    ko: '다빈치 리졸브 스타일의 정밀한 시각적 컬러 그레이딩으로 프리미엄 프롬프트 완성.',
    zh: '受 DaVinci Resolve 启发的精准视觉色彩校正，定制高级电影感色彩提示词。'
  },
  shadowsLift: {
    ar: 'الظلال (Lift)',
    en: 'Shadows (Lift)',
    fr: 'Ombres (Lift)',
    es: 'Sombras (Lift)',
    ko: '섀도우 (Lift)',
    zh: '阴影 (Lift)'
  },
  midtonesGamma: {
    ar: 'المنتصف (Gamma)',
    en: 'Midtones (Gamma)',
    fr: 'Tons Moyens (Gamma)',
    es: 'Tonos Medios (Gamma)',
    ko: '미드톤 (Gamma)',
    zh: '中间调 (Gamma)'
  },
  highlightsGain: {
    ar: 'الأضواء (Gain)',
    en: 'Highlights (Gain)',
    fr: 'Hautes Lumières (Gain)',
    es: 'Luces Altas (Gain)',
    ko: '하이라이트 (Gain)',
    zh: '高光 (Gain)'
  },
  temp: {
    ar: 'حرارة اللون',
    en: 'Temperature',
    fr: 'Température',
    es: 'Temperatura',
    ko: '색온도',
    zh: '色温'
  },
  tint: {
    ar: 'الصبغة',
    en: 'Tint',
    fr: 'Teinte',
    es: 'Tinte',
    ko: '색조',
    zh: '色调'
  },
  contrast: {
    ar: 'التباين',
    en: 'Contrast',
    fr: 'Contraste',
    es: 'Contraste',
    ko: '대비',
    zh: '对比度'
  },
  saturation: {
    ar: 'التشبع',
    en: 'Saturation',
    fr: 'Saturation',
    es: 'Saturación',
    ko: '채도',
    zh: '饱和度'
  },
  vibrance: {
    ar: 'الحيوية',
    en: 'Vibrance',
    fr: 'Vibrance',
    es: 'Intensidad',
    ko: '활기',
    zh: '鲜艳度'
  },
  fade: {
    ar: 'تلاشي الظلال',
    en: 'Fade (Lift Blacks)',
    fr: 'Fondu (Rehausser les Noirs)',
    es: 'Desvanecimiento (Elevar Negros)',
    ko: '페이드 (블랙 리프트)',
    zh: '褪色 (提升暗部)'
  },
  grain: {
    ar: 'حبيبات الفيلم',
    en: 'Film Grain',
    fr: 'Grain de Pellicule',
    es: 'Grano de Película',
    ko: '필름 그레인',
    zh: '胶片颗粒'
  },
  bloom: {
    ar: 'توهج الإضاءة',
    en: 'Bloom Glow',
    fr: 'Lueur Diffuse',
    es: 'Resplandor',
    ko: '블룸 글로우',
    zh: '柔光溢出'
  },
  colorPromptPreview: {
    ar: 'معاينة الموجه اللوني الناتج',
    en: 'Color Prompt Output',
    fr: 'Aperçu du Prompt de Couleur',
    es: 'Vista Previa del Prompt de Color',
    ko: '생성된 컬러 프롬프트',
    zh: '生成的色彩提示词'
  },
  resetColorGrading: {
    ar: 'إعادة ضبط الألوان',
    en: 'Reset Color Lab',
    fr: 'Réinitialiser le Labo',
    es: 'Restablecer Laboratorio',
    ko: '컬러 랩 초기화',
    zh: '重置色彩实验室'
  },
  doubleClickReset: {
    ar: 'انقر مرتين لتصفير القيمة',
    en: 'Double click to reset',
    fr: 'Double-cliquez pour réinitialiser',
    es: 'Doble clic para restablecer',
    ko: '두 번 클릭하여 초기화',
    zh: '双击重置'
  },
  doubleClickResetAll: {
    ar: 'انقر مرتين لإعادة ضبط جميع الألوان',
    en: 'Double click to reset all color grading',
    fr: 'Double-cliquez pour réinitialiser tout l\'étalonnage',
    es: 'Doble clic para restablecer toda la gradación',
    ko: '두 번 클릭하여 모든 색상 조절 초기화',
    zh: '双击重置所有色彩校正'
  },
  liveColorPreviewOverlay: {
    ar: 'معاينة تلوين المشهد الحية',
    en: 'LIVE COLOR GRADE PREVIEW',
    fr: 'APERÇU D\'ÉTALONNAGE EN DIRECT',
    es: 'VISTA PREVIA DE GRADACIÓN EN VIVO',
    ko: '실시간 컬러 그레이딩 프리뷰',
    zh: '实时色彩校正预览'
  },
  adjustColorsPrompt: {
    ar: 'قم بتعديل الألوان لإنشاء موجه لوني تلقائي...',
    en: 'Adjust colors to generate prompt output...',
    fr: 'Ajustez les couleurs pour générer le prompt...',
    es: 'Ajusta los colores para generar el prompt...',
    ko: '색상을 조절하여 프롬프트 생성...',
    zh: '调整色彩以生成色彩提示词...'
  },
  colorDictionary: {
    ar: 'قاموس الألوان السينمائي',
    en: 'Cinematic Color Dictionary',
    fr: 'Dictionnaire de Couleurs Cinématographiques',
    es: 'Diccionario de Colores Cinematográficos',
    ko: '시네마틱 컬러 사전',
    zh: '电影色彩字典'
  },
  colorDictDescription: {
    ar: 'اختر أسلوباً لونياً سينمائياً جاهزاً ليُطبَّق مباشرة على عجلات الألوان والمنزلقات',
    en: 'Pick a cinematic color look to instantly apply to wheels & sliders',
    fr: 'Choisissez un style cinématographique pour l\'appliquer instantanément',
    es: 'Elige un estilo cinematográfico para aplicarlo instantáneamente',
    ko: '시네마틱 컬러 스타일을 선택하여 즉시 적용',
    zh: '选择电影色彩风格，即时应用到色轮和滑块'
  },
  presetApplied: {
    ar: 'تم تطبيق البريست اللوني ✦',
    en: 'Color preset applied ✦',
    fr: 'Préréglage de couleur appliqué ✦',
    es: 'Preset de color aplicado ✦',
    ko: '컬러 프리셋 적용됨 ✦',
    zh: '色彩预设已应用 ✦'
  },
  presetRemoved: {
    ar: 'تم إزالة البريست ✦',
    en: 'Preset removed ✦',
    fr: 'Préréglage supprimé ✦',
    es: 'Preset eliminado ✦',
    ko: '프리셋 제거됨 ✦',
    zh: '预设已移除 ✦'
  },
  activePresetLabel: {
    ar: 'مُطبَّق',
    en: 'Active',
    fr: 'Actif',
    es: 'Activo',
    ko: '활성',
    zh: '已激活'
  },
  colorRuleTitle: {
    ar: 'قاعدة التوزيع اللوني 60-30-10',
    en: '60-30-10 Color Rule',
    fr: 'Règle de Couleur 60-30-10',
    es: 'Regla de Color 60-30-10',
    ko: '60-30-10 색상 법칙',
    zh: '60-30-10 色彩法则'
  },
  colorRuleDescription: {
    ar: 'اختر ثلاثة ألوان لتطبيق قاعدة التصميم الكلاسيكية لجمالية متوازنة ومبهرة (60% اللون السائد، 30% اللون الثانوي، 10% لون التوكيد المتباين)',
    en: 'Select three colors to apply the classic design rule for balanced and stunning aesthetics (60% Dominant, 30% Secondary, 10% Contrast Accent)',
    fr: 'Sélectionnez trois couleurs pour appliquer la règle de design classique pour une esthétique équilibrée et époustouflante (60% Dominante, 30% Secondaire, 10% Accent contrasté)',
    es: 'Selecciona tres colores para aplicar la regla de diseño clásica para una estética equilibrada e impresionante (60% Dominante, 30% Secundario, 10% Acento de contraste)',
    ko: '균형 잡히고 놀라운 미학을 위해 클래식 디자인 법칙을 적용할 세 가지 색상을 선택하세요 (60% 주색상, 30% 보조색상, 10% 대비 강조색상)',
    zh: '选择三种颜色以应用经典设计法则，实现平衡而令人惊叹的美学（60% 主色，30% 辅助色，10% 对比强调色）'
  },
  dominantColor: {
    ar: 'اللون السائد (60%)',
    en: 'Dominant Color (60%)',
    fr: 'Couleur Dominante (60%)',
    es: 'Color Dominante (60%)',
    ko: '주색상 (60%)',
    zh: '主色 (60%)'
  },
  secondaryColor: {
    ar: 'اللون الثانوي (30%)',
    en: 'Secondary Color (30%)',
    fr: 'Couleur Secondaire (30%)',
    es: 'Color Secundario (30%)',
    ko: '보조색상 (30%)',
    zh: '辅助色 (30%)'
  },
  accentColor: {
    ar: 'لون التوكيد (10%)',
    en: 'Accent Color (10%)',
    fr: "Couleur d'Accent (10%)",
    es: 'Color de Acento (10%)',
    ko: '강조색상 (10%)',
    zh: '强调色 (10%)'
  },
  searchColor: {
    ar: 'ابحث عن لون...',
    en: 'Search a color...',
    fr: 'Rechercher une couleur...',
    es: 'Buscar un color...',
    ko: '색상 검색...',
    zh: '搜索颜色...'
  },
  colorRulePromptLabel: {
    ar: 'موجه قاعدة التوزيع اللوني 60-30-10',
    en: '60-30-10 Color Rule Prompt',
    fr: 'Prompt de Règle de Couleur 60-30-10',
    es: 'Prompt de Regla de Color 60-30-10',
    ko: '60-30-10 색상 법칙 프롬프트',
    zh: '60-30-10 色彩法则提示词'
  },
  resetColorRule: {
    ar: 'إعادة ضبط التوزيع اللوني',
    en: 'Reset Color Rule',
    fr: 'Réinitialiser la Règle de Couleur',
    es: 'Restablecer Regla de Color',
    ko: '색상 법칙 초기화',
    zh: '重置色彩法则'
  },
  colorRuleApplied: {
    ar: 'تم تحديث التوزيع اللوني ✦',
    en: 'Color distribution updated ✦',
    fr: 'Distribution des couleurs mise à jour ✦',
    es: 'Distribución de color actualizada ✦',
    ko: '색상 배분이 업데이트되었습니다 ✦',
    zh: '色彩分布已更新 ✦'
  },
  colorRuleResetDone: {
    ar: 'تمت إعادة ضبط التوزيع اللوني ✦',
    en: 'Color rule reset ✦',
    fr: 'Règle de couleur réinitialisée ✦',
    es: 'Regla de color restablecida ✦',
    ko: '색상 법칙이 초기화되었습니다 ✦',
    zh: '色彩法则已重置 ✦'
  },
  colorRuleExplanationTitle: {
    ar: 'دليل قاعدة التوزيع اللوني 60-30-10',
    en: '60-30-10 Rule Guide',
    fr: 'Guide de la Règle 60-30-10',
    es: 'Guía de la Regla 60-30-10',
    ko: '60-30-10 법칙 가이드',
    zh: '60-30-10 法则指南'
  },
  colorRule60Explanation: {
    ar: '60% السائد: للمساحات الكبيرة والخلفيات، يحدد النغمة والمزاج العام للمشهد.',
    en: '60% Dominant: For backgrounds and large areas, establishing the mood and atmosphere.',
    fr: "60% Dominante : Pour l'arrière-plan et les grandes surfaces, définit l'atmosphère.",
    es: '60% Dominante: Para fondos y áreas grandes, estableciendo la atmósfera general.',
    ko: '60% 주색상: 배경과 넓은 면적용, 전반적인 분위기와 무드를 결정합니다.',
    zh: '60% 主色：用于背景和高频大面积区域，奠定画面基调与氛围。'
  },
  colorRule30Explanation: {
    ar: '30% الثانوي: للأجسام المتوسطة وملابس الشخصيات، يدعم اللون السائد ويمنع الرتابة.',
    en: '30% Secondary: For main subjects and key props, supporting the dominant color with depth.',
    fr: '30% Secondaire : Pour les sujets principaux, soutient la dominante avec du relief.',
    es: '30% Secundario: Para sujetos y objetos clave, apoyando al dominante con profundidad.',
    ko: '30% 보조색상: 주요 피사체와 의상용, 주색상을 지원하며 깊이를 더합니다.',
    zh: '30% 辅助色：用于主体和关键道具，提供深度，与主色相辅相成。'
  },
  colorRule10Explanation: {
    ar: '10% التوكيد: للتفاصيل الدقيقة والإضاءات الجانبية، يكون لوناً قوياً ومتبايناً لجذب العين.',
    en: '10% Accent: For fine details and highlight glares, using a striking contrast to draw focus.',
    fr: "10% Accent : Pour les détails fins et éclats, apporte un contraste fort pour capter l'œil.",
    es: '10% Acento: Para detalles finos e iluminaciones, con fuerte contraste para guiar la mirada.',
    ko: '10% 강조색상: 세부 묘사와 하이라이트용, 시선을 사로잡는 강한 대비를 이룹니다.',
    zh: '10% 强调色：用于细节和高光微亮处，以强烈的对比色吸引视觉焦点。'
  },
  customGrading: {
    ar: 'تعديل يدوي',
    en: 'Custom',
    fr: 'Personnalisé',
    es: 'Personalizado',
    ko: '사용자 정의',
    zh: '自定义'
  },
  presets: {
    ar: 'الأساليب',
    en: 'Presets',
    fr: 'Préréglages',
    es: 'Preajustes',
    ko: '프리셋',
    zh: '预设'
  },
  templates: {
    ar: 'القوالب',
    en: 'Templates',
    fr: 'Modèles',
    es: 'Plantillas',
    ko: '템플릿',
    zh: '模板'
  },
  history: {
    ar: 'السجل',
    en: 'History',
    fr: 'Historique',
    es: 'Historial',
    ko: '기록',
    zh: '历史'
  },
  projects: {
    ar: 'المشاريع',
    en: 'Projects',
    fr: 'Projets',
    es: 'Proyectos',
    ko: '프로젝트',
    zh: '项目'
  },
  options: {
    ar: 'الخيارات',
    en: 'Options',
    fr: 'Options',
    es: 'Opciones',
    ko: '옵션',
    zh: '选项'
  },
  sections: {
    ar: 'الأقسام',
    en: 'Sections',
    fr: 'Sections',
    es: 'Secciones',
    ko: '섹션',
    zh: '分区'
  },
  prompt: {
    ar: 'البرومبت',
    en: 'Prompt',
    fr: 'Prompt',
    es: 'Prompt',
    ko: '프롬프트',
    zh: '提示词'
  },
  coreSections: {
    ar: 'الأقسام الرئيسية',
    en: 'Core Sections',
    fr: 'Sections Principales',
    es: 'Secciones Principales',
    ko: '핵심 섹션',
    zh: '核心分区'
  },
  sceneSubject: {
    ar: 'موضوع المشهد',
    en: 'Scene Subject',
    fr: 'Sujet de la Scène',
    es: 'Sujeto de la Escena',
    ko: '장면 주제',
    zh: '画面主体'
  },
  subjectPlaceholder: {
    ar: 'اكتب موضوع المشهد هنا (مثال: رجل يمشي في المطر)...',
    en: 'Describe your scene subject (e.g. a man walking in rain)...',
    fr: 'Décrivez le sujet de votre scène (ex: un homme marchant sous la pluie)...',
    es: 'Describe el sujeto de tu escena (ej. un hombre caminando bajo la lluvia)...',
    ko: '장면 주제를 입력하세요 (예: 빗속을 걷는 남자)...',
    zh: '描述您的画面主体（例如：雨中行走的人）...'
  },
  finalPrompt: {
    ar: 'البرومبت النهائي',
    en: 'Final Prompt',
    fr: 'Prompt Final',
    es: 'Prompt Final',
    ko: '최종 프롬프트',
    zh: '最终提示词'
  },
  promptPlaceholder: {
    ar: 'اختر خيارات لبناء البرومبت...',
    en: 'Select options to build your prompt...',
    fr: 'Sélectionnez des options pour générer votre prompt...',
    es: 'Selecciona opciones para construir tu prompt...',
    ko: '프롬프트를 작성하려면 옵션을 선택하세요...',
    zh: '选择选项以构建您的提示词...'
  },
  copy: {
    ar: 'نسخ',
    en: 'Copy',
    fr: 'Copier',
    es: 'Copiar',
    ko: '복사',
    zh: '复制'
  },
  save: {
    ar: 'حفظ',
    en: 'Save',
    fr: 'Sauvegarder',
    es: 'Guardar',
    ko: '저장',
    zh: '保存'
  },
  clear: {
    ar: 'مسح',
    en: 'Clear',
    fr: 'Effacer',
    es: 'Limpiar',
    ko: '초기화',
    zh: '清除'
  },
  clearAll: {
    ar: 'مسح الكل',
    en: 'Clear All',
    fr: 'Tout effacer',
    es: 'Limpiar todo',
    ko: '전체 삭제',
    zh: '清除全部'
  },
  applied: {
    ar: 'تم التطبيق',
    en: 'Applied',
    fr: 'Appliqué',
    es: 'Aplicado',
    ko: '적용됨',
    zh: '已应用'
  },
  copied: {
    ar: '✓ تم النسخ',
    en: '✓ Copied!',
    fr: '✓ Copié !',
    es: '✓ ¡Copiado!',
    ko: '✓ 복사 완료!',
    zh: '✓ 已复制！'
  },
  noPromptCopy: {
    ar: '⚠ لا يوجد برومبت للنسخ',
    en: '⚠ No prompt to copy',
    fr: '⚠ Aucun prompt à copier',
    es: '⚠ No hay prompt para copiar',
    ko: '⚠ 복사할 프롬프트가 없습니다',
    zh: '⚠ 没有可复制的提示词'
  },
  savedToHistory: {
    ar: '✓ تم حفظ الموجه في السجل',
    en: '✓ Saved to history!',
    fr: '✓ Enregistré dans l’historique !',
    es: '✓ ¡Guardado en el historial!',
    ko: '✓ 기록에 저장되었습니다!',
    zh: '✓ 已保存到历史记录！'
  },
  selectOptionsFirst: {
    ar: '⚠ ابدأ باختيار الخيارات أولاً',
    en: '⚠ Select options first',
    fr: '⚠ Sélectionnez des options d’abord',
    es: '⚠ Selecciona opciones primero',
    ko: '⚠ 옵션을 먼저 선택하세요',
    zh: '⚠ 请先选择选项'
  },
  clearedMsg: {
    ar: '🗑 تم المسح',
    en: '🗑 Cleared!',
    fr: '🗑 Effacé !',
    es: '🗑 ¡Limpiado!',
    ko: '🗑 초기화됨!',
    zh: '🗑 已清除！'
  },
  historyApplied: {
    ar: '✓ تم استرجاع الموجه',
    en: '✓ Prompt applied',
    fr: '✓ Prompt appliqué',
    es: '✓ Prompt aplicado',
    ko: '✓ 프롬프트가 적용되었습니다',
    zh: '✓ 提示词已应用'
  },
  historyCleared: {
    ar: '🗑 تم مسح السجل',
    en: '🗑 History cleared',
    fr: '🗑 Historique effacé',
    es: '🗑 Historial limpiado',
    ko: '🗑 기록이 삭제되었습니다',
    zh: '🗑 历史记录已清除'
  },
  historyEmpty: {
    ar: 'السجل فارغ. قم ببناء موجه واضغط على زر "حفظ" لإضافته هنا.',
    en: 'History is empty. Build a prompt and click "Save" to keep it here.',
    fr: 'L’historique est vide. Créez un prompt et cliquez sur "Sauvegarder" pour l’ajouter ici.',
    es: 'El historial está vacío. Construye un prompt y haz clic en "Guardar" para agregarlo aquí.',
    ko: '기록이 비어 있습니다. 프롬프트를 작성하고 "저장" 버튼을 눌러 기록에 추가하세요.',
    zh: '历史记录为空。构建提示词并点击“保存”以将其保留在此处。'
  },
  pts: {
    ar: 'نقطة',
    en: 'pts',
    fr: 'pts',
    es: 'pts',
    ko: '점',
    zh: '分'
  },
  apply: {
    ar: 'تطبيق',
    en: 'Apply',
    fr: 'Appliquer',
    es: 'Aplicar',
    ko: '적용',
    zh: '应用'
  },
  delete: {
    ar: 'حذف',
    en: 'Delete',
    fr: 'Supprimer',
    es: 'Eliminar',
    ko: '삭제',
    zh: '删除'
  },
  easy: {
    ar: 'سهل',
    en: 'Easy',
    fr: 'Facile',
    es: 'Fácil',
    ko: '쉬움',
    zh: '简单'
  },
  medium: {
    ar: 'متوسط',
    en: 'Medium',
    fr: 'Moyen',
    es: 'Medio',
    ko: '보통',
    zh: '中等'
  },
  hard: {
    ar: 'متقدم',
    en: 'Advanced',
    fr: 'Avancé',
    es: 'Avanzado',
    ko: '고급',
    zh: '高级'
  },
  all: {
    ar: 'الكل',
    en: 'All',
    fr: 'Tout',
    es: 'Todo',
    ko: '전체',
    zh: '全部'
  },
  directors: {
    ar: 'المخرجين',
    en: 'Directors',
    fr: 'Réalisateurs',
    es: 'Directores',
    ko: '감독',
    zh: '导演'
  },
  cinematographers: {
    ar: 'المصورين',
    en: 'Cinematographers',
    fr: 'Cadreurs',
    es: 'Directores de foto',
    ko: '촬영 감독',
    zh: '摄影师'
  },
  genres: {
    ar: 'الأنواع',
    en: 'Genres',
    fr: 'Genres',
    es: 'Géneros',
    ko: '장르',
    zh: '流派'
  },
  cinematicPresetsTitle: {
    ar: 'الأساليب السينمائية الجاهزة',
    en: 'Cinematic Presets',
    fr: 'Préréglages Cinématographiques',
    es: 'Preajustes Cinematográficos',
    ko: '시네마틱 프리셋',
    zh: '电影级预设'
  },
  readyTemplatesTitle: {
    ar: 'قوالب البناء الجاهزة',
    en: 'Ready Templates',
    fr: 'Modèles Prêts',
    es: 'Plantillas Listas',
    ko: '준비된 템플릿',
    zh: '就绪模板'
  },
  savedHistoryTitle: {
    ar: 'سجل الموجهات المحفوظة',
    en: 'Saved History',
    fr: 'Historique Sauvegardé',
    es: 'Historial Guardado',
    ko: '저장된 기록',
    zh: '保存的历史记录'
  },
  optionText: {
    ar: 'خيار',
    en: 'option',
    fr: 'option',
    es: 'opción',
    ko: '옵션',
    zh: '选项'
  },
  optionsText: {
    ar: 'خيارات',
    en: 'options',
    fr: 'options',
    es: 'opciones',
    ko: '옵션',
    zh: '选项'
  },
  scoreStrength: {
    BASIC: { ar: 'أساسي', en: 'BASIC', fr: 'BASIQUE', es: 'BÁSICO', ko: '기본', zh: '基础' },
    GOOD: { ar: 'جيد', en: 'GOOD', fr: 'BON', es: 'BUENO', ko: '좋음', zh: '良好' },
    STRONG: { ar: 'قوي', en: 'STRONG', fr: 'FORT', es: 'FUERTE', ko: '강함', zh: '强大' },
    PRO: { ar: 'احترافي', en: 'PRO', fr: 'PRO', es: 'PRO', ko: '전문가', zh: '专业' },
    MASTER: { ar: 'متقن', en: 'MASTER', fr: 'MAÎTRE', es: 'MAESTRO', ko: '마스터', zh: '大师' }
  },
  backToHome: {
    ar: 'العودة للرئيسية',
    en: 'Back to Home',
    fr: 'Retour à l’accueil',
    es: 'Volver al inicio',
    ko: '홈으로 돌아가기',
    zh: '返回首页'
  },
  switchLanguage: {
    ar: 'تبديل اللغة',
    en: 'Switch Language',
    fr: 'Changer de langue',
    es: 'Cambiar de idioma',
    ko: '언어 전환',
    zh: '切换语言'
  },
  buildTooltip: {
    ar: 'بناء وتخصيص الموجه السينمائي خطوة بخطوة',
    en: 'Build and customize your cinematic prompt step by step',
    fr: 'Générez et personnalisez votre prompt cinéma étape par étape',
    es: 'Construye y personaliza tu prompt cinematográfico paso a paso',
    ko: '시네마틱 프롬프트를 단계별로 작성하고 맞춤 설정하세요',
    zh: '逐步构建和自定义您的电影级提示词'
  },
  presetsTooltip: {
    ar: 'تطبيق إعدادات مسبقة بأسلوب أشهر المخرجين والمصورين',
    en: 'Apply curated presets from top directors and cinematographers',
    fr: 'Appliquez des préréglages de grands réalisateurs et cadreurs',
    es: 'Aplica preajustes de grandes directores y directores de foto',
    ko: '거장 감독과 촬영 감독의 엄선된 프리셋을 적용하세요',
    zh: '应用来自顶级导演 and 摄影师的精选预设'
  },
  templatesTooltip: {
    ar: 'استخدام قوالب جاهزة حسب مستوى التعقيد والاحترافية',
    en: 'Use ready structure templates tailored by complexity',
    fr: 'Utilisez des modèles de structure selon la complexité',
    es: 'Usa plantillas listas según la complejidad',
    ko: '복잡도별로 분류된 준비된 템플릿 구조를 사용하세요',
    zh: '使用根据复杂度量身定制的就绪模板结构'
  },
  historyTooltip: {
    ar: 'مراجعة واستعادة الموجهات السابقة المحفوظة',
    en: 'Review and restore previously saved prompts',
    fr: 'Consultez et restaurez vos prompts sauvegardés',
    es: 'Revisa y restaura tus prompts guardados',
    ko: '이전에 저장한 프롬프트를 검토하고 복원하세요',
    zh: '查看并恢复以前保存的提示词'
  },
  colorLabTooltip: {
    ar: 'معمل ألوان متقدم لتلوين المشاهد بصرياً وتلقائياً',
    en: 'Advanced color grading lab to visually color scenes',
    fr: 'Labo d’étalonnage avancé pour colorer visuellement les scènes',
    es: 'Laboratorio de gradación avanzado para colorear visualmente escenas',
    ko: '장면의 색상을 시각적으로 정밀 조절하는 고급 컬러 그레이딩 랩',
    zh: '高级色彩校正实验室，直观地为场景调色'
  },
  basic: {
    ar: 'أساسي',
    en: 'Basic',
    fr: 'Basique',
    es: 'Básico',
    ko: '기본',
    zh: '基础'
  },
  tech: {
    ar: 'تقني',
    en: 'Tech',
    fr: 'Technique',
    es: 'Técnico',
    ko: '기술',
    zh: '技术'
  },
  style: {
    ar: 'أسلوب',
    en: 'Style',
    fr: 'Style',
    es: 'Estilo',
    ko: '스타일',
    zh: '风格'
  },
  color: {
    ar: 'لون',
    en: 'Color',
    fr: 'Couleur',
    es: 'Color',
    ko: '색상',
    zh: '色彩'
  },
  framing: {
    ar: 'تأطير',
    en: 'Frame',
    fr: 'Cadrage',
    es: 'Encuadre',
    ko: '프레이밍',
    zh: '构图'
  }
};

export const SECTION_TRANSLATIONS: Record<string, { name: Record<string, string>; tooltip: Record<string, string> }> = {
  camera: {
    name: { ar: 'الكاميرا', en: 'Camera', fr: 'Caméra', es: 'Cámara', ko: '카메라', zh: '相机' },
    tooltip: {
      ar: 'يحدد نوع الكاميرا وصيغة الفيلم لبناء الأساس التقني والنسيج البصري الخام للمشهد.',
      en: 'Selects the camera system and film format to establish base technical quality and visual texture.',
      fr: 'Sélectionne le système de caméra et le format de film pour la qualité de base.',
      es: 'Selecciona la cámara y el formato de película para establecer la calidad base.',
      ko: '장면의 기본적인 기술적 품질과 시각적 질감을 위해 카메라 시스템과 필름 포맷을 선택합니다.',
      zh: '选择相机系统和胶片格式以建立底层的成像技术质量与画面质感。'
    }
  },
  lens: {
    name: { ar: 'العدسة والبصريات', en: 'Lens & Optics', fr: 'Objectif & Optique', es: 'Lentes y Óptica', ko: '렌즈 및 광학', zh: '镜头与光学' },
    tooltip: {
      ar: 'يتحكم في البصريات والبعد البؤري وعمق الميدان لتوجيه تركيز المشاهد وخلق أبعاد بصرية فريدة.',
      en: 'Controls optics, focal length, and depth of field to guide viewer focus and shape perspective.',
      fr: 'Contrôle l’optique et la profondeur de champ pour guider le regard.',
      es: 'Controla la óptica y la profundidad de campo para guiar la mirada.',
      ko: '관객의 시선 집중과 구도 형성을 위해 광학, 초점 거리, 피사체 심도를 제어합니다.',
      zh: '控制光学镜片、焦距和景深以引导观众焦点并塑造画面的透视深度。'
    }
  },
  shot: {
    name: { ar: 'نوع اللقطة', en: 'Shot Type', fr: 'Type de Plan', es: 'Tipo de Plano', ko: '샷 타입', zh: '镜头类型' },
    tooltip: {
      ar: 'يضبط حجم اللقطة وعلاقة مقياس الشخصيات بالمحيط لتأسيس السرد الدرامي والتكوين البصري.',
      en: 'Determines shot scale and subject-to-environment relations to drive dramatic narrative framing.',
      fr: 'Détermine l’échelle du plan pour le cadrage narratif.',
      es: 'Determina la escala del plano para el encuadre narrativo.',
      ko: '서사 구도를 이끌어내기 위해 샷의 스케일과 피사체 대 주변 환경의 비율을 정합니다.',
      zh: '决定画面景别和主体与环境的比例以确立戏剧性的叙事构图。'
    }
  },
  movement: {
    name: { ar: 'الحركة والحامل', en: 'Camera Movement', fr: 'Mouvement', es: 'Movimiento', ko: '카메라 이동', zh: '机位运动' },
    tooltip: {
      ar: 'يحدد ديناميكية حركة الكاميرا ونوع الحامل لإضافة تفاعل واقعي وتتبع انسيابي لحركة المشهد.',
      en: 'Defines camera motion dynamics and stabilizing gear to inject organic engagement.',
      fr: 'Définit le mouvement et l’équipement de stabilisation.',
      es: 'Define el movimiento y el equipo de estabilización.',
      ko: '장면에 생동감을 주기 위해 카메라 모션 다이내믹스와 고정 장비 종류를 지정합니다.',
      zh: '定义相机运动轨迹和稳定设备，以注入更自然的画面交互感。'
    }
  },
  dop: {
    name: { ar: 'مصور السينما', en: 'Cinematographer', fr: 'Directeur de la Photo', es: 'Director de Fotografía', ko: '촬영 감독', zh: '电影摄影师' },
    tooltip: {
      ar: 'يستلهم البصمة البصرية وأسلوب الإضاءة المميز لأشهر مديري التصوير العالميين.',
      en: 'Emulates the signature aesthetic and master lighting philosophy of renowned DoPs.',
      fr: 'Émule le style des plus grands directeurs de la photo.',
      es: 'Emula el estilo de los directores de fotografía de renombre.',
      ko: '유명 촬영 감독들의 시각적 아이덴티티와 라이팅 철학을 모방합니다.',
      zh: '借镜大师级电影摄影指导（DoP）的视觉风格与光影构思。'
    }
  },
  colorgrade: {
    name: { ar: 'درجة اللون', en: 'Color Grade', fr: 'Étalonnage', es: 'Gradación de Color', ko: '컬러 그레이딩', zh: '色彩调校' },
    tooltip: {
      ar: 'يتحكم في لوحة الألوان والصبغة السينمائية (Color Grading) لإضفاء طابع لوني موحد.',
      en: 'Applies sophisticated color grading profiles to harmonize the cinematic palette.',
      fr: 'Applique des profils d’étalonnage pour harmoniser les couleurs.',
      es: 'Aplica perfiles de gradación de color para armonizar la paleta.',
      ko: '영화적인 톤앤매너를 일치시키기 위해 정교한 컬러 그레이딩 프로필을 적용합니다.',
      zh: '应用高级色彩调校方案，使整幅画面的色彩搭配更加和谐统一。'
    }
  },
  composition: {
    name: { ar: 'التكوين والتأطير', en: 'Composition', fr: 'Composition', es: 'Composición', ko: '구도 및 تأطير', zh: '构图与取景' },
    tooltip: {
      ar: 'يحدد القواعد الهندسية وتوزيع العناصر وزوايا الرؤية داخل كادر الكاميرا.',
      en: 'Determines geometric rules, element placement, and viewing angles within the camera frame.',
      fr: 'Détermine les règles géométriques et le cadrage.',
      es: 'Determina las reglas geométricas y el encuadre.',
      ko: '카메라 프레임 내의 기하학적 규칙과 요소 배치, 화각을 결정합니다.',
      zh: '确定相机画幅内的几何规则、元素布局与视角。'
    }
  },
  lighting: {
    name: { ar: 'الإضاءة', en: 'Lighting', fr: 'Éclairage', es: 'Iluminación', ko: '조명', zh: '光影设计' },
    tooltip: {
      ar: 'ينحت ملامح المشهد بالضوء والظلال لتعزيز التباين، العمق، والواقعية البصرية.',
      en: 'Sculpts the scene with deliberate key, fill, and rim lights to drive mood.',
      fr: 'Sculpte la scène avec de l’éclairage pour l’ambiance.',
      es: 'Esculpe la escena con iluminación para el ambiente.',
      ko: '대비, 공간감, 그리고 현실감을 극대화하기 위해 빛과 그림자로 장면을 묘사합니다.',
      zh: '利用主光、辅助光和轮廓光精心雕刻画面细节，增强对比度、深度和视觉真实感。'
    }
  },
  aspectratio: {
    name: { ar: 'نسبة الإطار', en: 'Aspect Ratio', fr: 'Format d’Image', es: 'Relación de Aspecto', ko: '화면 비율', zh: '画面比例' },
    tooltip: {
      ar: 'يحدد أبعاد الكادر ونسبة العرض إلى الارتفاع للحصول على التكوين السينمائي المطلوب.',
      en: 'Selects the aspect ratio and frame dimensions to establish the desired composition.',
      fr: 'Sélectionne le format d’image pour la composition.',
      es: 'Selecciona la relación de aspecto para la composición.',
      ko: '원하는 시네마틱 구도를 잡기 위해 프레임 규격과 가로세로 비율을 선택합니다.',
      zh: '选择画幅比例和画幅尺寸以呈现所需的电影级画面构图。'
    }
  },
  technique: {
    name: { ar: 'التقنية السينمائية', en: 'Cinematic Technique', fr: 'Technique Ciné', es: 'Técnica de Cine', ko: '시네마틱 기법', zh: '电影技术' },
    tooltip: {
      ar: 'يطبق أساليب إخراجية وحيَل تصوير متطورة لإضفاء بصمة فكرية وبصرية فريدة.',
      en: 'Leverages non-traditional directional mechanics to deliver pure art-house mastery.',
      fr: 'Exploite des techniques de réalisation artistiques.',
      es: 'Explota técnicas de dirección artística.',
      ko: '독창적인 예술적 깊이를 더하기 위해 영화 연출법 및 카메라 트릭 기법을 적용합니다.',
      zh: '采用独特的导演手法和摄影技巧，赋予画面深刻的艺术内涵和视觉特色。'
    }
  },
  modifiers: {
    name: { ar: 'المُحسّنات السينمائية المتقدمة', en: 'Advanced Modifiers', fr: 'Modificateurs Avancés', es: 'Modificadores Avanzados', ko: '고급 모디파이어', zh: '高级修改词' },
    tooltip: {
      ar: 'مجموعات أوامر مركّزة ومتقدمة ترفع جودة الصورة وتضبط هندسة التكوين والعدسات.',
      en: 'Curated keyword blocks forcing pure cinematic resolution, layout locks, and lens traits.',
      fr: 'Blocs de mots-clés optimisant la résolution et la géométrie.',
      es: 'Bloques de palabras clave que optimizan la resolución y geometría.',
      ko: '이미지 품질을 높이고 구도 기하학과 렌즈 특성을 보정하는 엄선된 특수 명령어 세트입니다.',
      zh: '精选词汇组，用以大幅提升画幅质量并约束画面几何。'
    }
  }
};

export const GROUP_TRANSLATIONS: Record<string, { name: Record<string, string>; tooltip: Record<string, string> }> = {
  camera_body: {
    name: { ar: 'جسم الكاميرا', en: 'Camera Body', fr: 'Boîtier', es: 'Cuerpo de cámara', ko: '카메라 바디', zh: '相机机身' },
    tooltip: {
      ar: 'يحدد المستشعر والنطاق الديناميكي المميز للكاميرا لتأسيس المظهر الخام.',
      en: 'Selects the sensor format and dynamic range profile to establish the raw feel.',
      fr: 'Sélectionne le capteur pour le rendu brut.',
      es: 'Selecciona el sensor para el acabado crudo.',
      ko: '카메라 고유의 질감 구현을 위해 센서와 다이내믹 레인지를 설정합니다.',
      zh: '选择传感器格式和动态范围以确定原片基础质量。'
    }
  },
  lens_type: {
    name: { ar: 'نوع العدسة', en: 'Lens Type', fr: 'Type d’Objectif', es: 'Tipo de Lente', ko: '렌즈 종류', zh: '镜头类型' },
    tooltip: {
      ar: 'يتحكم في طبيعة الزجاج البصري وخصائص التشويه أو التوهج (Flares).',
      en: 'Controls glass characteristics, unique distortions, and optical flare traits.',
      fr: 'Contrôle le verre, les distorsions et le flare.',
      es: 'Controla el vidrio, las distorsiones y el destello.',
      ko: '렌즈 광학 글래스 특징과 플레어, 수차 성질을 제어합니다.',
      zh: '控制镜片的光学属性、独特的镜头畸变和眩光特质。'
    }
  },
  focal_length: {
    name: { ar: 'البعد البؤري', en: 'Focal Length', fr: 'Distance Focale', es: 'Distancia Focal', ko: '초점 거리', zh: '焦距' },
    tooltip: {
      ar: 'يحدد زاوية الرؤية ومقدار ضغط المسافة بين عناصر المقدمة والخلفية.',
      en: 'Determines viewing field and perspective compression between foreground and background.',
      fr: 'Détermine le champ de vision et la compression.',
      es: 'Determina el campo de visión y la compresión.',
      ko: '화각과 전경/배경 간의 원근 압축 정도를 결정합니다.',
      zh: '决定视角范围以及前景与背景之间的透视压缩效果。'
    }
  },
  aperture: {
    name: { ar: 'فتحة العدسة', en: 'Aperture', fr: 'Ouverture', es: 'Apertura', ko: '조리개 값', zh: '光圈' },
    tooltip: {
      ar: 'تتحكم في كمية الضوء الواصلة للعدسة ومستويات العزل والبوكيه الطبيعي.',
      en: 'Manages light gathering and mechanical depth of field roll-off intensity.',
      fr: 'Gère l’intensité du flou de profondeur de champ.',
      es: 'Gestiona la intensidad del desenfoque de campo.',
      ko: '렌즈에 들어오는 빛의 양과 포커싱 아웃 심도를 조절합니다.',
      zh: '管理光圈叶片收缩，影响进光量和焦外光斑过渡。'
    }
  },
  depth_of_field: {
    name: { ar: 'التركيز البصري والوضوح', en: 'Depth of Field & Clarity', fr: 'Profondeur de champ', es: 'Profundidad de campo', ko: '피사체 심도 및 명료도', zh: '景深与清晰度' },
    tooltip: {
      ar: 'خيارات متقدمة للتحكم في مستويات الوضوح وعزل العناصر عن المحيط.',
      en: 'Advanced clarity controls to manage isolation and multi-focal layers.',
      fr: 'Gère la clarté et l’isolation du sujet.',
      es: 'Gestiona la claridad y el aislamiento del sujeto.',
      ko: '선명도 레벨과 초점 분리 레이어에 대한 정밀 설정입니다.',
      zh: '提供更高级的清晰度配置，从而管理焦点的隔离度和分层。'
    }
  },
  shot_size: {
    name: { ar: 'حجم اللقطة', en: 'Shot Size', fr: 'Échelle de Plan', es: 'Tamaño del Plano', ko: '샷 크기', zh: '画面景别' },
    tooltip: {
      ar: 'يضبط المسافة الظاهرية للكاميرا لتحديد مستوى التركيز العاطفي أو البيئي.',
      en: 'Sets the apparent distance to balance emotional intimacy and ambient context.',
      fr: 'Règle la distance pour équilibrer l’intimité.',
      es: 'Ajusta la distancia para equilibrar la intimidad.',
      ko: '피사체의 감정 깊이와 환경의 배합을 가상의 거리로 맞춥니다.',
      zh: '设定相机的视在距离，以在情感深度和环境信息之间取得平衡。'
    }
  },
  subject_scale: {
    name: { ar: 'نسبة الشخصية للمشهد', en: 'Subject-to-Scene Scale', fr: 'Échelle Sujet-Scène', es: 'Escala Sujeto-Escena', ko: '피사체 대 장면 비율', zh: '主体与环境比例' },
    tooltip: {
      ar: 'يحدد التباين في المقياس بين الموضوع ومحيطه لخلق إحساس بالضآلة أو العظمة.',
      en: 'Defines scale interplay between subject and set to evoke dominance or dwarfing.',
      fr: 'Définit le rapport d’échelle entre le sujet et le décor.',
      es: 'Define la relación de escala entre el sujeto y el decorado.',
      ko: '피사체의 화면 내 크기를 극단적으로 배치해 정서적 대비를 유도합니다.',
      zh: '设定主体与周围场景的比例差异，引发宏大或渺小的艺术张力。'
    }
  },
  advanced_framing: {
    name: { ar: 'التأطير المتقدم', en: 'Advanced Layered Framing', fr: 'Cadrage Avancé', es: 'Encuadre Avanzado', ko: '고급 레이어 프레이밍', zh: '高级构图取景' },
    tooltip: {
      ar: 'أساليب تكوين متطورة لتقوية التركيز البصري والعمق الميداني للمشهد.',
      en: 'Sophisticated composition styles to reinforce focal depth and layers.',
      fr: 'Styles de composition renforçant la profondeur.',
      es: 'Estilos de composición que refuerzan la profundidad.',
      ko: '초점 깊이와 프레임 레이어를 정밀하게 설계하기 위한 예술적 구도입니다.',
      zh: '复杂的画面构图机制，以此加深视觉透视和空间层次感。'
    }
  },
  camera_movement: {
    name: { ar: 'الحركة', en: 'Movement', fr: 'Mouvement', es: 'Movimiento', ko: '카메라 이동', zh: '机位运动' },
    tooltip: {
      ar: 'يحدد نمط استقرار أو انزلاق الكاميرا لإضفاء طابع وثائقي أو سينمائي ناعم.',
      en: 'Defines physical mount stability to invoke raw documentary shakes or smooth glides.',
      fr: 'Définit la stabilité physique de la caméra.',
      es: 'Define la estabilidad física de la cámara.',
      ko: '거친 핸드헬드 흔들림부터 정밀한 글라이드 트래킹까지 무브먼트의 규칙을 정합니다.',
      zh: '定义相机的物理装载稳定性，实现从生动的摇晃到极其丝滑的推移。'
    }
  },
  camera_motion_dynamics: {
    name: { ar: 'التفاعل الحركي للكاميرا', en: 'Camera Motion Dynamics', fr: 'Dynamique', es: 'Dinámica', ko: '카메라 모션 다이내믹스', zh: '运动摄像动力学' },
    tooltip: {
      ar: 'تعليمات حركية مركبة تحاكي التزيّح (Parallax) والكشف التدريجي لأبعاد المشهد.',
      en: 'Advanced motion instructions for dynamic parallax and sweeping set reveals.',
      fr: 'Instructions de mouvement pour parallaxe et révélations.',
      es: 'Instrucciones de movimiento para paralaje y revelaciones.',
      ko: '시차(Parallax)와 점진적인 배경 탐색 효과를 위한 고차원 모션 제어 코드입니다.',
      zh: '复合摄像运动指令，通过景深差（视差）展现场景轮廓。'
    }
  },
  dop_name: {
    name: { ar: 'المصور', en: 'Cinematographer', fr: 'Cadreur', es: 'Director de foto', ko: '촬영 감독명', zh: '摄影指导' },
    tooltip: {
      ar: 'يحدد هوية المصور السينمائي لتطبيق أسلوبه الفريد في التباين واللون.',
      en: 'Selects the master cinematographer to inherit their iconic visual mood.',
      fr: 'Sélectionne le chef opérateur pour son style.',
      es: 'Selecciona al director de fotografía por su estilo.',
      ko: '고유의 명암비와 색조를 이식하기 위해 명장 촬영 감독의 이름을 기재합니다.',
      zh: '选择顶级电影摄影指导以继承其特有的曝光与对比度设计。'
    }
  },
  color_grade: {
    name: { ar: 'اللوك والـ LUT', en: 'Look & LUT', fr: 'Look & LUT', es: 'Look y LUT', ko: '룩 및 LUT', zh: '色彩风格与LUT' },
    tooltip: {
      ar: 'محاكاة لأشهر أشرطة الأفلام والتدرجات اللونية الهوليوودية.',
      en: 'Emulates legendary analog stocks and modern Hollywood digital grades.',
      fr: 'Émule les pellicules et les LUTs d’Hollywood.',
      es: 'Emula los rollos de película y los LUTs de Hollywood.',
      ko: '역사적인 아날로그 필름과 현대 상업 영화의 시그니처 톤을 입힙니다.',
      zh: '重现经典电影胶片的色彩特征和现代商业大片的风格化色调。'
    }
  },
  lighting_setup: {
    name: { ar: 'إعداد الإضاءة', en: 'Lighting Setup', fr: 'Configuration', es: 'Esquema de Iluminación', ko: '조명 구성', zh: '光影布局' },
    tooltip: {
      ar: 'يحدد مصادر واتجاهات الإضاءة الأساسية من الطبيعية الناعمة إلى الدرامية القاسية.',
      en: 'Sets key lighting motivation, directionality, and primary contrast ratios.',
      fr: 'Règle la direction et les rapports de contraste de la lumière.',
      es: 'Ajusta la dirección y las relaciones de contraste de la luz.',
      ko: '내추럴 앰비언트 소프트라이트부터 연출적 콘트라스트 조명까지 전체 광원을 배열합니다.',
      zh: '设置基础环境光强度与主辅比，涵盖平光到伦勃朗光的演变。'
    }
  },
  env_lighting_texture: {
    name: { ar: 'الملمس البيئي والإضاءة', en: 'Environmental Lighting & Texture', fr: 'Texture Lumineuse', es: 'Textura de Iluminación', ko: '주변 조명 및 질감', zh: '环境光与氛围质感' },
    tooltip: {
      ar: 'تأثيرات ضوئية بيئية متقدمة كالأشعة المجسمة وانعكاسات الأسطح المبللة.',
      en: 'Advanced atmospheric light textures like volumetrics and wet surface bounces.',
      fr: 'Textures atmosphériques avancées (volumétrie, reflets).',
      es: 'Texturas atmosféricas avanzadas (volumetría, reflejos).',
      ko: '틴들 현상이나 수면 및 도로 반사광 등 고급 기후 광학 텍스처입니다.',
      zh: '烟雾体积光照、水渍路面材质高光等复杂的物理现象级灯光纹理。'
    }
  },
  aspect_ratio: {
    name: { ar: 'الأبعاد ونسبة العرض', en: 'Aspect Ratio & Dimensions', fr: 'Format & Dimensions', es: 'Relación de Aspecto y Dimensiones', ko: '화면 비율 및 규격', zh: '幅面比例与尺寸' },
    tooltip: {
      ar: 'اختر نسبة العرض إلى الارتفاع المناسبة للمشهد.',
      en: 'Choose the appropriate aspect ratio for the scene.',
      fr: 'Choisissez le format d’image adapté.',
      es: 'Elige la relación de aspecto adecuada.',
      ko: '장면의 미적 의도에 걸맞은 프레임 스케일을 지정합니다.',
      zh: '选择适合当前主体的画面比例。'
    }
  },
  technique: {
    name: { ar: 'التقنية', en: 'Technique', fr: 'Technique', es: 'Técnica', ko: '기법', zh: '技术手法' },
    tooltip: {
      ar: 'محددات فنية متقدمة كاللقطات الطويلة المستمرة وتأثير الهالاسيون التناظري.',
      en: 'Advanced technical markers including long sequential takes and organic halation blooms.',
      fr: 'Marqueurs techniques avancés (plans-séquences, halos).',
      es: 'Marcadores técnicos avanzados (planos secuencia, halos).',
      ko: '특수 필름 렌즈 결함 모방이나 롱테이크 전술 같은 예술적 제작 기술 지표입니다.',
      zh: '使用诸如长焦对焦、透镜红晕扩散等现代摄影手法增加视觉冲击。'
    }
  },
  mod_lenses: {
    name: { ar: 'العدسات والبصريات', en: 'Lenses & Optics', fr: 'Objectifs', es: 'Objetivos', ko: '렌즈 모델', zh: '镜头型号' },
    tooltip: {
      ar: 'عدسات أسطورية محددة تضيف بوكيه فريد وتوهجات بصرية أصيلة للمشهد.',
      en: 'Forces legendary prime characteristics, anamorphic fall-offs, and optical flares.',
      fr: 'Force les caractéristiques d’optiques légendaires.',
      es: 'Fuerza las características de ópticas legendarias.',
      ko: '시네마틱 보케와 빈티지 플레어를 구현하기 위해 실제 렌즈 모델명을 강제 적용합니다.',
      zh: '绑定传奇级别的镜头名称，获取特定的光学球差和拉丝眩光特征。'
    }
  },
  mod_framing: {
    name: { ar: 'التكوين والتأطير', en: 'Framing & Composition', fr: 'Composition', es: 'Composición', ko: '구도 및 배치', zh: '构图定位' },
    tooltip: {
      ar: 'محددات التكوين المتقدم لضبط هندسة المشهد وزواياه.',
      en: 'Advanced composition flags to tune scene geometry and framing.',
      fr: 'Ajuste la géométrie et les angles.',
      es: 'Ajusta la geometría y los ángulos.',
      ko: '프레임의 기하학적 대칭을 바로잡아 비정상적인 형태를 통제합니다.',
      zh: '提供构图指示，严格锁定多层空间几何以阻断透视失真。'
    }
  },
  mod_color: {
    name: { ar: 'أنظمة الألوان والمظهر', en: 'Color & Film Look', fr: 'Rendu Film', es: 'Apariencia de Película', ko: '색상 및 필름 룩', zh: '色彩与胶片感' },
    tooltip: {
      ar: 'محددات لونية وتناظرية تضيف طابع الواقعية الخام أو تحاكي التحميض السينمائي.',
      en: 'Advanced keywords ensuring realistic raw grit, silver retention, or analog grain blooms.',
      fr: 'Force le grain réaliste ou rendu argentique.',
      es: 'Fuerza el grano realista o acabado analógico.',
      ko: '필름 인화 기법과 텍스처 노이즈로 날것 그대로의 실사 질감을 확보합니다.',
      zh: '锁定银盐冲印的化学粗糙感或模拟真实的卤化银胶片颗粒起伏。'
    }
  },
  mod_camera: {
    name: { ar: 'أنظمة الكاميرا', en: 'Camera Systems', fr: 'Caméras', es: 'Sistemas de cámara', ko: '카메라 계열', zh: '相机系统' },
    tooltip: {
      ar: 'تأكيدات صريحة على أنظمة التصوير الكبرى لتعزيز النطاق الديناميكي للذكاء الاصطناعي.',
      en: 'Reinforces premier camera strings driving baseline large format sensor performance.',
      fr: 'Renforce les capteurs grand format professionnels.',
      es: 'Refuerza los sensores de gran formato profesionales.',
      ko: '대형 포맷 전용 고가 카메라 바디 성능을 모델링하도록 강제 서명 코드를 추가합니다.',
      zh: '写入数字电影机型名录以强制模型输出最深的动态范围特性。'
    }
  }
};

export const ITEM_TRANSLATIONS: Record<string, {
  name: Record<string, string>;
  desc?: Record<string, string>;
  tooltip?: Record<string, string>;
}> = {
  'ARRI Alexa 35': {
    name: { ar: 'ARRI Alexa 35', en: 'ARRI Alexa 35', fr: 'ARRI Alexa 35', es: 'ARRI Alexa 35', ko: 'ARRI Alexa 35', zh: 'ARRI Alexa 35' },
    tooltip: {
      ar: 'الكاميرا المفضلة في هوليوود. تمنح نطاقاً دينامياً هائلاً وألواناً دافئة حقيقية تجعل الصورة تبدو مثل أفلام السينما الكبرى مثل "Blade Runner 2049".',
      en: 'Hollywood\'s favorite digital cinema camera. Delivers exceptional dynamic range and organic warm color science, creating that unmistakable big-screen cinematic feel.',
      fr: 'La caméra de cinéma numérique préférée d\'Hollywood. Offre une plage dynamique exceptionnelle et une science des couleurs chaudes et organiques, créant cette sensation cinématographique inimitable du grand écran.',
      es: 'La cámara de cine digital favorita de Hollywood. Ofrece un rango dinámico excepcional y una ciencia de color cálido y orgánico, creando esa inconfundible sensación cinematográfica de la gran pantalla.',
      ko: '할리우드가 가장 사랑하는 디지털 시네마 카메라. 뛰어난 다이내믹 레인지와 유기적이고 따뜻한 컬러 사이언스를 제공하여, 대형 스크린 특유의 독보적인 영화적 감성을 자아냅니다.',
      zh: '好莱坞最受青睐的数字电影摄影机。提供卓越的动态范围和有机温暖的色彩科学，营造出无可比拟的大银幕电影质感。'
    },
    desc: { ar: 'سينما احترافية', en: 'Premium cinema', fr: 'Cinéma haut de gamme', es: 'Cine premium', ko: '프리미엄 시네마', zh: '顶级电影级' }
  },
  'ARRI Alexa Mini LF': {
    name: { ar: 'ARRI Alexa Mini LF', en: 'ARRI Alexa Mini LF', fr: 'ARRI Alexa Mini LF', es: 'ARRI Alexa Mini LF', ko: 'ARRI Alexa Mini LF', zh: 'ARRI Alexa Mini LF' },
    tooltip: {
      ar: 'نسخة الفورمات الكبير من ARRI. توفر عمق ميدان ضحل بشكل طبيعي وانتقالاً ناعماً في البوكيه يمنح الصورة بُعداً بصرياً استثنائياً وخاصاً.',
      en: 'Large format version of ARRI delivering naturally shallower depth of field and ultra-smooth bokeh transitions — perfect for immersive, cinematic wide-angle frames.',
      fr: 'Version grand format d\'ARRI offrant une profondeur de champ naturellement plus faible et des transitions de bokeh ultra-fluides — idéale pour des plans larges immersifs et cinématographiques.',
      es: 'La versión de formato grande de ARRI que ofrece una profundidad de campo naturalmente más reducida y transiciones de bokeh ultra suaves, perfecta para encuadres gran angular inmersivos y cinematográficos.',
      ko: 'ARRI의 대형 포맷 버전. 자연스럽게 얕은 피사체 심도와 극도로 부드러운 보케 전환을 지원하여 몰입감 넘치는 시네마틱 광각 프레임에 적합합니다.',
      zh: 'ARRI 的大画幅版本。提供自然柔和的浅景深与极度丝滑 of 焦外过渡，完美契合具有沉浸感的电影级广角构图。'
    },
    desc: { ar: 'فورمات كبير', en: 'Large format', fr: 'Grand format', es: 'Formato grande', ko: '대형 포맷', zh: '大画幅' }
  },
  'Sony VENICE 2': {
    name: { ar: 'Sony VENICE 2', en: 'Sony VENICE 2', fr: 'Sony VENICE 2', es: 'Sony VENICE 2', ko: 'Sony VENICE 2', zh: 'Sony VENICE 2' },
    tooltip: {
      ar: 'كاميرا سوني الاحترافية بمستشعر الفريم الكامل 8.6K. تبرع في مشاهد الإضاءة المنخفضة بأداء مذهل وخلفيات نظيفة تماماً. استُخدمت في مسلسلات وأفلام Netflix الكبرى.',
      en: 'Sony\'s flagship cinema camera with full-frame 8.6K. Excels in low-light with clean shadows and dual base ISO — heavily used in premium Netflix productions.',
      fr: 'La caméra de cinéma phare de Sony dotée d\'un capteur plein format 8.6K. Excellente en basse lumière avec des ombres nettes et un double ISO de base — largement utilisée dans les productions Netflix premium.',
      es: 'La cámara de cine insignia de Sony con sensor de formato completo 8.6K. Sobresale en condiciones de poca luz con sombras limpias y doble ISO base, muy utilizada en producciones premium de Netflix.',
      ko: '풀프레임 8.6K 센서를 탑재한 소니의 플래그십 시네마 카메라. 듀얼 베이스 ISO와 깨끗한 암부 표현으로 저조도 환경에서 탁월한 성능을 발휘하며, 넷플릭스 프리미엄 작품에 널리 사용됩니다.',
      zh: '索尼旗舰级 8.6K 全画幅电影摄影机。凭借纯净 of 暗部表现和双原生 ISO，在低照度环境下表现优异，广泛应用于 Netflix 优质剧集和电影制作。'
    }
  },
  'RED V-RAPTOR': {
    name: { ar: 'RED V-RAPTOR', en: 'RED V-RAPTOR', fr: 'RED V-RAPTOR', es: 'RED V-RAPTOR', ko: 'RED V-RAPTOR', zh: 'RED V-RAPTOR' },
    tooltip: {
      ar: 'أقوى كاميرا من RED بدقة 8K. مثالية للمشاهد الخارجية والمشاهد ذات النطاق الديناميكي العالي. تجمع بين الحدة الرقمية المذهلة والغنى اللوني الرقيق.',
      en: 'RED\'s most powerful 8K cinema camera. Ideal for high-contrast outdoor scenes and vivid daylight cinematography — combines stunning sharpness with rich color depth.',
      fr: 'La caméra de cinéma 8K la plus puissante de RED. Idéale pour les scènes extérieures à fort contraste et la cinématographie lumineuse en plein jour — allie une netteté saisissante à une riche profondeur de couleur.',
      es: 'La cámara de cine 8K más potente de RED. Ideal para escenas al aire libre de alto contraste y cinematografía vívida a la luz del día, combina una nitidez impresionante con una gran profundidad de color.',
      ko: 'RED에서 가장 강력한 8K 시네마 카메라. 대비가 강한 야외 씬과 생생한 주광 시네마토그래피에 이상적이며, 압도적인 선명함과 풍부한 색상 깊이를 결합합니다.',
      zh: 'RED 最强劲的 8K 电影摄影机。非常适合高反差户外场景和鲜艳的日光摄影，将惊人的锐度与丰富的色彩深度完美结合。'
    },
    desc: { ar: 'ديناميك عالي', en: 'High DR RED', fr: 'Haute dynamique RED', es: 'Alto rango dinámico RED', ko: '높은 다이내믹 레인지', zh: '红机高动态' }
  },
  'Blackmagic URSA Cinema': {
    name: { ar: 'Blackmagic URSA', en: 'Blackmagic URSA Cinema', fr: 'Blackmagic URSA Cinema', es: 'Blackmagic URSA Cinema', ko: '블랙매직 URSA 시네마', zh: 'Blackmagic URSA摄影机' },
    tooltip: {
      ar: 'الخيار المفضل للمخرجين المستقلين. دقة 12K مع إمكانية الوصول الرقمي الواقعي. تمنح صورة نظيفة ومميزة بتكلفة أقل، وشائعة في أفلام الإنتاج المستقل الحديثة.',
      en: 'Indie filmmaker\'s go-to. 12K resolution with an organic, accessible look — commonly used in independent films and streaming productions for its clean realism.',
      fr: 'Le premier choix des cinéastes indépendants. Une résolution 12K avec un rendu organique et accessible — couramment utilisée dans les films indépendants et les productions destinées au streaming pour son réalisme épuré.',
      es: 'La opción de cabecera de los cineastas independientes. Resolución 12K con un aspecto orgánico y accesible, utilizada habitualmente en películas independientes y producciones de streaming por su realismo limpio.',
      ko: '인디 영화감독들의 필수 장비. 유기적이고 친근한 룩을 제공하는 12K 해상도로, 깔끔한 리얼리즘 덕분에 독립 영화와 스트리밍 제작에 자주 사용됩니다.',
      zh: '独立电影制作人的首选。12K 分辨率带来自然且亲和的画面质感，因其纯净的现实主义风格而广泛应用于独立电影和流媒体制作。'
    },
    desc: { ar: 'سينما مستقلة', en: 'Indie cinema', fr: 'Cinéma indé', es: 'Cine independiente', ko: '인디 시네마', zh: '独立电影' }
  },
  '35mm Film': {
    name: { ar: 'فيلم حقيقي 35mm', en: '35mm Film', fr: 'Film 35mm', es: 'Película 35mm', ko: '35mm 필름', zh: '35mm胶片' },
    tooltip: {
      ar: 'الفيلم التناظري الكلاسيكي الذي صنعت عليه معظم أفلام القرن العشرين. يضيف حبيبات عضوية دافئة ونعومة رومانسية غير قابلة للتكرار رقمياً. الفارق الأكثر وضوحاً في الإحساس السينمائي الحقيقي.',
      en: 'The analog film used in most 20th century cinema. Adds organic warm grain and romantic softness impossible to fully replicate digitally — the gold standard of cinematic texture.',
      fr: 'La pellicule argentique utilisée dans la plupart des films du XXe siècle. Ajoute un grain chaud organique et une douceur romantique impossibles à reproduire numériquement — la référence de la texture cinéma.',
      es: 'La película analógica utilizada en la mayor parte del cine del siglo XX. Añade un grano cálido orgánico y una suavidad romántica imposibles de replicar digitalmente: el estándar de oro de la textura cinematográfica.',
      ko: '20세기 영화 대부분에 사용된 아날로그 필름. 디지털로는 완전히 재현할 수 없는 유기적이고 따뜻한 그레인과 낭만적인 부드러움을 더해주는 시네마틱 질감의 기준입니다.',
      zh: '20世纪大多数电影所采用的模拟胶片。增添了数字化难以完全复刻的有机构色温颗粒与浪漫柔和感，堪称电影画面质感金科玉律。'
    },
    desc: { ar: 'فيلم حقيقي 35mm', en: 'Analog 35mm', fr: 'Argentique 35mm', es: 'Analógico 35mm', ko: '아날로그 35mm', zh: '模拟35mm' }
  },
  '16mm Film': {
    name: { ar: 'فيلم مستقل', en: '16mm Film', fr: 'Film 16mm', es: 'Película 16mm', ko: '16mm 필름', zh: '16mm胶片' },
    tooltip: {
      ar: 'فيلم أصغر وأكثر خشونة من 35mm. يمنح حبيبات مرئية وملمساً خاماً وثائقياً ومشاعر أكثر عفوية وصدقاً. استُخدم كثيراً في أفلام دارين أرونوفسكي وميلاد جنكيس.',
      en: 'Smaller and grainier than 35mm. Delivers visible grain, raw documentary texture, and a visceral intimacy — famously used in Darren Aronofsky\'s gritty psychological films.',
      fr: 'Plus petit et plus granuleux que le 35mm. Offre un grain visible, une texture brute de documentaire et une intimité viscérale — célèbre pour son utilisation dans les films psychologiques sombres et réalistes de Darren Aronofsky.',
      es: 'Más pequeño y granulado que el formato de 35mm. Ofrece un grano visible, una textura documental cruda y una intimidad visceral, famosamente utilizado en las descarnadas películas psicológicas de Darren Aronofsky.',
      ko: '35mm보다 작고 입자감이 강한 필름. 눈에 보이는 그레인, 거친 다큐멘터리 질감, 그리고 본능적인 친밀감을 선사하며, 대런 아로노프스키의 거칠고 심리적인 영화들에 사용된 것으로 유명합니다.',
      zh: '比 35mm 更小且颗粒感更强。带来可见的胶片颗粒、粗犷的纪录片质感和直击心灵的亲密感——在达伦·阿伦诺夫斯基粗粝的心理电影中有着著名的应用。'
    },
    desc: { ar: 'فيلم مستقل', en: 'Indie 16mm', fr: 'Indé 16mm', es: 'Indie 16mm', ko: '인디 16mm', zh: '独立16mm' }
  },
  'IMAX 70mm': {
    name: { ar: 'آيماكس سينمائي', en: 'IMAX 70mm', fr: 'IMAX 70mm', es: 'IMAX 70mm', ko: '아이맥스 70mm', zh: 'IMAX 70mm' },
    tooltip: {
      ar: 'أكبر فورمات فيلم سينمائي على الإطلاق. يمنح وضوحاً وعمقاً وحضوراً بصرياً هائلاً. فيلم الإطار الواحد يكشف تفاصيل لا حصر لها. كريستوفر نولان يعتبره أنقى وسيط سينمائي.',
      en: 'The largest film format ever made. Delivers unrivaled resolution, depth, and visual presence — Christopher Nolan\'s preferred format for maximum cinematic immersion and impact.',
      fr: 'Le plus grand format de pellicule jamais créé. Offre une résolution, une profondeur et une présence visuelle inégalées — le format préféré de Christopher Nolan pour une immersion et un impact cinématographiques maximaux.',
      es: 'El formato de película más grande jamás creado. Ofrece una resolución, profundidad y presencia visual incomparables: el formato preferido de Christopher Nolan para lograr la máxima inmersión e impacto cinematográfico.',
      ko: '역대 가장 큰 필름 포맷. 타의 추종을 불허하는 해상도, 깊이감, 시각적 존재감을 제공하며, 극대화된 영화적 몰입감과 충격을 주기 위한 크리스토퍼 놀란 감독의 최선호 포맷입니다.',
      zh: '有史以来最大的胶片格式。提供无与伦比的分辨率、深度和视觉临场感——是克里斯托弗·诺兰最偏爱的格式，旨在实现极致 of 电影沉浸感与震撼力。'
    },
    desc: { ar: 'آيماكس سينمائي', en: 'IMAX epic', fr: 'IMAX épique', es: 'IMAX épico', ko: '아이맥스 에픽', zh: 'IMAX史诗' }
  },
  'Super 8 Film': {
    name: { ar: 'نوستالجيا قديم', en: 'Super 8 Film', fr: 'Film Super 8', es: 'Película Super 8', ko: '슈퍼 8 필름', zh: 'Super 8 胶片' },
    tooltip: {
      ar: 'تنسيق الأفلام المنزلية التناظرية من السبعينيات. يمنح حبيبات خشنة جداً وألواناً باهتة ومشبعة في آن واحد. مثالي لمشاهد الذاكرة والنوستالجيا والأجواء الحميمية.',
      en: 'The analog home movie format of the 70s. Delivers extremely coarse grain, washed colors, and a raw intimacy — perfect for memory flashbacks and nostalgic emotional sequences.',
      fr: 'Le format de film amateur analogique des années 70. Offre un grain extrêmement grossier, des couleurs délavées et une intimité brute — parfait pour les flash-backs et les séquences nostalgiques.',
      es: 'El formato de película casera analógica de los años 70. Ofrece un grano extremadamente grueso, colores lavados y una intimidad cruda; perfecto para analepsis (flashbacks) de recuerdos y secuencias emocionales nostálgicas.',
      ko: '50년대 아날로그 홈 무비 포맷. 매우 거친 그레인, 바랜 색감, 가공되지 않은 친밀감을 선사하여 기억 회상이나 향수를 불러일으키는 감정적 장면에 완벽합니다.',
      zh: '70年代的模拟家庭电影格式。带来极其粗糙的颗粒、冲淡的色彩与质朴的亲切感，非常适合回忆闪回和充满怀旧情绪的片段。'
    },
    desc: { ar: 'نوستالجيا قديم', en: 'Retro Super 8', fr: 'Super 8 rétro', es: 'Super 8 retro', ko: '레트로 슈퍼 8', zh: '复古Super 8' }
  },
  'Anamorphic': {
    name: { ar: 'أنامورفيك', en: 'Anamorphic', fr: 'Anamorphique', es: 'Anamórfico', ko: '아나모픽', zh: '变形宽银幕' },
    tooltip: {
      ar: 'العدسة التي تعطي الفلير الأفقي الشهير في أفلام J.J. Abrams وStar Wars. تضغط الصورة أفقياً ثم تمددها لتمنح بوكيه بيضاوي الشكل وخطوط ضوء أفقية فريدة وجمالاً سينمائياً نقياً.',
      en: 'The lens responsible for those iconic horizontal flares in Star Wars and J.J. Abrams films. Creates oval bokeh, horizontal light streaks, and a pure widescreen cinematic aesthetic.',
      fr: 'L\'objectif à l\'origine de ces reflets horizontaux emblématiques dans Star Wars et les films de J.J. Abrams. Crée un bokeh ovale, des traînées lumineuses horizontales et une esthétique cinématographique grand écran pure.',
      es: 'La lente responsable de esos icónicos destellos horizontales en Star Wars y las películas de J.J. Abrams. Crea un bokeh ovalado, rayas de luz horizontales y una estética cinematográfica pura de pantalla ancha.',
      ko: '스타워즈와 J.J. 에이브람스 영화의 상징적인 가로형 플레어를 만드는 렌즈. 타원형 보케, 가로 광선 스트리크, 순수한 와이드스크린 시네마틱 미학을 자아냅니다.',
      zh: '在《星球大战》与 J.J. 艾布拉姆斯电影中创造标志性横向眩光的镜头。能够产生椭圆形焦外、横向拉丝光束以及纯粹的宽银幕级画幅美感。'
    },
    desc: { ar: 'لفلير أفقي', en: 'Scope look', fr: 'Rendu cinéma scope', es: 'Aspecto cinemascope', ko: '아나모픽 스코프', zh: '拉丝眩光' }
  },
  'Spherical Prime': {
    name: { ar: 'كروي احترافي', en: 'Spherical Prime', fr: 'Sphérique Prime', es: 'Esférico Prime', ko: '스페리컬 단렌즈', zh: '球面定焦镜' },
    tooltip: {
      ar: 'العدسة الكروية التقليدية ذات البعد البؤري الثابت. تمنح صورة نقية وحادة بدون تشويهات بصرية. الاختيار الأمثل عندما تريد أن يكون اهتمام المشاهد على المحتوى لا على التقنية.',
      en: 'Traditional fixed-focal spherical lens. Delivers a clean, sharp, distortion-free image — the ideal choice when you want content and acting to take center stage without optical distractions.',
      fr: 'Objectif sphérique traditionnel à focale fixe. Offre une image propre, nette et sans distorsion — le choix idéal lorsque vous voulez que le scénario et le jeu d\'acteur soient au premier plan, sans distractions optiques.',
      es: 'Lente esférica de distancia focal fija tradicional. Ofrece una imagen limpia, nítida y libre de distorsiones: la elección ideal cuando se desea que el contenido y la actuación sean los protagonistas, sin distracciones ópticas.',
      ko: '전통적인 고정 초점 스페리컬 렌즈. 왜곡 없는 깔끔하고 선명한 이미지를 구현하여, 광학적 시선 분산 없이 인물의 연기와 서사에만 온전히 집중하고 싶을 때 최적의 선택입니다.',
      zh: '传统的固定焦距球面镜头。呈现出干净、锐利且无畸变的画面——当您希望故事内容 and 演员表演成为核心，不受任何光学干扰时的理想之选。'
    },
    desc: { ar: 'حاد محايد', en: 'Clean sharp', fr: 'Propre et net', es: 'Limpio y nítido', ko: '깔끔하고 선명함', zh: '清晰锐利' }
  },
  'Fisheye': {
    name: { ar: 'عين السمكة', en: 'Fisheye', fr: 'Fisheye', es: 'Ojo de pez', ko: '어글렌즈 (Fisheye)', zh: '鱼眼镜头' },
    tooltip: {
      ar: 'عدسة تلتقط زاوية رؤية 180 درجة مع تشويه كروي مبالغ فيه. تمنح إحساساً بالتحرر الجنوني والطاقة الفوضوية. شائعة في مقاطع الرياضة المتطرفة والفيديو كليبات والأجواء السيريالية.',
      en: 'Captures a 180° field of view with extreme spherical distortion. Creates a sense of wild, chaotic energy — popular in extreme sports footage, music videos, and surreal sequences.',
      fr: 'Capture un champ de vision de 180° avec une distorsion sphérique extrême. Crée un sentiment d\'énergie sauvage et chaotique — populaire dans les vidéos de sports extrêmes, les clips musicaux et les séquences surréalistes.',
      es: 'Captura un campo de visión de 180° con una distorsión esférica extrema. Crea una sensación de energía salvaje y caótica, popular en videos de deportes extremos, videos musicales y secuencias surrealistas.',
      ko: '극단적인 구면 왜곡과 함께 180도 화각을 담아냅니다. 거칠고 혼란스러운 에너지를 표현하여 익스트림 스포츠 영상, 뮤직비디오, 초현실적인 장면에 자주 쓰입니다.',
      zh: '以极限球面畸变捕捉 180° 的超宽视野。营造出一种狂野、混乱的能量感——在极限运动视频、音乐录影带和超现实片段中备受推崇。'
    },
    desc: { ar: 'تشويه متطرف', en: 'Extreme distortion', fr: 'Distorsion extrême', es: 'Distorsión extrema', ko: '극단적 왜곡', zh: '极限畸变' }
  },
  'Macro': {
    name: { ar: 'ماكرو', en: 'Macro', fr: 'Macro', es: 'Macro', ko: '매크로', zh: '微距镜头' },
    tooltip: {
      ar: 'عدسة مصممة للتصوير على مسافات فائقة القرب. تكشف تفاصيل مذهلة لا يراها العين المجردة: خلايا النبات، ملمس الجلد، عيون الحشرات. تحول العالم الصغير إلى مشهد ضخم.',
      en: 'Designed for extreme close-up photography. Reveals microscopic details invisible to the naked eye — plant cells, skin texture, insect eyes. Transforms the miniature world into an epic landscape.',
      fr: 'Conçu pour la photographie en très gros plan. Révèle des détails microscopiques invisibles à l\'œil nu — cellules végétales, texture de la peau, yeux d\'insectes. Transforme le monde miniature en un paysage épique.',
      es: 'Diseñada para fotografía de primer plano extremo. Revela detalles microscópicos invisibles a simple vista: células de plantas, textura de la piel, ojos de insectos. Transforma el mundo miniatura en un paisaje épico.',
      ko: '극단적인 접사 촬영을 위해 설계된 렌즈. 식물 세포, 피부 질감, 곤충의 눈 등 육안으로 볼 수 없는 미세한 세부 사항을 드러내며 미시 세계를 거대한 대하 서사처럼 변모시킵니다.',
      zh: '专为超近距离微距摄影设计。展现出肉眼无法察觉的微观细节——植物细胞、皮肤纹理、昆虫眼睛。将微观世界转化为宏大史诗般的视觉景观。'
    },
    desc: { ar: 'تفاصيل دقيقة', en: 'Close-up detail', fr: 'Détails de près', es: 'Detalle de cerca', ko: '접사 디테일', zh: '微观细节' }
  },
  'Tilt-Shift': {
    name: { ar: 'إمالة بؤرية', en: 'Tilt-Shift', fr: 'Tilt-Shift', es: 'Tilt-Shift', ko: '틸트 시프트', zh: '移轴镜头' },
    tooltip: {
      ar: 'عدسة تُمكّن من إمالة مستوى التركيز بشكل مستقل عن مستوى الكاميرا. تُستخدم لخلق تأثير الديوراما (المجسم المصغر) الذي يجعل الأماكن الحقيقية تبدو كنماذج مصغرة، أو لتحقيق حدة انتقائية درامية.',
      en: 'Allows independent tilt of the focus plane. Used for the famous diorama/miniature effect making real locations look like scale models, or for extreme selective focus on a narrow focal plane.',
      fr: 'Permet d\'incliner le plan de mise au point indépendamment. Utilisé pour le célèbre effet diorama/miniature qui donne aux lieux réels l\'aspect de modèles réduits, ou pour une mise au point sélective extrême sur un plan focal étroit.',
      es: 'Permite la inclinación independiente del plano de enfoque. Se utiliza para el famoso efecto diorama/miniatura que hace que ubicaciones reales parezcan modelos a escala, o para un enfoque selectivo extremo en un plano focal estrecho.',
      ko: '초점 평면을 카메라 바디와 독립적으로 기울일 수 있는 렌즈. 실제 장소를 모형처럼 보이게 만드는 유명한 디오라마/미니어처 효과나, 좁은 초점 영역에 극도로 한정된 선택적 포커싱을 위해 사용됩니다.',
      zh: '允许对焦平面进行独立的倾斜调整。常用于著名的沙盘/微缩模型特效（令真实场景呈现如比例模型般质感），或在极窄 of 焦平面上实现精准的选择性对焦。'
    },
    desc: { ar: 'مسرح مصغر', en: 'Miniature effect', fr: 'Effet miniature', es: 'Efecto miniatura', ko: '미니어처 효과', zh: '微缩景观' }
  },
  'Extreme Wide': {
    name: { ar: 'واسع جداً 14-18mm', en: 'Extreme Wide', fr: 'Très grand angle', es: 'Gran angular extremo', ko: '초광각 14-18mm', zh: '超广角 14-18mm' },
    tooltip: {
      ar: 'زاوية رؤية فائقة الاتساع تجعل الأشياء القريبة تبدو أكبر بكثير والخلفية أبعد بكثير. تعطي إحساساً بالاتساع الهائل والبعد الملحمي. شائعة في مشاهد الصحاري والفضاء والمعمار الضخم.',
      en: 'Extremely wide viewing angle that makes nearby objects appear massive while pushing backgrounds far away. Creates an epic sense of vast space — common in desert, space, and architectural epics.',
      fr: 'Angle de champ extrêmement large qui fait paraître les objets proches gigantesques tout en repoussant l\'arrière-plan très loin. Crée une sensation épique d\'espace infini — fréquent dans les films sur le désert, l\'espace et l\'architecture grandiose.',
      es: 'Ángulo de visión extremadamente amplio que hace que los objetos cercanos parezcan enormes mientras aleja los fondos. Crea una sensación épica de espacio vasto, común en epopeyas de desiertos, el espacio y la arquitectura.',
      ko: '가까운 물체는 거대하게 보이게 하고 배경은 멀리 밀어내는 초광각 화각. 사막, 우주, 대형 건축 서사 극에서 자주 쓰이는 광활한 공간의 대서사적 스케일을 창조합니다.',
      zh: '极宽的透视视角，令近处物体显得极其庞大，同时将背景无限拉远。营造出宏大开阔的空间感——常见于荒漠、太空以及宏伟建筑史诗题材影片。'
    },
    desc: { ar: 'جداً واسع', en: 'Ultra wide', fr: 'Ultra large', es: 'Ultra gran angular', ko: '초광각', zh: '超广角' }
  },
  'Wide Angle': {
    name: { ar: 'واسع 24-28mm', en: 'Wide Angle', fr: 'Grand angle', es: 'Gran angular', ko: '광각 24-28mm', zh: '广角 24-28mm' },
    tooltip: {
      ar: 'البعد البؤري الأوسع الأكثر استخداماً في السينما. يتيح تضمين الشخصية في بيئتها بالكامل مع الحفاظ على وضوح بصري طبيعي. مثالي لمشاهد التأسيس وكشف البيئة.',
      en: 'The most-used wide focal length in cinema. Allows the character to be shown within their full environment while maintaining natural visual clarity — perfect for establishing shots and world-building.',
      fr: 'La focale large la plus utilisée au cinéma. Permet de situer le personnage dans son environnement complet tout en conservant une clarté visuelle naturelle — idéale pour les plans d\'ensemble et la création d\'univers.',
      es: 'La distancia focal gran angular más utilizada en el cine. Permite mostrar al personaje dentro de todo su entorno mientras mantiene una claridad visual natural, perfecta para planos de situación y construcción de mundos.',
      ko: '영화 촬영에서 가장 널리 쓰이는 광각 초점 거리. 인물을 주변 환경 전체와 함께 자연스러운 시각적 명료함 속에서 보여주어 상황 설정 샷 및 세계관 구축에 완벽합니다.',
      zh: '电影创作中最常用的广角焦距。在保持自然视觉清晰度的同时，让角色与所处环境融为一体——非常适合环境交代镜头和建构宏观场景。'
    },
    desc: { ar: 'واسع عادي', en: 'Wide standard', fr: 'Large standard', es: 'Gran angular estándar', ko: '표준 광각', zh: '标准广角' }
  },
  '50mm Normal': {
    name: { ar: '50mm', en: '50mm Normal', fr: '50mm standard', es: '50mm estándar', ko: '50mm 표준', zh: '50mm标准' },
    tooltip: {
      ar: 'يُعدّ البعد البؤري الأقرب لزاوية رؤية العين البشرية الطبيعية. لا يضغط ولا يُشوّه المنظور. يمنح الصورة قراءة محايدة وطبيعية تشعر المشاهد بأنه موجود داخل المشهد كما هو في الحياة.',
      en: 'Closest to the natural human eye\'s field of view. Neither compresses nor distorts perspective — delivers a neutral, life-like image that makes the viewer feel present within the scene.',
      fr: 'Le plus proche du champ de vision naturel de l\'œil humain. Ne comprime ni ne déforme la perspective — offre une image neutre et réaliste qui donne au spectateur l\'impression d\'être présent dans la scène.',
      es: 'El más cercano al campo de visión del ojo humano natural. No comprime ni distorsiona la perspectiva: ofrece una imagen neutra y realista que hace que el espectador se sientan presente dentro de la escena.',
      ko: '인간의 실제 안구 시야각과 가장 유사한 화각. 왜곡이나 압축 없이 원근감을 그대로 유지하여, 마치 관객이 실제 씬 내부에 존재하는 듯한 중립적이고 사실적인 이미지를 제공합니다.',
      zh: '最接近人类肉眼自然视野的焦距。既不压缩也不扭曲透视关系——呈现出中性、逼真的画面，让观众产生身临其境的感觉。'
    },
    desc: { ar: 'مثل العين', en: 'Human eye', fr: 'Perspective humaine', es: 'Perspectiva humana', ko: '사람 시야', zh: '人眼视角' }
  },
  'Portrait 85mm': {
    name: { ar: 'بورتريه 85mm', en: 'Portrait 85mm', fr: 'Portrait 85mm', es: 'Retrato 85mm', ko: '인물 85mm', zh: '人像 85mm' },
    tooltip: {
      ar: 'البعد البؤري المثالي لتصوير الوجوه والبورتريه السينمائي. يضغط الملامح بشكل خفيف يجعلها أجمل وأكثر تناسقاً، مع عزل الشخصية عن الخلفية ببوكيه كريمي ناعم.',
      en: 'The ideal focal length for cinematic portrait and face work. Slightly flatters facial proportions while naturally separating the subject from the background with beautifully creamy bokeh.',
      fr: 'La focale idéale pour le portrait cinéma et les gros plans de visages. Flatte légèrement les proportions du visage tout en séparant naturellement le sujet de l\'arrière-plan avec un bokeh magnifique et crémeux.',
      es: 'La distancia focal ideal para el retrato cinematográfico y el trabajo facial. Favorece ligeramente las proporciones faciales mientras separa de manera natural al sujeto del fondo con un bokeh hermosamente cremoso.',
      ko: '시네마틱 인물 및 얼굴 촬영을 위한 최고의 초점 거리. 얼굴 비율을 약간 다듬어 보기 좋게 표현하면서, 유려하고 크리미한 보케를 활용해 배경에서 인물을 자연스럽게 분리합니다.',
      zh: '电影人像及面部特写拍摄的理想焦距。在轻微美化五官比例的同时，通过柔滑如奶油般的焦外成像将主体与背景自然分离开来。'
    },
    desc: { ar: 'بورتريه مثالي', en: 'Perfect portrait', fr: 'Portrait idéal', es: 'Retrato ideal', ko: '완벽한 인물 촬영', zh: '完美人像' }
  },
  '135mm Telephoto': {
    name: { ar: 'تلسكوبي 135mm', en: '135mm Telephoto', fr: 'Téléobjectif 135mm', es: 'Teleobjetivo 135mm', ko: '망원 135mm', zh: '135mm长焦' },
    tooltip: {
      ar: 'البعد البؤري التلسكوبي المتوسط. يضغط المسافة بين المقدمة والخلفية بشكل ملحوظ، مما يجعل العناصر البعيدة تبدو أقرب وأكبر. يمنح الصورة كثافة بصرية واحتشاداً يُشعر المشاهد بالضيق أو الجاذبية.',
      en: 'Medium telephoto that significantly compresses the distance between foreground and background — making distant elements appear closer and larger, creating visual density and a sense of crowding or magnetism.',
      fr: 'Téléobjectif moyen qui comprime considérablement la distance entre l\'premier plan et l\'arrière-plan — rendant les éléments éloignés plus proches et plus grands, créant une densité visuelle et une impression d\'entassement ou d\'attraction.',
      es: 'Teleobjetivo medio que comprime significativamente la distancia entre el primer plano y el fondo, haciendo que los elementos lejanos parezcan más cercanos y grandes, lo que genera densidad visual y una sensación de acumulación o magnetismo.',
      ko: '전경과 배경 사이의 거리를 크게 압축하는 준망원 렌즈. 먼 거리에 있는 요소를 가깝고 거대하게 보이게 하여 시각적인 밀도를 높이고, 밀집도나 묘한 인력의 긴장감을 연출합니다.',
      zh: '中长焦镜头，能够显著压缩前景与背景之间的空间距离——使远处的元素显得更近、更大，从而营造出视觉上的紧密感、拥挤感或某种张力磁场。'
    },
    desc: { ar: 'ضغط الخلفية', en: 'Background compress', fr: 'Compression d’arrière-plan', es: 'Compresión de fondo', ko: '배경 압축', zh: '空间压缩' }
  },
  'f/1.2': {
    name: { ar: 'f/1.2 بوكيه قوي', en: 'f/1.2', fr: 'f/1.2', es: 'f/1.2', ko: 'f/1.2', zh: 'f/1.2' },
    tooltip: {
      ar: 'أقصى فتحة عدسة ممكنة. تخلق عزلاً شبه تام للموضوع عن الخلفية التي تذوب في ضبابية حالمة لا مثيل لها. الموضوع الرئيسي يبدو محلقاً في فضاء بصري سحري منفصل عن العالم خلفه.',
      en: 'Maximum aperture opening possible. Creates near-total subject isolation as the background dissolves into a dreamlike creamy haze — the subject appears to float in a magical, ethereal visual space.',
      fr: 'Ouverture maximale possible. Crée un isolement presque total du sujet tandis que l\'arrière-plan se dissout dans une brume crémeuse onirique — le sujet semble flotter dans un espace visuel magique et éthéré.',
      es: 'La máxima apertura de diafragma posible. Crea un aislamiento casi total del sujeto mientras el fondo se disuelve en una neblina cremosa de ensueño; el sujeto parece flotar en un espacio visual mágico y etéreo.',
      ko: '구현 가능한 최대의 조리개 개방 값. 배경이 몽환적이고 크리미한 안개 속으로 녹아내리며 인물을 거의 완벽하게 격리시킵니다. 피사체가 신비롭고 영묘한 시각 공간에 떠 있는 것처럼 보입니다.',
      zh: '所能达到的最大光圈。通过将背景完全消融在梦幻般的奶油虚化中，实现接近极致的主体分离——使主体仿佛悬浮在魔法般空灵的视觉空间里。'
    },
    desc: { ar: 'بوكيه حلم', en: 'Dream bokeh', fr: 'Flou artistique onirique', es: 'Desenfoque de ensueño', ko: '몽환적인 보케', zh: '梦幻虚化' }
  },
  'f/1.4': {
    name: { ar: 'f/1.4 بوكيه ناعم', en: 'f/1.4', fr: 'f/1.4', es: 'f/1.4', ko: 'f/1.4', zh: 'f/1.4' },
    tooltip: {
      ar: 'فتحة واسعة تُنتج بوكيه ناعماً وكريمياً مع الحفاظ على حدة معقولة للشخصية الرئيسية. الاختيار الأكثر شيوعاً في أفلام الدراما والرومانسية لتحقيق التوازن المثالي بين الحدة والعزل البصري الرقيق.',
      en: 'Wide aperture producing silky smooth bokeh while maintaining reasonable subject sharpness. The most popular choice in drama and romance for that perfect balance of sharp subject and gentle background isolation.',
      fr: 'Grande ouverture produisant un bokeh soyeux et fluide tout en conservant une netteté raisonnable du sujet. Le choix le plus populaire dans les drames et romances pour son équilibre parfait entre netteté et doux détachement de l\'arrière-plan.',
      es: 'Gran apertura que produce un bokeh suave y sedoso mientras mantiene una nitidez razonable en el sujeto. La opción más popular en dramas y romances por su equilibrio perfecto entre sujeto nítido y suave aislamiento del fondo.',
      ko: '피사체의 선명도를 합리적으로 유지하면서 부드러운 보케를 생성하는 대구경 조리개. 날카로운 피사체 표현과 부드러운 배경 분리의 조화로 드라마나 로맨스 장르에서 가장 선호되는 수치입니다.',
      zh: '大光圈，在保持主体合理锐度的同时，产生如丝般顺滑的焦外成像。在剧情片与爱情片中备受青睐，完美兼顾了锐利焦点与温柔的背景剥离。'
    },
    desc: { ar: 'بوكيه ناعم', en: 'Creamy bokeh', fr: 'Flou crémeux', es: 'Desenfoque suave', ko: '부드러운 보케', zh: '奶油虚化' }
  },
  'f/2.8': {
    name: { ar: 'f/2.8 متوازن', en: 'f/2.8', fr: 'f/2.8', es: 'f/2.8', ko: 'f/2.8', zh: 'f/2.8' },
    tooltip: {
      ar: 'الفتحة المتوازنة بامتياز. توفر بوكيه معتدلاً مع وضوح كافٍ للبيئة المحيطة. مثالية عندما تريد عزل الشخصية دون إخفاء السياق البيئي بالكامل. خيار عملي لمعظم مشاهد الدراما والمقابلات.',
      en: 'The balanced professional aperture. Provides moderate bokeh with enough environmental clarity — ideal when you want subject isolation without fully losing the contextual background in interviews and drama.',
      fr: 'L\'ouverture professionnelle équilibrée. Offre un bokeh modéré avec suffisamment de clarté environnementale — idéal pour isoler le sujet sans perdre complètement le contexte de l\'arrière-plan dans les interviews et les drames.',
      es: 'La apertura profesional equilibrada. Proporciona un bokeh moderado con suficiente claridad ambiental; ideal cuando se desea aislar al sujeto sin perder por completo el fondo contextual en entrevistas y dramas.',
      ko: '균형 잡힌 전문가용 조리개. 적당한 보케와 충분한 환경적 명료함을 동시 지원하여, 인터뷰나 드라마에서 상황적 배경을 완전히 잃지 않으면서 인물을 돋보이게 하고 싶을 때 완벽합니다.',
      zh: '兼顾虚实的专业光圈值。提供适度的背景虚化和足够的环境清晰度——适用于访谈与剧情片中既要突出主体，又不想彻底丢失背景环境信息的情况。'
    },
    desc: { ar: 'متوازن', en: 'Balanced', fr: 'Équilibré', es: 'Equilibrado', ko: '균형 잡힘', zh: '虚实适中' }
  },
  'f/8 Deep Focus': {
    name: { ar: 'f/8 حاد كلي', en: 'f/8 Deep Focus', fr: 'f/8 Grande profondeur', es: 'f/8 Foco profundo', ko: 'f/8 팬포커스', zh: 'f/8全景深' },
    tooltip: {
      ar: 'فتحة صغيرة تجعل كل عناصر المشهد — من المقدمة إلى أقصى خلفية — حادة ومفصلة تماماً. أسلوب أورسون ويلز الأشهر الذي يتيح للمشاهد اختيار ما يركز عليه بنفسه داخل الكادر الغني بالتفاصيل.',
      en: 'Small aperture making everything from foreground to far background razor sharp. Orson Welles\' signature style — allows viewers to choose their own focal point within a frame rich with simultaneous detail.',
      fr: 'Petite ouverture rendant tout, du premier plan à l\'arrière-plan lointain, d\'une netteté absolue. Le style signature d\'Orson Welles — permet aux spectateurs de choisir leur propre point focal au sein d\'un cadre riche en détails simultanés.',
      es: 'Abertura pequeña que hace que todo, desde el primer plano hasta el fondo lejano, sea extremadamente nítido. El estilo característico de Orson Welles: permite a los espectadores elegir su propio punto de enfoque dentro de un encuadre rico en detalles simultáneos.',
      ko: '전경부터 원경까지 모든 요소를 칼날처럼 선명하게 표현하는 좁은 조리개 값. 오슨 웰스 감독의 시그니처 스타일로, 풍부한 세부 묘사가 가득 찬 프레임 안에서 관객이 스스로 초점을 선택하여 감상할 수 있게 합니다.',
      zh: '小光圈设计，使从前景到远景的每一个元素都清晰无比。奥逊·威尔斯的标志性风格——允许观众在富含丰富细节的画面中自主选择视觉焦点。'
    },
    desc: { ar: 'كل شيء حاد', en: 'All sharp', fr: 'Tout est net', es: 'Todo nítido', ko: '모두 선명함', zh: '全局清晰' }
  },
  'Deep Focus / Infinite Depth': {
    name: { ar: 'تركيز عميق لانهائي', en: 'Deep Focus / Infinite Depth', fr: 'Grande profondeur de champ / Profondeur infinie', es: 'Profundidad de campo infinita / Enfoque profundo', ko: '딥 포커스 / 무한 심도', zh: '深焦 / 无限景深' },
    tooltip: {
      ar: 'يجعل كل عناصر المشهد من المقدمة إلى أقصى الخلفية حادة ومفصلة تماماً لتعزيز السياق البيئي.',
      en: 'Renders foreground to extreme background entirely sharp to maximize environmental context.',
      fr: 'Rend le premier plan et l\'arrière-plan le plus lointain entièrement nets pour maximiser le contexte environnemental.',
      es: 'Renderiza desde el primer plano hasta el fondo más extremo con total nitidez para maximizar el contexto ambiental.',
      ko: '전경부터 극단적인 배경까지 모두 선명하게 표현하여 주변 환경의 맥락을 극대화합니다.',
      zh: '使前景到极远背景的画面保持完全清晰，以最大化环境上下文。'
    },
    desc: { ar: 'وضوح تام للخلفية العميقة', en: 'Sharp infinite focus', fr: 'Mise au point nette et infinie', es: 'Enfoque nítido e infinito', ko: '선명한 무한 초점', zh: '清晰的无限对焦' }
  },
  'Razor-Thin DOF / Extreme Bokeh': {
    name: { ar: 'عزل شديد (Bokeh)', en: 'Razor-Thin DOF / Extreme Bokeh', fr: 'Profondeur de champ ultra-courte / Bokeh extrême', es: 'Profundidad de campo extremadamente reducida / Bokeh extremo', ko: '극도로 얕은 심도 / 익스트림 보케', zh: '极浅景深 / 极致散景' },
    tooltip: {
      ar: 'يعزل الشخصية أو العنصر المستهدف تماماً بضبابية خلفية ساحرة لتركيز الانتباه العاطفي.',
      en: 'Isolates the subject entirely with creamy background bokeh for intense emotional focus.',
      fr: 'Isole complètement le sujet avec un bokeh d\'arrière-plan crémeux pour une mise au point émotionnelle intense.',
      es: 'Aísla por completo al sujeto con un suave y cremoso bokeh de fondo para lograr un enfoque emocional intenso.',
      ko: '부드럽고 크리미한 배경 보케로 피사체를 완전히 분리하여 강렬한 감정적 초점을 만듭니다.',
      zh: '通过柔和细腻的背景散景将主体完全孤立，以营造强烈的情感焦点。'
    },
    desc: { ar: 'عزل شديد مع تركيز دقيق', en: 'Extreme subject isolation', fr: 'Isolation extrême du sujet', es: 'Aislamiento extremo del sujeto', ko: '극단적인 피사체 분리', zh: '极端的主体孤立' }
  },
  'Split Diopter Effect': {
    name: { ar: 'انقسام البؤرة', en: 'Split Diopter Effect', fr: 'Effet double foyer (Split Diopter)', es: 'Efecto de dioptría dividida (Split Diopter)', ko: '스플릿 디옵터 효과', zh: '分焦镜效果' },
    tooltip: {
      ar: 'يخلق تركيزاً مزدوجاً سريالياً يجمع بين عنصر قريب جداً وخلفية بعيدة في نفس اللقطة الحادة.',
      en: 'Achieves a surreal dual focus on an extreme foreground object and distant background simultaneously.',
      fr: 'Permet une double mise au point surréaliste sur un objet au premier plan très proche et un arrière-plan lointain simultanément.',
      es: 'Logra un doble enfoque surrealista en un objeto en primer plano extremo y en un fondo lejano simultáneamente.',
      ko: '극단적인 전경의 피사체와 먼 배경의 피사체 모두에 동시에 초점을 맞추는 초현실적인 이중 초점을 구현합니다.',
      zh: '同时对极近的前景物体和遥远的背景实现超现实的双重对焦。'
    },
    desc: { ar: 'تركيز مزدوج سريالي', en: 'Surreal dual-focus', fr: 'Double mise au point surréaliste', es: 'Doble enfoque surrealista', ko: '초현실적인 이중 초점', zh: '超现实双重对焦' }
  },
  'Rack Focus / Focus Pull Simulation': {
    name: { ar: 'محاكاة سحب التركيز', en: 'Rack Focus / Focus Pull Simulation', fr: 'Simulation de bascule de point / Rack Focus', es: 'Simulación de cambio de enfoque / Rack Focus', ko: '랙 포커스 / 포커스 풀 시뮬레이션', zh: '拉焦 / 移焦模拟' },
    tooltip: {
      ar: 'يحاكي انتقال التركيز البصري ديناميكياً من عنصر لآخر لتوجيه عين المشاهد خلال السرد.',
      en: 'Simulates dynamic focus pulling between objects to lead viewer attention narratively.',
      fr: 'Simule une bascule de point dynamique entre les objets pour guider l\'attention du spectateur de manière narrative.',
      es: 'Simula un cambio de enfoque dinámico entre objetos para guiar la atención del espectador narrativamente.',
      ko: '피사체 간의 동적인 포커스 풀을 시뮬레이션하여 관객의 시선을 내러티브에 맞게 유도합니다.',
      zh: '模拟物体之间动态的拉焦过渡，以在叙事上引导观众的注意力。'
    },
    desc: { ar: 'محاكاة سحب التركيز البصري', en: 'Dynamic focus shift', fr: 'Déplacement dynamique de la mise au point', es: 'Cambio dinámico de enfoque', ko: '동적 초점 이동', zh: '动态焦点转移' }
  },
  'Extreme Close-Up': {
    name: { ar: 'لقطة قريبة جداً', en: 'Extreme Close-Up', fr: 'Très Gros Plan', es: 'Primerísimo Primer Plano', ko: '익스트림 클로즈업', zh: '特写/大特写' },
    tooltip: {
      ar: 'تقترب الكاميرا بشكل متطرف لتملأ الكادر بعيون شخصية أو تفصيل دقيق جداً كخيط أو قطرة ماء. تُصعّد التوتر وتجبر المشاهد على التركيز على لحظة أو شعور محدد بشكل لا مفر منه.',
      en: 'Camera moves in to fill the frame with a single eye, a drop of sweat, or a critical object. Escalates tension and forces the viewer to fixate on a specific emotion or detail unavoidably.',
      fr: 'La caméra s\'approche pour remplir le cadre avec un seul œil, une goutte de sueur ou un objet crucial. Intensifie la tension et force inévitablement le spectateur à se focaliser sur une émotion ou un détail précis.',
      es: 'La cámara se acerca para llenar el encuadre con un solo ojo, una gota de sudor o un objeto crucial. Aumenta la tensión y obliga al espectador a fijarse en una emoción o detalle específico de manera inevitable.',
      ko: '카메라가 피사체에 극단적으로 다가가 단 하나의 눈동자, 땀방울, 혹은 결정적인 소품으로 화면을 가득 채웁니다. 긴장감을 증폭시키며 관객이 특정 감정이나 디테일에 강제적으로 고정되게 만듭니다.',
      zh: '摄像机极度推近，用一只眼睛、一滴汗珠或某个关键道具占满整个画面。层层渲染紧张氛围，迫使观众无可回避地将视线锁死在特定的情感或细节上。'
    },
    desc: { ar: 'تفاصيل معظمة', en: 'ECU detail', fr: 'Détail ECU', es: 'Detalle extremo', ko: 'ECU 극대화', zh: '局部细节' }
  },
  'Close-Up': {
    name: { ar: 'لقطة قريبة', en: 'Close-Up', fr: 'Gros Plan', es: 'Primer Plano', ko: '클로즈업', zh: '近景/肖像特写' },
    tooltip: {
      ar: 'تملأ الوجه الكادر بالكامل لقراءة كل دقيقة من تعبيراته العاطفية. اللقطة الأقوى لتصوير المشاعر الإنسانية الداخلية والتحولات النفسية الدقيقة التي تصنع سينما حقيقية.',
      en: 'Fills the frame with the face to read every nuance of emotional expression. The most powerful tool for capturing inner human feelings — the cornerstone of truly emotive cinema.',
      fr: 'Remplit le cadre avec le visage pour lire chaque nuance d\'expression émotionnelle. L\'outil le plus puissant pour capturer les sentiments humains intérieurs — la pierre angulaire d\'un cinéma véritablement émouvant.',
      es: 'Llena el encuadre con el rostro para leer cada matiz de la expresión emocional. La herramienta más poderosa para capturar los sentimientos humanos internos: la piedra angular de un cine verdaderamente emotivo.',
      ko: '얼굴로 프레임을 가득 채워 모든 감정적 표현의 미세한 변화를 포착합니다. 인간 내부의 감정을 포착하는 가장 강력한 연출이자 진정성 있게 마음을 울리는 시네마의 초석입니다.',
      zh: '用面部占据几乎整个画面，以便捕捉每一个细微的情感变化。表达人类内心世界最强大的视觉工具——也是富有感染力的电影创作之基石。'
    },
    desc: { ar: 'وجه قريب', en: 'Close up', fr: 'Visage serré', es: 'Rostro cercano', ko: '인물 얼굴', zh: '面部细节' }
  },
  'Medium Shot': {
    name: { ar: 'لقطة متوسطة', en: 'Medium Shot', fr: 'Plan Moyen', es: 'Plano Medio', ko: '미디엄 샷', zh: '中景' },
    tooltip: {
      ar: 'تُظهر الشخصية من الخصر للأعلى. اللقطة الأساسية في معظم مشاهد الحوار والتفاعل البشري. توفر توازناً مثالياً بين قراءة تعبيرات الوجه ولغة الجسد والإيماءات في آن واحد.',
      en: 'Shows the character from waist up. The essential shot for dialogue and human interaction — strikes the perfect balance between reading facial expressions, body language, and gestures simultaneously.',
      fr: 'Montre le personnage de la taille vers le haut. Le plan essentiel pour le dialogue et l\'interaction humaine — offre un équilibre parfait en montrant simultanément les expressions du visage, le langage de corps et les gestes.',
      es: 'Muestra al personaje desde la cintura para arriba. El plano esencial para el diálogo y la interacción humana, logra el equilibrio perfecto entre la lectura de las expresiones faciales, el lenguaje corporal y los gestos simultáneamente.',
      ko: '인물의 허리 윗부분을 보여주는 샷. 대화와 상호작용 연출의 기본 샷으로, 얼굴 표정과 신체 언어, 그리고 제스처를 동시에 전달하는 균형이 뛰어납니다.',
      zh: '展示角色腰部以上的画面。对话与人物交互中必不可少的景别——在同时捕捉面部表情、肢体语言和手势动作之间实现了完美的平衡。'
    },
    desc: { ar: 'منتصف', en: 'Standard medium', fr: 'Standard moyen', es: 'Medio estándar', ko: '기본 바디 스케일', zh: '常规半身' }
  },
  'Wide Shot': {
    name: { ar: 'لقطة واسعة', en: 'Wide Shot', fr: 'Plan Large', es: 'Plano General', ko: '와이드 샷', zh: '全景/全景镜头' },
    tooltip: {
      ar: 'تُظهر الجسد بالكامل داخل بيئته. تُعرّف بالعلاقة المكانية للشخصية مع محيطها وتُحدد مدى قربها أو بُعدها من عناصر المشهد الأخرى. مثالية لمشاهد الحركة والدراما الجماعية.',
      en: 'Shows the full body within its environment. Defines the character\'s spatial relationship with the setting and establishes proximity to other scene elements — ideal for action and group drama sequences.',
      fr: 'Montre le corps entier dans son environnement. Définit la relation spatiale du personnage avec le décor et établit sa proximité avec les autres éléments de la scène — idéal pour les séquences d\'action et les drames de groupe.',
      es: 'Muestra el cuerpo completo dentro de su entorno. Define la relación espacial del personaje con el escenario y establece la proximidad con otros elementos de la escena, ideal para secuencias de acción y dramas grupales.',
      ko: '인물의 전신과 주변 환경을 함께 보여주는 샷. 캐릭터와 배경 간의 공간적 관계를 정의하고 다른 씬 요소들과의 거리를 설정하여, 액션 및 집단 드라마 시퀀스에 매우 적합합니다.',
      zh: '在所处环境中展现人物的全景。定义角色与环境的空间关系，并建立与场景中其他元素的邻近感——是动作和群体戏剧性场景的理想选择。'
    },
    desc: { ar: 'واسع كامل', en: 'Wide full body', fr: 'Plein pied large', es: 'Cuerpo entero ancho', ko: '전신과 주변 환경', zh: '全身构图' }
  },
  'Establishing Wide': {
    name: { ar: 'لقطة تأسيسية', en: 'Establishing Wide', fr: 'Plan d’Ensemble', es: 'Plano de Situación', ko: '익스트림 와이드 / 대하 샷', zh: '大全景/远景/远景交代' },
    tooltip: {
      ar: 'لقطة عريضة جداً لتعريف المكان والزمان في بداية المشهد أو الفيلم. تُخبر المشاهد أين وكيف وما هو الجو العام. تمنح إحساساً بالحجم والمقياس الملحمي للعالم الذي تدور فيه الأحداث.',
      en: 'Extremely wide shot to introduce location and time at scene or film start. Tells the viewer where, how, and what the overall atmosphere is — establishes epic scale and the world around the story.',
      fr: 'Plan extrêmement large pour introduire le lieu et l\'époque au début d\'une scène ou d\'un film. Indique au spectateur le lieu, le contexte et l\'atmosphère générale — établit une échelle épique et le monde qui entoure l\'histoire.',
      es: 'Plano extremadamente abierto para introducir la ubicación y el tiempo al inicio de una escena o película. Le dice al espectador dónde, cómo y cuál es la atmósfera general: establece una escala épica y el mundo que rodea la historia.',
      ko: '장면이나 영화 시작 시 위치와 시간을 소개하는 초광각 샷. 시청자에게 장소, 상황, 전반적인 분위기를 전달하며, 서사를 둘러싼 세계의 장엄한 규모를 설정합니다.',
      zh: '极远景镜头，用于在场景或电影开始时引入地点和时间。告诉观众故事发生的时间、地点以及整体氛围——奠定了宏大的史诗感 and 故事周遭的世界观。'
    },
    desc: { ar: 'تأسيسية', en: 'Establishing epic', fr: 'Échelle épique d’ensemble', es: 'Escala épica de situación', ko: '서사적 오프닝', zh: '交代环境史诗感' }
  },
  'Low Angle': {
    name: { ar: 'زاوية منخفضة', en: 'Low Angle', fr: 'Contre-plongée', es: 'Contrapicado', ko: '로우 앵글', zh: '仰拍/低角度' },
    tooltip: {
      ar: 'الكاميرا تنظر من الأسفل للأعلى نحو الشخصية. تجعلها تبدو قوية ومسيطرة وبطولية. مثالية لإظهار الشخصيات المهيمنة أو الأبطال في لحظات قوتهم والأشرار في ذروة سيطرتهم.',
      en: 'Camera looks upward at the subject, making them appear powerful, dominant, and heroic. Perfect for showcasing dominant characters and heroes at their peak strength, or villains at their most threatening.',
      fr: 'La caméra filme de bas en haut, rendant le sujet puissant, dominant et héroïque. Parfait pour mettre en valeur les personnages dominants et les héros au sommet de leur force, ou les antagonistes sous leur jour le plus menaçant.',
      es: 'La cámara apunta hacia arriba al sujeto, haciéndolo parecer poderoso, dominante y heroico. Perfecto para mostrar personajes dominantes y héroes en su momento de mayor fuerza, o villanos en su aspecto más amenazante.',
      ko: '카메라가 피사체를 아래에서 올려다보며 촬영하여 대상을 강력하고 지배적이며 영웅적으로 보이게 합니다. 지배적인 캐릭터와 영웅들의 절정기 힘을 보여주거나, 빌런의 가장 위협적인 순간을 묘사하기에 완벽합니다.',
      zh: '低角度镜头，镜头由下往上仰视主体，使其显得强大、具有支配地位且富有英雄色彩。非常适合展现处于力量巅峰的主导角色与主角，或最具威胁性的反派角色。'
    },
    desc: { ar: 'زاوية قوة', en: 'Heroic low', fr: 'Rendu héroïque bas', es: 'Heroico bajo', ko: '영웅적 앵글', zh: '英雄主义视角' }
  },
  'Dutch Angle': {
    name: { ar: 'زاوية هولندية', en: 'Dutch Angle', fr: 'Plan Décentré / Hollandais', es: 'Plano Holandés', ko: '더치 앵글', zh: '斜角镜头/倾斜构图' },
    tooltip: {
      ar: 'الكاميرا مائلة على محورها لخلق إحساس بعدم الاتزان والقلق والاضطراب النفسي. شائعة جداً في أفلام الرعب والتشويق والمشاهد التي تكشف أن شيئاً ما ليس على ما يرام في هذا العالم.',
      en: 'Camera tilted on its axis to create a sense of unease, imbalance, and psychological disturbance. Widely used in horror and thrillers to signal that something is fundamentally wrong with this world.',
      fr: 'Caméra inclinée sur son axe pour créer un sentiment de malaise, de déséquilibre et de trouble psychologique. Très utilisé dans l\'horreur et les thrillers pour signaler que quelque chose ne va pas du tout dans ce monde.',
      es: 'Cámara inclinada sobre su propio eje para crear una sensación de inquietud, desequilibrio y perturbación psicológica. Muy utilizada en el cine de terror y suspenso para señalar que algo anda fundamentalmente mal en este mundo.',
      ko: '카메라 축을 기울여 불안감, 불균형, 심리적 혼란을 조성하는 기법. 공포나 스릴러 영화에서 세상에 무언가 근본적인 문제가 생겼음을 암시하기 위해 널리 사용됩니다.',
      zh: '荷兰角镜头（倾斜镜头），相机绕其光轴旋转倾斜，以营造不安、失衡和心理扰动的氛围。广泛应用于恐怖片和惊悚片中，暗示这个世界发生了根本性的异常。'
    },
    desc: { ar: 'مائل توتر', en: 'Tilted unease', fr: 'Désorientation', es: 'Desorientación', ko: '불안정하고 비스듬함', zh: '画面倾斜以制造紧张' }
  },
  'Immense Scale': {
    name: { ar: 'حجم هائل (Immense)', en: 'Immense Scale', fr: 'Échelle immense', es: 'Escala inmensa', ko: '웅장한 스케일', zh: '极宏大尺度' },
    tooltip: {
      ar: 'يبرز ضآلة الشخصية أمام بيئة معمارية أو طبيعية هائلة للتأكيد على العظمة أو العزلة.',
      en: 'Dwarfs the character against massive structures to emphasize scale and isolation.',
      fr: 'Rend le personnage minuscule face à des structures massives pour accentuer l\'échelle et l\'isolement.',
      es: 'Empequeñece al personaje frente a estructuras masivas para enfatizar la escala y el aislamiento.',
      ko: '거대한 구조물 대비 캐릭터를 작게 표현하여 스케일과 고립감을 강조합니다.',
      zh: '使角色在宏大的结构衬托下显得渺小，以强调空间尺度与孤独感。'
    },
    desc: { ar: 'شخصية صغيرة بمشهد ضخم', en: 'Small subject vast scene', fr: 'Sujet minuscule, décor vaste', es: 'Sujeto pequeño en escena vasta', ko: '거대한 장면 속 작은 피사체', zh: '宏大场景中的微小主体' }
  },
  'Extreme Close-up / Macro': {
    name: { ar: 'ماكرو مقرب جداً', en: 'Extreme Close-up / Macro', fr: 'Très gros plan / Macro', es: 'Primerísimo primer plano / Macro', ko: '익스트림 클로즈업 / 매크로', zh: '特写 / 微距' },
    tooltip: {
      ar: 'يملأ الإطار بتفاصيل الوجه أو الملامح الدقيقة لتعزيز الحميمية العاطفية الفائقة.',
      en: 'Fills the screen with microscopic texture clarity to maximize emotional intimacy.',
      fr: 'Remplit l\'écran avec une clarté de texture microscopique pour maximiser l\'intimité émotionnelle.',
      es: 'Llena la pantalla con una claridad de textura microscópica para maximizar la intimidad emocional.',
      ko: '미세한 질감의 선명함으로 화면을 가득 채워 감정적 친밀감을 극대화합니다.',
      zh: '以微观质感的清晰度填满屏幕，以最大化情感的亲密共鸣。'
    },
    desc: { ar: 'مشاعر وتفاصيل دقيقة', en: 'Emotional intimacy detail', fr: 'Détails d\'intimité émotionnelle', es: 'Detalle de intimidad emocional', ko: '감정적 친밀함과 디테일', zh: '情感亲密感与细节' }
  },
  'Claustrophobic Scale': {
    name: { ar: 'تأطير خانق', en: 'Claustrophobic Scale', fr: 'Échelle claustrophobique', es: 'Escala claustrofóbica', ko: '밀폐된 스케일', zh: '幽闭空间尺度' },
    tooltip: {
      ar: 'يضغط المساحة المحيطة بالموضوع بواسطة عناصر قريبة لخلق شعور بالضيق أو التوتر.',
      en: 'Boxes the subject with tight framing to induce a tense, claustrophobic atmosphere.',
      fr: 'Enferme le sujet dans un cadre serré pour induire une atmosphère tendue et claustrophobique.',
      es: 'Encuadra estrechamente al sujeto para inducir una atmósfera tensa y claustrofóbica.',
      ko: '타이트한 프레이밍으로 피사체를 가두어 긴장감 넘치고 답답한 분위기를 조성합니다.',
      zh: '通过紧凑的构图将主体框住，以营造紧张、幽闭的氛围。'
    },
    desc: { ar: 'حجم خانق وضيق المكان', en: 'Tight boxed-in space', fr: 'Espace restreint et enfermé', es: 'Espacio estrecho y encerrado', ko: '꽉 막히고 답답한 공간', zh: '狭窄局促的空间' }
  },
  'Heroic Dominance / Low Angle': {
    name: { ar: 'سيطرة بطولية', en: 'Heroic Dominance / Low Angle', fr: 'Dominance héroïque / Contre-plongée', es: 'Dominancia heroica / Contrapicado', ko: '영웅적 권위 / 로우 앵글', zh: '英雄式主导 / 低角度仰拍' },
    tooltip: {
      ar: 'يضع الكاميرا في زاوية سفلية لتعظيم حضور الشخصية وجعلها مسيطرة بطولياً على المشهد.',
      en: 'Positions the camera low to give the subject an imposing, heroic presence.',
      fr: 'Positionne la caméra vers le bas pour donner au sujet une présence imposante et héroïque.',
      es: 'Coloca la cámara en una posición baja para darle al sujeto una presencia imponente y heroica.',
      ko: '카메라를 낮게 배치하여 피사체에 압도적이고 영웅적인 존재감을 부여합니다.',
      zh: '将相机置于低位，赋予主体一种令人震撼的英雄般存在感。'
    },
    desc: { ar: 'سيطرة بطولية من أسفل', en: 'Low angle dominance', fr: 'Dominance en contre-plongée', es: 'Dominancia desde ángulo bajo', ko: '로우 앵글의 압도감', zh: '仰拍主导感' }
  },
  'Multi-Layered Peripheral Framing': {
    name: { ar: 'تأطير محيطي متعدد الطبقات', en: 'Multi-Layered Peripheral Framing', fr: 'Cadrage périphérique multicouche', es: 'Encuadre periférico multicapa', ko: '다층적 주변부 프레이밍', zh: '多层边缘构图' },
    tooltip: {
      ar: 'يضيف طبقات وعمق بصري للمشهد عبر وضع عناصر في حواف الصورة لتأطير الموضوع الرئيسي.',
      en: 'Adds layered depth by placing perimeter elements to frame the core subject.',
      fr: 'Ajoute de la profondeur en plaçant des éléments périphériques pour cadrer le sujet principal.',
      es: 'Añade profundidad en capas al colocar elementos en el perímetro para encuadrar al sujeto principal.',
      ko: '주변부 요소를 배치하여 중심 피사체를 액자처럼 프레임 안에 가둠으로써 시각적 심도를 더합니다.',
      zh: '通过在四周放置边缘元素来构图核心主体，从而增添多层次的景深感。'
    },
    desc: { ar: 'إطار داخل إطار وعمق بصري', en: 'Multi-layered visual depth', fr: 'Profondeur visuelle multicouche', es: 'Profundidad visual multicapa', ko: '다층적인 시각적 깊이', zh: '多层次视觉深度' }
  },
  'Leading Lines Framing': {
    name: { ar: 'تأطير خطوط التوجيه', en: 'Leading Lines Framing', fr: 'Cadrage par lignes directrices', es: 'Encuadre mediante líneas de fuga', ko: '인도선 프레이밍', zh: '引导线构图' },
    tooltip: {
      ar: 'يستخدم الخطوط المعمارية أو البيئية المتلاقية لتوجيه عين المشاهد مباشرة نحو بؤرة الاهتمام.',
      en: 'Uses converging structures to draw the viewer eye directly to the center of interest.',
      fr: 'Utilise des structures convergentes pour attirer directement le regard du spectateur vers le centre d\'intérêt.',
      es: 'Utiliza estructuras convergentes para atraer la mirada del espectador directamente al centro de interés.',
      ko: '수렴하는 구조적 라인을 사용하여 관객의 시선을 흥미의 중심으로 직접 유도합니다.',
      zh: '利用汇聚的结构线条将观众的视线直接吸引到画面的焦点中心。'
    },
    desc: { ar: 'خطوط توجيه للعين', en: 'Directing eye to subject', fr: 'Diriger le regard vers le sujet', es: 'Dirigir la mirada hacia el sujeto', ko: '피사체로 시선 유도', zh: '将视线引向主体' }
  },
  'Chiaroscuro Shadow Framing': {
    name: { ar: 'تأطير ظلال تشياروسكورو', en: 'Chiaroscuro Shadow Framing', fr: 'Cadrage par ombres clair-obscur', es: 'Encuadre por sombras de claroscuro', ko: '키아로스쿠로 명암 대비 프레이밍', zh: '明暗对照法阴影构图' },
    tooltip: {
      ar: 'يعتمد على التباين الشديد والمساحات السلبية المظلمة لخلق إطار سيلويت درامي يحيط بالشخصية.',
      en: 'Leverages harsh shadows and negative space to form a dramatic silhouette frame.',
      fr: 'Exploite les ombres dures et l\'espace négatif pour former un cadre de silhouette dramatique.',
      es: 'Aprovecha las sombras pronunciadas y el espacio negativo para formar un encuadre dramático de silueta.',
      ko: '강한 음영과 여백을 활용하여 극적인 실루엣 프레임을 형성합니다.',
      zh: '利用强烈阴影和负空间来构成戏剧性的剪影框架。'
    },
    desc: { ar: 'تأطير بالظلال القاسية', en: 'Heavy shadow contrast', fr: 'Fort contraste d\'ombres', es: 'Contraste fuerte de sombras', ko: '강렬한 음영 대비', zh: '强烈的阴影对比' }
  },
  'Voyeuristic Over-the-Shoulder': {
    name: { ar: 'تأطير من فوق الكتف', en: 'Voyeuristic Over-the-Shoulder', fr: 'Plan d\'épaule voyeuriste (Over-the-Shoulder)', es: 'Plano sobre el hombro voyerista (Over-the-Shoulder)', ko: '관음증적 오버더숄더', zh: '窥视式过肩镜头' },
    tooltip: {
      ar: 'يمنح المشاهد إحساساً تلصصياً واقعياً وكأنه يراقب الحدث خلسة من وراء حاجز أمامي.',
      en: 'Provides an organic voyeuristic feel, looking past obstacles as if observing candidly.',
      fr: 'Offre une sensation organique de voyeurisme, regardant au-delà des obstacles comme pour observer sur le vif.',
      es: 'Ofrece una sensación orgánica y voyerista, mirando a través de obstáculos como si se observara discretamente.',
      ko: '마치 장애물 너머로 몰래 훔쳐보는 듯한 자연스러운 느낌을 주어 생생한 관음증적 분위기를 선사합니다.',
      zh: '提供一种有机的窥视感，视线穿过障碍物，仿佛在不经意间暗中观察。'
    },
    desc: { ar: 'منظور تلصصي واقعي', en: 'Candid hidden camera feel', fr: 'Sensation de caméra cachée sur le vif', es: 'Sensación de cámara oculta espontánea', ko: '자연스러운 숨겨진 카메라 느낌', zh: '抓拍式的隐藏相机感' }
  },
  'Handheld': {
    name: { ar: 'يد حرة', en: 'Handheld', fr: 'Caméra à l’Épaule', es: 'Cámara en Mano', ko: '핸드헬드', zh: '手持摄影' },
    tooltip: {
      ar: 'الكاميرا تُحمل باليد مباشرة مع اهتزازات طبيعية خفيفة. تمنح الفيلم إحساساً عضوياً وثائقياً بأن المصور موجود في قلب الحدث. مثال: أفلام بول غرينغراس مثل "United 93" و"The Bourne Supremacy".',
      en: 'Camera held by hand with natural organic trembles. Gives the film a documentary urgency, placing the viewer in the heart of the action — signature style of Paul Greengrass in Bourne and United 93.',
      fr: 'Caméra tenue à l\'épaule ou à la main avec des tremblements organiques naturels. Donne au film une urgence documentaire, plaçant le spectateur au cœur de l\'action — style emblématique de Paul Greengrass dans Bourne et Vol 93.',
      es: 'Cámara en mano con temblores orgánicos y naturales. Aporta al film una urgencia documental, colocando al espectador en el centro de la acción; estilo característico de Paul Greengrass en la saga Bourne y United 93.',
      ko: '자연스럽고 유기적인 흔들림이 있는 핸드헬드 카메라 기법. 다큐멘터리 같은 긴박감을 부여하여 관객을 사건의 중심에 서게 만듭니다. 본(Bourne) 시리즈와 플라이트 93(United 93)에서 보여준 폴 그린그래스 감독의 시그니처 스타일입니다.',
      zh: '手持拍摄，伴随自然有기의 화면 抖动。赋予影片纪录片般的紧迫感，让观众置身于行动的核心——这是保罗·格林格拉斯在《谍影重重》和《联航93》中的标志性风格。'
    },
    desc: { ar: 'يد حرة', en: 'Handheld doc', fr: 'Épaule style docu', es: 'Mano estilo documental', ko: '핸드헬드 다큐', zh: '手持纪实感' }
  },
  'Dolly Shot': {
    name: { ar: 'سكة ثابتة', en: 'Dolly Shot', fr: 'Dolly', es: 'Plano Travellin', ko: '달리 샷', zh: '轨道推拉摄影' },
    tooltip: {
      ar: 'الكاميرا تتحرك على سكة أفقية لتتبع الشخصية أو لكشف البيئة بحركة انزلاقية سلسة تماماً. تمنح الفيلم رقياً سينمائياً وأناقة بصرية. أحد أكثر الحركات استخداماً في السينما الكلاسيكية.',
      en: 'Camera moves horizontally on tracks to follow characters or reveal environments in a perfectly smooth glide. Adds cinematic elegance and visual sophistication — a cornerstone of classical filmmaking.',
      fr: 'La caméra se déplace horizontalement sur des rails pour suivre les personnages ou révéler les décors dans un glissement parfaitement fluide. Apporte une élégance cinématographique et une sophistication visuelle — un pilier du cinéma classique.',
      es: 'La cámara se desplaza horizontalmente sobre rieles para seguir a los personajes o revelar el entorno en un deslizamiento perfectamente fluido. Aporta elegancia cinématographique et sofisticación visual, un pilar fundamental del cine clásico.',
      ko: '카메라가 궤도(트랙)를 따라 수평으로 이동하며 완벽하게 부드러운 글라이드로 인물을 따라가거나 환경을 보여줍니다. 영화적 우아함과 시각적 정교함을 더해주며, 고전 영화 제작의 초석이 되는 기법입니다.',
      zh: '移动轨道拍摄，摄像机在轨道上水平移动，以完美平滑的滑行跟踪角色或展现环境。增添了电影艺术的优雅与视觉上的精致感——这是经典电影制作의 基石。'
    },
    desc: { ar: 'انزلاق ناعم', en: 'Smooth dolly', fr: 'Mouvement fluide dolly', es: 'Movimiento suave travellin', ko: '매끄러운 이동 샷', zh: '丝滑滑轨追踪' }
  },
  'Crane/Jib': {
    name: { ar: 'كرين عالٍ', en: 'Crane/Jib', fr: 'Grue / Louma', es: 'Grúa / Jib', ko: '크레인 / 지브 암', zh: '摇臂升降镜头' },
    tooltip: {
      ar: 'الكاميرا مرفوعة على ذراع كرين طويل للوصول إلى زوايا علوية وتكشف المشهد من منظور الإله. مثالية للمشاهد الختامية الملحمية التي ترتفع فوق الشخصيات وتكشف حجم العالم من حولهم.',
      en: 'Camera mounted on a long crane arm to reach elevated angles, revealing the scene from a godlike perspective — perfect for epic conclusion shots that rise above characters to expose the vast world around them.',
      fr: 'Caméra montée sur un long bras de grue pour atteindre des angles élevés, révélant la scène d\'un point de vue divin — idéal pour les plans finaux épiques qui s\'élèvent au-dessus des personnages pour révéler l\'immensité du monde environnant.',
      es: 'Cámara montada en un largo brazo de grúa para alcanzar ángulos elevados, revelando la escena desde una perspectiva omnisciente; ideal para planos finales épicos que se elevan sobre los personajes para exponer el vasto mundo que los rodea.',
      ko: '긴 크레인 암에 카메라를 장착하여 높은 앵글을 확보하고, 전지적 관점에서 장면을 내려다봅니다. 등장인물들 위로 솟아올라 주변의 거대한 세계를 드러내는 대서사적 결말 샷에 안성맞춤입니다.',
      zh: '摇臂/升降镜头，将摄像机安装在长摇臂上以达到高角度，从上帝视角展现场景——非常适合在史诗般的结尾镜头中升起，俯瞰角色并展现他们周围广阔的世界。'
    },
    desc: { ar: 'كرين مرتفع', en: 'High crane', fr: 'Mouvement vertical grue', es: 'Vertical de grúa', ko: '높은 고도 상승', zh: '升降高空揭示' }
  },
  'Drone Aerial': {
    name: { ar: 'درون جوي', en: 'Drone Aerial', fr: 'Aérien Drone', es: 'Aéreo con Dron', ko: '드론 헬리캠 샷', zh: '无人机航拍' },
    tooltip: {
      ar: 'تصوير جوي بالطائرة دون طيار لالتقاط لقطات عشوائية من الأعلى. تمنح إحساساً بالحرية والاتساع الملحمي للمكان. شائعة في مشاهد افتتاح الطبيعة والمطاردات السريعة والكشف عن المدن الضخمة.',
      en: 'Aerial cinematography with drone for sweeping overhead shots. Grants a sense of freedom and epic landscape scale — widely used in nature opening sequences, chase scenes, and grand city reveals.',
      fr: 'Prise de vue aérienne par drone pour des plans panoramiques plongeants. Offre un sentiment de liberté et une échelle de paysage épique — très utilisé dans les séquences d\'ouverture en pleine nature, les scènes de poursuite et les révélations de grandes métropoles.',
      es: 'Cinematografía aérea con dron para tomas panorámicas desde el aire. Aporta una sensación de libertad y una escala de paisaje épica; muy utilizado en secuencias de apertura en la naturaleza, escenas de persecución y grandes revelaciones de ciudades.',
      ko: '드론을 이용한 항공 촬영으로 압도적인 오버헤드 뷰를 담아냅니다. 자유로움과 대자연의 장엄한 규모감을 선사하며, 자연 경관 오프닝 시퀀스, 추격 신, 그리고 웅장한 도시의 전경을 연출할 때 널리 쓰입니다.',
      zh: '无人机航拍，用于捕捉开阔的俯瞰画面。赋予画面自由感和史诗般的景观尺度——广泛用于自然风光开场镜头、追逐场景以及宏大城市的全景展现。'
    },
    desc: { ar: 'درون جوي', en: 'Aerial drone', fr: 'Rendu aérien drone', es: 'Aéreo dron', ko: '버즈아이 드론', zh: '俯瞰空中视界' }
  },
  'Locked Off Static': {
    name: { ar: 'ثابت تماماً', en: 'Locked Off Static', fr: 'Plan Fixe Verrouillé', es: 'Plano Fijo Estático', ko: '락오프 스태틱', zh: '固定机位静止拍摄' },
    tooltip: {
      ar: 'الكاميرا ثابتة تماماً لا تتحرك قيد أنملة. تمنح المشهد هدوءاً مشحوناً وتوتراً مكبوتاً. أسلوب كوبريك المفضل — الثبات المطلق يجعل الحركة البشرية داخل الكادر أكثر وزناً وأثراً بصرياً.',
      en: 'Camera completely locked and motionless. Creates charged stillness and suppressed tension — Kubrick\'s signature style. Absolute stillness makes human movement within the frame more weighty and visually impactful.',
      fr: 'Caméra complètement verrouillée et immobile. Crée un silence chargé et une tension contenue — le style signature de Kubrick. L\'immobilité absolue donne au mouvement humain dans le cadre plus de poids et d\'impact visuel.',
      es: 'Cámara completamente bloqueada e inmóvil. Crea una quietud cargada y una tensión reprimida, el estilo característico de Kubrick. La inmovilidad absoluta hace que el movimiento humano dentro del encuadre tenga más peso e impacto visual.',
      ko: '카메라를 완전히 고정하여 움직임이 없는 상태. 팽팽한 정적과 억제된 긴장감을 조성하는 큐브릭 감독의 시그니처 스타일입니다. 완전한 부동성은 프레임 내 인물의 움직임에 더 큰 무게감과 시각적 충격을 부여합니다.',
      zh: '机位完全锁死且静止不动。营建出一种充满张力的沉静与压抑的紧张感——这是库布里克的招牌风格。绝对的静止让画面中人物的动作显得更有分量，视觉冲击力也更强。'
    },
    desc: { ar: 'ثابت تماماً', en: 'Static precision', fr: 'Précision géométrique fixe', es: 'Precisión geométrica fija', ko: '큐브릭식 정지 화각', zh: '库布里克式精确对称' }
  },
  'Steadicam': {
    name: { ar: 'ستيديكام', en: 'Steadicam', fr: 'Steadicam', es: 'Steadicam', ko: '스테디캠', zh: '斯坦尼康稳定器追踪' },
    tooltip: {
      ar: 'نظام تثبيت آلي يلغي الاهتزازات ويسمح للكاميرا بالتتبع السلس للشخصيات عبر الفضاء بحرية تامة. يمنح إحساساً بالحضور الشبحي المحلق. المشهد الأشهر: تتبع شاينينغ مع داني في ممرات الفندق.',
      en: 'Gyroscopic stabilization system that eliminates shake while following characters freely through space — creates a ghostly floating presence. Most famous use: tracking Danny through The Shining\'s hotel corridors.',
      fr: 'Système de stabilisation gyroscopique qui élimine les secousses tout en suivant librement les personnages dans l\'espace — crée une présence flottante et fantomatique. Utilisation la plus célèbre : le suivi de Danny dans les couloirs de l\'hôtel de "The Shining".',
      es: 'Sistema de estabilización giroscópica que elimina el temblor mientras sigue libremente a los personajes a través del espacio, creando una presencia flotante fantasmal. Uso más famoso: el seguimiento a Danny por los pasillos del hotel en El Resplandor.',
      ko: '공간 속에서 캐릭터를 자유롭게 추적하면서 흔들림을 없애주는 자이로스코프 안정화 시스템. 유령이 떠다니는 듯한 신비로운 존재감을 부여합니다. 가장 유명한 예시: 영화 <샤이닝>에서 호텔 복도를 지나는 대니를 추적하는 씬.',
      zh: '陀螺仪稳定系统，在自由随行角色穿梭空间时消除抖动——营造出如幽灵般漂浮的临场感。最著名应用：在《闪灵》中追踪丹尼穿过旅馆走廊。'
    },
    desc: { ar: 'ستيديكام', en: 'Steadicam follow', fr: 'Suivi stabilisé steadicam', es: 'Seguimiento estabilizado', ko: '스테디캠 트래킹', zh: '无抖动尾随行进' }
  },
  'Cinematic Parallax Push': {
    name: { ar: 'دفع الكاميرا مع التزيّح', en: 'Cinematic Parallax Push', fr: 'Push-in de parallaxe cinématographique', es: 'Empuje de paralaje cinematográfico (Parallax Push)', ko: '시네마틱 패럴랙스 푸시', zh: '电影感视差推镜头' },
    tooltip: {
      ar: 'دفع انسيابي بطيء يولد اختلافاً ظاهرياً (Parallax) بين المقدمة والخلفية لتعزيز العمق.',
      en: 'Slow push-in creating strong foreground-background separation to build depth.',
      fr: 'Un push-in lent créant une forte séparation entre premier plan et arrière-plan pour structurer la profondeur.',
      es: 'Un empuje lento hacia adelante (push-in) que crea una fuerte separación entre el primer plano y el fondo para construir profundidad.',
      ko: '전경과 배경의 강한 시차 분리를 형성하는 부드러운 푸시인 기법으로 공간의 심도를 한층 더 높입니다.',
      zh: '缓慢前推，在前景和背景之间创造强烈的视差分离，以构建深邃的景深。'
    },
    desc: { ar: 'دفع بطيء وعمق تزيّح قوي', en: 'Slow push with parallax', fr: 'Push-in lent avec parallaxe', es: 'Empuje lento con paralaje', ko: '시차 효과가 있는 느린 푸시', zh: '带有视差的慢推镜头' }
  },
  'Slow Orbit / Arc Shot': {
    name: { ar: 'دوران بطيء (Arc Shot)', en: 'Slow Orbit / Arc Shot', fr: 'Orbite lente / Plan en arc (Arc Shot)', es: 'Órbita lenta / Plano en arco (Arc Shot)', ko: '슬로우 오빗 / 아크 샷', zh: '慢速环绕 / 弧形镜头' },
    tooltip: {
      ar: 'دوران قوسي هادئ حول الشخصية يكشف تدريجياً اتساع البيئة وتفاصيل الخلفية المحيطة.',
      en: 'Sweeping arc orbit revealing subject dimensionality and context simultaneously.',
      fr: 'Une orbite en arc fluide qui révèle simultanément la dimensionnalité du sujet et le contexte.',
      es: 'Una órbita en arco fluida que revela la tridimensionalidad del sujeto y el contexto simultáneamente.',
      ko: '주변 환경과 피사체의 입체감을 동시에 보여주는 부드러운 원형 아크 궤도 촬영 기법입니다.',
      zh: '通过流畅的弧形环绕运动，同时展现主体的立体感与所处的环境上下文。'
    },
    desc: { ar: 'دوران 180 درجة لكشف الخلفية', en: 'Sweeping 180 orbit reveal', fr: 'Révélation par orbite panoramique à 180 degrés', es: 'Revelación mediante órbita panorámica de 180 grados', ko: '180도 회전을 통한 장면 공개', zh: '180度环绕揭示' }
  },
  'Majestic Drone Reveal': {
    name: { ar: 'كشف عمودي بالدرون', en: 'Majestic Drone Reveal', fr: 'Révélation majestueuse par drone', es: 'Revelación majestuosa con dron', ko: '웅장한 드론 리빌', zh: '无人机壮丽揭示' },
    tooltip: {
      ar: 'صعود درامي يبدأ بلقطة ضيقة على الشخصية ثم يرتفع عالياً ليكشف المشهد الطبيعي المهيب.',
      en: 'Rises vertically from close subject framing to reveal an immense landscape.',
      fr: 'S\'élève verticalement depuis un cadrage serré du sujet pour révéler un paysage immense.',
      es: 'Se eleva verticalmente desde un encuadre cerrado del sujeto para revelar un paisaje inmenso.',
      ko: '피사체의 타이트한 프레임에서 수직으로 상승하여 거대하고 장엄한 대자연을 공개합니다.',
      zh: '从主体的特写近景画面垂直攀升，逐渐展现出宏伟辽阔的壮丽景观。'
    },
    desc: { ar: 'صعود درامي لكشف المشهد', en: 'Rising grand landscape reveal', fr: 'Révélation d\'un vaste paysage en élévation', es: 'Revelación de paisaje grandioso en elevación', ko: '상승을 통한 장엄한 풍경 공개', zh: '升空展现宏大景观' }
  },
  'Handheld Gritty Tracking': {
    name: { ar: 'تتبع يدوي واقعي', en: 'Handheld Gritty Tracking', fr: 'Suivi caméra à l\'épaule réaliste', es: 'Seguimiento en mano realista', ko: '핸드헬드 실감형 트래킹', zh: '手持纪实跟拍' },
    tooltip: {
      ar: 'تتبع حركي يحمل اهتزازات طبيعية خفيفة تضفي طابعاً وثائقياً وحيوية واقعية على المشهد.',
      en: 'Tracks dynamically with organic camera shake to impart gritty authenticity.',
      fr: 'Suit le mouvement de manière dynamique avec des vibrations organiques pour conférer une authenticité brute.',
      es: 'Realiza un seguimiento dinámico con un temblor orgánico de la cámara para aportar una autenticidad cruda.',
      ko: '카메라의 자연스러운 흔들림과 함께 역동적으로 추적하여 거칠고 생생한 현장감을 부여합니다.',
      zh: '伴随有机的相机手震进行动态跟拍，以赋予画面粗粝、逼真的纪实感。'
    },
    desc: { ar: 'اهتزاز طبيعي وثائقي', en: 'Dynamic organic tracking', fr: 'Suivi dynamique et organique', es: 'Seguimiento dinámico y orgánico', ko: '동적이고 자연스러운 트래킹', zh: '动态有机的追踪跟拍' }
  },
  'Roger Deakins': {
    name: { ar: 'روجر ديكينز', en: 'Roger Deakins', fr: 'Roger Deakins', es: 'Roger Deakins', ko: '로저 디킨스', zh: '罗杰·迪金斯' },
    tooltip: {
      ar: 'الأسطورة الحي في عالم التصوير. معروف بإضاءته الطبيعية الدقيقة المحسوبة بدقة متناهية. أبرز أعماله: "Blade Runner 2049"، "1917"، "No Country for Old Men". تمنح صوره شعوراً بالحقيقة المصقولة والجمال الهادئ.',
      en: 'The living legend of cinematography. Known for his meticulously precise natural lighting. Best work: Blade Runner 2049, 1917, No Country for Old Men — images that feel like polished reality with quiet, profound beauty.',
      fr: 'La légende vivante de la direction de la photographie. Connu pour son éclairage naturel méticuleusement précis. Ses meilleurs travaux : Blade Runner 2049, 1917, No Country for Old Men — des images qui ressemblent à une réalité sublimée d\'une beauté calme et profonde.',
      es: 'La leyenda viva de la dirección de fotografía. Conocido por su iluminación natural meticulosamente precisa. Sus mejores trabajos: Blade Runner 2049, 1917, No Country for Old Men; imágenes que se sienten como una realidad pulida con una belleza serena y profunda.',
      ko: '촬영 감독의 살아있는 전설. 매우 세밀하고 정밀한 자연광 활용으로 널리 알려져 있습니다. 대표작: 블레이드 러너 2049, 1917, 노인을 위한 나라는 없다 — 정제된 현실감과 차분하고도 깊은 아름다움을 전하는 비주얼을 구현합니다.',
      zh: '电影摄影界的活传奇。以其极其精准的自然光照明而闻名。代表作：《银翼杀手2049》、《1917》、《无老无依》——画面呈现出打磨过的现实感，散发着宁静而深邃的美。'
    },
    desc: { ar: 'طبيعي دقيق', en: 'Natural precision', fr: 'Lumière naturelle précise', es: 'Precisión natural', ko: '정교한 환경광', zh: '精密自然光' }
  },
  'Emmanuel Lubezki': {
    name: { ar: 'إيمانويل لوبيزكي', en: 'Emmanuel Lubezki', fr: 'Emmanuel Lubezki', es: 'Emmanuel Lubezki', ko: '엠마누엘 루베즈키', zh: '艾曼纽尔·卢贝兹基' },
    tooltip: {
      ar: 'الفائز بثلاث جوائز أوسكار متتالية. مبدع اللقطات الطويلة الاستثنائية والضوء الطبيعي البحت. أبرز أعماله: "Gravity"، "Birdman"، "The Revenant". صوره تشعرك بأنك داخل الحدث تتنفس مع الممثلين.',
      en: 'Three consecutive Oscar wins. Creator of extraordinary long takes with pure natural light. Best work: Gravity, Birdman, The Revenant — images that make you feel you are breathing inside the scene with the actors.',
      fr: 'Trois Oscars consécutifs. Créateur de plans-séquences extraordinaires sous lumière naturelle pure. Ses meilleurs travaux : Gravity, Birdman, The Revenant — des images qui vous donnent l\'impression de respirer au cœur de la scène aux côtés des acteurs.',
      es: 'Tres premios Óscar consecutivos. Creador de extraordinarios planos secuencia con luz puramente natural. Sus mejores trabajos: Gravity, Birdman, The Revenant; imágenes que te hacen sentir que respiras dentro de la escena junto con los actores.',
      ko: '아카데미상 3회 연속 수상. 순수 자연광만을 활용한 독보적인 롱테이크의 대가. 대표작: 그래비티, 버드맨, 레버넌트 — 배우들과 함께 현장 속에서 함께 숨 쉬고 있는 듯한 경이로운 몰입감을 선사합니다.',
      zh: '蝉联三届奥斯卡最佳摄影奖。纯自然光下非凡长镜头的开创者。代表作：《地心引力》、《鸟人》、《荒野猎人》——画面让您仿佛置身于场景之中，与演员共同呼吸。'
    },
    desc: { ar: 'ضوء طبيعي طليق', en: 'Natural fluid', fr: 'Lumière naturelle fluide', es: 'Fluidez natural', ko: '롱테이크와 실외광', zh: '流光溢彩自然光' }
  },
  'Vilmos Zsigmond': {
    name: { ar: 'فيلموس زيغموند', en: 'Vilmos Zsigmond', fr: 'Vilmos Zsigmond', es: 'Vilmos Zsigmond', ko: '빌모스 지그몬드', zh: '维尔莫斯·齐格蒙德' },
    tooltip: {
      ar: 'رائد التصوير الأمريكي من السبعينيات. اشتهر بتقنية "Flashing" لتليين الصورة وإضفاء دفء ترابي رومانسي خاص. أبرز أعماله: "The Deer Hunter"، "Close Encounters of the Third Kind". إحساس الصور: أمريكا قديمة حنينة.',
      en: 'Pioneer of 1970s American cinema. Famous for "flashing" technique to soften images with a warm, romantic earthy glow. Best work: The Deer Hunter, Close Encounters — images feel like nostalgic old America.',
      fr: 'Pionnier du cinéma américain des années 1970. Célèbre pour sa technique de pré-exposition (« flashing ») visant à adoucir l\'image avec un éclat terreux chaleureux et romantique. Ses meilleurs travaux : Voyage au bout de l\'enfer, Rencontres du troisième type — des images empreintes de nostalgie de l\'Amérique d\'antan.',
      es: 'Pionero del cine estadounidense de la década de 1970. Famoso por su técnica de "flashing" (predestello) para suavizar las imágenes con un cálido y romántico resplandor terroso. Sus mejores trabajos: The Deer Hunter, Encuentros en la tercera fase; imágenes que evocan una vieja y nostálgica América.',
      ko: '1970년대 아메리칸 시네마의 개척자. 이미지를 따뜻하고 낭만적인 흙빛 감성으로 부드럽게 감싸는 \'플래싱(flashing)\' 기법으로 유명합니다. 대표작: 디어 헌터, 미지와의 조우 — 향수를 자극하는 옛 미국의 정취를 고스란히 담아냅니다.',
      zh: '20世纪70年代美国电影的先驱。因采用“闪光（Flashing）”技术弱化画面对比度、赋予其温暖浪漫的泥土般光泽而闻名。代表作：《猎鹿人》、《第三类接触》——画面充满对旧时美国的怀旧感。'
    },
    desc: { ar: 'دافئ ترابي', en: 'Warm earthy', fr: 'Tons chauds terreux', es: 'Cálido terroso', ko: '따뜻한 대지 톤', zh: '温润泥土色调' }
  },
  'Greig Fraser': {
    name: { ar: 'غريغ فريزر', en: 'Greig Fraser', fr: 'Greig Fraser', es: 'Greig Fraser', ko: '그레이그 프레이저', zh: '格雷格·弗雷泽' },
    tooltip: {
      ar: 'مصور عقد الثلاثينيات والأربعينيات الجديد. معروف بتجريد الألوان وخلق عالم بصري مبهم وكثيف الغموض. أبرز أعماله: "Dune"، "Batman"، "Zero Dark Thirty". صوره: رمادي فولاذي ضخم بلا رحمة.',
      en: 'The defining cinematographer of 2020s dark cinema. Known for draining color and creating dense, ambiguous visual worlds. Best work: Dune, The Batman, Zero Dark Thirty — images: cold steel, ruthless and vast.',
      fr: 'Le directeur de la photographie emblématique du cinéma sombre des années 2020. Connu pour ses palettes de couleurs désaturées et la création d\'univers visuels denses et mystérieux. Ses meilleurs travaux : Dune, The Batman, Zero Dark Thirty — esthétique : acier froid, impitoyable et immense.',
      es: 'El director de fotografía que define el cine oscuro de la década de 2020. Conocido por desaturar el color y crear mundos visuales densos y ambiguos. Sus mejores trabajos: Dune, The Batman, Zero Dark Thirty; imágenes de acero frío, implacables y colosales.',
      ko: '2020년대 어두운 시네마틱 감성을 정의하는 촬영 감독. 색조를 걷어내고 밀도 높은 모호한 시각 세계를 구축하는 것으로 유명합니다. 대표작: 듄, 더 배트맨, 제로 다크 서티 — 차가운 강철 빛깔의 무자비하고 광활한 비주얼을 자랑합니다.',
      zh: '定义了2020年代暗黑电影风的摄影师。以抽离色彩和营造浓重、朦胧的视觉世界而著称。代表作：《沙丘》、《新蝙蝠侠》、《零点三十》——画面呈现：冷酷的钢铁感，无情且宏大。'
    },
    desc: { ar: 'تجريد موديّ', en: 'Desaturated moody', fr: 'Désaturé et sombre', es: 'Desaturado sombrío', ko: '낮은 채도의 중후함', zh: '低饱和度暗郁' }
  },
  'Hoyte van Hoytema': {
    name: { ar: 'هويتي فان هويتيما', en: 'Hoyte van Hoytema', fr: 'Hoyte van Hoytema', es: 'Hoyte van Hoytema', ko: '호이테 반 호이테마', zh: '霍伊特·范·霍伊特玛' },
    tooltip: {
      ar: 'شريك نولان المخلص. يتقن استخدام الأضواء العملية ونسيج الإضاءة الذهبية مع عشق خاص لكاميرات IMAX. أبرز أعماله: "Interstellar"، "Dunkirk"، "Oppenheimer". صوره دافئة عملية وملحمية في آن واحد.',
      en: 'Nolan\'s loyal partner. Masters practical lights and golden-warm textures with a special love for IMAX. Best work: Interstellar, Dunkirk, Oppenheimer — images are simultaneously warm, practical, and epic in scale.',
      fr: 'Le partenaire fidèle de Nolan. Maître des lumières pratiques et des textures chaudes et dorées, avec un amour particulier pour l\'IMAX. Ses meilleurs travaux : Interstellar, Dunkerque, Oppenheimer — ses images sont à la fois chaleureuses, réalistes et d\'une envergure épique.',
      es: 'El fiel socio de Nolan. Maestro de las luces prácticas y las texturas cálidas y doradas, con una especial predilección por IMAX. Sus mejores trabajos: Interstellar, Dunkerque, Oppenheimer; las imágenes son simultáneamente cálidas, realistas y de escala épica.',
      ko: '놀란 감독의 충실한 파트너. 실용적인 조명(practical light)과 따뜻한 금빛 질감을 마스터했으며, 특히 IMAX 카메라에 깊은 애정을 가지고 있습니다. 대표작: <인터스텔라>, <덩케르크>, <오펜하이머> — 그의 이미지는 따뜻하고 현실적이면서도 동시에 서사적인 웅장함을 보여줍니다.',
      zh: '诺兰的黄金搭档。擅长实景光源和金色温暖质感，对 IMAX 抱有独特的热爱。代表作：《星际穿越》《敦刻尔克》《奥本海默》——其画面温暖、写实且兼具史诗般的宏大格局。'
    },
    desc: { ar: 'ذهبي عملي', en: 'Golden practical', fr: 'Lumières réelles dorées', es: 'Práctico dorado', ko: '황금빛 실감형 조명', zh: '黄金实景光' }
  },
  'Darius Khondji': {
    name: { ar: 'داريوس خوندجي', en: 'Darius Khondji', fr: 'Darius Khondji', es: 'Darius Khondji', ko: '다리우스 콘지', zh: '达利欧·康吉' },
    tooltip: {
      ar: 'ساحر الظلام والرومانسية القاتمة. يستخدم التشبع اللوني والتباين الشديد لخلق عوالم جمالها مخيف ورائع. أبرز أعماله: "Seven"، "Delicatessen"، "Midnight in Paris". صوره: ظلام باريسي ساحر يخبئ أسراراً.',
      en: 'Sorcerer of dark romanticism. Uses desaturation and extreme contrast to build worlds of terrifying beauty. Best work: Seven, Delicatessen, Midnight in Paris — images feel like Parisian darkness concealing beautiful secrets.',
      fr: 'Sorcier du romantisme sombre. Utilise la désaturation et un contraste extrême pour bâtir des mondes d\'une beauté terrifiante. Ses meilleurs travaux : Seven, Delicatessen, Minuit à Paris — des images qui évoquent une obscurité parisienne recelant de magnifiques secrets.',
      es: 'El hechicero del romanticismo oscuro. Utiliza la desaturación y el contraste extremo para construir mundos de una belleza aterradora. Sus mejores trabajos: Seven, Delicatessen, Midnight in Paris; imágenes que evocan una oscuridad parisina que oculta bellos secretos.',
      ko: '어두운 낭만주의의 마술사. 채도 저하와 극단적인 대비를 사용하여 경이로우면서도 두려운 느낌을 주는 세계를 창조합니다. 대표작: 세븐, 델리카트슨, 미드나잇 인 파리 — 파리의 어둠 속에 감추어진 아름다운 비밀을 고스란히 드러내는 비주얼을 자랑합니다.',
      zh: '暗黑浪漫主义的魔术师。利用低饱和度和极端对比度构建具有恐怖之美的世界。代表作：《七宗罪》、《熟食店》、《午夜巴黎》——画面宛如巴黎的夜色，隐匿着美丽的秘密。'
    },
    desc: { ar: 'ظلال رومانسية', en: 'Dark romantic', fr: 'Ombres romantiques sombres', es: 'Sombras románticas oscuras', ko: '어두운 로맨티시즘', zh: '浪漫深邃阴影' }
  },
  'Kodak Portra 400': {
    name: { ar: 'كوداك بورترا 400', en: 'Kodak Portra 400', fr: 'Kodak Portra 400', es: 'Kodak Portra 400', ko: '코닥 포트라 400', zh: '柯达 Portra 400' },
    tooltip: {
      ar: 'أشهر شريط فيلم للبورتريه في التاريخ. ألوانه دافئة كالعسل وبشرته طبيعية ناعمة بحبيبات لطيفة. يمنح الصورة دفءاً إنسانياً أصيلاً لا تستطيع الكاميرات الرقمية إنتاجه بشكل طبيعي.',
      en: 'The most famous portrait film stock in history. Honey-warm colors with naturally soft skin tones and gentle grain — grants an authentic human warmth that digital cameras cannot produce naturally.',
      fr: 'La pellicule de portrait la plus célèbre de l\'histoire. Des couleurs chaudes comme le miel, des tons chair naturellement doux et un grain subtil — confère une chaleur humaine authentique que les caméras numériques ne peuvent reproduire naturellement.',
      es: 'La película de retratos más famosa de la historia. Colores cálidos como la miel con tonos de piel naturalmente suaves y grano sutil; otorga una calidez humana auténtica que las cámaras digitales no pueden replicar de forma natural.',
      ko: '역사상 가장 유명한 포트레이트 필름. 꿀처럼 따뜻한 색감, 자연스럽고 부드러운 피부 톤, 미세한 입자감으로 디지털카메라가 구현할 수 없는 고유의 따뜻하고 인간적인 온기를 불어넣습니다.',
      zh: '历史上最著名的肖像胶片胶卷。色调温润如蜜，具有自然柔软的肤色和细腻的颗粒感——赋予画面一种数码相机无法自然模拟的真实人文温度。'
    },
    desc: { ar: 'بورترا دافئ', en: 'Portra warm', fr: 'Portra tons chauds', es: 'Portra tons cálidos', ko: '포트라 인물스킨', zh: '温暖人像肤色' }
  },
  'Black & White': {
    name: { ar: 'أبيض وأسود', en: 'Black & White', fr: 'Noir & Blanc', es: 'Blanco y Negro', ko: '흑백 (B&W)', zh: '经典黑白' },
    tooltip: {
      ar: 'إزالة الألوان بالكامل للتركيز المطلق على الشكل والنور والظل والعاطفة المجردة. يُعيد الاتصال بجوهر الصورة الكلاسيكية ويُجرّد المشهد من كل ما يشتت. الأسلوب المفضل للتعبير الفني الصافي.',
      en: 'Remove all color to focus purely on form, light, shadow, and raw emotion. Reconnects with classical image essence, stripping the scene of distraction — the preferred style for pure artistic expression.',
      fr: 'Supprime toutes les couleurs pour se concentrer uniquement sur la forme, la lumière, l\'ombre et l\'émotion brute. Renoue avec l\'essence classique de l\'image, débarrassant la scène de toute distraction — le style privilégié pour une expression artistique pure.',
      es: 'Elimina todo color para enfocarse puramente en la forma, luz, sombra y emoción cruda. Reconecta con la esencia clásica de la imagen, despojando la escena de distracciones; el estilo preferido para la expresión artística pura.',
      ko: '모든 색상을 배제하여 오직 형태, 빛, 그림자, 그리고 날것 그대로의 감정에 집중합니다. 클래식한 이미지의 본질로 돌아가 장면에 섞인 불필요한 주의 산만 요소를 걷어내며, 순수한 예술적 표현을 위해 가장 선호되는 방식입니다.',
      zh: '去除所有色彩，纯粹专注于构图、光线、阴影和原始情感。重现经典图像의 本质，剥离场景中的干扰元素——是纯粹艺术表达的首选风格。'
    },
    desc: { ar: 'أبيض أسود', en: 'Classic B&W', fr: 'Monochrome classique', es: 'Monocromo clásico', ko: '실버 모노크롬', zh: '单色胶片' }
  },
  'Teal & Orange': {
    name: { ar: 'تيل وبرتقالي', en: 'Teal & Orange', fr: 'Teal & Orange', es: 'Cian y Naranja', ko: '틸 앤 오렌지', zh: '青橙色调' },
    tooltip: {
      ar: 'الـ"لوك" الهوليودي الأكثر شيوعاً. يجمع بين البرتقالي الدافئ لبشرة الإنسان مع الأزرق الفيروزي البارد للخلفيات. التباين الطبيعي يجعل الشخصيات تبرز بقوة وجاذبية بصرية. مثال: "Mad Max: Fury Road".',
      en: 'The most-used Hollywood blockbuster grade. Combines warm orange human skin tones against cool teal backgrounds — natural contrast that makes characters visually pop. Example: Mad Max: Fury Road.',
      fr: 'L\'étalonnage le plus répandu des blockbusters hollywoodiens. Associe les tons chair chauds et orangés à des arrière-plans bleu sarcelle froids — un contraste naturel qui fait ressortir visuellement les personnages. Exemple : Mad Max: Fury Road.',
      es: 'La gradación de color más utilizada en los éxitos de taquilla de Hollywood. Combina tonos cálidos de piel naranja contra fondos azul verdoso (teal) frío; un contraste natural que hace resaltar visualmente a los personajes. Ejemplo: Mad Max: Fury Road.',
      ko: '할리우드 블록버스터에서 가장 널리 쓰이는 컬러 그레이딩 기법. 따뜻한 오렌지빛 피부 톤과 차가운 청록색(Teal) 배경의 조화 — 자연스러운 대비가 인물을 시각적으로 돋보이게 만듭니다. 예시: 매드 맥스: 분노의 도로.',
      zh: '好莱坞大片中最常用的调色风格。将温暖的橙色人体肤色与冷青色（蓝绿）背景相结合——这种天然的对比度使角色在视觉上十分突出。例如：《疯狂的麦克斯：狂暴之路》。'
    },
    desc: { ar: 'هوليوود', en: 'Hollywood look', fr: 'Blockbuster Hollywood', es: 'Superproducción Hollywood', ko: '헐리우드 대작 스타일', zh: '好莱坞商业大片感' }
  },
  'Warm Honey': {
    name: { ar: 'دافئ عسلي', en: 'Warm Honey', fr: 'Miel Chaud', es: 'Miel Cálido', ko: '웜 허니', zh: '温暖琥珀' },
    tooltip: {
      ar: 'تدريج لوني يمدد ساعة الذهب إلى ما لا نهاية. كل شيء يغمره ضوء عسلي ذهبي حالم. مثالي للذكريات الجميلة ومشاهد الحب والأيام الصيفية الهانئة التي تشعر بالحنين والدفء في آن واحد.',
      en: 'Color grade that extends golden hour endlessly. Everything is bathed in dreamy honey-golden warmth — perfect for beautiful memories, love scenes, and summer days that evoke nostalgia and warmth simultaneously.',
      fr: 'Étalonnage qui prolonge l\'heure dorée à l\'infini. Tout est baigné d\'une chaleur dorée et miellée onirique — idéal pour les beaux souvenirs, les scènes d\'amour et les journées d\'été qui évoquent à la fois la nostalgie et la chaleur.',
      es: 'Gradación de color que prolonga la hora dorada infinitamente. Todo se baña en una calidez dorada y de miel de ensueño; perfecto para bellos recuerdos, escenas de amor y días de verano que evocan nostalgia y calidez simultáneamente.',
      ko: '골든 아워를 영원히 늘려놓은 듯한 컬러 그레이딩. 모든 피사체가 몽환적인 벌꿀 황금빛 온기로 가득 차며 — 아름다운 추억, 사랑 신, 그리고 향수와 따스함을 동시에 자아내는 여름날을 묘사하기에 가장 적합합니다.',
      zh: '将黄金时刻无限延长的调色风格。一切都被沐浴在梦幻般的金蜜色温暖中——非常适合表现美好的回忆、爱情场景以及同时唤起怀旧与温存的夏日。'
    },
    desc: { ar: 'عسلي دافئ', en: 'Amber honey', fr: 'Ambre chaud', es: 'Ámbar cálido', ko: '오렌지 호박 빛깔', zh: '琥珀蜜色' }
  },
  'Cool Blue': {
    name: { ar: 'بارد أزرق', en: 'Cool Blue', fr: 'Bleu Froid', es: 'Azul Frío', ko: '쿨 블루', zh: '冷峻深蓝' },
    tooltip: {
      ar: 'تدريج لوني فولاذي بارد يمنح المشهد برودة حضرية وغموضاً ليلياً. مثالي للمشاهد الحضرية الليلية ولحظات العزلة والإجهاد العاطفي والمشاهد التي تعكس الوحدة في وسط الزحام.',
      en: 'Cold steel color grade giving the scene urban coldness and nocturnal mystery. Perfect for city night sequences, emotional isolation, exhaustion, and the loneliness of crowds.',
      fr: 'Étalonnage acier froid qui confère à la scène une froideur urbaine et un mystère nocturne. Idéal pour les séquences de nuit en ville, l\'isolement émotionnel, l\'épuisement et la solitude face à la foule.',
      es: 'Gradación de color acero frío que le da a la escena una frialdad urbana y misterio nocturno. Perfecto para secuencias nocturnas de la ciudad, aislamiento emocional, agotamiento y la soledad entre la multitud.',
      ko: '차가운 강철 톤의 컬러 그레이딩으로 도회적인 냉정함과 밤의 신비로움을 선사합니다. 도시의 야경 시퀀스, 감정적 고립, 탈진 상태, 그리고 대중 속의 고독을 표현하는 데 더할 나위 없이 좋습니다.',
      zh: '冷钢蓝色调，赋予场景都市冷峻感和夜色神秘感。非常适合用于城市夜景序列、情感孤立、疲惫不堪以及人群中的孤独感表现。'
    },
    desc: { ar: 'بارد فولاذي', en: 'Cold steel', fr: 'Acier froid', es: 'Acero frío', ko: '철제 실버블루', zh: '冷酷钢青' }
  },
  'Vintage Film': {
    name: { ar: 'فينتاج فيلم', en: 'Vintage Film', fr: 'Rétro / Vintage', es: 'Película Vintage', ko: '빈티지 필름', zh: '复古胶片' },
    tooltip: {
      ar: 'يحاكي مظهر الأفلام القديمة من السبعينيات والثمانينيات: سواد ممطوط فيه سمرة، ألوان شبه باهتة وحبيبات مرئية. يمنح الصورة شعوراً بأنها وُجدت دائماً وسينجو في الذاكرة.',
      en: 'Simulates the aged look of 70s-80s films: lifted blacks with warm undertone, slightly faded colors, visible grain — gives the image the feeling of having always existed and surviving in memory.',
      fr: 'Simule le look vieilli des films des années 70-80 : des noirs rehaussés avec des sous-tons chauds, des couleurs légèrement délavées, un grain visible — donne à l\'image le sentiment d\'avoir toujours existé et de subsister dans la mémoire.',
      es: 'Simula el aspecto envejecido de las películas de los años 70 y 80: negros realzados con matiz cálido, colores ligeramente desvaídos, grano visible; le da a la imagen la sensación de haber existido siempre y de sobrevivir en la memoria.',
      ko: '70~80년대 필름의 오래된 감성을 시뮬레이션합니다. 따뜻한 언더톤과 리프티드 블랙(lifted blacks), 약간 바랜 색상, 선명한 입자감 — 항상 존재해 왔으며 기억 속에 생생히 살아남아 있는 듯한 느낌을 줍니다.',
      zh: '模拟70-80年代电影的胶片旧质感：带有温暖底色的高光黑（褪色黑）、微褪的色彩、清晰可见的颗粒——给画面一种历久弥新、封存于记忆深处的质感。'
    },
    desc: { ar: 'تقليدي قديم', en: '70s vintage', fr: 'Années 70 vintage', es: 'Años 70 vintage', ko: '70년대 무비 룩', zh: '70年代质感' }
  },
  'Desaturated Bleach': {
    name: { ar: 'باهت حربي', en: 'Desaturated Bleach', fr: 'Bleach Bypass désaturé', es: 'Bleach Bypass desaturado', ko: '탈색 기법 (Bleach)', zh: '低饱和跳银' },
    tooltip: {
      ar: 'تقنية تصوير سينمائية تجمع بين الطباعة الكيميائية والتسوية الرقمية لإنتاج تباين عالٍ وألوان مسحوبة الحياة تقريباً. مثالية لمشاهد الحرب والتوتر الشديد والحياة في أعنف لحظاتها.',
      en: 'Chemical-digital combination that produces high contrast with nearly drained colors. Perfect for war scenes, extreme tension, and life at its most brutal and desperate moments.',
      fr: 'Combinaison chimico-numérique qui produit un contraste élevé avec des couleurs presque totalement désaturées (bleach bypass). Idéal pour les scènes de guerre, les tensions extrêmes et la vie dans ses moments les plus brutaux et désespérés.',
      es: 'Combinación químico-digital que produce un alto contraste con colores casi completamente drenados (bleach bypass). Perfecto para escenas de guerra, tensión extrema y la vida en sus momentos más brutales y desesperados.',
      ko: '화학적/디지털 하이브리드 처리를 통해 높은 대비와 거의 다 빠진 듯한 탈색된 색조를 만듭니다(블리치 바이패스 효과). 전쟁 장면, 극도의 긴장 상황, 그리고 삶의 가장 잔혹하고 절박한 순간에 대입하기 좋습니다.',
      zh: '结合化学与数字冲印的工艺（银留冲印效果），产生高对比度以及近乎抽干的色彩。非常适合战争场面、极度紧张的氛围以及展现生命中最残酷和最绝望的时刻。'
    },
    desc: { ar: 'باهت حرب', en: 'War gritty', fr: 'Guerre réaliste sombre', es: 'Guerre realist sombre', ko: '거칠고 메마른 톤', zh: '纪实战争粗糙感' }
  },
  'Natural Light Only': {
    name: { ar: 'ضوء طبيعي فقط', en: 'Natural Light Only', fr: 'Lumière Naturelle Uniquement', es: 'Solo Luz Natural', ko: '순수 자연광', zh: '仅限自然光' },
    tooltip: {
      ar: 'لا مصابيح صناعية ولا إضاءة استوديو — الضوء الوحيد هو ما تمنحه الطبيعة: الشمس، القمر، نافذة. يمنح الصورة صدقاً وعفوية لا مثيل لها. أسلوب لوبيزكي وماليك في أنقى حالاته.',
      en: 'No artificial lights, no studio setup — only what nature provides: sun, moon, or window light. Grants unparalleled authenticity and spontaneity. Lubezki and Malick\'s philosophy in its purest form.',
      fr: 'Pas de lumières artificielles, pas de configuration de studio — uniquement ce que la nature fournit : la lumière du soleil, de la lune ou d\'une fenêtre. Confère une authenticité et une spontanéité inégalées. La philosophie de Lubezki et Malick dans sa forme la plus pure.',
      es: 'Sin luces artificiales ni montajes de estudio: solo lo que la naturaleza provee: la luz del sol, de la luna o de una ventana. Otorga una autenticidad y espontaneidad inigualables. La filosofía de Lubezki y Malick en su forma más pura.',
      ko: '인공 조명이나 스튜디오 세팅 없이 오직 태양, 달, 창문 등 자연이 제공하는 빛만 사용합니다. 타의 추종을 불허하는 신뢰성과 즉흥성을 부여하며, 루베즈키와 맬릭 감독의 철학을 가장 순수하게 구현해 냅니다.',
      zh: '没有人工光源，没有影棚布置——只利用大自然提供的一切：太阳、月亮或窗光。带来无可比拟的真实感与自然灵动。这是卢贝兹基与马力克纯粹主义创作哲学的完美体现。'
    },
    desc: { ar: 'طبيعي نقي', en: 'Pure natural', fr: 'Natural pur', es: 'Natural puro', ko: '창문 채광', zh: '自然漫射' }
  },
  'Golden Hour': {
    name: { ar: 'الساعة الذهبية', en: 'Golden Hour', fr: 'Heure Dorée', es: 'Hora Dorada', ko: '골든 아워', zh: '黄金时刻' },
    tooltip: {
      ar: 'الساعة بعد الشروق أو قبل الغروب مباشرة. الشمس منخفضة فتمنح ضوءاً ذهبياً دافئاً يغلف الشخصيات من الخلف بهالة مضيئة رومانسية. الوقت الأجمل في العالم للتصوير دون استثناء.',
      en: 'The hour after sunrise or just before sunset. Low sun grants warm golden light that wraps characters from behind with a romantic glowing halo — universally considered the most beautiful filming light in the world.',
      fr: 'L\'heure après le lever du soleil ou juste avant son coucher. Le soleil bas offre une lumière dorée et chaleureuse qui enveloppe les personnages par-derrière d\'un halo lumineux romantique — universellement considérée comme la plus belle lumière de tournage au monde.',
      es: 'La hora posterior al amanecer o justo antes del atardecer. El sol bajo otorga una luz dorada y cálida que envuelve a los personajes desde atrás con un halo romántico y brillante; considerada universalmente como la luz de rodaje más hermosa del mundo.',
      ko: '일출 직후나 일몰 직전의 시간대. 낮게 깔린 태양이 뒤편에서 등장인물을 감싸 안는 낭만적이고 찬란한 황금빛 헤일로를 만들어내며 — 촬영 감독들이 입을 모아 세계에서 가장 매력적인 촬영 광선으로 꼽는 황금빛 시간대입니다.',
      zh: '日出后或日落前的一小时。低角度的太阳带来温暖的金色光芒，从后方包裹着角色，形成一圈浪漫而闪耀的光晕——被公认为世界上最迷人的摄制光线。'
    },
    desc: { ar: 'غروب ذهبي', en: 'Golden sunset', fr: 'Coucher de soleil doré', es: 'Puesta de sol dorada', ko: '매직아워 태양광', zh: '金色斜阳' }
  },
  'Chiaroscuro': {
    name: { ar: 'تشياروسكورو', en: 'Chiaroscuro', fr: 'Clair-obscur', es: 'Claroscuro', ko: '키아로스쿠رو', zh: '明暗对照法' },
    tooltip: {
      ar: 'أسلوب رامبرانت الفني: التباين الشديد بين الضوء الساطع والظلام العميق. يُشكّل الوجوه بقوة ويمنح المشهد عمقاً دراماتيكياً. استُخدم في أفلام الغانغستر والدراما الكلاسيكية النوار على مدى عقود.',
      en: 'Rembrandt\'s artistic technique: extreme contrast between intense light and deep shadow. Powerfully sculpts faces and grants the scene dramatic depth — used in gangster films and classic noir dramas for decades.',
      fr: 'La technique artistique de Rembrandt : contraste extrême entre une lumière intense et des ombres profondes. Sculpte puissamment les visages et confère au plan une profondeur dramatique — utilisée dans les films de gangsters et les drames noirs classiques depuis des décennies.',
      es: 'La técnica artística de Rembrandt: contraste extremo entre luz intensa y sombra profunda. Esculpe con fuerza los rostros y otorga a la escena una profundidad dramática, utilizada en películas de gángsters y dramas clásicos de cine negro durante décadas.',
      ko: '렘브란트의 미술 기법인 명암대비법(키아로스쿠로). 강렬한 빛과 깊은 어둠 사이의 극명한 대비로 인물의 얼굴을 입체적으로 묘사하고 장면에 극적인 깊이를 부여합니다. 수십 년 동안 갱스터 영화와 고전 누아르 드라마에 널리 쓰였습니다.',
      zh: '伦勃朗的艺术技法：强光与深影的极端对比（明暗对照法）。强力塑造面部轮廓并赋予场景戏剧性的深度——数十年来广泛应用于黑帮电影和经典黑色电影。'
    },
    desc: { ar: 'درامي كلاسيكي', en: 'Classic dramatic', fr: 'Rembrandt dramatique', es: 'Rembrandt dramático', ko: '렘브란트 화풍', zh: '伦勃朗式戏剧光' }
  },
  'Neon Lit': {
    name: { ar: 'نيون مدن', en: 'Neon Lit', fr: 'Éclairage Néon', es: 'Iluminación Neón', ko: '도시 네온사인', zh: '霓虹灯光' },
    tooltip: {
      ar: 'إضاءة المدينة المعاصرة: لافتات النيون الملونة والأضواء الحضرية المختلطة تغمر الشخصية بألوان صاخبة وجذابة. مثالية لمشاهد المدن الليلية والسايبربانك والحياة في الشوارع التي تعيش على الحافة.',
      en: 'Contemporary urban lighting: colorful neon signs and mixed city lights bathe the character in loud, attractive colors — perfect for nighttime city sequences, cyberpunk aesthetics, and edge-of-life street stories.',
      fr: 'Éclairage urbain contemporain : des enseignes au néon colorées et des éclairages de ville mixtes baignent le personnage de couleurs intenses et attrayantes — parfait pour les séquences nocturnes citadines, l\'esthétique cyberpunk et les récits de rue marginaux.',
      es: 'Iluminación urbana contemporánea: letreros de neón coloridos y luces mixtas de la ciudad bañan al personaje con colores intensos y atractivos; perfecto para secuencias urbanas nocturnas, estética cyberpunk e historias callejeras en el límite de la vida.',
      ko: '현대적 도심의 조명: 화려한 네온사인과 혼합된 도시의 불빛이 인물을 강렬하고 매혹적인 색채로 물들입니다 — 도시 야경 시퀀스, 사이버펑크 미학, 그리고 벼랑 끝의 삶을 사는 거리의 이야기를 다루기에 완벽합니다.',
      zh: '当代城市照明：色彩斑斓的霓虹灯招牌与复杂的都市灯光相交织，将角色沐浴在鲜艳迷人的色彩中——非常适合都市夜景、赛博朋克美学以及游走在边缘的街头故事。'
    },
    desc: { ar: 'نيون حضري', en: 'Neon urban', fr: 'Cyberpunk neon', es: 'Cyberpunk neón', ko: '사이버 펑크 네온', zh: '赛博朋克炫彩' }
  },
  'Practical Lights': {
    name: { ar: 'أضواء عملية', en: 'Practical Lights', fr: 'Lumières Pratiques', es: 'Luces Prácticas', ko: '실감형 소품광 (Practical)', zh: '实景光源/道具光源' },
    tooltip: {
      ar: 'يستخدم فقط مصادر الضوء الموجودة فعلاً في المشهد: لمبات التوهج، شمعات، تلفزيون يعمل، نافذة مشمسة. يمنح الصورة واقعية مذهلة ودفءاً مدروساً بدون أي مصباح خارجي مصطنع.',
      en: 'Uses only real in-scene light sources: incandescent bulbs, candles, active TV screens, sunlit windows — delivers stunning realism and deliberate warmth with zero artificial external lighting.',
      fr: 'Utilise uniquement les sources lumineuses réellement présentes dans la scène : ampoules à incandescence, bougies, écrans de télévision allumés, fenêtres ensoleillées — apporte un réalisme saisissant et une chaleur intentionnelle, sans aucun éclairage externe artificiel.',
      es: 'Utiliza únicamente fuentes de luz reales de la escena: bombillas incandescentes, velas, pantallas de televisión activas, ventanas soleadas; ofrece un realismo impresionante y una calidez intencional sin iluminación externa artificial.',
      ko: '백열전구, 촛불, 켜져 있는 TV 스크린, 햇살이 들어오는 창문 등 실제 장면에 존재하는 광원만을 사용합니다 — 인공적인 외부 조명 없이 탁월한 사실감과 계산된 온기를 선사합니다.',
      zh: '仅使用场景中实际存在的光源：白炽灯泡、蜡烛、开着的电视机屏幕、阳光照射的窗户——在零人工外部照明的情况下，呈现令人惊叹的写实感与刻意设计的温馨感。'
    },
    desc: { ar: 'عملي واقعي', en: 'Practical natural', fr: 'Sources réelles', es: 'Fuentes reales', ko: '화면 내 실제 광원', zh: '场景自发光' }
  },
  'Moonlight': {
    name: { ar: 'نور القمر', en: 'Moonlight', fr: 'Clair de Lune', es: 'Luz de Luna', ko: '차가운 달빛', zh: 'مستوى القمر' },
    tooltip: {
      ar: 'ضوء القمر البارد الأزرق الهاديء الذي يلقي ظلالاً طويلة وغامضة. يمنح المشهد الليلي روحانية وغموضاً ونقاءً سحرياً. مثالي للمشاهد الليلية الهادئة والشعرية والمحطات العاطفية الكبرى.',
      en: 'Cold blue moonlight casting long, mysterious shadows. Grants nocturnal scenes a spiritual, enigmatic, and magical purity — perfect for quiet night sequences, poetic moments, and major emotional turning points.',
      fr: 'Lumière lunaire bleue et froide projetant des ombres longues et mystérieuses. Elle confère aux scènes nocturnes une pureté spirituelle, énigmatique et magique — idéale pour les séquences nocturnes calmes, les moments poétiques et les tournants émotionnels majeurs.',
      es: 'Luz de luna azul y fría que proyecta sombras largas y misteriosas. Otorga a las escenas nocturnas una pureza espiritual, enigmática y mágica, ideal para secuencias nocturnas tranquilas, momentos poéticos y grandes giros emocionales.',
      ko: '길고 신비로운 그림자를 드리우는 차가운 푸른 달빛. 야간 장면에 영적이고 수수께끼 같으며 마법 같은 순수함을 부여합니다. 고요한 밤 시퀀스, 시적인 순간, 그리고 주요 감정적 전환점에 완벽합니다.',
      zh: '冷蓝色月光投射出漫长而神秘的阴影。赋予夜景一种精神、神秘和魔幻般的纯洁感——非常适合安静的夜间镜头、诗意时刻以及重大情感转折点。'
    },
    desc: { ar: 'قمري بارد', en: 'Moonlit', fr: 'Mystérieux lunaire', es: 'Misterioso lunar', ko: '푸른 그림자 밤광', zh: '冷蓝月影' }
  },
  'Blue Hour with Glass Reflections': {
    name: { ar: 'الساعة الزرقاء وانعكاسات زجاجية', en: 'Blue Hour with Glass Reflections', fr: 'Heure bleue et reflets vitrés', es: 'Hora azul con reflejos en vidrio', ko: '유리 반사가 있는 블루 아워', zh: '蓝调时刻与玻璃反射' },
    tooltip: {
      ar: 'يمزج زرقة السماء الباردة في الغسق بدفء الأضواء الداخلية عبر انعكاسات النوافذ الزجاجية.',
      en: 'Blends cool twilight skies with warm internal lights through multi-layered glass reflections.',
      fr: 'Mélange la fraîcheur du ciel crépusculaire et la chaleur des lumières intérieures à travers des reflets vitrés multicouches.',
      es: 'Combina los tonos fríos del cielo crepuscular con la calidez de las luces interiores a través de múltiples capas de reflejos en vidrio.',
      ko: '다층 유리창 반사를 통해 황혼의 차가운 하늘빛과 따뜻한 내부 조명을 자연스럽게 블렌딩합니다.',
      zh: '通过多层玻璃反射，将暮色天空的冷色调与室内灯光的暖色调融合在一起。'
    },
    desc: { ar: 'تدرج طبيعي وانعكاسات', en: 'Twilight window reflections', fr: 'Reflets de fenêtres au crépuscule', es: 'Reflejos de ventanas en el crepúsculo', ko: '황혼녘 창문 반사', zh: '黄昏玻璃窗反射' }
  },
  'Volumetric Golden Ray': {
    name: { ar: 'أشعة ذهبية مجسمة', en: 'Volumetric Golden Ray', fr: 'Rayon d\'or volumétrique', es: 'Rayos volumétricos dorados', ko: '볼류메트릭 골든 레이', zh: '体积感金色光束' },
    tooltip: {
      ar: 'أشعة ضوئية ملموسة (Volumetric) تخترق ذرات الغبار أو الضباب لتوليد توهج ملحمي ساحر.',
      en: 'Thick volumetric sunbeams piercing atmospheric haze to create an ethereal scene presence.',
      fr: 'De denses rayons de soleil volumétriques perçant la brume atmosphérique pour créer une présence céleste.',
      es: 'Densos rayos solares volumétricos que atraviesan la bruma atmosférica para crear una presencia etérea en la escena.',
      ko: '대기 중의 연무를 뚫고 나오는 굵고 입체적인 햇살(볼류메트릭)로 초현실적이고 천상계 같은 분위기를 자아냅니다.',
      zh: '厚重的体积感金色光束穿透大气薄雾，营造出空灵神圣的画面质感。'
    },
    desc: { ar: 'أشعة ضوء تخترق الغبار', en: 'Sunbeams piercing dust', fr: 'Rayons de soleil traversant la poussière', es: 'Rayos de sol atravesando el polvo', ko: '먼지를 뚫고 나오는 햇살', zh: '穿透尘埃的阳光' }
  },
  'Neon Noir / Cyberpunk Wetness': {
    name: { ar: 'نيون نوار وانعكاسات مبللة', en: 'Neon Noir / Cyberpunk Wetness', fr: 'Néon noir / Esthétique cyberpunk humide', es: 'Neon Noir / Estética cyberpunk húmeda', ko: '네온 누아르 / 사이버펑크 웻 룩', zh: '霓虹黑色电影 / 赛博朋克潮湿感' },
    tooltip: {
      ar: 'إضاءة نوار مستقبلية تعكس إشعاعات النيون الملونة على الأسفلت المبلل وبرك الأمطار.',
      en: 'Vibrant neon bounce on rain-slicked streets creating an immersive cyberpunk noir style.',
      fr: 'Reflets vibrants de néons sur les rues trempées par la pluie, créant un style cyberpunk noir immersif.',
      es: 'Brillantes reflejos de luces de neón en calles mojadas por la lluvia, creando un estilo cyberpunk noir inmersivo.',
      ko: '비에 젖은 아스팔트에 반사되는 생동감 넘치는 네온 조명으로 몰입감 있는 사이버펑크 누아르 스타일을 연출합니다.',
      zh: '雨水打湿的街道上反射出绚丽的霓虹光影，营造出极具沉浸感的赛博朋克黑色风格。'
    },
    desc: { ar: 'أسطح مبللة وتباين عالي', en: 'Wet reflective cyber look', fr: 'Look cyber-réfléchissant et humide', es: 'Aspecto ciber-reflectante y húmedo', ko: '젖은 노면의 반짝이는 사이버 룩', zh: '潮湿反射的赛博质感' }
  },
  'Bleak Overcast / Soft Diffused': {
    name: { ar: 'إضاءة غائمة وناعمة', en: 'Bleak Overcast / Soft Diffused', fr: 'Temps maussade couvert / Lumière douce diffuse', es: 'Nublado sombrío / Luz difusa suave', ko: '음울한 흐린 날씨 / 부드러운 확산광', zh: '阴郁阴天 / 柔和漫射光' },
    tooltip: {
      ar: 'ضوء نهار غائم وموزع بنعومة يمحو الظلال الحادة لإبراز أدق تفاصيل الدرجات المتوسطة.',
      en: 'Flat, soft diffused ambient sky illumination highlighting fine midtone textures unhindered by hard cast shadows.',
      fr: 'Éclairage ambiant plat et doux du ciel couvert, mettant en valeur les textures délicates des tons moyens sans être perturbé par des ombres portées dures.',
      es: 'Iluminación ambiental difusa, suave y plana del cielo que resalta las texturas sutiles de los tonos medios sin la interferencia de sombras marcadas.',
      ko: '강하고 비치는 그림자 없이 부드럽게 확산된 흐린 하늘의 조명으로 미세한 중간 톤의 질감을 선명하게 보여줍니다.',
      zh: '平坦、柔和漫射的阴天环境光，凸显细腻的中调质感，不受生硬投影阴影的干扰。'
    },
    desc: { ar: 'تباين مسطح وتفاصيل ناعمة', en: 'Soft diffused flat contrast', fr: 'Contraste plat et lumière douce diffuse', es: 'Contraste plano y luz difusa suave', ko: '부드럽게 확산된 평평한 대비', zh: '柔和漫射与平淡对比' }
  },
  '2.39:1 Cinema Wide': {
    name: { ar: '2.39:1 سينمائي عريض', en: '2.39:1 Cinema Wide', fr: '2.39:1 Cinéma Scope', es: '2.39:1 Formato Anamórfico', ko: '2.39:1 시네마 와이드', zh: '2.39:1 电影宽银幕' },
    tooltip: {
      ar: 'نسبة الشاشة الأنامورفيكية الكلاسيكية. أعرض نسبة في السينما التجارية — تمنح إحساساً ملحمياً وعالمياً. الخيار الأول للأفلام التجارية الكبرى مثل Star Wars وDune والأعمال الملحمية.',
      en: 'Classic anamorphic cinema ratio — the widest in commercial film. Creates an epic, world-encompassing feel. First choice for major blockbusters like Star Wars, Dune, and large-scale epic productions.',
      fr: 'Format cinéma anamorphique classique — le plus large du cinéma commercial. Crée une sensation épique qui englobe tout un monde. Premier choix pour les grands blockbusters comme Star Wars, Dune et les productions épiques à grande échelle.',
      es: 'Relación de aspecto cinematográfica anamórfica clásica: la más amplia del cine comercial. Crea una sensación épica y global. La primera opción para grandes éxitos de taquilla como Star Wars, Dune y producciones épicas a gran escala.',
      ko: '클래식 아나모픽 시네마 비율 — 상업 영화에서 가장 넓은 비율입니다. 장대하고 세계를 아우르는 듯한 느낌을 줍니다. 스타워즈, 듄과 같은 대작 블록버스터 및 대규모 서사시 제작에 가장 먼저 선택됩니다.',
      zh: '经典变形宽银幕电影比例——商业电影中最宽的比例。营造出一种史诗般、包罗万象的感觉。是《星球大战》、《沙丘》等大型商业大片 and 宏大史诗制作的首选。'
    },
    desc: { ar: 'أنامورفيك عريض', en: 'Anamorphic widescreen', fr: 'Cinéma large', es: 'Cine ancho', ko: '와이드 아나모픽', zh: '变形宽荧幕' }
  },
  '16:9 Widescreen': {
    name: { ar: '16:9 شاشة عريضة', en: '16:9 Widescreen', fr: '16:9 Grand Écran', es: '16:9 Pantalla Panorámica', ko: '16:9 와이드 스크린', zh: '16:9 标清宽屏' },
    tooltip: {
      ar: 'النسبة القياسية للتلفزيون الحديث والبث الرقمي والمنصات كـ Netflix و YouTube. تمنح مساحة أفقية جيدة مع التوافق مع جميع الشاشات المعاصرة. الخيار الأذكى للمحتوى الرقمي.',
      en: 'Standard ratio for modern TV, streaming, and digital platforms like Netflix and YouTube. Provides good horizontal space with universal screen compatibility — the smart choice for digital content.',
      fr: 'Format standard pour la télévision moderne, le streaming et les plateformes numériques comme Netflix et YouTube. Offre un bon espace horizontal avec une compatibilité universelle sur tous les écrans — le choix intelligent pour le contenu numérique.',
      es: 'Relación de aspecto estándar para televisión moderna, streaming y plataformas digitales como Netflix y YouTube. Ofrece un buen espacio horizontal con compatibilidad universal de pantalla: la opción inteligente para contenido digital.',
      ko: '현대 TV, 스트리밍, 그리고 넷플릭스나 유튜브와 같은 디지털 플랫폼의 표준 비율입니다. 뛰어난 가로 공간과 보편적인 화면 호환성을 제공하여 디지털 콘텐츠를 위한 현명한 선택입니다.',
      zh: '现代电视、流媒体和 Netflix、YouTube 等数字平台的标准比例。提供良好的水平空间和通用屏幕兼容性——是数字内容的智慧之选。'
    },
    desc: { ar: 'شاشات التلفزيون', en: 'Standard widescreen', fr: 'Écran plat standard', es: 'Pantalla estándar', ko: 'TV 표준 비율', zh: '现代电视及显示器' }
  },
  '4:3 Academy': {
    name: { ar: '4:3 كلاسيكي', en: '4:3 Academy', fr: '4:3 Académique', es: '4:3 Formato Clásico', ko: '4:3 아카데미 / 클래식', zh: '4:3 学院比例/复古方画幅' },
    tooltip: {
      ar: 'نسبة الأفلام الكلاسيكية حتى الخمسينيات ونسبة التلفزيون القديم. تمنح الصورة ملمساً نوستالجياً ومربعاً يذكّر بسينما هوليوود الذهبية. وايس أندرسون استخدمها في "The Grand Budapest Hotel" ببراعة فائقة.',
      en: 'Classic film ratio through the 1950s and vintage TV format. Gives the image a square, nostalgic texture reminiscent of golden Hollywood. Wes Anderson masterfully used it in The Grand Budapest Hotel.',
      fr: 'Format de film classique jusqu\'aux années 1950 et format de télévision vintage. Donne à l\'image une texture carrée et nostalgique qui rappelle l\'âge d\'or d\'Hollywood. Wes Anderson l\'a magistralement utilisé dans The Grand Budapest Hotel.',
      es: 'Relación de aspecto clásica del cine hasta la década de 1950 y formato de televisión vintage. Aporta a la imagen una textura cuadrada y nostálgica que evoca la época dorada de Hollywood. Wes Anderson la utilizó magistralmente en The Grand Budapest Hotel.',
      ko: '1950년대까지의 클래식 영화 비율 및 빈티지 TV 포맷입니다. 할리우드의 황금기를 연상시키는 사각형의 향수 어린 질감을 이미지에 부여합니다. 웨스 앤더슨 감독이 \'그랜드 부다페스트 호텔\'에서 이 비율을 거장답게 사용했습니다.',
      zh: '20世纪50年代以前的经典电影比例及复古电视格式。赋予画面一种方形、怀旧的质感，让人联想起好莱坞的黄金时代。韦斯·安德森在《布达佩斯大饭店》中巧妙地运用了这一比例。'
    },
    desc: { ar: 'سينما كلاسيكية قديمة', en: 'Classic retro look', fr: 'Cinéma rétro vintage', es: 'Cine retro vintage', ko: '고전 영화 스타일', zh: '老式胶片胶卷感' }
  },
  '9:16 Vertical': {
    name: { ar: '9:16 عمودي', en: '9:16 Vertical', fr: '9:16 Vertical', es: '9:16 Vertical', ko: '9:16 세로 비율', zh: '9:16 竖屏移动端比例' },
    tooltip: {
      ar: 'نسبة الشاشة العمودية للجوال والتطبيقات كـ Instagram Reels وTikTok وSnapchat. مصممة لحمل الهاتف بشكل طبيعي. تُركز على الشخص الواحد أو العنصر الرئيسي بشكل عمودي مكثف.',
      en: 'Vertical mobile ratio for Instagram Reels, TikTok, and Snapchat. Designed for natural phone holding orientation — focuses intensely on a single person or main element in a vertical, immersive frame.',
      fr: 'Format mobile vertical pour Instagram Reels, TikTok et Snapchat. Conçu pour une orientation naturelle du téléphone en main — se concentre intensément sur une seule personne ou sur l\'élément principal dans un cadre vertical immersif.',
      es: 'Relación de aspecto vertical para mobiles, ideal para Instagram Reels, TikTok y Snapchat. Diseñada para la orientación natural al sostener el teléfono: se enfoca intensamente en una sola persona o elemento principal en un encuadre vertical e inmersivo.',
      ko: '인스타그램 릴스, 틱톡, 스냅챗을 위한 세로형 모바일 비율입니다. 자연스럽게 휴대폰을 쥐는 방향에 맞게 설계되어, 세로형 몰입형 프레임 안에서 단 한 사람이나 주요 요소에 강렬하게 집중합니다.',
      zh: '适用于 Instagram Reels、TikTok 和 Snapchat 的垂直移动端比例。专为自然握持手机的方向而设计——在垂直、沉浸式的画幅中，强烈聚焦于单个人或核心元素。'
    },
    desc: { ar: 'مخصص للجوال', en: 'Mobile vertical', fr: 'Spécial mobile', es: 'Especial móvil', ko: '스마트폰 숏폼 규격', zh: '专供智能手机' }
  },
  '1:1 Square': {
    name: { ar: '1:1 مربع', en: '1:1 Square', fr: '1:1 Carré', es: '1:1 Cuadrado', ko: '1:1 정사각형', zh: '1:1 正方形画幅' },
    tooltip: {
      ar: 'الإطار المربع المثالي. ألغى الاختيار بين الأفقي والعمودي. يمنح التكوين توازناً هندسياً منقطع النظير ويُجبر المصور على التفكير في التكوين المركزي بشكل أعمق. شائع في الفنون البصرية والأزياء.',
      en: 'The perfect square frame — eliminates horizontal/vertical choice. Forces centered compositional thinking with unmatched geometric balance — popular in visual arts, fashion photography, and design-forward content.',
      fr: 'Le cadre carré parfait — élimine le choix entre horizontal et vertical. Impose une réflexion de composition centrée avec un équilibre géométrique inégalé — populaire dans les arts visuels, la photographie de mode et le design de pointe.',
      es: 'El encuadre cuadrado perfecto: elimina la elección entre horizontal y vertical. Obliga a pensar en una composición centrada con un equilibrio geométrico sin igual; de gran popularidad en las artes visuales, la fotografía de moda y el diseño de vanguardia.',
      ko: '완벽한 정사각형 프레임 — 가로/세로의 선택 고민을 없애줍니다. 타의 추종을 불허하는 기하학적 균형으로 중앙 집중식 구도 설정을 유도하며, 시각 예술, 패션 사진, 디자인 중심 콘텐츠에서 큰 인기를 얻고 있습니다.',
      zh: '完美的正方形画幅——省去了横屏或竖屏的选择。以无与伦比的几何平衡强迫进行中心构图思考——在视觉艺术、时尚摄影和设计前沿内容中广受欢迎。'
    },
    desc: { ar: 'تأطير مربع متوازن', en: 'Square composition', fr: 'Cadrage carré équilibré', es: 'Encuadre cuadrado equilibrado', ko: '인스타그램 비율', zh: '均衡静态视觉' }
  },
  'Malick Natural Light': {
    name: { ar: 'ضوء طبيعي ماليك', en: 'Malick Natural Light', fr: 'Lumière Naturelle Malick', es: 'Luz Natural Malick', ko: '테렌스 멜릭식 자연광', zh: '马力克自然逆光风格' },
    tooltip: {
      ar: 'أسلوب المخرج ترنس ماليك الشعري: ضوء طبيعي خالص يأتي من الخلف فيمنح الشخصيات هالات ذهبية. الكاميرا تجوب بحرية مع حوارات عضوية غير مُعدّة. الإحساس: وثائقي شعري خارج الزمن.',
      en: 'Terrence Malick\'s poetic cinema: pure backlit natural light giving characters golden halos. Camera roams freely with organic non-scripted dialogues. The feeling: a timeless, poetic documentary of human souls.',
      fr: 'Le cinéma poétique de Terrence Malick : une lumière naturelle pure à contre-jour qui donne aux personnages des halos dorés. La caméra se déplace librement au gré de dialogues organiques non scénarisés. Le sentiment : un documentaire poétique et intemporel sur l\'âme humaine.',
      es: 'El cine poético de Terrence Malick: luz natural pura a contraluz que otorga halos dorados a los personajes. La cámara deambula libremente con diálogos orgánicos y no ensayados. La sensación: un documental poético y atemporal de las almas humanas.',
      ko: '테렌스 맬릭 감독의 시적 시네마. 순수한 역광의 자연광이 인물에게 금빛 후광을 선사합니다. 대본에 얽매이지 않는 유기적인 대사와 함께 카메라가 자유롭게 거닐며, 시간의 흐름을 초월한 인간 영혼에 관한 시적인 다큐멘터리 같은 느낌을 줍니다.',
      zh: '泰伦斯·马力克的诗意电影：纯逆光自然光影，为角色披上金色光环。摄影机伴随着有机的即兴对话自由漫步。给人的感觉是：一部关于人类灵魂的永恒而诗意的纪录片。'
    },
    desc: { ar: 'ماليك طبيعي', en: 'Malick natural', fr: 'Rendu naturel Malick', es: 'Acabado natural Malick', ko: '멜릭풍 실외 채광', zh: '大逆光镜头' }
  },
  'Long Takes': {
    name: { ar: 'لقطات طويلة', en: 'Long Takes', fr: 'Plans-Séquences', es: 'Planos Secuencia', ko: '롱테이크 기법', zh: '长镜头/一镜到底' },
    tooltip: {
      ar: 'تصوير مشاهد كاملة في لقطة واحدة متواصلة دون مونتاج. يخلق توتراً حقيقياً ويمنح الممثلين مساحة الحياة الكاملة. أشهر الأمثلة: افتتاح "Touch of Evil" لأورسون ويلز و"1917" لسام ميندز.',
      en: 'Filming complete scenes in one uncut continuous shot. Creates real tension and grants actors space to breathe and perform fully. Famous examples: Orson Welles\' Touch of Evil opening, Sam Mendes\' 1917.',
      fr: 'Filmer des scènes complètes en un seul plan-séquence ininterrompu. Crée une tension réelle et laisse aux acteurs tout l\'espace nécessaire pour respirer et s\'exprimer pleinement. Exemples célèbres : l\'ouverture de "La Soif du mal" d\'Orson Welles, ou "1917" de Sam Mendes.',
      es: 'Filmar escenas completas en una sola toma continua y sin cortes. Crea una tensión real y otorga a los actores el espacio para respirar e interpretar plenamente. Ejemplos famosos: la secuencia de apertura de Sed de mal de Orson Welles, 1917 de Sam Mendes.',
      ko: '편집 없이 하나의 연속된 컷으로 전체 씬을 촬영하는 기법(롱테이크). 실제와 같은 긴장감을 조성하고 배우들이 온전히 몰입하여 호흡하고 연기할 수 있는 공간을 제공합니다. 대표적인 사례: 오슨 웰스의 <악의 손길(Touch of Evil)> 오프닝, 샘 멘데스의 <1917>.',
      zh: '在一组不剪辑的连续长镜头中拍摄完整场景。营造真实的紧张感，并为演员提供充分呼吸和表演的空间。著名范例：奥逊·威尔斯《历劫佳人》的开场、萨姆·门德斯的《1917》。'
    },
    desc: { ar: 'لقطة طويلة', en: 'Long take', fr: 'Plan continu sans coupe', es: 'Plano continuo sin cortes', ko: '무편집 시퀀스', zh: '实时不剪辑持续拍摄' }
  },
  'Halation': {
    name: { ar: 'هالاسيون', en: 'Halation', fr: 'Halation argentique', es: 'Halación analógica', ko: '할레이션 효과', zh: '红晕扩散/胶片光晕' },
    tooltip: {
      ar: 'تأثير فيزيائي في أفلام 35mm: الضوء الساطع ينتشر ويتسرب خلف طبقة الإيمولسيون فيخلق توهجاً أحمرياً رومانسياً حول أي مصدر ضوء. يمنح الصورة دفءاً حالماً وملمساً تناظرياً بمتناهياً.',
      en: 'Physical effect in 35mm film: bright light bleeds behind the emulsion layer creating a romantic reddish glow around any light source — gives the image a dreamy warmth and an inimitable analog texture.',
      fr: 'Effet physique de la pellicule 35mm : la lumière vive se diffuse derrière la couche d\'émulsion, créant un éclat rougeâtre romantique autour de toute source lumineuse — confère à l\'image une chaleur onirique et une texture analogique inimitable.',
      es: 'Efecto físico en la película de 35 mm: la luz brillante se filtra detrás de la capa de emulsión, creando un romántico resplandor rojizo alrededor de cualquier fuente de luz. Aporta a la imagen una calidez de ensueño y una textura analógica inimitable.',
      ko: '35mm 필름의 물리적 효과: 밝은 빛이 감광 유제층 뒤로 번져 광원 주변에 낭만적인 붉은빛의 광륜을 만들어냅니다. 이미지에 꿈결 같은 따스함과 독보적인 아날로그 질감을 부여합니다.',
      zh: '35毫米胶片中的物理效应：强光渗入乳胶层背后，在任何光源周围营造出浪漫的微红色光晕——赋予画面一种梦幻般的温存和难以模仿的模拟胶片质感。'
    },
    desc: { ar: 'هالاسيون رومانسي', en: 'Halation glow', fr: 'Halo argentique rouge', es: 'Halo analógico rojo', ko: '하이라이트 불빛 번짐', zh: '复古高光边缘溢出' }
  },
  'Centered Symmetry': {
    name: { ar: 'توجيه مركزي', en: 'Centered Symmetry', fr: 'Symétrie Centrée Wes', es: 'Simetría Centrada Wes', ko: '중앙 집중식 대칭 구도', zh: '中心轴对称构图' },
    tooltip: {
      ar: 'الأسلوب البصري المميز لويس أندرسون: كل شيء مركزي ومتماثل بدقة رياضية مع ألوان باستيل مشبعة وتصميم إنتاج مُتقن. يمنح كل كادر جمالاً مُعادلاً للفن التصويري الراقي.',
      en: 'Wes Anderson\'s signature visual style: everything centered and mathematically symmetrical with saturated pastel colors and meticulous production design — makes every frame a visual art painting.',
      fr: 'Le style visuel caractéristique de Wes Anderson : tout est centré et mathématiquement symétrique, avec des couleurs pastel saturées et une conception de production méticuleuse — faisant de chaque plan un tableau d\'art visuel.',
      es: 'El estilo visual característico de Wes Anderson: todo centrado y matemáticamente simétrico con colores pastel saturados y un diseño de producción meticuloso, convirtiendo cada fotograma en una pintura de arte visual.',
      ko: '웨스 앤더슨 감독 특유의 비주얼 스타일. 채도가 높은 파스텔 톤의 색감과 정교한 프로덕션 디자인을 바탕으로, 프레임 안의 모든 요소를 중앙에 정렬하고 수학적인 대칭을 이룸으로써 모든 장면을 한 폭의 그림처럼 만들어 냅니다.',
      zh: '韦斯·安德森标志性的视觉风格：所有画面元素均居中且呈数学般的精准对称，搭配饱和的粉彩色调和细致入微的美术设计——使每一帧都成为一幅视觉艺术画作。'
    },
    desc: { ar: 'تماثل ويس', en: 'Wes symmetric', fr: 'Symétrie Wes Anderson', es: 'Simetría Wes Anderson', ko: '웨스 앤더슨 정대칭', zh: '韦斯·安德森式美学' }
  },
  'Rack Focus': {
    name: { ar: 'ريك فوكوس', en: 'Rack Focus', fr: 'Rack Focus', es: 'Cambio de Enfoque', ko: '초점 트랜지션 (Rack)', zh: '景深拉焦/转移焦点' },
    tooltip: {
      ar: 'تغيير التركيز البصري خلال اللقطة من عنصر لآخر لتوجيه انتباه المشاهد بشكل ناعم وحاسم. يُستخدم لكشف شخصية في الخلفية أو إبراز كلمة أو جسم حاسم في المقدمة دون قطع.',
      en: 'Shifting optical focus during a shot from one element to another to guide viewer attention softly yet decisively — used to reveal background characters or highlight a critical foreground object without any cut.',
      fr: 'Déplacement de la mise au point optique au cours d\'un plan d\'un élément à un autre pour guider l\'attention du spectateur de manière fluide mais décisive — utilisé pour révéler des personnages en arrière-plan ou mettre en valeur un objet crucial au premier plan sans aucune coupe.',
      es: 'Cambio del enfoque óptico durante una toma de un elemento a otro para guiar la atención del espectador de manera suave pero decisiva; se utiliza para revelar personajes de fondo o destacar un objeto crítico en primer plano sin necesidad de cortes.',
      ko: '촬영 중 광학 초점을 한 요소에서 다른 요소로 이동시켜 관객의 시선을 부드러우면서도 결정적으로 유도하는 기법입니다. 컷 없이 배경의 인물을 드러내거나 전경의 중요한 물체를 강조할 때 사용됩니다.',
      zh: '在镜头拍摄过程中将光学焦距从一个元素转移到另一个元素，以柔和而果断地引导观众的注意力——用于在不进行任何剪辑的情况下揭示背景人物或突出关键的前景物体。'
    },
    desc: { ar: 'تحويل التركيز', en: 'Rack focus shift', fr: 'Transition de focus', es: 'Transición de foco', ko: '초점 이동 설계', zh: '叙事核心转移' }
  },
  'Lens Flare': {
    name: { ar: 'ضربة انعكاس', en: 'Lens Flare', fr: 'Lens Flare', es: 'Destello de Lente', ko: '렌즈 플레어', zh: '镜头炫光/光斑' },
    tooltip: {
      ar: 'تأثير انعكاس الضوء داخل العدسة الأنامورفيكية مُنتجاً خطوطاً أفقية أو نجمية جميلة. في السينما الحديثة تحوّل من "خطأ" يُتجنب إلى أداة جمالية عاطفية تُوحي بالحلم والتطلع والجلال.',
      en: 'Light reflection inside anamorphic lens creating beautiful horizontal or star-like streaks. In modern cinema, transformed from an "error" to an emotional aesthetic tool evoking dreams, aspiration, and majesty.',
      fr: 'Reflet de la lumière à l\'intérieur d\'un objectif anamorphique, créant de magnifiques stries horizontales ou en forme d\'étoile. Dans le cinéma moderne, ce reflet est passé du statut d\'« erreur » à éviter à celui d\'outil esthétique émotionnel évoquant le rêve, l\'aspiration et la majesté.',
      es: 'Reflejo de luz dentro de un lente anamórfico que crea hermosos destellos horizontales o en forma de estrella. En el cine moderno, ha pasado de ser un "error" evitado a convertirse en una herramienta estética emocional que evoca sueños, aspiraciones y majestuosidad.',
      ko: '아나모픽 렌즈 내부의 빛 반사로 아름다운 가로 방향 또는 별 모양의 줄무늬 광원을 만들어내는 현상입니다. 현대 영화에서는 기피해야 할 \'실수\'에서 꿈, 열망, 장엄함을 일깨우는 감성적인 미적 도구로 탈바꿈했습니다.',
      zh: '变形镜头内部的光线反射，营造出优美的水平或星状条纹。在现代电影中，它已从需要避免的“错误”转化为一种情感美学工具，引发梦境、渴望和庄严感。'
    },
    desc: { ar: 'لفلير أنامورفيك', en: 'Anamorphic flare', fr: 'Streaks anamorphiques', es: 'Destellos anamórficos', ko: '아나모픽 블루 가로선', zh: '变形拉丝条纹光斑' }
  },
  'Lens Distortion': {
    name: { ar: 'بريق الإبداع', en: 'Lens Distortion', fr: 'Distorsion d’optique', es: 'Distorsión de lente', ko: '렌즈 디스토션', zh: '镜头光学畸变' },
    tooltip: {
      ar: 'تشويه طفيف في حواف الصورة يُقلّد خصائص العدسات القديمة الكلاسيكية. يمنح الصورة شخصية عضوية وتاريخاً بصرياً دون أن يكون التشويه مزعجاً أو مبالغاً فيه. نوستالجيا راقية.',
      en: 'Subtle edge distortion mimicking classic old lens characteristics. Gives the image an organic personality and visual history without being jarring — refined nostalgia with character and depth.',
      fr: 'Distorsion subtile des bords imitant les caractéristiques des anciens objectifs classiques. Donne à l\'image une personnalité organique et une histoire visuelle sans être dérangeante — une nostalgie raffinée avec du caractère et de la profondeur.',
      es: 'Distorsión sutil en los bordes que imita las características de los lentes antiguos clásicos. Aporta a la imagen una personalidad orgánica y una historia visual sin resultar molesta: nostalgia refinada con carácter y profundidad.',
      ko: '클래식한 올드 렌즈의 특성을 모방한 미세한 가장자리 왜곡입니다. 거슬리지 않으면서 이미지에 유기적인 개성과 시각적 역사감을 부여합니다 — 캐릭터와 깊이가 있는 정제된 향수를 선사합니다.',
      zh: '模仿经典旧镜头特性的细微边缘畸变。赋予画面有기의 个性和视觉历史感，且毫不显得突兀——具有性格和深度的精致怀旧感。'
    },
    desc: { ar: 'تشويه خفيف', en: 'Vintage distort', fr: 'Distorsion vintage', es: 'Distorsión vintage', ko: '미세 수차 왜곡', zh: '桶形/枕形复古失真' }
  },
  'Deep Focus Orson': {
    name: { ar: 'عمق سينمائي', en: 'Deep Focus Orson', fr: 'Deep Focus Orson Welles', es: 'Deep Focus Orson Welles', ko: '오손 웰즈식 팬포커스', zh: '奥逊·威尔斯全焦深' },
    tooltip: {
      ar: 'تقنية أورسون ويلز الثورية في "Citizen Kane": كل شيء في الكادر من المقدمة إلى أقصى خلفية حاد ومفصل بشكل مساوٍ. يمنح المشاهد حرية اختيار ما يركز عليه ويغني الكادر بطبقات سردية متعددة.',
      en: 'Orson Welles\' revolutionary technique from Citizen Kane: everything from foreground to far background equally sharp and detailed — gives viewers freedom to choose focus and layers the frame with multiple narrative dimensions.',
      fr: 'La technique révolutionnaire d\'Orson Welles dans Citizen Kane : tout, du premier plan à l\'arrière-plan le plus éloigné, est également net et détaillé — offrant aux spectateurs la liberté de choisir où porter leur regard et enrichissant le cadre de multiples dimensions narratives.',
      es: 'La técnica revolucionaria de Orson Welles en Ciudadano Kane: todo, desde el primer plano hasta el fondo más lejano, se muestra igualmente nítido y detallado, otorgando a los espectadores la libertad de elegir su enfoque y dotando al encuadre de múltiples dimensiones narrativas.',
      ko: '영화 <시민 케인>에서 오슨 웰스가 선보인 혁명적인 기법. 전경에서 아득한 원경까지 모든 요소가 동일하게 선명하고 상세하게 표현되어 관객에게 초점 선택의 자유를 주며, 프레임을 다층적인 서사적 차원으로 풍부하게 채웁니다.',
      zh: '奥逊·威尔斯在《公民凯恩》中使用的革命性技术：从前景到最远处的背景都同样清晰锐利——让观众得以自由选择关注焦点，并使画面的叙事维度更加丰富立体。'
    },
    desc: { ar: 'عمق ويلز', en: 'Deep focus Wells', fr: 'Tout net Orson Welles', es: 'Todo nítido Orson Welles', ko: '초광각 극강 깊이감', zh: '前后景全盘清晰' }
  },
  'Neorealist Style': {
    name: { ar: 'نيو ريالازم', en: 'Neorealist Style', fr: 'Style Néoréaliste', es: 'Estilo Neorrealista', ko: '이탈리아 네오리얼리즘', zh: '新现实主义纪实风' },
    tooltip: {
      ar: 'الحركة السينمائية الإيطالية بعد الحرب العالمية الثانية: تصوير في الشوارع الحقيقية مع ممثلين غير محترفين. الهدف: الوصول إلى حقيقة الحياة اليومية دون زخرفة. الرائدة: روسيليني ودي سيكا.',
      en: 'Post-WWII Italian cinema movement: real street locations with non-professional actors — aiming to reach the truth of daily life without any embellishment. Founded by Rossellini and De Sica, endlessly influential.',
      fr: 'Mouvement cinématographique italien de l\'après-Seconde Guerre mondiale : tournage dans de vraies rues avec des acteurs non professionnels — visant à atteindre la vérité de la vie quotidienne sans aucun embellissement. Fondé par Rossellini et De Sica, d\'une influence sans fin.',
      es: 'Movimiento cinematográfico italiano posterior a la Segunda Guerra Mundial: rodaje en localizaciones callejeras reales con actores no profesionales, con el objetivo de alcanzar la verdad de la vida cotidiana sin ningún adorno. Fundado por Rossellini y De Sica, infinitamente influyente.',
      ko: '제2차 세계대전 이후의 이탈리아 영화 운동: 비전문 배우들과 함께 실제 거리에서 촬영하여 아무런 미화 없이 일상생활의 진실에 도달하는 것을 목표로 합니다. 로셀리니와 데 시카가 창립하였으며, 끝없는 영향력을 행사하고 있습니다.',
      zh: '二战后的意大利电影运动：在真实街景中由非专业演员进行拍摄——旨在不加任何修饰地抵达日常生活的真实。由罗西里尼和德·西卡创立，影响深远。'
    },
    desc: { ar: 'نيو ريالزم', en: 'Neo realism', fr: 'Néoréalisme italien', es: 'Neorrealismo italiano', ko: '실제 장소/비전문 배우', zh: '非职业演员与天然场景' }
  },
  'Cinema Verite': {
    name: { ar: 'سينما فيريتاي', en: 'Cinema Verite', fr: 'Cinéma Vérité', es: 'Cinema Verité', ko: '시네마 베리테', zh: '真实电影纪录片体' },
    tooltip: {
      ar: 'أسلوب الوثائقي الحر الذي يتدخل بشكل مقصود في الواقع ويُلاحظه في آن. المخرج والكاميرا جزء حاضر من المشهد لا مراقب خفي. الإحساس: حقيقة كاملة بلا زيف.',
      en: 'Documentary style that deliberately both observes and participates in reality. The director and camera are a present part of the scene, not hidden observers — the feeling: unfiltered, complete truth with no pretense.',
      fr: 'Style documentaire qui observe et participe délibérément à la réalité. Le réalisateur et la caméra font partie intégrante de la scène, ils ne sont pas des observateurs cachés — la sensation : une vérité brute et complète, sans artifice.',
      es: 'Estilo documental que observa y participa deliberadamente en la realidad. El director y la cámara forman parte activa de la escena, no son observadores ocultos: la sensación es de una verdad completa y sin filtros, libre de pretensiones.',
      ko: '현실을 의도적으로 관찰하는 동시에 직접 참여하는 다큐멘터리 스타일입니다. 감독과 카메라는 숨겨진 관찰자가 아니라 장면의 프레젠스 파트너로서 존재합니다 — 느낌: 가식 없는 가공되지 않은 완전한 진실입니다.',
      zh: '刻意观察并参与现实的纪录片风格。导演和摄像机是场景中真实存在的一部分，而不是隐藏的观察者——感受：不加掩饰、彻底真实的客观现实。'
    },
    desc: { ar: 'سينما حقيقة', en: 'True cinema', fr: 'Caméra vérité brute', es: 'Cámara verdad cruda', ko: '있는 그대로의 다큐', zh: '纯粹纪实摄影' }
  },
  'Vintage Helios 44-2': {
    name: { ar: 'Helios 44-2 عتيقة', en: 'Vintage Helios 44-2', fr: 'Helios 44-2 Vintage', es: 'Helios 44-2 Vintage', ko: '빈티지 헬리오스 44-2', zh: '苏联经典八羽怪 Helios 44-2' },
    tooltip: {
      ar: 'عدسة سوفيتية عتيقة من الخمسينيات بخاصية فريدة: البوكيه الدوامي (Swirly Bokeh) الذي يلتف بشكل حلزوني خلف الموضوع. تضفي شخصية ومزاجاً تناظرياً رومانسياً لا يصنعه أي برنامج حاسوبي.',
      en: 'Soviet vintage lens from the 1950s with a unique trait: swirly bokeh that spirals behind the subject. Adds a character and romantic analog mood that no software can authentically replicate.',
      fr: 'Objectif soviétique vintage des années 1950 doté d\'une caractéristique unique : un bokeh tourbillonnant qui s\'enroule derrière le sujet. Ajoute du caractère et une ambiance analogique romantique qu\'aucun logiciel ne peut reproduire de manière authentique.',
      es: 'Lente soviético vintage de la década de 1950 con un rasgo único: bokeh giratorio que forma espirales detrás del sujeto. Añade un carácter y una atmósfera analógica romántica que ningún software puede replicar de forma auténtica.',
      ko: '피사체 뒤로 소용돌이치는 보케(Swirly Bokeh)라는 독특한 특징을 가진 1950년대 소련의 빈티지 렌즈입니다. 어떤 소프트웨어도 오리지널로 구현할 수 없는 개성과 낭만적인 아날로그 감성을 불어넣어 줍니다.',
      zh: '20世纪50年代的苏联老式镜头，具有独特特质：主体后面呈螺旋状展开的旋转焦外虚化。增添了任何软件都无法真实复制的独特个性和浪漫模拟胶片氛围。'
    },
    desc: { ar: 'عزل دوامي سوفيتي', en: 'Swirly vintage bokeh', fr: 'Bokeh tourbillonnant soviétique', es: 'Bokeh arremolinado soviético', ko: '회오리 보케', zh: '旋转焦外偏心漩涡' }
  },
  'Panavision C-Series Anamorphic': {
    name: { ar: 'Panavision C-Series', en: 'Panavision C-Series Anamorphic', fr: 'Panavision C-Series Anamorphique', es: 'Panavision Serie C Anamórfico', ko: '파나비전 C-시리즈 아나모픽', zh: '潘那维申 C系列 变形宽银幕' },
    tooltip: {
      ar: 'العدسة الأنامورفيكية الكلاسيكية الأكثر استخداماً في هوليوود عبر التاريخ. تمنح الفليرات الأفقية الأيقونية والبوكيه البيضاوي والإطار العريض المميز. أُستخدمت في سلاسل Star Wars وGodfather.',
      en: 'The most historically used Hollywood anamorphic lens. Delivers iconic horizontal flares, oval bokeh, and the distinctive wide frame — used in Star Wars, The Godfather, and countless Hollywood classics.',
      fr: 'L\'objectif anamorphique hollywoodien le plus utilisé de l\'histoire. Offre des reflets horizontaux emblématiques, un bokeh ovale et le cadre large caractéristique — utilisé dans Star Wars, Le Parrain et d\'innombrables classiques d\'Hollywood.',
      es: 'El lente anamórfico de Hollywood más utilizado a lo largo de la historia. Ofrece destellos horizontales icónicos, bokeh ovalado y el distintivo encuadre ancho; utilizado en Star Wars, El Padrino y un sinfín de clásicos de Hollywood.',
      ko: '역사적으로 할리우드에서 가장 많이 사용된 아나모픽 렌즈입니다. 상징적인 가로 방향 플레어, 타원형 보케, 그리고 독특한 와이드 프레임을 연출합니다 — 스타워즈, 대부 등 수많은 할리우드 고전 영화에 사용되었습니다.',
      zh: '历史上使用最广泛的好莱坞变形镜头。呈现出标杆性的水平光斑、椭圆形焦外成像以及独特的宽屏画幅——曾用于《星球大战》、《教父》以及无数好莱坞经典影片。'
    },
    desc: { ar: 'مظهر هوليود كلاسيكي', en: 'Classic oval flares', fr: 'Flares ovales classiques', es: 'Destellos ovalados clásicos', ko: '클래식 타원형 보케', zh: '好莱坞拉丝与椭圆虚化' }
  },
  'Cooke S4/i Prime': {
    name: { ar: 'Cooke S4/i Prime', en: 'Cooke S4/i Prime', fr: 'Cooke S4/i Prime', es: 'Cooke S4/i Prime', ko: '쿠크 S4/i 단렌즈', zh: '库克 S4/i 高级定焦镜头' },
    tooltip: {
      ar: '"Cooke Look" الأسطوري: عدسة تمنح بشرة الإنسان دفءاً وحياة وطبيعية لا مثيل لها. انتقال التركيز من الحاد إلى الضبابي يتم بنعومة كالحرير. الخيار المفضل في السينما العاطفية والدراما الإنسانية.',
      en: 'The legendary "Cooke Look": a lens that gives human skin unmatched warmth, life, and naturalness. Focus roll-off transitions are silk-smooth — the preferred choice for emotional cinema and human drama.',
      fr: 'Le légendaire « Cooke Look » : un objectif qui donne à la peau humaine une chaleur, une vie et un naturel inégalés. Les transitions de mise au point sont douces comme de la soie — le choix privilégié pour le cinéma émotionnel et le drame humain.',
      es: 'El legendario "Cooke Look": un lente que otorga a la piel humana una calidez, vida y naturalidad inigualables. Las transiciones de desenfoque son suaves como la seda: la opción preferida para el cine emocional y el drama humano.',
      ko: '전설적인 \'Cooke Look\': 사람의 피부에 필적할 수 없는 따뜻함, 생동감, 자연스러움을 부여하는 렌즈입니다. 초점이 흐려지는 영역의 트랜지션이 실크처럼 부드럽습니다. 감성 영화와 인간적인 드라마를 위한 최고의 선택입니다.',
      zh: '传奇般的“库克外观”（Cooke Look）：该镜头赋予人体皮肤无与伦比的温暖、生命力和自然感。焦外过渡如丝般顺滑——是情感电影和人文戏剧的首选。'
    },
    desc: { ar: 'نعومة سينمائية دافئة', en: 'Organic warm look', fr: 'Rendu chaleureux Cooke', es: 'Aspecto cálido orgánico Cooke', ko: '특유의 부드럽고 따뜻한 톤', zh: '经典库克暖调肤色过渡' }
  },
  'Peripheral Framing': {
    name: { ar: 'تأطير محيطي', en: 'Peripheral Framing', fr: 'Cadrage Périphérique', es: 'Encuadre Periférico', ko: '가장자리 프레이밍', zh: '边缘景物遮挡构图' },
    tooltip: {
      ar: 'وضع عناصر بصرية (أغصان، أعمدة، أجزاء من أجساد) في حواف الكادر لتشكيل إطار داخلي طبيعي يُوجّه العين نحو الموضوع. يمنح الصورة عمقاً بصرياً مُركّباً وثراءً بصرياً متعدد الطبقات.',
      en: 'Placing visual elements (branches, columns, body parts) at frame edges to form a natural inner frame directing the eye to the subject — grants multi-layered compositional depth and richness.',
      fr: 'Placer des éléments visuels (branches, colonnes, parties du corps) sur les bords du cadre pour former un cadre intérieur naturel qui dirige le regard vers le sujet — apporte une profondeur et une richesse de composition à plusieurs niveaux.',
      es: 'Colocación de elementos visuales (ramas, columnas, partes del cuerpo) en los bordes del encuadre para formar un marco interno natural que guíe el ojo hacia el sujeto. Otorga una profundidad y riqueza de composición multicapa.',
      ko: '프레임 가장자리에 시각적 요소(나뭇가지, 기둥, 신체 일부 등)를 배치하여 시선을 피사체로 인도하는 자연스러운 내부 프레임을 만듭니다 — 다층적인 구도적 깊이와 풍부함을 부여합니다.',
      zh: '在画面边缘放置视觉元素（树枝、柱子、身体部位），形成一个天然的内画幅来引导视线移向主体——赋予多层次的构图深度与丰富度。'
    },
    desc: { ar: 'عناصر بالمقدمة للعمق', en: 'Foreground framing', fr: 'Éléments d’avant-plan', es: 'Elementos de primer plano', ko: '전경 장애물을 통한 액자식 배치', zh: '依靠前景叠出纵深' }
  },
  'Architectural Cohesion': {
    name: { ar: 'تناسق مكاني مترابط', en: 'Architectural Cohesion', fr: 'Cohésion Architecturale', es: 'Cohesión Arquitectónica', ko: '건축 공간 일관성', zh: '物理空间三维比例对齐' },
    tooltip: {
      ar: 'أمر للذكاء الاصطناعي بأن يلتزم بهندسة مكانية ثابتة ومترابطة دون تشويهات عشوائية. يضمن أن أبعاد الغرفة والمبنى والمساحات تبقى منطقية ومتسقة داخل الكادر الواحد ودون تناقضات مكانية.',
      en: 'Commands AI to maintain fixed, coherent spatial architecture without random distortions — ensures room dimensions, building proportions, and spaces remain logical and consistent within the single frame.',
      fr: 'Ordonne à l\'IA de maintenir une architecture spatiale fixe et cohérente, sans distorsions aléatoires — garantit que les dimensions des pièces, les proportions des bâtiments et les espaces restent logiques et constants au sein d\'une seule image.',
      es: 'Ordena a la IA mantener una arquitectura espacial fija y coherente sin distorsiones aleatorias: garantiza que las dimensiones de las habitaciones, las proporciones de los edificios y los espacios permanezcan lógicos y constantes dentro de un mismo encuadre.',
      ko: '무작위 왜곡 없이 고정되고 일관성 있는 공간 구조를 유지하도록 AI에 지시합니다 — 단일 프레임 내에서 방의 크기, 건물의 비율 및 공간이 논리적이고 일치하도록 보장합니다.',
      zh: '命令 AI 保持固定、连贯的空间架构，避免随机畸变——确保单个画面内的房间尺寸、建筑物比例 and 空间保持逻辑一致。'
    },
    desc: { ar: 'ترابط هندسي للمكان', en: 'Consistent spatial layout', fr: 'Géométrie spatiale cohérente', es: 'Geometría espacial coherente', ko: '왜곡 없는 방 가로세로 대칭', zh: '防止AI构图畸形与坍塌' }
  },
  'Unconventional Cinematography': {
    name: { ar: 'تصوير غير تقليدي', en: 'Unconventional Cinematography', fr: 'Cadrage Non Conventionnel', es: 'Encuadre No Convencional', ko: '파격적인 카메라 워크', zh: '反常规艺术摄影视角' },
    tooltip: {
      ar: 'يحفز الذكاء الاصطناعي لتجاوز الزوايا والتراكيب المعتادة والمتوقعة. يمنح الحرية الكاملة في اختيار منظور جريء وغير مسبوق قد يكون أكثر تعبيراً من أي خيار تقليدي آخر.',
      en: 'Pushes the AI beyond predictable angles and compositions — grants full freedom to choose bold, unexpected perspectives that may be far more expressive than any conventional approach.',
      fr: 'Pousse l\'IA au-delà des angles et des compositions prévisibles — offre une liberté totale pour choisir des perspectives audacieuses et inattendues qui peuvent être bien plus expressives que n\'importe quelle approche conventionnelle.',
      es: 'Impulsa a la IA más allá de ángulos y composiciones predecibles: otorga total libertad para elegir perspectivas audaces e inesperadas que pueden resultar mucho más expresivas que cualquier enfoque convencional.',
      ko: '예측 가능한 각도와 구도를 넘어서도록 AI를 자극합니다 — 기존의 어떤 관습적인 접근법보다 훨씬 더 표현력이 풍부한 대담하고 예상치 못한 시각적 관점을 선택할 수 있는 완전한 자유를 부여합니다.',
      zh: '推动 AI 超越可预测的拍摄角度和构图——赋予充分的自由去选择大胆、意想不到的角度，这些角度可能比任何传统方法都具有表现力。'
    },
    desc: { ar: 'زوايا درامية حرة', en: 'Dynamic striking angles', fr: 'Angles dynamiques audacieux', es: 'Ángulos dinámicos atrevidos', ko: '예술적 가위 각도', zh: '富有冲击力的视觉构图' }
  },
  'Kodak 35mm Analog Film': {
    name: { ar: 'فيلم كوداك 35mm', en: 'Kodak 35mm Analog Film', fr: 'Pellicule Kodak 35mm', es: 'Película Kodak 35mm', ko: '코닥 35mm 아날로그 필름', zh: '柯达 35mm 模拟胶片' },
    tooltip: {
      ar: 'محاكاة شاملة لشريط كوداك 35mm التناظري: حبيبات عضوية واقعية، إضاءة ناعمة طبيعية، وتأثير الهالاسيون الرومانسي حول مصادر الضوء. المجموعة الكاملة من خصائص الفيلم التناظري في أمر واحد.',
      en: 'Complete emulation of Kodak 35mm analog film: realistic organic grain, soft natural lighting, and romantic halation effect around light sources — the complete set of analog film characteristics in a single command.',
      fr: 'Émulation complète de la pellicule analogique Kodak 35mm : grain organique réaliste, éclairage naturel doux et effet d\'halation romantique autour des sources lumineuses — l\'ensemble des caractéristiques du film argentique en une seule commande.',
      es: 'Emulación completa de la película analógica Kodak de 35 mm: grano orgánico realista, iluminación suave y natural, y un romántico efecto de halo alrededor de las fuentes de luz. Todo el conjunto de características del celuloide analógico en una sola instrucción.',
      ko: '코닥 35mm 아날로그 필름의 완벽한 에뮬레이션: 사실적인 유기적 입자감(grain), 부드러운 자연광, 그리고 광원 주변의 낭만적인 할레이션 효과까지 — 단 하나의 명령어로 아날로그 필름의 특성 세트를 완벽하게 구현합니다.',
      zh: '对柯达 35 毫米模拟胶片的完整模拟：逼真的有机颗粒、柔和的自然光照以及光源周围浪漫的卤化（Halation）效果——将模拟胶片的所有特征集成在单个命令中。'
    },
    desc: { ar: 'مظهر تناظري بحبيبات', en: 'Analog film halation', fr: 'Halos et grain argentiques', es: 'Halos y grano analógicos', ko: '리얼한 필름 입자와 색수차', zh: '真实卤化银颗粒边缘泛红' }
  },
  'Bleach Bypass': {
    name: { ar: 'تخطي التبييض', en: 'Bleach Bypass', fr: 'Bleach Bypass Étalonnage', es: 'Bleach Bypass Gradación', ko: '블리치 바이패스 필터', zh: '留银冲印/跳银处理' },
    tooltip: {
      ar: 'تقنية تحميض تخطي مرحلة إزالة الفضة — الناتج: ألوان مسحوبة الحياة مع تباين قاسٍ وظلال سينمائية حادة. يمنح الصورة قسوة بصرية موحشة. شائع في أفلام الحرب كـ"Saving Private Ryan" و"Fury".',
      en: 'Processing technique skipping silver removal — result: drained colors with harsh contrast and cutting shadows. Gives the image a bleak, brutal visual severity. Common in war films like Saving Private Ryan and Fury.',
      fr: 'Technique de traitement de la pellicule évitant l\'étape d\'élimination de l\'argent — résultat : des couleurs délavées avec un contraste dur et des ombres tranchantes. Confère à l\'image une sévérité visuelle sombre et brutale. Courant dans les films de guerre comme Il faut sauver le soldat Ryan et Fury.',
      es: 'Técnica de revelado que omite la eliminación de la plata; el resultado son colores deslavados con un contraste marcado y sombras cortantes. Aporta a la imagen una severidad visual desoladora y brutal. Común en películas de guerra como Saving Private Ryan y Fury.',
      ko: '은 제거 단계를 건너뛰는 필름 현상 기법 — 결과: 거친 대비와 날카로운 음영을 동반한 물 빠진 색감. 이미지에 황량하고 잔인하며 극적인 시각적 가혹함을 부여합니다. \'라이언 일병 구하기\'나 \'퓨리\' 같은 전쟁 영화에서 흔히 쓰입니다.',
      zh: '跳过除银步骤的胶片冲洗技术——效果是：干瘪的色彩、强烈的对比度和凌厉的阴影。赋予画面一种荒凉、残酷的视觉严峻感。常见于《拯救大兵瑞恩》和《狂怒》等战争电影。'
    },
    desc: { ar: 'تباين عالي وظلال قاسية', en: 'Harsh desaturated shadows', fr: 'Tons désaturés très contrastés', es: 'Tonos desaturados contrastados', ko: '강한 하이라이트와 블랙', zh: '高亮与纯黑阴影的结合' }
  },
  'Gritty Realism': {
    name: { ar: 'واقعية خام', en: 'Gritty Realism', fr: 'Réalisme Brut', es: 'Realismo Sucio', ko: '날것의 리얼리즘', zh: '写实主义街头质感' },
    tooltip: {
      ar: 'أسلوب الواقعية الخام: إضاءة موقع التصوير فقط دون أي تنظيم أو تجميل. ملامس غير مصقولة وجو سينمائي خشن لا يتردد في إظهار القبح والحقيقة. شائع في أفلام الجريمة والحياة الحضرية الصعبة.',
      en: 'Raw realism style: on-set lighting only without any polishing or beautification. Unrefined textures and rough cinematic atmosphere that doesn\'t shy from ugliness and truth. Common in crime and hard urban life films.',
      fr: 'Style de réalisme brut : éclairage sur le lieu de tournage uniquement, sans aucun polissage ni embellissement. Des textures non raffinées et une atmosphère cinématographique rugueuse qui ne craint pas la laideur ni la vérité. Courant dans les films de crime et sur la vie urbaine difficile.',
      es: 'Estilo de realismo descarnado: iluminación exclusiva en el set de rodaje, sin retoques ni embellecimientos. Texturas ásperas y una atmósfera cinematográfica cruda que no teme mostrar la fealdad y la verdad. Común en películas sobre delincuencia y la dura vida urbana.',
      ko: '가공되지 않은 리얼리즘 스타일. 미화나 보정 없이 온전히 촬영 현장 본래의 조명만을 사용합니다. 정제되지 않은 텍스처와 거친 영화적 분위기를 통해 추함과 진실을 여과 없이 드러내며, 범죄 영화나 고단한 도시 삶을 다룬 영화에서 흔히 볼 수 있습니다.',
      zh: '粗粝的写实风格：仅使用现场环境光，不做任何修饰 or 美化。不加雕琢的质感和粗犷的电影氛围，毫不避讳丑陋与真实。常见于犯罪题材和展现艰辛都市生活的电影。'
    },
    desc: { ar: 'إضاءة موقع واقعية', en: 'Raw practical lighting', fr: 'Lumière brute sur le plateau', es: 'Luz cruda en el set', ko: '꾸밈없는 다큐멘터리 질감', zh: '纯自然道具照明' }
  },
  'ARRI Alexa LF': {
    name: { ar: 'ARRI Alexa LF', en: 'ARRI Alexa LF', fr: 'ARRI Alexa LF', es: 'ARRI Alexa LF', ko: 'ARRI Alexa LF', zh: 'ARRI Alexa LF' },
    tooltip: {
      ar: 'تأكيد مُعزَّز على كاميرا ARRI Alexa LF ذات المستشعر الكبير. يدفع الذكاء الاصطناعي لمحاكاة نطاق ديناميكي استثنائي وعلم ألوان حقيقي. مُعزِّز تقني قوي لأي موجه يحتاج جودة سينمائية عليا.',
      en: 'Reinforced command emphasizing the large-format ARRI Alexa LF sensor. Pushes AI to emulate exceptional dynamic range and true-to-life color science — a powerful technical enhancer for any prompt needing premium cinematic quality.',
      fr: 'Commande renforcée mettant l\'accent sur le capteur grand format ARRI Alexa LF. Pousse l\'IA à émuler une plage dynamique exceptionnelle et une science des couleurs fidèle à la réalité — un puissant optimisateur technique pour tout prompt nécessitant une qualité cinématographique haut de gamme.',
      es: 'Instrucción reforzada que destaca el sensor de formato grande ARRI Alexa LF. Impulsa a la IA a emular un rango dinámico excepcional y una ciencia de color fiel a la realidad: un potente optimizador técnico para cualquier prompt que requiera una calidad cinematográfica premium.',
      ko: '대형 포맷 ARRI Alexa LF 센서를 강조하는 강화된 명령어입니다. AI가 탁월한 다이나믹 레인지와 실감 나는 컬러 사이언스를 모방하도록 유도합니다 — 프리미엄 시네마 품질이 필요한 모든 프롬프트를 위한 강력한 기술적 강화 요소입니다.',
      zh: '强调大画幅 ARRI Alexa LF 传感器的强化命令。促使 AI 模拟出色的动态范围和逼真的色彩科学——对于任何需要优质电影级画质的提示词来说，都是一个强有力的技术增强因子。'
    },
    desc: { ar: 'أعلى جودة هوليودية', en: 'True-to-life large format', fr: 'Qualité cinéma pro', es: 'Calidad cine pro', ko: '최상급 센서 묘사력', zh: '好莱坞工业顶峰大画幅' }
  },
  'Sony VENICE 2 (Modifier)': {
    name: { ar: 'Sony VENICE 2', en: 'Sony VENICE 2', fr: 'Sony VENICE 2', es: 'Sony VENICE 2', ko: 'Sony VENICE 2', zh: 'Sony VENICE 2' },
    tooltip: {
      ar: 'تأكيد مُعزَّز على قدرات Sony VENICE 2 الفائقة في الإضاءة المنخفضة. نظام ISO المزدوج يُحقق نظافة الظلال في أشد الأجواء ظلاماً. مُعزِّز لا غنى عنه للمشاهد الليلية والمشاهد في البيئات المعتمة.',
      en: 'Reinforced command for Sony VENICE 2\'s exceptional low-light capabilities. Dual base ISO achieves shadow cleanliness in the darkest environments — an essential enhancer for night scenes and dimly lit atmosphere sequences.',
      fr: 'Commande renforcée pour les capacités exceptionnelles de la Sony VENICE 2 en basse lumière. Le double ISO de base garantit la netteté des ombres dans les environnements les plus sombres — un amplificateur essentiel pour les scènes de nuit et les séquences à l\'ambiance faiblement éclairée.',
      es: 'Comando reforzado para las capacidades excepcionales en condiciones de poca luz de la Sony VENICE 2. El doble ISO base logra una limpieza de sombras en los entornos más oscuros, un potenciador esencial para escenas nocturnas y secuencias de atmósfera tenuemente iluminadas.',
      ko: '소니 베니스 2(Sony VENICE 2)의 탁월한 저조도 성능을 한층 더 강화하는 명령. 듀얼 베이스 ISO는 극도로 어두운 환경에서도 깨끗한 암부를 구현하며, 야간 씬과 어두운 분위기의 시퀀스를 위한 필수적인 인핸서입니다.',
      zh: '针对索尼 VENICE 2 出色的低照度拍摄能力进行的强化指令。双原生 ISO 可在极暗环境中实现纯净的暗部细节，是夜景及暗调氛围画面不可或缺的画质增强利器。'
    },
    desc: { ar: 'أداء فائق بالظلام', en: 'Clean shadows low-light', fr: 'Ombres propres basse lumière', es: 'Sombras limpias baja iluminación', ko: '깨끗한 암부 저조도', zh: '纯净暗部低照度' }
  }
};

export const PLATFORM_TRANSLATIONS: Record<string, { name: Record<string, string>; tooltip: Record<string, string> }> = {
  'kling3': {
    name: { ar: 'Kling 3.0', en: 'Kling 3.0', fr: 'Kling 3.0', es: 'Kling 3.0', ko: 'Kling 3.0', zh: '快手可灵 3.0' },
    tooltip: {
      ar: 'توليد موجه مخصص لأحدث محركات الفيديو الذكي Kling 3.0 بالوضع الاحترافي.',
      en: 'Optimized video prompt for Kling AI 3.0 Professional mode.',
      fr: 'Génération de prompt optimisée pour le mode pro de Kling 3.0.',
      es: 'Generación de prompt optimizada para el modo pro de Kling 3.0.',
      ko: 'Kling 3.0 프로페셔널 비디오 모드 최적화 프롬프트입니다.',
      zh: '针对最新可灵 3.0 视频生成模型的高级专业版参数优化。'
    }
  },
  'mj': {
    name: { ar: 'Midjourney', en: 'Midjourney', fr: 'Midjourney', es: 'Midjourney', ko: 'Midjourney', zh: 'Midjourney' },
    tooltip: {
      ar: 'توليد موجه فني خام ومفصل متوافق مع إصدار Midjourney v7.',
      en: 'Raw detailed cinematic still format tailored for Midjourney v7.',
      fr: 'Format d’image brut et détaillé pour Midjourney v7.',
      es: 'Formato de imagen crudo y detallado para Midjourney v7.',
      ko: 'Midjourney v7 사진 생성에 완벽히 일치하는 디테일 원본 서명입니다.',
      zh: '输出符合 Midjourney 摄影大片风格的高解析细节排版与参数。'
    }
  },
  'sora': {
    name: { ar: 'Sora', en: 'Sora', fr: 'Sora', es: 'Sora', ko: 'Sora', zh: 'OpenAI Sora' },
    tooltip: {
      ar: 'توليد أوامر حركية وسلسة مخصصة لمحرك الفيديو Sora بدقة 4K.',
      en: 'Fluid high-resolution parameters designed for OpenAI Sora.',
      fr: 'Paramètres haute résolution fluides pour Sora.',
      es: 'Parámetros alta resolución fluidos para Sora.',
      ko: '오픈AI Sora의 초고화질 물리 시뮬레이션 영상 추출 맞춤 코드입니다.',
      zh: '针对 OpenAI Sora 具有高度物理一致性、4K 级的动态参数适配。'
    }
  },
  'dalle': {
    name: { ar: 'DALL-E 3', en: 'DALL-E 3', fr: 'DALL-E 3', es: 'DALL-E 3', ko: 'DALL-E 3', zh: '微软 DALL-E 3' },
    tooltip: {
      ar: 'صياغة أوامر سردية مفصلة تناسب فهم محرك DALL-E 3 اللغوي.',
      en: 'Descriptive narrative structure optimal for DALL-E 3 text comprehension.',
      fr: 'Structure narrative descriptive optimale pour DALL-E 3.',
      es: 'Estructura descriptiva óptima para DALL-E 3.',
      ko: '문장 해독력이 우수한 DALL-E 3 용 서사 중심 디스크립션입니다.',
      zh: '提供更具故事描述性、契合 DALL-E 3 语义理解深度的叙事风格。'
    }
  },
  'sd': {
    name: { ar: 'Stable Diff.', en: 'Stable Diff.', fr: 'Stable Diff.', es: 'Stable Diff.', ko: 'Stable Diff.', zh: 'SD WebUI' },
    tooltip: {
      ar: 'تضمين بادئات الجودة العالية (Masterpiece) المتوافقة مع نماذج Stable Diffusion.',
      en: 'Includes standard quality tags suited for Stable Diffusion models.',
      fr: 'Tags de qualité standard adaptés pour Stable Diffusion.',
      es: 'Tags de calidad estándar adaptados para Stable Diffusion.',
      ko: 'SDXL 및 SD3 계열 모델이 지각하는 하이퀄리티 태그 접두어를 배치합니다.',
      zh: '包含经典杰作（Masterpiece）、最高解析度等适用于 SD 细致刻画的质量标签。'
    }
  },
  'flux': {
    name: { ar: 'Flux', en: 'Flux', fr: 'Flux', es: 'Flux', ko: 'Flux', zh: '黑森林 Flux' },
    tooltip: {
      ar: 'توليد أوامر واقعية ومباشرة متوافقة مع قدرات نموذج Flux المتقدمة.',
      en: 'Direct photorealistic prompts leveraging advanced Flux capabilities.',
      fr: 'Prompts photoréalistes directs exploitant Flux.',
      es: 'Prompts fotorrealistas directos aprovechando Flux.',
      ko: '텍스트 렌더링 및 하이퍼 리얼리즘 표현에 걸맞은 직설적 프롬프트 규격입니다.',
      zh: '极简且契合现实照片质感的直接描述语句，激发 Flux 纯正的渲染画质。'
    }
  }
};

export const CONFLICT_TRANSLATIONS: Record<string, Record<string, string>> = {
  'IMAX too heavy for handheld': {
    ar: '⚠ IMAX ثقيل جداً للتصوير اليدوي',
    en: '⚠ IMAX too heavy for handheld',
    fr: '⚠ L’IMAX est trop lourd pour une caméra portative',
    es: '⚠ IMAX es demasiado pesado para cámara en mano',
    ko: '⚠ 아이맥스 카메라는 핸드헬드 촬영에 너무 무겁습니다',
    zh: '⚠ IMAX 摄像机过重，不适合手持拍摄'
  },
  'Anamorphic lens conflicts with Spherical Cooke Prime': {
    ar: '⚠ عدسة أنامورفيك لا تتطابق مع زجاج كروي Prime',
    en: '⚠ Anamorphic lens conflicts with Spherical Cooke Prime',
    fr: '⚠ L’objectif anamorphique est incompatible avec l’optique Cooke Sphérique',
    es: '⚠ La lente anamórfica es incompatible con la óptica Cooke Esférica',
    ko: '⚠ 아나모픽 렌즈는 쿡 스페리컬 단렌즈와 호환되지 않습니다',
    zh: '⚠ 变形宽银幕镜头与 Cooke 球面定焦镜头冲突'
  },
  'f/1.4 not ideal for establishing shots': {
    ar: '⚠ f/1.4 لا تناسب اللقطة التأسيسية',
    en: '⚠ f/1.4 not ideal for establishing shots',
    fr: '⚠ L’ouverture f/1.4 n’est pas idéale pour un plan d’ensemble',
    es: '⚠ f/1.4 no es adecuada para un plano general',
    ko: '⚠ f/1.4 조리개는 광활한 전경 샷에 적합하지 않습니다',
    zh: '⚠ f/1.4 大光圈不适合用于大范围远景建立镜头'
  }
};
