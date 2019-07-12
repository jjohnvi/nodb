let favorites = [];

let quotes = [
  {
    id: 1,
    type: "stress",
    quote: "Sometimes the worst place you can be at is in your own head.",
    image: "",
    author: "Unknown",
    likes: 0,
    comment: ""
  },
  {
    id: 2,
    type: "stress",
    quote:
      "If another can easily anger you, it is because you are off balance with yourself",
    image: "",
    author: "Unknown",
    likes: 0,
    comment: ""
  },
  {
    id: 3,
    type: "stress",
    quote:
      "The greatest weapon against stress is our ability to choose one thought over another.",
    image: "",
    author: "William James",
    likes: 0,
    comment: ""
  },
  {
    id: 4,
    type: "stress",
    quote: "Gratitude changes everything.",
    image: "",
    author: "",
    likes: 0,
    comment: ""
  },
  {
    id: 5,
    type: "stress",
    quote: "Train your mind to see the Good in Every Situation.",
    image: "",
    author: "",
    likes: 0,
    comment: ""
  },
  {
    id: 6,
    type: "stress",
    quote: "Whoever is trying to bring you down is already below you.",
    image: "",
    author: "",
    likes: 0,
    comment: ""
  },
  {
    id: 7,
    type: "stress",
    quote:
      "Forgive others not because they deserve forgiveness, but because you deserve peace.",
    image: "",
    author: "",
    likes: 0,
    comment: ""
  },
  {
    id: 8,
    type: "stress",
    quote: "Storms don't last forever.",
    image: "",
    author: "",
    likes: 0,
    comment: ""
  },
  {
    id: 9,
    type: "stress",
    quote:
      "Stress is an ignorant state. It believes that everything is an emergency.",
    image: "",
    author: "Natalie Goldberg",
    likes: 0,
    comment: ""
  },
  {
    id: 10,
    type: "stress",
    quote:
      "People who laugh more are better to tolerate pain, both physical and emotional pain. So laugh more.",
    image: "",
    author: "",
    likes: 0,
    comment: ""
  },
  {
    id: 11,
    type: "intellectual",
    quote:
      "Our brains have a negativity bias and will remember negative memories more than good ones. This helps us to better protect ourselves.",
    image: "",
    author: "",
    likes: 0,
    comment: ""
  },
  {
    id: 12,
    type: "intellectual",
    quote:
      "Over thinking is a special form of fear. This fear becomes worse when adding anticipation, memory, imagination, and emotion together.",
    image: "",
    author: "",
    likes: 0,
    comment: ""
  },
  {
    id: 13,
    type: "intellectual",
    quote:
      "Scientific studies show that being compassionate can have surprising benefits for physical and psychological health.",
    image: "",
    author: "",
    likes: 0,
    comment: ""
  },
  {
    id: 14,
    type: "intellectual",
    quote:
      "A big part of emotional intelligence is being able to feel an emotion without having to act on it.",
    image: "",
    author: "",
    likes: 0,
    comment: ""
  },
  {
    id: 15,
    type: "intellectual",
    quote: "Psychology shows that music increases your brain's organization.",
    image: "",
    author: "",
    likes: 0,
    comment: ""
  },
  {
    id: 16,
    type: "intellectual",
    quote:
      "You can judge a lot about a person's character by what they laugh at.",
    image: "",
    author: "",
    likes: 0,
    comment: ""
  },
  {
    id: 17,
    type: "intellectual",
    quote:
      "The human brain organizes information like a computer. It divides memories based into sequences like alphabetically, by size or by time.",
    image: "",
    author: "",
    likes: 0,
    comment: ""
  },
  {
    id: 18,
    type: "intellectual",
    quote:
      "Some people automatically assume that you're mad at them when you're quiet. This is due to a guilty conscious.",
    image: "",
    author: "",
    likes: 0,
    comment: ""
  },
  {
    id: 19,
    type: "intellectual",
    quote:
      "The time we spend dreaming helps us in overcoming painful experiences.",
    image: "",
    author: "",
    likes: 0,
    comment: ""
  },
  {
    id: 20,
    type: "intellectual",
    quote:
      "According to some psychologists, you cannot find happiness until you stop searching for it.",
    image: "",
    author: "",
    likes: 0,
    comment: ""
  },
  {
    id: 21,
    type: "inspirational",
    quote:
      "People who believe in the power of effort to overcome challenges are more resilient and ultimately more successful",
    image: "",
    author: "",
    likes: 0,
    comment: ""
  },
  {
    id: 22,
    type: "inspirational",
    quote:
      "Probably the biggest insight is that happiness is not just a place, but also a process. Happiness is an ongoing process of fresh challenges, and it takes the right attitudes and activities to continue to be happy.",
    image: "",
    author: "Ed Diener",
    likes: 0,
    comment: ""
  },
  {
    id: 23,
    type: "inspirational",
    quote:
      "It is not primarily our physical selves that limit us but rather our mindset about our physical limits.",
    image: "",
    author: "Ellen J. Langer",
    likes: 0,
    comment: ""
  },
  {
    id: 24,
    type: "inspirational",
    quote:
      "If you plan on being anything less than you are capable of being, you will probably be unhappy all the days of your life",
    image: "",
    author: "Abraham Maslow",
    likes: 0,
    comment: ""
  },
  {
    id: 25,
    type: "inspirational",
    quote: "Becoming is better than being",
    image: "",
    author: "",
    likes: 0,
    comment: ""
  },
  {
    id: 26,
    type: "inspirational",
    quote:
      "Wating to be someone else is a waste of the person you are. I'd rather be hated for who I am, than loved for who I am not.",
    image: "",
    author: "",
    likes: 0,
    comment: ""
  },
  {
    id: 27,
    type: "inspirational",
    quote: "Be the reason someone believes in the Goodness of people.",
    image: "",
    author: "",
    likes: 0,
    comment: ""
  },
  {
    id: 28,
    type: "inspirational",
    quote: "Better an oops than a what if",
    image: "",
    author: "",
    likes: 0,
    comment: ""
  },
  {
    id: 29,
    type: "inspirational",
    quote:
      "The best years of your life are the ones in which you decide your problems are your own. You do not blame them on your mother, the ecology, or the president. You realize that you control your own destiny.",
    image: "",
    author: "Albert Ellis",
    likes: 0,
    comment: ""
  },
  {
    id: 30,
    type: "inspirational",
    quote:
      "Don't compare yourself with other people; compare yourself with who you were yesterday.",
    image: "",
    author: "Jordan Peterson",
    likes: 0,
    comment: ""
  }
];
getQuotes = (req, res) => {
  const selectQuotes = [];
  quotes.forEach(quote => {
    if (quote.type === req.params.type) {
      selectQuotes.push(quote);
    }
  });
  res.json(selectQuotes);
  // console.log(req.params.type);
};

getAllQuotes = (req, res) => {
  res.json(quotes);
};

addFave = (req, res) => {
  favorites.push(req.body);
  res.sendStatus(200);
};

getFave = (req, res) => {
  console.log(favorites);
  res.json(favorites);
};

deleteFave = (req, res) => {
  let index = favorites.findIndex(quote => {
    return quote.id == req.params.id;
  });
  console.log(index);
  favorites.splice(index, 1);
  res.json(favorites);
};

likeQuote = (req, res) => {
  const { id } = req.params;
  const index = quotes.findIndex(quote => quote.id == id);
  quotes[index].likes++;

  res.status(200).json(quotes);
};

module.exports = {
  getQuotes,
  addFave,
  getFave,
  deleteFave,
  likeQuote,
  getAllQuotes
};
