export const getTotalWeekOfYear = () => {
  const year = new Date().getFullYear();
  const januaryFirst: any = new Date(year, 0, 1);
  const decemberThirtyFirst: any = new Date(year, 11, 31);
  const daysPassed =
    (decemberThirtyFirst - januaryFirst) / (24 * 60 * 60 * 1000) + 1;
  const weeks = Math.floor(daysPassed / 7);
  return weeks;
};

export const getCurrentWeekOfYear = () => {
  const today: any = new Date();
  const year = today.getFullYear();
  const firstDayOfYear: any = new Date(year, 0, 1);
  const daysPassed =
    Math.floor((today - firstDayOfYear) / (24 * 60 * 60 * 1000)) + 1;
  const currentWeek = Math.ceil(daysPassed / 7);

  return currentWeek;
};

export const getCurrentWeekList = (
  weekNumber: number = getCurrentWeekOfYear()
) => {
  if (weekNumber < 1 || weekNumber > 53) {
    throw new Error(
      'Số tuần không hợp lệ. Số tuần phải nằm trong khoảng từ 1 đến 53!'
    );
  }

  const WEEK_ENUM = ['S', 'M', 'T', 'W', 'Th', 'F', 'Sa'];
  const startDate = new Date(new Date().getFullYear(), 0, 1);
  startDate.setDate(startDate.getDate() - startDate.getDay());

  const daysToAdd = (weekNumber - 1) * 7;
  startDate.setDate(startDate.getDate() + daysToAdd);

  const currentWeek = WEEK_ENUM.map((item, index) => {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + index);

    const obj: any = {
      prefix: item,
      date: currentDate.getDate(),
      month: currentDate.getMonth() + 1,
      year: currentDate.getFullYear(),
    };

    if (
      currentDate.getDate() === new Date().getDate() &&
      currentDate.getMonth() === new Date().getMonth() &&
      currentDate.getFullYear() === new Date().getFullYear()
    ) {
      obj.isToday = true;
    }

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
