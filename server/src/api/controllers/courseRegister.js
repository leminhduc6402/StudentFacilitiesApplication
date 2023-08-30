import CourseRegisterModel from '../models/courseRegister.js';
import ConflictError from '../response/errors/ConflictError.js';
import { httpStatusCodes } from '../response/httpStatusCodes/index.js';
import mongoose from 'mongoose';

const CourseRegisterController = {
    create: async (req, res) => {
        const {
            userId,
            subjectOfSchoolYearId,
        } = req.body;

        const courseRegister = await CourseRegisterModel.findOne({
            userId,
            subjectOfSchoolYearId,
        });

        if (courseRegister) {
            throw new ConflictError('Course Registry already exists !!!');
        }

        const newCourseRegister = await CourseRegisterModel.create({
            userId: new mongoose.Types.ObjectId(userId),
            subjectOfSchoolYearId: new mongoose.Types.ObjectId(subjectOfSchoolYearId),
            midExamScore: 0,
            finalExamScore: 0,
            score10: 0,
            score4: 0,
            scoreC: "",
            finalResult: "",
        });

        return res.status(httpStatusCodes.CREATED).json({
            status: 'success',
            data: newCourseRegister,
        });
    },
    getAll: async (req, res) => {
        const courseRegisters = await CourseRegisterModel.find()
            .populate({
                path: 'subjectOfSchoolYearId',
            })
            .lean();

        return res.status(httpStatusCodes.OK).json({
            status: 'success',
            data: courseRegisters,
        });
    },
    getAllByUserId: async (req, res) => {
        const { userId } = req.params;

        const courseRegisters = await CourseRegisterModel.find(userId) 
        .populate({
            path: 'subjectOfSchoolYearId',
            populate: {
                path: 'subjectId',
            },
        })
        .populate({
            path: 'subjectOfSchoolYearId',
            populate: {
                path: 'classId',
            },
        })


        return res.status(httpStatusCodes.OK).json({
            status: 'success',
            data: courseRegisters
        })
    },
    update: async (req, res) => {
        const { id } = req.params;
        const {
            userId,
            subjectOfSchoolYearId,
          ...data
        } = req.body;
    
        const courseRegisters = await CourseRegisterModel.findByIdAndUpdate(id, {
            userId: new mongoose.Types.ObjectId(userId),
            subjectOfSchoolYearId: new mongoose.Types.ObjectId(subjectOfSchoolYearId),
            ...data,
        });
    
        return res.status(httpStatusCodes.OK).json({
          status: 'success',
          data: courseRegisters,
        });
      },
    delete: async (req, res) => {
        const { id } = req.params;
    
        await CourseRegisterModel.findByIdAndDelete(id);
    
        return res.status(httpStatusCodes.NO_CONTENT).json({});
    },
};

export default CourseRegisterController;
