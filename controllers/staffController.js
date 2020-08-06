const Staff = require("../models/staff");

exports.index = async (req, res, next) => {
  try {
    const staff = await Staff.find().sort({ _id: -1 });
    res.status(200).json({
      data: staff,
    });
  } catch (error) {
    res.status(400).json({
      error: {
        message: "เกิดข้อผิดพลาด " + error.message,
      },
    });
  }
};
exports.insert = async (req, res, next) => {
  try {
    const { name, salary } = req.body;
    const staff = new Staff({
      name: name,
      salary: salary,
    });
    await staff.save();
    res.status(200).json({
      message: "บันทึกข้อมูลเรียบร้อยแล้ว",
    });
  } catch (error) {
    res.status(400).json({
      error: {
        message: "เกิดข้อผิดพลาด " + error.message,
      },
    });
  }
};

exports.show = async (req, res, next) => {
  try {
    const { id } = req.params;
    const staff = await Staff.findById(id);
    if (!staff) {
      throw new Error("ไม่พบข้อมูลสมาชิก");
    }
    res.status(200).json({
      data: staff,
    });
  } catch (error) {
    res.status(400).json({
      error: {
        message: "เกิดข้อผิดพลาด " + error.message,
      },
    });
  }
};

exports.destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const staff = await Staff.deleteOne({ _id: id });
    if (staff.deletedCount === 0) {
      throw new Error("ไม่พบข้อมูลสมาชิก");
    }
    res.status(200).json({
      message: "ลบข้อมูลเรียบร้อยแล้ว",
    });
  } catch (error) {
    res.status(400).json({
      error: {
        message: "เกิดข้อผิดพลาด " + error.message,
      },
    });
  }
};

exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, salary } = req.body;
    const staff = await Staff.findById(id);
    staff.name = name;
    staff.salary = salary;
    staff.save();
    if (staff.nModifield === 0) {
      throw new Error("ไม่สามารถอัปเดตข้อมูลได้");
    }
    res.status(201).json({
      message: "อัปเดตข้อมูลเรียบร้อยแล้ว",
    });
  } catch (error) {
    res.status(400).json({
      error: {
        message: "เกิดข้อผิดพลาด " + error.message,
      },
    });
  }
};
