import { CarModels, CarPropertie, Equipment } from "../interfaces/consumerInterfaces";

export const getCarModels = async (): Promise<CarModels[]> => {
    try {
        const response = await fetch('http://localhost:8080/modelos/get-modelos-names');
        if (!response.ok) {
            throw new Error('Error al obtener modelos de coches');
        }
        return await response.json();
    } catch (error) {
        console.error('Error al obtener modelos de coches:', error);
        return [];
    }
}

export const getEquipmentList = async (): Promise<Equipment[]> => {
    try {
        const response = await fetch('http://localhost:8080/equipamiento/get-equipamientos');
        if (!response.ok) {
            throw new Error('Error al obtener modelos de coches');
        }
        return await response.json();
    } catch (error) {
        console.error('Error al obtener equipamientos: ', error);
        return [];
    }
}

export const getPropertiesByModel = async (model: number) : Promise<CarPropertie> => {
    try {
        const response = await fetch(`http://localhost:8080/propiedades/get-propiedades-by-id/${model}`);
        if (!response.ok) {
            throw new Error('Error al obtener propiedades de coches');
        }
        return await response.json();
    } catch (error) {
        console.error(`Error al obtener propiedades del modelo ${model}: `, error);
        return {} as CarPropertie;
    }
}

export const getEquipmentById = async (id: number): Promise<Equipment> => {
    try {
        const response = await fetch(`http://localhost:8080/equipamiento/get-equipamiento-by-id/${id}`);
        if (!response.ok) {
            throw new Error('Error al obtener modelos de coches');
        }
        return await response.json();
    } catch (error) {
        console.error('Error al obtener equipamientos: ', error);
        return {} as Equipment;
    }
}