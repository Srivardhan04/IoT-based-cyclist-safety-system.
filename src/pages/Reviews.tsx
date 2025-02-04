import React from 'react';
import { Star, ThumbsUp, User } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      date: "2024-02-15",
      comment: "This IoT system has completely transformed my cycling experience. I feel so much safer knowing I have real-time protection.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 4,
      date: "2024-02-10",
      comment: "Great system overall. The GPS tracking feature is particularly useful for my daily commute.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
    },
    {
      id: 3,
      name: "Emma Wilson",
      rating: 5,
      date: "2024-02-05",
      comment: "The emergency response feature gave me peace of mind during my solo rides. Highly recommended!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">User Reviews</h1>
          <p className="text-xl text-gray-600">See what our community has to say about CycleSafe IoT</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold">Overall Rating</h2>
              <div className="flex items-center mt-2">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-6 w-6 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">4.8 out of 5</span>
              </div>
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Write a Review
            </button>
          </div>

          <div className="space-y-8">
            {reviews.map((review) => (
              <div key={review.id} className="border-b border-gray-200 pb-8 last:border-b-0">
                <div className="flex items-center mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold">{review.name}</h3>
                    <div className="flex items-center">
                      <div className="flex text-yellow-400">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-500">{review.date}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{review.comment}</p>
                <div className="mt-4 flex items-center space-x-4">
                  <button className="flex items-center text-gray-500 hover:text-blue-600">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    Helpful
                  </button>
                  <button className="text-gray-500 hover:text-blue-600">
                    Report
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Share Your Experience</h3>
          <p className="mb-6">Help others make informed decisions about their safety</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Write a Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;