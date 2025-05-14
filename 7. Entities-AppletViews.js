function mergeEntities(manifest, schema, data){
    const baseName = manifest.base
    const includedName = manifest.includes[0]
    const baseRecords = data[baseName]
    const includedRecords = data[includedName]

    const includeSchema = schema.includes.find(inc=>inc.objectName === includedName)
    const linkField = includeSchema.fields.find(f=>
        f.properties?.Relationships?.entityObjectName === baseName
    )

    if(!linkField)return []
    const linkKey = linkField.fieldName


    const baseMap={}
    for(let naseRec in baseRecords)
        baseMap[baseRecords.uuid]=baseRecords.fields


    const merged=includedRecords.map(included=>{
        const refId=included.fields[linkKey]
        const baseFieIds =baseMap[refId]||{}
        return{
            ...included,
            fields:{
                ...baseFieIds,
                ...included.fields
            }
        }
    })

    return merged
}


const manifest = {
  base: "Products",
  includes: ["Prices"]
};


const schema = {
  includes: [
    {
      objectName: "Prices",
      fields: [
        {
          fieldName: "productUuid",
          properties: {
            Relationships: {
              entityObjectName: "Products" // това указва връзката към base
            }
          }
        }
      ]
    }
  ]
};

const data = {
  Products: [
    {
      uuid: "p1",
      fields: { name: "Laptop", category: "Electronics" }
    },
    {
      uuid: "p2",
      fields: { name: "Desk", category: "Furniture" }
    }
  ],
  Prices: [
    {
      uuid: "price1",
      fields: { productUuid: "p1", amount: 1200 }
    },
    {
      uuid: "price2",
      fields: { productUuid: "p2", amount: 300 }
    }
  ]
};

console.log(mergeEntities(manifest, schema, data))