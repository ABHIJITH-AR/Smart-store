export interface WatchProduct {
  id: string;
  name: string;
  price: number;
  rating: number;
  ratingCount: number;
  shortDescription: string;
  overview: string;
  images: string[];
  features: string[];
  specifications: Record<string, string>;
  benefits: string[];
}

export const WATCHES: WatchProduct[] = [
  {
    id: "ravishing-men",
    name: "Ravishing Men Analog Watch",
    price: 229,
    rating: 4.8,
    ratingCount: 164,
    shortDescription: "Ultra-premium design with high-precision analog quartz movement and a comfortable classic strap.",
    overview: "Elegantly constructed, the Ravishing Men Analog Watch is designed for daily sophistication. With its metallic accents and ultra-refined look, this timepiece is suitable for formal and semi-formal wear, giving you a powerful wrist presence.",
    images: [
      "https://lh3.googleusercontent.com/d/1eXwrTrSYVYS-C-g6RiC9y434LjmtGRQZ",
      "https://lh3.googleusercontent.com/d/1xA1C-1s4GYSerZgzCYSUCzPhENk63F5z",
      "https://lh3.googleusercontent.com/d/1gTOqOkoKnS04q7o6kUWvtvBfhwKAOWh3"
    ],
    features: [
      "Premium Stainless Steel Casing",
      "Scratch-Resistant Mineral Dial Glass",
      "Authentic Textured Faux Leather Comfort Strap",
      "Water Resistant Architecture (Splash Proof)",
      "High-Accuracy Japanese Quartz Movement"
    ],
    specifications: {
      "Model Number": "SS-RAV-501",
      "Movement Type": "Battery Powered Quartz",
      "Dial Diameter": "42 mm",
      "Case Thickness": "9.5 mm",
      "Band Width": "20 mm",
      "Clasp Type": "Buckle Classic"
    },
    benefits: [
      "Lightweight casing provides all-day wearable comfort.",
      "Matches effortlessly with suits, casual wear, and wedding attire.",
      "Tough glass maintains high clarity and resists standard day-to-day scrapes.",
      "High-contrast pointers provide immediate, effortless readability."
    ]
  },
  {
    id: "fancy-men",
    name: "Fancy Men Silver Analog Watch",
    price: 239,
    rating: 4.7,
    ratingCount: 128,
    shortDescription: "Sporty yet premium modern dials with gleaming silver styling and dynamic chrono-style look.",
    overview: "Form meets high athletic fashion with the Fancy Men Analog Watch. Tailored for individuals who pursue dynamic styles. Featuring beautifully crafted visual sub-dials and premium hand finishes that shimmer elegantly under natural lighting.",
    images: [
      "https://lh3.googleusercontent.com/d/1SWAHIMw3Y3uhnLo_cSZ6pDcAXLvJ3LQb",
      "https://lh3.googleusercontent.com/d/1XrcXttx5hULroALrBw_lbjhRJXhFnT5Z",
      "https://lh3.googleusercontent.com/d/1Tng0bc8Gl4cLE9eeZZ5pMJBTfiLon1rm"
    ],
    features: [
      "Heavy-Duty Solid Bezel Styling",
      "Bold Chrono-style Tri-Dial Aesthetic",
      "Premium High-Grade Metallic Silver Strap",
      "Shock-Resistant Framework",
      "Luminous Hour and Minute Marks"
    ],
    specifications: {
      "Model Number": "SS-FANCY-808",
      "Movement Type": "Analog Quartz",
      "Dial Diameter": "44 mm",
      "Case Thickness": "11.0 mm",
      "Band Material": "Polished Finished Silver Metal Band",
      "Water Protection": "Meters Splash Resistant"
    },
    benefits: [
      "Highly resilient shock-proof construction for the active lifestyle.",
      "Phosphorescent indices allow visibility in low-light environments.",
      "A bold dial that acts as a strong conversation starter at social events.",
      "Highly detailed hand finishes offer high-definition visibility."
    ]
  },
  {
    id: "ravishing-premium",
    name: "Ravishing Men Analog Watch",
    price: 249,
    rating: 4.9,
    ratingCount: 224,
    shortDescription: "Exclusive elite gold-trimmed bezel edition with rich deep-green accents and a premium aesthetic.",
    overview: "For the absolute finest occasions, the Ravishing Men Analog Watch stands peerless. With high-contrast metallic borders and carefully finished inner rings, this series is extremely limited, representing ultimate prestige and style.",
    images: [
      "https://lh3.googleusercontent.com/d/1B7ZAWkY4WqTHuhizlExVrCKQwUppLrWx"
    ],
    features: [
      "Charming Electroplated Golden Bezel Trim",
      "Intense Depth Dial Display",
      "Ultra-Low Profile Sleek Wrist Fit",
      "Corrosion-Proof Heavy Duty Casing",
      "Stitched Premium Thread Strap Detail"
    ],
    specifications: {
      "Model Number": "SS-LTD-PREM",
      "Movement Type": "Premium Elite Caliber Quartz",
      "Dial Diameter": "43 mm",
      "Case Thickness": "8.8 mm",
      "Band Material": "Elite Stitching Premium Blend",
      "Water Resistance": "Daily Splash Guard"
    },
    benefits: [
      "Ultra-thin profile fits smoothly underneath deep blazer sleeves.",
      "Specially treated scratch-resistant golden layer prevents tarnish and scaling.",
      "Gold and Forest contrast coordinates spectacularly with executive outfits.",
      "Comes with a premium velvet storage bag."
    ]
  },
  {
    id: "daniel-jubilee",
    name: "Daniel Jubilee Watch",
    price: 239,
    rating: 4.8,
    ratingCount: 189,
    shortDescription: "Timeless heritage styling featuring a beautiful steel-link styled strap and signature jubilee aesthetic.",
    overview: "Harkoning back to Swiss heritage excellence, the Daniel Jubilee Watch showcases the legendary fluted style. Its polished design matches beautifully with smart wear, while the flexible feel of the bracelet offers custom convenience and premium craftsmanship.",
    images: [
      "https://lh3.googleusercontent.com/d/1yAAym30EtQ1-OqFNnX911Nh44fmbY1RK",
      "https://lh3.googleusercontent.com/d/1taKX-p_5YusaCyMZYa5JmgvaG7GAMp39",
      "https://lh3.googleusercontent.com/d/1j6qFuqEjM1o5of2hk4YHNpukiC4_qbQz"
    ],
    features: [
      "Iconic Jubilee Fluted Bezel Geometry",
      "Dynamic Interwoven Link Chain Bracelet Accent",
      "Integrated Date-View magnifying window",
      "Double Safety Fold-over Clasp Lock",
      "Precision Hour Tracker Indices"
    ],
    specifications: {
      "Model Number": "SS-JUB-707",
      "Movement Type": "Sweep Precision Quartz",
      "Dial Diameter": "41 mm",
      "Case Thickness": "10.0 mm",
      "Band Material": "High-Grade Electro-Polish Link",
      "Clasp": "Secure Dual-Press Deployant"
    },
    benefits: [
      "Polished metallic structure reflects light beautifully, drawing attention.",
      "The integrated date-magnifier adds high utility for daily scheduling.",
      "Micro-aligned links contour softly around the natural curves of the wrist.",
      "Highly secure double-lock system prevents accidental detachment during swift actions."
    ]
  },
  {
    id: "armada",
    name: "Armada Green Watch",
    price: 239,
    rating: 4.9,
    ratingCount: 145,
    shortDescription: "Elegant tactical forest green design with heavy steel construct and scratch protection sapphire finish.",
    overview: "Built as a tribute to rugged exploration, the Armada Green Watch combines high tactical green geometries with an outstandingly robust case. Clean hour increments and structural guards protect this masterfully proportioned premium time instrument.",
    images: [
      "https://lh3.googleusercontent.com/d/1HiJH38jauNuoaH3ups9efFPSJSNxcQBV",
      "https://lh3.googleusercontent.com/d/1_34aa1S7_ZD1KLVjZmUfmvRsZ4k3jTA5",
      "https://lh3.googleusercontent.com/d/1t_yznfN3lRVGIDn6KGgA4cHCWjAdkbOz",
      "https://lh3.googleusercontent.com/d/103GtXHM2wDFyzTf_-jeR9FB-fa1J8zMZ"
    ],
    features: [
      "Ocean Marine-Inspired Outer Crown Guards",
      "Flawless Sapphire-Finish Scratch Defence Surface",
      "Brushed Metallic Sporty Accent Plates",
      "Heavy Duty Architectural Case",
      "Dynamic Dual Sweep Hands"
    ],
    specifications: {
      "Model Number": "SS-ARM-911",
      "Movement Type": "Direct Drive Power Quartz",
      "Dial Diameter": "43 mm",
      "Case Thickness": "11.5 mm",
      "Band Material": "Heavy Matte Grip Composite",
      "Water Protection": "Robust Daily Splash Proof"
    },
    benefits: [
      "Unmatched resistance to heavy scratches and direct physical impacts.",
      "The crown protection mechanism blocks dust and moisture from entering internal wheels.",
      "Unique circular dial grooves project a modern sea-explorer premium persona.",
      "Highly durable matte strap is completely sweat-resistant and breathable."
    ]
  }
];

