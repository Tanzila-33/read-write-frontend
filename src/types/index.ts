export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Post {
  _id?: string; // The unique identifier for the notification, optional because it's assigned by MongoDB
  title: string; // The message to be sent
  content: string; // The type of notification to send
  author: {
    name: string;
    email: string;
  };
  coverImage: string;
  likes: number;
}
