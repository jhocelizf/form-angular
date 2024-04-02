export interface IStudent {
  id: number;
  email: string;
  name: string;
  avatar: string;
}

export class Student implements IStudent {
  constructor(
    public id: number,
    public email: string,
    public name: string,
    public avatar: string,
    public aprobado: boolean
) {}

alternarAprobado(): void {
    this.aprobado = !this.aprobado;
}
}
