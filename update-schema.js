"use strict";
module.exports = validate20;
module.exports.default = validate20;
const schema22 = {
  anyOf: [
    {
      type: "object",
      required: ["updateMetaData"],
      additionalProperties: false,
      properties: {
        updateMetaData: {
          type: "object",
          additionalProperties: false,
          required: ["title"],
          properties: { title: { type: "string" } },
        },
      },
    },
    {
      type: "object",
      required: ["removeWidget"],
      additionalProperties: false,
      properties: {
        removeWidget: {
          type: "object",
          additionalProperties: false,
          required: ["widgetId"],
          properties: {
            widgetId: {
              type: "string",
              maxLength: 32,
              minLength: 32,
              pattern: "^[a-f0-9]{32}$",
            },
          },
        },
      },
    },
    {
      type: "object",
      additionalProperties: false,
      required: ["addWidget"],
      properties: {
        addWidget: {
          type: "object",
          required: ["widgetId", "layout"],
          properties: {
            additionalProperties: false,
            widgetId: {
              type: "object",
              required: ["w", "h", "x", "y"],
              additionalProperties: false,
              properties: {
                w: { type: "number" },
                h: { type: "number" },
                x: { type: "number" },
                y: { type: "number" },
                isDraggable: { type: "boolean" },
                isResizable: { type: "boolean" },
                isBounded: { type: "boolean" },
              },
            },
            parameter: true,
            layout: {
              type: "object",
              minProperties: 1,
              additionalProperties: false,
              patternProperties: { "^[\\s\\S]*": true },
            },
          },
        },
      },
    },
    {
      type: "object",
      additionalProperties: false,
      required: ["updateLayouts"],
      properties: {
        updateLayouts: {
          type: "object",
          additionalProperties: false,
          minProperties: 1,
          patternProperties: {
            "^[a-f0-9]{32}$": {
              type: "object",
              additionalProperties: false,
              minProperties: 1,
              patternProperties: {
                "^[\\s\\S]*": {
                  type: "object",
                  required: ["w", "h", "x", "y"],
                  additionalProperties: false,
                  properties: {
                    w: { type: "number" },
                    h: { type: "number" },
                    x: { type: "number" },
                    y: { type: "number" },
                    isDraggable: { type: "boolean" },
                    isResizable: { type: "boolean" },
                    isBounded: { type: "boolean" },
                  },
                },
              },
            },
          },
        },
      },
    },
    {
      type: "object",
      additionalProperties: false,
      required: ["updateParameters"],
      properties: {
        updateParameters: {
          type: "object",
          additionalProperties: false,
          required: ["parameters", "dashboardWidgetId"],
          properties: {
            dashboardWidgetId: {
              type: "string",
              maxLength: 32,
              minLength: 32,
              pattern: "^[a-f0-9]{32}$",
            },
            parameters: { type: "object" },
          },
        },
      },
    },
  ],
};
const func4 = require("ajv/dist/runtime/ucs2length").default;
const pattern0 = new RegExp("^[a-f0-9]{32}$", "u");
const pattern1 = new RegExp("^[\\s\\S]*", "u");
function validate20(
  data,
  { instancePath = "", parentData, parentDataProperty, rootData = data } = {}
) {
  let vErrors = null;
  let errors = 0;
  const _errs0 = errors;
  let valid0 = false;
  const _errs1 = errors;
  if (errors === _errs1) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.updateMetaData === undefined && (missing0 = "updateMetaData")) {
        const err0 = {
          instancePath,
          schemaPath: "#/anyOf/0/required",
          keyword: "required",
          params: { missingProperty: missing0 },
          message: "must have required property '" + missing0 + "'",
        };
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      } else {
        const _errs3 = errors;
        for (const key0 in data) {
          if (!(key0 === "updateMetaData")) {
            const err1 = {
              instancePath,
              schemaPath: "#/anyOf/0/additionalProperties",
              keyword: "additionalProperties",
              params: { additionalProperty: key0 },
              message: "must NOT have additional properties",
            };
            if (vErrors === null) {
              vErrors = [err1];
            } else {
              vErrors.push(err1);
            }
            errors++;
            break;
          }
        }
        if (_errs3 === errors) {
          if (data.updateMetaData !== undefined) {
            let data0 = data.updateMetaData;
            const _errs4 = errors;
            if (errors === _errs4) {
              if (data0 && typeof data0 == "object" && !Array.isArray(data0)) {
                let missing1;
                if (data0.title === undefined && (missing1 = "title")) {
                  const err2 = {
                    instancePath: instancePath + "/updateMetaData",
                    schemaPath: "#/anyOf/0/properties/updateMetaData/required",
                    keyword: "required",
                    params: { missingProperty: missing1 },
                    message: "must have required property '" + missing1 + "'",
                  };
                  if (vErrors === null) {
                    vErrors = [err2];
                  } else {
                    vErrors.push(err2);
                  }
                  errors++;
                } else {
                  const _errs6 = errors;
                  for (const key1 in data0) {
                    if (!(key1 === "title")) {
                      const err3 = {
                        instancePath: instancePath + "/updateMetaData",
                        schemaPath:
                          "#/anyOf/0/properties/updateMetaData/additionalProperties",
                        keyword: "additionalProperties",
                        params: { additionalProperty: key1 },
                        message: "must NOT have additional properties",
                      };
                      if (vErrors === null) {
                        vErrors = [err3];
                      } else {
                        vErrors.push(err3);
                      }
                      errors++;
                      break;
                    }
                  }
                  if (_errs6 === errors) {
                    if (data0.title !== undefined) {
                      if (typeof data0.title !== "string") {
                        const err4 = {
                          instancePath: instancePath + "/updateMetaData/title",
                          schemaPath:
                            "#/anyOf/0/properties/updateMetaData/properties/title/type",
                          keyword: "type",
                          params: { type: "string" },
                          message: "must be string",
                        };
                        if (vErrors === null) {
                          vErrors = [err4];
                        } else {
                          vErrors.push(err4);
                        }
                        errors++;
                      }
                    }
                  }
                }
              } else {
                const err5 = {
                  instancePath: instancePath + "/updateMetaData",
                  schemaPath: "#/anyOf/0/properties/updateMetaData/type",
                  keyword: "type",
                  params: { type: "object" },
                  message: "must be object",
                };
                if (vErrors === null) {
                  vErrors = [err5];
                } else {
                  vErrors.push(err5);
                }
                errors++;
              }
            }
          }
        }
      }
    } else {
      const err6 = {
        instancePath,
        schemaPath: "#/anyOf/0/type",
        keyword: "type",
        params: { type: "object" },
        message: "must be object",
      };
      if (vErrors === null) {
        vErrors = [err6];
      } else {
        vErrors.push(err6);
      }
      errors++;
    }
  }
  var _valid0 = _errs1 === errors;
  valid0 = valid0 || _valid0;
  if (!valid0) {
    const _errs9 = errors;
    if (errors === _errs9) {
      if (data && typeof data == "object" && !Array.isArray(data)) {
        let missing2;
        if (data.removeWidget === undefined && (missing2 = "removeWidget")) {
          const err7 = {
            instancePath,
            schemaPath: "#/anyOf/1/required",
            keyword: "required",
            params: { missingProperty: missing2 },
            message: "must have required property '" + missing2 + "'",
          };
          if (vErrors === null) {
            vErrors = [err7];
          } else {
            vErrors.push(err7);
          }
          errors++;
        } else {
          const _errs11 = errors;
          for (const key2 in data) {
            if (!(key2 === "removeWidget")) {
              const err8 = {
                instancePath,
                schemaPath: "#/anyOf/1/additionalProperties",
                keyword: "additionalProperties",
                params: { additionalProperty: key2 },
                message: "must NOT have additional properties",
              };
              if (vErrors === null) {
                vErrors = [err8];
              } else {
                vErrors.push(err8);
              }
              errors++;
              break;
            }
          }
          if (_errs11 === errors) {
            if (data.removeWidget !== undefined) {
              let data2 = data.removeWidget;
              const _errs12 = errors;
              if (errors === _errs12) {
                if (
                  data2 &&
                  typeof data2 == "object" &&
                  !Array.isArray(data2)
                ) {
                  let missing3;
                  if (data2.widgetId === undefined && (missing3 = "widgetId")) {
                    const err9 = {
                      instancePath: instancePath + "/removeWidget",
                      schemaPath: "#/anyOf/1/properties/removeWidget/required",
                      keyword: "required",
                      params: { missingProperty: missing3 },
                      message: "must have required property '" + missing3 + "'",
                    };
                    if (vErrors === null) {
                      vErrors = [err9];
                    } else {
                      vErrors.push(err9);
                    }
                    errors++;
                  } else {
                    const _errs14 = errors;
                    for (const key3 in data2) {
                      if (!(key3 === "widgetId")) {
                        const err10 = {
                          instancePath: instancePath + "/removeWidget",
                          schemaPath:
                            "#/anyOf/1/properties/removeWidget/additionalProperties",
                          keyword: "additionalProperties",
                          params: { additionalProperty: key3 },
                          message: "must NOT have additional properties",
                        };
                        if (vErrors === null) {
                          vErrors = [err10];
                        } else {
                          vErrors.push(err10);
                        }
                        errors++;
                        break;
                      }
                    }
                    if (_errs14 === errors) {
                      if (data2.widgetId !== undefined) {
                        let data3 = data2.widgetId;
                        const _errs15 = errors;
                        if (errors === _errs15) {
                          if (typeof data3 === "string") {
                            if (func4(data3) > 32) {
                              const err11 = {
                                instancePath:
                                  instancePath + "/removeWidget/widgetId",
                                schemaPath:
                                  "#/anyOf/1/properties/removeWidget/properties/widgetId/maxLength",
                                keyword: "maxLength",
                                params: { limit: 32 },
                                message:
                                  "must NOT have more than 32 characters",
                              };
                              if (vErrors === null) {
                                vErrors = [err11];
                              } else {
                                vErrors.push(err11);
                              }
                              errors++;
                            } else {
                              if (func4(data3) < 32) {
                                const err12 = {
                                  instancePath:
                                    instancePath + "/removeWidget/widgetId",
                                  schemaPath:
                                    "#/anyOf/1/properties/removeWidget/properties/widgetId/minLength",
                                  keyword: "minLength",
                                  params: { limit: 32 },
                                  message:
                                    "must NOT have fewer than 32 characters",
                                };
                                if (vErrors === null) {
                                  vErrors = [err12];
                                } else {
                                  vErrors.push(err12);
                                }
                                errors++;
                              } else {
                                if (!pattern0.test(data3)) {
                                  const err13 = {
                                    instancePath:
                                      instancePath + "/removeWidget/widgetId",
                                    schemaPath:
                                      "#/anyOf/1/properties/removeWidget/properties/widgetId/pattern",
                                    keyword: "pattern",
                                    params: { pattern: "^[a-f0-9]{32}$" },
                                    message:
                                      'must match pattern "' +
                                      "^[a-f0-9]{32}$" +
                                      '"',
                                  };
                                  if (vErrors === null) {
                                    vErrors = [err13];
                                  } else {
                                    vErrors.push(err13);
                                  }
                                  errors++;
                                }
                              }
                            }
                          } else {
                            const err14 = {
                              instancePath:
                                instancePath + "/removeWidget/widgetId",
                              schemaPath:
                                "#/anyOf/1/properties/removeWidget/properties/widgetId/type",
                              keyword: "type",
                              params: { type: "string" },
                              message: "must be string",
                            };
                            if (vErrors === null) {
                              vErrors = [err14];
                            } else {
                              vErrors.push(err14);
                            }
                            errors++;
                          }
                        }
                      }
                    }
                  }
                } else {
                  const err15 = {
                    instancePath: instancePath + "/removeWidget",
                    schemaPath: "#/anyOf/1/properties/removeWidget/type",
                    keyword: "type",
                    params: { type: "object" },
                    message: "must be object",
                  };
                  if (vErrors === null) {
                    vErrors = [err15];
                  } else {
                    vErrors.push(err15);
                  }
                  errors++;
                }
              }
            }
          }
        }
      } else {
        const err16 = {
          instancePath,
          schemaPath: "#/anyOf/1/type",
          keyword: "type",
          params: { type: "object" },
          message: "must be object",
        };
        if (vErrors === null) {
          vErrors = [err16];
        } else {
          vErrors.push(err16);
        }
        errors++;
      }
    }
    var _valid0 = _errs9 === errors;
    valid0 = valid0 || _valid0;
    if (!valid0) {
      const _errs17 = errors;
      if (errors === _errs17) {
        if (data && typeof data == "object" && !Array.isArray(data)) {
          let missing4;
          if (data.addWidget === undefined && (missing4 = "addWidget")) {
            const err17 = {
              instancePath,
              schemaPath: "#/anyOf/2/required",
              keyword: "required",
              params: { missingProperty: missing4 },
              message: "must have required property '" + missing4 + "'",
            };
            if (vErrors === null) {
              vErrors = [err17];
            } else {
              vErrors.push(err17);
            }
            errors++;
          } else {
            const _errs19 = errors;
            for (const key4 in data) {
              if (!(key4 === "addWidget")) {
                const err18 = {
                  instancePath,
                  schemaPath: "#/anyOf/2/additionalProperties",
                  keyword: "additionalProperties",
                  params: { additionalProperty: key4 },
                  message: "must NOT have additional properties",
                };
                if (vErrors === null) {
                  vErrors = [err18];
                } else {
                  vErrors.push(err18);
                }
                errors++;
                break;
              }
            }
            if (_errs19 === errors) {
              if (data.addWidget !== undefined) {
                let data4 = data.addWidget;
                const _errs20 = errors;
                if (errors === _errs20) {
                  if (
                    data4 &&
                    typeof data4 == "object" &&
                    !Array.isArray(data4)
                  ) {
                    let missing5;
                    if (
                      (data4.widgetId === undefined &&
                        (missing5 = "widgetId")) ||
                      (data4.layout === undefined && (missing5 = "layout"))
                    ) {
                      const err19 = {
                        instancePath: instancePath + "/addWidget",
                        schemaPath: "#/anyOf/2/properties/addWidget/required",
                        keyword: "required",
                        params: { missingProperty: missing5 },
                        message:
                          "must have required property '" + missing5 + "'",
                      };
                      if (vErrors === null) {
                        vErrors = [err19];
                      } else {
                        vErrors.push(err19);
                      }
                      errors++;
                    } else {
                      if (data4.additionalProperties !== undefined) {
                        var valid6 = false;
                        const err20 = {
                          instancePath:
                            instancePath + "/addWidget/additionalProperties",
                          schemaPath:
                            "#/anyOf/2/properties/addWidget/properties/additionalProperties/false schema",
                          keyword: "false schema",
                          params: {},
                          message: "boolean schema is false",
                        };
                        if (vErrors === null) {
                          vErrors = [err20];
                        } else {
                          vErrors.push(err20);
                        }
                        errors++;
                      } else {
                        var valid6 = true;
                      }
                      if (valid6) {
                        if (data4.widgetId !== undefined) {
                          let data6 = data4.widgetId;
                          const _errs22 = errors;
                          if (errors === _errs22) {
                            if (
                              data6 &&
                              typeof data6 == "object" &&
                              !Array.isArray(data6)
                            ) {
                              let missing6;
                              if (
                                (data6.w === undefined && (missing6 = "w")) ||
                                (data6.h === undefined && (missing6 = "h")) ||
                                (data6.x === undefined && (missing6 = "x")) ||
                                (data6.y === undefined && (missing6 = "y"))
                              ) {
                                const err21 = {
                                  instancePath:
                                    instancePath + "/addWidget/widgetId",
                                  schemaPath:
                                    "#/anyOf/2/properties/addWidget/properties/widgetId/required",
                                  keyword: "required",
                                  params: { missingProperty: missing6 },
                                  message:
                                    "must have required property '" +
                                    missing6 +
                                    "'",
                                };
                                if (vErrors === null) {
                                  vErrors = [err21];
                                } else {
                                  vErrors.push(err21);
                                }
                                errors++;
                              } else {
                                const _errs24 = errors;
                                for (const key5 in data6) {
                                  if (
                                    !(
                                      key5 === "w" ||
                                      key5 === "h" ||
                                      key5 === "x" ||
                                      key5 === "y" ||
                                      key5 === "isDraggable" ||
                                      key5 === "isResizable" ||
                                      key5 === "isBounded"
                                    )
                                  ) {
                                    const err22 = {
                                      instancePath:
                                        instancePath + "/addWidget/widgetId",
                                      schemaPath:
                                        "#/anyOf/2/properties/addWidget/properties/widgetId/additionalProperties",
                                      keyword: "additionalProperties",
                                      params: { additionalProperty: key5 },
                                      message:
                                        "must NOT have additional properties",
                                    };
                                    if (vErrors === null) {
                                      vErrors = [err22];
                                    } else {
                                      vErrors.push(err22);
                                    }
                                    errors++;
                                    break;
                                  }
                                }
                                if (_errs24 === errors) {
                                  if (data6.w !== undefined) {
                                    let data7 = data6.w;
                                    const _errs25 = errors;
                                    if (
                                      !(
                                        typeof data7 == "number" &&
                                        isFinite(data7)
                                      )
                                    ) {
                                      const err23 = {
                                        instancePath:
                                          instancePath +
                                          "/addWidget/widgetId/w",
                                        schemaPath:
                                          "#/anyOf/2/properties/addWidget/properties/widgetId/properties/w/type",
                                        keyword: "type",
                                        params: { type: "number" },
                                        message: "must be number",
                                      };
                                      if (vErrors === null) {
                                        vErrors = [err23];
                                      } else {
                                        vErrors.push(err23);
                                      }
                                      errors++;
                                    }
                                    var valid7 = _errs25 === errors;
                                  } else {
                                    var valid7 = true;
                                  }
                                  if (valid7) {
                                    if (data6.h !== undefined) {
                                      let data8 = data6.h;
                                      const _errs27 = errors;
                                      if (
                                        !(
                                          typeof data8 == "number" &&
                                          isFinite(data8)
                                        )
                                      ) {
                                        const err24 = {
                                          instancePath:
                                            instancePath +
                                            "/addWidget/widgetId/h",
                                          schemaPath:
                                            "#/anyOf/2/properties/addWidget/properties/widgetId/properties/h/type",
                                          keyword: "type",
                                          params: { type: "number" },
                                          message: "must be number",
                                        };
                                        if (vErrors === null) {
                                          vErrors = [err24];
                                        } else {
                                          vErrors.push(err24);
                                        }
                                        errors++;
                                      }
                                      var valid7 = _errs27 === errors;
                                    } else {
                                      var valid7 = true;
                                    }
                                    if (valid7) {
                                      if (data6.x !== undefined) {
                                        let data9 = data6.x;
                                        const _errs29 = errors;
                                        if (
                                          !(
                                            typeof data9 == "number" &&
                                            isFinite(data9)
                                          )
                                        ) {
                                          const err25 = {
                                            instancePath:
                                              instancePath +
                                              "/addWidget/widgetId/x",
                                            schemaPath:
                                              "#/anyOf/2/properties/addWidget/properties/widgetId/properties/x/type",
                                            keyword: "type",
                                            params: { type: "number" },
                                            message: "must be number",
                                          };
                                          if (vErrors === null) {
                                            vErrors = [err25];
                                          } else {
                                            vErrors.push(err25);
                                          }
                                          errors++;
                                        }
                                        var valid7 = _errs29 === errors;
                                      } else {
                                        var valid7 = true;
                                      }
                                      if (valid7) {
                                        if (data6.y !== undefined) {
                                          let data10 = data6.y;
                                          const _errs31 = errors;
                                          if (
                                            !(
                                              typeof data10 == "number" &&
                                              isFinite(data10)
                                            )
                                          ) {
                                            const err26 = {
                                              instancePath:
                                                instancePath +
                                                "/addWidget/widgetId/y",
                                              schemaPath:
                                                "#/anyOf/2/properties/addWidget/properties/widgetId/properties/y/type",
                                              keyword: "type",
                                              params: { type: "number" },
                                              message: "must be number",
                                            };
                                            if (vErrors === null) {
                                              vErrors = [err26];
                                            } else {
                                              vErrors.push(err26);
                                            }
                                            errors++;
                                          }
                                          var valid7 = _errs31 === errors;
                                        } else {
                                          var valid7 = true;
                                        }
                                        if (valid7) {
                                          if (data6.isDraggable !== undefined) {
                                            const _errs33 = errors;
                                            if (
                                              typeof data6.isDraggable !==
                                              "boolean"
                                            ) {
                                              const err27 = {
                                                instancePath:
                                                  instancePath +
                                                  "/addWidget/widgetId/isDraggable",
                                                schemaPath:
                                                  "#/anyOf/2/properties/addWidget/properties/widgetId/properties/isDraggable/type",
                                                keyword: "type",
                                                params: { type: "boolean" },
                                                message: "must be boolean",
                                              };
                                              if (vErrors === null) {
                                                vErrors = [err27];
                                              } else {
                                                vErrors.push(err27);
                                              }
                                              errors++;
                                            }
                                            var valid7 = _errs33 === errors;
                                          } else {
                                            var valid7 = true;
                                          }
                                          if (valid7) {
                                            if (
                                              data6.isResizable !== undefined
                                            ) {
                                              const _errs35 = errors;
                                              if (
                                                typeof data6.isResizable !==
                                                "boolean"
                                              ) {
                                                const err28 = {
                                                  instancePath:
                                                    instancePath +
                                                    "/addWidget/widgetId/isResizable",
                                                  schemaPath:
                                                    "#/anyOf/2/properties/addWidget/properties/widgetId/properties/isResizable/type",
                                                  keyword: "type",
                                                  params: { type: "boolean" },
                                                  message: "must be boolean",
                                                };
                                                if (vErrors === null) {
                                                  vErrors = [err28];
                                                } else {
                                                  vErrors.push(err28);
                                                }
                                                errors++;
                                              }
                                              var valid7 = _errs35 === errors;
                                            } else {
                                              var valid7 = true;
                                            }
                                            if (valid7) {
                                              if (
                                                data6.isBounded !== undefined
                                              ) {
                                                const _errs37 = errors;
                                                if (
                                                  typeof data6.isBounded !==
                                                  "boolean"
                                                ) {
                                                  const err29 = {
                                                    instancePath:
                                                      instancePath +
                                                      "/addWidget/widgetId/isBounded",
                                                    schemaPath:
                                                      "#/anyOf/2/properties/addWidget/properties/widgetId/properties/isBounded/type",
                                                    keyword: "type",
                                                    params: { type: "boolean" },
                                                    message: "must be boolean",
                                                  };
                                                  if (vErrors === null) {
                                                    vErrors = [err29];
                                                  } else {
                                                    vErrors.push(err29);
                                                  }
                                                  errors++;
                                                }
                                                var valid7 = _errs37 === errors;
                                              } else {
                                                var valid7 = true;
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            } else {
                              const err30 = {
                                instancePath:
                                  instancePath + "/addWidget/widgetId",
                                schemaPath:
                                  "#/anyOf/2/properties/addWidget/properties/widgetId/type",
                                keyword: "type",
                                params: { type: "object" },
                                message: "must be object",
                              };
                              if (vErrors === null) {
                                vErrors = [err30];
                              } else {
                                vErrors.push(err30);
                              }
                              errors++;
                            }
                          }
                          var valid6 = _errs22 === errors;
                        } else {
                          var valid6 = true;
                        }
                        if (valid6) {
                          if (data4.layout !== undefined) {
                            let data14 = data4.layout;
                            const _errs39 = errors;
                            if (errors === _errs39) {
                              if (
                                data14 &&
                                typeof data14 == "object" &&
                                !Array.isArray(data14)
                              ) {
                                if (Object.keys(data14).length < 1) {
                                  const err31 = {
                                    instancePath:
                                      instancePath + "/addWidget/layout",
                                    schemaPath:
                                      "#/anyOf/2/properties/addWidget/properties/layout/minProperties",
                                    keyword: "minProperties",
                                    params: { limit: 1 },
                                    message:
                                      "must NOT have fewer than 1 properties",
                                  };
                                  if (vErrors === null) {
                                    vErrors = [err31];
                                  } else {
                                    vErrors.push(err31);
                                  }
                                  errors++;
                                } else {
                                  for (const key6 in data14) {
                                    if (!pattern1.test(key6)) {
                                      const err32 = {
                                        instancePath:
                                          instancePath + "/addWidget/layout",
                                        schemaPath:
                                          "#/anyOf/2/properties/addWidget/properties/layout/additionalProperties",
                                        keyword: "additionalProperties",
                                        params: { additionalProperty: key6 },
                                        message:
                                          "must NOT have additional properties",
                                      };
                                      if (vErrors === null) {
                                        vErrors = [err32];
                                      } else {
                                        vErrors.push(err32);
                                      }
                                      errors++;
                                      break;
                                    }
                                  }
                                }
                              } else {
                                const err33 = {
                                  instancePath:
                                    instancePath + "/addWidget/layout",
                                  schemaPath:
                                    "#/anyOf/2/properties/addWidget/properties/layout/type",
                                  keyword: "type",
                                  params: { type: "object" },
                                  message: "must be object",
                                };
                                if (vErrors === null) {
                                  vErrors = [err33];
                                } else {
                                  vErrors.push(err33);
                                }
                                errors++;
                              }
                            }
                            var valid6 = _errs39 === errors;
                          } else {
                            var valid6 = true;
                          }
                        }
                      }
                    }
                  } else {
                    const err34 = {
                      instancePath: instancePath + "/addWidget",
                      schemaPath: "#/anyOf/2/properties/addWidget/type",
                      keyword: "type",
                      params: { type: "object" },
                      message: "must be object",
                    };
                    if (vErrors === null) {
                      vErrors = [err34];
                    } else {
                      vErrors.push(err34);
                    }
                    errors++;
                  }
                }
              }
            }
          }
        } else {
          const err35 = {
            instancePath,
            schemaPath: "#/anyOf/2/type",
            keyword: "type",
            params: { type: "object" },
            message: "must be object",
          };
          if (vErrors === null) {
            vErrors = [err35];
          } else {
            vErrors.push(err35);
          }
          errors++;
        }
      }
      var _valid0 = _errs17 === errors;
      valid0 = valid0 || _valid0;
      if (!valid0) {
        const _errs42 = errors;
        if (errors === _errs42) {
          if (data && typeof data == "object" && !Array.isArray(data)) {
            let missing7;
            if (
              data.updateLayouts === undefined &&
              (missing7 = "updateLayouts")
            ) {
              const err36 = {
                instancePath,
                schemaPath: "#/anyOf/3/required",
                keyword: "required",
                params: { missingProperty: missing7 },
                message: "must have required property '" + missing7 + "'",
              };
              if (vErrors === null) {
                vErrors = [err36];
              } else {
                vErrors.push(err36);
              }
              errors++;
            } else {
              const _errs44 = errors;
              for (const key7 in data) {
                if (!(key7 === "updateLayouts")) {
                  const err37 = {
                    instancePath,
                    schemaPath: "#/anyOf/3/additionalProperties",
                    keyword: "additionalProperties",
                    params: { additionalProperty: key7 },
                    message: "must NOT have additional properties",
                  };
                  if (vErrors === null) {
                    vErrors = [err37];
                  } else {
                    vErrors.push(err37);
                  }
                  errors++;
                  break;
                }
              }
              if (_errs44 === errors) {
                if (data.updateLayouts !== undefined) {
                  let data15 = data.updateLayouts;
                  const _errs45 = errors;
                  if (errors === _errs45) {
                    if (
                      data15 &&
                      typeof data15 == "object" &&
                      !Array.isArray(data15)
                    ) {
                      if (Object.keys(data15).length < 1) {
                        const err38 = {
                          instancePath: instancePath + "/updateLayouts",
                          schemaPath:
                            "#/anyOf/3/properties/updateLayouts/minProperties",
                          keyword: "minProperties",
                          params: { limit: 1 },
                          message: "must NOT have fewer than 1 properties",
                        };
                        if (vErrors === null) {
                          vErrors = [err38];
                        } else {
                          vErrors.push(err38);
                        }
                        errors++;
                      } else {
                        const _errs47 = errors;
                        for (const key8 in data15) {
                          if (!pattern0.test(key8)) {
                            const err39 = {
                              instancePath: instancePath + "/updateLayouts",
                              schemaPath:
                                "#/anyOf/3/properties/updateLayouts/additionalProperties",
                              keyword: "additionalProperties",
                              params: { additionalProperty: key8 },
                              message: "must NOT have additional properties",
                            };
                            if (vErrors === null) {
                              vErrors = [err39];
                            } else {
                              vErrors.push(err39);
                            }
                            errors++;
                            break;
                          }
                        }
                        if (_errs47 === errors) {
                          var valid9 = true;
                          for (const key9 in data15) {
                            if (pattern0.test(key9)) {
                              let data16 = data15[key9];
                              const _errs48 = errors;
                              if (errors === _errs48) {
                                if (
                                  data16 &&
                                  typeof data16 == "object" &&
                                  !Array.isArray(data16)
                                ) {
                                  if (Object.keys(data16).length < 1) {
                                    const err40 = {
                                      instancePath:
                                        instancePath +
                                        "/updateLayouts/" +
                                        key9
                                          .replace(/~/g, "~0")
                                          .replace(/\//g, "~1"),
                                      schemaPath:
                                        "#/anyOf/3/properties/updateLayouts/patternProperties/%5E%5Ba-f0-9%5D%7B32%7D%24/minProperties",
                                      keyword: "minProperties",
                                      params: { limit: 1 },
                                      message:
                                        "must NOT have fewer than 1 properties",
                                    };
                                    if (vErrors === null) {
                                      vErrors = [err40];
                                    } else {
                                      vErrors.push(err40);
                                    }
                                    errors++;
                                  } else {
                                    const _errs50 = errors;
                                    for (const key10 in data16) {
                                      if (!pattern1.test(key10)) {
                                        const err41 = {
                                          instancePath:
                                            instancePath +
                                            "/updateLayouts/" +
                                            key9
                                              .replace(/~/g, "~0")
                                              .replace(/\//g, "~1"),
                                          schemaPath:
                                            "#/anyOf/3/properties/updateLayouts/patternProperties/%5E%5Ba-f0-9%5D%7B32%7D%24/additionalProperties",
                                          keyword: "additionalProperties",
                                          params: { additionalProperty: key10 },
                                          message:
                                            "must NOT have additional properties",
                                        };
                                        if (vErrors === null) {
                                          vErrors = [err41];
                                        } else {
                                          vErrors.push(err41);
                                        }
                                        errors++;
                                        break;
                                      }
                                    }
                                    if (_errs50 === errors) {
                                      var valid10 = true;
                                      for (const key11 in data16) {
                                        if (pattern1.test(key11)) {
                                          let data17 = data16[key11];
                                          const _errs51 = errors;
                                          if (errors === _errs51) {
                                            if (
                                              data17 &&
                                              typeof data17 == "object" &&
                                              !Array.isArray(data17)
                                            ) {
                                              let missing8;
                                              if (
                                                (data17.w === undefined &&
                                                  (missing8 = "w")) ||
                                                (data17.h === undefined &&
                                                  (missing8 = "h")) ||
                                                (data17.x === undefined &&
                                                  (missing8 = "x")) ||
                                                (data17.y === undefined &&
                                                  (missing8 = "y"))
                                              ) {
                                                const err42 = {
                                                  instancePath:
                                                    instancePath +
                                                    "/updateLayouts/" +
                                                    key9
                                                      .replace(/~/g, "~0")
                                                      .replace(/\//g, "~1") +
                                                    "/" +
                                                    key11
                                                      .replace(/~/g, "~0")
                                                      .replace(/\//g, "~1"),
                                                  schemaPath:
                                                    "#/anyOf/3/properties/updateLayouts/patternProperties/%5E%5Ba-f0-9%5D%7B32%7D%24/patternProperties/%5E%5B%5Cs%5CS%5D*/required",
                                                  keyword: "required",
                                                  params: {
                                                    missingProperty: missing8,
                                                  },
                                                  message:
                                                    "must have required property '" +
                                                    missing8 +
                                                    "'",
                                                };
                                                if (vErrors === null) {
                                                  vErrors = [err42];
                                                } else {
                                                  vErrors.push(err42);
                                                }
                                                errors++;
                                              } else {
                                                const _errs53 = errors;
                                                for (const key12 in data17) {
                                                  if (
                                                    !(
                                                      key12 === "w" ||
                                                      key12 === "h" ||
                                                      key12 === "x" ||
                                                      key12 === "y" ||
                                                      key12 === "isDraggable" ||
                                                      key12 === "isResizable" ||
                                                      key12 === "isBounded"
                                                    )
                                                  ) {
                                                    const err43 = {
                                                      instancePath:
                                                        instancePath +
                                                        "/updateLayouts/" +
                                                        key9
                                                          .replace(/~/g, "~0")
                                                          .replace(
                                                            /\//g,
                                                            "~1"
                                                          ) +
                                                        "/" +
                                                        key11
                                                          .replace(/~/g, "~0")
                                                          .replace(/\//g, "~1"),
                                                      schemaPath:
                                                        "#/anyOf/3/properties/updateLayouts/patternProperties/%5E%5Ba-f0-9%5D%7B32%7D%24/patternProperties/%5E%5B%5Cs%5CS%5D*/additionalProperties",
                                                      keyword:
                                                        "additionalProperties",
                                                      params: {
                                                        additionalProperty:
                                                          key12,
                                                      },
                                                      message:
                                                        "must NOT have additional properties",
                                                    };
                                                    if (vErrors === null) {
                                                      vErrors = [err43];
                                                    } else {
                                                      vErrors.push(err43);
                                                    }
                                                    errors++;
                                                    break;
                                                  }
                                                }
                                                if (_errs53 === errors) {
                                                  if (data17.w !== undefined) {
                                                    let data18 = data17.w;
                                                    const _errs54 = errors;
                                                    if (
                                                      !(
                                                        typeof data18 ==
                                                          "number" &&
                                                        isFinite(data18)
                                                      )
                                                    ) {
                                                      const err44 = {
                                                        instancePath:
                                                          instancePath +
                                                          "/updateLayouts/" +
                                                          key9
                                                            .replace(/~/g, "~0")
                                                            .replace(
                                                              /\//g,
                                                              "~1"
                                                            ) +
                                                          "/" +
                                                          key11
                                                            .replace(/~/g, "~0")
                                                            .replace(
                                                              /\//g,
                                                              "~1"
                                                            ) +
                                                          "/w",
                                                        schemaPath:
                                                          "#/anyOf/3/properties/updateLayouts/patternProperties/%5E%5Ba-f0-9%5D%7B32%7D%24/patternProperties/%5E%5B%5Cs%5CS%5D*/properties/w/type",
                                                        keyword: "type",
                                                        params: {
                                                          type: "number",
                                                        },
                                                        message:
                                                          "must be number",
                                                      };
                                                      if (vErrors === null) {
                                                        vErrors = [err44];
                                                      } else {
                                                        vErrors.push(err44);
                                                      }
                                                      errors++;
                                                    }
                                                    var valid11 =
                                                      _errs54 === errors;
                                                  } else {
                                                    var valid11 = true;
                                                  }
                                                  if (valid11) {
                                                    if (
                                                      data17.h !== undefined
                                                    ) {
                                                      let data19 = data17.h;
                                                      const _errs56 = errors;
                                                      if (
                                                        !(
                                                          typeof data19 ==
                                                            "number" &&
                                                          isFinite(data19)
                                                        )
                                                      ) {
                                                        const err45 = {
                                                          instancePath:
                                                            instancePath +
                                                            "/updateLayouts/" +
                                                            key9
                                                              .replace(
                                                                /~/g,
                                                                "~0"
                                                              )
                                                              .replace(
                                                                /\//g,
                                                                "~1"
                                                              ) +
                                                            "/" +
                                                            key11
                                                              .replace(
                                                                /~/g,
                                                                "~0"
                                                              )
                                                              .replace(
                                                                /\//g,
                                                                "~1"
                                                              ) +
                                                            "/h",
                                                          schemaPath:
                                                            "#/anyOf/3/properties/updateLayouts/patternProperties/%5E%5Ba-f0-9%5D%7B32%7D%24/patternProperties/%5E%5B%5Cs%5CS%5D*/properties/h/type",
                                                          keyword: "type",
                                                          params: {
                                                            type: "number",
                                                          },
                                                          message:
                                                            "must be number",
                                                        };
                                                        if (vErrors === null) {
                                                          vErrors = [err45];
                                                        } else {
                                                          vErrors.push(err45);
                                                        }
                                                        errors++;
                                                      }
                                                      var valid11 =
                                                        _errs56 === errors;
                                                    } else {
                                                      var valid11 = true;
                                                    }
                                                    if (valid11) {
                                                      if (
                                                        data17.x !== undefined
                                                      ) {
                                                        let data20 = data17.x;
                                                        const _errs58 = errors;
                                                        if (
                                                          !(
                                                            typeof data20 ==
                                                              "number" &&
                                                            isFinite(data20)
                                                          )
                                                        ) {
                                                          const err46 = {
                                                            instancePath:
                                                              instancePath +
                                                              "/updateLayouts/" +
                                                              key9
                                                                .replace(
                                                                  /~/g,
                                                                  "~0"
                                                                )
                                                                .replace(
                                                                  /\//g,
                                                                  "~1"
                                                                ) +
                                                              "/" +
                                                              key11
                                                                .replace(
                                                                  /~/g,
                                                                  "~0"
                                                                )
                                                                .replace(
                                                                  /\//g,
                                                                  "~1"
                                                                ) +
                                                              "/x",
                                                            schemaPath:
                                                              "#/anyOf/3/properties/updateLayouts/patternProperties/%5E%5Ba-f0-9%5D%7B32%7D%24/patternProperties/%5E%5B%5Cs%5CS%5D*/properties/x/type",
                                                            keyword: "type",
                                                            params: {
                                                              type: "number",
                                                            },
                                                            message:
                                                              "must be number",
                                                          };
                                                          if (
                                                            vErrors === null
                                                          ) {
                                                            vErrors = [err46];
                                                          } else {
                                                            vErrors.push(err46);
                                                          }
                                                          errors++;
                                                        }
                                                        var valid11 =
                                                          _errs58 === errors;
                                                      } else {
                                                        var valid11 = true;
                                                      }
                                                      if (valid11) {
                                                        if (
                                                          data17.y !== undefined
                                                        ) {
                                                          let data21 = data17.y;
                                                          const _errs60 =
                                                            errors;
                                                          if (
                                                            !(
                                                              typeof data21 ==
                                                                "number" &&
                                                              isFinite(data21)
                                                            )
                                                          ) {
                                                            const err47 = {
                                                              instancePath:
                                                                instancePath +
                                                                "/updateLayouts/" +
                                                                key9
                                                                  .replace(
                                                                    /~/g,
                                                                    "~0"
                                                                  )
                                                                  .replace(
                                                                    /\//g,
                                                                    "~1"
                                                                  ) +
                                                                "/" +
                                                                key11
                                                                  .replace(
                                                                    /~/g,
                                                                    "~0"
                                                                  )
                                                                  .replace(
                                                                    /\//g,
                                                                    "~1"
                                                                  ) +
                                                                "/y",
                                                              schemaPath:
                                                                "#/anyOf/3/properties/updateLayouts/patternProperties/%5E%5Ba-f0-9%5D%7B32%7D%24/patternProperties/%5E%5B%5Cs%5CS%5D*/properties/y/type",
                                                              keyword: "type",
                                                              params: {
                                                                type: "number",
                                                              },
                                                              message:
                                                                "must be number",
                                                            };
                                                            if (
                                                              vErrors === null
                                                            ) {
                                                              vErrors = [err47];
                                                            } else {
                                                              vErrors.push(
                                                                err47
                                                              );
                                                            }
                                                            errors++;
                                                          }
                                                          var valid11 =
                                                            _errs60 === errors;
                                                        } else {
                                                          var valid11 = true;
                                                        }
                                                        if (valid11) {
                                                          if (
                                                            data17.isDraggable !==
                                                            undefined
                                                          ) {
                                                            const _errs62 =
                                                              errors;
                                                            if (
                                                              typeof data17.isDraggable !==
                                                              "boolean"
                                                            ) {
                                                              const err48 = {
                                                                instancePath:
                                                                  instancePath +
                                                                  "/updateLayouts/" +
                                                                  key9
                                                                    .replace(
                                                                      /~/g,
                                                                      "~0"
                                                                    )
                                                                    .replace(
                                                                      /\//g,
                                                                      "~1"
                                                                    ) +
                                                                  "/" +
                                                                  key11
                                                                    .replace(
                                                                      /~/g,
                                                                      "~0"
                                                                    )
                                                                    .replace(
                                                                      /\//g,
                                                                      "~1"
                                                                    ) +
                                                                  "/isDraggable",
                                                                schemaPath:
                                                                  "#/anyOf/3/properties/updateLayouts/patternProperties/%5E%5Ba-f0-9%5D%7B32%7D%24/patternProperties/%5E%5B%5Cs%5CS%5D*/properties/isDraggable/type",
                                                                keyword: "type",
                                                                params: {
                                                                  type: "boolean",
                                                                },
                                                                message:
                                                                  "must be boolean",
                                                              };
                                                              if (
                                                                vErrors === null
                                                              ) {
                                                                vErrors = [
                                                                  err48,
                                                                ];
                                                              } else {
                                                                vErrors.push(
                                                                  err48
                                                                );
                                                              }
                                                              errors++;
                                                            }
                                                            var valid11 =
                                                              _errs62 ===
                                                              errors;
                                                          } else {
                                                            var valid11 = true;
                                                          }
                                                          if (valid11) {
                                                            if (
                                                              data17.isResizable !==
                                                              undefined
                                                            ) {
                                                              const _errs64 =
                                                                errors;
                                                              if (
                                                                typeof data17.isResizable !==
                                                                "boolean"
                                                              ) {
                                                                const err49 = {
                                                                  instancePath:
                                                                    instancePath +
                                                                    "/updateLayouts/" +
                                                                    key9
                                                                      .replace(
                                                                        /~/g,
                                                                        "~0"
                                                                      )
                                                                      .replace(
                                                                        /\//g,
                                                                        "~1"
                                                                      ) +
                                                                    "/" +
                                                                    key11
                                                                      .replace(
                                                                        /~/g,
                                                                        "~0"
                                                                      )
                                                                      .replace(
                                                                        /\//g,
                                                                        "~1"
                                                                      ) +
                                                                    "/isResizable",
                                                                  schemaPath:
                                                                    "#/anyOf/3/properties/updateLayouts/patternProperties/%5E%5Ba-f0-9%5D%7B32%7D%24/patternProperties/%5E%5B%5Cs%5CS%5D*/properties/isResizable/type",
                                                                  keyword:
                                                                    "type",
                                                                  params: {
                                                                    type: "boolean",
                                                                  },
                                                                  message:
                                                                    "must be boolean",
                                                                };
                                                                if (
                                                                  vErrors ===
                                                                  null
                                                                ) {
                                                                  vErrors = [
                                                                    err49,
                                                                  ];
                                                                } else {
                                                                  vErrors.push(
                                                                    err49
                                                                  );
                                                                }
                                                                errors++;
                                                              }
                                                              var valid11 =
                                                                _errs64 ===
                                                                errors;
                                                            } else {
                                                              var valid11 = true;
                                                            }
                                                            if (valid11) {
                                                              if (
                                                                data17.isBounded !==
                                                                undefined
                                                              ) {
                                                                const _errs66 =
                                                                  errors;
                                                                if (
                                                                  typeof data17.isBounded !==
                                                                  "boolean"
                                                                ) {
                                                                  const err50 =
                                                                    {
                                                                      instancePath:
                                                                        instancePath +
                                                                        "/updateLayouts/" +
                                                                        key9
                                                                          .replace(
                                                                            /~/g,
                                                                            "~0"
                                                                          )
                                                                          .replace(
                                                                            /\//g,
                                                                            "~1"
                                                                          ) +
                                                                        "/" +
                                                                        key11
                                                                          .replace(
                                                                            /~/g,
                                                                            "~0"
                                                                          )
                                                                          .replace(
                                                                            /\//g,
                                                                            "~1"
                                                                          ) +
                                                                        "/isBounded",
                                                                      schemaPath:
                                                                        "#/anyOf/3/properties/updateLayouts/patternProperties/%5E%5Ba-f0-9%5D%7B32%7D%24/patternProperties/%5E%5B%5Cs%5CS%5D*/properties/isBounded/type",
                                                                      keyword:
                                                                        "type",
                                                                      params: {
                                                                        type: "boolean",
                                                                      },
                                                                      message:
                                                                        "must be boolean",
                                                                    };
                                                                  if (
                                                                    vErrors ===
                                                                    null
                                                                  ) {
                                                                    vErrors = [
                                                                      err50,
                                                                    ];
                                                                  } else {
                                                                    vErrors.push(
                                                                      err50
                                                                    );
                                                                  }
                                                                  errors++;
                                                                }
                                                                var valid11 =
                                                                  _errs66 ===
                                                                  errors;
                                                              } else {
                                                                var valid11 = true;
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            } else {
                                              const err51 = {
                                                instancePath:
                                                  instancePath +
                                                  "/updateLayouts/" +
                                                  key9
                                                    .replace(/~/g, "~0")
                                                    .replace(/\//g, "~1") +
                                                  "/" +
                                                  key11
                                                    .replace(/~/g, "~0")
                                                    .replace(/\//g, "~1"),
                                                schemaPath:
                                                  "#/anyOf/3/properties/updateLayouts/patternProperties/%5E%5Ba-f0-9%5D%7B32%7D%24/patternProperties/%5E%5B%5Cs%5CS%5D*/type",
                                                keyword: "type",
                                                params: { type: "object" },
                                                message: "must be object",
                                              };
                                              if (vErrors === null) {
                                                vErrors = [err51];
                                              } else {
                                                vErrors.push(err51);
                                              }
                                              errors++;
                                            }
                                          }
                                          var valid10 = _errs51 === errors;
                                          if (!valid10) {
                                            break;
                                          }
                                        }
                                      }
                                    }
                                  }
                                } else {
                                  const err52 = {
                                    instancePath:
                                      instancePath +
                                      "/updateLayouts/" +
                                      key9
                                        .replace(/~/g, "~0")
                                        .replace(/\//g, "~1"),
                                    schemaPath:
                                      "#/anyOf/3/properties/updateLayouts/patternProperties/%5E%5Ba-f0-9%5D%7B32%7D%24/type",
                                    keyword: "type",
                                    params: { type: "object" },
                                    message: "must be object",
                                  };
                                  if (vErrors === null) {
                                    vErrors = [err52];
                                  } else {
                                    vErrors.push(err52);
                                  }
                                  errors++;
                                }
                              }
                              var valid9 = _errs48 === errors;
                              if (!valid9) {
                                break;
                              }
                            }
                          }
                        }
                      }
                    } else {
                      const err53 = {
                        instancePath: instancePath + "/updateLayouts",
                        schemaPath: "#/anyOf/3/properties/updateLayouts/type",
                        keyword: "type",
                        params: { type: "object" },
                        message: "must be object",
                      };
                      if (vErrors === null) {
                        vErrors = [err53];
                      } else {
                        vErrors.push(err53);
                      }
                      errors++;
                    }
                  }
                }
              }
            }
          } else {
            const err54 = {
              instancePath,
              schemaPath: "#/anyOf/3/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object",
            };
            if (vErrors === null) {
              vErrors = [err54];
            } else {
              vErrors.push(err54);
            }
            errors++;
          }
        }
        var _valid0 = _errs42 === errors;
        valid0 = valid0 || _valid0;
        if (!valid0) {
          const _errs68 = errors;
          if (errors === _errs68) {
            if (data && typeof data == "object" && !Array.isArray(data)) {
              let missing9;
              if (
                data.updateParameters === undefined &&
                (missing9 = "updateParameters")
              ) {
                const err55 = {
                  instancePath,
                  schemaPath: "#/anyOf/4/required",
                  keyword: "required",
                  params: { missingProperty: missing9 },
                  message: "must have required property '" + missing9 + "'",
                };
                if (vErrors === null) {
                  vErrors = [err55];
                } else {
                  vErrors.push(err55);
                }
                errors++;
              } else {
                const _errs70 = errors;
                for (const key13 in data) {
                  if (!(key13 === "updateParameters")) {
                    const err56 = {
                      instancePath,
                      schemaPath: "#/anyOf/4/additionalProperties",
                      keyword: "additionalProperties",
                      params: { additionalProperty: key13 },
                      message: "must NOT have additional properties",
                    };
                    if (vErrors === null) {
                      vErrors = [err56];
                    } else {
                      vErrors.push(err56);
                    }
                    errors++;
                    break;
                  }
                }
                if (_errs70 === errors) {
                  if (data.updateParameters !== undefined) {
                    let data25 = data.updateParameters;
                    const _errs71 = errors;
                    if (errors === _errs71) {
                      if (
                        data25 &&
                        typeof data25 == "object" &&
                        !Array.isArray(data25)
                      ) {
                        let missing10;
                        if (
                          (data25.parameters === undefined &&
                            (missing10 = "parameters")) ||
                          (data25.dashboardWidgetId === undefined &&
                            (missing10 = "dashboardWidgetId"))
                        ) {
                          const err57 = {
                            instancePath: instancePath + "/updateParameters",
                            schemaPath:
                              "#/anyOf/4/properties/updateParameters/required",
                            keyword: "required",
                            params: { missingProperty: missing10 },
                            message:
                              "must have required property '" + missing10 + "'",
                          };
                          if (vErrors === null) {
                            vErrors = [err57];
                          } else {
                            vErrors.push(err57);
                          }
                          errors++;
                        } else {
                          const _errs73 = errors;
                          for (const key14 in data25) {
                            if (
                              !(
                                key14 === "dashboardWidgetId" ||
                                key14 === "parameters"
                              )
                            ) {
                              const err58 = {
                                instancePath:
                                  instancePath + "/updateParameters",
                                schemaPath:
                                  "#/anyOf/4/properties/updateParameters/additionalProperties",
                                keyword: "additionalProperties",
                                params: { additionalProperty: key14 },
                                message: "must NOT have additional properties",
                              };
                              if (vErrors === null) {
                                vErrors = [err58];
                              } else {
                                vErrors.push(err58);
                              }
                              errors++;
                              break;
                            }
                          }
                          if (_errs73 === errors) {
                            if (data25.dashboardWidgetId !== undefined) {
                              let data26 = data25.dashboardWidgetId;
                              const _errs74 = errors;
                              if (errors === _errs74) {
                                if (typeof data26 === "string") {
                                  if (func4(data26) > 32) {
                                    const err59 = {
                                      instancePath:
                                        instancePath +
                                        "/updateParameters/dashboardWidgetId",
                                      schemaPath:
                                        "#/anyOf/4/properties/updateParameters/properties/dashboardWidgetId/maxLength",
                                      keyword: "maxLength",
                                      params: { limit: 32 },
                                      message:
                                        "must NOT have more than 32 characters",
                                    };
                                    if (vErrors === null) {
                                      vErrors = [err59];
                                    } else {
                                      vErrors.push(err59);
                                    }
                                    errors++;
                                  } else {
                                    if (func4(data26) < 32) {
                                      const err60 = {
                                        instancePath:
                                          instancePath +
                                          "/updateParameters/dashboardWidgetId",
                                        schemaPath:
                                          "#/anyOf/4/properties/updateParameters/properties/dashboardWidgetId/minLength",
                                        keyword: "minLength",
                                        params: { limit: 32 },
                                        message:
                                          "must NOT have fewer than 32 characters",
                                      };
                                      if (vErrors === null) {
                                        vErrors = [err60];
                                      } else {
                                        vErrors.push(err60);
                                      }
                                      errors++;
                                    } else {
                                      if (!pattern0.test(data26)) {
                                        const err61 = {
                                          instancePath:
                                            instancePath +
                                            "/updateParameters/dashboardWidgetId",
                                          schemaPath:
                                            "#/anyOf/4/properties/updateParameters/properties/dashboardWidgetId/pattern",
                                          keyword: "pattern",
                                          params: { pattern: "^[a-f0-9]{32}$" },
                                          message:
                                            'must match pattern "' +
                                            "^[a-f0-9]{32}$" +
                                            '"',
                                        };
                                        if (vErrors === null) {
                                          vErrors = [err61];
                                        } else {
                                          vErrors.push(err61);
                                        }
                                        errors++;
                                      }
                                    }
                                  }
                                } else {
                                  const err62 = {
                                    instancePath:
                                      instancePath +
                                      "/updateParameters/dashboardWidgetId",
                                    schemaPath:
                                      "#/anyOf/4/properties/updateParameters/properties/dashboardWidgetId/type",
                                    keyword: "type",
                                    params: { type: "string" },
                                    message: "must be string",
                                  };
                                  if (vErrors === null) {
                                    vErrors = [err62];
                                  } else {
                                    vErrors.push(err62);
                                  }
                                  errors++;
                                }
                              }
                              var valid13 = _errs74 === errors;
                            } else {
                              var valid13 = true;
                            }
                            if (valid13) {
                              if (data25.parameters !== undefined) {
                                let data27 = data25.parameters;
                                const _errs76 = errors;
                                if (
                                  !(
                                    data27 &&
                                    typeof data27 == "object" &&
                                    !Array.isArray(data27)
                                  )
                                ) {
                                  const err63 = {
                                    instancePath:
                                      instancePath +
                                      "/updateParameters/parameters",
                                    schemaPath:
                                      "#/anyOf/4/properties/updateParameters/properties/parameters/type",
                                    keyword: "type",
                                    params: { type: "object" },
                                    message: "must be object",
                                  };
                                  if (vErrors === null) {
                                    vErrors = [err63];
                                  } else {
                                    vErrors.push(err63);
                                  }
                                  errors++;
                                }
                                var valid13 = _errs76 === errors;
                              } else {
                                var valid13 = true;
                              }
                            }
                          }
                        }
                      } else {
                        const err64 = {
                          instancePath: instancePath + "/updateParameters",
                          schemaPath:
                            "#/anyOf/4/properties/updateParameters/type",
                          keyword: "type",
                          params: { type: "object" },
                          message: "must be object",
                        };
                        if (vErrors === null) {
                          vErrors = [err64];
                        } else {
                          vErrors.push(err64);
                        }
                        errors++;
                      }
                    }
                  }
                }
              }
            } else {
              const err65 = {
                instancePath,
                schemaPath: "#/anyOf/4/type",
                keyword: "type",
                params: { type: "object" },
                message: "must be object",
              };
              if (vErrors === null) {
                vErrors = [err65];
              } else {
                vErrors.push(err65);
              }
              errors++;
            }
          }
          var _valid0 = _errs68 === errors;
          valid0 = valid0 || _valid0;
        }
      }
    }
  }
  if (!valid0) {
    const err66 = {
      instancePath,
      schemaPath: "#/anyOf",
      keyword: "anyOf",
      params: {},
      message: "must match a schema in anyOf",
    };
    if (vErrors === null) {
      vErrors = [err66];
    } else {
      vErrors.push(err66);
    }
    errors++;
    validate20.errors = vErrors;
    return false;
  } else {
    errors = _errs0;
    if (vErrors !== null) {
      if (_errs0) {
        vErrors.length = _errs0;
      } else {
        vErrors = null;
      }
    }
  }
  validate20.errors = vErrors;
  return errors === 0;
}
