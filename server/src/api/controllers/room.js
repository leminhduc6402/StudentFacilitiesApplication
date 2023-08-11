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
};

export default RoomController;
