const prepareSqlFields = (fields) => fields.join(',');

const mapDataToField = (fields, data) => fields.map((v) => data[v]).join('","');

export { prepareSqlFields, mapDataToField };
