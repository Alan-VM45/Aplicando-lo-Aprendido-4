import { preguntar } from "./interfaces";
import {
    crearTarea,
    actualizarTarea,
    filtrarPorEstado,
    buscarPorTitulo,
    Tarea,
    EstadoTarea,
    DificultadTarea
    } from "./todoFuntions";

    let tareas: readonly Tarea[] = [];

    async function agregarTarea(): Promise<readonly Tarea[]> {
    console.clear();
    console.log("=== Crear nueva tarea ===");

    const titulo = await preguntar("Título: ");
    const descripcion = await preguntar("Descripción: ");
    const estadoInput = await preguntar("Estado (Pendiente/En Curso/Terminada/Cancelada): ");
    const dificultadInput = await preguntar("Dificultad (Fácil/Media/Difícil): ");
    const vencimientoInput = await preguntar("Fecha de vencimiento (opcional, formato YYYY-MM-DD): ");

    const estado = estadoInput as EstadoTarea;
    const dificultad = dificultadInput as DificultadTarea;
    const vencimiento = vencimientoInput ? new Date(vencimientoInput) : undefined;

    return crearTarea(tareas, titulo, descripcion, estado, dificultad, vencimiento);
}

async function verTareas(): Promise<void> {
    console.clear();
    console.log("=== Todas las tareas ===");
    tareas.forEach(t => console.log(`[${t.id}] ${t.titulo} (${t.estado})`));
    await preguntar("\nPresiona Enter para volver...");
}

async function buscarTarea(): Promise<void> {
    console.clear();
    const clave = await preguntar("Ingrese parte del título: ");
    const resultados = buscarPorTitulo(tareas, clave);
    resultados.forEach(t => console.log(`[${t.id}] ${t.titulo}`));
    await preguntar("\nPresiona Enter para volver...");
}

async function main(): Promise<void> {
    let salir = false;
    while (!salir) {
        console.clear();
        console.log("=== ToDo List (Funcional) ===");
        console.log("1. Ver tareas");
        console.log("2. Agregar tarea");
        console.log("3. Buscar tarea");
        console.log("4. Salir");

        const opcion = await preguntar("> ");
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
