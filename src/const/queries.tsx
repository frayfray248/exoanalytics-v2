export default {
    PLANET_COUNT_BY_YEAR : "SELECT+disc_year,+COUNT(*)+AS+planet_count+FROM+ps+WHERE+disc_year+IS+NOT+NULL+GROUP+BY+disc_year+ORDER+BY+disc_year+ASC",
    PLANET_COLUMN_NAMES : "SELECT+column_name,description,datatype+FROM+tap_schema.columns+WHERE+TABLE_NAME+like+%27ps%27",
    PLANET_NUMBER_COLUMN_NAMES : "SELECT+column_name,description,datatype+FROM+tap_schema.columns+WHERE+TABLE_NAME+like+%27ps%27+AND+datatype+IN+(%27int%27,+%27double%27)",
    PLANET_DATA : "SELECT+*+FROM+ps",
}