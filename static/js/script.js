//Testimonial Data
const testimonials = [
  {
    name: "Sarah",
    job: "Engineer",
    image: "/static/img/person.jpg",
    testimonial:
      "I'm thrilled with my new bike from Wheelhouse Bike! The staff was knowledgeable and helped me find the perfect fit. The quality and performance are exceptional, and I couldn't be happier with my purchase. Highly recommend!",
  },
  {
    name: "Rahul Mahto",
    job: "Developer",
    image: "/static/img/person2.jpg",
    testimonial:
      "Wheelhouse Bike exceeded my expectations! The customer service was top-notch, and they guided me through the selection process. The bike itself is a dream to ride, smooth and reliable. I'm impressed and would definitely buy from them again.",
  },
  {
    name: "Jae Robin",
    job: "UI Designer",
    image: "/static/img/person.jpg",
    testimonial:
      "I had a fantastic experience at Wheelhouse Bike. The staff was friendly and patient, answering all my questions. The bike I bought is stylish and comfortable, and the value for money is excellent. I'm enjoying every moment on my new wheels!",
  },
  {
    name: "Nicola Blakely",
    job: "Doctor",
    image: "/static/img/person2.jpg",
    testimonial:
      "Wheelhouse Bike is the place to go for quality bikes. The team's expertise helped me find the perfect model for my needs. The bike is sturdy, well-built, and handles beautifully. I'm extremely satisfied with my purchase and would recommend them to anyone in the market for a bike.",
  },
];

//Current Slide
let i = 0;
//Total Slides
let j = testimonials.length;

let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimonial();
});
prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimonial();
});

let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
    <p>${testimonials[i].testimonial}</p>
    <img src=${testimonials[i].image}>
    <h3>${testimonials[i].name}</h3>
    <h6>${testimonials[i].job}</h6>
  `;
};
window.onload = displayTestimonial;
