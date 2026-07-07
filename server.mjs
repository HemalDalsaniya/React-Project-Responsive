// server.mjs
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Database
const db = {
  aboutUs: [
    {
      id: "1",
      image: "/images/aboutUs/aboutUs1.png"
    },
    {
      id: "2",
      image: "/images/aboutUs/aboutUs2.png"
    },
    {
      id: "3",
      image: "/images/aboutUs/aboutUs3.png"
    },
    {
      id: "4",
      image: "/images/aboutUs/aboutUs4.png"
    }
  ],
  whyKoala: [
    {
      id: "1",
      image: "/images/whyKoala/whyKoala1.png",
      title: "We are a part of 1% for the Planet",
      description: "We're the first Australian mattress and furniture retailer to join the 1% for the Planet movement, which means we give away one percent of gross sales annually for the good of the planet, people and animals."
    },
    {
      id: "2",
      image: "/images/whyKoala/whyKoala2.png",
      title: "We're proudly a B-Corp business",
      description: "We're proud to be B-Corp certified, which means we stick to the highest social and environmental standards. We're stoked to be a part of a group of companies working together to build a more inclusive and sustainable economy."
    },
    {
      id: "3",
      image: "/images/whyKoala/whyKoala3.png",
      title: "Help us save the koala",
      description: "Poaching and habitat loss have forced koalas on the endangered species list. We've partnered with the WWF Australia so every mattress purchase helps protect our koalas."
    }
  ],
  registrations: [
    {
      id: "0c12",
      Name: "FullName",
      Email: "admin@gmail.com",
      Password: "Fullname@1",
      Subject: "product",
      Message: "This is message"
    },
    {
      id: "6182",
      Name: "Full Name",
      Email: "admin@gmail.com",
      Password: "FullName@00000",
      Subject: "Change or Update an Existing Order",
      Message: "Write message here"
    },
    {
      id: "a6ab",
      Name: "A",
      Email: "ergr@gmail.com"
    }
  ],
  subscribers: [
    {
      id: "ea7a",
      Name: "Tea",
      Email: "admin@gmail.com"
    },
    {
      id: "c113",
      Name: "Teah",
      Email: "ergr@gmail.com"
    },
    {
      id: "7ebf",
      Name: "Full Name",
      Email: "admin@gmail.com"
    },
    {
      id: "d788",
      Name: "Full Name",
      Email: "admin@gmail.com"
    }
  ],
  sofasheader: [
    {
      id: "1",
      image: "/images/sofas/sofa9.png",
      title: "All Sofas",
      url: ""
    },
    {
      id: "2",
      image: "/images/sofas/sofa10.png",
      title: "Sofas",
      url: ""
    },
    {
      id: "3",
      image: "/images/sofas/sofa11.png",
      title: "Sofa Beds",
      url: "sofabeds"
    },
    {
      id: "4",
      image: "/images/sofas/sofa12.png",
      title: "Modular Sofas",
      url: ""
    },
    {
      id: "5",
      image: "/images/sofas/sofa13.png",
      title: "Chaise Sofas",
      url: ""
    },
    {
      id: "6",
      image: "/images/sofas/sofa14.png",
      title: "Corner Sofas",
      url: ""
    },
    {
      id: "7",
      image: "/images/sofas/sofa15.png",
      title: "Armchairs",
      url: ""
    },
    {
      id: "8",
      image: "/images/sofas/sofa16.png",
      title: "Ottomans",
      url: ""
    },
    {
      id: "9",
      image: "/images/sofas/sofa17.png",
      title: "Sofa Modules",
      url: ""
    }
  ],
  sofacolors: [
    {
      id: "1",
      color: "Beige",
      colorcode: "#F8EFE0"
    },
    {
      id: "2",
      color: "Black",
      colorcode: "#000000"
    },
    {
      id: "3",
      color: "Blue",
      colorcode: "#B5C8D6"
    },
    {
      id: "4",
      color: "Brown",
      colorcode: "#78350F"
    },
    {
      id: "5",
      color: "Green",
      colorcode: "#959889"
    },
    {
      id: "6",
      color: "Grey",
      colorcode: "#9e9e9e"
    },
    {
      id: "7",
      color: "Orange",
      colorcode: "#b7791f"
    },
    {
      id: "8",
      color: "Pink",
      colorcode: "#D29380"
    }
  ],
  sofasizes: [
    {
      id: "1",
      size: "1.5 Seater"
    },
    {
      id: "2",
      size: "2 Seater"
    },
    {
      id: "3",
      size: "2.5 Seater"
    },
    {
      id: "4",
      size: "3 Seater"
    },
    {
      id: "5",
      size: "3.5 Seater"
    },
    {
      id: "6",
      size: "4 Seater"
    },
    {
      id: "7",
      size: "4.5 Seater"
    },
    {
      id: "8",
      size: "5 Seater"
    },
    {
      id: "9",
      size: "5.5 Seater"
    },
    {
      id: "10",
      size: "6 Seater"
    },
    {
      id: "11",
      size: "7 Seater"
    },
    {
      id: "12",
      size: "8 Seater"
    },
    {
      id: "13",
      size: "10 Seater"
    }
  ],
  sofas: [
    {
      id: "72",
      title: "Bungalow Modular sofa",
      size: "3 Seater",
      price: "1800",
      color: "Green",
      image: "/images/sofas/sofa18.png",
      review: "4.7",
      description: "The Bangalow Modular Sofa is our most stylish and customisable sofa yet. Featuring a truly modular design that will adapt to suit your lifestyle."
    },
    // ... (include all other sofas entries)
  ],
  sofabedsizes: [
    {
      id: "1",
      size: "1.5 Seater"
    },
    {
      id: "2",
      size: "2.5 Seater"
    },
    {
      id: "3",
      size: "3 Seater"
    },
    {
      id: "4",
      size: "3.5 Seater"
    }
  ],
  sofabeds: [
    {
      id: "1",
      title: "Koala Sofa Bed",
      size: "2.5 Seater",
      price: "1390",
      color: "Green",
      image: "/images/sofas/sofa19.png",
      review: "4.7"
    },
    // ... (include all other sofabeds entries)
  ],
  bedroomheader: [
    {
      id: "1",
      image: "/images/bedroom/bedroom12.png",
      title: "All Bedroom",
      url: ""
    },
    // ... (include all other bedroomheader entries)
  ],
  bedroomcolors: [
    {
      id: "1",
      color: "Beige",
      colorcode: "#F8EFE0"
    },
    // ... (include all other bedroomcolors entries)
  ],
  bedroomsizes: [
    {
      id: "1",
      size: "Single"
    },
    // ... (include all other bedroomsizes entries)
  ],
  bedroom: [
    {
      id: "1",
      title: "Koala Mattress",
      size: "Queen",
      price: "890",
      color: "",
      image: "/images/bedroom/bedroom24.png",
      review: "4.8"
    },
    // ... (include all other bedroom entries)
  ],
  cart: [
    {
      id: "1",
      title: "Koala Mattress",
      size: "Queen",
      price: "890",
      color: "",
      image: "/images/bedroom/bedroom24.png",
      review: "4.8",
      quantities: 2
    },
    {
      id: "2",
      title: "Koala Plus Mattress",
      size: "Queen",
      price: "1050",
      color: "",
      image: "/images/bedroom/bedroom25.png",
      review: "4.8",
      quantities: 3
    }
  ],
  quizresponses: [
    {
      id: "5866",
      email: "dalsaniyahemal@gmail.com",
      answers: [
        "Me and my partner",
        "King Single(W107*L203)",
        "Firm",
        "Back",
        "It's not a standard size",
        "$$$$: I'm all for better sleep, budget comes second"
      ]
    }
  ]
};

