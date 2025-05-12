function extractText(html) {
    return html.replace(/<[^>]*>/g, '').trim()
}

const html = `
  <div class="container">
    <h1>Hello <span>World</span></h1>
    <p>This is <a href="#">a link</a>.</p>
  </div>`

console.log(extractText(html))