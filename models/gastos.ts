import { Model, ObjectId, Schema, model } from "mongoose";

export interface gastos {
  dni: number;
  nombre: string;
  apellido: string;
  descripcion: string;
  monto: number;
}

const gastosSchema = new Schema<gastos>({
  dni: {
    type: Number,
    required: true,
    unique: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  monto: {
    type: Number,
    required: true,
  },
});

const gastosmodel: Model<gastos> = model<gastos>("gastos", gastosSchema);

export default gastosmodel;
