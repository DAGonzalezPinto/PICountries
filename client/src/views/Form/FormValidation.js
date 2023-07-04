export const validateForm = (data) => {
    const errors = {};

    if (!data.name.trim() || !/^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$/.test(data.name) || data.name.length <= 3) {
        errors.name = 'El nombre no debe contener caracteres especiales y debe tener más de dos caracteres.';
    }

    if (!data.difficulty) {
        errors.difficulty = 'Debes seleccionar un nivel de dificultad.';
    }

    if (!data.season.trim()) {
        errors.season = 'Debes seleccionar alguna estación del año.';
    }

    if (data.countries.length < 1) {
        errors.countries = 'Debes seleccionar al menos un país.';
    }

    return errors;
}