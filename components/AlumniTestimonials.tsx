import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, A11y } from 'swiper/modules';

// Testimonial Card Component
const TestimonialCard = ({ quote, authorName, authorTitle, avatarSrc }) => {
  return (
    <div className="bg-trust-grey dark:bg-dark-trust-grey rounded-lg p-6 lg:p-8 flex flex-col justify-between h-full lg:h-[400px] shadow-primary-light/20 dark:shadow-dark-primary-light/20 backdrop-blur-sm">
      <div className="mb-6">
        <span className="text-primary-light dark:text-dark-primary-light text-5xl font-serif leading-none block mb-4">”</span>
        <p className="text-secondary-base dark:text-dark-secondary-base text-lg leading-relaxed">{quote}</p>
      </div>
      <div className="flex items-center mt-auto">
        {avatarSrc && (
          <div className="w-12 h-12 rounded-full overflow-hidden relative mr-4 flex-shrink-0">
            <Image
              src={avatarSrc}
              alt={authorName}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        )}
        <div>
          <p className="text-primary-dark dark:text-dark-primary-dark font-semibold">{authorName}</p>
          <p className="text-secondary-base dark:text-dark-secondary-base text-sm">{authorTitle}</p>
        </div>
      </div>
    </div>
  );
};

// Main Testimonial Slider Component
const AlumniTestimonials = () => {
  const testimonials = [
    {
      quote:
        'Ich konnte eine solide Grundlage in Data Science erwerben, an realen Problemen zu üben, einer lebendigen Community beitreten, und schnell meinen Traumjob als Datenanalyst finden. Ich empfehle Le Wagon zu 100%!',
      authorName: 'Capucine Dehaut',
      authorTitle: 'Data Analyst Sonder',
      avatarSrc: '/images/avatar-capucine.jpg',
    },
    {
      quote:
        'Wenn du auf der Suche nach einem Bootcamp bist, das einen umfassenden Lehrplan, ein großartiges Lernumfeld und eine unglaubliche Karriereunterstützung bietet, dann ist Le Wagon genau das Richtige für dich!',
      authorName: 'Joseph Gulay',
      authorTitle: 'Data Analyst Ernst & Young',
      avatarSrc: '/images/avatar-joseph.jpg',
    },
    {
      quote:
        'Es ist erstaunlich, wie viel man in nur 9 Wochen lernt, nicht nur in der Webentwicklung, sondern auch, wie man sich selbst herausfordert und als Person wächst!',
      authorName: 'Carolina Cota',
      authorTitle: 'Backend Developer:in N26',
      avatarSrc: '/images/avatar-carolina.jpg',
    },
    {
      quote:
        'Le Wagon hat meine Karriere komplett verändert. Die Instruktoren waren unglaublich unterstützend und das Curriculum war topaktuell.',
      authorName: 'Max Mustermann',
      authorTitle: 'Full-Stack Developer',
      avatarSrc: '/images/avatar-max.jpg',
    },
    {
      quote:
        'Die globale Community ist ein riesiger Vorteil. Ich konnte mit Alumni auf der ganzen Welt in Kontakt treten und wertvolle Einblicke gewinnen.',
      authorName: 'Lena Schmidt',
      authorTitle: 'UX/UI Designer',
      avatarSrc: '/images/avatar-lena.jpg',
    },
    {
      quote:
        'Ich hätte nie gedacht, dass ich in so kurzer Zeit so viel lernen könnte. Die praktischen Projekte waren fantastisch und haben mir geholfen, schnell Vertrauen aufzubauen.',
      authorName: 'Felix Richter',
      authorTitle: 'DevOps Engineer',
      avatarSrc: '/images/avatar-felix.jpg',
    },
  ];

  return (
    <div className="bg-gradient-hero dark:bg-dark-gradient-hero py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading and Subtitle */}
        <h2 className="text-primary-light dark:text-dark-primary-light text-3xl md:text-4xl font-bold text-center mb-4 max-sm:text-[#00C4EE] max-sm:dark:text-[#00D4FF]">
          Das sagen unsere Alumni und Autor:innen
        </h2>
        <p className="text-secondary-base dark:text-trust-grey text-lg text-center mb-12">
          Höre, was unsere ehemaligen Teilnehmer über ihre Erfahrungen sagen.
        </p>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Navigation, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={false}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          loop={false}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="mySwiper !pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="flex h-auto">
              <TestimonialCard
                quote={testimonial.quote}
                authorName={testimonial.authorName}
                authorTitle={testimonial.authorTitle}
                avatarSrc={testimonial.avatarSrc}
              />
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev text-primary-light dark:text-dark-primary-light !left-0"></div>
          <div className="swiper-button-next text-primary-light dark:text-dark-primary-light !right-0"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default AlumniTestimonials;