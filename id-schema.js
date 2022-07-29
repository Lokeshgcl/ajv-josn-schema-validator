"use strict";
module.exports = validate20;
module.exports.default = validate20;
const schema22 = {
  type: "object",
  required: ["id"],
  properties: {
    id: {
      type: "string",
      maxLength: 32,
      minLength: 32,
      pattern: "^[a-f0-9]{32}$",
    },
  },
};
const func4 = require("ajv/dist/runtime/ucs2length").default;
const pattern0 = new RegExp("^[a-f0-9]{32}$", "u");
function validate20(
  data,
  { instancePath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.id === undefined && (missing0 = "id")) {
        validate20.errors = [
          {
            instancePath,
            schemaPath: "#/required",
            keyword: "required",
            params: { missingProperty: missing0 },
            message: "must have required property '" + missing0 + "'",
          },
        ];
        return false;
      } else {
        if (data.id !== undefined) {
          let data0 = data.id;
          const _errs1 = errors;
          if (errors === _errs1) {
            if (typeof data0 === "string") {
              if (func4(data0) > 32) {
                validate20.errors = [
                  {
                    instancePath: instancePath + "/id",
                    schemaPath: "#/properties/id/maxLength",
                    keyword: "maxLength",
                    params: { limit: 32 },
                    message: "must NOT have more than 32 characters",
                  },
                ];
                return false;
              } else {
                if (func4(data0) < 32) {
                  validate20.errors = [
                    {
                      instancePath: instancePath + "/id",
                      schemaPath: "#/properties/id/minLength",
                      keyword: "minLength",
                      params: { limit: 32 },
                      message: "must NOT have fewer than 32 characters",
                    },
                  ];
                  return false;
                } else {
                  if (!pattern0.test(data0)) {
                    validate20.errors = [
                      {
                        instancePath: instancePath + "/id",
                        schemaPath: "#/properties/id/pattern",
                        keyword: "pattern",
                        params: { pattern: "^[a-f0-9]{32}$" },
                        message:
                          'must match pattern "' + "^[a-f0-9]{32}$" + '"',
                      },
                    ];
                    return false;
                  }
                }
              }
            } else {
              validate20.errors = [
                {
                  instancePath: instancePath + "/id",
                  schemaPath: "#/properties/id/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string",
                },
              ];
              return false;
            }
          }
        }
      }
    } else {
      validate20.errors = [
        {
          instancePath,
          schemaPath: "#/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
        },
      ];
      return false;
    }
  }
  validate20.errors = vErrors;
  return errors === 0;
}
