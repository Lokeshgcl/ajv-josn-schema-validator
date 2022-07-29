const validateIdSchema = require("./id-schema");
const validateUpdateSchema = require("./update-schema");
const idSchema = {
  id: "1234678901234567890123456789012",
};

const updateSchema = {
  updateMetaData: {
    title: "updated title",
  },
};

console.time("validate time");
const result = validateIdSchema(idSchema);
const resultu = validateUpdateSchema(updateSchema);
console.timeEnd("validate time");
console.log("validation result " + result + " " + resultu);
console.log("errors - " + JSON.stringify(validateIdSchema.errors));
