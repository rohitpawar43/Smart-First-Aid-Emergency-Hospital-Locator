import { EmergencyGuide } from '../types';

export const emergencyGuides: EmergencyGuide[] = [
  {
    id: 'heart-attack',
    english: {
      title: 'Heart Attack ❤️⚠️',
      steps: [
        'Call emergency services immediately (911)',
        'Help the person sit down and keep calm',
        'Loosen any tight clothing',
        'If the person takes heart medication like nitroglycerin, help them take it',
        'Begin CPR if the person becomes unconscious'
      ],
    },
    hindi: {
      title: 'दिल का दौरा ❤️⚠️',
      steps: [
        'तत्काल आपातकालीन सेवाओं को कॉल करें (911)',
        'व्यक्ति को बैठने में मदद करें और शांत रखें',
        'किसी भी तंग कपड़े को ढीला करें',
        'अगर व्यक्ति दिल की दवा जैसे नाइट्रोग्लिसरीन लेता है, तो उसे लेने में मदद करें',
        'अगर व्यक्ति बेहोश हो जाता है तो सीपीआर शुरू करें'
      ],
    },
    marathi: {
      title: 'हृदयविकार ❤️⚠️',
      steps: [
        'तत्काळ आपत्कालीन सेवांना कॉल करा (911)',
        'व्यक्तीला बसवून शांत ठेवा',
        'कुठलेही घट्ट कपडे शिथिल करा',
        'जर व्यक्ती हृदयाच्या औषधांचा वापर करत असेल, तर त्याला घेण्यास मदत करा',
        'व्यक्ती जागी नसेल तर सीपीआर सुरू करा'
      ],
    },
    warning: 'Time is critical in case of a heart attack. Every minute counts.'
  },
  {
    id: 'burns',
    english: {
      title: 'Burns 🔥⚕️',
      steps: [
        'Remove the source of the burn',
        'Cool the burn under cool (not cold) running water for at least 10 minutes',
        'Remove any jewelry or tight items',
        'Cover with a sterile gauze bandage',
        'Do not apply ice, butter, or ointments'
      ],
    },
    hindi: {
      title: 'जलने की चोटें 🔥⚕️',
      steps: [
        'जलन के स्रोत को हटा दें',
        'जलन को ठंडे (बर्फ़ नहीं) बहते पानी से कम से कम 10 मिनट तक ठंडा करें',
        'कोई गहनों या तंग वस्त्रों को हटा दें',
        'सैनिटरी गॉज बैंडेज से ढक दें',
        'बर्फ, मक्खन या मलहम न लगाएं'
      ],
    },
    marathi: {
      title: 'जळण्याची जखमा 🔥⚕️',
      steps: [
        'जळनाच्या स्रोताला काढा',
        'जळनाला थंड (पण बर्फ नाही) पाण्याखाली 10 मिनिटे तरी थंड करा',
        'कधीही दागिने किंवा घट्ट वस्त्र काढा',
        'सैनिटरी गॉज बँडेजने झाका',
        'बर्फ, लोणी किंवा मलम लागू नका'
      ],
    },
  },
  {
    id: 'fractures',
    english: {
      title: 'Fractures 🦴🩹',
      steps: [
        'Keep the injured area still and supported',
        'Apply ice wrapped in a cloth to reduce swelling',
        'Do not attempt to straighten the bone',
        'Seek immediate medical attention',
        "If there's bleeding, apply pressure with a clean cloth"
      ],
    },
    hindi: {
      title: 'हड्डी टूटना 🦴🩹',
      steps: [
        'चोटिल हिस्से को स्थिर रखें और सहारा दें',
        'सूजन कम करने के लिए कपड़े में लपेटकर बर्फ लगाएं',
        'हड्डी को सीधा करने का प्रयास न करें',
        'तत्काल चिकित्सा सहायता प्राप्त करें',
        'अगर खून बह रहा हो, तो एक स्वच्छ कपड़े से दबाव डालें'
      ],
    },
    marathi: {
      title: 'हाडांचा फ्रॅक्चर 🦴🩹',
      steps: [
        'चोट झालेल्या भागाला स्थिर ठेवा आणि आधार द्या',
        'सूजन कमी करण्यासाठी कपड्यात बर्फ बांधून लावा',
        'हाड सरळ करण्याचा प्रयत्न करू नका',
        'तत्काळ वैद्यकीय मदत घ्या',
        'जर रक्तस्त्राव होत असेल तर स्वच्छ कपड्याने दबाव द्या'
      ],
    },
  },
  {
    id: 'eye',
    english: {
      title: 'Eye 👁️',
      steps: [
        'Flush with Water – If chemicals or debris enter the eye, rinse with clean water for at least 15 minutes.',
        'Protect your eyes from sunlight; cover injuries with a loose, sterile shield without pressure.',
        'Do Not Rub – Rubbing can worsen injuries or push foreign objects deeper',
        'Seek Immediate Medical Help – If there’s vision loss, severe pain, or bleeding',
        'Use a Cold Compress – Apply gently around the eye (not directly) for trauma or swelling'
      ],
    },
    hindi: {
      title: 'आंख 👁️',
      steps: [
        'पानी से धोएं – अगर रसायन या मलबा आंख में चला जाए, तो कम से कम 15 मिनट तक साफ पानी से धोएं।',
        'आंखों को सूर्य की रोशनी से बचाएं; चोटों को दबाव के बिना ढीले, स्वच्छ शील्ड से ढकें।',
        'रगड़ें नहीं – रगड़ने से चोटें बिगड़ सकती हैं या विदेशी वस्तुएं और गहरी जा सकती हैं।',
        'तत्काल चिकित्सा सहायता प्राप्त करें – अगर दृष्टि हानि, गंभीर दर्द, या रक्तस्राव हो रहा हो।',
        'ठंडा संपीडन का प्रयोग करें – आंख के चारों ओर (प्रत्यक्ष नहीं) हल्के से संपीडन लगाएं।'
      ],
    },
    marathi: {
      title: 'आंख 👁️',
      steps: [
        'पाणीने धुऊन टाका – रासायनिक किंवा कचरा डोळ्यात घालल्यास, किमान 15 मिनिटे स्वच्छ पाण्याने धुवावे.',
        'सूर्यप्रकाशापासून डोळ्यांचे संरक्षण करा; जखमांना ताण न करता ढिले, निर्जंतुकीकरण कवर करा.',
        'रगडू नका – रगडल्याने जखमा अधिक होऊ शकतात किंवा परदेशी वस्तू अधिक खोल जातात.',
        'तत्काल वैद्यकीय मदत मिळवा – जर दृष्टी गमावली असेल, तीव्र वेदना, किंवा रक्तस्राव होत असेल.',
        'थंड संपीडन वापरा – डोळ्याभोवती (सरळ नाही) हलके संपीडन लावा.'
      ],
    },
  },
  {
    id: 'stomach',
    english: {
      title: 'Stomach 🤢',
      steps: [
        'For Stomach Pain – Rest and drink warm water; avoid heavy meals.',
        'For Indigestion – Eat light, non-spicy food and avoid lying down immediately after eating.',
        'For Food Poisoning – Stay hydrated, drink ORS, and avoid solid foods until symptoms ease.',
        'For Acidity – Drink cold milk or eat a banana; avoid caffeine and spicy foods.',
        'Seek Medical Help – If pain is severe, persistent, or accompanied by vomiting or fever.'
      ],
    },
    hindi: {
      title: 'पेट 🤢',
      steps: [
        'पेट दर्द के लिए – आराम करें और गर्म पानी पिएं; भारी भोजन से बचें।',
        'पाचन संबंधी समस्या के लिए – हल्का, नॉन-स्पाइसी भोजन खाएं और खाने के तुरंत बाद लेटने से बचें।',
        'खाद्य विषाक्तता के लिए – हाइड्रेटेड रहें, ORS पिएं, और लक्षण कम होने तक ठोस खाद्य पदार्थों से बचें।',
        'अम्लता के लिए – ठंडा दूध पिएं या एक केला खाएं; कैफीन और मसालेदार भोजन से बचें।',
        'चिकित्सकीय सहायता प्राप्त करें – अगर दर्द गंभीर, लगातार, या उल्टी या बुखार के साथ हो।'
      ],
    },
    marathi: {
      title: 'पोट 🤢',
      steps: [
        'पोटाच्या वेदनांसाठी – आराम करा आणि उबदार पाणी प्या; जड आहार टाळा.',
        'पचनासंबंधी समस्येसाठी – हलका, नॉन-स्पायसी आहार घ्या आणि खाल्ल्यानंतर लगेच झोपू नका.',
        'अन्न विषबाधेसाठी – हायड्रेटेड रहा, ORS प्या, आणि लक्षणे कमी होईपर्यंत घटक अन्न टाळा.',
        'आसिडिटीसाठी – थंड दूध प्या किंवा एक केळी खा; कॅफीन आणि मसालेदार अन्न टाळा.',
        'वैद्यकीय मदतीसाठी संपर्क करा – जर वेदना तीव्र, सातत्यपूर्ण, किंवा उलट्या किंवा तापासोबत असेल.'
      ],
    },
  },
  {
    id: 'snake-bite',
    english: {
      title: 'Snake Bite 🐍',
      steps: [
        'Stay Calm & Limit Movement – Keep the bitten limb immobilized and below heart level to slow venom spread.',
        'Call Emergency Services – Dial 911 or seek medical help immediately.',
        'Remove Tight Items – Take off rings, watches, or anything tight near the bite to prevent swelling issues.',
        'Clean the Wound – Wash the bite gently with soap and water but do not cut or suck the venom.',
        'Avoid Aspirin or Alcohol – These can worsen bleeding and spread the venom faster.'
      ],
    },
    hindi: {
      title: 'सांप का काटना 🐍',
      steps: [
        'शांत रहें और गति सीमित करें – कटा हुआ अंग स्थिर रखें और दिल के स्तर से नीचे रखें ताकि जहर का प्रसार धीमा हो सके।',
        'आपातकालीन सेवाओं को कॉल करें – तुरंत 911 डायल करें या चिकित्सा सहायता प्राप्त करें।',
        'तंग वस्त्र हटा दें – अंगूठी, घड़ी, या काटने के पास की किसी भी तंग वस्त्र को हटा दें ताकि सूजन न हो।',
        'घाव को साफ करें – काटने को साबुन और पानी से धीरे से धोएं लेकिन जहर को न काटें और न चूसें।',
        'एस्पिरिन या शराब से बचें – ये रक्तस्राव को बढ़ा सकते हैं और जहर को तेज़ी से फैला सकते हैं।'
      ],
    },
    marathi: {
      title: 'सापाचे किटक 🐍',
      steps: [
        'शांत राहा आणि हालचाल मर्यादित करा – कापलेली अंग स्थिर ठेवा आणि हृदयाच्या स्तराखाली ठेवा ज्यामुळे विषाचा प्रसार कमी होईल.',
        'आपत्कालीन सेवांना कॉल करा – लगेच 911 डायल करा किंवा वैद्यकीय मदत मिळवा.',
        'तंग वस्त्र काढा – अंगठी, घड्याळ किंवा कापण्याच्या जवळ असलेली कोणतीही तंग वस्त्र काढा ज्यामुळे सूजन होणार नाही.',
        'जखम स्वच्छ करा – किटकांना साबण आणि पाण्याने हळुवारपणे धुवा पण विष नाही कापू किंवा चुसू नका.',
        'ऍस्पिरीन किंवा मद्यापासून वाचावे – हे रक्तस्त्राव वाढवू शकतात आणि विष वेगाने पसरू शकतात.'
      ],
    },
  },
  {
    id: 'poisoning',
    english: {
      title: 'Poisoning 🤢',
      steps: [
        'Food Poisoning 🍲 : Drink plenty of water to stay hydrated. Seek medical help if vomiting, diarrhea, or dehydration is severe.',
        'Chemical Poisoning ☠️: Do not induce vomiting unless instructed by a doctor. Rinse mouth with water if ingested. Call Poison Control (1-800-222-1222) immediately.',
        'Drug Overdose 💊 : Do not give food or drink unless instructed by a professional. Keep the person awake and monitor breathing. Call 911 immediately for medical help.'
      ],
    },
    hindi: {
      title: 'विषाक्तता 🤢',
      steps: [
        'खाद्य विषाक्तता 🍲 : हाइड्रेटेड रहने के लिए बहुत सारा पानी पिएं। अगर उल्टी, दस्त, या निर्जलीकरण गंभीर हो, तो चिकित्सीय सहायता प्राप्त करें।',
        'रासायनिक विषाक्तता ☠️ : उल्टी को प्रेरित न करें जब तक डॉक्टर न कहें। अगर रासायन निगल लिया हो तो मुंह धोएं। विष नियंत्रण (1-800-222-1222) से तुरंत संपर्क करें।',
        'दवा ओवरडोज 💊 : भोजन या पेय न दें जब तक एक पेशेवर से निर्देश न मिले। व्यक्ति को जागृत रखें और सांस लेने पर निगरानी रखें। तुरंत 911 पर कॉल करें।'
      ],
    },
    marathi: {
      title: 'विषबाधा 🤢',
      steps: [
        'अन्न विषबाधा 🍲 : हायड्रेटेड राहण्यासाठी भरपूर पाणी प्या. उलट्या, पोटदु: ख, किंवा निर्जलीकरण अत्यंत असेल तर वैद्यकीय मदत घ्या.',
        'रासायनिक विषबाधा ☠️ : डॉक्टर सांगितल्याशिवाय उलट्या करण्याचा प्रयत्न करू नका. पदार्थ निगलल्यास तोंड धुवा. विष नियंत्रण (1-800-222-1222) शी त्वरित संपर्क करा.',
        'औषध ओव्हरडोज 💊 : व्यावसायिकांच्या निर्देशाशिवाय अन्न किंवा पाणी देऊ नका. व्यक्तीला जागृत ठेवा आणि श्वास घेत आहे का ते लक्षात ठेवा. त्वरित 911 वर कॉल करा.'
      ],
    },
  },
  {
    id: 'strong-fever',
    english: {
      title: 'Strong Fever 🤒',
      steps: [
        'Check Temperature : If above 102°F (38.9°C), it may require medical attention.',
        'Stay Hydrated : Drink water, ORS, or electrolyte drinks to prevent dehydration.',
        'Cool the Body : Use a damp cloth on the forehead or take a lukewarm bath (not cold).',
        'Take Fever Medication : Use paracetamol or ibuprofen if prescribed. Avoid aspirin for children.',
        'Seek Medical Help : If fever is above 104°F (40°C), lasts more than 3 days, or has seizures, confusion, or difficulty breathing, call 911 immediately.'
      ],
    },
    hindi: {
      title: 'उच्च बुखार 🤒',
      steps: [
        'तापमान चेक करें : यदि 102°F (38.9°C) से अधिक हो, तो चिकित्सा ध्यान की आवश्यकता हो सकती है।',
        'हाइड्रेटेड रहें : निर्जलीकरण से बचने के लिए पानी, ORS या इलेक्ट्रोलाइट ड्रिंक्स पिएं।',
        'शरीर ठंडा करें : माथे पर गीला कपड़ा रखें या गुनगुने पानी से स्नान करें (बर्फ नहीं)।',
        'बुखार की दवा लें : अगर डॉक्टर ने सलाह दी है तो पैरासिटामोल या इबुप्रोफेन का प्रयोग करें। बच्चों के लिए एस्पिरिन से बचें।',
        'चिकित्सीय सहायता प्राप्त करें : अगर बुखार 104°F (40°C) से ऊपर हो, 3 दिनों से अधिक समय तक चले, या मिर्गी, भ्रम, या सांस लेने में कठिनाई हो तो तुरंत 911 पर कॉल करें।'
      ],
    },
    marathi: {
      title: 'उच्च तापमान 🤒',
      steps: [
        'तापमान तपासा : 102°F (38.9°C) पेक्षा जास्त असल्यास, त्यासाठी वैद्यकीय उपचाराची आवश्यकता असू शकते.',
        'हायड्रेटेड राहा : निर्जलीकरण टाळण्यासाठी पाणी, ORS, किंवा इलेक्ट्रोलाइट ड्रिंक्स प्या.',
        'शरीर थंड करा : कपाळावर गीले कपडे ठेवा किंवा गुनगुने पाणी घेऊन स्नान करा (बर्फ नाही).',
        'बुखाराचे औषध घ्या : डॉक्टरांच्या सूचनेनुसार पॅरासिटामोल किंवा इब्युप्रोफेन घ्या. मुलांसाठी एस्पिरिन टाळा.',
        'वैद्यकीय मदत घ्या : जर बुखार 104°F (40°C) पेक्षा जास्त असेल, 3 दिवसांपेक्षा जास्त काळ चालला असेल, किंवा मिरगी, गोंधळ, किंवा श्वास घेण्यात अडचण असेल तर त्वरित 911 वर कॉल करा.'
      ],
    },
  }
];
