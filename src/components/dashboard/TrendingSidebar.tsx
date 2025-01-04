import React from 'react';
import { TrendingUp } from 'lucide-react';

export function TrendingSidebar() {
  const trendingTopics = [
    'Creative Writing',
    'Personal Growth',
    'Technology',
    'Travel Stories',
    'Poetry',
  ];

  const suggestedWriters = [
    {
      name: 'Emma Wilson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      followers: '12.4K',
    },
    {
      name: 'David Kim',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      followers: '8.2K',
    },
  ];

  return (
    <div className="w-80 shrink-0 hidden lg:block space-y-6">
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-primary" />
          <h2 className="font-serif font-semibold">Trending Topics</h2>
        </div>
        <div className="space-y-2">
          {trendingTopics.map((topic) => (
            <button
              key={topic}
              className="block w-full text-left px-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50 hover:text-primary transition-colors"
            >
              #{topic}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-4">
        <h2 className="font-serif font-semibold mb-4">Suggested Writers</h2>
        <div className="space-y-4">
          {suggestedWriters.map((writer) => (
            <div key={writer.name} className="flex items-center gap-3">
              <img
                src={writer.avatar}
                alt={writer.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium text-sm">{writer.name}</p>
                <p className="text-xs text-gray-500">{writer.followers} followers</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}