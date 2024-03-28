import { CarModels } from "../interfaces/consumerInterfaces";

export const getCarModels = async (): Promise<CarModels[]> => {
    try {
        const response = await fetch('http://localhost:8080/modelos/getmodelosnames');
        if (!response.ok) {
            throw new Error('Error al obtener modelos de coches');
        }
        return await response.json();
    } catch (error) {
        console.error('Error al obtener modelos de coches:', error);
        return [];
    }
}