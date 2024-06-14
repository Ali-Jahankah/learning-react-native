export const changeColorHandler = (setColor) => {
  const colors = [
    '#ff8c00',
    '#f2402d',
    '#40edf9',
    '#ffd500',
    '#0b82b0',
    '#262724',
    '#ec8bcf',
    '#dd17fc',
    '#2bed48',
    '#ffffffa3'
  ];
  const colorIndex = Math.floor(Math.random() * 10);
  const color = colors[colorIndex];
  setColor(color);
};
export const userHandler = (newUser, action, setUsers, users, id) => {
  if (action === 'add') {
    setUsers((prev) => {
      console.log(newUser);
      return [...prev, newUser];
    });
  } else if (action === 'remove') {
    const filteredUsers = users.filter((item) => item.id !== id);
    setUsers(filteredUsers);
  }
};
