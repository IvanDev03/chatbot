export interface CarModels {
    id: number,
    name: string
}

export interface Equipment {
    id: number,
    nombreEquipamiento: string,
    descripcion: string
}

export interface CarPropertie {
    id: number,
    idModelo: number,
    longitud: string,
    ancho: string,
    altura: string,
    color: string,
    pesoBruto: string,
    traccion: string
}