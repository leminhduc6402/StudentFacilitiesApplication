import mongoose from 'mongoose';
import SubjectSchoolYearModel from '../models/subjectOfSchoolYear.js';
import ConflictError from '../response/errors/ConflictError.js';
import { httpStatusCodes } from '../response/httpStatusCodes/index.js';

const SubjectSchoolYearController = {
    create: async (req, res) => {
        const {
            subjectId,
            schoolYearId,
            classId,
            roomId,
            lecturerId,
            creditId,
            totalPrice,
            start,
            end,
            timeStudyOfWeek,
            totalWeek,
            timeFinalExam,
            userCourse,
            slot } = req.body;

        const newSubjectSchoolYear = await SubjectSchoolYearModel.create({
            subjectId: new mongoose.Types.ObjectId(subjectId),
            schoolYearId: new mongoose.Types.ObjectId(schoolYearId),
            classId: new mongoose.Types.ObjectId(classId),
            roomId: new mongoose.Types.ObjectId(roomId),
            lecturerId: new mongoose.Types.ObjectId(lecturerId),
            creditId: new mongoose.Types.ObjectId(creditId),
            totalPrice,
            start,
            end,
            timeStudyOfWeek,
            totalWeek,
            timeFinalExam,
            userCourse,
            slot
        });

        return res.status(httpStatusCodes.CREATED).json({
            status: 'success',
            data: {
                id: newSubjectSchoolYear._id,
                subjectId: newSubjectSchoolYear.subjectId,
                schoolYearId: newSubjectSchoolYear.schoolYearId,
                classId: newSubjectSchoolYear.classId,
                roomId: newSubjectSchoolYear.roomId,
                lecturerId: newSubjectSchoolYear.lecturerId,
                creditId: newSubjectSchoolYear.creditId,
                totalPrice: newSubjectSchoolYear.totalPrice,
                start: newSubjectSchoolYear.start,
                end: newSubjectSchoolYear.end,
                timeStudyOfWeek: newSubjectSchoolYear.timeStudyOfWeek,
                totalWeek: newSubjectSchoolYear.totalWeek,
                timeFinalExam: newSubjectSchoolYear.timeFinalExam,
                userCourse: newSubjectSchoolYear.userCourse,
                slot: newSubjectSchoolYear.slot,
            },
        });
    },
    getAll: async (req, res) => {
        const subjectSchoolYears = await SubjectSchoolYearModel.find()
        .populate('subjectId')
        .populate('schoolYearId')
        .populate('classId')
        .populate('roomId')
        .populate('lecturerId')
        .populate('creditId');

        return res.status(httpStatusCodes.OK).json({
            status: 'success',
            data: subjectSchoolYears,
        });
    },
    getAllByUserCourse: async (req, res) => {
        const { userCourse } = req.body;

        const subjectSchoolYears = await SubjectSchoolYearModel.find({ userCourse })
        .populate('subjectId')
        .populate('schoolYearId')
        .populate('classId')
        .populate('roomId')
        .populate('lecturerId')
        .populate('creditId')

        return res.status(httpStatusCodes.OK).json({
            status: 'success',
            data: subjectSchoolYears
        })
    }
};

export default SubjectSchoolYearController;
