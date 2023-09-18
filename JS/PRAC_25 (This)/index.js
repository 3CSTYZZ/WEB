let me = {
  birthDate: { year: 1998, month: 8, day: 31 },
  getAge() {
    let now = new Date();
    let born = new Date(
      this.birthDate.year,
      this.birthDate.month + 1,
      this.birthDate.day
    );
    let diffInMilliseconds = now.getTime() - born.getTime();
    return Math.floor(diffInMilliseconds / 1000 / 60 / 60 / 24 / 365.25);
  },
};

console.log(me.getAge())