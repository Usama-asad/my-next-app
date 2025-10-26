import React from 'react';

const FaqGrid = () => {
  const faqs = [
    {
      question: '¿Dónde están ubicadas las marcas de e-commerce con las que trabajaremos? ¿Tendré que trabajar solo con marcas y horarios de mi país?',
      answer: 'Answer to question 1...',
    },
    {
      question: '¿Cuántos estudiantes hemos formado a lo largo de los años? ¿Cuánto están ganando?',
      answer: 'Answer to question 2...',
    },
    {
      question: '¿Tendré que hacer llamadas en frío para obtener clientes? ¿O incluso enviar cientos de correos electrónicos en frío?',
      answer: 'Answer to question 3...',
    },
    {
      question: '¿Necesito experiencia previa de marketing digital para tener éxito?',
      answer: 'Answer to question 4...',
    },
    {
      question: '¿Me garantizáis un cliente o varios? ¿Qué pasa si quiero trabajar para varios clientes para ganar más dinero? ¿Cómo lo hago?',
      answer: 'Answer to question 5...',
    },
    {
      question: '¿Qué sucede después de mi primer cliente? ¿Recibiré apoyo?',
      answer: 'Answer to question 6...',
    },
    {
      question: '¿Nos garantizáis un cliente con una marca de e-commerce o varias?',
      answer: 'Answer to question 7...',
    },
    {
      question: '¿En qué nichos trabajan tus clientes? ¿Puedes darme algunos ejemplos de lo que venden?',
      answer: 'Answer to question 8...',
    },
    {
      question: '¿Cuántas mujeres Growth Partners hemos entrenado?',
      answer: 'Answer to question 9...',
    },
    {
      question: '¿Tenéis una garantía de resultados?',
      answer: 'Answer to question 10...',
    },
    {
      question: '¿Qué tipo de pago aceptas: tarjeta de crédito, tarjeta de débito, transferencia bancaria, PayPal, Venmo, etc.?',
      answer: 'Answer to question 11...',
    },
    {
      question: '¿Qué puedo hacer para ganar más de €10.000?',
      answer: 'Answer to question 12...',
    },
    {
      question: '¿Necesito ser bueno en ventas o gustarme las ventas para tener éxito como Growth Partner?',
      answer: 'Answer to question 13...',
    },
    {
      question: '¿Cuántas horas tendré que trabajar para ganar de €5.000 a €10.000 al mes?',
      answer: 'Answer to question 14...',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 lg:px-8 lg:py-12 bg-gradient-hero dark:bg-dark-gradient-hero">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-trust-grey dark:bg-dark-trust-grey p-6 rounded-xl shadow-primary-light/20 dark:shadow-dark-primary-light/20 border border-primary-light/20 dark:border-dark-primary-light/20 flex flex-col justify-between hover:shadow-primary-light/30 dark:hover:shadow-dark-primary-light/30 transition-shadow duration-300 backdrop-blur-sm"
          >
            <div className="flex justify-between items-start mb-4">
              <p className="text-primary-dark dark:text-dark-primary-dark text-lg font-medium pr-4">{faq.question}</p>
              <button className="text-primary-light dark:text-dark-primary-light hover:text-primary-accent dark:hover:text-dark-primary-accent focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-dark-primary-light rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 transform rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                </svg>
              </button>
            </div>
            {/* The answer content would go here, initially hidden and toggled by the button */}
            {/* <p className="text-secondary-base dark:text-dark-secondary-base mt-2">{faq.answer}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqGrid;