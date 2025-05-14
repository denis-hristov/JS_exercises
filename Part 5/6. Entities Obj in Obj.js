function groupData(data) {
  let result = {}
  const records = data.Core

  for (let record of records) {
    const domains = record.fields.Domain

    for (let d of domains) {
      const domainName = d.name

      if (!result[domainName])
        result[domainName] = {}

      result[domainName]=record
    }
  }

  return result
}

const data = {
  Core: [
    {
      uuid: "0001",
      fields: {
        Name: "Record A",
        Domain: [
          { name: "Core", id: "001" }
        ]
      }
    },
    {
      uuid: "0002",
      fields: {
        Name: "Record B",
        Domain: [
          { name: "Admin", id: "002" }
        ]
      }
    },
    {
      uuid: "0003",
      fields: {
        Name: "Record C",
        Domain: [
          { name: "Core", id: "001" }
        ]
      }
    }
  ]
};

console.log(groupData(data));