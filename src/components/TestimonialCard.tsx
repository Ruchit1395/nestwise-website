import React from 'react';
import { Star } from 'lucide-react';
import { TestimonialType } from '../types';

interface TestimonialCardProps {
  testimonial: TestimonialType;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 h-full hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-1">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-accent fill-current" />
        ))}
      </div>
      
      <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
        "{testimonial.quote}"
      </blockquote>
      
      <div className="flex items-center">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <div className="font-semibold text-primary">{testimonial.name}</div>
          <div className="text-sm text-gray-500">{testimonial.title}</div>
          <div className="text-sm text-gray-400">{testimonial.company}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;