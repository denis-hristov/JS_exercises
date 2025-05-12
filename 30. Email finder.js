function emailFinder(text) {
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g
    const matches = text.match(emailRegex)
    return matches || []
  }  

const text = "Please contact us by phone ( +359 999 999 999 ) or by email at example@abv.bg or at baj.ivan@yahoo.co.uk. This is not email: test@test. This also: @abv.bg. Neither this: a@a.b."
console.log(emailFinder(text))