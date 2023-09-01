export const getCurrentWeek = () => {
  const WEEK_ENUM = ['S', 'M', 'T', 'W', 'Th', 'F', 'Sa'];
  const curr = new Date(); // get current date
  curr.setDate(curr.getDate() - curr.getDay());

  const currentWeek = WEEK_ENUM.map((item: string, index) => {
    const obj: any = {
      prefix: item,
      value: new Date(curr).getDate(),
    };
    if (new Date().getDate() === new Date(curr).getDate()) {
      obj.isToday = true;
    }
    curr.setDate(curr.getDate() + 1);
    return obj;
  });

  return currentWeek;
};

export const handleDatetime = (datetime: string, short = false) => {
  if (short) {
    return new Date(datetime).toLocaleString('en', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  }
  return new Date(datetime).toLocaleString();
};

export const handleArrayTimeSchedule = (data: string) => {
  const ENUM = [
    'Chủ nhật',
    'Thứ 2',
    'Thứ 3',
    'Thứ 4',
    'Thứ 5',
    'Thứ 6',
    'Thứ 7',
  ];
  return JSON.parse(data)
    .map((item: any) => ENUM[item])
    .join(' & ');
};
