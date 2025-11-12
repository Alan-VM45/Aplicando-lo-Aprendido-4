"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarTarea = exports.buscarPorTitulo = exports.filtrarPorEstado = exports.actualizarTarea = exports.crearTarea = void 0;
const crearTarea = (lista, titulo, descripcion, estado, dificultad, vencimiento) => {
    const nueva = {
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
exports.crearTarea = crearTarea;
const actualizarTarea = (lista, id, cambios) => lista.map(t => t.id === id
    ? Object.freeze(Object.assign(Object.assign(Object.assign({}, t), cambios), { ultimaEdicion: new Date() }))
    : t);
exports.actualizarTarea = actualizarTarea;
const filtrarPorEstado = (lista, estado) => lista.filter(t => t.estado === estado);
exports.filtrarPorEstado = filtrarPorEstado;
const buscarPorTitulo = (lista, clave) => lista.filter(t => t.titulo.toLowerCase().includes(clave.toLowerCase()));
exports.buscarPorTitulo = buscarPorTitulo;
const eliminarTarea = (lista, id) => lista.filter(t => t.id !== id);
exports.eliminarTarea = eliminarTarea;
