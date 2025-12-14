// src/controllers/userController.js
import { UserDto } from "../dto/userDto.js";
import {
  createUserService,
  getUsersByTypeService ,
  getUserByIdService,
  updateUserService,
  deleteUserService,
  listUsersService
} from "../services/userService.js";

export const createUser = async (req, res) => {
  try {
    const dto = new UserDto(req.body);
    const id = await createUserService(dto);
    res.status(201).json({ message: "User created", id });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const listUsers = async (req, res) => {
  try {
    const users = await listUsersService();
    res.json({ users });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getUsersByType = async (req, res) => {
  try {
    const type = req.query.type; // e.g. "admin"
    const users = await getUsersByTypeService(type);
    res.json({ users });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};
export const getUserById = async (req, res) => {
  try {
    const user = await getUserByIdService(req.params.id);
    res.json({ user });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const dto = new UserDto(req.body);
    const updated = await updateUserService(req.params.id, dto);
    res.json({ message: "User updated", updated });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    await deleteUserService(req.params.id);
    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};
