function entitiesOfJson(data){
    let field = data.schema.fields.find(f =>
    f.properties?.InterfaceMap?.RecordEssentials?.name === true)
    if(!field)return []
    return data.data.map(record=>record[field.objectName])
}

const data = {
  "base": "recordSetA",
  "schema": {
    "fields": [
      {
        "fieldName": "displayName",
        "objectName": "name",
        "properties": {
          "InterfaceMap": {
            "RecordEssentials": {
              "name": true
            }
          }
        }
      },
      {
        "fieldName": "code",
        "objectName": "codeName",
        "properties": {
          "InterfaceMap": {}
        }
      }
    ]
  },
  "data": [
    {
      "name": "Builder Snippet Presets - Data Variables",
      "codeName": "bsp_data_var"
    },
    {
      "name": "Expression Function Argument Types",
      "codeName": "expr_func_arg"
    }
  ]
}

console.log(entitiesOfJson(data))