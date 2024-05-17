import { Request, Response } from "express";
import gastosmodel, { gastos } from "../models/gastos";

export const getGastos = async ({}, res: Response) => {
  const gasto = await gastosmodel.find();

  res.json({ gasto });

  console.log("Gasto enviados");
};

export const getGastosDni = async (req: Request, res: Response) => {
  const { dni } = req.params;

  const gasto: gastos | null = await gastosmodel.findOne({ dni: dni });

  res.json({ gasto });
};

export const CrearGastos = async (req: Request, res: Response) => {
  const gastosdatos: gastos = req.body;

  const { dni, nombre, apellido, descripcion, monto } = gastosdatos;

  if (!dni || !nombre || !apellido || !descripcion || !monto) {
    res.json({
      msg: "Faltan datos necesarios",
    });
    return;
  }
  console.log("okkkkk");
  const nuevogasto = new gastosmodel({
    dni,
    nombre,
    apellido,
    descripcion,
    monto: gastosdatos,
  });

  await nuevogasto.save();

  res.json({
    msg: "Gasto guardado con exito",
    gastosmodel,
  });

  console.log("Gasto creado con éxito");
};
