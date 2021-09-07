let products = [
  {
    photo: "img/big-mac.png",
    name: "Big Happy",
    alt: "burger 'big happy'",
    price: 5.99,
    active: false,
    quantity: 0,
  },
  {
    photo: "img/mc-chicken.png",
    name: "Happy Chicken",
    alt: "burger 'Happy chicken",
    price: 4.99,
    active: false,
    quantity: 0,
  },
  {
    photo: "img/double-cb.png",
    name: "Happy Double Cheese",
    alt: "burger 'happy double cheese",
    price: 2.99,
    active: false,
    quantity: 0,
  },
  {
    photo: "img/fries.png",
    name: "Frites",
    alt: "frites",
    price: 2.99,
    active: false,
    quantity: 0,
  },
  {
    photo: "img/nuggets.png",
    name: "Nuggets",
    alt: "nuggets",
    price: 3.49,
    active: false,
    quantity: 0,
  },
  {
    photo: "img/salad.png",
    name: "Salade",
    alt: "salade",
    price: 2.79,
    active: false,
    quantity: 0,
  },
  {
    photo: "img/cola.png",
    name: "Soda",
    alt: "soda",
    price: 1.99,
    active: false,
    quantity: 0,
  },
  {
    photo: "img/lipton.png",
    name: "Ice Tea",
    alt: "ice tea",
    price: 1.99,
    active: false,
    quantity: 0,
  },
  {
    photo: "img/water.png",
    name: "Eau",
    alt: "eau",
    price: 1.49,
    active: false,
    quantity: 0,
  },
];

const SelfServiceMachine = {
  data() {
    return {
      title: "Happy Fast",
      products: products,
    };
  },
  methods: {
    total: function () {
      let total = 0;
      this.products.forEach(function (item) {
        if (item.active) {
          total += item.price * item.quantity;
        }
      });
      return total;
    },
  },
};

Vue.createApp(SelfServiceMachine).mount("#app");
