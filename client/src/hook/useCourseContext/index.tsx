import { CourseContext } from '../../store/CourseContext';
import { useContext } from 'react';

function useCourseContext() {
    const [course, setCourse]: any = useContext(CourseContext);
    return [course, setCourse]
  }

export default useCourseContext