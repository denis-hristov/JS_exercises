function entities(data){
    let filtered = data.map(item => item.distinct)
    return filtered
}

const data = [
  { name: "builderOne", value: 123, distinct: 434},
  { name: "designer", value: 456, distinct: 356},
  { name: "buildTeam", value: 789 , distinct: 323},
  { name: "architect", value: 321 , distinct: 676}
];
console.log(entities(data))