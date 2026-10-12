// ─────────────────────────────────────────────────────────────
// Jinwoo SMC Brand Info & Category Data
// Categories:
// 1. Telescopic High-Reach AWPs (JINWOO 280, 320, 450, 500, 600, 750 — 28m to 75m)
// 2. Insulated Live-Line Bucket Trucks (JINWOO 150I, 200I, 270I — 15m to 27m, 50kV-500kV AC)
// 3. Telescopic Moving Ladder Trucks (JINWOO 380L, 450L, 640L — 38m to 64m material lifts)
// 4. Articulated Knuckle Boom AWPs (JINWOO 180K, 220K — 18m to 22m urban access)
// ─────────────────────────────────────────────────────────────

export const jinwooBrandInfo = {
  name: 'Jinwoo SMC',
  title: 'Jinwoo SMC Aerial Work Platforms & Special Vehicles',
  slogan: 'World-Class Korean High-Reach Access & Insulated Utility Vehicles',
  tagline: "India's Premier Range of Korean Truck-Mounted AWPs, Insulated Bucket Trucks & Moving Ladder Lifts",
  overview:
    "Jinwoo SMC (Special Machinery Company) is a globally recognized Korean pioneer in the design and manufacture of high-reach truck-mounted Aerial Work Platforms (AWP), high-voltage insulated live-line bucket trucks, and high-rise telescopic moving ladder lifts. Ranging from 15m compact insulated units up to 75m super high-reach platforms, Jinwoo SMC combines ultra-high-tensile DOMEX/ATOS steel structural booms, automatic moment limiters (AML), and proportioned hydraulic controls.",
  aboutText:
    "Distributed across India by EES, Jinwoo SMC equipment is widely deployed by state electricity boards, power transmission utilities, municipal corporations, telecommunication service providers, high-rise construction firms, and equipment rental companies. EES handles complete subframe integration onto Indian commercial vehicle chassis (Tata, Eicher, Ashok Leyland, BharatBenz, MAN), pre-delivery inspection, operator safety certification, OEM spare parts, and Annual Maintenance Contracts (AMC).",

  // EES support pillars
  eeiplSupport: [
    {
      title: 'PAN India Authorised Sales & Distribution',
      description:
        'EES is the authorised partner for Jinwoo SMC in India, providing direct access to factory-certified aerial platforms, insulated utility trucks, and technical support.',
    },
    {
      title: 'Chassis Integration & Subframe Engineering',
      description:
        'In-house engineering team installs Jinwoo superstructures onto customer-supplied or EES-sourced commercial vehicle chassis (Tata, Eicher, Ashok Leyland, MAN, BharatBenz).',
    },
    {
      title: 'Full PDI & EN280 / IEC Insulation Testing',
      description:
        'Comprehensive Pre-Delivery Inspection including 150% stability load testing, CANBus safety interlock calibration, and high-voltage dielectric insulation testing for live-line models.',
    },
    {
      title: 'Operator Safety & Certification Training',
      description:
        'Structured training program covering automatic moment limiters (AML), outrigger leveling, wireless remote operation, emergency descent protocols, and live-line safety rules.',
    },
    {
      title: 'OEM Genuine Spare Parts Inventory',
      description:
        'EES maintains a dedicated inventory of Jinwoo OEM proportional valves, hydraulic cylinders, wireless remote transmitters, boom wear pads, and FRP bucket liners.',
    },
    {
      title: 'Annual Maintenance Contracts (AMC) & Field Service',
      description:
        'Preventive maintenance programs, annual structural inspection, hydraulic fluid testing, and 24/7 field breakdown response across major states and cities.',
    },
  ],

  // Technology differentiators
  techBenefits: [
    {
      icon: '🧠',
      title: 'Automatic Moment Limiter (AML)',
      description:
        'Computerized safety system continuously monitors boom length, angle, basket load weight, and outrigger ground pressure — automatically restricting movement before unsafe limits are reached.',
    },
    {
      icon: '🔩',
      title: 'Imported High-Tensile Steel Booms',
      description:
        'Booms are fabricated from pre-aged DOMEX and ATOS ultra-high-strength steel with hexagonal/octagonal profiles, providing maximum rigidity and minimal deflection at extreme heights.',
    },
    {
      icon: '⚡',
      title: '50kV – 500kV Dielectric FRP Insulation',
      description:
        'Insulated series features high-dielectric Fiber-Reinforced Plastic (FRP) upper booms and bucket liners, certified for live high-voltage power line maintenance without power shutoff.',
    },
    {
      icon: '🕹️',
      title: 'Proportional Danfoss Hydraulic Controls',
      description:
        'Proportional electro-hydraulic valves combined with multi-functional wireless remote controls ensure smooth, millimeter-precise basket positioning.',
    },
    {
      icon: '📐',
      title: 'X-Type & H-Type Outrigger Auto-Leveling',
      description:
        'Hydraulic outriggers with ground pressure sensors provide an ultra-wide stability footprint, compensating for sloped or uneven ground up to 7° automatically.',
    },
    {
      icon: '🚨',
      title: 'Multi-Tiered Emergency Lowering System',
      description:
        'Includes DC emergency hydraulic pump, manual hand pump, basket emergency stop buttons, and mechanical boom lowering valves for total operational safety.',
    },
  ],

  // Key stats
  keyStats: [
    { value: '15m–75m', label: 'Working Height Range' },
    { value: '500kV', label: 'Max Live-Line Insulation' },
    { value: '400Kg', label: 'Max Basket Load' },
    { value: '360°', label: 'Continuous Rotation' },
  ],

  // Industries served
  industries: [
    { icon: '⚡', name: 'Power Distribution & Utilities' },
    { icon: '💡', name: 'Municipal Street & Highway Lighting' },
    { icon: '📡', name: 'Telecommunication & 5G Infrastructure' },
    { icon: '🏢', name: 'High-Rise Construction & Facades' },
    { icon: '📦', name: 'High-Rise Moving & Furniture Lifting' },
    { icon: '🏭', name: 'Heavy Industrial Facilities' },
    { icon: '🌳', name: 'Tree Trimming & Arboriculture' },
    { icon: '✈️', name: 'Airports & Transit Maintenance' },
  ],

  // Performance features
  jinwooFeatures: [
    {
      title: 'Hexagonal Boom Geometry',
      desc: 'Optimized 6-sided boom profile distributes stress evenly and prevents structural twist during long horizontal outreach.',
    },
    {
      title: 'Wireless Radio Remote Control',
      desc: 'Ergonomic wireless transmitter allows full boom operation from ground or platform with real-time status LCD feedback.',
    },
    {
      title: 'Dual Control Stations',
      desc: 'Base turntable control panel and platform basket console both feature proportional joysticks and emergency kill switches.',
    },
    {
      title: 'Automatic Outrigger Interlock',
      desc: 'Boom operation is electronically locked until all 4 outriggers are fully deployed and ground pressure is verified.',
    },
    {
      title: 'FRP High-Dielectric Bucket',
      desc: 'Heavy-duty fiberglass basket with removable polyethylene liner for live-line electrical insulation safety.',
    },
    {
      title: '150% Overload Stability Certified',
      desc: 'Every unit is factory static and dynamic load tested to 150% of rated safe working load before deployment.',
    },
  ],

  // FAQs
  faqs: [
    {
      question: 'What is the working height range of Jinwoo SMC Aerial Work Platforms?',
      answer:
        'Jinwoo SMC offers one of the widest AWP height ranges in the world, starting from 15m compact utility bucket trucks up to 75m super high-reach platforms (JINWOO 280, 320, 450, 500, 600, 750 series). In addition, Jinwoo manufactures insulated bucket trucks (15m–27m) and moving ladder lifts (38m–64m).',
    },
    {
      question: 'What makes Jinwoo Insulated Bucket Trucks suitable for live-line utility work?',
      answer:
        'Jinwoo Insulated Series (JINWOO 150I, 200I, 270I) feature high-dielectric Fiber-Reinforced Plastic (FRP) upper boom sections, insulated hydraulic oil lines, and FRP buckets tested and certified for live-line electrical maintenance from 50kV up to 500kV AC without interrupting power supply.',
    },
    {
      question: 'Can Jinwoo superstructures be mounted on Indian commercial vehicle chassis?',
      answer:
        'Yes. EES custom engineers and mounts Jinwoo SMC superstructures onto all leading Indian commercial vehicle chassis, including Tata (407, 709, 1618, 2518), Eicher Pro series, Ashok Leyland (Partner, Ecomet, Captain), BharatBenz, and MAN heavy trucks based on GVW requirements.',
    },
    {
      question: 'What is the Automatic Moment Limiter (AML) system?',
      answer:
        'The AML is Jinwoo’s advanced onboard computer safety system. It constantly calculates boom length, elevation angle, turret rotation, and basket weight. If the basket approaches the maximum safe working envelope, the AML emits visual/audible warnings and automatically stops further outreach movements.',
    },
    {
      question: 'What after-sales service and spare parts support does EES provide for Jinwoo equipment?',
      answer:
        'EES is the authorised partner providing end-to-end service across India, including chassis subframe mounting, EN280/dielectric testing, hands-on operator certification, OEM spare parts stock (cylinders, valves, remotes, bucket liners), and Annual Maintenance Contracts (AMC).',
    },
  ],
};

