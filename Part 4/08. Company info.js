function readInfo(obj){
    let manager={}
    manager.name=obj.manager
    manager.telephone=obj.telephone
    return manager
}

const company = {
    name: "BrightTech Solutions Ltd.",
    address: "42 Innovation Street, London, UK, W1A 1AA",
    telephone: "+44 20 7946 0321",
    fax: "+44 20 7946 0322",
    website: "www.brighttechsolutions.co.uk",
    manager: "Emily Dawson"
  };

console.log(readInfo(company))