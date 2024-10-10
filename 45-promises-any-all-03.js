Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(0), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
  ]).then(console.log); // 1

  