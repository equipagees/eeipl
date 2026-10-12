export const products = [
  {
    id: "skymech-truck-loader-cranes",
    name: "Skymech Truck Loader Cranes",
    brand: "SKYMECH",
    slogan: "Versatile & High-Performance Self-Loading Solutions",
    region: "North & West India",
    category: "Lifting Solutions",
    overview: "Transform your commercial truck into a self-loading, multi-purpose powerhouse. Skymech Truck Loader Cranes offer exceptional lifting capacities, stiff and knuckle boom configurations, and seamless integration onto standard commercial chassis. Designed to maximize your truck's utility without compromising payload space, these cranes are engineered with high-grade steel and precision hydraulics.",
    features: [
      {
        title: "High-Tensile Steel Boom",
        description: "Manufactured using high-strength structural steel with a hexagonal profile. This ensures maximum lifting capacity while keeping the crane's deadweight to a minimum."
      },
      {
        title: "Optimal Chassis Integration",
        description: "Compact installation footprint directly behind the truck cabin. This preserves the maximum possible deck length for transporting goods and materials."
      },
      {
        title: "Wide Hydraulic Outriggers",
        description: "Heavy-duty hydraulic outriggers provide a wide and stable base, neutralizing chassis suspension movement and ensuring safe lifting on uneven terrain."
      },
      {
        title: "Dual Control Stations",
        description: "Equipped with manual control levers on both sides of the truck, ensuring the operator always has a clear, unobstructed view of the load being handled."
      }
    ],
    specs: [
      { label: "Crane Category", value: "Medium Duty Loader Crane" },
      { label: "Maximum Lifting Capacity", value: "8,000 Kg (at minimum radius)" },
      { label: "Maximum Working Radius", value: "Approx. 12.5 m (depending on extensions)" },
      { label: "Turret Rotation", value: "360° Continuous Rotation" },
      { label: "Operating Pressure", value: "High Pressure Hydraulic System (load holding valves standard)" },
      { label: "Boom Structure", value: "High Tensile Hexagonal Steel Profile" },
      { label: "Control System", value: "Dual Side Manual Levers (Remote control optional)" },
      { label: "Safety Features", value: "Overload Protection, Cylinder Lock Valves, Emergency Stop" },
      { label: "Stabilizer (Outriggers)", value: "Hydraulic Extension and Retraction (Front & Rear support)" },
      { label: "Recommended Chassis", value: "Suitable for Tata, Eicher, Ashok Leyland HCVs" }
    ],
    lineup: [
      {
        model: "3 - 5 Ton Series",
        capacity: "3,000 - 5,000 Kg",
        boom: "Stiff / Knuckle",
        chassis: "LCV / MCV",
        application: "Logistics & General Cargo"
      },
      {
        model: "8 - 10 Ton Series",
        capacity: "8,000 - 10,000 Kg",
        boom: "Stiff / Knuckle",
        chassis: "HCV (6-Wheeler+)",
        application: "Construction & Utilities"
      },
      {
        model: "12 - 16 Ton Series",
        capacity: "12,000 - 16,000 Kg",
        boom: "Stiff / Knuckle",
        chassis: "Multi-Axle Heavy Trucks",
        application: "Heavy Machinery & Infrastructure"
      }
    ],
    image: "/skymech_crane.png"
  },
  {
    id: "jinwoo-smc-aerial-elevating-work-platform",
    name: "Jinwoo SMC Aerial Platforms",
    brand: "JINWOO SMC",
    slogan: "Premium Korean High-Reach Aerial Access",
    region: "PAN India",
    category: "Aerial Platforms",
    overview: "Experience unparalleled reach, uncompromising safety, and robust stability with Jinwoo SMC Truck-Mounted Aerial Work Platforms. Purpose-built for heavy-duty industrial, municipal, and construction environments where maximum elevation is critical. Jinwoo SMC integrates world-class hydraulic systems, ultra-high-strength steel structures, and computerized safety protocols.",
    features: [
      {
        title: "Automatic Moment Limiter",
        description: "The integrated AML system continuously monitors boom length, angle, and basket load, preventing the equipment from entering unsafe operational thresholds."
      },
      {
        title: "X-Type & H-Type Outriggers",
        description: "Hydraulically deploying outriggers provide an exceptionally wide and stable footprint, essential for maintaining balance during maximum lateral outreach."
      },
      {
        title: "High-Tensile Steel Boom",
        description: "Constructed from imported high-strength structural steel, the hexagonal/octagonal boom profile minimizes deflection and enhances lifting capabilities."
      },
      {
        title: "Wireless Remote Control",
        description: "Operators are equipped with a highly responsive, multi-functional wireless remote, allowing precise boom positioning from the basket or the ground."
      }
    ],
    specs: [
      { label: "Model", value: "JINWOO 450" },
      { label: "Maximum Working Height", value: "45.0 m" },
      { label: "Maximum Horizontal Reach", value: "24.0 m" },
      { label: "Turret Rotation", value: "360° Continuous" },
      { label: "Basket Safe Working Load", value: "400 Kg" },
      { label: "Boom Structure", value: "6-Section High Tensile Hexagonal Telescopic Boom" },
      { label: "Control System", value: "Danfoss Proportional Valve + Wireless Remote" },
      { label: "Safety System", value: "AML (Automatic Moment Limiter), Overload Sensor" },
      { label: "Stabilizer (Outriggers)", value: "X-Type (Front) + H-Type (Rear) Hydraulic Deployment" },
      { label: "Recommended Chassis GVW", value: "16,000 Kg (Compatible with multi-axle heavy chassis)" }
    ],
    lineup: [
      {
        model: "JINWOO 320",
        height: "32.0 m",
        capacity: "400 Kg",
        stabilizers: "X-Type (Front & Rear)",
        chassis: "11 Tons GVW"
      },
      {
        model: "JINWOO 450",
        height: "45.0 m",
        capacity: "400 Kg",
        stabilizers: "X-Type (F) / H-Type (R)",
        chassis: "16 Tons GVW"
      },
      {
        model: "JINWOO 750",
        height: "75.0 m",
        capacity: "300 Kg",
        stabilizers: "X-Type (Wide Span)",
        chassis: "25+ Tons GVW"
      }
    ],
    image: "/jinwoo_awp.png"
  },
  {
    id: "hydramak-truck-mounted-boom-lift-hm24a",
    name: "Hydramak Truck Mounted Boom Lifts",
    brand: "HYDRAMAK",
    slogan: "Precision Overhead Access & Articulated Versatility",
    region: "PAN India",
    category: "Aerial Platforms",
    overview: "Reach new heights with the versatile and robust Hydramak HM 24 A. Featuring a hybrid articulated and telescopic boom design, it provides exceptional up-and-over reach for street lighting, municipal maintenance, and elevated access operations in demanding urban and industrial environments.",
    features: [
      {
        title: "Hybrid Boom Design",
        description: "Combines 2 articulated booms with 1 telescopic boom (featuring 1 extension) to provide unmatched maneuverability and up-and-over horizontal reach."
      },
      {
        title: "Proportional Controls",
        description: "Hydraulic proportional control system accessible from both the operator basket and the ground base station, ensuring smooth, jerk-free movements."
      },
      {
        title: "'A' Type Stabilizers",
        description: "Equipped with hydraulic 'A' Type outriggers at both the front and rear of the chassis, providing a wide, secure footprint on uneven or sloped terrain."
      },
      {
        title: "Emergency Safety",
        description: "Standard safety features include lock valves on all hydraulic cylinders, an emergency manual hand pump, and remote engine start/stop controls directly from the basket."
      }
    ],
    specs: [
      { label: "Model", value: "HM 24 A" },
      { label: "Platform Working Height", value: "24.0 m" },
      { label: "Platform Maximum Height", value: "22.0 m" },
      { label: "Horizontal Reach (Max)", value: "11.5 m" },
      { label: "Turret Rotation Angle", value: "360° Continuous" },
      { label: "Basket Maximum Load", value: "200 Kg" },
      { label: "Basket Dimensions", value: "1300 x 700 x 1100 mm" },
      { label: "Control System", value: "Hydraulic Proportional (At Basket & Base)" },
      { label: "Stabilizer Outriggers", value: "Hydraulic 'A' Type (Front & Rear)" },
      { label: "Required GVW", value: "7,500 Kg (Compatible TATA, EICHER, ASHOK LEYLAND)" }
    ],
    lineup: [
      {
        section: "The Boom System",
        height: "24.0 m Working Height",
        floor: "22.0 m Floor Height",
        rotation: "360° Continuous",
        type: "Articulated + Telescopic"
      },
      {
        section: "The Basket",
        capacity: "200 Kg SWL",
        dimensions: "1300 x 700 x 1100 mm",
        controls: "Proportional Hydraulic",
        engine: "Start/Stop Integrated"
      },
      {
        section: "Chassis Integration",
        gvw: "7,500 Kg Required",
        brands: "Tata, Eicher, Ashok Leyland",
        outriggers: "Hydraulic 'A' Type (F&R)",
        power: "Truck Engine PTO"
      }
    ],
    image: "/hydramak_lift.png"
  },
  {
    id: "doosan-bobcat-in-india",
    name: "Doosan Bobcat Forklifts",
    brand: "DOOSAN BOBCAT",
    slogan: "Powerful Performance & Uncompromising Reliability",
    region: "North India",
    category: "Material Handling",
    overview: "Building upon Bobcat's century-long tradition of delivering reliable, powerful machinery, the new 9-Series and 7-Series forklifts offer the best value-to-performance ratio in the industry. Ready for the toughest yards and tightest aisles, Bobcat focuses on operator safety and ergonomic comfort to maximize shift productivity.",
    features: [
      {
        title: "Guardian Stability System (GSS)",
        description: "Automatically decreases travel speed, limits tilt speed, and restricts operations during sharp turns or if the operator is not seated securely, ensuring total jobsite stability."
      },
      {
        title: "Operator Sensing System (OSS)",
        description: "Standard across the lineup. If the operator leaves the seat, the OSS disables forward/reverse travel and load handling, preventing accidental movement."
      },
      {
        title: "Superb Ergonomics",
        description: "Featuring seat-side hydraulic levers, high-comfort full suspension seats, telescopic steering columns, and a full-color LCD display for fatigue-free operation."
      },
      {
        title: "Exceptional Visibility",
        description: "Engineered with an optimized mast design, recessed tilt cylinders, a lowered dashboard, and a redesigned bar-type overhead guard to provide a clear line of sight."
      }
    ],
    specs: [
      { label: "Brakes System", value: "Oil Cooled Disc Brakes / EPB on Heavy Series" },
      { label: "Stability System", value: "Guardian Stability System (GSS)" },
      { label: "Safety standard", value: "Operator Sensing System (OSS) compliant" },
      { label: "Engine Options", value: "2.4L / 3.4L Bobcat Diesel Engine" },
      { label: "Operator Comfort", value: "Suspension Seat, Ergonomic Joysticks, LCD Display" },
      { label: "Drive Motor (Electric)", value: "AC Drive & Pump Motor Tech" },
      { label: "Mast Design", value: "Clear View Mast with Recessed Tilt Cylinders" }
    ],
    lineup: [
      {
        model: "Diesel Pneumatic Series",
        capacity: "4,000 - 12,000 LB",
        engine: "2.4L / 3.4L Diesel",
        application: "Yard & Heavy Duty Lifting"
      },
      {
        model: "Heavy Diesel Series",
        capacity: "13,500 - 20,000 LB",
        engine: "High Power Bobcat Engine",
        application: "Lumber Yards, Ports & Heavy Industrial"
      },
      {
        model: "Electric Cushion & Reach",
        capacity: "3,500 - 6,500 LB",
        power: "AC Motor Drive & Pump",
        application: "Warehousing, Narrow Aisles & Logistics"
      }
    ],
    image: "/bob_hero.png"
  },
  {
    id: "byd-mhe",
    name: "BYD MHE Lithium Forklifts",
    brand: "BYD MHE",
    slogan: "Zero Emissions. Fast Charging. The Next Evolution.",
    region: "North India",
    category: "Material Handling",
    overview: "Powered by Lithium Iron Phosphate (LiFePO4) technology, BYD forklifts offer unmatched efficiency, safety, and an industry-leading 8-year battery warranty. BYD's Iron-Phosphate battery is the core of our forklift revolution, offering the safest chemistry, high thermal stability, and an incredible lifecycle of up to 10,000 charges.",
    features: [
      {
        title: "8-Year Warranty",
        description: "The industry's most robust battery warranty, ensuring long-term peace of mind and maximum equipment uptime."
      },
      {
        title: "Restriction-Free Opportunity Charging",
        description: "Allows operators to plug in during breaks without damaging battery health. Full charge in 1.5 - 2.0 hours."
      },
      {
        title: "Zero Maintenance",
        description: "No gassing during charge and zero maintenance required. Eliminates the need for battery rooms, secondary batteries, and dangerous acid handling."
      },
      {
        title: "Vertical Integration",
        description: "BYD manufactures the battery, the motors, and the controllers. Total integration for ultimate performance and reliability."
      }
    ],
    specs: [
      { label: "Battery Chemistry", value: "Lithium Iron Phosphate (LiFePO4)" },
      { label: "Battery Lifetime", value: "Up to 10,000 Charging Cycles" },
      { label: "Full Charge Time", value: "1.0 - 2.0 Hours" },
      { label: "Warranty", value: "8 Years or 10,000 Hours Battery Warranty" },
      { label: "Zero Emission", value: "Fully Electric, Safe for Food and Pharmaceutical storage" },
      { label: "Charging Type", value: "Opportunity Charging (Plug-in anytime)" },
      { label: "System Integration", value: "In-House BYD Battery, Controller & Drive Motors" }
    ],
    lineup: [
      {
        model: "ECB 16 Forklift",
        capacity: "1,600 Kg lift capacity",
        height: "6,000 mm max lift height",
        engine: "AC Technology Drive Motor"
      },
      {
        model: "T 50 Electric Tractor",
        capacity: "5,000 Kg towing capacity",
        battery: "LiFePO4 80V Battery pack",
        radius: "2,050 mm turning radius"
      },
      {
        model: "P 20 Pallet Truck",
        capacity: "2,000 Kg load capacity",
        charge: "1.0 Hr charge time",
        uptime: "10+ Hours operational time"
      }
    ],
    image: "/byd_hero.png"
  },
  {
    id: "franna-pick-carry-cranes",
    name: "Franna Pick & Carry Cranes",
    brand: "TEREX / FRANNA",
    slogan: "Articulated Mobil Cranes. Zero Setup Time.",
    region: "North India",
    category: "Lifting Solutions",
    overview: "Live up to the name with strength and ease of operation. Franna pick and carry cranes pick up heavy loads with steering flexibility in tight spaces — no outriggers required. For over 40 years, Franna has been the market leader in the design and manufacture of high-quality pick and carry cranes.",
    features: [
      {
        title: "Safety at the Heart",
        description: "Innovation focused on operator safety and jobsite security. Dynamic LMI (Load Moment Indicator) systems ensure the crane operates within safe parameters even while moving."
      },
      {
        title: "Extreme Flexibility & Mobility",
        description: "The articulated frame design provides extreme maneuverability in tight industrial spaces, where traditional cranes simply cannot fit or setup."
      },
      {
        title: "Zero Setup Time",
        description: "Since Franna cranes require no outriggers, they can start working the moment they arrive at the site, saving significant time and labor costs."
      },
      {
        title: "Exceptional Support",
        description: "Backed by EES's expertise in North India, ensuring high-quality parts, service maintenance, and technical training for your operators."
      }
    ],
    specs: [
      { label: "Crane Type", value: "Articulated Mobile Pick & Carry Crane" },
      { label: "Outriggers", value: "None Required (Zero Setup Time)" },
      { label: "Steering", value: "Articulated Frame with High Maneuverability" },
      { label: "Load Indicator", value: "Dynamic LMI (Load Moment Indicator) Standard" },
      { label: "Support Network", value: "Equipage Sales, Spares and Technical Training in North India" },
      { label: "All-Terrain Capability", value: "Robust Chassis built for Rough Road Conditions" }
    ],
    lineup: [
      {
        model: "AT22-2 Series",
        capacity: "22 Ton class capacity",
        boom: "4-Section telescopic boom",
        features: "Ideal for general lifting and site work"
      },
      {
        model: "MAC25-5 Series",
        capacity: "25 Ton lifting capacity",
        boom: "Articulated pick & carry",
        features: "Unmatched performance in ports & industrial setups"
      },
      {
        model: "AT40-2 Series",
        capacity: "40 Ton max capacity",
        boom: "Heavy duty mobile boom",
        features: "Largest pick & carry crane in the lineup"
      }
    ],
    image: "/terex_franna_hero.png"
  },
  {
    id: "beltas-turntable-ladders",
    name: "Beltas Hydraulic Turntable Ladders",
    brand: "BELTAS",
    slogan: "The Pinnacle of Aerial Rescue & Fire Fighting Technology",
    region: "PAN India",
    category: "Fire & Rescue",
    overview: "The BELTAS series represents the pinnacle of aerial rescue technology. High-strength steel construction combined with advanced proportional hydraulics ensures rapid deployment and stable operation at extreme heights. Designed to balance lightweight materials with structural rigidity.",
    features: [
      {
        title: "Precision Ladder Levelling",
        description: "The automatic levelling system compensates for slopes up to 7°, ensuring the ladder remains vertically aligned even on uneven urban terrain. Reacts in real-time to load shifts during rescue."
      },
      {
        title: "High-Strength Steel Booms",
        description: "Constructed from laser-welded high-tensile steel, the ladder sections provide exceptional strength-to-weight ratios, allowing for greater outreach and higher payloads."
      },
      {
        title: "Proportional Controls",
        description: "The electro-hydraulic control system allows for smooth, jerk-free movements. Operators can control extension, elevation, and rotation simultaneously with pinpoint accuracy using ergonomic joysticks."
      },
      {
        title: "Advanced Safety Monitoring",
        description: "Equipped with ultrasonic collision sensors on the cage and wind speed indicators. The system automatically restricts outreach based on real-time wind and load data."
      }
    ],
    specs: [
      { label: "Product Class", value: "Hydraulic Turntable Ladder" },
      { label: "Maximum Working Height", value: "Up to 64.0 m" },
      { label: "Ladder Structure", value: "Laser-Welded High-Tensile Steel" },
      { label: "Outrigger Levelling", value: "Automatic compensation for slopes up to 7°" },
      { label: "Controls", value: "Electro-Hydraulic Proportional Joystick controls" },
      { label: "Safety sensors", value: "Wind Speed indicator, Cage ultrasonic collision sensors" },
      { label: "Cage Payload", value: "200 Kg to 400 Kg cage carrying capacity" }
    ],
    lineup: [
      {
        model: "BELTAS L18",
        height: "18 m Max Height",
        outreach: "14 m Outreach",
        capacity: "200 Kg Cage Load",
        chassis: "10T+ GVW"
      },
      {
        model: "BELTAS L32",
        height: "32 m Max Height",
        outreach: "18 m Outreach",
        capacity: "300 Kg Cage Load",
        chassis: "16T+ GVW"
      },
      {
        model: "BELTAS L42",
        height: "42 m Max Height",
        outreach: "20 m Outreach",
        capacity: "400 Kg Cage Load",
        chassis: "19T+ GVW"
      },
      {
        model: "BELTAS L56",
        height: "56 m Max Height",
        outreach: "22 m Outreach",
        capacity: "400 Kg Cage Load",
        chassis: "26T+ GVW"
      },
      {
        model: "BELTAS L64",
        height: "64 m Max Height",
        outreach: "24 m Outreach",
        capacity: "400 Kg Cage Load",
        chassis: "31T+ GVW"
      }
    ],
    image: "/beltas_ladder.png"
  },
  {
    id: "liftmak-fire-fighting-hydraulic-platforms",
    name: "Liftmak Fire Fighting Platforms",
    brand: "LIFTMAK",
    slogan: "Extreme Performance Under Pressure. Tested up to 750 Kg.",
    region: "PAN India",
    category: "Fire & Rescue",
    overview: "When seconds matter, rely on the precision, power, and safety of LIFTMAK Hydraulic Platforms — purpose-built for firefighting and rescue operations worldwide. Engineered to perform in the most demanding conditions, from raging fires to complex rescue operations at extreme heights.",
    features: [
      {
        title: "Robust Cage Capacity",
        description: "The LIFTMAK cage can safely carry up to 500 Kg and has been tested to withstand up to 750 Kg at minimum engine power of 200 HP — even during full 360° rotation. Cage stability is uncompromised."
      },
      {
        title: "Smart CANBus-Enabled Controls",
        description: "Redundant sensor system feeds into the CANBus outreach management system, keeping all movements within safe, pre-programmed operational limits. Proportional joysticks offer smooth multi-axis control."
      },
      {
        title: "Corrosion-Resistant Steel Booms",
        description: "Constructed from high-strength pre-aged Strenx/Domex steel. Provides exceptional strength-to-weight ratios. Features internal/external anti-corrosion treatments."
      },
      {
        title: "Wind & Obstacle Sensing",
        description: "Equipped with Electronic Jaw restrictions and cage-mounted ultrasonic collision sensors that detect nearby structures and automatically halt movement within a 1-metre range."
      }
    ],
    specs: [
      { label: "Product Class", value: "Fire Fighting Hydraulic Platform" },
      { label: "Working Height Range", value: "12 m to 70 m" },
      { label: "Safe Basket Load", value: "500 Kg (Tested to 750 Kg)" },
      { label: "Control System", value: "CANBus Redundant Safety System + Proportional Joystick" },
      { label: "Water Monitor Capacity", value: "800 LPM (Jet/Fog, optional radio control)" },
      { label: "Stabilizers", value: "4 H-type outriggers, auto-levelling on slopes up to 7°" },
      { label: "Boom Steel", value: "Strenx/Domex High-Strength Pre-Aged Steel" },
      { label: "Emergency Redundancy", value: "Computer Override, dedicated backup engine, telescopic rescue ladder" }
    ],
    lineup: [
      {
        model: "FF12SHD",
        height: "12 m Working Height",
        capacity: "500 Kg Cage Load",
        monitor: "800 LPM",
        feature: "Compact urban deployment"
      },
      {
        model: "FF32SHD",
        height: "32 m Working Height",
        capacity: "500 Kg Cage Load",
        monitor: "800 LPM",
        feature: "High-rise structures"
      },
      {
        model: "FF52SHD (Popular)",
        height: "52 m Working Height",
        capacity: "500 Kg Cage Load",
        monitor: "800 LPM",
        feature: "Industrial complexes"
      },
      {
        model: "FF70SHD",
        height: "70 m Working Height",
        capacity: "500 Kg Cage Load",
        monitor: "800 LPM",
        feature: "Skyscrapers & refineries"
      }
    ],
    image: "/liftmak-hero.png"
  }
];

