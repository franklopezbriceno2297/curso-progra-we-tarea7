<template>
  <div class="container">
    <div class="row">
      <div>
        <h1 class="my-4">Lista de Profesores</h1>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Correo</th>
              <th scope="col">Teléfono</th>
              <th scope="col">Grado Académico</th>
              <th scope="col">Acción</th>
            </tr>
          </thead>
          <tbody v-for="(teacher, i) in teachers" :key="teacher.id">
            <tr>
              <th scope="row">{{(i + 1)}}</th>
              <td>{{teacher.name}}</td>
              <td>{{teacher.email}}</td>
              <td>{{teacher.phone}}</td>
              <td>{{teacher.degree}}</td>
              <td>
                <button :disabled="(editMode || addMode)" class="btn btn-sm btn-warning" @click="activateEditMode">Editar</button>
                <button :disabled="(editMode || addMode)" class="btn btn-sm btn-danger mx-2" @click="deleteTeacher(teacher.id)">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-if="addMode">
        A
      </div>
      <div v-else-if="editMode">
        B
      </div>
      <div v-else>
        <button class="btn btn-success mt-2" @click="activateAddMode">Agregar Profesor</button>
      </div>
    </div>
  </div>
</template>

<script>
import teachers from '@/data/teachers'

export default {
  name: 'Teachers',
  data: () => ({
    teachers,
    editMode: false,
    addMode: false
  }),
  methods: {
    activateAddMode () {
      this.addMode = true
      this.editMode = false
    },
    activateEditMode () {
      this.addMode = false
      this.editMode = true
    },
    deleteTeacher (id) {
      this.teachers = this.teachers.filter(teacher => (teacher.id !== id))
    }
  }
}
</script>

<style>
</style>
