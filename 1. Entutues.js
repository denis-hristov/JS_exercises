function entities(data){
    let filtered = data.filter(item =>item.name.startsWith("build"))
    return filtered
}

const data = [
  { name: "builderOne", value: 123 },
  { name: "designer", value: 456 },
  { name: "buildTeam", value: 789 },
  { name: "architect", value: 321 }
];
console.log(entities(data))