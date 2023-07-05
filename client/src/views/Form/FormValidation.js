export const validateForm = (data) => {
    const errors = {};

    if (!data.name.trim() || !/^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$/.test(data.name) || data.name.length < 3) {
        errors.name = "The name must not contain special characters and must be longer than two characters.";
    }

    if (!data.difficulty) {
        errors.difficulty = "You must select a difficulty level";
    }

    if (!data.season.trim()) {
        errors.season = "You must select a season of the year";
    }

    if (data.countries.length < 1) {
        errors.countries = "You must select a country to associate it to the activity";
    }

    return errors;
}