export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  avatar: string;
}

export const REVIEWS: Review[] = [
  {
    id: "rev1",
    name: "Arjun Sharma",
    rating: 5,
    date: "May 28, 2026",
    comment: "Excellent build quality. Given the price of ₹229, this is unbelievable value. Highly recommend Smart Store!",
    verified: true,
    avatar: "AS"
  },
  {
    id: "rev2",
    name: "Priya Nair",
    rating: 5,
    date: "June 03, 2026",
    comment: "Ordered the Daniel Jubilee watch as a gift for my brother. He absolutely loved the fluted bezel and steel design. Delivery was quite fast!",
    verified: true,
    avatar: "PN"
  },
  {
    id: "rev3",
    name: "Mohammad Fahad",
    rating: 4,
    date: "June 05, 2026",
    comment: "The Ravishing Premium edition looks so premium. The golden contrast is beautiful. Placing order was so simple via WhatsApp.",
    verified: true,
    avatar: "MF"
  },
  {
    id: "rev4",
    name: "Vikram Rathore",
    rating: 5,
    date: "June 08, 2026",
    comment: "Extremely lightweight and professional. Armada watch looks very robust. Fast delivery with Cash on Delivery option.",
    verified: true,
    avatar: "VR"
  }
];

export interface FAQ {
  question: string;
  answer: string;
}

