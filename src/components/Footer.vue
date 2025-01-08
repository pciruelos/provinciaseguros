<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-gray-100 border-t border-black text-xs py-6">
    <div class="container mx-auto px-4 md:px-12 text-left space-y-6">
      <!-- Copyright -->
      <p class="text-gray-700">
        © {{ currentYear }} Provincia Seguros - Todos los derechos reservados
      </p>

      <!-- Legal Section -->
      <div class="text-gray-600 space-y-4 leading-relaxed">
        <p><strong>N° de inscripción en SSN:</strong> 0499</p>
        <p>
          <strong>Organismo de control:</strong>
          <a
            href="https://www.argentina.gob.ar/ssn"
            target="_blank"
            class="text-blue-600 underline hover:text-blue-800"
          >
            www.argentina.gob.ar/ssn
          </a>
        </p>
        <a href="https://www.argentina.gob.ar/superintendencia-de-seguros" target="_blank">
          <img src="../assets/ssn.png" alt="Logo SSN" class="w-64 h-auto" />
        </a>
        <p>
          La entidad aseguradora dispone de un Servicio de Atención al Asegurado que atenderá las
          consultas y reclamos que presenten los tomadores de seguros, asegurados, beneficiarios y/o
          derechohabientes.
        </p>
        <p>
          <strong>El Servicio de Atención al Asegurado está integrado por:</strong>
          <br />
          Responsable: Hernán Alonso Javier - 4346-7300 - Int: 7457 –
          <a
            href="mailto:atencionalaseguradops@pseguros.com.ar"
            class="text-blue-600 underline hover:text-blue-800"
          >
            atencionalaseguradops@pseguros.com.ar
          </a>
          <br />
          Suplente: Carlos Marello - 4346-7300 - Int: 7457 -
          <a
            href="mailto:atencionalaseguradops@pseguros.com.ar"
            class="text-blue-600 underline hover:text-blue-800"
          >
            atencionalaseguradops@pseguros.com.ar
          </a>
        </p>
        <p>
          En caso de que el reclamo no haya sido resuelto o haya sido desestimado, total o
          parcialmente, o que haya sido denegada su admisión, podrá comunicarse con la
          Superintendencia de Seguros de la Nación por teléfono al
          <strong>0800-666-8400</strong>, correo electrónico a
          <a href="mailto:denuncias@ssn.gob.ar" class="text-blue-600 underline hover:text-blue-800">
            denuncias@ssn.gob.ar </a
          >, o formulario web a través de
          <a
            href="https://www.argentina.gob.ar/ssn"
            target="_blank"
            class="text-blue-600 underline hover:text-blue-800"
          >
            www.argentina.gob.ar/ssn </a
          >.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Additional styles if needed */
</style>
