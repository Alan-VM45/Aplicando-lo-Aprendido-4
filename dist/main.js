"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("./interfaces");
const todoFuntions_1 = require("./todoFuntions");
let tareas = [];
async function agregarTarea() {
    console.clear();
    console.log("=== Crear nueva tarea ===");
    const titulo = await (0, interfaces_1.preguntar)("Título: ");
    const descripcion = await (0, interfaces_1.preguntar)("Descripción: ");
    const estadoInput = await (0, interfaces_1.preguntar)("Estado (Pendiente/En Curso/Terminada/Cancelada): ");
    const dificultadInput = await (0, interfaces_1.preguntar)("Dificultad (Fácil/Media/Difícil): ");
    const vencimientoInput = await (0, interfaces_1.preguntar)("Fecha de vencimiento (opcional, formato YYYY-MM-DD): ");
    const estado = estadoInput;
    const dificultad = dificultadInput;
    const vencimiento = vencimientoInput ? new Date(vencimientoInput) : undefined;
    return (0, todoFuntions_1.crearTarea)(tareas, titulo, descripcion, estado, dificultad, vencimiento);
}
async function verTareas() {
    console.clear();
    console.log("=== Todas las tareas ===");
    tareas.forEach(t => console.log(`[${t.id}] ${t.titulo} (${t.estado})`));
    await (0, interfaces_1.preguntar)("\nPresiona Enter para volver...");
}
async function buscarTarea() {
    console.clear();
    const clave = await (0, interfaces_1.preguntar)("Ingrese parte del título: ");
    const resultados = (0, todoFuntions_1.buscarPorTitulo)(tareas, clave);
    resultados.forEach(t => console.log(`[${t.id}] ${t.titulo}`));
    await (0, interfaces_1.preguntar)("\nPresiona Enter para volver...");
}
async function main() {
    let salir = false;
    while (!salir) {
        console.clear();
        console.log("=== ToDo List (Funcional) ===");
        console.log("1. Ver tareas");
        console.log("2. Agregar tarea");
        console.log("3. Buscar tarea");
        console.log("4. Salir");
        const opcion = await (0, interfaces_1.preguntar)("> ");
        switch (opcion) {
            case "1":
                await verTareas();
                break;
            case "2":
                tareas = await agregarTarea();
                break;
            case "3":
                await buscarTarea();
                break;
            case "4":
                salir = true;
                break;
            default:
                console.log("Opción inválida.");
                break;
        }
    }
}
main();
