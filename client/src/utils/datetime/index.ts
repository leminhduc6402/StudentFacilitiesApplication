export const handleDatetime = (datetime: string) => {
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
