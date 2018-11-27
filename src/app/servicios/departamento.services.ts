import { Injectable } from "@angular/core";
import { DepartamentosComponent } from "../components/departamentos/departamentos.component";

@Injectable()
export class DepartamentoService {
  private departamentos: Departamento[];
  private solver: any = {
    departamentos: [
      {
        atletas: [
          {
            nombre: "Fabian Cardena",
            nacionalidad: "Argentina",
            deporte: "futbol",
            genero: "MASCULINO"
          },
          {
            nombre: "Leonel Vangioni",
            nacionalidad: "Argentina",
            deporte: "futbol",
            genero: "MASCULINO"
          },
          {
            nombre: "Franco Armani",
            nacionalidad: "Argentina",
            deporte: "futbol",
            genero: "MASCULINO"
          },
          {
            nombre: "Gonzalo Martinez",
            nacionalidad: "Argentina",
            deporte: "futbol",
            genero: "MASCULINO"
          }
        ],
        ocupados: 4,
        id: 1
      },
      {
        atletas: [
          {
            nombre: "Federico Araujo",
            nacionalidad: "Uruguay",
            deporte: "voley",
            genero: "MASCULINO"
          },
          {
            nombre: "Federico Briano",
            nacionalidad: "Uruguay",
            deporte: "voley",
            genero: "MASCULINO"
          },
          {
            nombre: "Gast�n Bald",
            nacionalidad: "Uruguay",
            deporte: "voley",
            genero: "MASCULINO"
          },
          {
            nombre: "Pablo Rodr�guez",
            nacionalidad: "Uruguay",
            deporte: "voley",
            genero: "MASCULINO"
          }
        ],
        ocupados: 4,
        id: 2
      },
      {
        atletas: [
          {
            nombre: "Emanuel Ginobili",
            nacionalidad: "Argentina",
            deporte: "basquet",
            genero: "MASCULINO"
          },
          {
            nombre: "Gabriel Mercado",
            nacionalidad: "Argentina",
            deporte: "futbol",
            genero: "MASCULINO"
          },
          {
            nombre: "Rafael Becker",
            nacionalidad: "Brasil",
            deporte: "golf",
            genero: "MASCULINO"
          },
          {
            nombre: "Teo Gutierrez",
            nacionalidad: "Colombia",
            deporte: "futbol",
            genero: "MASCULINO"
          }
        ],
        ocupados: 4,
        id: 3
      },
      {
        atletas: [
          {
            nombre: "Diego Laborde",
            nacionalidad: "Colombia",
            deporte: "hockey",
            genero: "MASCULINO"
          }
        ],
        ocupados: 1,
        id: 4
      },
      {
        atletas: [
          {
            nombre: "Macarena Sanz",
            nacionalidad: "Argentina",
            deporte: "futbol",
            genero: "FEMENINO"
          },
          {
            nombre: "Analia Elaskar",
            nacionalidad: "Argentina",
            deporte: "futbol",
            genero: "FEMENINO"
          },
          {
            nombre: "Gabriela Escobar",
            nacionalidad: "Argentina",
            deporte: "futbol",
            genero: "FEMENINO"
          },
          {
            nombre: "Antonela Rios",
            nacionalidad: "Argentina",
            deporte: "futbol",
            genero: "FEMENINO"
          }
        ],
        ocupados: 4,
        id: 5
      },
      {
        atletas: [
          {
            nombre: "Valentina Galiano",
            nacionalidad: "Argentina",
            deporte: "voley",
            genero: "FEMENINO"
          },
          {
            nombre: "Lidia Morales",
            nacionalidad: "Bolivia",
            deporte: "golf",
            genero: "FEMENINO"
          },
          {
            nombre: "Flavia Gaullo",
            nacionalidad: "Brasil",
            deporte: "basquet",
            genero: "FEMENINO"
          },
          {
            nombre: "Rosangela Lopez",
            nacionalidad: "Colombia",
            deporte: "futbol",
            genero: "FEMENINO"
          }
        ],
        ocupados: 4,
        id: 6
      },
      {
        atletas: [
          {
            nombre: "Paola Valenzuela",
            nacionalidad: "Colombia",
            deporte: "hockey",
            genero: "FEMENINO"
          },
          {
            nombre: "Leonor Abtt",
            nacionalidad: "Peru",
            deporte: "futbol",
            genero: "FEMENINO"
          },
          {
            nombre: "Monica Rios",
            nacionalidad: "Peru",
            deporte: "voley",
            genero: "FEMENINO"
          }
        ],
        ocupados: 3,
        id: 7
      }
    ],
    depto_masculino: [
      {
        atletas: [
          {
            nombre: "Fabian Cardena",
            nacionalidad: "Argentina",
            deporte: "futbol",
            genero: "MASCULINO"
          },
          {
            nombre: "Leonel Vangioni",
            nacionalidad: "Argentina",
            deporte: "futbol",
            genero: "MASCULINO"
          },
          {
            nombre: "Franco Armani",
            nacionalidad: "Argentina",
            deporte: "futbol",
            genero: "MASCULINO"
          },
          {
            nombre: "Gonzalo Martinez",
            nacionalidad: "Argentina",
            deporte: "futbol",
            genero: "MASCULINO"
          }
        ],
        ocupados: 4,
        id: 1
      },
      {
        atletas: [
          {
            nombre: "Federico Araujo",
            nacionalidad: "Uruguay",
            deporte: "voley",
            genero: "MASCULINO"
          },
          {
            nombre: "Federico Briano",
            nacionalidad: "Uruguay",
            deporte: "voley",
            genero: "MASCULINO"
          },
          {
            nombre: "Gast�n Bald",
            nacionalidad: "Uruguay",
            deporte: "voley",
            genero: "MASCULINO"
          },
          {
            nombre: "Pablo Rodr�guez",
            nacionalidad: "Uruguay",
            deporte: "voley",
            genero: "MASCULINO"
          }
        ],
        ocupados: 4,
        id: 2
      },
      {
        atletas: [
          {
            nombre: "Emanuel Ginobili",
            nacionalidad: "Argentina",
            deporte: "basquet",
            genero: "MASCULINO"
          },
          {
            nombre: "Gabriel Mercado",
            nacionalidad: "Argentina",
            deporte: "futbol",
            genero: "MASCULINO"
          },
          {
            nombre: "Rafael Becker",
            nacionalidad: "Brasil",
            deporte: "golf",
            genero: "MASCULINO"
          },
          {
            nombre: "Teo Gutierrez",
            nacionalidad: "Colombia",
            deporte: "futbol",
            genero: "MASCULINO"
          }
        ],
        ocupados: 4,
        id: 3
      },
      {
        atletas: [
          {
            nombre: "Diego Laborde",
            nacionalidad: "Colombia",
            deporte: "hockey",
            genero: "MASCULINO"
          }
        ],
        ocupados: 1,
        id: 4
      }
    ],
    depto_femenino: [
      {
        atletas: [
          {
            nombre: "Macarena Sanz",
            nacionalidad: "Argentina",
            deporte: "futbol",
            genero: "FEMENINO"
          },
          {
            nombre: "Analia Elaskar",
            nacionalidad: "Argentina",
            deporte: "futbol",
            genero: "FEMENINO"
          },
          {
            nombre: "Gabriela Escobar",
            nacionalidad: "Argentina",
            deporte: "futbol",
            genero: "FEMENINO"
          },
          {
            nombre: "Antonela Rios",
            nacionalidad: "Argentina",
            deporte: "futbol",
            genero: "FEMENINO"
          }
        ],
        ocupados: 4,
        id: 5
      },
      {
        atletas: [
          {
            nombre: "Valentina Galiano",
            nacionalidad: "Argentina",
            deporte: "voley",
            genero: "FEMENINO"
          },
          {
            nombre: "Lidia Morales",
            nacionalidad: "Bolivia",
            deporte: "golf",
            genero: "FEMENINO"
          },
          {
            nombre: "Flavia Gaullo",
            nacionalidad: "Brasil",
            deporte: "basquet",
            genero: "FEMENINO"
          },
          {
            nombre: "Rosangela Lopez",
            nacionalidad: "Colombia",
            deporte: "futbol",
            genero: "FEMENINO"
          }
        ],
        ocupados: 4,
        id: 6
      },
      {
        atletas: [
          {
            nombre: "Paola Valenzuela",
            nacionalidad: "Colombia",
            deporte: "hockey",
            genero: "FEMENINO"
          },
          {
            nombre: "Leonor Abtt",
            nacionalidad: "Peru",
            deporte: "futbol",
            genero: "FEMENINO"
          },
          {
            nombre: "Monica Rios",
            nacionalidad: "Peru",
            deporte: "voley",
            genero: "FEMENINO"
          }
        ],
        ocupados: 3,
        id: 7
      }
    ],
    a_femeninos: [
      {
        nombre: "Macarena Sanz",
        nacionalidad: "Argentina",
        deporte: "futbol",
        genero: "FEMENINO"
      },
      {
        nombre: "Analia Elaskar",
        nacionalidad: "Argentina",
        deporte: "futbol",
        genero: "FEMENINO"
      },
      {
        nombre: "Gabriela Escobar",
        nacionalidad: "Argentina",
        deporte: "futbol",
        genero: "FEMENINO"
      },
      {
        nombre: "Antonela Rios",
        nacionalidad: "Argentina",
        deporte: "futbol",
        genero: "FEMENINO"
      },
      {
        nombre: "Valentina Galiano",
        nacionalidad: "Argentina",
        deporte: "voley",
        genero: "FEMENINO"
      },
      {
        nombre: "Lidia Morales",
        nacionalidad: "Bolivia",
        deporte: "golf",
        genero: "FEMENINO"
      },
      {
        nombre: "Flavia Gaullo",
        nacionalidad: "Brasil",
        deporte: "basquet",
        genero: "FEMENINO"
      },
      {
        nombre: "Rosangela Lopez",
        nacionalidad: "Colombia",
        deporte: "futbol",
        genero: "FEMENINO"
      },
      {
        nombre: "Paola Valenzuela",
        nacionalidad: "Colombia",
        deporte: "hockey",
        genero: "FEMENINO"
      },
      {
        nombre: "Leonor Abtt",
        nacionalidad: "Peru",
        deporte: "futbol",
        genero: "FEMENINO"
      },
      {
        nombre: "Monica Rios",
        nacionalidad: "Peru",
        deporte: "voley",
        genero: "FEMENINO"
      }
    ],
    a_masculinos: [
      {
        nombre: "Emanuel Ginobili",
        nacionalidad: "Argentina",
        deporte: "basquet",
        genero: "MASCULINO"
      },
      {
        nombre: "Fabian Cardena",
        nacionalidad: "Argentina",
        deporte: "futbol",
        genero: "MASCULINO"
      },
      {
        nombre: "Leonel Vangioni",
        nacionalidad: "Argentina",
        deporte: "futbol",
        genero: "MASCULINO"
      },
      {
        nombre: "Franco Armani",
        nacionalidad: "Argentina",
        deporte: "futbol",
        genero: "MASCULINO"
      },
      {
        nombre: "Gonzalo Martinez",
        nacionalidad: "Argentina",
        deporte: "futbol",
        genero: "MASCULINO"
      },
      {
        nombre: "Gabriel Mercado",
        nacionalidad: "Argentina",
        deporte: "futbol",
        genero: "MASCULINO"
      },
      {
        nombre: "Rafael Becker",
        nacionalidad: "Brasil",
        deporte: "golf",
        genero: "MASCULINO"
      },
      {
        nombre: "Teo Gutierrez",
        nacionalidad: "Colombia",
        deporte: "futbol",
        genero: "MASCULINO"
      },
      {
        nombre: "Diego Laborde",
        nacionalidad: "Colombia",
        deporte: "hockey",
        genero: "MASCULINO"
      },
      {
        nombre: "Federico Araujo",
        nacionalidad: "Uruguay",
        deporte: "voley",
        genero: "MASCULINO"
      },
      {
        nombre: "Federico Briano",
        nacionalidad: "Uruguay",
        deporte: "voley",
        genero: "MASCULINO"
      },
      {
        nombre: "Gast�n Bald",
        nacionalidad: "Uruguay",
        deporte: "voley",
        genero: "MASCULINO"
      },
      {
        nombre: "Pablo Rodr�guez",
        nacionalidad: "Uruguay",
        deporte: "voley",
        genero: "MASCULINO"
      }
    ],
    atletas: [
      {
        nombre: "Fabian Cardena",
        nacionalidad: "Argentina",
        deporte: "futbol",
        genero: "MASCULINO"
      },
      {
        nombre: "Leonel Vangioni",
        nacionalidad: "Argentina",
        deporte: "futbol",
        genero: "MASCULINO"
      },
      {
        nombre: "Franco Armani",
        nacionalidad: "Argentina",
        deporte: "futbol",
        genero: "MASCULINO"
      },
      {
        nombre: "Gonzalo Martinez",
        nacionalidad: "Argentina",
        deporte: "futbol",
        genero: "MASCULINO"
      },
      {
        nombre: "Emanuel Ginobili",
        nacionalidad: "Argentina",
        deporte: "basquet",
        genero: "MASCULINO"
      },
      {
        nombre: "Federico Araujo",
        nacionalidad: "Uruguay",
        deporte: "voley",
        genero: "MASCULINO"
      },
      {
        nombre: "Federico Briano",
        nacionalidad: "Uruguay",
        deporte: "voley",
        genero: "MASCULINO"
      },
      {
        nombre: "Diego Laborde",
        nacionalidad: "Colombia",
        deporte: "hockey",
        genero: "MASCULINO"
      },
      {
        nombre: "Rafael Becker",
        nacionalidad: "Brasil",
        deporte: "golf",
        genero: "MASCULINO"
      },
      {
        nombre: "Flavia Gaullo",
        nacionalidad: "Brasil",
        deporte: "basquet",
        genero: "FEMENINO"
      },
      {
        nombre: "Lidia Morales",
        nacionalidad: "Bolivia",
        deporte: "golf",
        genero: "FEMENINO"
      },
      {
        nombre: "Gabriel Mercado",
        nacionalidad: "Argentina",
        deporte: "futbol",
        genero: "MASCULINO"
      },
      {
        nombre: "Macarena Sanz",
        nacionalidad: "Argentina",
        deporte: "futbol",
        genero: "FEMENINO"
      },
      {
        nombre: "Rosangela Lopez",
        nacionalidad: "Colombia",
        deporte: "futbol",
        genero: "FEMENINO"
      },
      {
        nombre: "Analia Elaskar",
        nacionalidad: "Argentina",
        deporte: "futbol",
        genero: "FEMENINO"
      },
      {
        nombre: "Gabriela Escobar",
        nacionalidad: "Argentina",
        deporte: "futbol",
        genero: "FEMENINO"
      },
      {
        nombre: "Valentina Galiano",
        nacionalidad: "Argentina",
        deporte: "voley",
        genero: "FEMENINO"
      },
      {
        nombre: "Paola Valenzuela",
        nacionalidad: "Colombia",
        deporte: "hockey",
        genero: "FEMENINO"
      },
      {
        nombre: "Teo Gutierrez",
        nacionalidad: "Colombia",
        deporte: "futbol",
        genero: "MASCULINO"
      },
      {
        nombre: "Antonela Rios",
        nacionalidad: "Argentina",
        deporte: "futbol",
        genero: "FEMENINO"
      },
      {
        nombre: "Gast�n Bald",
        nacionalidad: "Uruguay",
        deporte: "voley",
        genero: "MASCULINO"
      },
      {
        nombre: "Pablo Rodr�guez",
        nacionalidad: "Uruguay",
        deporte: "voley",
        genero: "MASCULINO"
      },
      {
        nombre: "Monica Rios",
        nacionalidad: "Peru",
        deporte: "voley",
        genero: "FEMENINO"
      },
      {
        nombre: "Leonor Abtt",
        nacionalidad: "Peru",
        deporte: "futbol",
        genero: "FEMENINO"
      }
    ],
    optimos: [],
    descartados: [],
    optimosMasculinos: [
      false,
      true,
      true,
      true,
      true,
      false,
      false,
      false,
      false,
      true,
      true,
      true,
      true
    ],
    optimosFemeninos: [
      true,
      true,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ],
    optimizacion: 57.14285714285714
  };

  constructor() {
    console.log("servicio listo para usarse");
    this.departamentos = this.getSolver().departamentos;
  }

  getDepartamentos(): Departamento[] {
    return this.departamentos;
  }

  getDeptoAtletas(id: string) {
    return this.departamentos[id];
  }

  getSolver() {
    return this.solver;
  }

  getAtletas(): Atleta[] {
    const at: Atleta[] = [];

    for (const depto of this.departamentos) {
      for (const atleta of depto.atletas) {
        at.push(atleta);
      }
    }

    //console.log(at);
    return at;
  }

  buscarAtleta(texto: string): Atleta[] {
    const arrayRes: Atleta[] = [];
    texto = texto.toLowerCase();
    const atletas: Atleta[] = this.getAtletas();

    for (const atleta of atletas) {
      const nombre = atleta.nombre.toLowerCase();

      if (nombre.indexOf(texto) >= 0) {
        arrayRes.push(atleta);
      }
    }

    return arrayRes;
  }
}

export interface Departamento {
  atletas: Array<Atleta>;
  id: number;
  ocupados: number;
}

export interface Atleta {
  nombre: string;
  nacionalidad: string;
  deporte: string;
  genero: string;
}
