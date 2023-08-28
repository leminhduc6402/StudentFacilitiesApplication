import { useState } from 'react';
import { Context, Course } from './Context';

function CourseProvider({children} : React.PropsWithChildren) {
    const [course, setCourse] = useState<Course>({
      subjectId: {
        departmentId: '',
        name: '',
        code: '',
        credit: 0,
      },
      schoolYearId: {
        name: '',
        start: '',
        end: '',
      },
      classId: {
        name: '',
      },
      roomId: {
        name: '',
      },
      lecturerId: {
        username: '',
        password: '',
        fullName: '',
        role: '',
        userCourse: '',
        studentCode: '',
      },
      creditId: {
        price: 0,
        createdAt: '',
        updatedAt: '',
      },
      totalPrice: 0,
      start: '',
      end: '',
      timeStudyOfWeek: [],
      totalWeek: 0,
      timeFinalExam: '',
      userCourse: '',
      slot: 0,
    });
    return (
      <Context.Provider value={[course, setCourse] as any}>
        {children}
      </Context.Provider>
    );
  }

export default CourseProvider;