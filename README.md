# Aplicando-lo-Aprendido-4

ToDo List en TypeScript (Programación Funcional)
Objetivo

Crear una aplicación de lista de tareas (ToDo List) usando TypeScript y aplicando los principios de la programación funcional:
Usar funciones puras.
Mantener la inmutabilidad de los datos.
Reemplazar bucles por map, filter, reduce.
Separar funciones puras de las impuras (entrada/salida).

Conceptos principales

Funciones puras: todas las funciones que manejan tareas no modifican datos globales ni producen efectos secundarios.
Inmutabilidad: los objetos se copian en lugar de modificarse.
Funciones de orden superior: se usan para filtrar, buscar y actualizar tareas.
Composición: se combinan funciones para operaciones más complejas, por ejemplo:
compose(
  (tareas) => buscarPorTitulo(tareas, clave),
  (tareas) => filtrarPorEstado(tareas, "Pendiente")
)(lista);

Estructura del proyecto
src/
├── main.ts            // Entrada del programa
├── todoFunctions.ts   // Lógica funcional pura
├── interfaces.ts      // Entrada/salida (readline)

Cómo ejecutar

Instalar dependencias:
npm install

Compilar TypeScript:
npx tsc

Ejecutar:
node dist/main.js


Funciones principales
crearTarea() → Crea una nueva tarea.
actualizarTarea() → Actualiza sin mutar el original.
eliminarTarea() → Elimina una tarea por ID.
filtrarPorEstado() → Muestra tareas por estado.
buscarPorTitulo() → Busca tareas por palabra clave.
compose() → Combina funciones.

Conclusión

El programa demuestra cómo aplicar la programación funcional para crear una aplicación simple, limpia y sin mutabilidad, mejorando la claridad y la mantenibilidad del código.