// ─────────────────────────────────────────────────────────────
// Jinwoo Model Categories (4 Sub-Product Pages)
// ─────────────────────────────────────────────────────────────

export const jinwooCategories = [
  // ── 1. TELESCOPIC HIGH-REACH AWPS ─────────────────────────────
  {
    id: 'telescopic-awps',
    name: 'Telescopic High-Reach AWPs',
    accentTag: '28m to 75m Working Height · 300-400Kg Load',
    heroTitle: 'Telescopic High-Reach Aerial Platforms',
    heroSubtitle:
      'From 28 meters up to 75 meters working height. Jinwoo SMC JINWOO 280, 320, 450, 500, 600, and 750 series deliver maximum elevation, wide horizontal outreach, and rock-solid stability.',
    description:
      'Jinwoo SMC Telescopic High-Reach AWPs are the ultimate solution for demanding municipal, industrial, and high-rise access tasks. Built with imported DOMEX/ATOS high-tensile steel booms, automatic moment limiters (AML), dual control stations, and 400 Kg basket load capacity, these truck-mounted platforms provide exceptional up-and-over access.',
    image: '/jinwoo_awp.png',
    applications: [
      'High-Rise Building Facade Maintenance',
      'Municipal Street & Highway Infrastructure',
      'Industrial Plant & Refinery Overhead Work',
      'Wind Turbine & Power Plant Inspection',
      'Telecommunication & 5G Antenna Mounting',
      'Bridge & Overhead Transit Servicing',
    ],

    overviewPoints: [
      '28m, 32m, 45m, 50m, 60m, and 75m working height models (JINWOO 280 to 750)',
      'Up to 400 Kg basket safe working load (3–4 operators with heavy equipment)',
      'Imported DOMEX & ATOS ultra-high-tensile steel hexagonal boom profiles',
      'Automatic Moment Limiter (AML) with real-time digital load/angle display',
      'Hydraulic X-type & H-type outriggers with auto-leveling ground sensors',
      'Wireless radio remote control plus base station proportional controls',
      'Mountable on 3.5T to 25T+ GVW commercial truck chassis',
    ],

    keyHighlights: [
      {
        icon: '🗼',
        title: 'Super High Reach (Up to 75m)',
        description: 'JINWOO 750 reaches an impressive 75m working height — one of the highest truck-mounted platforms available in India.',
      },
      {
        icon: '📦',
        title: '400 Kg High-Capacity Basket',
        description: 'Large steel/aluminum working basket holds up to 400 Kg, accommodating multiple technicians and heavy maintenance tools.',
      },
      {
        icon: '🧠',
        title: 'AML Computer Safety System',
        description: 'Prevents tipping or structural overload by continuously tracking outreach, angle, and weight parameters in real time.',
      },
      {
        icon: '🕹️',
        title: 'Danfoss Proportional Control',
        description: 'Delivers smooth, micro-meter precise boom extension, rotation, and elevation with zero basket jerk.',
      },
    ],

    // Technical specifications across the lineup
    specs: [
      { label: 'Lineup Models', value: 'JINWOO 280 / 320 / 450 / 500 / 600 / 750' },
      { label: 'Working Height Range', value: '28.0 m / 32.0 m / 45.0 m / 50.0 m / 60.0 m / 75.0 m' },
      { label: 'Max Horizontal Outreach', value: '16.0 m to 28.0 m (model dependent)' },
      { label: 'Basket Safe Working Load', value: '300 Kg (J280/J750) / 400 Kg (J320/J450/J500/J600)' },
      { label: 'Basket Dimensions (L x W x H)', value: '3,000 x 1,100 x 1,100 mm (extendable)' },
      { label: 'Turret Rotation Angle', value: '360° Continuous Hydraulic Rotation' },
      { label: 'Basket Rotation Angle', value: '± 180° Hydraulic Slew' },
      { label: 'Boom Structure Material', value: 'Imported DOMEX / ATOS Ultra High-Tensile Steel' },
      { label: 'Safety System Standard', value: 'Automatic Moment Limiter (AML), Overload Sensor' },
      { label: 'Outrigger Type & Deployment', value: 'Hydraulic X-Type (Front) + H-Type (Rear) Auto-Level' },
      { label: 'Control System', value: 'Danfoss Proportional Valve + Wireless Remote' },
      { label: 'Minimum Required Truck GVW', value: '3.5T (J280) / 11T (J320) / 16T (J450) / 25T+ (J750)' },
    ],

    loadChartData: [
      { radius: 'JINWOO 280 (28m Class)', capacity: '300 Kg @ 16.0m Outreach', note: 'Compact 3.5T+ GVW chassis' },
      { radius: 'JINWOO 320 (32m Class)', capacity: '400 Kg @ 18.0m Outreach', note: 'Popular municipal & industrial model' },
      { radius: 'JINWOO 450 (45m Class)', capacity: '400 Kg @ 24.0m Outreach', note: 'Heavy duty high-rise maintenance' },
      { radius: 'JINWOO 500/600 (50-60m Class)', capacity: '400 Kg @ 26.0m Outreach', note: 'Extra high-reach infrastructure' },
      { radius: 'JINWOO 750 (75m Class)', capacity: '300 Kg @ 28.0m Outreach', note: 'Super high-reach class (25T+ GVW)' },
    ],

    features: [
      {
        title: 'Extendable Wide Platform Basket',
        description:
          'Working basket extends hydraulically up to 3.0 meters wide, giving workers a spacious platform to handle large glass panels, pipes, and signages.',
      },
      {
        title: 'Auto-Telescoping Hexagonal Booms',
        description:
          'Multi-stage synchronized telescopic extension provides rapid height deployment with minimal structural deflection under load.',
      },
      {
        title: 'Wireless Radio Remote Control',
        description:
          'Allows the operator to control all boom movements, basket rotation, engine start/stop, and speed modulation from up to 100m away.',
      },
      {
        title: 'Emergency DC Backup Pump',
        description:
          'Dedicated battery-powered auxiliary pump guarantees basket retraction and lowering even during total truck engine or PTO failure.',
      },
    ],

    attachments: [
      { name: 'Hydraulic Winch Attachment', desc: 'Basket-mounted 500 Kg hoist winch for lifting materials independently' },
      { name: 'Inverter Power Generator', desc: 'Onboard 220V AC generator supplying power directly to basket sockets' },
      { name: 'High-Pressure Water/Air Hose Reel', desc: 'Integrated hose reel for facade washing and pneumatic power tools' },
      { name: 'Anemometer Wind Speed Sensor', desc: 'Digital wind speed monitor with visual/audible alarms at 12 m/s' },
      { name: 'Safety Harness Anchor Points', desc: 'Certified fall-arrest lanyard attachment points inside basket' },
      { name: 'Enclosed Operator Control Cab', desc: 'Ground-level enclosed cabin for operator comfort in extreme weather' },
    ],

    standardEquipment: [
      'Automatic Moment Limiter (AML) System',
      'Imported DOMEX/ATOS High-Tensile Steel Boom',
      'Wireless Proportional Radio Remote Control',
      '360° Continuous Turret & ±180° Basket Rotation',
      'Hydraulic Auto-Leveling X/H Outriggers',
      'Emergency DC Auxiliary Lowering Pump',
      'Anemometer & Overload Weight Sensors',
      'LED Working Lights, Amber Strobe & Reverse Camera',
    ],

    optionalEquipment: [
      'Basket-Mounted Hydraulic Material Winch',
      'Onboard 220V AC Power Generator',
      'High-Pressure Water/Air Lines to Basket',
      'FRP Insulated Basket Liner',
      'Cold Weather Hydraulic Fluid Package',
      'Custom Chassis Subframe & Toolboxes',
    ],
  },

  // ── 2. INSULATED LIVE-LINE BUCKET TRUCKS ──────────────────────
  {
    id: 'insulated-bucket-trucks',
    name: 'Insulated Live-Line Bucket Trucks',
    accentTag: '15m to 27m · 50kV to 500kV AC Live-Line',
    heroTitle: 'High-Voltage Insulated Utility Bucket Trucks',
    heroSubtitle:
      'Live-line electrical maintenance without power shutdown. Jinwoo SMC Insulated Series (JINWOO 150I, 200I, 270I) feature certified high-dielectric FRP upper booms and buckets rated up to 500kV AC.',
    description:
      'Engineered specifically for state electricity transmission and distribution boards, Jinwoo SMC Insulated Live-Line Bucket Trucks allow technicians to perform hot-line maintenance, insulator replacement, and transformer repairs on energized high-voltage power lines up to 500kV AC safely without interrupting power grid supply.',
    image: '/jinwoo_awp.png',
    applications: [
      'High-Voltage Power Grid Transmission Lines',
      'Substation & Transformer Live-Line Servicing',
      'Electrical Distribution & HT/LT Pole Repair',
      'Railway Overhead Catenary Maintenance',
      'Disaster Power Recovery & Emergency Grid Repair',
      'Industrial Substation High-Voltage Maintenance',
    ],

    overviewPoints: [
      '15m, 20m, and 27m working height models (JINWOO 150I, 200I, 270I)',
      'Dielectric insulation category ANSI A92.2 & IEC standards compliant',
      'FRP (Fiber-Reinforced Plastic) insulated upper boom section and bucket',
      'Certified for live-line electrical maintenance from 50kV up to 500kV AC',
      'Insulated hydraulic oil lines and internal fiber-optic control linkage',
      'Dual bucket option (200 Kg – 250 Kg capacity) with 360° turret rotation',
      'Mountable on 5T to 16T GVW commercial truck chassis',
    ],

    keyHighlights: [
      {
        icon: '⚡',
        title: 'Up to 500kV AC Live-Line Certified',
        description: 'High-dielectric FRP upper boom prevents electrical arc-through during hot line maintenance on live high-voltage grids.',
      },
      {
        icon: '🛡️',
        title: 'FRP High-Dielectric Bucket',
        description: 'Reinforced fiberglass platform bucket with inner polyethylene liner provides multi-layer operator shock isolation.',
      },
      {
        icon: '🧪',
        title: 'Fiber-Optic Hydraulic Controls',
        description: 'Control signals travel through non-conductive fiber-optic lines, isolating ground controls from high-voltage potential.',
      },
      {
        icon: '🔒',
        title: 'ANSI A92.2 & IEC Compliance',
        description: 'Fully certified and factory dielectric withstand-tested according to strict international power utility safety standards.',
      },
    ],

    specs: [
      { label: 'Lineup Models', value: 'JINWOO 150I / JINWOO 200I / JINWOO 270I' },
      { label: 'Working Height Options', value: '15.0 m / 20.0 m / 27.0 m' },
      { label: 'Dielectric Voltage Rating', value: 'Certified 50kV to 500kV AC Category A/B' },
      { label: 'Insulated Section', value: 'FRP (Fiber-Reinforced Plastic) Upper Boom & Jib' },
      { label: 'Max Horizontal Outreach', value: '9.5 m / 12.5 m / 16.0 m' },
      { label: 'Bucket Capacity', value: '200 Kg (1-2 Technicians with tools)' },
      { label: 'Bucket Material', value: 'FRP Fiberglass + Polyethylene Removable Inner Liner' },
      { label: 'Turret Rotation', value: '360° Continuous Hydraulic Rotation' },
      { label: 'Control Linkage', value: 'Non-Conductive Fiber-Optic Hydraulic Control Valves' },
      { label: 'Outriggers', value: 'Hydraulic A-Type / H-Type with Insulated Footpads' },
      { label: 'Safety Systems', value: 'Dielectric Monitoring, Leakage Current Alarm, Emergency Lower' },
      { label: 'Required Truck GVW', value: '5,000 Kg (J150I) / 11,000 Kg (J200I) / 16,000 Kg (J270I)' },
    ],

    loadChartData: [
      { radius: 'JINWOO 150I (15m Insulated)', capacity: '200 Kg @ 9.5m Outreach', note: '50kV–138kV LT/HT distribution lines' },
      { radius: 'JINWOO 200I (20m Insulated)', capacity: '200 Kg @ 12.5m Outreach', note: '220kV transmission & substation work' },
      { radius: 'JINWOO 270I (27m Insulated)', capacity: '250 Kg @ 16.0m Outreach', note: '400kV–500kV extra high-voltage grid lines' },
    ],

    features: [
      {
        title: 'Non-Conductive Fiber-Optic Linkage',
        description:
          'Replaces metallic control cables with fiber-optic signals to eliminate electrical flashover paths between bucket and chassis.',
      },
      {
        title: 'Continuous Leakage Current Monitor',
        description:
          'Sensors monitor micro-amp leakage current along the FRP boom, sounding an immediate audible alarm if moisture or contamination breaks insulation.',
      },
      {
        title: 'Insulated Jib & Material Handler',
        description:
          'Optional hydraulic jib arm on bucket allows technicians to lift live conductors and insulators up to 250 Kg during replacement.',
      },
      {
        title: 'Weather-Proof FRP Bucket Covers',
        description:
          'Includes hydrophobic protective bucket covers to prevent water ingress and maintain dielectric rating during rainy emergencies.',
      },
    ],

    attachments: [
      { name: 'Insulated Hydraulic Conductor Jib', desc: '500 Kg rated insulated jib for holding live conductor wires' },
      { name: 'Removable Polyethylene Liner', desc: 'Heavy-wall inner bucket liner for 50kV dielectric isolation' },
      { name: 'Hot-Line Tool Holders', desc: 'Specialized mounting brackets inside bucket for hot sticks and ground cables' },
      { name: 'Hydraulic Power Tool Ports', desc: 'Non-conductive quick-connect ports for hydraulic impact wrenches and cutters' },
      { name: 'Insulation Leakage Tester', desc: 'Digital portable high-voltage insulation breakdown test kit' },
      { name: 'Spotlight & Strobe Kit', desc: 'High-intensity LED searchlights for night-shift storm damage repair' },
    ],

    standardEquipment: [
      'Certified FRP Insulated Upper Boom Section',
      'FRP Bucket with Polyethylene Safety Liner',
      'Fiber-Optic Non-Conductive Proportional Controls',
      '360° Continuous Turret Rotation',
      'Hydraulic Outriggers with Ground Interlocks',
      'Emergency Auxiliary Manual Lowering System',
      'Leakage Current Monitoring & Alarm System',
      'Dielectric Withstand Test Certificate (ANSI A92.2)',
    ],

    optionalEquipment: [
      'Insulated Conductor Lifting Jib Arm',
      'Hydraulic Tool Outlets at Bucket',
      'Hot-Stick Tool Storage Rack',
      'Dual Bucket Configuration (2 x 100 Kg)',
      'Chassis Grounding Cable & Reel',
      'High-Intensity LED Searchlight Kit',
    ],
  },

  // ── 3. TELESCOPIC MOVING LADDER TRUCKS ────────────────────────
  {
    id: 'ladder-moving-trucks',
    name: 'Telescopic Moving Ladder Trucks',
    accentTag: '38m to 64m · High-Rise Material Lift',
    heroTitle: 'Telescopic High-Rise Moving Ladder Lifts',
    heroSubtitle:
      'High-speed vertical material & furniture elevation up to 64 meters (20+ floors). Jinwoo SMC JINWOO 380L, 450L, and 640L ladder trucks revolutionize high-rise logistics.',
    description:
      'Designed for high-rise residential building moving, furniture delivery, solar panel installation, and construction material hoisting, Jinwoo SMC Telescopic Moving Ladder Trucks reach heights from 38m up to 64m. Featuring high-speed wire rope winch systems, tilting material platforms, automatic ladder leveling, and remote speed control.',
    image: '/jinwoo_awp.png',
    applications: [
      'High-Rise Building Logistics & Moving',
      'Furniture & Appliance Elevation (up to 20th floor)',
      'Rooftop Solar Panel & HVAC Equipment Hoisting',
      'Construction Material Supply (Glass, Tiles, Drywall)',
      'Building Renovation & Scaffolding Replacement',
      'Event & Exhibition High-Level Equipment Lift',
    ],

    overviewPoints: [
      '38m, 45m, and 64m ladder reach models (JINWOO 380L, 450L, 640L)',
      'Up to 400 Kg material carriage lifting capacity',
      'Ultra-high-speed wire winch system (up to 60 m/min carriage speed)',
      'Specialized aluminum alloy telescopic ladder rail construction',
      'Automatic ladder tilting, extension, and auto-leveling outriggers',
      'Wireless remote control for carriage lift, tilt, and emergency stop',
      'Mountable on 3.5T to 16T GVW commercial truck chassis',
    ],

    keyHighlights: [
      {
        icon: '🏬',
        title: 'Reach Up to 20+ Floors (64m)',
        description: 'JINWOO 640L extends to 64 meters, allowing direct balcony and window delivery up to 20 floors high without elevator access.',
      },
      {
        icon: '⚡',
        title: '60 m/min High-Speed Winch',
        description: 'Rapid carriage winch speed reduces material hoisting cycle time to under 60 seconds per trip.',
      },
      {
        icon: '📦',
        title: '400 Kg Tilting Material Carriage',
        description: 'Large foldable aluminum carriage platform tilts automatically to match balcony thresholds for effortless unloading.',
      },
      {
        icon: '🛡️',
        title: 'Wire Rope Safety Brake',
        description: 'Automatic mechanical safety brake locks carriage instantly if wire rope slack or tension loss is detected.',
      },
    ],

    specs: [
      { label: 'Lineup Models', value: 'JINWOO 380L / JINWOO 450L / JINWOO 640L' },
      { label: 'Maximum Height Reach', value: '38.0 m (12 floors) / 45.0 m (15 floors) / 64.0 m (20+ floors)' },
      { label: 'Carriage Load Capacity', value: '400 Kg (High Capacity Material Carriage)' },
      { label: 'Hoisting Winch Speed', value: 'Variable High-Speed up to 60 m/min' },
      { label: 'Ladder Section Profile', value: 'High-Strength Extruded Aluminium Alloy Rail' },
      { label: 'Ladder Elevation Angle', value: '30° to 85° Hydraulic Tilting' },
      { label: 'Turret Rotation', value: '360° Hydraulic Rotation' },
      { label: 'Safety Devices', value: 'Wire Rope Fall Arrest, Limit Switches, AML Overload Sensor' },
      { label: 'Outriggers', value: 'Hydraulic H-Type Wide Span Auto-Leveling' },
      { label: 'Control System', value: 'Wireless Remote Control + Base Control Panel' },
      { label: 'Required Truck GVW', value: '3.5T (J380L) / 8T (J450L) / 16T (J640L)' },
    ],

    loadChartData: [
      { radius: 'JINWOO 380L (38m Class)', capacity: '400 Kg @ 38.0m (12th Floor)', note: 'Light commercial 3.5T chassis' },
      { radius: 'JINWOO 450L (45m Class)', capacity: '400 Kg @ 45.0m (15th Floor)', note: 'Mid-size 8T truck chassis' },
      { radius: 'JINWOO 640L (64m Class)', capacity: '400 Kg @ 64.0m (20+ Floor)', note: 'Super high-rise 16T heavy chassis' },
    ],

    features: [
      {
        title: 'Foldable Balcony-Entry Platform',
        description:
          'Carriage platform features drop-down side gates and automatic tilting, allowing workers inside balconies to pull items straight off the carriage.',
      },
      {
        title: 'Telescopic Aluminium Alloy Rail',
        description:
          'Lightweight high-strength extruded aluminium ladder sections deliver smooth extension while keeping vehicle transport weight low.',
      },
      {
        title: 'Wireless Carriage Speed Remote',
        description:
          'Operator standing at the top balcony controls carriage movement smoothly with wireless handheld remote.',
      },
      {
        title: 'Automatic Slow-Down at Limits',
        description:
          'Proportional sensors slow down carriage automatically when approaching top balcony position or ground level to prevent impact shock.',
      },
    ],

    attachments: [
      { name: 'Solar Panel Carrier Rack', desc: 'Specialized padded cradle for hoisting fragile photovoltaic solar panels safely' },
      { name: 'Furniture & Glass Clamp', desc: 'Pneumatic clamp securing bulky sofas, mattresses, and glass panes during ascent' },
      { name: 'Top Balcony Roller Ramp', desc: 'Extendable roller track bridging ladder tip into apartment balcony flooring' },
      { name: 'Wireless Video Camera System', desc: 'Top ladder tip camera broadcasting live view to operator ground screen' },
      { name: 'Ground Loader Ramp', desc: 'Low-profile loading ramp for quick pallet jack loading onto carriage' },
      { name: 'Heavy-Duty Tarpaulin Cover', desc: 'Protective weather cover for carriage goods during rain transport' },
    ],

    standardEquipment: [
      'High-Strength Extruded Aluminium Ladder Rail',
      'High-Speed Winch with Mechanical Fall Arrest Brake',
      'Foldable 400 Kg Tilting Material Platform',
      'Wireless Remote Control Transmitter',
      'Hydraulic Auto-Leveling H-Type Outriggers',
      'Automatic Top & Bottom End Limit Switches',
      'Emergency Stop System at Ground & Top Ramp',
      'LED Working Lights & Strobe Flasher',
    ],

    optionalEquipment: [
      'Solar Panel & Glass Hoisting Rack',
      'Top Balcony Extension Roller Ramp',
      'Top Ladder Tip Wireless Video Camera',
      'Ground Loading Pallet Ramp',
      'Carriage Weather Tarpaulin Hood',
      'Custom Truck Side Boxes & Racks',
    ],
  },

  // ── 4. ARTICULATED KNUCKLE BOOM AWPS ──────────────────────────
  {
    id: 'knuckle-boom-awps',
    name: 'Articulated Knuckle Boom AWPs',
    accentTag: '18m to 22m · Up & Over Urban Reach',
    heroTitle: 'Articulated Knuckle Boom Work Platforms',
    heroSubtitle:
      'Compact footprint, zero tail-swing, and superior up-and-over clearance. Jinwoo SMC JINWOO 180K and 220K knuckle boom platforms excel in narrow city streets and congested industrial plants.',
    description:
      'For urban maintenance and industrial plants where obstacles block direct vertical access, Jinwoo SMC Articulated Knuckle Boom AWPs provide unparalleled maneuverability. Combining dual articulated knuckle arms with a telescopic top boom, these compact truck-mounted lifts navigate over walls, pipes, and roofs with ease.',
    image: '/jinwoo_awp.png',
    applications: [
      'Urban Narrow Street Maintenance',
      'Historical City Overhead Repairs',
      'Industrial Plant Pipe Rack Over-Reach',
      'Shopping Mall & Atrium Exterior Work',
      'Bridge Underside & Parapet Servicing',
      'Tree Branch Trimming Near Buildings',
    ],

    overviewPoints: [
      '18m and 22m working height models (JINWOO 180K, JINWOO 220K)',
      '200 Kg to 250 Kg basket safe working load',
      'Dual articulated pantograph knuckle joints + 1 telescopic boom extension',
      'Zero tail-swing design allowing operation in single traffic lane width',
      'Hydraulic 360° turret rotation with ±90° basket rotation',
      'Compact 3.5T to 7.5T GVW truck chassis compatibility',
      'Base and basket electro-hydraulic proportional joystick controls',
    ],

    keyHighlights: [
      {
        icon: '🔄',
        title: 'Up & Over Knuckle Clearance',
        description: 'Articulated knuckle geometry reaches over 8-meter high walls and pipe racks to place workers directly over work sites.',
      },
      {
        icon: '🚗',
        title: 'Single Lane Urban Footprint',
        description: 'Zero turret tail-swing stays strictly within vehicle width, avoiding traffic disruption on narrow city roads.',
      },
      {
        icon: '📐',
        title: 'Compact 3.5T Chassis Mounting',
        description: 'JINWOO 180K mounts on lightweight 3.5-ton GVW commercial trucks for easy city driving with standard license.',
      },
      {
        icon: '🛡️',
        title: 'Full Hydraulic Safety Interlocks',
        description: 'Equipped with outrigger ground pressure interlocks, cylinder check valves, emergency hand pump, and overload alarm.',
      },
    ],

    specs: [
      { label: 'Lineup Models', value: 'JINWOO 180K / JINWOO 220K' },
      { label: 'Working Height Options', value: '18.0 m / 22.0 m' },
      { label: 'Max Horizontal Outreach', value: '9.5 m / 11.5 m' },
      { label: 'Up & Over Clearance Height', value: '7.5 m / 9.0 m' },
      { label: 'Basket Safe Working Load', value: '200 Kg (J180K) / 250 Kg (J220K)' },
      { label: 'Basket Dimensions', value: '1,400 x 700 x 1,100 mm' },
      { label: 'Turret Rotation', value: '360° Continuous Hydraulic Rotation' },
      { label: 'Basket Rotation', value: '± 90° Hydraulic Slew' },
      { label: 'Boom Configuration', value: 'Dual Articulated Knuckle + Telescopic Top Section' },
      { label: 'Outriggers', value: 'Hydraulic A-Type / H-Type Compact Outriggers' },
      { label: 'Control System', value: 'Proportional Electro-Hydraulic (Basket & Ground)' },
      { label: 'Required Truck GVW', value: '3,500 Kg (J180K) / 7,500 Kg (J220K)' },
    ],

    loadChartData: [
      { radius: 'JINWOO 180K (18m Knuckle)', capacity: '200 Kg @ 9.5m Outreach', note: 'Compact 3.5T city chassis' },
      { radius: 'JINWOO 220K (22m Knuckle)', capacity: '250 Kg @ 11.5m Outreach', note: 'Heavy duty 7.5T truck chassis' },
    ],

    features: [
      {
        title: 'Zero Tail-Swing Turret',
        description:
          'When rotating the superstructure, no part of the counterweight extends past the truck outrigger width, preventing collision with passing vehicles.',
      },
      {
        title: 'Proportional Joystick Precision',
        description:
          'Proportional joystick controllers allow smooth multi-axis movement (knuckle, extension, rotation) simultaneously.',
      },
      {
        title: 'Integrated Basket Tool Trays',
        description:
          'Heavy-duty aluminum working basket features built-in tool trays, safety harness anchor points, and 230V power outlet.',
      },
      {
        title: 'Automatic Outrigger Leveling',
        description:
          'Compact H-type outriggers level automatically on uneven street pavements and roadside curbs up to 5° gradient.',
      },
    ],

    attachments: [
      { name: 'Insulated FRP Basket Shell', desc: 'Fiberglass basket shell providing 1,000V electrical shock isolation' },
      { name: 'High-Pressure Hose to Basket', desc: 'Internal boom hose line for water washing and chemical spraying' },
      { name: 'LED Basket Floodlights', desc: 'Dual 50W LED spotlights mounted on basket frame for night work' },
      { name: 'Ultrasonic Anti-Collision Sensors', desc: 'Sensors under basket floor preventing impact with tree limbs or buildings' },
      { name: 'Air Compressor Hose Line', desc: 'Pneumatic line for operating air-driven tools directly from basket' },
      { name: 'Custom Toolboxes & Racks', desc: 'Under-chassis lockable aluminum storage toolboxes' },
    ],

    standardEquipment: [
      'Dual Articulated Knuckle + Telescopic Boom Assembly',
      'Proportional Joystick Electro-Hydraulic Controls',
      '360° Turret & ±90° Basket Hydraulic Rotation',
      'Hydraulic Auto-Leveling Compact Outriggers',
      'Emergency DC Auxiliary Lowering Pump',
      'Cylinder Safety Check Valves & Overload Alarm',
      '230V Power Socket Inside Basket',
      'LED Work Lights & Amber Strobe Flasher',
    ],

    optionalEquipment: [
      'Insulated FRP Basket (1,000V Protection)',
      'High-Pressure Water/Air Lines to Basket',
      'Ultrasonic Basket Anti-Collision Sensors',
      'Basket Floodlight & Searchlight Package',
      'DC to AC Power Inverter (2,000W)',
      'Custom Chassis Bodywork & Toolboxes',
    ],
  },
];