export const brands = [
  {
    id: "liftmak",
    name: "Liftmak",
    brandCode: "LIFTMAK",
    slogan: "Extreme Performance Under Pressure",
    description: "Aerial Ladder Platforms for Fire & Rescue",
    longDescription: "Liftmak represents the peak of fire engineering reliability, delivering world-class aerial ladder platforms tested to withstand extreme municipal and industrial rescue operations.",
    image: "/liftmak-hero.png"
  },
  {
    id: "beltas",
    name: "Beltas",
    brandCode: "BELTAS",
    slogan: "High-Elevation Fire Fighting Solutions",
    description: "Turntable Ladders from 18m to 64m",
    longDescription: "Beltas specialized turntable ladders provide rapid high-reach deployment for urban fire fighting, built for precision stability and reliable emergency responses.",
    image: "/beltas_ladder.png"
  },
  {
    id: "terex-franna",
    name: "Terex / Franna",
    brandCode: "TEREX / FRANNA",
    slogan: "Unrivalled Power & Mobilised Versatility",
    description: "Pick & Carry Cranes 17T – 30T",
    longDescription: "Terex Franna is the industry benchmark for pick and carry crane solutions, offering exceptional performance, high-speed roadability, and smooth load placement.",
    image: "/terex_franna_hero.png"
  },
  {
    id: "byd-mhe",
    name: "BYD MHE",
    brandCode: "BYD MHE",
    slogan: "Future-Proof Zero-Emission Logistics",
    description: "Lithium Iron Phosphate Powered Forklifts",
    longDescription: "BYD Material Handling Equipment leads the green revolution with advanced Lithium Iron Phosphate (LiFePO4) battery forklifts, reach trucks, and pallet jacks.",
    image: "/byd_hero.png"
  },
  {
    id: "doosan-bobcat",
    name: "Doosan Bobcat",
    brandCode: "DOOSAN BOBCAT",
    slogan: "Rugged Reliability for Tough Industrial Yards",
    description: "Diesel & Electric Forklifts (2T – 15T)",
    longDescription: "Bobcat forklifts are built with heavy-duty structural frames, ergonomic controls, and energy-efficient engines to maximize daily load staging throughput.",
    image: "/bob_hero.png"
  },
  {
    id: "hydramak",
    name: "Hydramak",
    brandCode: "HYDRAMAK",
    slogan: "Articulated Overhead Work Access",
    description: "Truck Mounted AWPs from 24m to 30m",
    longDescription: "Hydramak articulated and telescopic boom platforms offer highly versatile overhead access for street lighting, municipal maintenance, and facilities staging.",
    image: "/hydramak_lift.png"
  },
  {
    id: "jinwoo-smc",
    name: "Jinwoo SMC",
    brandCode: "JINWOO SMC",
    slogan: "Premium High-Reach Telescopic Platforms",
    description: "Truck Mounted AWPs from 30m to 80m",
    longDescription: "Jinwoo SMC truck-mounted high-reach work platforms integrate robust stability controls, imported structural steel booms, and safe lateral reach limits.",
    image: "/jinwoo_awp.png"
  },
  {
    id: "skymech",
    name: "Skymech",
    brandCode: "SKYMECH",
    slogan: "Versatile Truck-Mounted Loader Cranes",
    description: "Stiff & Knuckle Boom Loader Cranes",
    longDescription: "Skymech Truck Loader Cranes offer self-loading utility for logistics, cargo handling, and utilities, preserving deck space and payload capacity.",
    image: "/skymech_crane.png"
  }
];
