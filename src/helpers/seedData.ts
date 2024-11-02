const addDays = (date: Date, days: number): Date => {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

export const seedUser1 = {
  id: "user1",
  name: "John Doe",
  email: "johnDoe@test.com",
  projects: {
    create: [
      {
        name: "Project 1",
        description: "Description 1",
        color: "#2596be",
        schoolRelated: true,
        tasks: {
          create: [
            {
              name: "Task 1",
              description: "Description 1",
              doDate: addDays(new Date(), 2),
              dueDate: addDays(new Date(), 3),
              completed: false,
              emergency: false,
              locational: false,
              storyPoints: 1,
              priority: 1,
              ordering: 1,
              user: {
                connect: {
                  id: "user1",
                },
              },
            },
            {
              name: "Task 2",
              description: "Description 2",
              doDate: new Date(),
              dueDate: addDays(new Date(), 5),
              completed: false,
              emergency: false,
              locational: false,
              storyPoints: 2,
              priority: 2,
              ordering: 2,
              user: {
                connect: {
                  id: "user1",
                },
              },
            },
            {
              name: "Task 3",
              description: "Description 3",
              doDate: addDays(new Date(), 1),
              dueDate: addDays(new Date(), 4),
              completed: false,
              emergency: false,
              locational: false,
              storyPoints: 3,
              priority: 3,
              ordering: 1.1,
              user: {
                connect: {
                  id: "user1",
                },
              },
            },
          ],
        },
      },
    ],
  },
}

export const seedUser2 = {
  id: "user2",
  name: "Jane Smith",
  email: "janeSmith@test.com",
  projects: {
    create: [
      {
        name: "Project 2",
        description: "Description 2",
        color: "#ff5733",
        schoolRelated: false,
        tasks: {
          create: [
            {
              name: "Task A",
              description: "Description A",
              doDate: addDays(new Date(), 3),
              dueDate: addDays(new Date(), 6),
              completed: false,
              emergency: true,
              locational: true,
              storyPoints: 5,
              priority: 1,
              ordering: 1,
              user: {
                connect: {
                  id: "user2",
                },
              },
            },
            {
              name: "Task B",
              description: "Description B",
              doDate: addDays(new Date(), 2),
              dueDate: addDays(new Date(), 7),
              completed: false,
              emergency: false,
              locational: false,
              storyPoints: 3,
              priority: 2,
              ordering: 2,
              user: {
                connect: {
                  id: "user2",
                },
              },
            },
            {
              name: "Task C",
              description: "Description C",
              doDate: addDays(new Date(), 1),
              dueDate: addDays(new Date(), 5),
              completed: false,
              emergency: false,
              locational: true,
              storyPoints: 2,
              priority: 3,
              ordering: 1.1,
              user: {
                connect: {
                  id: "user2",
                },
              },
            },
          ],
        },
      },
    ],
  },
}
