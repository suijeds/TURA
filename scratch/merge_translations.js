const fs = require('fs');
const path = require('path');

const translationsPath = path.join(__dirname, '..', 'src/data/translations.ts');
let translationsText = fs.readFileSync(translationsPath, 'utf-8');

const newTranslations = {
  'Spotlight / High Key Drama': {
    name: { ar: 'بقعة ضوء درامية (Spotlight)', en: 'Spotlight / High Key Drama', fr: 'Projecteur / Drame High-Key', es: 'Reflector / Drama de Clave Alta', ko: '스포트라이트 / 하이키 드라마', zh: '聚光灯 / 高调戏剧感' },
    desc: { ar: 'بقعة ضوء مركزة وقاسية', en: 'Intense focused spot', fr: 'Spot focalisé intense', es: 'Foco concentrado intenso', ko: '강렬하고 집중된 스포트라이트', zh: '强烈的聚焦聚光灯' },
    tooltip: {
      ar: 'إضاءة مركزة قاسية تسلط الضوء مباشرة على الشخصية مع تباين قوي لعزلها درامياً عن محيطها المظلم.',
      en: 'Intense, focused spotlighting with high contrast to isolate the subject dramatically from dark surroundings.',
      fr: 'Éclairage directionnel intense et focalisé avec un fort contraste pour isoler dramatiquement le sujet de son environnement sombre.',
      es: 'Iluminación focalizada intensa con alto contraste para aislar dramáticamente al sujeto de un entorno oscuro.',
      ko: '어두운 주변부로부터 피사체를 극적으로 분리하기 위해 고대비의 강렬하고 집중된 조명을 투사합니다.',
      zh: '高对比度的强烈聚焦聚光灯，将主体与黑暗的周围环境戏剧性地隔离开来。'
    }
  },
  'Rule of Thirds': {
    name: { ar: 'قاعدة الأثلاث', en: 'Rule of Thirds', fr: 'Règle des Tiers', es: 'Regla de los Tercios', ko: '3분할 법칙', zh: '三分法则' },
    desc: { ar: 'توزيع غير مركزي متوازن', en: 'Off-center balance', fr: 'Équilibre décentré', es: 'Equilibrio descentrado', ko: '비중앙 분할 균형', zh: '非中心平衡' },
    tooltip: {
      ar: 'تقسيم الشاشة إلى 3 أثلاث أفقية وعمودية ووضع الهدف على خطوط التقاطع لخلق توازن طبيعي.',
      en: 'Aligns subjects along the grid intersections of a 3x3 layout to create natural balance.',
      fr: 'Aligne les sujets le long des intersections d\'une grille 3x3 pour créer un équilibre naturel.',
      es: 'Alinea los sujetos a lo largo de las intersecciones de la cuadrícula de un diseño de 3x3 para crear un equilibrio natural.',
      ko: '3x3 레이아웃의 그리드 교차점을 따라 피사체를 정렬하여 자연스러운 균형감을 연출합니다.',
      zh: '沿着3x3网格的交叉线排列主体，以营造自然且美观的平衡感。'
    }
  },
  'Symmetric Composition': {
    name: { ar: 'التماثل البصري', en: 'Symmetric Composition', fr: 'Composition Symétrique', es: 'Composición Simétrica', ko: '대칭 구도', zh: '对称构图' },
    desc: { ar: 'توازن هندسي مركزي', en: 'Formal symmetry', fr: 'Symétrie formelle', es: 'Simetría formal', ko: '정형적 대칭', zh: '正统对称' },
    tooltip: {
      ar: 'تركيز الهدف في وسط الكادر تماماً مع تماثل الجوانب اليمنى واليسرى لإضفاء هيبة وقوة.',
      en: 'Centers the subject with identical balancing elements on both sides to convey power and order.',
      fr: 'Centre le sujet avec des éléments d\'équilibrage identiques des deux côtés pour exprimer la puissance et l\'ordre.',
      es: 'Centra al sujeto con elementos de equilibrio idénticos en ambos lados para transmitir poder y orden.',
      ko: '좌우대칭이 완벽한 균형 요소를 배치하여 중심부의 피사체에 힘과 질서 정연함을 부여합니다.',
      zh: '将主体置于画面正中心，两侧配以完全对称的平衡元素，以传达力量感与秩序感。'
    }
  },
  'Three-Layer Depth (FG/MG/BG)': {
    name: { ar: 'العمق (ثلاثي الأبعاد)', en: 'Three-Layer Depth (FG/MG/BG)', fr: 'Profondeur en Trois Plans (Premier/Moyen/Arrière-plan)', es: 'Profundidad de Tres Capas (Primer/Medio/Fondo)', ko: '3레이어 깊이감 (전경/중경/배경)', zh: '三层空间深焦 (FG/MG/BG)' },
    desc: { ar: 'مقدمة ووسط وخلفية واضحة', en: 'Foreground/Mid/Background', fr: 'Premier/Moyen/Arrière-plan', es: 'Primer plano/Medio/Fondo', ko: '전경/중경/배경의 분리', zh: '前景/中景/背景' },
    tooltip: {
      ar: 'تقسيم الكادر إلى مقدمة ووسط وخلفية واضحة لخلق إحساس قوي بالمسافة والبعد الحقيقي.',
      en: 'Divides the frame into distinctive layers to establish deep, cinematic spatial perspective.',
      fr: 'Divise le cadre en couches distinctes pour établir une perspective spatiale cinématographique profonde.',
      es: 'Divide el encuadre en capas distintivas para establecer una perspectiva espacial profunda y cinematográfica.',
      ko: '프레임을 뚜렷한 세 영역으로 레이어링하여 시네마틱하고 깊이 있는 공간 감각을 선사합니다.',
      zh: '将构图划分为泾渭分明的三层物理深度，以建立深邃的电影级立体空间透视。'
    }
  },
  'Eye Level Shot': {
    name: { ar: 'مستوى العين (طبيعي)', en: 'Eye Level Shot', fr: 'Plan à Hauteur d\'Yeux', es: 'Plano a la Altura de los Ojos', ko: '아이 레벨 샷 (눈높이)', zh: '平视镜头' },
    desc: { ar: 'منظور بشري واقعي', en: 'Neutral perspective', fr: 'Perspective neutre', es: 'Perspectiva neutra', ko: '중립적 관점', zh: '中立视角' },
    tooltip: {
      ar: 'وضع الكاميرا في نفس مستوى عين الشخصية لخلق منظور محايد ومشاعر طبيعية مألوفة.',
      en: 'Aligns the lens directly with the subject\'s gaze to foster realistic, personal engagement.',
      fr: 'Aligne l\'objectif directement avec le regard du sujet pour favoriser un engagement réaliste et personnel.',
      es: 'Alinea la lente directamente con la mirada del sujeto para fomentar un compromiso realista y personal.',
      ko: '렌즈의 높이를 피사체의 눈높이와 수평으로 맞춰 사실적이고 친근한 인상을 전달합니다.',
      zh: '使镜头直接与主体的视线平行对齐，以促成纪实、亲近的日常情感共鸣。'
    }
  },
  'Low Angle Shot': {
    name: { ar: 'زاوية منخفضة (مهيبة)', en: 'Low Angle Shot', fr: 'Plan en Contre-Plongée', es: 'Plano desde Ángulo Bajo', ko: '로우 앵글 샷 (仰角)', zh: '仰拍镜头' },
    desc: { ar: 'زاوية قوة وبطولة', en: 'Imposing hero view', fr: 'Vue imposante du héros', es: 'Vista imponente del héroe', ko: '압도적인 영웅 앵글', zh: '威严的主体视角' },
    tooltip: {
      ar: 'التصوير من الأسفل للأعلى لجعل الهدف يبدو قوياً، بطولياً، أو مهيباً.',
      en: 'Shoots from a low perspective looking upward to render the subject powerful and majestic.',
      fr: 'Filme depuis une perspective basse en regardant vers le haut pour rendre le sujet puissant et majestueux.',
      es: 'Dispara desde una perspectiva baja mirando hacia arriba para hacer que el sujeto parezca poderoso y majestuoso.',
      ko: '카메라를 하단에 배치해 피사체를 위로 올려다봄으로써 대상에 힘과 위엄을 실어주는 앵글입니다.',
      zh: '从下往上的低角度视点拍摄，使主体呈现出高大、英雄化或充满威严感的艺术形态。'
    }
  },
  "Bird's Eye View": {
    name: { ar: 'زاوية مرتفعة (عين الطائر)', en: "Bird's Eye View", fr: 'Vue à Vol d\'Oiseau', es: 'Vista de Pájaro', ko: '버즈 아이 뷰 (조감도)', zh: '俯瞰鸟瞰图' },
    desc: { ar: 'رأسي بالكامل من الأعلى', en: 'Overhead mapping', fr: 'Cartographie aérienne', es: 'Mapeo cenital', ko: '오버헤드 맵핑', zh: '垂直俯瞰构图' },
    tooltip: {
      ar: 'تصوير رأسي بالكامل من الأعلى لأسفل يعطي نظرة شاملة وتخطيطية للمكان وعلاقة العناصر.',
      en: 'Shoots directly from above looking straight down to establish grand mapping layout.',
      fr: 'Filme directement depuis le dessus en regardant vers le bas pour établir une disposition cartographique impressionnante.',
      es: 'Dispara directamente desde arriba mirando hacia abajo para establecer un gran diseño de mapeo.',
      ko: '피사체의 정수리 수직 위에서 아래를 다이렉트로 내려다보아 전체적인 공간 레이아웃을 평면도처럼 드러냅니다.',
      zh: '直接从头顶上方正对下方进行垂直俯拍，以展现广阔的平面空间布局特征。'
    }
  },
  'Leading Lines': {
    name: { ar: 'الخطوط القيادية', en: 'Leading Lines', fr: 'Lignes Directrices', es: 'Líneas de Guía', ko: '인도선', zh: '引导线效果' },
    desc: { ar: 'توجيه المنظور نحو الهدف', en: 'Converging diagonal guides', fr: 'Guides diagonaux convergents', es: 'Guías diagonales convergentes', ko: '수렴하는 사선 가이드', zh: '会聚对角线引导' },
    tooltip: {
      ar: 'استخدام العناصر البيئية (كالممرات أو الطرق) لتوجيه عين المشاهد تلقائياً نحو البؤرة الرئيسية.',
      en: 'Utilizes environmental shapes or paths to steer the viewer\'s focus directly to the subject.',
      fr: 'Utilise des formes ou des chemins environnementaux pour diriger l\'attention du spectateur directement vers le sujet.',
      es: 'Utiliza formas o caminos ambientales para dirigir la atención del espectador directamente hacia el sujeto.',
      ko: '통로나 도로 등 기하학적인 환경 선을 배치해 관객의 시선을 주인공에게 직관적으로 배달합니다.',
      zh: '利用场景中延伸的线条或边缘，引导观众的目光视线聚焦于画面的核心主体上。'
    }
  },
  'Negative Space': {
    name: { ar: 'المساحة السلبية', en: 'Negative Space', fr: 'Espace Négatif', es: 'Espacio Negativo', ko: '여백의 미', zh: '留白空间' },
    desc: { ar: 'عزل الهدف في مساحة فارغة واسعة', en: 'Subject isolated in vast emptiness', fr: 'Sujet isolé dans un grand vide', es: 'Sujeto aislado en un vacío inmenso', ko: '넓은 공허함 속 고립', zh: '空旷环境中的主体孤立' },
    tooltip: {
      ar: 'تأطير يترك مساحات فارغة شاسعة حول الشخصية لخلق شعور بالوحدة أو الهدوء أو الاتساع.',
      en: 'Frames the subject surrounded by large empty areas to induce loneliness, simplicity, or vastness.',
      fr: 'Cadre le sujet entouré de grandes zones vides pour induire la solitude, la simplicité ou l\'immensité.',
      es: 'Encuadra al sujeto rodeado de grandes áreas vacías para inducir soledad, simplicidad o inmensidad.',
      ko: '피사체의 주변부에 드넓고 텅 빈 가상의 여백을 채워 외로움, 고요함, 혹은 거대한 광활함을 강조합니다.',
      zh: '在主体周围刻意留出大面积的空白区域，以传达出孤独感、极简美或辽阔感。'
    }
  },
  'Scale Dominance': {
    name: { ar: 'هيمنة المقياس', en: 'Scale Dominance', fr: 'Dominance de l\'Échelle', es: 'Dominancia de Escala', ko: '스케일의 압도', zh: '尺度主导' },
    desc: { ar: 'مقارنة حجم الشخصية بالمحيط الضخم', en: 'Tiny subject against massive scale', fr: 'Petit sujet face à une échelle massive', es: 'Sujeto diminuto frente a una escala masiva', ko: '거대한 규모 대비 작아 보이는 인물', zh: '微小主体与宏大空间对比' },
    tooltip: {
      ar: 'إبراز التباين الشديد في المقياس بوضع شخصية صغيرة جداً أمام بيئة أو مبانٍ عملاقة.',
      en: 'Highlights intense scale contrast by placing a tiny figure against colossal architecture or landscapes.',
      fr: 'Met en valeur un contraste d\'échelle intense en plaçant un personnage minuscule face à une architecture ou des paysages colossaux.',
      es: 'Destaca un intenso contraste de escala al colocar una figura diminuta frente a una arquitectura o paisajes colosales.',
      ko: '웅장한 건축물이나 거대한 대자연 속에 개미처럼 작은 실루엣을 배치하여 대비되는 규모감을 극한으로 보여줍니다.',
      zh: '通过在巨型的建筑物或自然景观中放置极其微小的人物形象，来彰显强烈的体积感与空间反差。'
    }
  },
  'Horizontal Pan': {
    name: { ar: 'التفاف أفقي (Pan)', en: 'Horizontal Pan', fr: 'Panoramique Horizontal', es: 'Panorámica Horizontal', ko: '수평 팬', zh: '水平摇镜头' },
    desc: { ar: 'التفاف أفقي بطيء', en: 'Slow horizontal camera pan', fr: 'Panoramique horizontal lent', es: 'Panorámica horizontal lenta', ko: '느린 수평 팬 무브먼트', zh: '慢速水平转动' },
    tooltip: {
      ar: 'تحريك رأس الكاميرا أفقياً من اليمين لليسار أو العكس بدون تحريك الحامل، لعرض تفاصيل المكان.',
      en: 'Panning horizontally to scan the environment or track side-to-side actions.',
      fr: 'Panoramique horizontal pour balayer l\'environnement ou suivre des actions de gauche à droite.',
      es: 'Panorámica horizontal para escanear el entorno o seguir acciones de un lado a otro.',
      ko: '카메라의 스탠드를 고정한 채 렌즈의 방향을 수평 방향으로 회전시켜 넓은 공간이나 동선을 서사적으로 묘사합니다.',
      zh: '机位固定，将镜头在水平方向上从左向右（或反之）缓缓转动，以展现全景环境或跟拍水平运动。'
    }
  },
  'Whip Pan Transition': {
    name: { ar: 'بان خاطفة (Whip Pan)', en: 'Whip Pan Transition', fr: 'Transition en Whip Pan', es: 'Transición en Whip Pan', ko: '휩 팬 트랜지션 (급속 팬)', zh: '闪摇过渡 (Whip Pan)' },
    desc: { ar: 'انتقال حركي خاطف وسريع', en: 'Rapid whip pan blur', fr: 'Flou de whip pan rapide', es: 'Desfoque de whip pan rápido', ko: '빠른 휩 팬 모션 블러', zh: '极速转动造成的动感模糊' },
    tooltip: {
      ar: 'التفاف أفقي سريع جداً يسبب تشوشاً حركياً ضبابياً، يستخدم كإجراء دراماتيكي سريع أو انتقال مفاجئ بين لقطتين.',
      en: 'High energy rapid rotation creating a clean sweeping transition blur.',
      fr: 'Rotation rapide à haute énergie créant un flou de transition fluide.',
      es: 'Rotación rápida de alta energía que crea un desenfoque de transición limpio.',
      ko: '눈 깜짝할 사이에 렌즈를 옆으로 세게 낚아채듯 회전시켜, 화면 일부에 휩쓸리는 모션 블러 트랜지션을 연출합니다.',
      zh: '极快地进行水平转头拍摄，使画面产生强烈的速度感模糊，常用于充满力量感的动作戏或转场过渡。'
    }
  },
  'Camera Tilt': {
    name: { ar: 'إمالة عمودية (Tilt)', en: 'Camera Tilt', fr: 'Inclinaison de Caméra (Tilt)', es: 'Inclinación de Cámara (Tilt)', ko: '틸트 무브먼트', zh: '俯仰摇镜头 (Tilt)' },
    desc: { ar: 'إمالة رأسية بطيئة', en: 'Slow vertical camera tilt', fr: 'Inclinaison verticale lente', es: 'Inclinación vertical lenta', ko: '느린 수직 틸트', zh: '慢速垂直俯仰转动' },
    tooltip: {
      ar: 'تحريك رأس الكاميرا عمودياً (للأعلى أو للأسفل) لتوضيح الارتفاع، الحجم، أو للتكشف التدريجي.',
      en: 'Tilting vertically to establish verticality, scale, or a gradual height reveal.',
      fr: 'Inclinaison verticale pour établir la verticalité, l\'échelle ou une révélation progressive de la hauteur.',
      es: 'Inclinación vertical para establecer la verticalidad, la escala o una revelación gradual de la altura.',
      ko: '고정 삼각대 위에서 카메라 렌즈의 각도를 아래로 숙이거나 위로 치켜세워 높이나 깊이를 점진적으로 도출합니다.',
      zh: '机位固定，将镜头在垂直方向向上（仰拍）或向下（俯拍）摇动，以展现纵向高度、空间体量或用于渐进式揭示。'
    }
  },
  'Cinematic Pull-Out': {
    name: { ar: 'سحب خارجي (Pull-Out)', en: 'Cinematic Pull-Out', fr: 'Recul Cinématographique (Pull-Out)', es: 'Retirada Cinematográfica (Pull-Out)', ko: '시네마틱 풀아웃', zh: '电影感拉镜头' },
    desc: { ar: 'ابتعاد تدريجي للخلف', en: 'Slow camera pull-out', fr: 'Recul lent de la caméra', es: 'Retirada lenta de la cámara', ko: '느린 카메라 후퇴', zh: '慢速摄影机向后运动' },
    tooltip: {
      ar: 'سحب الكاميرا للخلف ببطء لتقليل التركيز على الشخصية وتوضيح اتساع البيئة أو التعبير عن العزلة.',
      en: 'Tracking backward to reveal the surroundings, evoking isolation and context.',
      fr: 'Travelling arrière pour révéler l\'environnement, évoquant l\'isolement et le contexte.',
      es: 'Travelling hacia atrás para revelar los alrededores, evocando aislamiento y contexto.',
      ko: '카메라 수레를 타고 후방으로 서서히 물러나며 피사체 주변의 대공간을 함께 공개해 소외감과 전반의 실태를 파악하게 돕습니다.',
      zh: '摄影机沿着轨道向后推行移动，逐渐展现出主体周围的大环境，以传达孤独感或空间上下文脉络。'
    }
  },
  'Slow Lens Zoom': {
    name: { ar: 'تقريب عدسة (Slow Zoom)', en: 'Slow Lens Zoom', fr: 'Zoom Optique Lent', es: 'Zoom Óptico Lento', ko: '슬로우 렌즈 줌', zh: '慢速变焦镜头' },
    desc: { ar: 'تقريب بصري بطيء', en: 'Slow Kubrick-style lens zoom', fr: 'Zoom optique lent style Kubrick', es: 'Zoom óptico lento estilo Kubrick', ko: '쿠브릭 스타일의 느린 줌', zh: '库布里克风格的变焦慢推' },
    tooltip: {
      ar: 'تقريب بؤري بصري غير طبيعي (Zoom) بأسلوب ستانلي كوبريك، يضفي إحساساً بالتوتر والاضطراب النفسي.',
      en: 'Optical zoom in, building psychological tension and uneasiness, Kubrick style.',
      fr: 'Zoom optique avant, créant une tension psychologique et un malaise, style Kubrick.',
      es: 'Zoom óptico hacia adelante, creando tensión psicológica e inquietud, estilo Kubrick.',
      ko: '카메라는 움직이지 않고 렌즈 내부의 줌 링을 회전시켜 부자연스러운 원근 왜곡과 압도적인 심리적 불안을 쌓아 올립니다.',
      zh: '利用变焦镜头进行光学推近，而不移动机身，由此带来一种非物理的原生视觉压迫与心理上的不安（库布里克风格）。'
    }
  },
  'Fast Crash Zoom': {
    name: { ar: 'زوم خاطف (Crash Zoom)', en: 'Fast Crash Zoom', fr: 'Zoom Rapide (Crash Zoom)', es: 'Zoom Rápido (Crash Zoom)', ko: '패스트 크래시 줌', zh: '急速急推变焦 (Crash Zoom)' },
    desc: { ar: 'تقريب زوم مفاجئ وسريع', en: 'Rapid sudden crash zoom', fr: 'Zoom rapide soudain', es: 'Zoom rápido y repentino', ko: '돌발적인 빠른 줌인', zh: '突发性的极速推焦' },
    tooltip: {
      ar: 'زوم بؤري خاطف وسريع جداً نحو هدف محدد بأسلوب تارانتينو، لإحداث تركيز درامي مفاجئ وصادم.',
      en: 'Sudden rapid magnification of the subject for heavy dramatic styling, Tarantino style.',
      fr: 'Grossissement rapide et soudain du sujet pour une mise en scène très dramatique, style Tarantino.',
      es: 'Aumento rápido y repentino del sujeto para una puesta en escena muy dramática, estilo Tarantino.',
      ko: '쿠엔틴 타란티노 사단이 애용하는 기법으로, 목표물에 총알을 쏘듯 찰나의 순간 광학 줌인을 당겨 급격하고 충격적인 포커스를 가합니다.',
      zh: '极快地将焦距推向主体的超高速度变焦，用于突发性的强调和强烈的喜剧/戏剧感（塔伦蒂诺风格）。'
    }
  },
  'Dolly Zoom Effect': {
    name: { ar: 'تأثير فيرتيجو (Dolly Zoom)', en: 'Dolly Zoom Effect', fr: 'Effet de Dolly Zoom', es: 'Efecto de Dolly Zoom', ko: '달리 줌 효과 (현기증 효과)', zh: '希区柯克变焦 (Dolly Zoom)' },
    desc: { ar: 'زوم وتراجع متزامن', en: 'Dolly zoom vertigo effect', fr: 'Effet vertige dolly zoom', es: 'Efecto vértigo de dolly zoom', ko: '달리 줌 버티고 현상', zh: '希区柯克式空间畸变' },
    tooltip: {
      ar: 'تأثير الفيرتيجو الشهير: الكاميرا تتحرك باتجاه بينما تقوم العدسة بعمل زوم للخارج (أو العكس) لخلق انضغاط بصري مرعب للخلفية.',
      en: 'Vertigo effect where background perspective warps while subject size is locked.',
      fr: 'Effet vertige où la perspective d\'arrière-plan se déforme tandis que la taille du sujet reste verrouillée.',
      es: 'Efecto vértigo donde la perspectiva de fondo se deforma mientras que el tamaño del sujeto se mantiene bloqueado.',
      ko: '피사체의 상대적 크기는 고정된 채 카메라는 뒤로 물러나고 렌즈는 앞으로 당기는(혹은 반대) 광학 왜곡을 실행해 뒷배경만 일그러지는 극도의 충격을 선사합니다.',
      zh: '希区柯克式的名场面效果：摄影机向后移动的同时镜头向前变焦（或相反），使主体在画面中尺寸不变，但背景空间发生怪诞畸变。'
    }
  },
  'Camera Roll': {
    name: { ar: 'تدوير محوري (Camera Roll)', en: 'Camera Roll', fr: 'Rotation de l\'Axe (Camera Roll)', es: 'Giro del Eje de la Cámara (Camera Roll)', ko: '카메라 축 회전', zh: '机身滚动旋转 (Camera Roll)' },
    desc: { ar: 'دوران الكاميرا حول محورها', en: 'Axis roll dutch angle', fr: 'Rotation de l\'axe hollandais', es: 'Giro del eje de ángulo holandés', ko: '렌즈 중심 축의 나선 회전', zh: '轴向旋转倾斜' },
    tooltip: {
      ar: 'دوران الكاميرا ببطء حول محورها الطولي لخلق زاوية مائلة مضطربة بصرياً تعبر عن اختلال الموازين أو الصدمة.',
      en: 'Slowly rotating on the lens axis to create a disorienting, unstable angle.',
      fr: 'Rotation lente sur l\'axe de l\'objectif pour créer un angle désorientant et instable.',
      es: 'Rotación lenta en el eje de la lente para crear un ángulo desorientador e inestable.',
      ko: '카메라의 롤링 축을 회전시켜 지평선을 완전히 눕히거나 공중회전을 일으키는 전술로, 불안정한 감정과 충격을 형상화합니다.',
      zh: '使摄影机沿着镜头的视线轴方向进行顺时针或逆时针旋转，以此创造出极度眩晕、失衡且颠覆性的动态视角。'
    }
  },
  'Tracking Shot': {
    name: { ar: 'لقطة تتبعية (Tracking)', en: 'Tracking Shot', fr: 'Travelling (Tracking)', es: 'Plan de Seguimiento (Tracking)', ko: '트래킹 샷', zh: '追踪镜头 (Tracking)' },
    desc: { ar: 'تتبع سلس لحركة الموضوع', en: 'Smooth follow tracking shot', fr: 'Travelling de suivi fluide', es: 'Plano de seguimiento fluido', ko: '부드러운 주행 추적 촬영', zh: '平滑追踪随行' },
    tooltip: {
      ar: 'تتبع انسيابي كامل لحركة الشخصية أثناء تنقلها في المشهد للحفاظ على اتصال حركي كامل وغامر.',
      en: 'Immersive long take following the subject smoothly as they travel.',
      fr: 'Plan-séquence immersif suivant le sujet en douceur pendant ses déplacements.',
      es: 'Toma larga e inmersiva que sigue al sujeto suavemente a medida que se desplaza.',
      ko: '피사체의 보폭이나 방향 전환에 맞춰 카메라 역시 트랙 바퀴를 타고 나란히 이동하며 공간의 흐름을 통째로 밀착 취재하듯 가로지릅니다.',
      zh: '摄影机架设在移动载具上，平滑稳定地跟随在空间中前行运动的主体，以获得极具临场感的持续追踪视野。'
    }
  },
  'Trucking Shot': {
    name: { ar: 'حركة تتبع جانبية (Trucking)', en: 'Trucking Shot', fr: 'Travelling Latéral (Trucking)', es: 'Plano de Seguimiento Lateral (Trucking)', ko: '트러킹 샷 (측면 트래킹)', zh: '侧向跟拍 (Trucking)' },
    desc: { ar: 'تتبع جانبي موازٍ', en: 'Lateral parallel tracking', fr: 'Travelling latéral parallèle', es: 'Seguimiento lateral paralelo', ko: '측면 평행 트래킹', zh: '侧向平行轨迹推行' },
    tooltip: {
      ar: 'الكاميرا تتحرك على سكة موازية للشخصية من الجانب، وتتحرك معها بنفس السرعة للحفاظ على كادر جانبي ثابت.',
      en: 'Lateral tracking shot moving left or right parallel to the subject.',
      fr: 'Travelling latéral se déplaçant vers la gauche ou la droite parallèlement au sujet.',
      es: 'Travelling lateral que se mueve hacia la izquierda o hacia la derecha paralelamente al sujeto.',
      ko: '피사체와 같은 속도로 걸어가는 카메라를 측면에 평행하게 위치시켜, 주인공의 프로필과 스쳐 지나가는 옆 풍경들을 나란히 포착합니다.',
      zh: '摄影机沿着与主体运动路径完全平行的轨道在侧面横向推移，展现横轴视角的并进行驶动作。'
    }
  },
  'Horizontal Arc Shot': {
    name: { ar: 'دوران قوسي (Arc Shot)', en: 'Horizontal Arc Shot', fr: 'Plan en Arc Horizontal', es: 'Plano en Arco Horizontal', ko: '수평 아크 샷', zh: '水平弧形环绕镜头' },
    desc: { ar: 'دوران دائري حول الشخصية', en: '360-degree orbit arc shot', fr: 'Plan en orbite à 360 degrés', es: 'Plano en órbita de 360 grados', ko: '360도 원형 궤도 선회', zh: '360度圆形环绕' },
    tooltip: {
      ar: 'حركة دورانية أفقية كاملة أو نصف دائرية (Orbit) حول الشخصية لكشف أبعادها وعلاقتها بالمحيط.',
      en: 'Cinematic 360-degree camera orbit tracking around the subject dynamically.',
      fr: 'Orbite cinématographique de la caméra à 360 degrés autour du sujet de manière dynamique.',
      es: 'Órbita cinematográfica de la cámara de 360 grados alrededor del sujeto dinámicamente.',
      ko: '피사체를 원의 중심으로 하여 카메라가 360도 혹은 180도로 공전하며 주위를 원형 궤도로 돌면서 입체감을 발굴합니다.',
      zh: '摄影机环绕着主体进行半圆或360度整圆的环绕摄影，生动呈现主体在立体空间中的所有视角。'
    }
  },
  'Boom Crane Shot': {
    name: { ar: 'حركة رافعة عمودية (Boom/Crane)', en: 'Boom Crane Shot', fr: 'Plan de Grue Vertical', es: 'Plano de Grúa Vertical', ko: '크레인 붐 샷', zh: '摇臂吊臂升降镜头' },
    desc: { ar: 'صعود أو هبوط رأسي بالرافعة', en: 'Vertical boom crane shot', fr: 'Plan de grue vertical montant ou descendant', es: 'Plano de grúa vertical hacia arriba o hacia abajo', ko: '수직 크레인 상승/하강', zh: '纵向升降摇臂拍摄' },
    tooltip: {
      ar: 'التحرك عمودياً للأعلى أو للأسفل باستخدام ذراع رافعة (Crane/Jib) للكشف عن اتساع البيئة والتضاريس.',
      en: 'Vertical jib action rising up or down to show scale and surrounding environment.',
      fr: 'Action de flèche verticale montant ou descendant pour montrer l\'échelle et l\'environnement environnant.',
      es: 'Acción de brazo vertical subiendo o bajando para mostrar la escala y el entorno circundante.',
      ko: '카메라 크레인이나 붐 암(Boom Arm) 장비를 이용해 지면에서 상공으로 치솟아 오르거나 수직 하강하며 스펙터클한 스케일을 포용합니다.',
      zh: '通过摄影摇臂升降系统，使镜头进行纵向的高空跃升或降落，由此展现宏大的环境格局和垂直视差变化。'
    }
  },
  'Low-Key Noir': {
    name: { ar: 'إضاءة خافتة (Low Key)', en: 'Low-Key Noir', fr: 'Noir à Faible Intensité', es: 'Clave Baja Noir', ko: '로우키 누아르', zh: '低调暗调' },
    desc: { ar: 'ظلال معتمة عميقة', en: 'Moody shadow dominant', fr: 'Ombres sombres dominantes', es: 'Sombras oscuras dominantes', ko: '음울한 암부 주조', zh: '阴郁暗部主导' },
    tooltip: {
      ar: 'إضاءة سينمائية خافتة بنسبة تباين عالية جداً تركز على الظلال والغموض، مستوحاة من كلاسيكيات أفلام النوار البوليسية.',
      en: 'Moody low-key illumination with dominant deep shadows, high contrast, and dark mystery. Inspired by classic police noir films.',
      fr: 'Éclairage cinématographique tamisé avec des ombres profondes, un contraste élevé et un mystère sombre. Inspiré des films noirs classiques.',
      es: 'Iluminación en clave baja con sombras profundas dominantes, alto contraste y misterio oscuro. Inspirado en el cine negro clásico.',
      ko: '음울한 로우키 조명으로 짙고 무거운 그림자, 대비, 어두운 미스터리를 연출합니다. 고전 누아르 형사 영화에서 영감을 받았습니다.',
      zh: '低调的暗部照明，具有占主导地位的深邃阴影、高对比度和神秘感。灵感来自经典的黑色侦探电影。'
    }
  },
  'High-Key Studio': {
    name: { ar: 'إضاءة ساطعة (High Key)', en: 'High-Key Studio', fr: 'Studio High-Key', es: 'Clave Alta de Estudio', ko: '하이키 스튜디오', zh: '高调明亮' },
    desc: { ar: 'إضاءة ساطعة متوازنة', en: 'Bright even studio light', fr: 'Lumière de studio brillante', es: 'Luz brillante y uniforme', ko: '밝고 고른 스튜디오 조명', zh: '明亮均匀演播室光' },
    tooltip: {
      ar: 'توزيع إضاءة ساطع ومتوازن يقلل الظلال القاسية بالكامل ليعطي شعوراً بالتفاؤل والوضوح والدقة العالية، مثل الإعلانات واللقطات الحيوية.',
      en: 'Bright, soft, and highly balanced lighting setup minimizing shadows. Creates an upbeat, clear, and highly detailed visual aesthetic.',
      fr: 'Configuration d\'éclairage brillante, douce et très équilibrée minimisant les ombres. Crée une esthétique visuelle joyeuse, claire et très détaillée.',
      es: 'Configuración de iluminación brillante, suave y muy equilibrada que minimiza las sombras. Crea una estética visual alegre, clara y muy detallada.',
      ko: '그림자를 최소화하는 밝고 부드러우며 매우 균형 잡힌 조명 설정입니다. 활기차고 선명하며 디테일한 비주얼을 만들어냅니다.',
      zh: '明亮、柔和且高度平衡的照明设置，最大程度减少阴影。营造出明快、清晰且细节丰富的视觉美感。'
    }
  },
  'Rembrandt Portraiture': {
    name: { ar: 'إضاءة رامبرانت (Rembrandt)', en: 'Rembrandt Portraiture', fr: 'Portrait Rembrandt', es: 'Retrato Rembrandt', ko: '렘브란트 조명', zh: '伦勃朗光影' },
    desc: { ar: 'إضاءة كلاسيكية للوجوه', en: 'Classic 45-degree key', fr: 'Lumière clé à 45 degrés', es: 'Luz clave a 45 grados', ko: '클래식 45도 키 라이트', zh: '经典45度主光' },
    tooltip: {
      ar: 'تقنية كلاسيكية لتوزيع الضوء بزاوية 45 درجة، تظهر مثلث إضاءة مميزاً على الخد المظلل للشخصية لإضفاء جاذبية وعمق درامي للوجوه.',
      en: 'Classic portrait setup placing key light at 45-degrees. Creates a signature triangle highlight on the shaded cheek for depth.',
      fr: 'Configuration de portrait classique plaçant la lumière clé à 45 degrés. Crée un triangle lumineux signature sur la joue ombragée pour donner de la profondeur.',
      es: 'Configuración de retrato clásica que coloca la luz clave a 45 grados. Crea un triángulo de luz característico en la mejilla sombreada para dar profundidad.',
      ko: '키 라이트를 45도 각도로 배치하는 클래식 포트레이트 설정입니다. 그늘진 뺨에 시그니처 삼각형 하이라이트를 만들어 깊이감을 줍니다.',
      zh: '经典的人像布光设置，将主光放在45度角。在背光面面颊上创造出标志性的三角形高光，以增加画面深度。'
    }
  },
  'Teal & Orange Split': {
    name: { ar: 'تأثير تيل وأورنج (Teal & Orange)', en: 'Teal & Orange Split', fr: 'Division Teal & Orange', es: 'División Teal y Orange', ko: '티디 & 오렌지 분할', zh: '青橙色调分割' },
    desc: { ar: 'تلوين سينمائي ثنائي', en: 'Stylized cyan-amber split', fr: 'Séparation cyan-ambre stylisée', es: 'División estilizada cian-ámbar', ko: '스타일리시한 시안-앰버 분할', zh: '风格化青-琥珀色分割' },
    tooltip: {
      ar: 'التقسيم اللوني السينمائي الشهير بين التيل البارد والأورانج الدافئ لخلق تباين لوني مذهل وجذاب يعزز ملامح الشخصية وعمق الخلفية.',
      en: 'The iconic cinematic color styling. Uses cold cyan/teal fill lights and warm amber/orange key lights for striking color contrast.',
      fr: 'Le style de couleur cinématographique emblématique. Utilise des lumières de remplissage cyan/teal froides et des lumières clés ambre/orange chaudes pour un contraste saisissant.',
      es: 'El icónico estilo de color cinematográfico. Utiliza luces de relleno cian/teal frías y luces clave ámbar/naranja cálidas para lograr un contraste llamativo.',
      ko: '상징적인 시네마틱 컬러 스타일링. 차가운 시안/테일 필 라이트와 따뜻한 앰버/오렌지 키 라이트를 사용하여 독특한 색상 대비를 만듭니다.',
      zh: '标志性的电影色彩风格。使用冷色调的青色/青绿色辅助光 and 暖色调的琥珀色/橙色主光，创造出强烈的色彩对比。'
    }
  },
  'Candlelit Intimacy': {
    name: { ar: 'إضاءة الشموع الحميمة', en: 'Candlelit Intimacy', fr: 'Intimité aux Bougies', es: 'Intimidad a la Luz de las Velas', ko: '촛불의 친밀함', zh: '烛光温情' },
    desc: { ar: 'وهج الشموع الدافئ', en: 'Warm candlelit ambiance', fr: 'Ambiance chaleureuse aux bougies', es: 'Cálido ambiente a la luz de las velas', ko: '따뜻한 촛불 분위기', zh: '温暖烛光氛围' },
    tooltip: {
      ar: 'إضاءة خافتة ناعمة ومتذبذبة من الشموع تمنح المشهد حميمية فائقة ورومانسية هادئة أو طابع الحقب التاريخية القديمة.',
      en: 'Soft, flickering candlelight emitting an ultra-warm glow. Grants extreme intimacy, romance, or classic historical period ambiance.',
      fr: 'Lumière douce et vacillante des bougies émettant une lueur ultra-chaleureuse. Apporte une intimité extrême, du romantisme ou une ambiance historique.',
      es: 'Luz suave y parpadeante de las velas que emite un brillo ultra cálido. Aporta extrema intimidad, romance o un ambiente de época histórica clásica.',
      ko: '부드럽게 흔들리는 촛불이 극도로 따뜻한 온기를 내뿜습니다. 각별한 친밀감, 로맨스, 혹은 고전적인 역사적 시대 분위기를 연출합니다.',
      zh: '柔和、闪烁의 烛光散发着极度温暖的光芒。赋予场景极致的亲密感、浪漫感，或经典的时代历史氛围。'
    }
  },
  'Sodium Vapor Streetlights': {
    name: { ar: 'نور شوارع صوديومي', en: 'Sodium Vapor Streetlights', fr: 'Lampadaires au Sodium', es: 'Farolas de Vapor de Sodio', ko: '소듐 가로등', zh: '钠蒸气街灯' },
    desc: { ar: 'وهج صوديوم برتقالي للشوارع', en: 'Industrial sodium amber', fr: 'Ambre sodium industriel', es: 'Ámbar de sodio industrial', ko: '공업용 소듐 앰버', zh: '工业钠黄色光' },
    tooltip: {
      ar: 'ضوء الشوارع البرتقالي الأحادي المميز للمدن والمطاردات الليلية، يعيد إحياء طابع أفلام التسعينات الحضرية.',
      en: 'Distinct industrial orange/amber monochromatic street lighting, perfect for gritty urban nights and classic 90s thriller aesthetics.',
      fr: 'Éclairage public industriel orange/ambre monochrome distinct, parfait pour les nuits urbaines réalistes et l\'esthétique des thrillers des années 90.',
      es: 'Iluminación pública industrial de color naranja/ámbar monocromático, perfecta para noches urbanas crudas y la estética de los thrillers clásicos de los 90.',
      ko: '특유의 공업용 오렌지/앰버 단색 가로등 조명으로, 거친 도시의 밤과 클래식 90년대 스릴러 미학에 완벽하게 어울립니다.',
      zh: '独特的工业橙黄色/琥珀色单色街灯照明，非常适合粗粝的都市夜晚和经典的90年代惊悚片美感。'
    }
  },
  'Mercury Vapor Industrial': {
    name: { ar: 'بخار الزئبق البارد', en: 'Mercury Vapor Industrial', fr: 'Mercure Industriel', es: 'Vapor de Mercurio Industrial', ko: '수은등 인더스트리얼', zh: '汞蒸气工业光' },
    desc: { ar: 'أزرق مخضر بارد صناعي', en: 'Clinical greenish-blue glow', fr: 'Lueur bleu-vert clinique', es: 'Brillo clínico azul verdoso', ko: '차가운 청록색 스펙트럼', zh: '冷峻的青蓝色光芒' },
    tooltip: {
      ar: 'إضاءة باردة وقاسية بلون أخضر مزرق تحاكي أضواء المصانع المهجورة، مراكز الشرطة، أو الأماكن السريرية لتوحي بالتوتر.',
      en: 'Gritty, clinical greenish-blue light setup simulating abandoned warehouses, prisons, or police stations for cold tension.',
      fr: 'Installation de lumière bleu-vert froide et clinique simulant des entrepôts abandonnés, des prisons ou des commissariats pour créer une tension glaciale.',
      es: 'Configuración de luz azul verdosa fría y clínica que simula almacenes abandonados, prisiones o comisarías para generar una tensión fría.',
      ko: '버려진 창고, 감옥, 경찰서 등을 모방하는 청록색 조명 설정으로, 차갑고 팽팽한 긴장감을 연출합니다.',
      zh: '粗粝、冷峻的青蓝色灯光设置，模拟废弃仓库、监狱或警察局，以营造冰冷的紧张感。'
    }
  },
  'Volumetric God Rays': {
    name: { ar: 'خيوط ضوء حجمية', en: 'Volumetric God Rays', fr: 'Rayons Volumétriques', es: 'Rayos Crepusculares Volumétricos', ko: '볼류메تريك 빛줄기', zh: '体积耶稣光' },
    desc: { ar: 'أشعة شمس حجمية مخترقة', en: 'Cinematic light beams', fr: 'Faisceaux lumineux de cinéma', es: 'Haces de luz cinematográficos', ko: '시네마틱 선빔', zh: '电影级穿透光束' },
    tooltip: {
      ar: 'حزم ضوئية واضحة ومخترقة للضباب أو النوافذ أو أغصان الأشجار تضفي طابعاً روحانياً وسحرياً على المشهد.',
      en: 'Visible sun shafts or crepuscular light beams cutting through mist, windows, or trees for highly atmospheric, spiritual visuals.',
      fr: 'Rayons de soleil visibles ou faisceaux crepusculaires traversant la brume, les fenêtres ou les arbres pour des visuels très spirituels et atmosphériques.',
      es: 'Haces de sol visibles o rayos crepusculares que atravesan la niebla, las ventanas o los árboles para lograr visuales muy espirituales y académicos.',
      ko: '안개, 창문, 또는 나뭇가지 사이를 뚫고 들어오는 선명한 빛줄기로, 대기감이 풍부하고 신비로운 비주얼을 연출합니다.',
      zh: '穿透薄雾、窗户或树木的可见光轴或暮光光束，用于营造极具氛围感和神圣感的画面。'
    }
  },
  'Flickering Firelight': {
    name: { ar: 'وهج نار متذبذب', en: 'Flickering Firelight', fr: 'Feu Vacillant', es: 'Luz de Fuego Parpadeante', ko: '일렁이는 모닥불 وهج', zh: '闪烁火光' },
    desc: { ar: 'إضاءة نارية متذبذبة', en: 'Dynamic flickering campfire glow', fr: 'Lueur dynamique de feu de camp', es: 'Brillo parpadeante de fogata', ko: '역동적인 불꽃의 일렁임', zh: '动态闪烁营火光芒' },
    tooltip: {
      ar: 'محاكاة إضاءة النار أو موقد التدفئة أو المخيمات بلونها البرتقالي الناري الدافئ وحركتها المستمرة.',
      en: 'Simulates the flickering orange-red warmth of a campfire, fireplace, or furnace, casting dynamic movement and raw warmth.',
      fr: 'Simule la chaleur orange-rouge vacillante d\'un feu de camp, d\'une cheminée ou d\'un fourneau, projetant un mouvement dynamique.',
      es: 'Simula la calidez parpadeante naranja rojiza de una fogata, chimenea u hogar, proyectando un movimiento dinámico y calidez cruda.',
      ko: '모닥불, 벽난로 또는 화로의 오렌지-붉은색 불꽃의 흔들림을 모방하여 역동적인 움직임과 따뜻함을 전달합니다.',
      zh: '模拟营火、壁炉或熔炉闪烁的红橙色温暖光芒，投射出动态的运动和质朴的温度。'
    }
  },
  'Dappled Gobo Moonlight': {
    name: { ar: 'نور قمر متسلل (Gobo)', en: 'Dappled Gobo Moonlight', fr: 'Clair de Lune Dappled Gobo', es: 'Luz de Luna Filtrada (Gobo)', ko: '다플 고보 달빛', zh: '斑驳遮板月光' },
    desc: { ar: 'ظلال أوراق الشجر منقطة', en: 'Leafy textured moonlight', fr: 'Clair de lune aux textures de feuilles', es: 'Luz de luna texturizada con hojas', ko: '나뭇잎 실루엣의 달빛', zh: '叶状纹理月光' },
    tooltip: {
      ar: 'إضاءة ضوء القمر وهي تخترق أوراق الشجر لتخلق ظلالاً منقطة ومتحركة (Dappled Shadows) على الشخصيات والأرض لغموض فائق.',
      en: 'Cold blue moonlit rays filtering through leafy branches, casting intricate textured shadows for mystery and suspense.',
      fr: 'Rayons lunaires bleus et froids filtrant à travers les branches feuillues, projetant des ombres texturées complexes pour créer du mystère.',
      es: 'Fríos rayos de luna azulados que se filtran a través de ramas frondosas, proyectando sombras texturizadas para dar misterio y suspenso.',
      ko: '나뭇잎 가지 사이로 여과되어 들어오는 차가운 푸른 달빛으로, 인물과 지면에 정교한 실루엣 그림자를 남겨 신비로움을 조성합니다.',
      zh: '冷蓝色的月光穿过茂密的树枝，投射出复杂的纹理阴影，以增添神秘和悬疑感。'
    }
  },
  'Emergency Strobe Flash': {
    name: { ar: 'أضواء طوارئ وامضة', en: 'Emergency Strobe Flash', fr: 'Stroboscope d\'Urgence', es: 'Estroboscópico de Emergencia', ko: '비상 스트로브 플래시', zh: '紧急闪烁警示灯' },
    desc: { ar: 'وميض طوارئ شرطي', en: 'Flickering red-blue sirens', fr: 'Sirènes rouges-bleues clignotantes', es: 'Sirenas rojas y azules parpadeantes', ko: '적색-청색 사이렌의 교차 점멸', zh: '红蓝交替闪烁警笛' },
    tooltip: {
      ar: 'أضواء سيارات الشرطة أو الطوارئ الوامضة باللونين الأحمر والأزرق المتعاقبين لخلق حالة توتر ومطاردة قصوى.',
      en: 'Flashing red and blue emergency beacon lights casting rhythmic, high-contrast strobe patterns across the frame. Driving high tension.',
      fr: 'Feux de balise d\'urgence rouges et bleus clignotants projetant des motifs stroboscopiques rythmés à fort contraste dans le cadre. Tension maximale.',
      es: 'Luces rojas y azules de emergencia que parpadean de forma rítmica, proyectando patrones estroboscópicos de alto contraste. Tensión extrema.',
      ko: '적색과 청색 비상 경고등이 번갈아 점멸하며 격자 형태의 고대비 플래시 패턴을 투사합니다. 극단적인 긴장 상태를 연출합니다.',
      zh: '红蓝交替闪烁的紧急警示灯，在画面中投射出有节奏的、高对比度的闪烁图案。用于驱动高度紧张的剧情。'
    }
  },
  'Bioluminescent Glow': {
    name: { ar: 'توهج حيوي سحري', en: 'Bioluminescent Glow', fr: 'Lueur Bioluminescente', es: 'Brillo Bioluminiscente', ko: '생체 발광의 빛', zh: '生物发光荧光' },
    desc: { ar: 'إضاءة مشعة طبيعياً', en: 'Magical cyan glowing organic', fr: 'Organisme magique à lueur cyan', es: 'Organismo mágico con brillo cian', ko: '신비로운 청록색 발광 생명체', zh: '神奇青色发光有机物' },
    tooltip: {
      ar: 'ضوء ينبعث من كائنات أو نباتات أو مياه مشعة طبيعياً (مثل أجواء فيلم Avatar) لتأثير خيالي ساحر.',
      en: 'Magical cyan-blue light emitting from glowing plants, water, or organic life. Imbues scenes with ethereal sci-fi fantasy.',
      fr: 'Lumière magique bleu-cyan émise par des plantes, de l\'eau ou de la vie organique rougeoyante. Imprègne la scène d\'un fantastique éthéré.',
      es: 'Luz mágica azul cian emitida por plantas, agua o vida orgánica resplandeciente. Llena las escenas de fantasía de ciencia ficción.',
      ko: '발광하는 식물, 물 또는 유기 생명체로부터 뿜어져 나오는 신비로운 청록색 빛입니다. 장면에 영롱한 SF 판타지 느낌을 부여합니다.',
      zh: '发光植物、水或生物发出的奇幻青蓝色光芒。使场景充满空灵的科幻奇幻色彩。'
    }
  },
  'Urban Sodium & Cyan Contrast': {
    name: { ar: 'تباين صوديوم وتيل مدني', en: 'Urban Sodium & Cyan Contrast', fr: 'Contraste Sodium & Cyan Urbain', es: 'Contraste Urbano Sodio y Cian', ko: '도시의 소듐 & 시안 대비', zh: '都市钠黄与青色对比' },
    desc: { ar: 'تباين لوني مدني برتقالي وأزرق', en: 'Amber-cyan urban split', fr: 'Séparation urbaine ambre-cyan', es: 'División urbana ámbar-cian', ko: '앰버-시안 시티 컬러 매치', zh: '琥珀色与青色都市色彩分割' },
    tooltip: {
      ar: 'التباين المدني البوليسي الشهير؛ دمج إضاءة الشارع الصوديومية البرتقالية مع الإضاءة الزرقاء الباردة للمباني والنوافذ.',
      en: 'The iconic neo-noir city contrast. Combines industrial amber-orange streetlights with cool cyan building/window lights.',
      fr: 'Le contraste urbain néo-noir emblématique. Combine des lampadaires industriels orange-ambre avec les lumières bleu-cyan des fenêtres.',
      es: 'El icónico contraste urbano neo-noir. Combina farolas industriales de color naranja ámbar con luces cian frías de edificios y ventanas.',
      ko: '상징적인 네오누아르 도시 대비입니다. 오렌지-황색 계열 가로등과 건물/창문에서 나오는 차가운 시안색 조명을 병치합니다.',
      zh: '标志性的新黑色电影都市色彩对比。将工业用的暖橙色钠灯街灯与冷色调的青色建筑物/窗口灯光结合起来。'
    }
  },
  'Handheld Flashlight Beam': {
    name: { ar: 'كشاف يدوي مركز', en: 'Handheld Flashlight Beam', fr: 'Faisceau de Lampe de Poche', es: 'Haz de Linterna de Mano', ko: '손전등의 집중 광선', zh: '手持手电筒光束' },
    desc: { ar: 'شعاع بحث ضيق', en: 'Suspenseful flashlight cone', fr: 'Cône de lampe de poche à suspense', es: 'Cono de linterna de suspenso', ko: '긴장감 도는 서치 라이트', zh: '悬疑感手电光锥' },
    tooltip: {
      ar: 'شعاع ضوئي ضيق من كشاف يدوي يخترق الظلام الدامس، لخلق حالة بحث أو رعب وإثارة.',
      en: 'A narrow, focused cone of light from a handheld flashlight cutting through pitch darkness, highlighting volumetric dust particles.',
      fr: 'Un cône de lumière étroit et focalisé provenant d\'une lampe de poche coupant l\'obscurité totale, mettant en valeur la poussière volumétrique.',
      es: 'Un cono de luz estrecho y enfocado de una linterna de mano que corta la oscuridad absoluta, destacando las partículas de polvo volumétricas.',
      ko: '칠흑 같은 어둠을 뚫고 뻗어나가는 손전등의 좁고 집중된 원뿔형 광선으로, 공기 중 먼지 입자까지 볼류메트릭하게 묘사해 긴박감을 줍니다.',
      zh: '手持手电筒发出的一束狭窄、聚焦的锥形光线，穿透漆黑的夜空，显现出空气中的微尘颗粒。'
    }
  },
  'Motivated TV Glow': {
    name: { ar: 'وهج شاشة تلفزيون', en: 'Motivated TV Glow', fr: 'Lueur de Téléviseur', es: 'Brillo de Pantalla de TV', ko: 'TV 화면의 인공 광원', zh: '电视屏幕的环境荧光' },
    desc: { ar: 'ضوء أزرق متذبذب خافت', en: 'Flickering blue screen reflection', fr: 'Reflet d\'écran bleu vacillant', es: 'Reflejo de pantalla azul parpadeante', ko: '깜빡이는 푸른 화면 반사', zh: '闪烁的蓝色屏幕反射' },
    tooltip: {
      ar: 'يحاكي الضوء البارد والمنعكس من شاشة تلفزيون تعمل في غرفة مظلمة على وجه الشخصية، ليعبر عن العزلة والتوتر.',
      en: 'Simulates the cold, blue, rhythmic flickering light cast by an active off-screen TV in a dark room. Conveying isolation.',
      fr: 'Simule la lumière bleue et froide vacillante émise par un téléviseur allumé hors champ dans une pièce sombre. Exprime l\'isolement.',
      es: 'Simula la luz fría, azul y rítmicamente parpadeante proyectada por un televisor encendido fuera de pantalla en una habitación oscura. Transmite aislamiento.',
      ko: '어두운 방 안에서 화면 밖의 TV가 발산하는 차갑고 푸르며 리드미컬하게 일렁이는 인공 광원을 묘사합니다. 고립과 소외를 전달합니다.',
      zh: '模拟黑暗房间中，由于画面外的电视机闪烁而在人物脸上投射出的冷蓝色、有节奏起伏的环境光。用以表达孤独感。'
    }
  },
  'Golden Rim Light Glow': {
    name: { ar: 'هالة الساعة الذهبية', en: 'Golden Rim Light Glow', fr: 'Lumière de Contour Dorée', es: 'Brillo de Luz de Contorno Dorada', ko: '골든 림 라이트 وهج', zh: '金色轮廓边缘光' },
    desc: { ar: 'تحديد ذهبي للحواف', en: 'Warm backlit rim halo', fr: 'Halo de contour rétroéclairé chaud', es: 'Halo de contorno retroiluminado cálido', ko: '따뜻한 역광 테두리 헤일로', zh: '暖色逆光轮廓光晕' },
    tooltip: {
      ar: 'تحديد حواف الشخصية بهالة ضوئية ذهبية متوهجة من الخلف بينما يظل وجهها في شبه ظل، لمظهر شاعري ملحمي.',
      en: 'Intense golden backlighting framing the subject\'s outline with a glowing halo, leaving the foreground in stylized soft shadow.',
      fr: 'Rétroéclairage doré intense encadrant la silhouette du sujet avec un halo lumineux, laissant le premier plan dans une ombre douce.',
      es: 'Retroiluminación dorada intensa que enmarca el contorno del sujeto con un halo brillante, dejando el primer plano en una sombra suave estilizada.',
      ko: '피사체 뒤편에서 강렬한 주황빛 광원을 쏘아 인물의 외곽 라인에 후광 효과를 입히고, 앞모습은 부드러운 실루엣 그늘로 남깁니다.',
      zh: '强烈的金色逆光，将主体的轮廓勾勒出一层发光的光晕，而使前景处于一种极具艺术感的柔和阴影中。'
    }
  },
  'Monochrome Pure Silhouette': {
    name: { ar: 'سيلويت أحادي خالص', en: 'Monochrome Pure Silhouette', fr: 'Silhouette Pure Monochrome', es: 'Silueta Pura Monocroma', ko: '단색 실루엣', zh: '单色纯黑剪影' },
    desc: { ar: 'ظل أسود خالص', en: 'Solid black figure outline', fr: 'Contour noir uni du personnage', es: 'Contorno negro sólido de la figura', ko: '선명한 흑색 피사체 테두리', zh: '纯黑实体人物轮廓' },
    tooltip: {
      ar: 'إضاءة خلفية كاملة بنسبة 100% وبدون أي ضوء أمامي، مما يحول الشخصية إلى ظل أسود خالص محدد الملامح.',
      en: 'Stark 100% backlight with zero front fill. Transforms the subject into a solid black graphical silhouette against a bright background.',
      fr: 'Rétroéclairage net à 100% sans éclairage frontal. Transforme le sujet en une silhouette noire solide sur fond clair.',
      es: 'Retroiluminación nítida al 100% sin luz de relleno frontal. Transforma al sujeto en una silueta negra sólida sobre un fondo brillante.',
      ko: '보조 광원을 완전히 차단한 극단적인 100% 역광 기법입니다. 피사체를 밝은 배경 대비 단색의 검은색 그래픽 실루엣으로 전환합니다.',
      zh: '完全由逆光照明，没有任何正面填充光。将主体在明亮的背景前塑造为一个纯黑的、极具图形感的剪影。'
    }
  },
  'Overcast Flat Diffusion': {
    name: { ar: 'غيوم كثيفة محايدة', en: 'Overcast Flat Diffusion', fr: 'Diffusion Plate Nuageuse', es: 'Difusión Plana Nublada', ko: '오버캐스트 플랫 디퓨전', zh: '阴天平淡柔光' },
    desc: { ar: 'رمادي ناعم بدون ظلال', en: 'Gloomy gray flat lighting', fr: 'Lumière plate grise et sombre', es: 'Iluminación plana gris melancólica', ko: '그림자 없는 우울한 회색 광', zh: '无阴影的灰暗均匀光线' },
    tooltip: {
      ar: 'ضوء منتشر بالكامل من سماء ملبدة بالغيوم دون ظلال واضحة على الإطلاق، يعطي طابعاً كئيباً أو واقعياً بارداً جداً.',
      en: 'Soft, heavily diffused light from a fully overcast sky. Eliminates harsh shadows, producing a gloomy, melancholic realistic atmosphere.',
      fr: 'Lumière douce et très diffusée provenant d\'un ciel entièrement couvert. Élimine les ombres dures, produisant une atmosphère mélancolique.',
      es: 'Luz suave y muy difusa de un cielo completamente nublado. Elimina las sombras duras, produciendo una atmósfera melancólica y realista.',
      ko: '완전히 흐린 하늘에서 나오는 부드럽고 넓게 분산된 빛입니다. 짙은 그림자를 제거하여 다소 우울하고 쓸쓸하며 사실적인 대기감을 자아냅니다.',
      zh: '来自完全多云天空的柔和、高度散射的光线。消除了所有强烈的阴影，从而产生一种阴郁、忧郁的写实氛围。'
    }
  },
  'Time-Lapse': {
    name: { ar: 'حركة سريعة (Time-lapse)', en: 'Time-Lapse', fr: 'Accéléré (Time-Lapse)', es: 'Cámara Rápida (Time-Lapse)', ko: '타임랩스 (시간 압축)', zh: '延时摄影 (Time-Lapse)' },
    desc: { ar: 'مرور الوقت السريع', en: 'Time-lapse motion', fr: 'Mouvement accéléré', es: 'Movimiento acelerado en el tiempo', ko: '시간 흐름 축약 무브먼트', zh: '飞速流逝的时间轨迹' },
    tooltip: {
      ar: 'تسجيل اللقطات بفواصل زمنية واسعة لعرض حركة النجوم، الغيوم، أو زحام المدينة بشكل متسارع وسلس في آن واحد. يجسد مرور الزمن السريع بشكل شاعري.',
      en: 'Captures frames at wide intervals to compress hours into seconds — perfect for showing movement of stars, clouds, or city crowds in a smooth, accelerated flow.',
      fr: 'Capture les images à de grands intervalles pour compresser les heures en secondes — parfait pour montrer le mouvement des étoiles, des nuages ou des foules urbaines.',
      es: 'Captura fotogramas a intervalos amplios para comprimir horas en segundos, ideal para mostrar el movimiento de las estrellas, las nubes o la multitud urbana.',
      ko: '넓은 시간 간격으로 프레임을 촬영해 몇 시간을 몇 초로 압축합니다. 별, 구름, 혹은 도시 인파의 움직임을 가속화하여 시적인 흐름으로 묘사하는 데 적합합니다.',
      zh: '以较长的时间间隔捕获画面，从而将数小时压缩为数秒——非常适合以平滑、加速的流动方式展示星星、云彩或城市人群的运动。'
    }
  },
  'Slow Motion': {
    name: { ar: 'حركة بطيئة (Slow Motion)', en: 'Slow Motion', fr: 'Ralenti (Slow Motion)', es: 'Cámara Lenta (Slow-Mo)', ko: '슬로우 모션 (고속 촬영)', zh: '慢动作 (Slow Motion)' },
    desc: { ar: 'تفاصيل بطيئة', en: 'High speed slow-mo', fr: 'Ralenti haute vitesse', es: 'Cámara lenta de alta velocidad', ko: '초고속 촬영 슬로우 모션', zh: '高帧率高解析慢放' },
    tooltip: {
      ar: 'التصوير بسرعات إطارات عالية جداً لالتقاط التفاصيل واللحظات المتناهية السرعة التي لا تراها العين. مثالية لقطرات المطر، تحطم الزجاج، وحركات القتال الملحمية.',
      en: 'High-speed capture that slows dynamic events down to reveal details invisible to the naked eye — rain droplets, glass shattering, or epic action sequences.',
      fr: 'Capture à haute vitesse qui ralentit les événements dynamiques pour révéler des détails invisibles à l\'œil nu — gouttes de pluie, éclats de verre, actions épiques.',
      es: 'Captura a alta velocidad que ralentiza eventos dinámicos para revelar detalles invisibles a simple vista: gotas de lluvia, cristales rotos o secuencias de acción.',
      ko: '매우 높은 프레임 레이트로 녹화하여 육안으로 식별할 수 없는 미시적인 속도의 디테일을 정교하게 느린 속도로 구현합니다. 물방울 튀김, 유리창 파손 등에 주로 사용됩니다.',
      zh: '以高帧率捕获画面，减慢高速运动事件的速度，从而展现肉眼无法察觉的丰富细节——如雨滴坠落、玻璃破碎或史诗级的动作戏码。'
    }
  },
  'Surreal Reflection': {
    name: { ar: 'انعكاس مرآة سريالي', en: 'Surreal Reflection', fr: 'Réflexion Surréaliste', es: 'Reflejo Surrealista', ko: '초현실적 반사', zh: '超现实镜面反射' },
    desc: { ar: 'انعكاس سريالي حالم', en: 'Dreamy reflection symmetry', fr: 'Symétrie de réflexion onirique', es: 'Simetría de reflejo onírica', ko: '몽환적 데칼코마니 물결', zh: '梦幻对称倒影' },
    tooltip: {
      ar: 'يخلق انعكاسات مائية أو مرآتية سريالية تدمج وتكرر المشهد بطريقة حالمة ومحيرة للبصر.',
      en: 'Generates dreamlike water or mirror reflections to split or distort reality artistically.',
      fr: 'Génère des reflets aquatiques ou de miroir oniriques pour diviser ou déformer la réalité de manière artistique.',
      es: 'Genera reflejos de agua o espejo oníricos para dividir o distorsionar la realidad de forma artística.',
      ko: '물웅덩이나 거울 등 매끄러운 표면에서 도출되는 초현실적 반사를 활용하여 일상의 현실을 예술적으로 굴절시킵니다.',
      zh: '生成梦幻般的冷水面或镜面反射，以艺术化的方式分割或扭曲现实结构。'
    }
  },
  'Double Exposure': {
    name: { ar: 'تعريض مزدوج (Double Exposure)', en: 'Double Exposure', fr: 'Double Exposition', es: 'Doble Exposición', ko: '이중 노출', zh: '双重曝光 (Double Exposure)' },
    desc: { ar: 'دمج صورتين متداخلتين', en: 'Double exposure blend', fr: 'Mélange de double exposition', es: 'Mezcla de doble exposición', ko: '두 개의 다층적 화면 합성', zh: '双重画面重叠融汇' },
    tooltip: {
      ar: 'تقنية دمج صورتين مختلفتين في كادر واحد لتبدوان متداخلتين بشكل سريالي فني. طريقة رائعة للتعبير عن الأفكار والمشاعر المعقدة والمزاج النفسي.',
      en: 'Visual technique blending two distinct images into one frame — ideal for poetic storytelling, psychological concepts, and artistic visual metaphors.',
      fr: 'Technique visuelle mélangeant deux images distinctes dans un seul cadre — idéale pour la narration poétique, les concepts psychologiques.',
      es: 'Técnica visual que mezcla dos imágenes distintas en un fotograma; ideal para narrativas poéticas, conceptos políticos.',
      ko: '두 개의 다른 장면을 한 프레임 안에 물리적으로 오버랩시켜 융합하는 카메라 기법입니다. 인물의 심리 상태나 시적인 은유를 전달하는 데 널리 활용됩니다.',
      zh: '将两张不同的图像融合在一个画面中的视觉手法——非常适合诗意叙事、呈现复杂的心理概念以及艺术化的视觉隐喻。'
    }
  },
  'Dramatic Silhouette': {
    name: { ar: 'سيلويت درامي (Silhouette)', en: 'Dramatic Silhouette', fr: 'Silhouette Dramatique', es: 'Silueta Dramática', ko: '극적인 실루엣', zh: '戏剧性逆光剪影' },
    desc: { ar: 'سيلويت أسود مظلم', en: 'Imposing silhouette', fr: 'Silhouette imposante', es: 'Silueta imponente', ko: '시선을 압도하는 역광 윤곽선', zh: '威严挺拔的剪影轮廓' },
    tooltip: {
      ar: 'وضع مصدر الضوء القوي خلف الموضوع مباشرة، ليتحول الموضوع إلى ظل أسود غامض بدون تفاصيل واضحة. يمنح الصورة هيبة ملحمية وغموضاً فائق الجاذبية.',
      en: 'Strong backlighting outlining the subject as a dark shadow silhouette — creates dramatic mystery, heroic outlines, and highly graphic compositions.',
      fr: 'Rétroéclairage puissant soulignant le sujet comme une silhouette d\'ombre sombre — crée du mystère, des contours héroïques.',
      es: 'Fuerte retroiluminación que perfila al sujeto como una silueta oscura; crea misterio, perfiles heroicos.',
      ko: '강력한 배후 광원을 통과시켜 피사체의 세부 이목구비를 제거하고 암흑 윤곽선으로 전환합니다. 극적인 신비함และ 웅장한 구도를 선사합니다.',
      zh: '强烈的逆光照射，使主体呈现为黑暗的阴影轮廓——营造出戏剧性的神秘感、英雄般的线条感以及高度平面化的构图。'
    }
  },
  'Long Exposure': {
    name: { ar: 'تعريض طويل (Long Exposure)', en: 'Long Exposure', fr: 'Pose Longue', es: 'Exposición Prolongada', ko: '장노출 (장기 노출)', zh: '长曝光 (Long Exposure)' },
    desc: { ar: 'مسارات ضوئية ناعمة', en: 'Smooth light trails', fr: 'Traînées lumineuses fluides', es: 'Estelas de luz suaves', ko: '부드러운 시간의 궤적', zh: '丝滑流光轨迹' },
    tooltip: {
      ar: 'إبقاء الشاتر مفتوحاً لفترة طويلة لتنعيم المياه الجارية أو إظهار حركة أضواء السيارات كخطوط ناصعة وناعمة. تعطي الصورة إحساساً بالحركة الحالمة والزمن المستمر.',
      en: 'Keeps the shutter open to smooth flowing water or render car headlights as continuous glowing streaks — conveys dreamlike movement and the passage of time.',
      fr: 'Maintient l\'obturateur ouvert pour lisser l\'eau ou restituer les phares sous forme de bandes lumineuses — exprime le passage du temps.',
      es: 'Mantiene abierto el obturador para suavizar el flujo del agua o mostrar faros como estelas luminosas continuas, expresa el paso del tiempo.',
      ko: '셔터를 장시간 열어두어 흐르는 물을 부드러운 안개처럼 표현하거나, 자동차 전조등을 끊어지지 않는 빛의 궤적으로 남깁니다. 초현실적인 시간의 흐름을 상징합니다.',
      zh: '保持快门长时间打开，使流动的水流显得丝滑，或将汽车车灯渲染为连续 of 流光光条——传达梦幻般的运动和时间的消逝。'
    }
  },
  '2.39:1 Cinemascope': {
    name: { ar: '2.39:1 سينما عريضة', en: '2.39:1 Cinemascope', fr: 'Format Cinémascope 2.39:1', es: 'Format Cinemascope 2.39:1', ko: '2.39:1 시네마스코프', zh: '2.39:1 电影宽银幕' },
    desc: { ar: 'كادر سينمائي عريض جداً', en: 'Cinemascope format', fr: 'Format cinémascope large', es: 'Formato cinemascope ancho', ko: '시네마스코프 광대역 비율', zh: '超宽银幕幅面' },
    tooltip: {
      ar: 'أعرض كادر سينمائي مستخدم في الأفلام الكبرى والملحمية. يمنح شعوراً رائعاً بالاتساع الجغرافي والبعد البصري المهيب. الأسلوب المعتاد للأفلام ذات الطابع الملحمي البصري.',
      en: 'The widest standard theatrical ratio for sweeping epics and blockbusters — creates expansive environmental grandeur and premium theatrical presence.',
      fr: 'Le rapport d\'aspect le plus large pour les grandes fresques épiques — crée une grandeur environnementale et une présence théâtrale.',
      es: 'La relación más ancha para epopeyas y superproducciones: crea una grandeza ambiental y una presencia teatral premium.',
      ko: '할리우드 대작과 스펙터클 영화의 표준인 가장 가로가 긴 시네마 비율입니다. 압도적인 세계관 구축과 프리미엄 스크린 장악력을 제공합니다.',
      zh: '用于大型史诗片和商业大片的最宽标准院线宽高比——营造出辽阔宏伟的环境体量与高级的影院临场感。'
    }
  },
  '4:3 Academy Format': {
    name: { ar: '4:3 تلفزيون قديم', en: '4:3 Academy Format', fr: 'Format Académie 4:3', es: 'Formato Academia 4:3', ko: '4:3 아카데미 포맷', zh: '4:3 学院比例' },
    desc: { ar: 'تأطير كلاسيكي مربع تقريباً', en: 'Vintage Academy ratio', fr: 'Rapport d\'aspect vintage Académie', es: 'Relación vintage de la Academia', ko: '빈티지 아카데미 비율', zh: '复古学院屏幕比例' },
    tooltip: {
      ar: 'النسبة الكلاسيكية للسينما القديمة وشاشات التلفزيون القديمة. تمنح المشهد حميمية خاصة وتركيزاً كبيراً على وجوه الشخصيات. شائعة حالياً لإحياء طابع ريترو أو حنين حزين.',
      en: 'The vintage aspect ratio of early Hollywood and classic televisions — creates a sense of nostalgia, intimacy, and focuses attention heavily on characters.',
      fr: 'Le rapport d\'aspect vintage du premier Hollywood et des téléviseurs classiques — crée un sentiment de nostalgie, d\'intimi.',
      es: 'La relación de aspecto clásica del primer Hollywood y los televisores antiguos: crea una sensación de nostalgia, intimidad.',
      ko: '초기 할리우드와 고전 브라운관 TV가 채택하던 화면비입니다. 시선의 분산을 방지하여 인물 얼굴과 디테일에 극도의 친밀감과 깊이를 부여합니다.',
      zh: '早期好莱坞以及老式显像管电视所使用的复古画面宽高比。它能创造出强烈的怀旧心理和亲切感，使观众的注意力牢牢锁在人物脸部。'
    }
  },
  'Vintage Anamorphic': {
    name: { ar: 'عدسات أنامورفيك كلاسيكية', en: 'Vintage Anamorphic', fr: 'Anamorphique vintage', es: 'Anamórfico vintage', ko: '빈티지 아나모픽', zh: '复古变形宽银幕' },
    desc: { ar: 'تشويه بيضاوي عتيق وفلير قوي', en: 'Heavy anamorphic look', fr: 'Rendu anamorphique prononcé', es: 'Aspecto anamórfico pronunciado', ko: '짙은 아나모픽 느낌', zh: '重度变形质感' },
    tooltip: {
      ar: 'محاكاة لعدسات أنامورفيك قديمة من السبعينيات. توهج ضوئي أزرق قوي جداً، تشويه بيضاوي واضح عند الأطراف، وعمق بؤري ضيق وحالم. رائعة لأفلام الخيال العلمي الكلاسيكية.',
      en: 'Emulates vintage 1970s anamorphic glass with strong blue streak flares, heavy oval distortion on edges, and a dreamy fall-off — perfect for retro sci-fi aesthetics.',
      fr: 'Émule les optiques anamorphiques des années 1970 avec de puissants reflets bleus linéaires, une distorsion ovale prononcée sur les bords.',
      es: 'Emula los cristales anamórficos de la década de 1970 con fuertes destellos azules lineales, distorsión ovalada en los bordes.',
      ko: '1970년대 아나모픽 렌즈의 특성을 재현합니다. 가로로 곧게 뻗는 날카로운 블루 플레어, 구석부 타원형 보케 찌그러짐, 몽환적인 감쇄 효과가 담깁니다.',
      zh: '模拟20世纪70年代的复古变形镜头。拥有极具代表性的水平拉伸蓝色耀光、边缘处椭圆散景畸变、以及梦幻般柔和的焦外滚降。'
    }
  },
  'Pristine Cinema Glass': {
    name: { ar: 'زجاج سينمائي نقي', en: 'Pristine Cinema Glass', fr: 'Verre de cinéma immaculé', es: 'Cristal de cine inmaculado', ko: '프리스틴 시네마 글래스', zh: '现代纯净电影镜头' },
    desc: { ar: 'دقة فائقة بدون أي انحراف بصري', en: 'Ultra clean glass', fr: 'Objectif ultra propre', es: 'Lente ultra limpia', ko: '초정밀 울트라 클린 렌즈', zh: '超清晰洁净画面' },
    tooltip: {
      ar: 'عدسات حديثة ممتازة خالية من أي انحراف لوني أو بصري. تمنح الذكاء الاصطناعي أمراً بالتزام أقصى حدة ممكنة ونقاء تام للألوان، ومثالية لمشاريع الإعلانات والمقاطع التجارية الفاخرة.',
      en: 'Pristine modern lenses with zero chromatic aberrations. Directs AI to render with maximum sharpness and ultra-clean colors — ideal for commercial advertising and ultra-modern content.',
      fr: 'Objectifs modernes et impeccables, exempts de toute aberration chromatique. Enjoint l\'IA à générer avec une netteté maximale.',
      es: 'Lentes modernas e impecables sin aberraciones cromáticas. Indica a la IA que renderice con la máxima nitidez.',
      ko: '인위적인 수차나 플레어, 왜곡이 원천 차단된 초고가 현대 렌즈 묘사 방식입니다. 극단적 선명도와 가감 없는 원색 재현을 유도해 상업 광고 촬영에 유리합니다.',
      zh: '没有任何色差 or 光学缺陷的极纯净现代镜片效果。指导AI以最大的锐度和通透的色彩进行渲染，极适合商业广告与充满现代感的内容。'
    }
  }
};

