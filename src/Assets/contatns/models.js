export const ChatMessageType = {
  sent: 'SENT',
  received: 'RECEIVED'
};


export const ChatsDataModel = {
  totalChats: 10,
  chatsList: [
    {
      id: 1,
      name: 'Mahdi Tohidloo',
      image: require('../images/1.jpg'),
      chats: [
        {
          type: ChatMessageType.sent,
          message: 'Hello Dear User. Start the chat :)',
          date: new Date()
        }
      ]
    },
    {
      id: 2,
      name: 'Lana Del Ray',
      image: require('../images/2.jpg'),
      chats: [
        {
          type: ChatMessageType.sent,
          message: 'Hello Dear User. Start the chat :)',
          date: new Date()
        }
      ]
    },
    {
      id: 3,
      name: 'Mohsen Yeganeh',
      image: require('../images/3.jpg'),
      chats: [
        {
          type: ChatMessageType.sent,
          message: 'Hello Dear User. Start the chat :)',
          date: new Date()
        }
      ]
    },
    {
      id: 4,
      name: 'Mark Zuckerberg',
      image: require('../images/4.jpg'),
      chats: [
        {
          type: ChatMessageType.sent,
          message: 'Hello Dear User. Start the chat :)',
          date: new Date()
        }
      ]
    },
    {
      id: 5,
      name: 'Taylor Swift',
      image: require('../images/5.jpg'),
      chats: [
        {
          type: ChatMessageType.sent,
          message: 'Hello Dear User. Start the chat :)',
          date: new Date()
        }
      ]
    },
    {
      id: 6,
      name: 'Harry Styles',
      image: require('../images/6.jpg'),
      chats: [
        {
          type: ChatMessageType.sent,
          message: 'Hello Dear User. Start the chat :)',
          date: new Date()
        }
      ]
    },
    {
      id: 7,
      name: 'Hassan Rohani',
      image: require('../images/7.jpg'),
      chats: [
        {
          type: ChatMessageType.sent,
          message: 'Hello Dear User. Start the chat :)',
          date: new Date()
        }
      ]
    },
    {
      id: 8,
      name: 'Trump',
      image: require('../images/8.jpg'),
      chats: [
        {
          type: ChatMessageType.sent,
          message: 'Hello Dear User. Start the chat :)',
          date: new Date()
        }
      ]
    },
    {
      id: 9,
      name: 'Billie Eilish',
      image: require('../images/9.jpg'),
      chats: [
        {
          type: ChatMessageType.sent,
          message: 'Hello Dear User. Start the chat :)',
          date: new Date()
        }
      ]
    },
    {
      id: 10,
      name: 'Scarlett Johansson',
      image: require('../images/10.jpg'),
      chats: [
        {
          type: ChatMessageType.sent,
          message: 'Hello Dear User. Start the chat :)',
          date: new Date()
        }
      ]
    },
  ]
};
