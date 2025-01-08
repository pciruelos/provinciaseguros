import api from '@/services/api'

export async function getAllSucursales() {
  return api
    .get('https://apis.datos.gob.ar/georef/api/provincias')
    .then((response) => response.data.provincias)
    .catch((error) => {
      throw error
    })
}
