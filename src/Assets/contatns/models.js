export const ChatMessageType = {
  sent: 'SENT',
  received: 'RECEIVED'
};

export const MainUserData = {
  type: ChatMessageType.sent,
  senderName: 'Jon Snow',
  senderImage: require('../images/11.jpg'),
};

export const ReplyMessageModel = {
  type: ChatMessageType.received,
  message: 'Hello my friend. Hope to be ok. This is a automatic reply to your message.',
};

export const ChatsDataModel = {
  totalChats: 10,
  chatsList: [
    {
      id: 1,
      name: 'Mahdi Tohidloo',
      image: require('../images/1.jpg'),
      bio: 'Front end developer',
      chats: [
        {
          senderId: 1,
          type: ChatMessageType.received,
          message: 'Hello Dear User. Start the chat :)',
          date: new Date(),
          senderName: 'Mahdi Tohidloo',
          senderImage: require('../images/1.jpg'),
        }
      ]
    },
    {
      id: 2,
      name: 'Lana Del Ray',
      image: require('../images/2.jpg'),
      bio: 'Front end developer',
      chats: [
        {
          senderId: 2,
          type: ChatMessageType.received,
          message: 'Hello Dear User. Start the chat :)',
          date: new Date(),
          senderName: 'Lana Del Ray',
          senderImage: require('../images/2.jpg'),
        }
      ]
    },
    {
      id: 3,
      name: 'Mohsen Yeganeh',
      image: require('../images/3.jpg'),
      bio: 'Front end developer',
      chats: [
        {
          senderId: 3,
          type: ChatMessageType.received,
          message: 'Hello Dear User. Start the chat :)',
          date: new Date(),
          senderName: 'Mohsen Yeganeh',
          senderImage: require('../images/3.jpg'),
        }
      ]
    },
    {
      id: 4,
      name: 'Mark Zuckerberg',
      image: require('../images/4.jpg'),
      bio: 'Front end developer',
      chats: [
        {
          senderId: 4,
          type: ChatMessageType.received,
          message: 'Hello Dear User. Start the chat :)',
          date: new Date(),
          senderName: 'Mark Zuckerberg',
          senderImage: require('../images/4.jpg'),
        }
      ]
    },
    {
      id: 5,
      name: 'Taylor Swift',
      image: require('../images/5.jpg'),
      bio: 'Front end developer',
      chats: [
        {
          senderId: 5,
          type: ChatMessageType.received,
          message: 'Hello Dear User. Start the chat :)',
          date: new Date(),
          senderName: 'Taylor Swift',
          senderImage: require('../images/5.jpg'),
        }
      ]
    },
    {
      id: 6,
      name: 'Harry Styles',
      image: require('../images/6.jpg'),
      bio: 'Front end developer',
      chats: [
        {
          senderId: 6,
          type: ChatMessageType.received,
          message: 'Hello Dear User. Start the chat :)',
          date: new Date(),
          senderName: 'Harry Styles',
          senderImage: require('../images/6.jpg'),
        }
      ]
    },
    {
      id: 7,
      name: 'Hassan Rohani',
      image: require('../images/7.jpg'),
      bio: 'Front end developer',
      chats: [
        {
          senderId: 7,
          type: ChatMessageType.received,
          message: 'Hello Dear User. Start the chat :)',
          date: new Date(),
          senderName: 'Hassan Rohani',
          senderImage: require('../images/7.jpg'),
        }
      ]
    },
    {
      id: 8,
      name: 'Trump',
      image: require('../images/8.jpg'),
      bio: 'Front end developer',
      chats: [
        {
          senderId: 8,
          type: ChatMessageType.received,
          message: 'Hello Dear User. Start the chat :)',
          date: new Date(),
          senderName: 'Trump',
          senderImage: require('../images/8.jpg'),
        }
      ]
    },
    {
      id: 9,
      name: 'Billie Eilish',
      image: require('../images/9.jpg'),
      bio: 'Front end developer',
      chats: [
        {
          senderId: 9,
          type: ChatMessageType.received,
          message: 'Hello Dear User. Start the chat :)',
          date: new Date(),
          senderName: 'Billie Eilish',
          senderImage: require('../images/9.jpg'),
        }
      ]
    },
    {
      id: 10,
      name: 'Scarlett Johansson',
      image: require('../images/10.jpg'),
      bio: 'Front end developer',
      chats: [
        {
          senderId: 10,
          type: ChatMessageType.received,
          message: 'Hello Dear User. Start the chat :)',
          date: new Date(),
          senderName: 'Scarlett Johansson',
          senderImage: require('../images/10.jpg'),
        }
      ]
    },
  ]
};
