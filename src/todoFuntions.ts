export type EstadoTarea = "Pendiente" | "En Curso" | "Terminada" | "Cancelada";
export type DificultadTarea = "Fácil" | "Media" | "Difícil";

export interface Tarea {
    id: number;
    titulo: string;
    descripcion?: string;
    estado: EstadoTarea;
    dificultad: DificultadTarea;
    creacion: Date;
    vencimiento?: Date;
    ultimaEdicion: Date;
}

export const crearTarea = (
    lista: readonly Tarea[],
    titulo: string,
    descripcion: string,
    estado: EstadoTarea,
    dificultad: DificultadTarea,
    vencimiento?: Date
): readonly Tarea[] => {
    const nueva: Tarea = {
        id: lista.length ? Math.max(...lista.map(t => t.id)) + 1 : 1,
        titulo,
        descripcion,
        estado,
        dificultad,
        creacion: new Date(),
        ultimaEdicion: new Date(),
        vencimiento,
    };
    return [...lista, Object.freeze(nueva)];
};

export const actualizarTarea = (
    lista: readonly Tarea[],
    id: number,
    cambios: Partial<Tarea>
): readonly Tarea[] =>
    lista.map(t =>
    t.id === id
        ? Object.freeze({ ...t, ...cambios, ultimaEdicion: new Date() })
        : t
    );

export const filtrarPorEstado = (
    lista: readonly Tarea[],
    estado: EstadoTarea
): readonly Tarea[] =>
    lista.filter(t => t.estado === estado);

export const buscarPorTitulo = (
    lista: readonly Tarea[],
    clave: string
): readonly Tarea[] =>
    lista.filter(t => t.titulo.toLowerCase().includes(clave.toLowerCase()));

export const eliminarTarea = (
    lista: readonly Tarea[],
    id: number
): readonly Tarea[] =>
    lista.filter(t => t.id !== id);
