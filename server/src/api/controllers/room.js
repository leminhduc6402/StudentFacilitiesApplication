import RoomModel from '../models/room.js';
import ConflictError from '../response/errors/ConflictError.js';
import { httpStatusCodes } from '../response/httpStatusCodes/index.js';

const RoomController = {
  create: async (req, res) => {
    const { name } = req.body;

    const roomCurr = await RoomModel.findOne({ name });

    if (roomCurr) {
      throw new ConflictError('Room already exists !!!');
    }

    const newRoom = await RoomModel.create({ name });

    return res.status(httpStatusCodes.CREATED).json({
      status: 'success',
      data: {
        id: newRoom._id,
        name: newRoom.name,
      },
    });
  },
  getAll: async (req, res) => {
    const rooms = await RoomModel.find();

    return res.status(httpStatusCodes.OK).json({
      status: 'success',
      data: rooms,
    });
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const room = await RoomModel.findById(id);
    room.name = name;
    await room.save();

    return res.status(httpStatusCodes.OK).json({
      status: 'success',
      data: room,
    });
  },
  delete: async (req, res) => {
    const { id } = req.params;

    await RoomModel.findByIdAndDelete(id);

    return res.status(httpStatusCodes.NO_CONTENT).json({});
  },
};

export default RoomController;