export const FAQS: FAQ[] = [
  {
    question: "Do you offer Cash on Delivery (COD)?",
    answer: "Yes, we support Cash on Delivery (COD) for all orders across India. You pay only when you receive your watch physically in hand."
  },
  {
    question: "What is your delivery coverage?",
    answer: "We provide nationwide delivery covering over 19,500+ pincodes. Standard delivery timelines range from 3 to 6 business days depending on your location."
  },
  {
    question: "How do I place and confirm my order?",
    answer: "Once you click 'Buy Now' and fill in your delivery details, click 'Place Order'. You will be automatically redirected to WhatsApp where our team will instantly confirm and dispatch your shipment."
  },
  {
    question: "Are the watch batteries included?",
    answer: "Yes, all our wristwatches come equipped with premium functional Japanese Maxell batteries installed, ready to wear immediately out of the box."
  }
];

export const STATES_AND_DISTRICTS: Record<string, string[]> = {
  "Andhra Pradesh": ["Anantapur", "Chittoor", "East Godavari", "Guntur", "Krishna", "Kurnool", "Prakasam", "Srikakulam", "Sri Potti Sriramulu Nellore", "Visakhapatnam", "Vizianagaram", "West Godavari", "YSR Kadapa"],
  "Arunachal Pradesh": ["Anjaw", "Changlang", "Dibang Valley", "East Kameng", "East Siang", "Kurung Kumey", "Lohit", "Longding", "Lower Dibang Valley", "Lower Subansiri", "Namsai", "Papum Pare", "Tawang", "Tirap", "Upper Siang", "Upper Subansiri", "West Kameng", "West Siang"],
  "Assam": ["Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar", "Charaideo", "Chirang", "Darrang", "Dhemaji", "Dhubri", "Dibrugarh", "Dima Hasao", "Goalpara", "Golaghat", "Hailakandi", "Hojai", "Jorhat", "Kamrup", "Kamrup Metropolitan", "Karbi Anglong", "Karimganj", "Kokrajhar", "Lakhimpur", "Majuli", "Morigaon", "Nagaon", "Nalbari", "Sivasagar", "Sonitpur", "South Salmara-Mankachar", "Tinsukia", "Udalguri", "West Karbi Anglong"],
  "Bihar": ["Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", "East Champaran", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur", "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia", "Rohtas", "Saharsa", "Samastipur", "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan", "Supaul", "Vaishali", "West Champaran"],
  "Chhattisgarh": ["Balod", "Baloda Bazar", "Balrampur", "Bastar", "Bemetara", "Bijapur", "Bilaspur", "Dantewada", "Dhamtari", "Durg", "Gariaband", "Janijgir-Champa", "Jashpur", "Kabirdham", "Kanker", "Kondagaon", "Korba", "Koriya", "Mahasamund", "Mungeli", "Narayanpur", "Raigarh", "Raipur", "Rajnandgaon", "Sukma", "Surajpur", "Surguja"],
  "Goa": ["North Goa", "South Goa"],
  "Gujarat": ["Ahmedabad", "Amreli", "Anand", "Aravalli", "Banaskantha", "Bharuch", "Bhavnagar", "Botad", "Chhota Udepur", "Dahod", "Dangs", "Devbhoomi Dwarka", "Gandhinagar", "Gir Somnath", "Jamnagar", "Junagadh", "Kutch", "Kheda", "Mahisagar", "Mehsana", "Morbi", "Narmada", "Navsari", "Panchmahal", "Patan", "Porbandar", "Rajkot", "Sabarkantha", "Surat", "Surendranagar", "Tapi", "Vadodara", "Valsad"],
  "Haryana": ["Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurugram", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Nuh", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"],
  "Himachal Pradesh": ["Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Lahaul and Spiti", "Mandi", "Shimla", "Sirmaur", "Solan", "Una"],
  "Jharkhand": ["Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum", "Garhwa", "Giridih", "Godda", "Gumla", "Hazaribagh", "Jamtara", "Khunti", "Koderma", "Latehar", "Lohardaga", "Pakur", "Palamu", "Ramgarh", "Ranchi", "Sahibganj", "Saraikela Kharsawan", "Simdega", "West Singhbhum"],
  "Karnataka": ["Bagalkot", "Ballari", "Belagavi", "Bengaluru Rural", "Bengaluru Urban", "Bidar", "Chamarajanagar", "Chikkaballapur", "Chikkamagaluru", "Chitradurga", "Dakshina Kannada", "Davanagere", "Dharwad", "Gadag", "Hassan", "Haveri", "Kalaburagi", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysuru", "Raichur", "Ramanagara", "Shivamogga", "Tumakuru", "Udupi", "Uttara Kannada", "Vijayapura", "Yadgir"],
  "Kerala": ["Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Wayand", "Palakkad", "Pathanamthitta", "Thiruvananthapuram", "Thrissur"],
  "Madhya Pradesh": ["Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Hoshangabad", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Mandla", "Mandsaur", "Morena", "Narsinghpur", "Neemuch", "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha"],
  "Maharashtra": ["Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban", "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar", "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal"],
  "Manipur": ["Bishnupur", "Chandel", "Churachandpur", "Imphal East", "Imphal West", "Jiribam", "Kakching", "Kamjong", "Kangpokpi", "Noney", "Pherzawl", "Senapati", "Tamenglong", "Tengnoupal", "Thoubal", "Ukhrul"],
  "Meghalaya": ["East Garo Hills", "East Jaintia Hills", "East Khasi Hills", "North Garo Hills", "Ribhoi", "South Garo Hills", "South West Garo Hills", "South West Khasi Hills", "West Garo Hills", "West Jaintia Hills", "West Khasi Hills"],
  "Mizoram": ["Aizawl", "Champhai", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Saiha", "Serchhip"],
  "Nagaland": ["Dimapur", "Kiphire", "Kohima", "Longleng", "Mokokchung", "Mon", "Peren", "Phek", "Tuensang", "Wokha", "Zunheboto"],
  "Odisha": ["Angul", "Balangir", "Balasore", "Bargarh", "Bhadrak", "Boudh", "Cuttack", "Deogarh", "Dhenkanal", "Gajapati", "Ganjam", "Jagatsinghpur", "Jajpur", "Jharsuguda", "Kalahandi", "Kandhamal", "Kendrapara", "Keonjhar", "Khordha", "Koraput", "Malkangiri", "Mayurbhanj", "Nabarangpur", "Nayagarh", "Nuapada", "Puri", "Rayagada", "Sambalpur", "Subarnapur", "Sundargarh"],
  "Punjab": ["Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Ferozepur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Muktsar", "Pathankot", "Patiala", "Rupnagar", "Sahibzada Ajit Singh Nagar", "Sangrur", "Shahid Bhagat Singh Nagar", "Sri Muktsar Sahib", "Tarn Taran"],
  "Rajasthan": ["Ajmer", "Alwar", "Banswara", "Baran", "Barmer", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittorgarh", "Churu", "Dausa", "Dholpur", "Dungarpur", "Hanumangarh", "Jaipur", "Jaisalmer", "Jalore", "Jhalawar", "Jhunjhunu", "Jodhpur", "Karauli", "Kota", "Nagaur", "Pali", "Pratapgarh", "Rajsamand", "Sawai Madhopur", "Sikar", "Sirohi", "Sri Ganganagar", "Tonk", "Udaipur"],
  "Sikkim": ["East Sikkim", "North Sikkim", "South Sikkim", "West Sikkim"],
  "Tamil Nadu": ["Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kallakurichi", "Kanchipuram", "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Mayiladuthurai", "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram", "Ranipet", "Salem", "Sivaganga", "Tenkasi", "Thanjavur", "Theni", "Thiruvallur", "Thiruvarur", "Thoothukudi", "Tiruchirappalli", "Tirunelveli", "Tirupathur", "Tiruppur", "Tervannamalai", "Vellore", "Viluppuram", "Virudhunagar"],
  "Telangana": ["Adilabad", "Bhadradri Kothagudem", "Hyderabad", "Jagtial", "Jangaon", "Jayashankar Bhupalpally", "Jogulamba Gadwal", "Kamareddy", "Karimnagar", "Khammam", "Kumuram Bheem", "Mahabubabad", "Mahabubnagar", "Mancherial", "Medak", "Medchal-Malkajgiri", "Mulugu", "Nagarkurnool", "Nalgonda", "Narayanpet", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna Sircilla", "Rangareddy", "Sangareddy", "Siddipet", "Suryapet", "Vikarabad", "Wanaparthy", "Warangal Rural", "Warangal Urban", "Yadadri Bhuvanagiri"],
  "Tripura": ["Dhalai", "Gomati", "Khowai", "North Tripura", "Sepahijala", "South Tripura", "Unakoti", "West Tripura"],
  "Uttar Pradesh": ["Agra", "Aligarh", "Allahabad", "Ambedkar Nagar", "Amethi", "Amroha", "Auraiya", "Azamgarh", "Baghpat", "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", "Basti", "Bhadohi", "Bijnor", "Budaun", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah", "Faizabad", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Kasganj", "Kaushambi", "Kheri", "Kushinagar", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "RaeBareli", "Rampur", "Saharanpur", "Sambhal", "Sant Kabir Nagar", "Shahjahanpur", "Shamli", "Shravasti", "Siddharthnagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"],
  "Uttarakhand": ["Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar", "Nainital", "Pauri Garhwal", "Pithoragarh", "Rudraprayag", "Tehri Garhwal", "Udham Singh Nagar", "Uttarkashi"],
  "West Bengal": ["Alipurduar", "Bankura", "Birbhum", "Cooch Behar", "Dakshin Dinajpur", "Darjeeling", "Hooghly", "Howrah", "Jalpaiguri", "Jhargram", "Kalimpong", "Malda", "Murshidabad", "Nadia", "North 24 Parganas", "Paschim Medinipur", "Paschim Bardhaman", "Purba Bardhaman", "Purba Medinipur", "Purulia", "South 24 Parganas", "Uttar Dinajpur"],
  "Delhi": ["Central Delhi", "East Delhi", "New Delhi", "North Delhi", "North East Delhi", "North West Delhi", "Shahdara", "South Delhi", "South East Delhi", "South West Delhi", "West Delhi"]
};
