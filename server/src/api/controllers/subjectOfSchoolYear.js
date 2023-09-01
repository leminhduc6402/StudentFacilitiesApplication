import mongoose from 'mongoose';
import SOSYModel from '../models/subjectOfSchoolYear.js';
import CreditModel from '../models/credit.js';
import SubjectModel from '../models/subject.js';
import ConflictError from '../response/errors/ConflictError.js';
import { httpStatusCodes } from '../response/httpStatusCodes/index.js';
import { createAllDateStudyFromTime } from '../utils/calcDate/index.js';

const SOSYController = {
  create: async (req, res) => {
    const {
      subjectId,
      schoolYearId,
      classId,
      lecturerId,
      roomId,
      creditId,
      ...data
    } = req.body;

    const lecturerIdCheck = lecturerId === 'NONE' ? null : lecturerId;

    const sosy = await SOSYModel.findOne({
      subjectId,
      schoolYearId,
      classId,
      lecturerId: lecturerIdCheck,
      roomId,
      creditId,
    });

    if (sosy) {
      throw new ConflictError('Subject already exists !!!');
    }

    const credit = await CreditModel.findById(creditId);
    const subject = await SubjectModel.findById(subjectId);

    const totalPrice = parseInt(credit.price) * parseInt(subject.credit);

    const allDateStudy = createAllDateStudyFromTime(
      data.start,
      data.totalWeek,
      data.timeStudyOfWeek[0]
    );

    const newSosy = await SOSYModel.create({
      ...data,
      subjectId: new mongoose.Types.ObjectId(subjectId),
      schoolYearId: new mongoose.Types.ObjectId(schoolYearId),
      classId: new mongoose.Types.ObjectId(classId),
      lecturerId:
        lecturerIdCheck == null
          ? null
          : new mongoose.Types.ObjectId(lecturerId),
      roomId: new mongoose.Types.ObjectId(roomId),
      creditId: new mongoose.Types.ObjectId(creditId),
      totalPrice,
      allDateStudy,
    });

    return res.status(httpStatusCodes.CREATED).json({
      status: 'success',
      data: newSosy,
    });
  },
  getAll: async (req, res) => {
    const sosys = await SOSYModel.find()
      .populate({
        path: 'subjectId',
        select: '_id departmentId name code',
      })
      .populate({
        path: 'schoolYearId',
        select: '_id name',
      })
      .populate({
        path: 'classId',
        select: '_id name',
      })
      .populate({
        path: 'roomId',
        select: '_id name',
      })
      .populate({
        path: 'lecturerId',
        select: '_id fullName username',
      })
      .populate({
        path: 'creditId',
        select: '_id price',
      })
      .lean();

    return res.status(httpStatusCodes.OK).json({
      status: 'success',
      data: sosys,
    });
  },
  getAllByUserCourse: async (req, res) => {
    const { course, classId } = req.params;

    const subjectSchoolYears = await SOSYModel.find({
      userCourse: course,
    })
      .populate('subjectId')
      .populate('schoolYearId')
      .populate('classId')
      .populate('roomId')
      .populate('lecturerId')
      .populate('creditId');

    const classIdToFilter = new mongoose.Types.ObjectId(classId);
    const filteredArraySosy = subjectSchoolYears.filter(
      (item) => item.classId._id.toString() == classIdToFilter.toString()
    );

    return res.status(httpStatusCodes.OK).json({
      status: 'success',
      data: filteredArraySosy,
    });
  },
  getAllByClassId: async (req, res) => {
    const { classId } = req.params;

    const subjectSchoolYears = await SOSYModel.find({
      classId: classId,
    })
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
  getAllByDepartmentId: async (req, res) => {
    const { departmentId } = req.params;

    const subjectSchoolYears = await SOSYModel.find({
      departmentId: departmentId,
    })
      .populate('subjectId')
      .populate('schoolYearId')
      .populate('classId')
      .populate('roomId')
      .populate('lecturerId')
      .populate('creditId');

    const departmentIdToFilter = new mongoose.Types.ObjectId(departmentId);
    const filteredArraySosy = subjectSchoolYears.filter(
      (item) =>
        item.subjectId.departmentId.toString() ==
        departmentIdToFilter.toString()
    );

    return res.status(httpStatusCodes.OK).json({
      status: 'success',
      data: filteredArraySosy,
    });
  },
  getAllBySubjectId: async (req, res) => {
    const { subjectId } = req.params;

    const subjectSchoolYears = await SOSYModel.find({
      subjectId: subjectId,
    })
      .populate('subjectId')
      .populate('schoolYearId')
      .populate('classId')
      .populate('roomId')
      .populate('lecturerId')
      .populate('creditId');

    console.log(subjectSchoolYears);

    return res.status(httpStatusCodes.OK).json({
      status: 'success',
      data: subjectSchoolYears,
    });
  },
  getAllBySchoolyearAndLecturer: async (req, res) => {
    const { schoolyear, lecturer, subject } = req.query;

    let subjectSchoolYears = await SOSYModel.find({
      schoolYearId: schoolyear,
      lecturerId: lecturer,
    })
      .populate({ path: 'subjectId', select: 'name' })
      .populate({ path: 'classId', select: 'name' })
      .select('subjectId classId')
      .lean();

    const uniqueSubjects = {};

    subjectSchoolYears.forEach((item) => {
      const subjectId = item.subjectId._id;
      const subjectName = item.subjectId.name;

      if (!uniqueSubjects[subjectId]) {
        uniqueSubjects[subjectId] = {
          _id: subjectId,
          name: subjectName,
        };
      }
    });

    let uniqueArray = Object.values(uniqueSubjects);

    if (subject) {
      uniqueArray = subjectSchoolYears.filter((item) => {
        if (item.subjectId._id == subject)
          return {
            _id: item._id,
            classId: {
              _id: item.classId._id,
              name: item.classId.name,
            },
          };
      });
    }

    return res.status(httpStatusCodes.OK).json({
      status: 'success',
      data: uniqueArray,
    });
  },
  getSosyWithoutLecturer: async (req, res) => {
    const { schoolyear, department } = req.query;

    let sosys = await SOSYModel.find({
      lecturerId: null,
    })
      .populate({
        path: 'subjectId',
        select: 'departmentId code name credit',
      })
      .populate({
        path: 'classId',
        select: 'name',
      })
      .select('-createdAt -__v -updatedAt');

    if (schoolyear.trim()) {
      sosys = sosys.filter((item) => item.schoolYearId == schoolyear);
    }

    if (department.trim()) {
      sosys = sosys.filter((item) => item.subjectId.departmentId == department);
    }

    return res.status(httpStatusCodes.OK).json({
      status: 'success',
      data: sosys,
    });
  },
  update: async (req, res) => {
    const { id } = req.params;
    const {
      subjectId,
      schoolYearId,
      classId,
      roomId,
      lecturerId,
      creditId,
      ...data
    } = req.body;

    const lecturerIdCheck = lecturerId === 'NONE' ? null : lecturerId;

    const credit = await CreditModel.findById(creditId);
    const subject = await SubjectModel.findById(subjectId);

    const totalPrice = parseInt(credit.price) * parseInt(subject.credit);

    const allDateStudy = createAllDateStudyFromTime(
      data.start,
      data.totalWeek,
      data.timeStudyOfWeek[0]
    );

    const sosy = await SOSYModel.findByIdAndUpdate(id, {
      ...data,
      subjectId: new mongoose.Types.ObjectId(subjectId),
      schoolYearId: new mongoose.Types.ObjectId(schoolYearId),
      classId: new mongoose.Types.ObjectId(classId),
      roomId: new mongoose.Types.ObjectId(roomId),
      lecturerId:
        lecturerIdCheck == null
          ? null
          : new mongoose.Types.ObjectId(lecturerId),
      creditId: new mongoose.Types.ObjectId(creditId),
      totalPrice,
      allDateStudy,
    });

    await subject.save();

    return res.status(httpStatusCodes.OK).json({
      status: 'success',
      data: sosy,
    });
  },
  updateLecturer: async (req, res) => {
    const { idSosy, idLecturer } = req.body;

    const sosy = await SOSYModel.findById(idSosy);

    if (!sosy) {
      throw new ConflictError('Subject not found!');
    }

    if (sosy.lecturerId) {
      throw new ConflictError('Subject haved lecturer!');
    }

    sosy.lecturerId = new mongoose.Types.ObjectId(idLecturer);
    await sosy.save();

    return res.status(httpStatusCodes.OK).json({
      status: 'success',
      data: sosy,
    });
  },
  updateSlotRemain: async (req, res) => {
    const { idSosy, slotRemain } = req.body;
    const sosy = await SOSYModel.findById(idSosy);

    if (!sosy) {
      throw new ConflictError('Subject not found!');
    }

    sosy.slotRemain = slotRemain;
    await sosy.save();

    return res.status(httpStatusCodes.OK).json({
      status: 'success',
      data: sosy,
    });
  },
  delete: async (req, res) => {
    const { id } = req.params;

    await SOSYModel.findByIdAndDelete(id);

    return res.status(httpStatusCodes.NO_CONTENT).json({});
  },
};

export default SOSYController;