// Routes

app.get('/', (req, res) => {
  res.send('Welcome to the Koala Furniture API!');
});

app.get('/aboutUs', (req, res) => {
  res.json(db.aboutUs);
});

app.get('/whyKoala', (req, res) => {
  res.json(db.whyKoala);
});

app.get('/registrations', (req, res) => {
  res.json(db.registrations);
});

app.post('/registrations', (req, res) => {
  const newRegistration = { id: Date.now().toString(), ...req.body };
  db.registrations.push(newRegistration);
  res.status(201).json(newRegistration);
});

app.get('/subscribers', (req, res) => {
  res.json(db.subscribers);
});

app.post('/subscribers', (req, res) => {
  const newSubscriber = { id: Date.now().toString(), ...req.body };
  db.subscribers.push(newSubscriber);
  res.status(201).json(newSubscriber);
});

app.get('/sofasheader', (req, res) => {
  res.json(db.sofasheader);
});

app.get('/sofacolors', (req, res) => {
  res.json(db.sofacolors);
});

app.get('/sofasizes', (req, res) => {
  res.json(db.sofasizes);
});

app.get('/sofas', (req, res) => {
  res.json(db.sofas);
});

app.get('/sofabedsizes', (req, res) => {
  res.json(db.sofabedsizes);
});

app.get('/sofabeds', (req, res) => {
  res.json(db.sofabeds);
});

app.get('/bedroomheader', (req, res) => {
  res.json(db.bedroomheader);
});

app.get('/bedroomcolors', (req, res) => {
  res.json(db.bedroomcolors);
});

app.get('/bedroomsizes', (req, res) => {
  res.json(db.bedroomsizes);
});

app.get('/bedroom', (req, res) => {
  res.json(db.bedroom);
});

app.get('/cart', (req, res) => {
  res.json(db.cart);
});

app.post('/cart', (req, res) => {
  const newCartItem = { id: Date.now().toString(), ...req.body };
  db.cart.push(newCartItem);
  res.status(201).json(newCartItem);
});

app.get('/quizresponses', (req, res) => {
  res.json(db.quizresponses);
});

app.post('/quizresponses', (req, res) => {
  const newQuizResponse = { id: Date.now().toString(), ...req.body };
  db.quizresponses.push(newQuizResponse);
  res.status(201).json(newQuizResponse);
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});