// Let's do the merge
// Find "export const ITEM_TRANSLATIONS: Record<string, {"
const targetStr = "export const ITEM_TRANSLATIONS";
const index = translationsText.indexOf(targetStr);
if (index === -1) {
  console.error("Could not find ITEM_TRANSLATIONS declaration");
  process.exit(1);
}

// Find the equals sign after ITEM_TRANSLATIONS
const equalsIndex = translationsText.indexOf('=', index);
if (equalsIndex === -1) {
  console.error("Could not find '=' of ITEM_TRANSLATIONS");
  process.exit(1);
}

// Find the first open brace '{' after the equals sign
const openBracePos = translationsText.indexOf('{', equalsIndex);
if (openBracePos === -1) {
  console.error("Could not find open brace of ITEM_TRANSLATIONS value");
  process.exit(1);
}

const insertPos = openBracePos + 1;

let stringifiedItems = '';
for (const [key, value] of Object.entries(newTranslations)) {
  const safeKey = key.replace(/'/g, "\\'");
  stringifiedItems += `\n  '${safeKey}': ${JSON.stringify(value, null, 2).replace(/\n/g, '\n  ')},`;
}

const updatedText = translationsText.substring(0, insertPos) + stringifiedItems + translationsText.substring(insertPos);
fs.writeFileSync(translationsPath, updatedText, 'utf-8');

console.log('Successfully merged all translations into src/data/translations.ts!');
