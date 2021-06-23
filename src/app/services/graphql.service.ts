import { Injectable } from '@angular/core';

import { API, graphqlOperation } from 'aws-amplify';
import { createFotos, updateFotos, deleteFotos } from '../../graphql/mutations';
import { listFotoss } from '../../graphql/queries';
import { Fotos } from '../interfaces/fotos';


@Injectable({
  providedIn: 'root',
})
export class GraphqlService {
  constructor() {}

  async createFotos(foto: Fotos) {
    console.log('Crear datos de foto', foto);
    /* create a Foto */
    await API.graphql(graphqlOperation(createFotos, {input: foto}));
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  async updateFotos(datos: {}) {
    console.log('Actualizar datos de foto', datos);
    /* update a todo */
    await API.graphql(graphqlOperation(updateFotos, { input: datos}));
  }

  async deleteFotos(cId: string) {
    console.log('Borrar foto por ID', cId);
    /* delete a todo */
    await API.graphql(graphqlOperation(deleteFotos, { input: { id: cId }}));
  }

  async listarFotos() {
    const allFotos = await API.graphql(graphqlOperation(listFotoss));
    return allFotos;
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  async listarFotosFilter(ifilter: {}) {
    const filterFotos = await API.graphql(graphqlOperation(listFotoss, {filter: ifilter}));
    console.log('Filter Fotos', filterFotos);
    return filterFotos;
  }

}
