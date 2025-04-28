import TestimonialImg from "@/public/img/testimonial.png";
import Avatar1Img from "@/public/img/avatar-1.png";
import Avatar2Img from "@/public/img/avatar-2.png";
import Avatar3Img from "@/public/img/avatar-3.png";
import { TestimonialInterface } from "@/interface";

export const testimonialData: TestimonialInterface = {
  title: "What people are saying about us",
  image: TestimonialImg,
  persons: [
    {
      avatar: Avatar1Img,
      name: "Josh Smith",
      occupation: "Manager of The New York Times",
      message:
        "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
    },
    {
      avatar: Avatar2Img,
      name: "Brandi Johns",
      occupation: "Manager of The New York Times",
      message:
        "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
    },
    {
      avatar: Avatar3Img,
      name: "Paula Pfeffer",
      occupation: "Manager of The New York Times",
      message:
        "“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”",
    },
  ],
};
