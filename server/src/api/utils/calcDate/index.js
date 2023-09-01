export function createAllDateStudyFromTime(start, totalWeek, timeStudyOfWeek) {
  const startTime = new Date(start);
  const endTime = new Date(startTime);
  endTime.setDate(endTime.getDate() + parseInt(totalWeek) * 7);

  const allDateStudy = [];
  while (startTime <= endTime) {
    if (timeStudyOfWeek.includes(startTime.getDay())) {
      allDateStudy.push(new Date(startTime));
    }

    startTime.setDate(startTime.getDate() + 1);
  }

  return allDateStudy;
}

export function findStudyDate(dataArr, date, month, year) {
  return dataArr?.find((item) => {
    const time = new Date(item);

    return (
      time.getDate() == date &&
      time.getMonth() + 1 == month &&
      time.getFullYear() == year
    );
  });
}
