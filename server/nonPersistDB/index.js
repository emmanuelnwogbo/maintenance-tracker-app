const db = [{
    id: '1',
    firstname: 'Emmanuel',
    lastname: 'Nwogbo',
    email: 'emmanuel@gmail.com',
    requests: [{
        id: '1',
        category: 'electronics',
        nameOfObject: 'television',
        details: 'lorem ipsum',
        status: 'pending'
      },
      {
        id: '2',
        category: 'home appliances',
        nameOfObject: 'refrigerator',
        details: 'lorem ipsum',
        status: 'resolved'
      },
      {
        id: '3',
        category: 'electronics',
        nameOfObject: 'radio',
        details: 'lorem ipsum',
        status: 'rejected'
      }
    ],
    role: 'user'
  },

  {
    id: '2',
    firstname: 'opeyemi',
    lastname: 'odedeyi',
    email: 'ope@gmail.com',
    requests: [{
        id: '4',
        category: 'farm equipments',
        nameOfObject: 'incubator',
        details: 'lorem ipsum',
        status: 'pending'
      },
      {
        id: '5',
        category: 'gadgets',
        nameOfObject: 'beats headphones',
        details: 'lorem ipsum',
        status: 'resolved'
      },
      {
        id: '6',
        category: 'automobile',
        nameOfObject: 'bmw',
        details: 'lorem ipsum',
        status: 'rejected'
      }
    ],
    role: 'user'
  },

  {
    id: '3',
    firstname: 'Samuel',
    lastname: 'Nwogbo',
    email: 'samuel@gmail.com',
    role: 'admin'
  },
  {
    id: '4',
    firstname: 'Rosemary',
    lastname: 'Nwogbo',
    email: 'rosemary@gmail.com',
    role: 'admin'
  }
]

export default db